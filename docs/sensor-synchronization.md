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

For perception, localization, and SLAM pipelines to behave consistently, these sensors must share a **common timing reference**.

Atlas establishes a **deterministic timing authority for the perception sensor domain**.

Instead of allowing each sensor to operate on an independent internal clock, Atlas introduces a **hardware synchronization boundary** that aligns sensor timing before data enters the robot compute stack.

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

## Atlas Timing Model

Atlas acts as a **time authority and synchronization coordinator** for the robot perception stack.

It provides:

- a unified timing reference
- hardware timing interfaces such as PPS and trigger
- system-level timestamp alignment through the DSIL SDK

All sensor data is mapped into the Atlas time domain, even when device-level timing control is not available.

---

## From Timing Signals to Aligned Data (DSIL SDK)

Atlas hardware establishes the timing reference, but synchronization is completed in software by the DSIL SDK.

DSIL SDK builds a **unified time fabric** across all sensors by performing:

• timestamp correlation across sensor data streams  
• alignment of sensor data to the Atlas time authority  
• normalization of different sensor timing domains  

This process ensures that:

- hardware-triggered sensors remain fully deterministic  
- signal-based sensors are aligned using captured events  
- USB and network sensors are mapped into the same time domain  

Importantly, DSIL SDK does not modify sensor firmware or internal clocks.

Instead, it **maps all sensor data into a consistent system time model**, making timing:

• observable  
• comparable  
• correctable  

This allows heterogeneous sensors to behave as a **coherent, time-aligned system** inside ROS2 or any host environment.

---

## Sensor Timing Integration Model

Atlas is designed to operate across heterogeneous sensor stacks with different timing capabilities.

Not all sensors support deterministic timing control. Atlas accommodates this by providing multiple levels of timing integration.

### Timing Integration Levels

• **Hardware-triggered sensors**  
Deterministic timing control via PPS or trigger signals  
→ Exact capture alignment under Atlas time authority

• **Signal-exposed sensors**  
Timing alignment via hardware event capture (for example data-ready or sync signals)  
→ High-confidence alignment through event correlation

• **USB-based sensors** (for example UVC cameras, Intel RealSense)  
No direct timing control due to internal device clocks and USB transport latency  
→ The DSIL SDK aligns sensor data to the Atlas time authority using arrival-time correlation and offset modeling  
→ Enables consistent cross-sensor alignment without requiring firmware or driver changes

• **Network-based sensors** (for example Ethernet LiDAR)  
Operate in independent time domains, including PTP-enabled or free-running device clocks  
→ The DSIL SDK performs system-level timestamp alignment, cross-domain correlation, and timing observability  
→ Atlas acts as a timing reference layer without controlling the sensor data path or internal clock

---

Atlas ensures that all sensors participate in a **unified system time model**, even when device-level control is not available.

This allows robotics systems to achieve:

- deterministic timing where supported
- measurable and correctable timing where not
- full observability across the perception stack

Atlas does not require modification of sensor firmware or vendor drivers to achieve this integration model.

---

## Atlas Timing Architecture

Atlas introduces a **combined hardware and software timing layer** between sensors and the compute platform.

<p align="center">
  <img src="/img/Fig 16.png" width="60%" alt="Atlas timing architecture" />
</p>

Atlas timing architecture operates in two tightly integrated layers:

---

### Hardware Layer (Atlas Fusion V2)

Atlas acts as the **timing distribution hub** for the perception sensor infrastructure.

It can ingest external timing references such as:

- GNSS PPS  
- system master clock  
- external synchronization controller  

Atlas then redistributes synchronization signals to connected sensors, including:

- PPS_OUT  
- SYNC_OUT  
- TRIGGER_OUT  

This establishes a **shared timing reference** across the sensor domain and enables deterministic capture where supported.

---

### Software Layer (DSIL SDK)

While Atlas hardware establishes the timing reference, synchronization is completed in software.

The DSIL SDK builds a **unified time fabric** across all sensors by performing:

- timestamp correlation across sensor data streams  
- alignment of sensor data to the Atlas time authority  
- normalization of heterogeneous sensor timing domains  

This ensures that:

- hardware-triggered sensors remain fully deterministic  
- signal-based sensors are aligned using captured events  
- USB and network sensors are mapped into the same time domain  

DSIL does not modify sensor firmware or internal clocks.

Instead, it **maps all sensor data into a consistent system time model**, making timing:

- observable  
- comparable  
- correctable  

---

### End-to-End Timing Flow

The complete timing architecture can be summarized as:


---

## Hardware Timing Boundary

Atlas introduces a deterministic timing boundary:

- sensors operate in their native timing domain
- Atlas captures precise timing events in hardware
- timing relationships are preserved and made observable

This ensures that downstream data can be aligned to a common reference.

---

## Mechanics of Synchronization

The DSIL SDK performs timestamp correction in software using hardware timing events captured by Atlas.

It applies a dynamic offset that maps:

- raw sensor arrival time  
→ to  
- Atlas hardware-captured synchronization event

This is a **system-level timing correction model**, not a device-level clock rewrite.

Atlas does not modify sensor firmware or internal clocks.

This ensures compatibility with:

- standard UVC cameras
- serial sensors
- LiDAR drivers
- existing ROS2 drivers

Atlas operates alongside existing drivers rather than replacing them.

---

## Timing Interfaces

Atlas provides dedicated hardware interfaces for synchronization.

| Interface | Direction | Purpose |
|----------|----------|---------|
| PPS_IN | Input | External time reference |
| PPS_OUT | Output | Standard PPS distribution |
| SYNC_OUT | Output | Sensor synchronization signal |
| TRIGGER_OUT | Output | Frame capture trigger |

These interfaces allow Atlas to coordinate sampling and capture events across the sensor domain.

---

## Electrical and Deployment Considerations

Atlas synchronization interfaces are designed to provide deterministic timing signals while maintaining a clear electrical boundary for the reference platform.

The Atlas reference hardware defines a **3.3V logic timing domain** for synchronization signals. This applies to PPS and trigger interfaces used by the Atlas timing engine.

Higher-voltage industrial trigger standards or differential signaling interfaces are **not directly supported by the reference platform**. These requirements are addressed through the Atlas **white-label OEM integration program**, where synchronization interfaces can be adapted to the target sensor stack.

This keeps the reference platform safe, predictable, and easy to integrate while allowing production deployments to tailor synchronization interfaces to real-world requirements.

### Signal Electrical Specs

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

Industrial trigger standards such as **5V, 12V, or differential synchronization interfaces** must not be connected directly to Atlas reference hardware without proper signal conditioning.

### Output Drive and Loading Guidance

Atlas timing outputs are designed as **logic timing signals**, not power outputs.

PPS_OUT, SYNC_OUT, and TRIGGER_OUT are intended to drive **high-impedance sensor timing inputs** rather than multiple parallel loads.

Practical guidance for the reference platform:

- connect each timing output to a compatible logic-level timing input
- avoid directly daisy-chaining multiple sensors onto a single trigger line
- use a trigger fanout or line-driver stage when one timing signal must drive multiple devices

In multi-camera systems, Atlas provides the **deterministic timing authority**, while the physical trigger distribution stage may be implemented as part of the target platform electrical design.

### Cabling and Signal Integrity

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

- using shielded cables where appropriate
- keeping synchronization runs short whenever possible
- routing timing lines away from high-current power paths
- maintaining clean grounding between Atlas and sensors

Atlas timing specifications describe performance **at the Atlas board boundary**. End-to-end synchronization accuracy depends on the electrical implementation of the deployed platform.

---

## PPS Timing Reference

Many robotics systems use **PPS (Pulse-Per-Second)** as a global timing reference.

Common PPS sources include:

- GNSS receivers
- external master clocks
- industrial timing systems

Atlas can ingest PPS using `PPS_IN`, then distribute this timing signal across the sensor infrastructure.

Typical PPS characteristics include:

- 1 Hz timing pulse
- fast edge transition
- deterministic hardware capture

This allows Atlas to align sensor sampling with an external global time source.

---

## Operation With or Without External PPS

Atlas supports two operating modes.

### External Time Authority

An external PPS source provides the master clock.

Atlas ingests that timing reference and distributes it across the sensor domain.

### Internal Time Authority

If PPS is not available, Atlas acts as the timing source for the sensor group.

Atlas generates synchronization signals internally, allowing robotics systems to maintain consistent timing even in indoor or PPS-unavailable environments.

---

## Trigger Distribution and Scheduling

Atlas distributes timing signals to connected sensors through:

- **PPS_OUT** for sensors that support PPS timing
- **SYNC_OUT** for synchronization alignment
- **TRIGGER_OUT** for capture-triggered sensors

These signals are commonly used for:

- camera exposure alignment
- IMU sampling alignment
- LiDAR frame timing reference

In some deployments, engineers may intentionally stagger capture events to reduce interference. Example scenarios include:

- staggering multiple cameras to reduce illumination conflicts
- avoiding LiDAR optical interference
- coordinating sensors with different exposure windows

Advanced trigger orchestration such as **phase-offset scheduling** may be implemented during OEM integrations when required by the target sensor stack.

Example concept:

    Camera A trigger → 0 ms offset
    Camera B trigger → 50 ms offset

Atlas therefore serves as a **deterministic trigger distribution foundation**, while advanced trigger profiles may be tailored for specific deployments.

---

## Direct-to-Compute Sensors

Some high-bandwidth sensors connect directly to the robot compute platform rather than passing through Atlas.

Examples include:

- Ethernet LiDAR
- GMSL cameras
- MIPI / CSI cameras

These sensors may bypass the Atlas data path, but they can still participate in the Atlas timing domain.

<p align="center">
  <img src="/img/Fig 18.png" width="60%" alt="Atlas synchronization architecture" />
</p>

In this model:

- sensors capture data based on Atlas timing signals or Atlas-referenced timing relationships
- data flows directly to the compute platform
- the DSIL SDK aligns timestamps inside ROS2 or the host software stack

This allows **high-bandwidth sensors to remain directly connected to compute while still participating in system-wide synchronization**.

---

## Atlas as Time Authority

In many robotics systems, sensors operate with independent internal clocks.

Atlas changes this model by acting as the **time authority for the perception sensor domain**.

<p align="center">
  <img src="/img/Fig 17.png" width="100%" alt="Atlas timing hierarchy" />
</p>

Atlas becomes the **single synchronization reference between sensors and compute**, even when some sensors bypass the Atlas data path.

---

## Synchronization Accuracy

Atlas timing architecture minimizes uncertainty between sensors by combining hardware synchronization and software timestamp alignment.

Typical characteristics:

| Property | Typical Value |
|---------|--------------|
| Trigger jitter | &lt;1 µs |
| PPS distribution skew | &lt;1 µs |
| DSIL SDK timestamp correction | &lt;1 ms |

Hardware synchronization keeps sensor capture events tightly aligned.

The DSIL SDK ensures timestamps remain consistent when data enters ROS2 or the host software stack.

---

## Timestamp Propagation into ROS2

Atlas timing events are exposed to the compute platform through the DSIL telemetry channel.

Example topics:

| Topic | Description |
|------|-------------|
| /atlas/pps | PPS timing event |
| /atlas/sync | synchronization pulse |
| /atlas/health | timing system state |

The DSIL ROS2 node uses these timing signals to correct or interpret ROS2 message timestamps.

This allows perception and localization pipelines to operate with **consistent time references**.

---

## What This Enables

With Atlas timing infrastructure in place:

- multi-sensor fusion becomes more reliable
- timing jitter becomes measurable and correctable
- system behavior becomes observable
- debugging synchronization issues becomes tractable
- synchronized bring-up becomes simpler across mixed sensor stacks

Atlas converts timing from a hidden problem into a **visible system property**.

---

## Summary

Atlas establishes the **time authority for the robot perception sensor domain**.

By introducing a hardware synchronization layer and exposing timing signals through the DSIL SDK, Atlas allows robotics systems to align sensor capture events and maintain consistent timestamps across perception pipelines.

This transforms sensor synchronization from an ad-hoc engineering task into a **dedicated infrastructure capability**.
