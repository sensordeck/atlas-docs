# DSIL SDK
Deterministic Sensor Integration Layer (DSIL)

DSIL is the software layer of the Atlas Sensor Infrastructure platform.

It provides deterministic telemetry decoding, timestamp synchronization, 
and ROS2 integration for multi-sensor robotics systems.

---

## Atlas Architecture

Sensors → Atlas Fusion Hardware → DSIL SDK → Robot Compute Platform

DSIL converts hardware telemetry streams into synchronized sensor data 
that robotics applications can consume through ROS2 or standard APIs.

Supported sensor types:

• USB cameras (UVC)  
• USB LiDAR  
• SPI / UART IMU  
• GNSS with PPS timing  

---

## Key Features

Deterministic sensor telemetry pipeline

Hardware timestamp alignment

Sensor health monitoring

ROS2 integration

Multi-sensor synchronization

Plug-and-play sensor evaluation support

---

## Quick Start

Clone the repository:
