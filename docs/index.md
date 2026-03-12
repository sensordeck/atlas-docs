# Atlas Overview

Atlas is a deterministic sensor infrastructure platform for robotics.

It standardizes the integration of cameras, LiDAR, IMU, GNSS, and timing signals into robot compute platforms.

## Platform Stack

Sensors → Fusion Hardware → DSIL SDK → ROS2 / Robot Applications

## Core Components

### Fusion Hardware
Atlas Fusion is the hardware platform that aggregates sensors and generates deterministic telemetry streams.

### Fusion Firmware
Fusion firmware performs sensor acquisition, timestamp generation, telemetry packaging, and health monitoring.

### DSIL SDK
The Deterministic Sensor Integration Layer decodes telemetry streams and provides synchronized sensor data to robot software.

### ROS2 Integration
ROS2 nodes publish synchronized sensor data into standard robotics workflows.
