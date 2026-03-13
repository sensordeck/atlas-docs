---
sidebar_position: 1
title: Atlas Developer Documentation
---

# Atlas Developer Documentation

### Deterministic Sensor Infrastructure for Robotics

Atlas provides a unified hardware and software platform that standardizes sensor timing, telemetry, and integration across robotics compute platforms.

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
