---
title: DSIL SDK
sidebar_label: DSIL SDK
description: The Deterministic Sensor Integration Layer (DSIL) SDK provides timing-aware telemetry, timestamp alignment, and ROS2-facing software abstraction for Atlas Fusion V2.
---

# Deterministic Sensor Integration Layer (DSIL) SDK

> The DSIL SDK is the software layer that allows a robotics team to evaluate Atlas quickly, validate timing behavior, and confidently adopt it into a production system.
>
> Atlas Fusion V2 defines the timing boundary in hardware. DSIL turns that boundary into structured, timing-aware data for Linux, ROS2, and robotics software.

---

## Why It Matters

In many robotics systems, the hardware may already be connected, but the software stack still lacks:

- trustworthy timing visibility
- synchronization state visibility
- board-level health awareness
- a clean path from hardware events into ROS2

That gap creates real integration pain:

- engineers spend time reverse-engineering timestamps
- sensor fusion behavior becomes harder to trust
- system debugging depends on custom scripts and ad hoc logging
- every new robot program repeats the same integration work

DSIL exists to remove that software burden.

As a result:

- timing becomes observable  
- synchronization becomes verifiable  
- system state becomes inspectable  

---

## Primary Value

DSIL sits between Atlas telemetry and the robot application layer.

It gives the host system a clean way to consume:

- timing-aware metadata
- synchronization state
- sensor health visibility
- board power and runtime status
- structured telemetry over a standard host interface

This is what allows Atlas to move from **hardware capability** to **deployable infrastructure**.

---

## DSIL SDK v1.0 — Public Core Specification

DSIL SDK v1.0 defines the **final public software boundary** of the Atlas platform.

It is not a broad roadmap.

It is the **stable, production-ready definition** of how Atlas integrates into the robot compute stack.

---

## DSIL SDK v1.0 Capability Architecture

DSIL SDK v1.0 is organized into four core capability domains, each representing a distinct layer of value delivered to robotics systems.

---

### 1. Time Correlation & Alignment Engine

This domain defines the core timing intelligence of DSIL.

It transforms raw sensor data arrival into timing-aware data aligned with Atlas hardware events.

Includes:

- timestamp correlation and alignment engine  
- synchronization-aware timestamp mapping to ROS2 (`header.stamp`)  

Primary value:

- Converts non-deterministic sensor data into a deterministic timing domain  
- Enables consistent multi-sensor temporal alignment  

---

### 2. System Observability

This domain exposes the internal state of the sensor infrastructure to software.

Includes:

- sync source and sync state model  
- sensor health visibility  
- board power visibility (hardware-dependent)  

Primary value:

- Makes timing, synchronization, and system health visible to the robot compute stack  
- Enables engineers to verify system correctness without custom debugging tools  

---

### 3. Telemetry Transport & Decoding

This domain defines how Atlas communicates with the host system.

Includes:

- stable CDC telemetry transport (`/dev/ttyACM0`)  
- runtime telemetry decoding  

Primary value:

- Provides a standardized, driver-free communication channel  
- Ensures consistent and structured data delivery to host software  

---

### 4. Developer Tooling & Platform Support

This domain enables integration, validation, and deployment within robotics environments.

Includes:

- command-line interface (CLI) tools  
- ROS2 monitoring integration  
- documented message schemas  
- documented installation flow  
- supported Ubuntu and Jetson-class deployment path  

Primary value:

- Reduces integration effort and time-to-first-success  
- Provides a reference software layer for evaluating and deploying Atlas  

---

## What v1.0 Must Accomplish

DSIL SDK v1.0 completes the core Atlas value proposition by making the sensor infrastructure observable, verifiable, and usable within a standard robotics software stack.

It must enable:

- **Deterministic timing awareness** — sensor data is aligned to a consistent hardware timing domain  
- **Synchronization transparency** — the system exposes timing source and synchronization state to software  
- **System observability** — sensor activity, system health, and power status are visible without custom tooling  
- **Immediate ROS2 usability** — data and telemetry are accessible through standard ROS2 workflows  

This defines the **minimum complete system behavior** required for Atlas to be usable in real-world robotics deployments.

---

## Device Interface:

Atlas exposes telemetry through a standard Linux CDC device:


/dev/ttyACM0


No custom kernel modules are required.

---

## Software Requirements

Minimum environment:

| Component | Requirement |
|------|------|
| OS | Ubuntu 22.04 LTS |
| Kernel | Linux 5.15+ |
| ROS | ROS2 Humble |
| Dependencies | libusb-1.0-0, python3-serial |
| ROS Packages | ros-humble-desktop |

---

## Product Boundary Definition

Atlas DSIL has only **two public software stages**:

### DSIL SDK v1.0
The finalized public core platform.

### DSIL SDK v0.1
Evaluation software (covered in the Evaluation Kit section).

---

### What Comes After v1.0

Anything beyond the v1.0 boundary becomes:

**White-Label OEM Pilot DSIL SDK (VX)**

This includes:

- Customer-specific Atlas PCB variants  
- Custom sensor bundles  
- Custom timing topologies  
- Deployment-specific adaptations  
- Integration-specific engineering  

This boundary is intentional.

It keeps the public platform:

- stable  
- understandable  
- deployable  

while reserving deeper engineering work for **OEM pilot programs**.

---

## Integration Philosophy

DSIL is designed to **augment**, not replace, existing robotics software.

- Standard sensor drivers remain unchanged  
- DSIL operates alongside them  
- Timing and system visibility are added as a separate layer  

This avoids disruption to existing perception and control pipelines.

---

## Strategic Role of DSIL

For robotics teams, DSIL changes the integration model from:

**custom sensor plumbing per robot**

to:

**reusable deterministic sensor infrastructure across product lines**

That is the long-term value of Atlas.

---

## Frequently Asked Questions

### Does DSIL require Atlas hardware?

Yes.

DSIL depends on Atlas-generated telemetry, timing signals, and board-level observability.

---

### Does DSIL replace ROS2 sensor drivers?

No.

DSIL preserves standard drivers and adds timing-aware infrastructure alongside them.

---

### Does DSIL require custom perception code?

No.

The goal is to improve timing visibility and synchronization without forcing changes to perception stacks.

---

### Is DSIL a long roadmap with many versions?

No.

The public boundary is intentionally simple:

- DSIL SDK v1.0 — core platform  
- DSIL SDK v0.1 — evaluation software  

Anything beyond this becomes OEM-specific work.

---

## Next Steps

- See **Sensor Synchronization** for timing details  
- See **ROS2 Integration** for software integration  
- See **Evaluation Kit Setup** for getting started  
