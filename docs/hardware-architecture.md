---
sidebar_position: 2
title: Hardware Architecture
---

# Atlas Hardware Architecture

Atlas acts as the deterministic sensor infrastructure between the sensor stack and the robot compute platform.

Sensors supported:

- USB UVC Cameras
- USB LiDAR
- SPI IMU
- UART GNSS
- PPS synchronization

Atlas aggregates sensor data and synchronization signals before forwarding them to the SBC.
