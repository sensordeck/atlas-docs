---
title: OEM Deployment
sidebar_label: OEM Deployment
---

# OEM Deployment

## Overview

Atlas Runtime Governance™ can be integrated into existing robot fleets, or deployed starting from a single robot, offline, or pilot environment.

OEMs do not need to replace their existing:

- Fleet Management
- Cloud Server
- Ticketing System
- Log Platform
- Customer Support System

As an independent Runtime Governance Layer, Atlas connects the robot site, runtime evidence, investigation workflows, and Historical RGA.

```text
Deployment Runtime
        │
        ▼
Atlas Agent
        │
        ▼
Runtime Dataset
        │
        ▼
Evidence Pack
        │
        ▼
Runtime Investigation
        │
        ▼
Historical RGA
```

To maximize the investigation value of Atlas, OEMs should complete three foundational preparations prior to deployment:

1. Establish System and Sensor Runtime Surface Coverage  
2. Pre-build OEM Historical RGA  
3. Collaboratively Pre-build Sensor Historical RGA with Sensor Factories  

---

# Minimum Deployment Requirements

The minimum deployment requirements for Atlas include:

```text
Runtime Compute
+
Runtime Surface Access
+
Unified Time Reference
+
Local Storage
+
Export Path
+
Investigation Owner
```

These conditions do not depend on a specific Cloud, database, or robotics platform.

---

# Runtime Surface Requirements

The Runtime Surface observed by Atlas is divided into two layers:

```text
System Surface
      │
      ▼
Sensor Surface
```

The System Surface is the main governance boundary for robot runtime.

The Sensor Surface is the runtime boundary for sensors and their underlying interfaces.

Both types of Surfaces should enter the same Runtime Timeline.

---

# 1. System Surface Requirements

The System Surface is used to observe whether the main robot system correctly receives, handles, and transfers Sensor Runtime Data.

It is recommended to prioritize integrating the following Surfaces.

---

## Power Surface

The Power Surface is used to observe power supply status and reset events.

Recommended inclusions:

- Main Power State
- Sensor Rail State
- Voltage Drop Event
- Brownout Event
- Power Cycle
- Reset Signal
- Overcurrent Event
- Power Enable State

Typical investigation questions:

- Did the Sensor drop offline due to power fluctuations?
- Did a reset occur on the SBC, Hub, or Sensor?
- Did multiple Sensors fail at the same time?
- Did the Runtime Failure synchronize with a Power Event?

---

## Linux Runtime Surface

The Linux Runtime Surface is used to observe the operational status of the host operating system.

Recommended inclusions:

- Kernel Event
- Device Enumeration
- Process State
- CPU Load
- Memory Pressure
- Disk I/O
- Scheduler Delay
- Network State
- USB State
- Driver Load / Unload
- Kernel Warning
- System Restart

Typical investigation questions:

- Did a Kernel Event occur before the Sensor dropped offline?
- Did the Driver restart?
- Did CPU or Memory Pressure cause data interruption?
- Did the Device disappear from Linux?
- Did the Network Interface undergo a Link Transition?

---

## Communication Surface

The Communication Surface is used to observe the data channels between the Sensor and the SBC.

Recommended inclusions based on robot architecture:

- Ethernet
- USB
- CAN
- MIPI CSI
- UART
- SPI
- I²C
- SerDes
- Trigger
- PPS
- Synchronization Signal

Recommended recordings:

- Link State
- Packet Rate
- Error Count
- Reconnect Event
- Timeout
- Bus Reset
- Device Address
- Interface Enumeration
- Bandwidth Change

---

## Driver Surface

The Driver Surface is used to observe the operational status of the Sensor Driver.

Recommended inclusions:

- Driver Process State
- Driver Start / Stop
- Driver Restart
- Device Open / Close
- Timeout
- Error Code
- Buffer State
- Reconnect Attempt
- Firmware Communication State
- Driver Version

The Driver Surface connects underlying device status with upper-layer Runtime Output.

---

## ROS / Application Surface

The ROS or Application Surface is used to observe the data actually received by the robot application.

Recommended inclusions:

- ROS Node State
- ROS Topic Frequency
- Message Timestamp
- Message Delay
- Message Drop
- Callback Rate
- Application Input State
- Runtime State Transition
- Health Flag

Typical investigation questions:

- Is the Sensor still online, but the ROS Topic stopped?
- Is there data from the Driver, but the Application Callback interrupted?
- Did the Topic Frequency drop prior to the event?
- Did multiple Topics experience anomalies simultaneously?

---

## Robot Runtime State

It is recommended to record robot operating states related to the REF.

For example:

- Navigation State
- Localization State
- Obstacle State
- Safety State
- Motion State
- Mission State
- Manual / Autonomous Mode
- Stop Command
- Recovery State

These states are used to establish the Runtime Investigation Context.

Atlas does not use them to automatically infer Root Cause.

---

# 2. Sensor Surface Requirements

The Sensor Surface focuses on the Sensor itself and its direct Runtime Output.

At least one clear Surface Definition should be established for each type of Sensor.

---

## Sensor Identity

Recommended recordings:

- Sensor Type
- Manufacturer
- Product Model
- Hardware Revision
- Firmware Version
- Driver Version
- Interface Type
- Sensor Identifier

An internal anonymous ID can be used for the Sensor Identifier.

Publicly disclosing the Serial Number to external parties is not required.

---

## Sensor Runtime State

Recommended inclusions:

- Online / Offline
- Initialized / Not Initialized
- Streaming / Not Streaming
- Internal Error State
- Temperature State
- Reset State
- Firmware State
- Self-test Result
- Reconnect State

---

## Sensor Data Surface

Record key Runtime Output based on the Sensor type.

### LiDAR

- Point Cloud Frequency
- Packet Rate
- Packet Loss
- Frame Completeness
- Timestamp Continuity
- Return Count
- Internal Status
- Ethernet Link State

### Camera

- Frame Rate
- Frame Drop
- Exposure State
- Image Timestamp
- Stream Start / Stop
- USB / MIPI Error
- Buffer State
- Driver State

### IMU

- Sample Rate
- Timestamp Continuity
- Bias Change
- Saturation
- Communication Error
- Reset Event
- Data Validity Flag

### GNSS

- Fix State
- Satellite Count
- PPS State
- Timestamp State
- Communication State
- Correction Data State

### Radar

- Frame Rate
- Target Count
- Interface State
- Timestamp Continuity
- Driver State
- Internal Error State

---

## Sensor Timing Surface

Recommended recordings:

- Sensor Timestamp
- Host Timestamp
- PPS
- Trigger
- Frame Sequence
- Packet Sequence
- Clock Offset
- Timestamp Jump
- Timestamp Drift

The more complete the time synchronization, the higher the value of Cross-stream Investigation.

---

# Recommended Minimum Surface Set

To form a minimum viable Evidence Chain, it is recommended that a key Sensor covers at least:

```text
Sensor Runtime
+
Communication Interface
+
Power
+
Linux Runtime
+
Driver
+
ROS Topic / Application Input
```

For example, the minimum coverage for LiDAR could be:

```text
LiDAR Stream
+
Ethernet Link
+
LiDAR Power
+
Linux Network
+
LiDAR Driver
+
Point Cloud Topic
```

The minimum coverage for a Camera could be:

```text
Camera Stream
+
USB / MIPI
+
Camera Power
+
Linux Device State
+
Camera Driver
+
Image Topic
```

Unintegrated Surfaces must be explicitly marked as:

```text
Not Observed
```

They cannot be inferred as normal.

---

# Unified Time Requirement

All System Surfaces and Sensor Surfaces must enter a unified Runtime Timeline.

Minimum requirements:

- Host System Clock is available
- Observations can be sorted
- Sensor and Host Timestamps can be associated

Recommended enhancements:

- NTP
- PTP
- PPS
- Hardware Trigger
- Frame Sequence
- Packet Sequence

Atlas does not require all devices to possess hardware synchronization.

However, available time sources and time precision must be recorded.

---

# OEM Historical RGA Pre-build

For OEMs, the most valuable Atlas Deployment does not start from an empty Historical Repository.

It is recommended to pre-build a set of OEM Historical RGAs before official operation.

These RGAs originate from:

- Closed customer complaints
- Completed site investigations
- Known Runtime Failures
- Internal test cases
- Verified troubleshooting experience
- Resolved Sensor / System Integration Issues

---

# Why Pre-build OEM Historical RGA?

If there is no Historical RGA:

```text
New REF
   │
   ▼
Start From Zero
```

If Historical RGA has been pre-built:

```text
New REF
   │
   ▼
Historical Recall
   │
   ▼
Known Investigation Path
   │
   ▼
Faster Narrowing
```

Pre-building OEM Historical RGA is key to Atlas generating investigation value from Day One.

---

# Recommended OEM RGA Coverage

OEM Historical RGA should prioritize covering high-frequency, high-cost, and safety-related REFs.

It is recommended to start from the following types:

- Unexpected Stop
- Obstacle Miss
- False Obstacle
- Localization Failure
- Path Deviation
- Collision
- Fall
- Manipulation Failure

Covering all REFs in the first batch is not required.

It is recommended to select:

```text
One Robot Model
+
Three to Five Common REF Types
+
Five to Ten Historical Cases
```

---

# OEM RGA Should Cover System-level Cases

OEM Historical RGA can cover multiple Sensors and multiple System Surfaces.

For example:

```text
Unexpected Stop
│
├── LiDAR
├── Ethernet
├── Linux Network
├── Driver
├── ROS Topic
└── Navigation State
```

Or:

```text
Localization Failure
│
├── Camera
├── IMU
├── Timestamp
├── CPU Load
├── ROS Runtime
└── Localization Process
```

OEM RGA can include:

- Single-sensor Issue
- Multi-sensor Interaction
- Bus Issue
- Power Issue
- Linux Runtime Issue
- Driver Issue
- ROS Runtime Issue
- Cross-system Issue

---

# OEM Historical RGA Minimum Fields

Each pre-built OEM Historical RGA is recommended to contain at least:

```text
OEM Historical RGA
│
├── RGA Identifier
├── Robot Model
├── REF Type
├── Deployment Environment
├── Runtime Pattern
├── Runtime Surface References
├── Investigation Path
├── Excluded Path
├── Investigation Result (IR)
├── Lesson Learned (LL)
├── Evidence Reference
└── Authorization Metadata
```

If historical events lack a complete Evidence Pack, you can first establish:

```text
Mode B Historical RGA
```

Retaining only:

- Runtime Signature
- Investigation Pattern
- Investigation Path
- IR
- LL

Subsequent new REFs can still undergo Partial Recall.

---

# Most Valuable OEM Pre-build Cases

The highest-priority historical cases usually possess the following characteristics:

- Have occurred multiple times
- Consume large amounts of Tier 3 labor hours
- Involve multiple teams
- Have been escalated to the Sensor Factory
- Have required an Engineering War Room
- Have a clear Investigation Path
- Have reusable Lessons Learned

Do not select only the most severe events.

High-frequency repetitive events typically offer higher short-term ROI.

---

# OEM Pre-build Process

```text
Historical Ticket / Case
          │
          ▼
Select Reusable Case
          │
          ▼
Normalize REF Type
          │
          ▼
Map Runtime Surfaces
          │
          ▼
Record IR and LL
          │
          ▼
Create Historical RGA
          │
          ▼
Import into OEM RGA Repository
```

It is recommended to complete this jointly by:

- Tier 2 Engineer
- Tier 3 Engineer
- Customer Support Lead
- Product Owner

Atlas is responsible for standardizing the structure.

Engineering personnel are responsible for confirming IR and LL.

---

# OEM and Sensor RGA Difference

| Item | OEM Historical RGA | Sensor Historical RGA |
|---|---|---|
| Owner | OEM | Sensor Manufacturer |
| Main Object | Robot Runtime REF | Sensor Runtime REF |
| Scope | Multi-sensor and System | Sensor-only |
| Typical Surface | Power, Linux, Bus, Driver, ROS, Sensors | Sensor, Firmware, Driver, Interface |
| Environment | Robot Deployment Scenario | Sensor Deployment and CE Environment |
| Evidence Source | OEM Evidence Pack | OEM EP Reference or Sensor Test Evidence |
| IR Boundary | OEM Runtime Investigation | Sensor Investigation |
| Repository | OEM Private RGA Repository | Sensor Private RGA Repository |

Neither side shares the entire Historical Repository.

In specific collaborations, they reference the same OEM Evidence Pack through the Sensor Engagement Pack.

---

# Deployment Infrastructure

Atlas can adapt to three common OEM infrastructures.

---

## Existing Fleet Cloud

Applicable to environments with existing:

- Fleet Management
- Cloud Server
- Object Storage
- Ticketing System
- Headquarters Data Center

```text
Robot
  │
  ▼
Atlas Agent
  │
  ▼
Existing Upload Channel
  │
  ▼
OEM Cloud / Headquarters
  │
  ├── Runtime Repository
  ├── Investigation Workspace
  └── Historical RGA Repository
```

Atlas can reuse:

- Existing Robot-to-cloud Transport
- REST API
- Message Queue
- SFTP
- Object Storage
- Internal File Service

Replacing the OEM's existing Cloud is not required.

---

## Headquarters Server Only

Applicable to OEMs that lack a full Fleet Cloud but possess a headquarters server.

```text
Robot
  │
  ▼
Local Runtime Dataset
  │
  ▼
Scheduled / Manual Export
  │
  ▼
Headquarters Server
```

Upload can be completed via:

- Wi-Fi
- LAN
- VPN
- Maintenance Laptop
- Docking Station
- Removable Storage

---

## No Existing Infrastructure

Applicable to:

- Early-stage OEM
- Pilot Project
- Offline Robot
- Small Integrator
- Internal Lab

```text
Robot
  │
  ▼
Atlas Agent
  │
  ▼
Local Rolling Buffer
  │
  ▼
Manual Export
  │
  ▼
Investigation Workstation
```

The minimum configuration includes:

- Atlas Agent
- Local Runtime Dataset
- Export Tool
- Investigation Workstation
- Historical RGA Repository

The OEM does not need to build a Cloud or database first.

---

# Storage and Export Requirements

The Atlas Agent minimally needs to support:

- Continuous Persist
- Rolling Buffer
- Retention Policy
- Dataset Lock
- Time-range Export

Recommended starting strategy:

```text
rolling_buffer_hours: 48
overwrite_policy: circular
dataset_lock_on_ref: enabled
```

Supported Export Modes include:

- Online Upload
- Scheduled Upload
- Upload After Docking
- Manual Export
- Offline Transfer

---

# OEM Information Required

It is recommended that the OEM provides the following information during deployment:

## Robot Information

- Robot Model
- SBC / Controller
- Linux Version
- ROS / Application Runtime
- Deployment Environment

## Surface Information

- Sensor List
- Power Architecture
- Communication Interface
- Driver
- ROS Topic / Application Input
- Timestamp Source

## Infrastructure Information

- Existing Fleet Cloud
- Headquarters Server
- Ticketing System
- Upload Channel
- Object Storage
- Network Restriction

## Historical Asset Information

- Existing REF Tickets
- Closed Investigation Cases
- Existing IR
- Existing LL
- Known Repeated Issues
- Existing Sensor FAE Cases

## Governance Information

- Tier 1 Owner
- Tier 2 Owner
- Tier 3 Owner
- Sensor FAE Contact
- Data Authorization Policy

The OEM is not required to provide algorithm source code.

Atlas only observes authorized Runtime Surfaces.

---

# Recommended Deployment Sequence

```text
Phase 1
Surface Mapping

        ↓

Phase 2
OEM Historical RGA Pre-build

        ↓

Phase 3
Sensor Historical RGA Pre-build

        ↓

Phase 4
Agent Deployment

        ↓

Phase 5
REF Investigation Pilot

        ↓

Phase 6
Fleet and ROI Expansion
```

---

## Phase 1 — Surface Mapping

Select:

- One Robot Model
- One Critical Sensor
- One Common REF

Complete System and Sensor Surface Mapping.

---

## Phase 2 — OEM RGA Pre-build

It is recommended to import:

- Five to Ten Historical Cases
- Three to Five REF Types
- Existing IR and LL
- Known Investigation Paths

---

## Phase 3 — Agent Deployment

Confirm:

- Observe
- Persist
- Retain
- Export
- Dataset Lock
- Evidence Pack Generation

---

## Phase 4 — Investigation Pilot

Verify:

- REF Intake
- Historical Recall
- Investigation Context
- Tier Candidate
- Sensor Engagement
- Ticket Closure
- New RGA Creation

---

## Phase 5 — Fleet and ROI

Expand to:

- Multiple Robot Models
- Multiple Sensors
- Multiple Deployment Environments
- Tier 3 Involvement Tracking
- Historical RGA Reuse
- Engineering Hours Saved
- Investigation ROI

---

# Maximum-value Deployment

The maximum value of Atlas stems from building three capabilities simultaneously:

```text
Complete Runtime Surface Coverage
+
Pre-built Historical RGA
+
Continuous Runtime Investigation
```

Deploying only the Agent yields Runtime Evidence.

Adding OEM Historical RGA allows OEM Investigations to start from historical experience.

Adding Sensor Historical RGA enables Sensor FAEs to start from product and environment experience.

Combining all three achieves:

- Faster Investigation
- Higher RGA Reuse
- Lower Tier 3 Involvement
- Lower Engineering Cost
- Continuous Organization Memory

---

# Summary

OEM Deployment is more than just installing the Atlas Agent.

A complete deployment includes three core foundations:

```text
1. System and Sensor Runtime Surface Coverage

2. OEM Historical RGA Pre-build

3. Sensor Historical RGA Pre-build
```

The System Surface should cover Power, Linux, Communication, Driver, ROS, and Robot Runtime State.

The Sensor Surface should cover Sensor State, Data Output, Timing, Interface, Firmware, and Driver.

OEM Historical RGA focuses on robot-level, multi-Sensor, and System Runtime Investigation.

Sensor Historical RGA focuses on the Sensor product itself, covering different robots, scenarios, and known CE Environment Disturbances.

Atlas connects on-site operational data, OEM investigation experience, and Sensor FAE product knowledge into a continuously operating Runtime Governance Infrastructure.

Core engineering teams continue to create new products.

Atlas is responsible for organizing evidence, remembering the past, and letting past experience continuously create value.

# Next Steps

- Sensor Manufacturer Deployment
- Pilot Deployment™
- Production Deployment™
