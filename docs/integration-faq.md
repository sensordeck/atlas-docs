---
title: Integration FAQ
sidebar_label: Integration FAQ
---

# Integration FAQ

### Questions from Robotics Teams Evaluating Atlas for Real Deployment

This FAQ is structured to address the most common technical, operational, and integration questions raised by robotics engineers, system architects, and program managers when evaluating Atlas.

The sections follow the Atlas documentation flow, allowing teams to quickly resolve concerns at each stage of evaluation and deployment.

---

# Atlas (Platform Overview)

### What problem does Atlas actually solve?

Atlas establishes a **hardware-backed sensor infrastructure layer** for robotics systems.

Instead of integrating sensors individually into the SBC, Atlas:

- centralizes sensor connectivity  
- distributes protected power  
- enforces a deterministic timing boundary  
- exposes structured telemetry upstream  

This reduces system complexity, improves reliability, and enables scalable sensor integration.

---

### Is Atlas replacing my compute stack or perception pipeline?

No.

Atlas is **not a compute platform** and does not replace:

- ROS2  
- perception frameworks  
- SLAM systems  
- sensor drivers  

Atlas operates as an **infrastructure layer beneath the software stack**.

---

### Why not just connect sensors directly to the SBC?

Direct integration creates:

- inconsistent timing across sensors  
- fragile wiring and connectors  
- duplicated power design  
- repeated integration effort per robot SKU  

Atlas eliminates these issues by creating a **standardized sensor integration boundary**.

---

# Sensor Synchronization

### Do I need all my sensors to support external sync?

No.

Atlas works with:

- synchronized sensors (via PPS / trigger)  
- unsynchronized sensors (via DSIL timestamp correction)  

You can adopt Atlas incrementally without replacing your sensor stack.

---

### Does Atlas modify sensor firmware or internal clocks?

No.

Atlas **does not touch sensor firmware**.

Instead:

- it captures hardware timing events  
- DSIL maps those events to ROS2 timestamps  

This ensures compatibility with:

- UVC cameras  
- serial sensors  
- LiDAR drivers  
- standard ROS2 drivers  

---

### What level of synchronization accuracy can I expect?

Atlas provides **hardware-aligned timing events** with software correction applied via DSIL.

Accuracy depends on:

- sensor interface latency  
- USB transport characteristics  
- system load  

For most robotics workloads (SLAM, perception fusion), Atlas achieves **deterministic and repeatable alignment sufficient for production systems**.

---

### What happens if I don’t use PPS input?

Atlas can still operate using:

- internal timing reference  
- software-based alignment  

However, PPS improves **global time consistency**, especially for:

- GNSS-integrated systems  
- multi-robot coordination  

---

# Hardware Architecture

### What sensors can I connect to Atlas?

Atlas supports:

- USB 3.0 sensors (cameras, LiDAR)  
- UART sensors  
- I2C sensors  
- SPI sensors  
- navigation sensors via UART + PPS  

---

### Can Atlas power my sensors?

Yes.

Atlas includes **protected onboard power distribution**.

However, total power availability depends on:

- input power source  
- board configuration  

Refer to the **Power Capability section** for system-level limits.

---

### Is Atlas industrial-grade?

Yes, the reference design includes:

- locking connectors  
- ESD / TVS protection  
- power protection (OCP, OVP, etc.)  

OEM versions can further adapt:

- connector types  
- voltage levels  
- environmental requirements  

---

### Can I modify the hardware for my robot?

Yes.

Atlas is designed as a **reference platform for white-label OEM integration**.

Customization includes:

- connector changes  
- mechanical form factor  
- sync interface adaptation  
- power scaling  

---

# DSIL SDK

### What exactly does DSIL do?

DSIL (Deterministic Sensor Integration Layer):

- decodes Atlas telemetry  
- applies timestamp correction  
- exposes structured data to ROS2  

It bridges **hardware timing → software integration**.

---

### Where does timestamp correction happen?

In software.

DSIL applies a dynamic offset:

- based on hardware timing events captured by Atlas  
- mapped to ROS2 message headers  

This ensures:

- no modification to sensor drivers  
- full compatibility with existing pipelines  

---

### Does DSIL add CPU overhead?

Minimal.

Typical usage:

- < 2% CPU on standard SBC platforms  

DSIL is designed to avoid interfering with:

- SLAM  
- navigation  
- perception workloads  

---

### What happens if DSIL crashes or disconnects?

Atlas hardware continues operating independently.

When DSIL reconnects:

- telemetry resumes  
- synchronization state is re-established  

This ensures **non-blocking system behavior**.

---

# ROS2 Integration

### Do I need to modify my ROS2 drivers?

No.

Atlas integrates **without modifying existing ROS2 drivers**.

---

### How do I start using Atlas in ROS2?

Launch DSIL alongside your existing stack:
