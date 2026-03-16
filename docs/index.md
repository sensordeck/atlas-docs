# Atlas Developer Documentation

Atlas establishes the timing authority for multi-sensor robotics systems.

Atlas provides a deterministic sensor backbone that allows robotics systems to synchronize, aggregate, and scale complex sensor stacks.

Atlas delivers four core capabilities:

• **Time Authority** — a single hardware timestamp authority for all connected sensors  
• **Sensor Aggregation** — multiple sensors integrated into one upstream connection  
• **DSIL SDK** — deterministic software layer for decoding, aligning, and integrating sensor telemetry  
• **Cross-SKU Standardization** — one sensor infrastructure reused across robot platforms  

Together these capabilities allow robotics teams to treat sensor integration as **infrastructure**, rather than rebuilding custom solutions for each robot platform.

---

# Atlas in One Diagram

<p align="center">
  <img src="/img/Catalog2.png" width="60%" alt="Atlas deterministic sensor backbone architecture" />
</p>

**Atlas establishes the timing authority and aggregation backbone for the robot perception stack.**

Sensors connect to Atlas → Atlas synchronizes and aggregates them → the robot compute platform receives a unified sensor pipeline.

## Time to Hello-World

Atlas is designed to integrate into a ROS2 robotics stack in minutes.

Once Atlas is connected to the robot compute platform, start the DSIL runtime and launch the ROS2 telemetry bridge.

```bash
# Start Atlas DSIL runtime
atlas_start

# Launch ROS2 telemetry bridge
ros2 launch atlas_dsil_bridge telemetry.launch.py
```

Within seconds, Atlas timing and infrastructure telemetry become visible to ROS2:

```
/atlas/status
/atlas/pps
/atlas/sync_drift
```

This allows robotics developers to observe synchronization state and timing behavior directly inside their ROS2 system.

---

# What Atlas Solves

Modern robots integrate multiple independent sensors such as:

• Cameras  
• LiDAR  
• IMU  
• GNSS  
• Synchronization triggers  

These sensors often operate with different clocks and communication interfaces:

• USB  
• Ethernet  
• SPI  
• UART  

Without a shared timing authority and software synchronization layer, robotics teams commonly encounter:

• Timestamp drift between sensors  
• Unstable perception pipelines  
• Difficult multi-sensor synchronization  
• Repeated development of custom sensor interface boards  
• Complex debugging across asynchronous sensor streams  

Engineering teams often spend months building internal infrastructure simply to make sensors work together reliably.

Atlas exists to simplify this integration.

---

# Atlas Core Principles

Atlas is designed around four engineering principles.

---

# Time Authority

Atlas provides a hardware timestamp authority for all connected sensors.

Instead of relying on independent device clocks, Atlas establishes a deterministic timing reference before sensor data enters the compute platform.

This allows perception systems to operate on a consistent time base across all sensors.

---

# Sensor Aggregation

Atlas aggregates multiple sensors into a single upstream connection to the robot compute platform.

Instead of connecting each sensor directly to the SBC, Atlas acts as the dedicated sensor backbone for the perception stack.

Benefits include:

• Reduced wiring complexity  
• Simplified sensor integration  
• Clearer system architecture  

---

# DSIL SDK

The **Deterministic Sensor Integration Layer (DSIL)** is the software stack that transforms Atlas from a hardware board into a complete sensor infrastructure platform.

The DSIL SDK runs on the robot compute platform and provides:

• Telemetry decoding from Atlas CDC channel  
• Sensor timestamp alignment  
• Deterministic synchronization pipeline  
• ROS2 integration nodes  
• Health monitoring and diagnostics  

DSIL converts raw sensor streams into a **synchronized perception data pipeline**.

Example workflow:

<p align="center">
  <img src="/img/Fig 1.png" width="60%" alt="DSIL Workflow" />
</p>

Because DSIL operates above the hardware layer, it allows robotics teams to integrate Atlas without writing custom synchronization infrastructure.

---

# Cross-SKU Standardization

Robotics companies typically build multiple robot models.

Without a shared sensor infrastructure, integration work must be repeated for each platform.

Atlas provides a reusable infrastructure layer that can be deployed across multiple robot SKUs and product lines.

The DSIL SDK ensures the same integration pipeline works across all systems.

---

# Atlas System Boundary

Atlas focuses on perception sensor infrastructure.

Sensors typically connected to Atlas include:

• Cameras (USB / UVC)  
• LiDAR sensors  
• IMU  
• GNSS  
• Synchronization triggers  

These sensors form the perception domain of a robotics system.

---

# Systems Outside Atlas Scope

Robot control systems remain connected to the robot controller or CAN bus network.

Examples include:

• motor controllers  
• motor drivers  
• wheel encoders  
• safety controllers  

High-bandwidth perception sensors may also connect directly to the robot compute platform:

• Ethernet LiDAR  
• GMSL cameras  
• MIPI / CSI cameras  

When time synchronization is required, these sensors can feed PPS or trigger signals into Atlas, allowing the entire perception stack to share the same timing authority.

See **Sensor Synchronization** for more details.

---

# Atlas Domain Model

Robotics systems using Atlas are typically organized into four domains.

| Domain | Responsibility |
|------|------|
| Perception Domain | Cameras, LiDAR, IMU, GNSS |
| Atlas Infrastructure | Sensor aggregation and timing authority |
| Compute Domain | Robot compute platform (Jetson / ARM SBC / x86) |
| Control Domain | Motor control and safety systems |

Atlas provides the deterministic sensor backbone between the **perception domain** and the **compute domain**.

---

# Internal Development vs Atlas

Many robotics teams initially attempt to build their own sensor integration infrastructure.

Typical internal effort:

| Task | Typical Effort |
|------|------|
| Interface board design | 1–2 months |
| Sensor synchronization debugging | 1–2 months |
| Driver integration | 1 month |
| System validation | 1–2 months |

Total engineering investment can easily reach **4–9 months**.

Atlas provides a ready-to-deploy sensor infrastructure so teams can focus on:

**• Prception algorithms  
• Robot navigation  
• Autonomy software**  

More importantly, once Atlas is adopted, the same infrastructure can be reused across future robot SKUs and product lines.

---

# Becoming an Internal Champion

Atlas is designed for robotics engineers responsible for integrating multi-sensor systems.

Common integration challenges include:

• Timestamp drift between sensors  
• Unstable perception pipelines  
• Repeated development of sensor interface boards  
• Complex wiring harnesses between sensors and compute platforms  
• Difficult debugging of asynchronous sensor systems  

Atlas replaces this fragmented integration work with a **Deterministic Sensor Infrastructure and Timing Authority** powered by **DSIL SDK**.

Many robotics teams begin by deploying Atlas on a single evaluation robot to validate the synchronization pipeline.

Once validated, the same infrastructure can be reused across future robot platforms.

Continue to **Hardware Architecture** to understand how the Atlas system works internally.

---

# Atlas Evaluation Kit

Atlas can be evaluated using a minimal sensor configuration.

Typical evaluation setup:

• USB camera  
• Ethernet LiDAR  
• IMU  
• GNSS  

Evaluation workflow:

connect sensors to the Atlas evaluation kit  
connect Atlas to the robot compute platform  
run DSIL telemetry pipeline  
observe synchronized sensor output  

Evaluation typically requires **less than 30 minutes**.

---

# Documentation Sections

The Atlas documentation is organized into the following sections.

### Hardware Architecture

Atlas hardware platform design and sensor aggregation architecture.

### DSIL SDK

Deterministic Sensor Integration Layer software stack.

### ROS2 Integration

How Atlas integrates with ROS2 perception pipelines.

### Sensor Synchronization

Technical explanation of the Atlas timestamp alignment pipeline.

### Evaluation Kit Setup

Step-by-step instructions for deploying the Atlas evaluation system.

---

# Start Exploring

To understand how Atlas works internally, begin with the **Hardware Architecture** documentation.

## Integration Resources

Atlas provides the core materials needed for engineering evaluation and pilot integration.

- [Integration & Deployment FAQ](./integration-faq)
- [Downloads](./downloads)
