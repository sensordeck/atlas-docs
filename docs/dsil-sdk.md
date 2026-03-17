---
title: DSIL SDK
sidebar_label: DSIL SDK
sidebar_position: 3
description: The Deterministic Sensor Integration Layer (DSIL) SDK provides timing-aware telemetry, timestamp alignment, and ROS2-facing software abstraction for Atlas Fusion V2.
---

# DSIL SDK

> The Deterministic Sensor Integration Layer (DSIL) is the software layer that makes Atlas timing usable in the robot compute stack.  
> Atlas defines the timing boundary in hardware. DSIL turns that boundary into structured, timing-aware data for Linux, ROS2, and robotics software.

---

## Why DSIL Exists

In real robotics deployments, multi-sensor systems often fail at the time layer:

- GNSS PPS may arrive, but IMU data is not aligned to it
- Multiple cameras may operate independently and drift apart
- LiDAR, camera, and inertial streams may arrive with unrelated timing assumptions
- Software often has to infer or reconstruct alignment after the fact
- Fusion quality can degrade under motion, vibration, buffering, and latency variation

Atlas solves the hardware side of this problem by establishing a **board-managed timing domain**.

DSIL solves the software side by making that timing domain visible, usable, and actionable in the compute stack.

---

## What DSIL Does

DSIL is the software layer that sits between Atlas telemetry and the robot application layer.

It is responsible for:

- decoding Atlas telemetry and timing state
- interpreting timing events in a structured software model
- associating incoming sensor data with Atlas timing boundaries
- publishing timing-aware outputs to the host
- exposing a clean integration path for ROS2 and higher-level robotics software

In simple terms:

**Atlas defines time in hardware. DSIL makes that time usable in software.**

---

## DSIL Timing Model

Atlas hardware establishes the timing boundary.

DSIL applies that timing model to the software-visible data plane.

Rather than changing sensor firmware or attempting to modify sensor silicon clocks, DSIL works by correlating sensor data with Atlas-generated or Atlas-observed timing events.

This allows the compute platform to work from a **single timing-aware software model** instead of treating each sensor as an isolated timing source.

---

## Mechanics of Synchronization

DSIL does not modify sensor firmware or internal sensor clocks.

Instead, DSIL applies a **software-level time alignment model**:

1. Atlas receives or generates timing events such as PPS, SYNC, and TRIGGER
2. Atlas records relevant event boundaries inside the board timing domain
3. Sensor data enters the Atlas-managed system through supported interfaces
4. Timing metadata and telemetry are exported upstream
5. DSIL associates returned data with the relevant timing event or timing epoch
6. Corrected timing information is then exposed at the host software layer

DSIL performs **timestamp correction and timing association at the data layer**, not at the device firmware layer.

This approach provides several important advantages:

- compatibility with standard drivers
- no vendor firmware dependency
- non-invasive integration
- portability across different sensor vendors and compute platforms

---

## Timing Authority as a Closed Loop

The real difference between a true timing system and a simple signal generator is the closed loop between **timing events** and **returned data**.

A basic pulse source only emits pulses.

Atlas + DSIL are designed to support a full timing loop:

1. a timing event is issued or received
2. the event boundary is recorded by Atlas
3. sensor data is captured or arrives in the system
4. DSIL associates that data with the relevant timing event or timing epoch
5. timing state and correlation results are exported upstream

Conceptually:

<p align="center">
  <img src="/img/Fig 4.png" width="60%" alt="Atlas DSIL closed-loop timing model" />
</p>

This is what elevates Atlas from a board that merely exposes timing pins into a platform that supports **timing authority with data correlation**.

---

## Hardware Timestamping Model

Atlas is designed around a hardware timestamping philosophy rather than relying only on host-side software arrival timestamps.

DSIL consumes and organizes this timing information into a structured software model.

The timing path supports multiple layers of timestamp relevance:

| Timing layer | Purpose |
|---|---|
| External PPS alignment | Aligns Atlas to an external time reference when available |
| UART + PPS correlation | Supports tighter association for timing-aware serial sensors |
| USB device arrival timing | Records timing information as data enters the Atlas-managed domain |
| Trigger / sync event correlation | Relates returned data to board-issued timing events |
| Upstream telemetry reporting | Exposes timing state and diagnostics to the host |

### Intended result

By the time sensor data reaches the compute platform, Atlas has already established the relevant timing boundary for that path, and DSIL makes that boundary usable in software.

That is the practical meaning of Atlas time authority in the host stack.

---

## DSIL Correlation Pipeline

DSIL builds a timing-aware software pipeline on top of the Atlas timing domain.

| Stage | DSIL role |
|---|---|
| Timing input | Receive Atlas timing state and event telemetry |
| Event interpretation | Understand PPS, SYNC, and TRIGGER boundaries |
| Data association | Map returned sensor data to timing epochs or issued events |
| Timestamp normalization | Produce corrected timing-aware host-visible outputs |
| Middleware integration | Publish structured outputs to ROS2 and application software |

This allows the system to move from **raw sensor arrival** to **timing-aware software interpretation**.

Representative timing flow:

<p align="center">
  <img src="/img/Fig 12.png" width="60%" alt="Atlas DSIL closed-loop timing model" />
</p>

This diagram illustrates how Atlas timing propagates through the system and is converted into software-visible timestamps

### Result

- Sensor data aligns to a **shared hardware timing domain**
- Timestamps reflect **deterministic capture events**, not host arrival time
- ROS2 pipelines operate on a **consistent temporal model for fusion**

---

## What the Host Sees

From the compute platform perspective, DSIL presents a much cleaner and more deterministic integration surface.

Typical host-visible results include:

- standard sensor-facing interfaces where applicable
- a CDC telemetry path for Atlas timing, health, and board state
- software-visible board timing status
- timing-aware sensor metadata
- corrected or correlated timestamps aligned to the Atlas timing domain
- health and diagnostics that can be consumed by robotics software

This reduces the burden on host-side software and minimizes the amount of timing guesswork required at the application layer.

---

## ROS2-Facing Output Model

DSIL is intended to bridge Atlas timing-aware telemetry into ROS2-friendly software structures.

Typical outputs may include:

```text
/imu/data
/gnss/fix
/pps/trigger
/sensor/health
/atlas/timing_status
```

In this model, DSIL helps ensure that host-visible messages reflect the **Atlas timing domain**, rather than only raw host arrival time.

This provides a much stronger foundation for:

- sensor fusion
- localization
- navigation
- perception pipelines
- deterministic recording and playback workflows

---

## Why This Matters in Practice

Without a timing-aware software layer, host systems often have to reconstruct alignment after data has already arrived.

That usually means:

- inconsistent timestamp interpretation
- drift between devices
- fragile fusion assumptions
- degraded performance in motion-heavy systems

With Atlas + DSIL:

- a single timing authority is established
- timing events become visible to the host
- data can be associated with real hardware timing boundaries
- higher-level software can operate on a cleaner and more deterministic sensor model

This is one of the core reasons DSIL matters.

---

## DSIL Role in the Full Atlas Stack

Atlas should be understood as a two-layer timing architecture:

### Hardware layer — Atlas Fusion V2

Atlas hardware provides:

- sensor aggregation
- protected onboard power
- PPS input/output
- sync and trigger signaling
- board-managed timing boundaries

### Software layer — DSIL SDK

DSIL provides:

- timing interpretation
- timestamp correlation
- telemetry decoding
- host-side timing visibility
- ROS2-facing software integration

Together, they create a system in which timing is not merely generated in hardware, but also made usable in software.

---

## Key Takeaway

DSIL is not just a telemetry parser.

It is the software layer that transforms Atlas hardware timing into a usable software timing model for robotics systems.

Atlas establishes the timing boundary.  
DSIL associates data to that boundary.  
The result is a cleaner, more deterministic path from sensor acquisition to robot compute.

---

## DSIL SDK v1.0 — Public Core Specification

DSIL SDK v1.0 defines the **final public software boundary** of the Atlas platform.

It is not a broad roadmap.

It is the **stable, production-ready definition** of how Atlas integrates into the robot compute stack.

---

### v1.0 Core Capabilities

DSIL SDK v1.0 includes:

- **Stable CDC telemetry transport** (`/dev/ttyACM0`)
- **Runtime telemetry decoding**
- **Timestamp correlation and alignment engine**
- **Sync source and sync state model**
- **Sensor health visibility**
- **Board power visibility**
- **Command-line interface (CLI) tools**
- **ROS2 monitoring integration**
- **Documented message schemas**
- **Documented installation flow**
- **Supported Ubuntu and Jetson-class deployment path**

---

### What v1.0 Must Accomplish

DSIL SDK v1.0 completes the core Atlas value proposition:

- **Timing visibility** — making hardware timing observable in software  
- **Synchronization visibility** — exposing sync state and timing relationships  
- **Health visibility** — monitoring sensor and system status  
- **Power visibility** — exposing board-level power conditions  
- **ROS2-friendly integration** — enabling immediate adoption in robotics stacks  

This defines the **minimum complete system behavior** required for Atlas to be usable in real deployments.

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

## What Is Not in the Public DSIL Boundary

The following are **intentionally excluded** from DSIL SDK v1.0:

- Broad plugin architectures  
- Custom ROS sensor drivers  
- CAN integration  
- Encoder support  
- GMSL camera support  
- Fleet telemetry systems  
- Cloud dashboards  
- Distributed multi-Atlas orchestration  
- Customer-specific sensor adaptation logic  

These belong in **White-Label OEM Pilot DSIL SDK (VX)**, not in the public core platform.

---

## Software Requirements

Minimum environment for DSIL SDK v1.0:

| Component | Requirement |
|---|---|
| OS | Ubuntu 22.04 LTS |
| Kernel | Linux 5.15+ |
| ROS | ROS2 Humble |
| Dependencies | libusb-1.0-0, python3-serial |
| ROS Packages | ros-humble-desktop |

---

### Device Interface

Atlas exposes telemetry through a standard Linux CDC device:

```bash
/dev/ttyACM0
```

No custom kernel modules are required.

---

### Permissions

Users must be part of the `dialout` group:

```bash
sudo usermod -a -G dialout $USER
```

Log out and log back in after applying.

---

## Integration Philosophy

DSIL is designed to **augment**, not replace, existing robotics software.

- Standard sensor drivers remain unchanged  
- DSIL operates alongside them  
- Timing and system visibility are added as a separate layer  

This avoids disruption to existing perception and control pipelines.

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

## Why DSIL Matters

Atlas hardware is what gets deployed.

DSIL is what allows engineers to:

- understand the system  
- validate timing behavior  
- trust synchronization  
- reuse the platform across programs  

Hardware makes the system possible.  
DSIL makes the system **operationally credible**.

---

## Strategic Role of DSIL

For robotics teams, DSIL changes the integration model from:

**custom sensor plumbing per robot**

to:

**reusable deterministic sensor infrastructure across product lines**

That is the long-term value of Atlas.

## Next Steps
If you are evaluating Atlas as a platform, continue in this order:

Hardware Architecture
Sensor Synchronization
ROS2 Integration
Evaluation Kit Setup
