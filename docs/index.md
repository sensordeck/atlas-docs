# Atlas Developer Documentation

### Deterministic Sensor Infrastructure for Robotics

Atlas establishes a **hardware timing authority and sensor backbone** for modern robotics systems.

Instead of wiring sensors directly into the robot compute platform, Atlas creates a **dedicated infrastructure layer** that synchronizes sensors, aggregates data streams, and delivers a unified perception pipeline.

Atlas enables robotics teams to treat **sensor integration as infrastructure**, rather than rebuilding custom solutions for every robot platform.

---

# Atlas Architecture

<p align="center">
<img src="/img/Catalog2.png" width="60%" alt="Atlas deterministic sensor backbone architecture" />
</p>

Atlas sits between the **sensor domain** and the **robot compute platform**.

Sensors connect to Atlas → Atlas synchronizes and aggregates them → the compute platform receives a unified sensor pipeline.

---

# Time to Hello-World

Atlas is designed to integrate into a ROS2 robotics stack in minutes.

Once Atlas is connected to the robot compute platform, start the DSIL runtime and launch the ROS2 telemetry bridge.

    # Start Atlas DSIL runtime
    atlas_start

    # Launch ROS2 telemetry bridge
    ros2 launch atlas_dsil_bridge telemetry.launch.py

Within seconds Atlas infrastructure telemetry becomes visible inside ROS2:

- `/atlas/status`
- `/atlas/pps`
- `/atlas/sync_drift`

This allows robotics engineers to observe synchronization state and timing behavior directly within their perception pipeline.

---

# Core Capabilities

Atlas provides four foundational capabilities for robotics sensor infrastructure.

### Time Authority

Atlas establishes a **single hardware timestamp authority** for all connected sensors, ensuring a consistent timing reference across the perception stack.

### Sensor Aggregation

Multiple sensors connect to Atlas and are aggregated into a **single upstream connection** to the robot compute platform.

### DSIL SDK

The **Deterministic Sensor Integration Layer (DSIL)** provides telemetry decoding, timestamp alignment, and ROS2 integration for Atlas-enabled systems.

### Cross-SKU Infrastructure

Atlas provides a reusable sensor infrastructure layer that can be deployed across multiple robot platforms and product lines.

---

# Explore the Atlas Platform

Atlas documentation is organized into the following sections.

### Hardware Architecture

Atlas hardware platform design and sensor aggregation architecture.

### DSIL SDK

Deterministic Sensor Integration Layer software stack.

### ROS2 Integration

How Atlas integrates with ROS2 perception pipelines.

### Sensor Synchronization

Technical explanation of the Atlas timing and synchronization model.

### Evaluation Kit Setup

Step-by-step instructions for deploying the Atlas evaluation system.

---

# Integration Resources

Atlas provides the core materials required for engineering evaluation and deployment.

- [Integration and Deployment FAQ](./integration-faq)
- [Downloads](./downloads)
