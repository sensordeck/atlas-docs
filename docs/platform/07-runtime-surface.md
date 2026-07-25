---
title: Runtime Surface™
sidebar_label: Runtime Surface™
---

# Runtime Surface™

## Overview

Runtime Surface™ is the fundamental Observation Unit within Atlas Runtime Governance™.

Each Runtime Surface represents a category of runtime objects that can be continuously observed, recorded, and incorporated into Runtime Investigations.

Atlas Runtime Datasets, Evidence Packs, Historical RGAs, and Investigation Contexts are all constructed on top of Runtime Surfaces.

---

# Why is a Runtime Surface Needed?

Robot runtime anomalies rarely occur within a single isolated component.

For example:

```text
LiDAR Point Cloud Lost
```

The actual elements participating in this event might include:

```text
LiDAR
Ethernet
Linux Driver
ROS Topic
Power
Timestamp
```

If this data remains scattered across separate logs, establishing a unified investigation timeline becomes extremely difficult.

Runtime Surfaces provide a unified observation model that enables data from disparate sources to be organized and correlated along a single, shared timeline.

---

# Runtime Surface Architecture

```text
Robot Runtime
│
├── Sensor Surface
├── Power Surface
├── Bus Surface
├── Linux Runtime Surface
├── Driver Surface
├── ROS Runtime Surface
└── Custom Surface
```

Every Surface category continuously produces Runtime Observations.

These Observations ultimately feed into a unified Runtime Dataset.

---

# Runtime Surface Registry

All Runtime Surfaces register with the Surface Registry.

The Surface Registry defines:

- Surface ID
- Surface Type
- Observation Interface
- Availability
- Collection Policy
- Export Policy

The Surface Registry provides Atlas with clear visibility into:

- Which Runtime Surfaces are active in the current deployment
- Which Surfaces are fully covered
- Which Surfaces do not exist
- Which Surfaces are not participating in the current Evidence Pack

---

# Runtime Surface Categories

## Sensor Surface

Represents the physical runtime operational state of sensors.

For example:

- Camera
- LiDAR
- IMU
- GNSS
- Radar
- Ultrasonic

Typical Observations:

- Device availability
- Frame continuity
- Packet continuity
- Sensor metadata

---

## Power Surface

Represents runtime power supply and electrical states.

For example:

- Voltage
- Power interruption
- Brownout
- Power recovery

Power Surfaces aid in investigating power-related anomalies.

---

## Bus Surface

Represents the operational state of communication buses.

For example:

- USB
- Ethernet
- CAN
- SPI
- I²C
- UART
- CSI

Typical Observations:

- Device connection
- Link status
- Packet activity
- Bus errors

---

## Linux Runtime Surface

Represents the state of the underlying Linux Runtime.

For example:

- Process lifecycle
- CPU usage
- Memory pressure
- Disk activity
- Kernel events

These Observations help identify environmental and OS-level runtime anomalies.

---

## Driver Surface

Represents the operational state of the driver layer.

For example:

- Driver start
- Driver exit
- Driver restart
- Runtime errors

Driver Surfaces do not contain driver source code.

They strictly observe runtime driver behavior.

---

## ROS Runtime Surface

Represents the state of the ROS Runtime.

For example:

- Topic frequency
- Topic availability
- Node lifecycle
- Message continuity

ROS Runtime Surfaces provide essential observation points just below the robot application layer.

---

## Custom Surface

OEMs can extend new Runtime Surfaces as needed.

For example:

- FPGA
- MCU
- PLC
- Safety Controller
- Robot Middleware
- Custom Runtime Components

Atlas places no restriction on Runtime Surface types.

---

# Runtime Observation

Each Runtime Surface continuously generates Observations.

Typical Observations include:

- Timestamp
- Runtime Event
- Runtime Status
- Metadata
- Availability
- Continuity

Atlas does not require every Surface to produce identical data.

Different Surfaces can maintain distinct Observation Schemas.

---

# Runtime Dataset

All Runtime Observations ultimately flow into a single, unified Runtime Dataset.

```text
Runtime Surface
        │
        ▼
Runtime Observation
        │
        ▼
Runtime Dataset
```

Atlas does not build independent data lifecycles for different Runtime Surfaces.

All Surfaces share a single Runtime Dataset.

---

# Surface Correlation

A Runtime Investigation can correlate multiple Runtime Surfaces simultaneously.

For example:

```text
Camera Frame Drop
        │
        ├──────── Linux Driver Restart
        │
        ├──────── CPU Spike
        │
        └──────── ROS Topic Loss
```

Atlas establishes temporal correlations across Runtime Surfaces.

Surface Correlation provides diagnostic leads, but does not inherently equal causality.

---

# Surface Coverage

Every Evidence Pack records its explicit Runtime Surface Coverage.

For example:

| Runtime Surface | Coverage |
|-----------------|----------|
| Camera | ✓ |
| LiDAR | ✓ |
| Ethernet | ✓ |
| Linux Runtime | ✓ |
| ROS Topic | ✓ |
| Power | ✗ |
| CAN | ✗ |

Surface Coverage is used to clarify:

- Which Runtime Surfaces were actively observed
- Which Surfaces were missing
- Which Surfaces were not included in the current investigation

Surface Coverage is not used to rate investigation quality.

It strictly defines the scope of evidence coverage.

---

# Runtime Surfaces and Investigations

Runtime Surfaces do not directly conduct investigations.

They supply the necessary Runtime Observations for investigations.

```text
Runtime Surface
        │
        ▼
Runtime Observation
        │
        ▼
Runtime Dataset
        │
        ▼
Evidence Pack
        │
        ▼
Runtime Investigation
```

Surfaces act as the evidence source for investigations, not the investigation conclusions.

---

# Design Principles

Runtime Surfaces adhere to the following principles:

- Each Surface observes independently
- Each Surface is independently extensible
- All Surfaces share a single Runtime Dataset
- All Surfaces utilize a unified timeline
- Surface Correlation does not equal causality
- Surface Coverage does not imply issue resolution

---

# Summary

Runtime Surface™ defines the runtime objects that Atlas can continuously observe.

All Runtime Observations converge into a unified Runtime Dataset, forming the foundation for Evidence Packs and Runtime Investigations.

Runtime Surfaces establish a unified observation model across diverse runtime components, ensuring investigations remain organized around a single shared timeline rather than relying on fragmented, siloed logs.

---

# Next Reading

- Runtime Dataset
- Evidence Pack™
- Historical RGA™
- Investigation Context
