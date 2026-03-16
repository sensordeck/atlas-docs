---
title: Downloads
sidebar_label: Downloads
---

# Atlas Downloads

This page provides engineering resources for teams evaluating or integrating **Atlas Deterministic Sensor Infrastructure (DSIL)** into robotics platforms.

The downloads below support multiple stages of the Atlas adoption process:

1. Hardware integration evaluation  
2. Software integration and testing  
3. System architecture review  
4. OEM pilot program preparation  

All files are intended for **robotics engineers, system architects, and perception software developers**.

---

# Hardware Integration Resources

These files help robotics hardware teams evaluate how Atlas fits within a robot chassis and sensor architecture.

## Atlas Hardware Integration Package

Includes mechanical and connector reference data needed for robot integration.

Package contents:

- Atlas STEP 3D Model  
- Atlas Mechanical Drawing (2D)  
- Atlas Mounting Pattern Reference  
- Atlas Connector Map  
- Atlas Pinout Table  
- Cable Routing Reference  
- Thermal Interface Guidelines  

Download:

[Download Atlas Hardware Integration Package](/downloads/hardware/Atlas_Hardware_Integration_Pack_v1.zip)

Upload this file to:

static/downloads/hardware/Atlas_Hardware_Integration_Pack_v1.zip

---

# Electrical Integration Resources

These documents describe the electrical architecture and signal specifications of Atlas.

They are typically used during electrical design reviews.

## Atlas Electrical Reference Package

Package contents:

- Atlas System Block Diagram  
- Atlas Power Architecture Overview  
- Atlas I/O Interface Specification  
- Atlas Synchronization Signal Specification  
- PPS Timing Specification  
- Brownout and Load-Shedding Behavior  
- Signal Voltage Level Reference  
- ESD Protection Model  

Download:

[Download Atlas Electrical Reference Package](/downloads/electrical/Atlas_Electrical_Reference_Pack.zip)

Upload this file to:

static/downloads/electrical/Atlas_Electrical_Reference_Pack.zip

---

# Software Integration Resources

These downloads help software teams integrate Atlas telemetry and synchronization into their robotics stack.

## DSIL SDK Starter Package

Includes tools and reference examples for integrating Atlas into development environments.

Package contents:

- DSIL SDK core library  
- Atlas CLI diagnostic tool  
- ROS2 bridge example  
- Sensor telemetry decoding example  
- Sample configuration files  

Download:

[Download DSIL SDK Starter Package](/downloads/software/atlas_dsil_sdk_v0.1.zip)

Upload this file to:

static/downloads/software/atlas_dsil_sdk_v0.1.zip

---

# Evaluation Kit Resources

These resources are intended for teams working with the Atlas Evaluation Kit.

## Atlas Evaluation Kit Quickstart Guide

Step-by-step instructions for bringing up the Atlas evaluation platform.

Guide includes:

- Jetson / Linux setup  
- Sensor connection reference  
- Telemetry verification  
- Synchronization validation example  

Download:

[Download Atlas Evaluation Kit Quickstart](/downloads/evaluation/Atlas_Eval_Kit_Quickstart.pdf)

Upload this file to:

static/downloads/evaluation/Atlas_Eval_Kit_Quickstart.pdf

---

# System Architecture Resources

These documents explain the architectural role of Atlas in robotics systems.

## Atlas DSIL System Architecture

This whitepaper describes how Atlas functions as a **Deterministic Sensor Infrastructure Layer (DSIL)** for robotics platforms.

Topics covered:

- Sensor aggregation architecture  
- Deterministic timing infrastructure  
- Synchronization model  
- Compute platform integration  
- Cross-robot platform reuse  

Download:

[Download Atlas DSIL System Architecture Whitepaper](/downloads/evaluation/Atlas_DSIL_System_Architecture.pdf)

Upload this file to:

static/downloads/evaluation/Atlas_DSIL_System_Architecture.pdf

---

# OEM Integration Resources

These documents are intended for robotics companies participating in the **Atlas White Label OEM Integration Pilot Program**.

## Atlas OEM Integration Package

Includes technical materials for engineering teams preparing for pilot integration.

Package contents:

- Atlas OEM Integration Guide  
- White Label Hardware Adaptation Overview  
- DSIL SDK Integration Model  
- Production Infrastructure Planning Guide  
- Pilot Program Overview  

Download:

[Download Atlas OEM Integration Package](/downloads/oem/Atlas_OEM_Integration_Pack.zip)

Upload this file to:

static/downloads/oem/Atlas_OEM_Integration_Pack.zip

---

# Notes for Integration Teams

Atlas is designed to function as **cross-platform sensor infrastructure** across multiple robot programs.

Once integrated, Atlas can serve as the deterministic synchronization backbone for:

- Perception sensor stacks  
- Navigation systems  
- Robotics research platforms  
- Production robotic fleets  

Teams evaluating Atlas are encouraged to begin with the **Evaluation Kit Quickstart Guide**, followed by the **Hardware Integration Package** for mechanical and electrical validation.
