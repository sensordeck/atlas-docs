---
title: Atlas Agent™
sidebar_label: Atlas Agent™
---

# Atlas Agent™

## Overview

Atlas Agent™ is a Runtime Agent deployed directly within the robot operating environment.

It is responsible for continuously executing Runtime Observation and collecting, retaining, and exporting runtime data based on configured policies, serving as the unified data entry point for Runtime Governance.

Atlas Agent is the field execution component of Atlas Runtime Governance™.

---

# Runtime Architecture

A typical deployment is structured as follows:

```text
Robot Runtime
│
├── Sensors
├── Power
├── USB / Ethernet / CAN
├── Linux Runtime
├── Device Drivers
├── ROS Runtime
└── Applications
        │
        ▼
    Atlas Agent
        │
        ▼
Runtime Dataset
```

Atlas Agent is decoupled from the robot's business logic.

It does not participate in the robot's control loops.

---

# Runtime Dataset Lifecycle

Atlas Agent maintains a unified Runtime Dataset lifecycle.

All runtime data, regardless of the ultimate investigation mode for which it is used, follows the exact same lifecycle:

```text
Observe
    ↓
Persist
    ↓
Rolling Buffer
    ↓
Time-range Export
```

Atlas does not maintain multiple copies of the Runtime Dataset for different investigation modes.

Whether for:

- Tier 1 manually specified REF time ranges
- Automatic Candidate Timelines
- Candidate Evidence Packs
- Primary Evidence Packs

All are built upon the exact same Runtime Dataset.

---

## Observe

Atlas Agent continuously observes the Runtime Surface and ingests runtime data.

For example:

- Sensor Runtime
- Driver Runtime
- Linux Runtime
- Runtime Events
- Runtime Metadata
- Timestamps
- Surface Status

All observed data enters the unified data lifecycle.

---

## Persist

The Agent continuously writes Runtime Observations into the Runtime Dataset.

The goal of Persist is not to generate investigation conclusions, but to ensure runtime data can be referenced by downstream investigations.

---

## Rolling Buffer

The Runtime Dataset is managed by default using a Rolling Buffer.

When retention policy limits are reached, the oldest data is automatically purged according to the overwrite policy.

Retention Policies are configurable, including:

- `rolling_buffer_hours`
- `max_storage_size`
- `overwrite_policy`
- `dataset_lock_on_ref`

Default recommended values:

| Policy | Default |
|---------|---------|
| rolling_buffer_hours | 48 hours |
| overwrite_policy | circular |
| dataset_lock_on_ref | enabled |

OEMs can adjust these policies based on actual deployment environments.

---

## Dataset Lock

When a Runtime Execution Failure (REF) enters formal investigation, Atlas Agent locks the data corresponding to that time window.

During the lock period:

- It is excluded from Rolling Buffer overwrites
- Automatic deletion is prohibited
- Runtime Dataset integrity is preserved
- The lock remains active until Evidence Pack export is completed

Dataset Lock applies strictly to the specified time window without affecting the normal cycling of other Runtime Datasets.

---

## Time-range Export

Atlas Agent supports exporting the Runtime Dataset by time range.

Export sources can include:

- Tier 1 specified REF time slices
- Candidate Timelines
- Candidate Evidence Packs
- Primary Evidence Packs

All exports reference the exact same Runtime Dataset, without duplicating or re-collecting runtime data.

---

## Architecture Principle

Atlas consistently maintains a single, unified Runtime Dataset lifecycle.

```text
                 Runtime Dataset
                        │
      ┌─────────────────┼──────────────────┐
      │                 │                  │
      ▼                 ▼                  ▼
Manual REF       Candidate Timeline   Candidate EP
 Time Slice         Generation          Builder
      │                 │                  │
      └─────────────────┴──────────────────┘
                        │
                        ▼
               Evidence Pack Export
```

Different investigation modes share the same underlying Runtime Dataset.

Atlas never creates independent data lifecycles or maintains dual Runtime Datasets for different Investigation Workflows.

---

# Internal Components

Atlas Agent comprises multiple operational modules:

```text
Atlas Agent
│
├── Runtime Observer
├── Dataset Manager
├── Retention Manager
├── Evidence Builder
├── Export Manager
├── Surface Adapter
└── Configuration Manager
```

Each module manages specific responsibilities.

---

# Runtime Observer

The Runtime Observer continuously listens to the Runtime Surface.

The Observer is responsible for receiving:

- Runtime Events
- Surface Status
- Runtime Metadata
- Timestamps
- Runtime States

The Observer is not responsible for Root Cause analysis.

---

# Dataset Manager

The Dataset Manager organizes the Runtime Dataset.

Core responsibilities:

- Writing to the Dataset
- Establishing a unified timeline
- Data segmentation
- Data indexing
- Metadata management

The Dataset Manager does not conduct investigations.

---

# Retention Manager

The Retention Manager manages the Runtime Dataset according to defined policies.

For example:

- Maximum storage capacity
- Maximum retention duration
- Circular overwrite policy
- Pre-export retention
- Post-export deletion
- Protected Datasets

Retention Policies can be configured according to OEM requirements.

---

# Evidence Builder

The Evidence Builder generates Evidence Packs based on specified events.

The Evidence Builder responds to:

- Manual Window Requests
- Runtime Events
- Dataset Triggers
- Controlled Events

The Evidence Builder does not determine investigation tiers.

It is strictly responsible for assembling standardized Evidence Packs.

---

# Export Manager

The Export Manager handles exporting runtime data.

Supports:

- Runtime Datasets
- Evidence Packs
- Runtime Metadata
- Export Manifests

Export targets are governed by customer deployment policies.

---

# Surface Adapter

Different robot platforms possess distinct Runtime Surfaces.

The Surface Adapter is responsible for:

- Runtime Surface Discovery
- Surface Registration
- Runtime Interfaces
- Data Collection Interfaces

Atlas does not require all robots to share identical data interfaces.

The Surface Adapter provides a standardized abstraction layer.

---

# Configuration Manager

The Configuration Manager manages Agent configurations.

For example:

- Observation Policies
- Retention Policies
- Export Policies
- Runtime Surfaces
- Sampling Policies
- Trigger Policies

Different robots can maintain distinct configurations.

---

# Deployment Model

Atlas Agent can be deployed on:

- Robot SBCs
- Industrial PCs
- Edge Computers
- Embedded Linux Platforms

The Agent does not depend on cloud connectivity to run.

All Runtime Observation can be completed locally on the device.

---

# Resource Consumption

Atlas Agent design goals:

- Continuous long-term execution
- Low resource footprint
- Zero impact on real-time robot control
- Independently upgradeable
- Independently stop-capable

Specific resource consumption depends on:

- Number of Runtime Surfaces
- Dataset Policies
- Sampling Rates
- Export Policies

---

# Security Boundary

Atlas Agent enforces customer data boundaries by default.

Including:

- Customer-owned Runtime Data
- Local Storage
- Configurable Exports
- Access Controls
- Data Retention Policies

Atlas Agent does not require persistent connections to external services.

---

# Failure Handling

When the Agent itself encounters an anomaly, it should prioritize:

- Preserving existing Dataset integrity
- Retaining Export Metadata
- Logging Agent Runtime Events
- Resuming operation seamlessly upon reboot

Agent anomalies must never impact core robot business operations.

---

# Extensibility

Atlas Agent supports extending to new Runtime Surfaces.

For example:

- Cameras
- LiDAR
- IMUs
- GNSS
- CAN
- Ethernet
- USB
- GPIO
- PPS
- Custom Sensors

Extensions are implemented through Surface Adapters without modifying the core Agent architecture.

---

# Summary

Atlas Agent™ is the field execution component of Atlas Runtime Governance™.

It is responsible for:

- Runtime Observation
- Runtime Dataset Management
- Evidence Pack Generation
- Runtime Data Export

The Agent itself does not engage in diagnostic analysis or Root Cause determinations.

It provides a unified, stable, and extensible runtime data foundation, delivering reliable evidence sources for downstream Runtime Investigations.

---

# Next Reading

- Runtime Surfaces
- Runtime Dataset
- Evidence Pack™
- Historical RGA™
