# DSIL SDK

Deterministic Sensor Integration Layer

The Deterministic Sensor Integration Layer (DSIL) is the software stack that allows robotics systems to consume synchronized multi-sensor data from Atlas.

Atlas provides the hardware timing authority and sensor aggregation infrastructure.

DSIL converts this infrastructure into a usable software interface for robotics applications.

DSIL runs on the robot compute platform and provides:

• Deterministic sensor timestamp alignment  
• Telemetry decoding from Atlas  
• Sensor health monitoring  
• ROS2 integration nodes  
• Unified perception data interfaces  

Together Atlas hardware and DSIL SDK form a complete deterministic sensor infrastructure.

---

# DSIL Architecture

The DSIL SDK sits between the Atlas hardware platform and the robotics software stack.

System flow:

Sensors  
↓  
Atlas Hardware (aggregation + timing authority)  
↓  
CDC Telemetry Channel  
↓  
DSIL SDK  
↓  
ROS2 / Perception Stack  

Atlas handles the physical sensor integration.

DSIL handles the software integration.

This separation allows robotics teams to integrate complex sensor stacks without building custom synchronization infrastructure.

---

# Atlas Telemetry Channel

Atlas exposes a telemetry channel to the compute platform through a USB CDC device.

Typical device path:

    /dev/ttyACM0

This channel transports structured sensor telemetry and timing information from Atlas to the compute platform.

Telemetry typically includes:

• Sensor timestamp metadata  
• Synchronization signals  
• PPS timing events  
• Sensor health status  
• Hardware diagnostics  

The CDC channel is designed to provide deterministic metadata flow independent from high-bandwidth sensor streams.

For example:

USB cameras transmit video through USB UVC directly to the compute platform.

Atlas simultaneously provides timing and synchronization metadata through the CDC telemetry channel.

---

# DSIL Telemetry Pipeline

DSIL includes a telemetry pipeline responsible for decoding Atlas telemetry and aligning sensor data streams.

Typical telemetry flow:

Atlas CDC Telemetry Device

    /dev/ttyACM0

↓

DSIL Telemetry Decoder

↓

Timestamp Alignment Engine

↓

ROS2 Sensor Topics

↓

Perception / Navigation / SLAM pipelines

This pipeline converts raw Atlas telemetry into structured robotics data streams.

---

# Timestamp Alignment

Robotics perception pipelines require consistent timestamps across multiple sensors.

Without synchronization:

• Camera timestamps drift from LiDAR timestamps  
• IMU timestamps drift from GNSS time  
• Perception algorithms receive inconsistent sensor frames  

Atlas establishes the hardware timing authority.

DSIL propagates this timing authority into the compute platform.

The DSIL timestamp alignment engine performs:

• Timestamp normalization  
• PPS event propagation  
• Synchronization boundary detection  
• Sensor frame alignment  

This allows perception pipelines to operate on a consistent time base.

---

# Example DSIL Workflow

A typical robotics system using Atlas and DSIL operates as follows.

1. Sensors connect to Atlas.

Examples:

• USB camera  
• LiDAR sensor  
• IMU  
• GNSS receiver

2. Atlas aggregates sensor connectivity and provides timing authority.

3. Atlas exposes a CDC telemetry device to the compute platform.

Example:

    /dev/ttyACM0

4. DSIL reads telemetry from the device.

Example command:

    dsil_telemetry --device /dev/ttyACM0

5. DSIL converts telemetry into ROS2 topics.

6. Robotics perception software consumes synchronized sensor streams.

---

# ROS2 Integration

DSIL integrates directly with ROS2 robotics software pipelines.

The DSIL ROS2 node architecture typically follows this model.

Atlas CDC Telemetry Channel

    /dev/ttyACM0

↓

DSIL Telemetry ROS2 Node

    dsil_telemetry_node

↓

ROS2 Topics

    /imu/data
    /gnss/fix
    /pps/trigger
    /sensor/health

↓

Perception / Navigation / SLAM nodes

This allows existing ROS2 perception software to integrate with Atlas without modification.

---

# DSIL CLI Tools

The DSIL SDK includes command line tools for debugging and development.

Example tools include:

dsil_telemetry

Reads raw telemetry data from Atlas.

Example:

    dsil_telemetry --device /dev/ttyACM0

dsil_health

Displays sensor health and synchronization status.

Example:

    dsil_health

dsil_time

Displays current Atlas time reference and PPS status.

Example:

    dsil_time

These tools allow robotics engineers to quickly validate synchronization pipelines during system integration.

---

# Sensor Health Monitoring

Atlas monitors sensor infrastructure status and publishes telemetry through DSIL.

Typical monitoring information includes:

• Sensor connectivity status  
• PPS lock state  
• Synchronization trigger events  
• Ppower subsystem status  
• Hardware diagnostics  

This telemetry allows robotics teams to detect sensor failures or synchronization issues early.

---

# Why DSIL Exists

Most robotics companies build custom infrastructure to synchronize multiple sensors.

Typical internal development includes:

• timestamp alignment infrastructure  
• sensor interface drivers  
• synchronization debugging tools  
• perception pipeline validation  

This infrastructure often takes several months to develop and must be maintained across robot platforms.

DSIL provides this infrastructure as a reusable software layer.

This allows robotics teams to focus on:

• Perception algorithms  
• Autonomy software  
• Robot navigation

instead of building sensor synchronization infrastructure.

---

# DSIL Roadmap

The DSIL SDK will evolve to include additional infrastructure capabilities.

Future DSIL features may include:

• expanded sensor telemetry schemas  
• deterministic sensor replay tools  
• sensor timing diagnostics  
• distributed synchronization support  
• advanced ROS2 tooling

These capabilities will further simplify multi-sensor robotics system integration.

---

# Next Steps

To understand the Atlas hardware platform, continue to:

Hardware Architecture

To understand how Atlas synchronizes sensors, see:

Sensor Synchronization
