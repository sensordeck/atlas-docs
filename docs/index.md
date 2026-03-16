# Atlas Developer Documentation

### Deterministic Sensor Infrastructure for Robotics

Atlas establishes a **hardware timing authority and sensor backbone** for modern robotics systems.

Instead of wiring sensors directly into the robot compute platform, Atlas creates a **dedicated infrastructure layer** that synchronizes sensors, aggregates data streams, and delivers a unified perception pipeline.

Atlas allows robotics teams to treat **sensor integration as infrastructure**, rather than rebuilding custom solutions for every robot platform.

---

## Atlas Architecture

<p align="center">
<img src="/img/Catalog2.png" width="65%" alt="Atlas deterministic sensor backbone architecture" />
</p>

Atlas sits between the **sensor domain** and the **robot compute platform**.

Sensors connect to Atlas → Atlas synchronizes and aggregates them → the robot compute platform receives a unified perception pipeline.

---

## Time to Hello-World

Atlas is designed to integrate into a **ROS2 robotics stack in minutes**.

Once Atlas is connected to the robot compute platform, start the DSIL runtime and launch the ROS2 telemetry bridge.

    # Start Atlas DSIL runtime
    atlas_start

    # Launch ROS2 telemetry bridge
    ros2 launch atlas_dsil_bridge telemetry.launch.py

Within seconds Atlas infrastructure telemetry becomes visible inside ROS2:

- `/atlas/status`
- `/atlas/pps`
- `/atlas/sync_drift`

Engineers can immediately observe synchronization state and timing behavior inside the perception pipeline.

---

## Core Capabilities

Atlas provides four foundational capabilities for robotics sensor infrastructure.

### Time Authority

Atlas establishes a **single hardware timestamp authority** for all connected sensors, ensuring a consistent timing reference across the perception stack.

### Sensor Aggregation

Atlas aggregates multiple sensors into a **single upstream connection** to the robot compute platform.

By consolidating sensor interfaces and providing centralized power distribution, Atlas significantly reduces **cable harness complexity and scattered power modules**, resulting in a cleaner and more reliable perception system architecture.

### DSIL SDK

The **Deterministic Sensor Integration Layer (DSIL)** provides telemetry decoding, timestamp alignment, synchronization diagnostics, and ROS2 integration.

### Cross-SKU Infrastructure

Atlas provides a reusable sensor infrastructure layer that can be deployed across multiple robot platforms and product lines.

---

## Explore the Atlas Platform

Atlas documentation is organized into the following sections.

### [Hardware Architecture](./hardware-architecture)

Atlas hardware platform design and sensor aggregation architecture.

### [DSIL SDK](./dsil-sdk)

Deterministic Sensor Integration Layer software stack.

### [ROS2 Integration](./ros2-integration)

How Atlas integrates with ROS2 perception pipelines.

### [Sensor Synchronization](./sensor-synchronization)

Technical explanation of the Atlas timing and synchronization model.

### [Evaluation Kit Setup](./evaluation-kit-setup)

Step-by-step instructions for deploying the Atlas evaluation system.

### [White-Label OEM Integration Pilot Program](./oem-integration-pilot-program)

How Atlas supports OEM evaluation, system customization, and pilot deployment for production-oriented robotics programs.

---

## Integration Resources

Atlas provides materials for engineering evaluation and deployment.

- [Integration and Deployment FAQ](./integration-faq)
- [Downloads](./downloads)
