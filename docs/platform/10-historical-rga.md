---
title: Historical Runtime Governance Asset™
sidebar_label: Historical RGA™
---

# Historical Runtime Governance Asset™

## Overview

Historical Runtime Governance Asset™ (Historical RGA, abbreviated as RGA) is the organizational runtime knowledge asset of Atlas Runtime Governance™.

Every completed Runtime Investigation can preserve its authorized investigation results as Historical RGA for future investigation reuse.

Historical RGA preserves investigation knowledge, not runtime data.

It answers:

> **"In the past, how did we investigate similar Runtime Execution Failures (REF)?"**

Rather than:

> **"What happened at that time?"**

---

# Historical RGA Architecture

```text
Completed Investigation
          │
          ▼
 Investigation Result
          │
          ▼
 Lesson Learned
          │
          ▼
 Create Historical RGA
          │
          ▼
 Historical Repository
          │
          ▼
 Future Runtime Investigation
```

Historical RGA does not participate in Runtime Observation.

It belongs to knowledge retention after Runtime Investigation completion.

---

# Historical RGA Domains

Atlas supports multiple Historical RGA Knowledge Domains.

Currently, there are two main categories.

```text
Historical Runtime Governance Asset
│
├── OEM Historical RGA
└── Sensor Historical RGA
```

Both use the same data model.

The difference lies in investigation boundaries and knowledge scope.

---

## OEM Historical RGA

OEM Historical RGA preserves historical experience from OEM Runtime Investigations.

It typically involves multiple Runtime Surfaces.

For example:

- Camera
- LiDAR
- IMU
- USB
- Ethernet
- CAN
- Linux Runtime
- ROS Runtime
- Multiple Sensor Interaction

OEM Historical RGA focuses more on:

- Runtime Execution Failure
- Cross-system Investigation
- Multiple Runtime Surface Correlation
- OEM Investigation Workflow
- OEM Lesson Learned

Typical case:

```text
Unexpected Stop

↓

LiDAR
+
Ethernet
+
Linux Driver
+
ROS Topic
```

---

## Sensor Historical RGA

Sensor Historical RGA preserves historical investigation experience from Sensor Manufacturers or FAEs.

The investigation target focuses on Sensor Runtime.

For example:

- Camera Runtime
- LiDAR Runtime
- IMU Runtime
- Driver Runtime
- Sensor Interface
- Firmware Runtime

The same Sensor issue may come from different deployment environments.

For example:

- Restaurant
- Factory
- Warehouse
- Hospital
- Hotel

Sensor Historical RGA retains:

> Investigation experience with the same Sensor product across different runtime environments.

---

# Shared Runtime Governance Model

OEM Historical RGA and Sensor Historical RGA use a unified data model.

A Historical RGA can contain:

```text
Historical RGA
│
├── Investigation Summary
├── Runtime Pattern
├── Investigation Path
├── Excluded Path
├── Investigation Result (IR)
├── Lesson Learned (LL)
├── Runtime Surface References
├── Evidence References
├── Reuse Metadata
└── Authorization Metadata
```

Historical RGA does not store Runtime Dataset.

Evidence is always referenced through Evidence Pack.

---

# Investigation Knowledge

Historical RGA preserves investigation knowledge.

Including:

## Runtime Pattern

For example:

- Camera Frame Drop
- LiDAR Packet Loss
- USB Disconnect
- Driver Restart
- Runtime Timeout

Patterns help establish investigation direction for the future.

---

## Investigation Path

Records investigation steps that were executed in the past.

For example:

```text
Verify Connection
Review Timeline
Inspect Driver
Compare Historical Pattern
```

---

## Excluded Path

Records directions that have been verified as irrelevant.

For example:

- Power Normal
- Ethernet Stable
- Driver Active

Avoids repeated troubleshooting in the future.

---

## Investigation Result (IR)

References Investigation Result.

Maintains original engineering records.

---

## Lesson Learned (LL)

References Lesson Learned.

Retains reusable engineering experience.

---

# Historical Recall

New Runtime Investigations can retrieve Historical RGA.

```text
Current REF
      │
      ▼
Historical Recall
      │
      ▼
Candidate Historical RGA
```

The goal of Recall:

- Provide investigation entry points
- Provide Runtime Pattern
- Provide Investigation Path
- Provide Lesson Learned

Atlas does not automatically generate investigation conclusions.

---

# Partial Match

Historical Recall supports Partial Match.

Even if:

- Robot is different
- Sensor is different
- Deployment is different
- Software Version is different

Historical RGA may still have reference value.

Atlas always follows:

> Partial Match takes priority over no recall at all.

---

# Why Retrieved

Each Recall records:

```text
why_retrieved
```

For example:

- Similar Runtime Pattern
- Similar Runtime Surface
- Similar Investigation Path

Helps engineers understand:

Why viewing this Historical RGA is recommended.

---

# Historical Repository

Each organization maintains its own Historical Repository.

```text
OEM
   │
   └── OEM Historical RGA Repository

Sensor Manufacturer
   │
   └── Sensor Historical RGA Repository
```

Atlas does not require both parties to share Repository.

Each organization has:

- Independent Repository
- Independent permissions
- Independent lifecycle

---

# Cross-domain Collaboration

When OEM Runtime Investigation involves a Sensor Candidate:

```text
OEM Investigation
        │
        ▼
OEM Historical Recall
        │
        ▼
Sensor Engagement Pack
        │
        ▼
Sensor Historical Recall
        │
        ▼
Sensor Investigation
```

OEM retrieves OEM Historical RGA.

Sensor Manufacturer retrieves Sensor Historical RGA.

What both parties share is:

- Evidence Pack Reference
- Investigation Context
- Sensor Engagement Pack

Rather than sharing the entire Historical Repository.

---

# Design Principles

Historical RGA follows these principles:

- Preserve investigation knowledge, not Runtime Dataset
- Reference Evidence Pack, not copy Evidence
- OEM and Sensor use unified Schema
- OEM and Sensor have independent Repository
- Support Partial Match
- Provide why_retrieved for each Recall
- Do not automatically confirm Root Cause
- Do not automatically copy historical conclusions
- Respect customer authorization boundaries

---

# Historical RGA vs Evidence Pack

Evidence Pack answers:

> What happened at that time?

Historical RGA answers:

> How were similar issues investigated in the past?

Evidence Pack preserves runtime evidence.

Historical RGA preserves investigation knowledge.

Together they form the foundation of Runtime Investigation.

---

# Summary

Historical Runtime Governance Asset™ is the organizational knowledge asset of Atlas Runtime Governance™.

OEM and Sensor Manufacturer can each maintain their own Historical RGA Repository, preserving Investigation Pattern, IR, LL, and investigation experience under a unified data model.

Future Runtime Investigations no longer start from zero, but from the organization's long-term accumulated runtime knowledge.

---

# Next Reading

- Investigation Context
- Investigation Tier Candidate
- Sensor Engagement Pack™
- Assist Vault™
