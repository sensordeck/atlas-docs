---
title: ROS2 Integration
sidebar_label: ROS2 Integration
description: Deterministic Sensor Integration for ROS2 Robotics Systems
---

## Where This Fits

This page shows **how Atlas and DSIL integrate into existing ROS2-based robotics systems**.

After understanding the hardware and software layers, this section demonstrates how Atlas can be deployed without modifying existing drivers or perception pipelines.

This is where Atlas becomes immediately usable.

---

### Deterministic Sensor Integration for ROS2 Robotics Systems

Modern robotics systems rely on ROS2 to build perception, localization, and navigation pipelines.

ROS2 provides a powerful middleware layer — but it assumes that **sensor timestamps are already correct**.

In real-world systems, this assumption breaks.

Sensors operate on independent clocks:

- USB cameras introduce jitter  
- LiDAR runs on internal timing  
- IMU and GNSS drift independently  

The result:

- inconsistent timestamps  
- sensor misalignment  
- degraded SLAM and perception performance  
- difficult debugging and system validation  

Atlas addresses this problem by introducing a **deterministic timing foundation** beneath ROS2.

---

## The Gap: What ROS2 Does Not Solve

ROS2 is a middleware — not a timing authority.

ROS2 does not provide:

- cross-sensor clock alignment  
- hardware timestamping  
- deterministic capture coordination  
- synchronization state visibility  

ROS2 trusts timestamps.

Atlas makes timestamps trustworthy.

---

## What Teams Do Today

Without a unified timing system, robotics teams typically build custom solutions:

- driver-level timestamp adjustments  
- PPS wiring and trigger experiments  
- per-sensor synchronization logic  
- post-processing alignment pipelines  

These approaches are:

- fragile  
- non-portable  
- difficult to debug  
- repeated for every robot platform  

Atlas eliminates this repeated engineering effort.

---

## What Atlas + DSIL Does

Atlas introduces a **hardware-backed timing boundary** for the perception sensor domain.

The Deterministic Sensor Integration Layer (DSIL) SDK exposes this timing into ROS2.

- Sensors connect to Atlas  
- Atlas aligns timing at the hardware level  
- DSIL converts telemetry into ROS2 topics  
- ROS2 consumes synchronized data without modification  

Atlas does **not replace ROS2 drivers**.

Instead, it provides:

- a deterministic timing backbone  
- a sensor telemetry layer  
- synchronization visibility  

This allows robotics teams to adopt Atlas **without rewriting their perception stack**.

---

## Quick Start: Running Atlas in ROS2

A typical ROS2 integration with Atlas requires only launching the DSIL telemetry bridge alongside existing ROS2 drivers.

```bash
ros2 launch atlas_dsil_bridge telemetry.launch.py
```

After launch, Atlas telemetry becomes available as ROS2 topics.

Verify with:

```bash
ros2 topic list
```

Example output:

```
/imu/data
/gps/fix
/atlas/pps
/atlas/sync
/atlas/health
```

Robotics applications can subscribe using standard ROS2 tools:

```bash
ros2 topic echo /imu/data
```

Atlas integrates directly into the ROS2 graph without modifying existing drivers.

---

## Integration Philosophy

Atlas follows a **non-intrusive integration model**.

Atlas does not modify or replace:

- ROS2 sensor drivers  
- camera pipelines  
- LiDAR drivers  
- navigation stacks  

Instead, Atlas runs alongside ROS2 as an **infrastructure layer**.

Compatible with:

- NVIDIA Isaac ROS  
- Nav2  
- SLAM frameworks  
- perception pipelines  
- custom robotics stacks  

---

## Mechanics of Synchronization

DSIL performs **timestamp correction in software using hardware timing events captured by Atlas**.

<p align="center">
  <img src="/img/Fig 14.png" width="60%" alt="Atlas mechanics of synchronization" />
</p>

DSIL applies a **dynamic offset to ROS2 message header timestamps**, mapping raw sensor arrival time to the Atlas hardware-captured synchronization event.

Importantly:

Atlas does **not modify sensor firmware or internal clocks**.

This ensures compatibility with:

- UVC cameras  
- serial sensors  
- LiDAR drivers  
- standard ROS2 drivers  

---

## What You Get in ROS2

Atlas exposes a structured set of ROS2 topics.

### Sensor Data

- `/imu/data`  
- `/gps/fix`  

### Timing and Synchronization

- `/atlas/pps`  
- `/atlas/sync`  

### System Observability

- `/atlas/health`  

These provide:

- corrected timestamps  
- synchronization state visibility  
- system health monitoring

---

## ROS2 Topic Mapping

| Atlas Data | ROS2 Topic | Message Type |
|---|---|---|
| IMU telemetry | /imu/data | sensor_msgs/Imu |
| GNSS position | /gps/fix | sensor_msgs/NavSatFix |
| PPS timing events | /atlas/pps | std_msgs/Bool |
| Synchronization pulse | /atlas/sync | std_msgs/Bool |
| System health | /atlas/health | diagnostic_msgs/DiagnosticStatus |

Atlas telemetry integrates directly into existing ROS2 pipelines:

- SLAM  
- sensor fusion  
- navigation  
- diagnostics  

---

## Runtime Characteristics

Atlas operates as a deterministic infrastructure layer with minimal overhead.

### Message Frequency and Latency

| Topic | Typical Rate | Notes |
|------|------|------|
| `/atlas/pps` | 1 Hz | PPS timing event |
| `/atlas/sync` | Event-driven | Sync trigger |
| `/imu/data` | 100–400 Hz | Sensor dependent |
| `/gps/fix` | 1–10 Hz | Sensor dependent |
| `/atlas/health` | 1–5 Hz | System status |

Typical DSIL performance:

- < 1 ms message latency  
- negligible additional jitter  

---

## CPU Overhead

Typical resource usage on Jetson Orin Nano:

- < 2% CPU  
- < 20 MB memory  

DSIL runs entirely in **user-space**, preserving compute resources for perception workloads.

---

## TF2 and Coordinate Frames

Atlas acts as a natural **sensor aggregation reference frame**.

<p align="center">
  <img src="/img/Fig 15.png" width="60%" alt="Atlas frame structure" />
</p>

Typical setup:

- `atlas_link` represents board location  
- sensor frames defined relative to Atlas  

Supports:

- static transform publishers  
- URDF integration  
- consistent physical-to-logical mapping  

---

## System Integration Overview

<p align="center">
  <img src="/img/Fig 13.png" width="60%" alt="Atlas ROS2 Integration" />
</p>

Atlas introduces a **deterministic timing reference** that improves cross-sensor alignment across the ROS2 system.

---

## Atlas Telemetry Channel

Atlas communicates with the compute platform via a **USB CDC telemetry channel**.

Example device:

```
/dev/ttyACM0


Carries:

- IMU data  
- GNSS updates  
- PPS events  
- synchronization metadata  
- system health  

---

## DSIL ROS2 Node

Example node:

```
dsil_telemetry_node


Responsibilities:

- decode telemetry stream  
- publish ROS2 messages  
- apply timestamp alignment  
- expose sync events  
- monitor system health  

---

## ROS2 Driver Compatibility

Atlas works alongside existing ROS2 drivers.

| Sensor | ROS2 Driver |
|---|---|
| USB Cameras | usb_cam |
| Ouster LiDAR | ouster_ros |
| Velodyne LiDAR | velodyne_driver |
| IMU | microstrain_inertial_driver |

Atlas adds:

- synchronization metadata  
- timing reference  
- health telemetry  

---

## Multi-Sensor Alignment

Without Atlas:

- timestamp drift  
- inconsistent sensor timing  
- degraded SLAM accuracy  

With Atlas:

- deterministic trigger events  
- PPS alignment  
- consistent timestamps  

---

## Minimal Integration Requirements

Atlas requires:

- Linux system  
- ROS2 installed  
- USB connection  
- DSIL SDK  

No kernel drivers required.

---

## Why ROS2 Engineers Adopt Atlas

Without Atlas:

- repeated integration effort  
- fragile synchronization  
- inconsistent timing  
- limited observability  

With Atlas:

- deterministic sensor timing  
- unified telemetry  
- simplified architecture  
- faster deployment  

Atlas converts sensor integration from:

**custom engineering work → deployable infrastructure**

---

## System Boundary

Atlas handles:

- perception sensor timing  
- synchronization  
- telemetry  

Atlas does not handle:

- motor control loops  
- real-time actuation systems  

---

## Where This Fits in DSIL SDK

ROS2 integration is the **interface layer** of DSIL.

Built on:

- hardware timing engine  
- synchronization model  
- telemetry system

---

## What Comes Next

At this point, you have seen how Atlas:

- defines a hardware timing boundary  
- converts timing into usable data  
- integrates into ROS2 systems  

The next step is to evaluate Atlas in your own environment.

👉 Request the [**Atlas Evaluation Kit**](./evaluation-kit-setup.md)
