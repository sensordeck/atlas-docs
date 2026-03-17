# Hardware Architecture

Atlas Fusion V2 provides a **deterministic sensor backbone** for robotics systems.

It consolidates sensor connectivity, power distribution, and timing into a single hardware layer between sensors and the robot compute platform.

---

## What Atlas Fusion V2 Does

Atlas Fusion V2 transforms sensor integration from fragmented wiring into a structured hardware system.

Instead of connecting every sensor directly to the SBC, all sensors connect to Atlas.

Atlas exposes the entire sensor subsystem through a **single upstream interface**.

<p align="center">
  <img src="/img/Fig 2.png" width="60%" alt="Atlas Fusion V2 architecture" />
</p>

---

## Core Architecture Pillars

Atlas Fusion V2 is built on three core hardware principles:

### 1. One-Cable Sensor Integration

Atlas replaces multi-cable sensor wiring with a **single upstream connection**.

Instead of:

- multiple USB cables  
- separate UART wiring  
- individual timing lines  
- distributed power modules  

Atlas provides:

- one upstream interface to the SBC  
- one centralized sensor backbone  
- one clean system integration boundary  

**Result:**

- reduced cable harness complexity  
- cleaner mechanical design  
- lower integration effort  

<p align="center">
  <img src="/img/Fig 3.png" width="60%" alt="Atlas Fusion V2 One Cable" />
</p>

---

### 2. Centralized Power Distribution

Atlas provides **protected onboard power** for all connected sensors.

Instead of multiple external power modules, sensors are powered through a unified board-level design.

**Result:**

- reduced electrical noise from scattered converters  
- improved power stability across sensors  
- simplified system power architecture  

---

### 3. Deterministic Timing Authority

Atlas establishes a **hardware-level timing boundary** for all connected sensors.

It accepts external timing input and distributes synchronization signals across the sensor stack.

**Result:**

- aligned sensor capture timing  
- consistent timestamp reference  
- improved multi-sensor data correlation  

<p align="center">
  <img src="/img/Fig 4.png" width="60%" alt="Atlas Fusion V2 Deterministic Timing Authority" />
</p>

---

## Why This Architecture Matters

Traditional robotics systems connect sensors directly to the SBC, resulting in:

- 7–10 independent sensor cables routed to the SBC
- mixed interfaces across USB, UART, I2C, SPI, and PPS  
- multiple sensor powers delivered through scattered converters and ad hoc wiring
- No clean timing boundary across devices  
- difficult debugging and maintenance due to loose connectors and harness complexity
- Repeated engineering work for every new robot SKU  

Atlas replaces this with a structured hardware model:

- one sensor backbone  
- one power domain  
- one timing authority  
- one upstream connection  

This simplifies both development and deployment.

---

## Deployment Advantages

### Simpler Integration

- fewer cables routed to the SBC  
- reduced dependency on SBC I/O ports  

### Higher Reliability

- fewer connection points at the SBC  
- reduced vibration-related failures  

### Cleaner Electrical Design

- centralized power reduces interference  
- fewer independent switching sources  

### Faster Debugging

- issues can be isolated at the Atlas boundary  
- no need to trace multiple cables  

---

## Platform Reuse Across SKUs

Atlas Fusion V2 is designed as a **reusable sensor backbone** across robot platforms.

Once adopted, the same architecture can be deployed across multiple SKUs and product lines without redesigning sensor integration.

**Result:**

- faster development of new robot platforms  
- reduced engineering repetition  
- consistent system architecture across products  

---

## System Role

Atlas Fusion V2 does not replace the robot compute platform. It manages the **sensor-side infrastructure**, allowing the robot compute platform to focus on: **Perception，Planning and AI processing**.

At the hardware level, Atlas provides:

- **Sensor aggregation** across mixed interfaces
- **Protected onboard power** for connected sensor groups
- **A board-level timing authority**
- **External PPS input and timing signal redistribution**
- **Single-cable upstream integration** to the compute platform
- **A strong reference design for white-label OEM customization**

---

## Reference Platform for OEM Integration

Atlas Fusion V2 is designed as a **production-oriented reference board**, not just an evaluation kit.

It serves as a **white-label hardware architecture** that enables OEM teams to move from evaluation to deployment without redesigning the sensor integration layer.

---

## How OEM Teams Use Atlas

### Evaluation Reference Board

Use Atlas as-is to validate:

- sensor connectivity  
- timing behavior  
- system integration  

---

### Subsystem Integration Platform

Deploy Atlas as a reusable sensor subassembly in pilot or low-volume systems.

---

### White-Label Derivative Design

Customize Atlas for production while preserving the core architecture.

Typical customization areas:

- connector configuration  
- power input and budget  
- timing I/O behavior  
- MCU or control logic  
- enclosure and branding  

---

## Summary

The Atlas hardware stack transforms sensor integration from a one-time engineering task into a scalable, reusable hardware foundation that can be deployed across multiple robot SKUs and product lines.

---

## Next Steps

- See **Sensor Synchronization** for timing details  
- See **DSIL SDK** for software integration  
- See **Evaluation Kit Setup** for getting started  
