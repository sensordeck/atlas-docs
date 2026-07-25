---
title: Runtime Dataset™
sidebar_label: Runtime Dataset™
---

# Runtime Dataset™

## Overview

Runtime Dataset™ is the unified runtime dataset of Atlas Runtime Governance™.

Atlas Agent continuously writes Runtime Observations into the Runtime Dataset, and all downstream investigations are completed based on this exact same Dataset.

The Runtime Dataset is neither a log file nor an Evidence Pack.

It is the raw data foundation for Runtime Evidence.

---

# Runtime Dataset Architecture

```text
Runtime Surface
        │
        ▼
Runtime Observation
        │
        ▼
Runtime Dataset
        │
        ├──────── Candidate Timeline
        │
        ├──────── Manual Time Slice
        │
        ├──────── Candidate Evidence Pack
        │
        └──────── Primary Evidence Pack
```

Atlas consistently maintains a single Runtime Dataset.

Different investigation modes share the exact same data source.

---

# Runtime Dataset Lifecycle

The Runtime Dataset lifecycle consists of:

```text
Observe
    ↓
Persist
    ↓
Rolling Buffer
    ↓
Time-range Export
```

Atlas never constructs separate Datasets for different Investigation Workflows.

The entire system maintains only a single Runtime Dataset lifecycle.

---

## Observe

Atlas Agent continuously observes Runtime Surfaces.

Observations can originate from:

- Sensor Runtime
- Driver Runtime
- Linux Runtime
- Power
- Bus
- ROS Runtime
- Custom Runtime Surfaces

All Observations flow into the Runtime Dataset.

---

## Persist

Persist continuously writes Observations into the Runtime Dataset.

Persist is not responsible for analyzing events.

Its responsibility is to ensure Runtime Evidence can be referenced by downstream Investigations.

---

## Rolling Buffer

By default, the Runtime Dataset uses a Rolling Buffer.

Once data exceeds the retention window, the oldest data is automatically overwritten according to policy.

Retention Policies are configurable:

- rolling_buffer_hours
- max_storage_size
- overwrite_policy
- dataset_lock_on_ref

Default recommendations:

| Policy | Default |
|---------|----------|
| rolling_buffer_hours | 48 hours |
| overwrite_policy | circular |
| dataset_lock_on_ref | enabled |

OEMs can adjust policies based on deployment needs.

---

## Dataset Lock

When an REF enters formal investigation, Atlas locks the corresponding time range.

During the lock period:

- It is excluded from the Rolling Buffer
- Overwriting is prohibited
- Runtime Evidence integrity is preserved

The lock remains active until the Evidence Pack export is completed.

Dataset Lock strictly affects only the designated time slice.

---

## Time-range Export

The Runtime Dataset supports exporting by time range.

Exports can be used for:

- Manual Investigation
- Candidate Investigation
- Evidence Pack Generation
- Historical Archives

Exporting does not alter the underlying Runtime Dataset.

---

# Runtime Dataset Organization

The Runtime Dataset is composed of Observations from multiple Runtime Surfaces.

For example:

```text
Runtime Dataset
│
├── Camera Observation
├── LiDAR Observation
├── IMU Observation
├── Power Observation
├── Ethernet Observation
├── USB Observation
├── Driver Observation
├── Linux Runtime Observation
└── ROS Topic Observation
```

All Observations are organized along a unified timeline.

---

# Runtime Timeline

All Observations in the Runtime Dataset are aligned to a single, unified Runtime Timeline.

```text
Time
────────────────────────────────────>

Camera

LiDAR

Ethernet

Driver

Linux Runtime

ROS Topic
```

A unified timeline facilitates:

- Cross-stream Correlation
- Evidence Window Generation
- Runtime Investigation

---

# Runtime Dataset Consumption

The Runtime Dataset can be consumed by different modules.

```text
Runtime Dataset
        │
        ├──────── Manual Time Slice
        │
        ├──────── Candidate Timeline
        │
        ├──────── Candidate Evidence Pack
        │
        ├──────── Primary Evidence Pack
        │
        └──────── Runtime Export
```

All modules share the exact same Dataset.

The Runtime Dataset is never duplicated.

---

# Manual Time Slice

When Tier 1 knows the approximate time of an incident:

Atlas operates based on the specified time range:

```text
Approximate REF Time
        │
        ▼
Time Slice
        │
        ▼
Evidence Pack
```

There is no need to re-collect data.

---

# Candidate Timeline

Some incidents cannot be assigned an accurate occurrence time.

For example:

> "The robot stopped unexpectedly sometime yesterday afternoon."

Atlas can scan the Runtime Dataset to identify Candidate Timelines worth investigating further.

Candidate Timelines:

- Provide diagnostic leads
- Offer candidate time windows
- Do NOT confirm Root Cause
- Do NOT confirm causality

---

# Candidate Evidence Pack

Every Candidate Timeline can generate a corresponding Candidate Evidence Pack.

For example:

```text
Candidate Timeline
        │
        ├── EP-C01
        ├── EP-C02
        ├── EP-C03
        └── EP-C04
```

All Candidate Evidence Packs are retained.

Tier 2 engineers can then:

- Review
- Compare
- Merge
- Select Primary Evidence Pack

Atlas does not automatically delete Candidate Evidence Packs.

---

# Primary Evidence Pack

During the investigation process, Tier 2 can select:

```text
Primary Evidence Pack
```

As the formal Investigation Evidence.

Primary Evidence Packs:

- Reference the Runtime Dataset
- Utilize a Five-Segment Window
- Retain the complete Runtime Timeline

Primary Evidence Packs do not impact the retention of Candidate Evidence Packs.

---

# Runtime Dataset Principles

The Runtime Dataset adheres to the following principles:

- Only one Runtime Dataset exists across the entire system
- All investigations share the exact same Dataset
- Dataset lifecycle is unified
- Runtime Observations are never re-collected
- Candidate Timelines do not alter the Dataset
- Evidence Packs reference the Dataset
- Exporting does not duplicate the Dataset

---

# Runtime Dataset vs Evidence Pack

Runtime Dataset:

- Continuously exists
- Continuously grows
- Managed by Rolling Buffer
- Retains complete Runtime Observations

Evidence Pack:

- Targets a single REF
- Generated from the Runtime Dataset
- Uses a Five-Segment Window
- Used for Runtime Investigation

Evidence Packs originate from the Runtime Dataset.

The Runtime Dataset is not equal to an Evidence Pack.

---

# Runtime Dataset Boundary

The Runtime Dataset strictly stores runtime data.

It does NOT contain:

- Root Causes
- Investigation Results
- Lessons Learned
- Historical RGAs
- Investigation Contexts

These investigation assets belong to Runtime Investigation™.

---

# Summary

Runtime Dataset™ is the sole runtime data foundation of Atlas Runtime Governance™.

Atlas Agent continuously writes Runtime Observations into the Runtime Dataset and manages data retention, locking, and exporting through a unified lifecycle.

All Investigation Workflows—including Manual Time Slices, Candidate Timelines, Candidate Evidence Packs, and Primary Evidence Packs—share the exact same Runtime Dataset without creating independent data lifecycles.

---

# Next Reading

- Evidence Pack™
- Historical RGA™
- Investigation Context™
