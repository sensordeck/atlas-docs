# Atlas Developer Documentation

### Deterministic Sensor Infrastructure for Robotics

**Unify your IMU, GNSS, and LiDAR data with microsecond precision. Atlas is a high-throughput sensor gateway for deterministic robotics.**

Atlas establishes a **hardware time authority and sensor infrastructure layer** for modern robotics systems.

Instead of wiring sensors directly into the robot compute platform, Atlas creates a **dedicated integration layer** that synchronizes sensors, aggregates data streams, and delivers a unified perception pipeline.

Atlas allows robotics teams to treat **sensor integration as infrastructure**, eliminating repeated custom integration work across robot platforms.

---

## Designed for Real Robotics Systems

<p align="center">
<img src="/img/3cards.png" width="100%" alt="Atlas 3 cards" />
</p>

---

## 🚀 Time to Hello-World (ROS2 in Minutes)

Atlas integrates into your existing ROS2 stack in minutes.

Run two commands:
```bash
atlas_start
ros2 launch atlas_dsil_bridge telemetry.launch.py
```

### What you will see

Within seconds, Atlas telemetry appears in ROS2:

- `/atlas/status` → system health  
- `/atlas/pps` → timing signal state  
- `/atlas/sync_drift` → real-time synchronization error  

---

### What this means

**Before Atlas**

• Independent sensor clocks  
• Unpredictable timing offsets  
• Difficult debugging  

**With Atlas**

• Unified hardware time base  
• Deterministic sensor alignment  
• Observable synchronization state  

---

### No integration risk

- No driver changes required  
- No sensor firmware modification  
- Works with your existing ROS2 stack  

---

## Core Capabilities of Atlas

### 1. Time Authority
Atlas establishes a single hardware time authority across all connected sensors, ensuring consistent and deterministic timestamping for the entire perception stack.

### 2. Unified Sensor Integration
Atlas consolidates heterogeneous sensor interfaces and power delivery into a single structured integration layer, reducing wiring complexity and eliminating fragmented power architectures.

### 3. System Observability & Synchronization
Atlas exposes timing relationships, synchronization state, and sensor health through a unified telemetry layer, enabling full system observability and deterministic data alignment in ROS2 environments.

### 4. Cross-SKU Infrastructure
Atlas provides a reusable sensor infrastructure layer that scales across robot platforms and product SKUs, eliminating repeated integration work and enabling faster product development cycles.

---

## Atlas Architecture

<p align="center">
<img src="/img/Catalog2.png" width="65%" alt="Atlas deterministic sensor backbone architecture" />
</p>

Atlas sits between the **sensor domain** and the **robot compute platform**.

Sensors connect to Atlas → Atlas synchronizes and aggregates them → the robot compute platform receives a **time-aligned, unified perception pipeline**.

---

# Getting Started with Atlas

Atlas documentation is structured as a step-by-step system.

To fully understand how Atlas works and how to integrate it into your robotics platform, we recommend following this sequence:

---

## 1. [Sensor Synchronization](./sensor-synchronization.md)

Understand the core problem Atlas solves.

Learn why independent sensor timestamps lead to inconsistent perception, SLAM instability, and difficult debugging.

👉 Defines the **problem space**

---

## 2. [Hardware Architecture](./hardware-architecture.md)

See how Atlas solves synchronization at the physical level.

Atlas establishes a **sensor domain boundary** that unifies timing, power, and connectivity across all sensors.

👉 Defines the **system architecture**

---

## 3. [DSIL SDK](./dsil-sdk.md)

Understand how Atlas hardware becomes usable in software.

DSIL converts hardware timing into synchronized ROS2 timestamps, structured telemetry, and system observability.

👉 Defines the **infrastructure layer**

---

## 4. [ROS2 Integration](./ros2-integration.md)

Deploy Atlas into your existing robotics stack.

Atlas integrates without modifying drivers or pipelines, enabling immediate adoption.

👉 Defines the **integration model**

---

## What You Gain

By following this architecture, Atlas transforms sensor integration from:

**custom engineering work → deployable infrastructure**

- deterministic sensor timing  
- unified sensor interface  
- reduced integration complexity  
- improved system observability  

---

## Next Step

The best way to understand Atlas is to evaluate it in your own system.

👉 Request the **[Atlas Evaluation Kit](./evaluation-kit-setup.md)**

---

## Integration Resources

Atlas provides additional materials for evaluation and deployment:

- [Integration and Deployment FAQ](./integration-faq.md)
- [Downloads](./downloads.md)
