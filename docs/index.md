---
sidebar_position: 1
title: Atlas Developer Documentation
---

# Atlas Developer Documentation

### Deterministic Sensor Infrastructure for Robotics

Atlas establishes a deterministic sensor infrastructure between perception sensors and the robotics compute platform.

---

## Platform Components

Atlas consists of two core layers:

**Atlas Hardware Platform**
- Deterministic sensor aggregation
- Hardware timestamp engine
- Sensor synchronization fabric

**DSIL SDK**
- Telemetry decoding
- Timestamp alignment
- ROS2 integration layer

---
At the center of Atlas is Fusion V2 Reference Board, which serves as the system’s Timing Authority. Instead of each sensor operating on its own internal clock, Fusion ensures that all sensor data entering the compute platform shares a common deterministic time reference.

Fusion V2 Reference Board aggregates UVC video streams and CDC sensor telemetry through a single USB connection to the robot compute platform, simplifying system wiring and sensor integration.

Integrated regulated power rails support sensors, synchronization logic, and USB aggregation while isolating the compute platform from sensor-side electrical noise.

**The Problem Atlas Solves**

Modern robots integrate multiple sensors such as:
- cameras
- LiDAR
- IMU
- GNSS

In most robotics systems today:
- sensors operate on independent clocks
- timestamp alignment is handled in software after data capture
- sensor interface hardware is often rebuilt for every robot SKU

This creates several common engineering challenges:
- timestamp drift between sensors
- unstable perception pipelines
- repeated sensor interface board development
- complex wiring harnesses
- time-consuming debugging of asynchronous sensor systems

**What Atlas Changes**

Atlas introduces a deterministic timing authority before sensor data reaches the compute platform. Fusion V2 Reference Board distributes a unified timing reference to connected sensors while DSIL SDK aligns timestamps within the perception pipeline.

This architecture transforms the integration workflow from:

**post-processing timestamp correction**
to
**deterministic sensor timing control**

**Cross-Platform Engineering Impact**
Without Atlas, robotics companies often integrate sensors **per product SKU**.

Typical architecture today:

Sensors → Custom interface board → SBC → Custom middleware

Each new robot platform often requires:
- new sensor interface wiring
- new timestamp handling logic
- new ROS driver configuration
- new synchronization debugging

Atlas converts sensor integration from custom engineering work into a reusable infrastructure layer.

Sensors → Atlas (Fusion Timing Backbone) → SBC → Application Software

This allows robotics companies to standardize the sensor-compute boundary across multiple robots and product lines.

Benefits include:
- faster development of new robot SKUs
- reduced synchronization bugs
- simpler sensor upgrades
- more engineering focus on perception and autonomy

## Documentation

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>

<div style={{border:'1px solid #ddd',padding:'20px',borderRadius:'8px'}}>

### Hardware Architecture

Understand how Atlas connects cameras, LiDAR, IMU, and GNSS into a deterministic sensor backbone.

[Open Guide →](./hardware-architecture)

</div>

<div style={{border:'1px solid #ddd',padding:'20px',borderRadius:'8px'}}>

### DSIL SDK

The Deterministic Sensor Integration Layer provides timestamp correction, telemetry decoding, and sensor alignment.

[Open Guide →](./dsil-sdk)

</div>

<div style={{border:'1px solid #ddd',padding:'20px',borderRadius:'8px'}}>

### ROS2 Integration

Atlas integrates directly with ROS2 perception pipelines and publishes standardized topics.

[Open Guide →](./ros2-integration)

</div>

<div style={{border:'1px solid #ddd',padding:'20px',borderRadius:'8px'}}>

### Sensor Synchronization

Learn how Atlas aligns sensor timestamps using PPS and deterministic timing pipelines.

[Open Guide →](./sensor-synchronization)

</div>

<div style={{border:'1px solid #ddd',padding:'20px',borderRadius:'8px'}}>

### Evaluation Kit Setup

Step-by-step instructions to install and run the Atlas evaluation kit.

[Open Guide →](./evaluation-kit-setup)

</div>

</div>

---

## Atlas System Architecture
Sensors
(Camera / LiDAR / IMU / GNSS)
│
▼
Atlas Hardware
Deterministic Sensor Fabric
│
▼
DSIL SDK
Timestamp + Telemetry Layer
│
▼
Robot Compute Platform
(Jetson / ARM SBC / x86)


---

## Quick Start

1️⃣ Connect sensors to Atlas  
2️⃣ Connect Atlas to SBC via USB  
3️⃣ Run DSIL telemetry service  
4️⃣ Launch ROS2 perception pipeline
