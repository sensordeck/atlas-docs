# DSIL SDK

Deterministic Sensor Integration Layer

DSIL is the software layer that turns Atlas from a hardware integration board into a deterministic sensor infrastructure platform.

Atlas establishes the hardware timing boundary, synchronization authority, and sensor aggregation path.

DSIL exposes that infrastructure to Linux, ROS2, and robotics software through a focused runtime, command-line tools, and monitoring interfaces.

In one sentence:

**DSIL makes Atlas timing and synchronization visible to software, so robotics teams can evaluate, trust, and reuse deterministic sensor infrastructure without building it from scratch.**

---

# Why DSIL Matters

Most robotics teams can physically connect sensors.

The real difficulty begins after those sensors are connected.

As sensor count grows, the system becomes harder to trust, harder to debug, and harder to reuse across robot platforms.

Typical integration problems include:

| Problem | What Happens in Practice | Cost to the Team |
|---|---|---|
| Untrusted timestamps | Fusion and perception pipelines must guess temporal alignment | Weeks or months of synchronization debugging |
| Driver-to-hardware coupling | A new sensor model causes integration rework | 2–4 weeks per new sensor path |
| ROS2 sees software timing only | `/image`, `/imu`, and navigation data do not align reliably | Heavy preprocessing and validation effort |
| Black-box diagnostics | It is unclear whether faults come from hardware, timing, drivers, or software | Slow root-cause analysis |
| Per-platform duplication | Every robot SKU rebuilds almost the same integration stack | Low reuse and repeated engineering work |

DSIL exists to solve these problems at the software infrastructure layer.

Atlas provides the hardware timing backbone.

DSIL makes that timing backbone visible and usable.

Together they form the Atlas deterministic sensor platform.

---

# DSIL in the Atlas Stack

System flow:

<p align="center">
  <img src="/img/Fig 8.png" width="60%" alt="Atlas DSIL Stack" />
</p>

Atlas Fusion V2 handles:

• Sensor aggregation  
• Board-level timing authority  
• Synchronization signal distribution  
• Board telemetry generation  
• Infrastructure visibility

DSIL handles:

• Telemetry decoding  
• Synchronization visibility  
• Timestamp alignment logic  
• Runtime diagnostics  
• ROS2 monitoring integration  
• Developer evaluation tools

This separation is fundamental.

Atlas is not just hardware.

Atlas becomes a platform when paired with DSIL.

---

# DSIL Architecture

DSIL is organized into four software layers.

## Application Layer

This is where customer software runs.

Typical consumers include:

• ROS2 perception nodes  
• Fusion pipelines  
• Navigation systems  
• SLAM stacks  
• Logging and evaluation tools  
• Customer robotics software

These applications should be able to consume deterministic infrastructure state without needing to understand Atlas hardware internals.

## ROS2 Integration Layer

This layer bridges DSIL runtime data into ROS2-facing interfaces.

Core DSIL ROS2 components:

• `dsil_telemetry_node`  
• `dsil_monitor_node`

This layer makes Atlas timing state and synchronization results visible to robotics software teams.

## Core Runtime Layer

This is the core of DSIL.

Core runtime modules include:

• Telemetry Decoder  
• Timestamp Analyzer  
• Sync Correction Engine  
• Device Manager  
• Evaluation Monitor

This layer provides the minimal host-side software needed for evaluation and final public DSIL operation.

## Host Transport Layer

This layer interfaces with Atlas through standard Linux device paths.

Primary transport path:

• `/dev/ttyACM*` for CDC telemetry

The transport layer is responsible for framing, message decoding, channel handling, and reconnect behavior.

### Runtime Reconnection Logic

The DSIL Host Transport Layer includes a persistent reconnection watchdog.

If the Atlas telemetry device disappears due to power cycling, USB reset, or cable vibration:

    /dev/ttyACM0

the DSIL runtime automatically:

1. detects the device loss  
2. begins polling for CDC device re-enumeration  
3. re-establishes the telemetry stream  
4. restores the Atlas timing reference

Reconnection and time-base recovery typically occur within **<100 ms of device re-enumeration**.

This behavior ensures DSIL continues operating in real robotics environments where USB devices may reset or briefly disconnect during operation.

---

# DSIL Architecture Diagram

 <p align="center">
  <img src="/img/Fig 9.png" width="60%" alt="Atlas DSIL architecture" />
</p>

---

# Atlas Telemetry Channel

Atlas exposes a dedicated telemetry path to the host compute platform through a USB CDC device.

Typical host enumeration target:

    /dev/ttyACM0

The telemetry channel is intended to carry structured infrastructure data such as:

• Timing metadata  
• PPS events  
• Sync state  
• Sensor presence  
• Board health  
• Power telemetry  
• Warning and fault counters

This telemetry path is intentionally separate from high-bandwidth sensor data paths.

For example:

• a USB camera continues to stream through standard UVC  
• Atlas exports timing and health telemetry through CDC  
• DSIL observes and evaluates system state without disrupting the primary data path

This preserves compatibility while adding deterministic infrastructure visibility.

---

# Runtime Reliability

Robotics systems must operate reliably even if hardware connections reset.

DSIL includes automatic **device reconnect logic**.

If the Atlas telemetry device disappears:

    /dev/ttyACM0

DSIL will automatically:

1. detect the device disconnect
2. continue polling available CDC devices
3. reattach when Atlas reappears
4. resume telemetry decoding without restarting the runtime

This behavior ensures Atlas infrastructure monitoring continues across:

• USB bus resets  
• cable replug events  
• Atlas firmware restarts  

A driver that requires manual restart after disconnect is unacceptable in production robotics systems.

DSIL is designed to recover automatically.

---

# Design Principle: Out-of-Band Metadata

Atlas and DSIL are built around an out-of-band metadata model.

<p align="center">
  <img src="/img/Fig 10.png" width="60%" alt="Atlas out-of-band metadata model" />
</p>

The sensor data path remains as standard as possible.

The deterministic metadata path is handled separately.

This gives Atlas three major advantages:

• Existing device drivers stay usable  
• Timing and health infrastructure remain visible  
• High-bandwidth traffic does not bury synchronization state

This principle is one of the most important architectural decisions in Atlas.

---

# Timestamp Alignment

The timestamp alignment function is the core of DSIL.

Its purpose is to convert Atlas hardware timing into a usable software time model for the robot.

Without this layer, multi-sensor systems often depend on software-side arrival time, kernel scheduling behavior, driver timing, or device-local clocks.

That leads to unstable time semantics.

DSIL provides a cleaner model.

Core responsibilities include:

• Time-domain normalization  
• PPS event ingestion  
• Synchronization state tracking  
• Cross-sensor offset measurement  
• Correction application  
• Deterministic timestamp visibility to host-side software

Conceptually:

Traditional software timestamp:

    sensor event → transport → host buffering → scheduler delay → application timestamp

Atlas + DSIL model:

<p align="center">
  <img src="/img/Fig 11.png" width="60%" alt="Atlas DSIL Timestamp" />
</p>

The goal of DSIL is to make the second model practical, measurable, and easy to demonstrate.

## Timing Signal Flow

The Atlas timing system distributes synchronization events from the timing reference to connected sensors and telemetry.

Representative timing flow:

<p align="center">
  <img src="/img/Fig 12.png" width="60%" alt="Atlas DSIL Timing Signal Flow" />
</p>

Atlas captures the timing reference at the hardware layer and exposes the timing state through telemetry.

DSIL then aligns sensor timestamps to that timing reference so that robotics software operates on a deterministic multi-sensor timeline.

---

# DSIL SDK v0.1

LOI Evaluation Pack

DSIL SDK v0.1 exists for one purpose only:

**Demonstrate that Atlas provides deterministic multi-sensor timing and significantly improves cross-sensor timestamp alignment.**

The evaluation must allow an engineer to observe:

• Baseline sensor timestamp drift  
• Atlas timing backbone activation  
• DSIL synchronization improvement

If this is clearly demonstrated, the evaluator can confidently present the result to a CTO, technical lead, or internal platform decision-maker.

## What DSIL SDK v0.1 Includes

The v0.1 scope is intentionally minimal.

### CLI Tools

• `dsil_status`  
• `dsil_analyze`  
• `dsil_sync`  
• `dsil_plot`

### ROS2 Nodes

• `dsil_telemetry_node`  
• `dsil_monitor_node`

### Evaluation Utilities

• `run_dsil_demo.sh`  
• evaluation runbook  
• sample output graphs

## Most Valuable Features in v0.1

These are the features that matter most for LOI evaluation and internal champion adoption.

### 1. Atlas enumerates as a real infrastructure device

The evaluator plugs Atlas into a host and sees:

    /dev/ttyACM0

That matters because Atlas becomes immediately visible as a real infrastructure element.

### 2. Timing state is visible

The evaluator can confirm that Atlas is present, PPS-locked, and synchronization-capable.

### 3. Baseline drift can be measured

The evaluator can quantify the timing problem before DSIL correction is applied.

### 4. Synchronization improvement can be demonstrated

The evaluator can enable DSIL and measure the improvement directly.

### 5. Results can be shown to decision-makers

The evaluator can generate simple output and before/after plots that support an LOI conversation.

---

# CLI Tools

These tools are the heart of DSIL SDK v0.1.

## dsil_status

Purpose:

Verify Atlas timing engine status.

Example:

    dsil_status

Representative output target:

    Atlas detected
    PPS locked
    Sync active

## dsil_analyze

Purpose:

Measure cross-sensor timestamp offset.

Example:

    dsil_analyze --baseline

### Sample Output

Example DSIL timing analysis result:

    DSIL Timing Analysis Report
    ---------------------------

    Camera-LiDAR offset: 12.0 ms
    IMU-LiDAR offset: 8.0 ms
    Camera-IMU offset: 4.1 ms

    PPS detected: true
    Atlas sync active: false

This confirms the timing problem exists before correction.

## dsil_sync

Purpose:

Apply Atlas timing correction.

### Mechanics of Synchronization

DSIL applies a **dynamic software offset** to ROS2 message timestamps.

The correction is calculated from the Atlas timing domain and applied to the message header:

    corrected_timestamp =
    sensor_timestamp
    + atlas_clock_offset

The corrected timestamp is written into the ROS2 message header:

    header.stamp

This maps the raw sensor arrival time to the **Atlas hardware-captured timing reference**.

DSIL **does not attempt to modify the sensor's internal silicon clock**.  
Instead, it corrects timestamps at the software layer, ensuring compatibility with standard drivers such as:

• UVC cameras  
• Serial sensors  
• ROS2 driver packages  

This approach preserves driver compatibility while exposing deterministic infrastructure timing to robotics software.    

## dsil_plot

Purpose:

Visualize before/after timestamp alignment.

Example:

    dsil_plot

Representative outputs:

    offset_before.png
    offset_after.png

These tools are not cosmetic.

For many evaluators, the quality of these tools will determine whether Atlas feels credible enough for a pilot discussion.

---

# Minimal ROS2 Integration

The DSIL v0.1 ROS2 layer is intentionally narrow.

## dsil_telemetry_node

Purpose:

Publish Atlas timing state to ROS2.

Representative topics:

• `/dsil/status`  
• `/dsil/pps`

Representative message model:

    atlas_connected: true
    pps_locked: true
    sync_active: true
    clock_offset_ms: 0.3

## dsil_monitor_node

Purpose:

Monitor sensor topics and compute drift.

Representative inputs:

• `/camera/image`  
• `/livox/lidar`  
• `/imu/data`

Representative output:

• `/dsil/sync_drift`

Representative result:

    camera_lidar_offset_ms: 9.2
    imu_lidar_offset_ms: 6.8

After DSIL correction:

    camera_lidar_offset_ms: 0.9
    imu_lidar_offset_ms: 0.4

This is the right ROS2 boundary for v0.1.

It proves Atlas value without overextending the first release.

---

# 30-Minute Evaluation Flow

The Atlas evaluation experience should be fast, visible, and easy to defend internally.

## Step 1 — Connect Sensors

Example evaluation wiring:

• Camera → Atlas USB  
• IMU → Atlas I2C or onboard sensor path  
• GNSS → Atlas UART + PPS_IN  
• Atlas → SBC USB  
• Ethernet LiDAR → SBC Ethernet

## Step 2 — Launch Atlas

    fusion_start

Expected:

    Atlas detected
    PPS locked
    Timing engine active

## Step 3 — Launch ROS2 Drivers

    ros2 launch livox_ros2_driver
    ros2 run usb_cam usb_cam_node
    ros2 run vectornav_driver imu_node

Verify topics:

    ros2 topic list

Representative topics:

    /camera/image
    /livox/lidar
    /imu/data

## Step 4 — Baseline Timing

    dsil_analyze --baseline

Representative output:

    Camera ↔ LiDAR offset: 12 ms
    IMU ↔ LiDAR offset: 8 ms

This confirms the timing problem exists.

## Step 5 — Enable DSIL

    dsil_sync

## Step 6 — Verify Synchronization

    dsil_sync_check

Representative output:

    Camera ↔ LiDAR offset: 0.9 ms
    IMU ↔ LiDAR offset: 0.5 ms

## Step 7 — Visualization

    dsil_plot

Representative outputs:

    offset_before.png
    offset_after.png

This entire flow is designed to help an engineer validate Atlas in less than 30 minutes.

---

# Expected Evaluation Metrics

A successful LOI evaluation demonstrates:

• Cross-sensor offset under 1 ms  
• Stable synchronization for more than 30 minutes  
• Deterministic timestamp origin  
• GNSS-referenced time base

These are the right proof points for an evaluation package.

---

# DSIL SDK v1.0

Final Public Core Boundary

DSIL SDK v1.0 is the finalized public software boundary for Atlas.

It is not a broad future roadmap.

It is the stable software definition of the Atlas platform.

## v1.0 Includes

• Stable CDC telemetry transport  
• Runtime telemetry decoding  
• Timestamp alignment engine  
• Sync source and sync state model  
• Sensor health visibility  
• Board power visibility  
• Command-line tools  
• ROS2 monitoring integration  
• Documented message schemas  
• Documented installation flow  
• Supported Ubuntu and Jetson-class deployment path

## What v1.0 Must Accomplish

V1.0 should finish the core Atlas value proposition:

• Timing visibility  
• Synchronization visibility  
• Health visibility  
• Power visibility  
• ROS2-friendly integration

V1.0 should not try to become every future customer-specific integration layer.

It should finalize the core public DSIL boundary.

---

# Final Product Boundary

Atlas DSIL has two public software stages only.

## DSIL SDK v0.1

Evaluation-pack software for technical validation, LOI support, and first internal champion adoption.

## DSIL SDK v1.0

The finalized public DSIL core platform.

## What Comes After v1.0

Anything deeper than the public v1.0 boundary becomes:

**White-Label OEM Pilot DSIL SDK VX**

This is tailored for:

• Customer-specific Atlas PCB variants  
• Customer-selected sensor bundles  
• Customer timing topology  
• Customer deployment environment  
• Customer-specific integration requirements

This boundary is intentional.

It keeps the public platform simple and stable while reserving deeper engineering work for paid OEM pilot programs.

---

# What Is Not in the Public DSIL Boundary

The following do not belong in DSIL SDK v0.1 and should not expand the public v1.0 core without strong justification:

• Broad plugin architecture  
• Custom ROS sensor drivers  
• CAN integration  
• Encoder support  
• GMSL camera support  
• Fleet telemetry systems  
• Cloud dashboards  
• Distributed multi-Atlas orchestration  
• Customer-specific sensor adaptation logic

Those belong in White-Label OEM Pilot DSIL SDK VX work, not in the core public DSIL boundary.

---

# Achievable Scope

DSIL SDK v0.1 and the core path to v1.0 must remain disciplined enough to be achievable inside an 80-day development window and a $90k budget envelope.

That means focusing on:

• CDC telemetry transport and parser  
• Timestamp analysis  
• Sync correction  
• Visualization  
• ROS2 monitoring nodes  
• Evaluation scripts  
• Installation documentation  
• Validation workflow for the evaluation kit

This is realistic because the scope is narrow and intentional.

The purpose is to finalize the core Atlas software value, not to solve every future customer request in the first release.

---

---

# Software Requirements

Minimum environment for running DSIL SDK:

| Component | Requirement |
|---|---|
| OS | Ubuntu 22.04 LTS (Jammy Jellyfish) |
| Kernel | Linux 5.15+ |
| ROS | ROS2 Humble |
| Dependencies | libusb-1.0-0, python3-serial |
| ROS packages | ros-humble-desktop |

Atlas exposes its telemetry interface through a standard Linux CDC device:

    /dev/ttyACM0

Required permissions:

Users must belong to the **dialout** group in order to access the telemetry device.

Example:

    sudo usermod -a -G dialout $USER

After updating permissions, log out and log back in.

**No custom kernel modules are required.**

---

# Frequently Asked Questions

## Does DSIL require Atlas hardware?

Yes.

DSIL is the software layer designed for Atlas hardware. Its timing and infrastructure model depends on Atlas-generated telemetry, synchronization state, and board-level observability.

## Does DSIL replace existing ROS2 sensor drivers?

No.

The intended model is to preserve standard sensor drivers where possible and layer deterministic infrastructure monitoring alongside them.

## Does DSIL require custom perception code?

No.

The goal is to improve timing visibility and synchronization proof without forcing robotics teams to rewrite their perception stack.

## Is DSIL a long public roadmap with many versions?

No.

The public software boundary is intentionally simple:

• DSIL SDK v0.1 for evaluation  
• DSIL SDK v1.0 as the finalized public core

Anything deeper becomes White-Label OEM Pilot DSIL SDK VX.

## Why is DSIL strategically important?

Atlas hardware is what gets installed.

DSIL is what allows engineers to trust, evaluate, and reuse the system.

Hardware makes the platform physically possible.

DSIL makes the platform operationally credible.

That is why DSIL is one of the most important assets in the Atlas platform.

---

# Why DSIL Is the Strategic Center of Atlas

Atlas hardware is what gets deployed.

DSIL is what gets adopted.

Hardware makes the system possible.

DSIL makes the system visible, measurable, and reusable.

For robotics teams, DSIL changes the integration model from:

custom sensor plumbing per robot

to:

reusable deterministic sensor infrastructure across product lines

That is the long-term value of Atlas.

---

# Next Steps

If you are evaluating Atlas as a platform, continue in this order:

1. Hardware Architecture  
2. Sensor Synchronization  
3. ROS2 Integration  
4. Evaluation Kit Setup
