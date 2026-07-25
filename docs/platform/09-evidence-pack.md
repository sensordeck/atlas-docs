---
title: Evidence Pack™
sidebar_label: Evidence Pack™
---

# Evidence Pack™

## Overview

Evidence Pack™ (EP) is the standardized runtime evidence container in Atlas Runtime Governance™.

An Evidence Pack does not store new runtime data.

Instead, it is a structured investigation evidence pack generated from the underlying Runtime Dataset based on a designated time window.

The Evidence Pack serves as the unified evidence input for Runtime Investigations.

---

# Runtime Evidence Architecture

```text
Runtime Dataset
        │
        ▼
Evidence Window
        │
        ▼
Evidence Pack Builder
        │
        ▼
Evidence Pack
```

An Evidence Pack consistently references the Runtime Dataset.

It never re-collects runtime data.

---

# Evidence Pack Components

A standard Evidence Pack includes:

```text
Evidence Pack
│
├── Evidence Window
├── Runtime Timeline
├── Runtime Surface Coverage
├── Runtime Metadata
├── Event Markers
├── Dataset References
├── Integrity Information
└── Export Manifest
```

An Evidence Pack strictly organizes the evidence required for an investigation.

It does not contain investigation conclusions.

---

# Evidence Window

The Evidence Window defines the time range referenced by the investigation.

An Evidence Window can originate from:

- Manual Time Slice
- Candidate Timeline
- Controlled Event
- Runtime Trigger

The Evidence Window forms the foundation of an Evidence Pack.

---

# Five-Segment Window

Atlas utilizes a standardized Five-Segment Window to organize runtime evidence.

```text
Pre-Guard
      │
      ▼
Baseline
      │
      ▼
Deviation
      │
      ▼
Recovery
      │
      ▼
Post-Guard
```

The Five-Segment Window provides a consistent temporal structure across all Evidence Packs.

While window durations can be adjusted according to policy, the window structure remains uniform.

---

## Pre-Guard

Records operational states during the early phase leading up to the incident.

Mainly used to observe:

- Presence of early weak anomalies
- Long-term trend changes
- Antecedent events

---

## Baseline

Records normal operational states prior to the incident.

The Baseline provides:

- References for normal behavior
- Runtime comparison baselines
- Normal Surface states

---

## Deviation

Records the phase during which the anomaly occurred.

Typically contains:

- Runtime Events
- Surface Abnormalities
- Runtime Changes
- Observation Changes

Deviation is a primary focal point of an investigation, though not the only section investigated.

---

## Recovery

Records the recovery phase following an anomaly.

For example:

- Driver Restarts
- Device Reconnections
- Runtime Recovery
- Recovery Failures

Recovery helps engineers understand the evolution of the event.

---

## Post-Guard

Records operational states following recovery.

Mainly used to observe:

- Whether normal operation has resumed
- Whether secondary anomalies occur
- Presence of lingering side effects

---

# Runtime Timeline

An Evidence Pack preserves a unified Runtime Timeline.

Observations across all Runtime Surfaces are organized along this single timeline.

```text
Time
────────────────────────────────────────>

Camera

LiDAR

USB

Driver

Linux Runtime

ROS Topic
```

The Timeline is not responsible for interpreting events.

It strictly records the chronological sequence of events.

---

# Runtime Surface Coverage

An Evidence Pack records all Runtime Surfaces participating in the current evidence window.

For example:

| Runtime Surface | Included |
|-----------------|----------|
| Camera | ✓ |
| LiDAR | ✓ |
| Ethernet | ✓ |
| Linux Runtime | ✓ |
| ROS Topic | ✓ |
| Power | ✗ |

Surface Coverage defines the scope of evidence sources.

It does not evaluate investigation quality.

---

# Runtime Metadata

An Evidence Pack can reference runtime metadata.

For example:

- Device Metadata
- Runtime Metadata
- Collection Timestamps
- Deployment Metadata
- Runtime Configurations

Metadata helps provide context for the runtime environment.

It does not represent investigation conclusions.

---

# Event Markers

Event Markers are used to highlight significant runtime events.

For example:

- Runtime Triggers
- Controlled Events
- Device Reconnections
- Driver Restarts
- Runtime Notifications

Markers assist engineers when scanning through the Runtime Timeline.

---

# Dataset References

An Evidence Pack does not duplicate the Runtime Dataset.

It references the data within the specified time range inside the Runtime Dataset.

```text
Runtime Dataset
        │
        ▼
Referenced Time Range
        │
        ▼
Evidence Pack
```

Atlas strictly adheres to the rule:

> The Runtime Dataset is the sole source of truth for runtime data.

---

# Integrity Information

An Evidence Pack preserves integrity information.

For example:

- Dataset References
- Time Ranges
- Window Policies
- Hashes
- Manifests

Integrity Information ensures consistency between the Evidence Pack and the underlying Runtime Dataset.

---

# Export Manifest

The Export Manifest describes the contents of the current export.

For example:

- Included Runtime Surfaces
- Referenced Datasets
- Window Policies
- Export Timestamps
- Export Modes

The Manifest does not hold investigation conclusions.

---

# Candidate Evidence Pack

A single Runtime Dataset can generate multiple Candidate Evidence Packs.

For example:

```text
Runtime Dataset
        │
        ▼
Candidate Timeline
        │
        ├── EP-C01
        ├── EP-C02
        ├── EP-C03
        └── EP-C04
```

Every Candidate Evidence Pack:

- Uses the identical EP Schema
- Uses the identical Five-Segment Window
- References the identical Runtime Dataset
- Corresponds to a distinct Candidate Timeline

All Candidate Evidence Packs are retained.

---

# Primary Evidence Pack

During the investigation, Tier 2 engineers can select one Candidate Evidence Pack as the:

```text
Primary Evidence Pack
```

A Primary Evidence Pack:

- Does not re-generate the Runtime Dataset
- Does not modify the Five-Segment Window
- Does not alter the EP Schema

It simply designates the primary Evidence Pack referenced for the investigation.

All other Candidate Evidence Packs continue to be retained.

---

# Evidence Pack Builder

The Evidence Pack Builder is responsible for constructing an Evidence Pack based on a specified time range.

Builder Inputs:

```text
Runtime Dataset
        +
Evidence Window
```

Builder Output:

```text
Evidence Pack
```

The Evidence Pack Builder is NOT responsible for:

- Runtime Analysis
- Root Cause determinations
- Investigation Results
- Tier Decisions

It is strictly responsible for building standardized evidence.

---

# Design Principles

Evidence Packs adhere to the following principles:

- Reference the Runtime Dataset
- Do not duplicate the Runtime Dataset
- Use a standardized EP Schema
- Use a standardized Five-Segment Window
- Support both Manual and Candidate generation modes
- Candidate EPs and Primary EPs share the exact same Builder
- All Candidate EPs are retained
- Designating a Primary EP does not alter other Candidate EPs

---

# Runtime Dataset vs Evidence Pack

Runtime Dataset:

- Continuously exists
- Continuously grows
- Managed via Rolling Buffer
- Retains complete raw Observations

Evidence Pack:

- References the Dataset
- Organized around a specific time range
- Used directly for Investigation
- Maintains an independent lifecycle from the Dataset

The Runtime Dataset is the data foundation.

The Evidence Pack is the investigation evidence.

---

# Summary

Evidence Pack™ is the unified evidence object for Atlas Runtime Investigations.

It references the Runtime Dataset and uses a standardized Five-Segment Window and EP Schema to organize a designated time window into structured investigation evidence.

Whether originating from a Manual Time Slice or a Candidate Timeline, all Evidence Packs follow the exact same data model, construction pipeline, and evidence structure—delivering a consistent entry point for downstream Runtime Investigations.

---

# Next Reading

- Historical RGA™
- Investigation Context™
- Investigation Tier Candidate™
- Sensor Engagement Pack™
