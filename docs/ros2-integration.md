---
title: ROS2 Integration
sidebar_label: ROS2 Integration
---

# ROS2 Integration

### Deterministic Sensor Integration for ROS2 Robotics Systems

Atlas is designed to integrate directly into modern ROS2-based robotics stacks.

The Deterministic Sensor Integration Layer (DSIL) provides a **ROS2-ready interface** that transforms Atlas telemetry and timing data into standard ROS2 topics.

Atlas does **not replace ROS2 drivers**. Instead, it provides a **deterministic timing backbone and sensor telemetry layer** that integrates cleanly with existing ROS2 nodes.

This allows robotics teams to adopt Atlas **without rewriting their perception stack**.

The ROS2 integration model is **consistent across all DSIL SDK versions**, ensuring that Atlas can be evaluated using the Atlas Evaluation SDK and deployed later using the Production SDK without changes to the ROS2 integration architecture.

---

## Quick Start: Running Atlas in ROS2

A typical ROS2 integration with Atlas requires only launching the DSIL telemetry bridge alongside existing ROS2 drivers.

Example launch command:

**ros2 launch atlas_dsil_bridge telemetry.launch.py**

After launch, Atlas telemetry becomes available as ROS2 topics.

Verify with:

    ros2 topic list

Example output:

    /imu/data
    /gps/fix
    /atlas/pps
    /atlas/sync
    /atlas/health

Robotics applications can subscribe to these topics using standard ROS2 tools.

Example:

**ros2 topic echo /imu/data**

Atlas integrates directly into the ROS2 topic graph and can be consumed by navigation, perception, and SLAM pipelines without modifying existing sensor drivers.

# Integration Philosophy

Atlas follows a **non-intrusive integration model**.

Atlas does not attempt to replace or modify:

- Eexisting ROS2 sensor drivers  
- Camera pipelines  
- LiDAR drivers  
- Nnavigation stacks

Instead, Atlas introduces a **deterministic timing boundary** and a **sensor telemetry layer** that runs alongside the ROS2 system.

This ensures compatibility with:

- NVIDIA Isaac ROS  
- Nav2  
- SLAM frameworks  
- perception pipelines  
- custom robotics stacks  

Atlas integrates as an **infrastructure layer**, not as a competing middleware.

---

## Runtime Characteristics

Atlas is designed to operate as a deterministic sensor infrastructure layer.  
The DSIL ROS2 bridge is intentionally lightweight so that it does not introduce additional timing uncertainty or significant CPU overhead on embedded compute platforms.

### Message Frequency and Latency

Atlas timing and telemetry messages are published at deterministic rates that correspond to the underlying hardware timing signals.

Typical behavior:

| Topic | Typical Rate | Notes |
|------|------|------|
| `/atlas/pps` | 1 Hz | Published on every PPS timing event |
| `/atlas/sync` | Event-driven | Published when synchronization trigger occurs |
| `/imu/data` | Sensor dependent | Typically 100–400 Hz |
| `/gps/fix` | Sensor dependent | Typically 1–10 Hz |
| `/atlas/health` | 1–5 Hz | System status updates |

The DSIL telemetry bridge performs **timestamp correction and message publishing entirely in user space**.

Typical bridge latency:

- < 1 ms message translation latency
- negligible additional jitter relative to sensor driver timing

This ensures that the ROS2 integration layer preserves the deterministic timing boundary established by Atlas hardware.

---

### TF2 and Coordinate Frames

In ROS2 systems, spatial relationships between sensors are managed through the **TF2 coordinate frame tree**.

Atlas can act as a natural **sensor aggregation reference frame**.

Typical frame structure:

    <p align="center">
  <img src="/img/Fig 15.png" width="60%" alt="Atlas frame structure" />
</p>

Atlas deployments commonly define an `atlas_link` frame that represents the physical mounting location of the Atlas board within the robot chassis.

Sensor frames can then be defined relative to this reference.

Atlas integrations may include:

- a static transform publisher
- URDF snippets defining the Atlas mounting frame
- sensor frames defined relative to the Atlas board location

This allows the ROS2 TF tree to align naturally with the robot's physical sensor wiring topology.

---

### CPU Overhead

The DSIL ROS2 bridge is designed to run efficiently on embedded compute platforms.

Typical resource usage on a Jetson Orin Nano:

- < 2% CPU utilization
- < 20 MB memory footprint

Because DSIL operates as a **lightweight user-space telemetry bridge**, the majority of compute resources remain available for perception, SLAM, and planning workloads.

This makes Atlas suitable for robotics systems running on resource-constrained SBC platforms.

---

# System Integration Overview

A typical Atlas-to-ROS2 integration pipeline looks like this.

    <p align="center">
  <img src="/img/Fig 13.png" width="60%" alt="Atlas ROS2 Integration" />
</p>

Atlas introduces a **deterministic timing reference** that improves cross-sensor alignment inside the ROS2 ecosystem.

---

# Atlas Telemetry Channel

Atlas communicates with the robot compute platform using a **USB CDC telemetry channel**.

Example device path:

    /dev/ttyACM0

The CDC channel streams structured telemetry packets that may include:

- IMU measurements  
- GNSS updates  
- PPS timing events  
- board health telemetry  
- synchronization metadata  

This channel is consumed by the **DSIL telemetry bridge**.

---

# DSIL ROS2 Node

The DSIL SDK provides a **ROS2 node that converts Atlas telemetry into ROS2 topics**.

Example node:

    dsil_telemetry_node

Responsibilities include:

- reading the CDC telemetry stream  
- decoding structured packets  
- publishing ROS2 sensor messages  
- applying timestamp alignment  
- exposing synchronization events  
- monitoring Atlas health status  

This allows ROS2 applications to consume Atlas telemetry using **standard ROS message types**.

---

# ROS2 Topic Mapping

Atlas telemetry is mapped into familiar ROS2 message structures.

| Atlas Data | ROS2 Topic | Message Type |
|---|---|---|
| IMU telemetry | /imu/data | sensor_msgs/Imu |
| GNSS position | /gps/fix | sensor_msgs/NavSatFix |
| PPS timing events | /atlas/pps | std_msgs/Bool |
| Synchronization pulse | /atlas/sync | std_msgs/Bool |
| System health | /atlas/health | diagnostic_msgs/DiagnosticStatus |

This allows Atlas telemetry to plug directly into existing ROS2 software.

Examples include:

- SLAM nodes  
- sensor fusion frameworks  
- navigation stacks  
- diagnostics dashboards  

---

# Timestamp Synchronization

One of Atlas's core contributions is **deterministic timestamp alignment**.

Many robotics systems suffer from:

- USB camera timing jitter  
- inconsistent driver timestamps  
- weak alignment between sensors  
- poor timing observability  

Atlas addresses this through a **hardware-assisted timing boundary**.

Atlas can ingest timing references such as:

- GNSS PPS  
- system master clock  
- external synchronization controller  

Atlas then redistributes synchronization signals to connected sensors.

---

# Mechanics of Synchronization

DSIL performs **timestamp correction in software**, using hardware timing events captured by Atlas.

    <p align="center">
  <img src="/img/Fig 14.png" width="60%" alt="Atlas mechanics of synchronization" />
</p>

DSIL applies a **dynamic offset to ROS2 message header timestamps**, mapping the raw sensor arrival time to the Atlas hardware-captured synchronization event.

Importantly:

Atlas **does not modify sensor firmware or internal clocks**.

This ensures compatibility with:

- standard UVC cameras  
- serial sensors  
- LiDAR drivers  
- existing ROS2 drivers  

---

# ROS2 Driver Compatibility

Atlas works alongside standard ROS2 drivers.

| Sensor | ROS2 Driver |
|---|---|
| USB Cameras | usb_cam |
| Ouster LiDAR | ouster_ros |
| Velodyne LiDAR | velodyne_driver |
| IMU | microstrain_inertial_driver |

Atlas does not replace these drivers.

Instead, Atlas adds:

- synchronization metadata  
- timing reference  
- sensor health telemetry  

---

# Example ROS2 Launch

A typical ROS2 launch command:

    ros2 launch atlas_dsil_bridge telemetry.launch.py

Example node composition:

    Atlas DSIL Node
    USB Camera Node
    LiDAR Driver
    IMU Driver
    Navigation Stack

Atlas operates as a **sensor infrastructure layer beneath the robotics stack**.

---

# Sensor Health Monitoring

Atlas continuously monitors sensor connectivity and system health.

Example topic:

    /atlas/health

Health telemetry can include:

- sensor connectivity state  
- synchronization lock status  
- board diagnostics  
- power distribution status  

This enables robotics systems to implement **fail-safe behavior** if sensors disconnect or synchronization fails.

---

# Multi-Sensor Alignment

Atlas improves alignment across multiple sensor types.

Example sensor stack:

    Camera
    LiDAR
    IMU
    GNSS

Without synchronization:

- timestamp drift  
- inconsistent sensor frames  
- degraded SLAM accuracy  

With Atlas:

- deterministic trigger events  
- PPS timing alignment  
- consistent ROS2 timestamps  

This improves the quality of downstream perception and localization algorithms.

---

# ROS2 Ecosystem Compatibility

Atlas integrates naturally with common ROS2 frameworks.

Examples include:

- Nav2 navigation stack  
- SLAM Toolbox  
- RTAB-Map  
- Isaac ROS perception modules  

Atlas does not impose proprietary middleware.

Robotics teams remain free to use **any ROS2 framework they prefer**.

---

# Minimal Integration Requirements

Atlas requires very little to integrate into a ROS2 system.

Minimum requirements:

- Linux compute platform  
- ROS2 installed  
- USB connection to Atlas  
- DSIL SDK installed  

DSIL operates entirely in **user-space**.

No kernel driver is required.

This enables fast integration on platforms such as:

- Jetson Orin  
- x86 robotics computers  
- embedded Linux systems  

---

# Why ROS2 Engineers Adopt Atlas

Without Atlas, robotics teams often deal with:

- messy sensor wiring  
- inconsistent timestamps  
- fragile synchronization setups  
- repeated integration engineering  

Atlas converts this into a **deterministic sensor infrastructure layer**.

Robotics engineers gain:

- predictable sensor timing  
- unified telemetry handling  
- simplified system architecture  
- faster deployment  

Atlas transforms sensor integration from **custom engineering work into deployable infrastructure**.

---

# Next Steps

Continue exploring the Atlas documentation.

- Hardware Architecture  
- DSIL SDK Overview  
- Sensor Synchronization  
- Evaluation Kit Setup
