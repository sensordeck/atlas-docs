---
title: Sensor Synchronization
sidebar_label: Sensor Synchronization
---

# Sensor Synchronization

### Establishing Time Authority for Multi-Sensor Robotics Systems

Modern robotics systems rely on multiple perception sensors operating simultaneously:

- cameras
- LiDAR
- IMU
- GNSS
- radar

For perception, localization, and SLAM algorithms to work correctly, these sensors must share a **consistent timing reference**.

Atlas establishes a **deterministic timing authority for the robot's perception sensor domain**.

Instead of allowing each sensor to operate on independent internal clocks, Atlas introduces a **hardware synchronization boundary** that aligns sensor events before data enters the robot compute stack.

This dramatically improves cross-sensor consistency and simplifies multi-sensor integration.

Atlas defines the **timing authority for the robot's perception sensor domain**.  
Robot control systems such as motor controllers or wheel encoders typically operate in a separate control timing domain and are outside the synchronization boundary managed by Atlas.

---

## Why Sensor Synchronization Matters

Without synchronization, sensor timestamps drift relative to each other.

Typical problems include:

- camera frames misaligned with LiDAR scans  
- IMU readings offset from perception frames  
- GNSS timestamps inconsistent with localization pipelines  
- degraded SLAM accuracy  
- difficult debugging of perception edge cases  

These problems often appear as:

- localization drift  
- unstable sensor fusion  
- inconsistent replay results  
- non-deterministic behavior between runs  

Atlas addresses this by establishing a **single timing authority for the sensor infrastructure**.

---

## Sensor Timing Integration Model

Atlas is designed to operate across heterogeneous sensor stacks with different timing capabilities.

Not all sensors support deterministic timing control. Atlas accommodates this by providing multiple levels of timing integration.

### Timing Integration Levels

• **Hardware-triggered sensors**  
Deterministic timing control via PPS or trigger signals  
→ Exact capture alignment under Atlas time authority  

• **Signal-exposed sensors**  
Timing alignment via hardware event capture (e.g. data-ready, sync signals)  
→ High-confidence alignment through event correlation  

• **USB and network-based sensors**  
No direct timing control at the device level  
→ System-level timing correlation and observability via DSIL SDK

---

Atlas ensures that all sensors participate in a **unified system time model**, even when device-level control is not available.

This allows robotics systems to achieve:

• deterministic timing where supported  
• measurable and correctable timing where not  
• full observability across the entire perception stack  

---

## Atlas Timing Architecture

Atlas introduces a **hardware timing layer** between sensors and the compute platform.

<p align="center">
  <img src="/img/Fig 16.png" width="60%" alt="Atlas timing architecture" />
</p>

Atlas becomes the **timing distribution hub** for the robot sensor infrastructure.

It can ingest external timing references such as:

- GNSS PPS  
- system master clock  
- external synchronization controller  

Atlas then redistributes synchronization signals to connected sensors, creating a **shared timing reference** across all devices.

---

## Hardware Timing Boundary

Atlas introduces a deterministic timing boundary:

- sensors operate in their native timing domain  
- Atlas captures precise timing events in hardware  
- timing relationships are preserved and made observable  

This ensures that all downstream data can be aligned to a common reference.

---

## Mechanics of Synchronization

DSIL performs timestamp correction in software using hardware timing events captured by Atlas.

It applies a dynamic offset that maps:

- raw sensor arrival time  
→ to  
- Atlas hardware-captured synchronization event  

---

## Design Principle: Non-Intrusive Synchronization

Atlas does not modify sensor firmware or internal clocks.

This ensures compatibility with:

- standard UVC cameras  
- serial sensors  
- LiDAR drivers  
- existing ROS2 drivers  

Atlas operates alongside existing drivers rather than replacing them.

---

## What This Enables

With deterministic timestamp alignment:

- multi-sensor fusion becomes reliable  
- timing jitter becomes measurable and correctable  
- system behavior becomes observable  
- debugging synchronization issues becomes tractable  

Atlas converts timing from a hidden problem into a **visible system property**.

---

# Timing Interfaces

Atlas provides dedicated hardware interfaces for synchronization.

| Interface | Direction | Purpose |
|----------|----------|---------|
| PPS_IN | Input | External time reference |
| PPS_OUT | Output | Standard PPS distribution |
| SYNC_OUT | Output | Sensor synchronization signal |
| TRIGGER_OUT | Output | Frame capture trigger |

These signals allow Atlas to coordinate sensor sampling events.

---

# Electrical and Deployment Considerations

Atlas synchronization interfaces are designed to provide deterministic timing signals while maintaining a clear electrical boundary for the reference platform.

The Atlas reference hardware defines a **3.3V logic timing domain** for synchronization signals. This applies to the PPS and trigger interfaces used by the Atlas timing engine.

Higher-voltage industrial trigger standards or differential signaling interfaces are **not directly supported by the Atlas reference platform**. These requirements are addressed through the Atlas **white-label OEM integration program**, where synchronization interfaces can be adapted to match the electrical characteristics of the target sensor stack.

This separation keeps the reference Atlas platform safe, predictable, and easy to integrate while allowing production deployments to tailor synchronization interfaces to real-world sensor requirements.

---

## Signal Electrical Specs

Atlas reference synchronization signals operate using **3.3V logic-level interfaces**.

| Signal | Reference Platform Level | Standard Support in Atlas v1.0 | Notes |
|------|------|------|------|
| PPS_IN | 3.3V logic | Yes | External timing input for Atlas timing engine |
| PPS_OUT | 3.3V logic | Yes | Standard PPS distribution to sensors |
| SYNC_OUT | 3.3V logic | Yes | Sensor synchronization signal |
| TRIGGER_OUT | 3.3V logic | Yes | Frame capture trigger output |
| 5V trigger interfaces | Not native | No | Requires OEM interface adaptation |
| 12V industrial trigger | Not native | No | Do not connect directly to Atlas reference I/O |
| Differential sync (RS-422 / LVDS) | Not native | No | Requires OEM interface design |

Atlas synchronization I/O should be treated as **3.3V logic timing signals only**.

Industrial trigger standards such as **5V, 12V, or differential synchronization interfaces** must not be connected directly to the Atlas reference hardware without appropriate signal conditioning.

---

## Output Drive and Loading Guidance

Atlas timing outputs are designed as **logic timing signals**, not as power outputs.

PPS_OUT, SYNC_OUT, and TRIGGER_OUT are intended to drive **high-impedance sensor timing inputs** rather than multiple parallel loads.

Practical guidance for the Atlas reference platform:

- connect each timing output to a compatible logic-level timing input
- avoid directly daisy-chaining multiple sensors onto a single trigger line
- use a trigger fanout or line-driver stage when one timing signal must drive multiple devices

This is particularly important in multi-camera systems where a single trigger event may need to reach several cameras.

In such systems, Atlas provides the **deterministic timing authority**, while the physical trigger distribution stage may be implemented as part of the electrical design of the target platform.

For OEM deployments, trigger fanout, buffering, isolation, or differential conversion can be tailored to match the sensor topology and cabling environment.

---

## Reference Connector Implementation

On the Atlas reference board, synchronization I/O is exposed through **locking board connectors defined in the Atlas hardware reference design**.

The synchronization interfaces are clearly labeled in board silkscreen and documented as part of the Atlas reference I/O specification.

Connector documentation typically includes:

- connector family
- pitch and locking style
- pin numbering
- signal names
- recommended mating housing or cable assembly

This allows evaluation-kit users to prepare appropriate cables, terminals, and crimp tooling before hardware arrival.

For production white-label deployments, connector selection may be customized to match the robot harness standard, environmental requirements, or sensor vendor cabling ecosystem.

---

## Trigger Scheduling and Phase Offset Control

Atlas provides deterministic trigger signals aligned to the system timing authority.

The reference platform supports **synchronized capture events across multiple sensors** using shared trigger and synchronization signals.

In some robotics systems, engineers intentionally stagger capture events to reduce interference. Example scenarios include:

- staggering multiple cameras to reduce illumination conflicts
- avoiding LiDAR optical interference
- coordinating sensors with different exposure windows

Advanced trigger orchestration such as **phase-offset scheduling** may be implemented during Atlas OEM integrations when required by the target sensor stack.

Example concept:

    Camera A trigger → 0 ms offset
    Camera B trigger → 50 ms offset

This approach allows multi-sensor systems to coordinate capture timing while maintaining a shared system timing authority.

Atlas therefore serves as a **deterministic trigger distribution foundation**, while advanced trigger profiles may be tailored for specific deployments.

---

## Cabling and Signal Integrity

Synchronization accuracy depends not only on the Atlas timing engine but also on the physical signaling environment between Atlas and connected sensors.

Factors influencing synchronization quality include:

- cable length
- shielding quality
- grounding strategy
- connector quality
- electromagnetic interference
- sensor input circuitry

Atlas reference synchronization signals should be treated as **short-run 3.3V timing lines**.

Recommended deployment practices include:

- Using shielded cables where appropriate
- Keeping synchronization runs short whenever possible
- Routing timing lines away from high-current power paths
- Maintaining clean grounding between Atlas and sensors

In installations where sensors are mounted far from the compute platform (for example roof-mounted LiDAR or external camera rigs), OEM deployments may incorporate:

- Differential signaling
- Dedicated line drivers
- Signal isolation
- Sensor-specific trigger conditioning

Atlas synchronization specifications describe timing performance **at the Atlas board boundary**.

End-to-end synchronization accuracy across the full sensor system depends on the electrical implementation of the deployed platform.

# PPS Timing Reference

Many robotics systems use **PPS (Pulse-Per-Second)** as a global timing reference.

Common PPS sources include:

- GNSS receivers
- External master clocks
- Industrial timing systems

Atlas can ingest PPS using:

    PPS_IN

Atlas then distributes this timing signal across the sensor infrastructure.

Typical PPS characteristics:

- 1 Hz timing pulse
- &lt;100 ns rise time
- deterministic hardware capture

This allows Atlas to align sensor sampling with an external global time source.

---

# Sensor Trigger Distribution

Atlas distributes timing signals to connected sensors.

Signals include:

### PPS_OUT

Standard PPS distribution for sensors that support PPS timing.

### SYNC_OUT

Synchronization signal used to align sensor clocks.

Common uses include:

- Camera exposure alignment
- IMU sampling alignment
- LiDAR frame timing reference

### TRIGGER_OUT

Frame trigger signal for sensors that support hardware capture triggering.

Examples include:

- Industrial cameras
- Synchronized multi-camera systems
- Triggered LiDAR sampling

---

# Atlas as Time Authority

In many robotics systems, sensors operate with independent internal clocks.

Atlas changes this model.

Atlas acts as the **time authority for the perception sensor domain**.

Typical timing hierarchy:

<p align="center">
  <img src="/img/Fig 17.png" width="60%" alt="Atlas timing hierarch" />
</p>

Atlas becomes the **single synchronization reference between sensors and compute**.

---

# Sensor Types Supported

Atlas synchronization can support many perception sensor classes.

### Cameras

Industrial cameras often support hardware triggers or synchronization pulses.

Atlas can align frame capture across multiple cameras.

### LiDAR

Some LiDAR systems support PPS alignment.

Atlas can distribute PPS signals to these sensors.

### IMU

High-rate IMUs can align sampling with synchronization signals.

### GNSS

GNSS receivers provide PPS signals that serve as a global timing reference.

---

# Synchronizing Sensors Connected Directly to Compute

Some high-bandwidth perception sensors connect directly to the robot compute platform rather than passing through Atlas.

Examples include:

- Ethernet LiDAR
- GMSL cameras
- MIPI / CSI cameras

These sensors often require high data bandwidth that exceeds typical USB or embedded interface limits.

Atlas does not need to sit in the **data path** for these sensors to participate in system-wide synchronization.

Instead, Atlas provides the **timing authority** for the perception stack.

Typical synchronization architecture:

<p align="center">
  <img src="/img/Fig 18.png" width="60%" alt="Atlas synchronization architecture" />
</p>
In this model:

- Sensors capture data based on Atlas timing signals
- Data flows directly to the compute platform
- DSIL aligns timestamps inside ROS2

This allows **high-bandwidth sensors to remain directly connected to compute while still participating in the Atlas timing domain**.

Atlas therefore acts as the **global synchronization authority for the perception stack**, even when sensors bypass the Atlas data path.

---

# Synchronization Accuracy

The Atlas timing architecture minimizes uncertainty between sensors.

Typical characteristics:

| Property | Typical Value |
|---------|--------------|
| Trigger jitter | &lt;1 µs |
| PPS distribution skew | &lt;1 µs |
| DSIL timestamp correction | &lt;1 ms |

Hardware synchronization ensures that sensor capture events remain tightly aligned.

Software correction in DSIL ensures timestamps remain consistent when data enters ROS2.

---

# Hardware Timing vs Software Timing

A key design principle of Atlas is separating **hardware synchronization** from **software timestamp correction**.

Hardware layer:

- Captures PPS events
- Distributes synchronization pulses
- Aligns sensor capture events

Software layer (DSIL):

- Observes timing events
- Calculates timestamp offsets
- Corrects ROS2 message timestamps

This hybrid approach preserves compatibility with existing drivers while improving timing consistency.

---

# Timestamp Propagation into ROS2

Atlas timing events are exposed to the compute platform through the DSIL telemetry channel.

Example topics:

| Topic | Description |
|------|-------------|
| /atlas/pps | PPS timing event |
| /atlas/sync | synchronization pulse |
| /atlas/health | timing system state |

The DSIL ROS2 node uses these timing signals to correct ROS2 message timestamps.

This allows perception and localization pipelines to operate with **consistent time references**.

---

# Operation Without External PPS

Atlas can operate even without an external timing reference.

Two operating modes are supported.

### External Time Authority

GNSS or external PPS provides the master clock.

Atlas distributes this clock to sensors.

### Internal Time Authority

If PPS is not available, Atlas acts as the timing source.

Atlas generates synchronization signals for the sensor group.

This allows robotics systems to maintain consistent timing even in indoor environments.

---

# Deterministic Sensor Boundary

Atlas establishes a **deterministic boundary between the sensor domain and the compute domain**.

Before Atlas:

    Sensors → Drivers → ROS2

Timing relationships depend entirely on driver behavior.

With Atlas:

~~~
    Sensors
        │
        ▼
      Atlas
        │
        ▼
      DSIL
        │
        ▼
      ROS2
~~~

Timing relationships are anchored by Atlas hardware.

---

# Why Robotics Engineers Care

Sensor synchronization is one of the most difficult problems in multi-sensor robotics systems.

Atlas solves several integration challenges:

- inconsistent sensor timestamps
- driver-level timing uncertainty
- complex synchronization wiring
- lack of system-level timing visibility

By introducing a dedicated timing infrastructure, Atlas allows robotics teams to build **more deterministic perception systems**.

---

# Atlas Synchronization Benefits

Atlas provides several advantages for robotics integration:

- improved sensor fusion accuracy
- more consistent SLAM behavior
- predictable sensor timing
- simplified wiring for synchronized sensors
- system-level timing visibility
- faster multi-sensor bring-up

---

# Summary

Atlas establishes the **time authority for the robot perception sensor domain**.

By introducing a hardware synchronization layer and exposing timing signals through DSIL, Atlas allows robotics systems to align sensor capture events and maintain consistent timestamps across perception pipelines.

This transforms sensor synchronization from an ad-hoc engineering task into a **dedicated infrastructure capability**.
