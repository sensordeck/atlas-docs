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

# Why Sensor Synchronization Matters

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

# Atlas Timing Architecture

Atlas introduces a **hardware timing layer** between sensors and the compute platform.

Typical architecture:

    External Time Source
          │
          │ PPS
          ▼
       Atlas
       Timing Engine
          │
          ├─ PPS_OUT
          ├─ SYNC_OUT
          └─ TRIGGER_OUT
          │
          ▼
       Sensors
          │
          ▼
       Robot Compute Platform
          │
          ▼
       DSIL SDK → ROS2

Atlas becomes the **timing distribution hub** for the robot sensor infrastructure.

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

# PPS Timing Reference

Many robotics systems use **PPS (Pulse-Per-Second)** as a global timing reference.

Common PPS sources include:

- GNSS receivers
- external master clocks
- industrial timing systems

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

- camera exposure alignment
- IMU sampling alignment
- LiDAR frame timing reference

### TRIGGER_OUT

Frame trigger signal for sensors that support hardware capture triggering.

Examples include:

- industrial cameras
- synchronized multi-camera systems
- triggered LiDAR sampling

---

# Atlas as Time Authority

In many robotics systems, sensors operate with independent internal clocks.

Atlas changes this model.

Atlas acts as the **time authority for the perception sensor domain**.

Typical timing hierarchy:

    External GNSS Clock
           │
           ▼
         Atlas
           │
           ▼
       Sensor Group
           │
           ▼
       Robot Compute

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

    GNSS PPS
        │
        ▼
      Atlas
        │
        ├─ PPS_OUT ─────► LiDAR
        │
        ├─ SYNC_OUT ────► Camera Trigger
        │
        └─ PPS_OUT ─────► Compute Timing Input
                          │
                          ▼
                ROS2 Sensor Drivers

In this model:

- sensors capture data based on Atlas timing signals
- data flows directly to the compute platform
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

- captures PPS events
- distributes synchronization pulses
- aligns sensor capture events

Software layer (DSIL):

- observes timing events
- calculates timestamp offsets
- corrects ROS2 message timestamps

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
