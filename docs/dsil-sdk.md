---
title: DSIL SDK
sidebar_label: DSIL SDK
---

## Where This Fits

This page explains **how Atlas hardware timing becomes usable software behavior**.

Atlas defines time at the hardware level.

The DSIL SDK turns that into:

- synchronized timestamps  
- observable system state  
- usable data inside Linux and ROS2  

This is where timing becomes infrastructure.

---

# Deterministic Sensor Integration Layer (DSIL) SDK

> The DSIL SDK converts heterogeneous sensor timing into a **single, usable time model**.

Atlas establishes the timing boundary.  
DSIL makes that timing:

- consistent  
- observable  
- usable by robotics software  

---

## The Core Problem DSIL Solves

In real robotics systems, sensors do not agree on time.

Each sensor may produce timestamps from different sources:

- hardware-triggered timing  
- internal device clocks  
- transport arrival time (USB / Ethernet)  

These timestamps are **not directly comparable**.

This leads to:

- unstable sensor fusion  
- inconsistent replay behavior  
- difficult debugging  
- repeated integration effort across programs  

Most systems work around this problem.

DSIL solves it at the system level.

---

## What DSIL Does

DSIL performs one core function:

> **Normalize all sensor data into a common Atlas time domain**

To achieve this, DSIL:

### 1. Interprets Sensor Time

- evaluates timing signals, patterns, and behavior  
- understands how each sensor expresses time  

---

### 2. Builds a Time Relationship to Atlas

- correlates sensor data with hardware timing events  
- tracks timing behavior over time  
- continuously refines alignment  

---

### 3. Produces Corrected System Time

DSIL converts:

raw sensor timestamp / arrival time to **Atlas-aligned timestamp**



This produces a **consistent time reference across all sensors**.

---

### 4. Exposes Timing as System Data

DSIL makes timing observable:

- time offset  
- drift behavior  
- synchronization state  
- timing confidence  

---

## DSIL Timing Model

DSIL treats every sensor stream as a **time-mapping problem**.

Each sensor has:

- a native timing domain  
- a relationship to Atlas time  

DSIL continuously maintains:

sensor time to **Atlas time**


This mapping may be:

- directly tied to hardware timing  
- inferred from observable behavior  
- estimated from transport timing patterns  

---

## What “Correction” Means

DSIL does **not** modify sensors.

It does not:

- rewrite firmware  
- override device clocks  
- replace drivers  

Instead:

- sensors operate normally  
- Atlas defines system time  
- DSIL aligns data into that time  

This ensures:

- compatibility with existing drivers  
- no disruption to pipelines  
- minimal integration friction  

---

## What DSIL Produces

Each sensor stream becomes:

- aligned to a common time reference  
- comparable across sensors  
- observable in timing quality  

---

### Example Output

```yaml
sensor: front_camera
raw_timestamp_ns: 1712241000123456789
atlas_timestamp_ns: 1712241000122356789
time_offset_ns: -1100000
drift_estimate_ns: 42000
sync_state: tracking
confidence: medium
```

## What DSIL Enables

With DSIL:

- all sensors operate under a **shared time model**  
- timing differences become **visible and measurable**  
- fusion pipelines receive **consistent input data**  
- replay becomes **deterministic and repeatable**  

Most importantly:

> Time becomes a **reliable system property**, not an assumption

---

## System Observability

DSIL exposes internal system state to the host:

- synchronization source and state  
- sensor timing behavior  
- system timing health  
- board-level telemetry  

This allows engineers to:

- verify synchronization in real time  
- debug timing issues without custom tooling  
- trust system behavior across deployments  

---

## Device Interface

Atlas exposes DSIL telemetry through a standard Linux device:

/dev/ttyACM0

- no custom kernel modules required
- no driver modification required

---

## Supported Host Systems (SBC Requirements)

DSIL runs on standard Linux-based robotics compute platforms.

**Minimum Environment**

| Component | Requirement |
|----------|------------|
| OS | Ubuntu 22.04 LTS |
| Kernel | Linux 5.15+ |
| ROS | ROS2 Humble |
| Dependencies | libusb-1.0-0, python3-serial |

---

**Supported Platforms**

NVIDIA Jetson (Orin Nano, Xavier, Orin NX)
ARM SBCs (RK3588 class)
x86 Linux systems

Requirement:

Any system supporting USB CDC devices can run DSIL.

---

## Integration Model

DSIL runs entirely in **user space**.

It does not require:

- kernel drivers
- device tree changes
- real-time OS modifications

This enables:

- fast bring-up
- low integration risk
- compatibility with existing stacks

---

## Integration Philosophy

DSIL is designed to **augment**, not replace, existing systems.

- sensor drivers remain unchanged
- perception pipelines remain intact
- DSIL runs alongside existing software

It adds:

- timing consistency
- system visibility
- infrastructure capability

---

## Strategic Role of DSIL

Without DSIL:

> every robot program rebuilds sensor timing logic from scratch

With DSIL:

> timing becomes reusable infrastructure across products

This transforms integration from:

> custom engineering effort per robot

into:

> scalable, repeatable system architecture

---

## Product Boundary

DSIL has a clear public boundary:

- **DSIL SDK v1.0** — production platform
- **DSIL SDK v0.1** — evaluation software

Beyond that:

→ OEM-specific deployments (White-Label Integration)

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

## What DSIL Does NOT Do

DSIL does not:

- replace sensor drivers
- force sensors into one interface
- claim determinism where none exists
- require custom perception software

It works with real-world systems as they are.

---

## Relationship to ROS2

DSIL operates below the **ROS2 application layer**.

It ensures that ROS2 receives:

- corrected timestamps
- synchronization state
- observable timing behavior

ROS2 nodes remain unchanged — but their data becomes trustworthy.

---

## Summary

DSIL converts Atlas hardware timing into **usable system behavior**.

By:

- normalizing heterogeneous sensor timing
- aligning data to a shared time authority
- exposing timing as observable system data

DSIL turns synchronization from:

> hidden, inconsistent behavior

into:

> a **deterministic and inspectable system capability**

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

## What Comes Next

With DSIL providing synchronized data and system visibility, the next step is to see **how Atlas integrates into real robotics systems**.

👉 Continue to [**ROS2 Integration**](./ros2-integration.md)
