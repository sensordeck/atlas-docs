---
title: Investigation Context™
sidebar_label: Investigation Context™
---

# Investigation Context™

## Overview

Investigation Context™ is the unified investigation context object in Atlas Runtime Governance™.

It organizes the evidence, historical knowledge, and investigation information required for Runtime Investigation into a complete investigation view, eliminating the need for engineers to constantly switch between multiple systems, logs, and investigation records.

Investigation Context does not produce new runtime data, nor does it generate investigation conclusions.

It is responsible for organizing investigation information.

---

# Why Investigation Context?

A Runtime Investigation often involves multiple independent sources.

For example:

- REF Ticket
- Evidence Pack
- Runtime Timeline
- Historical RGA
- Runtime Surface Coverage
- Investigation Questions

If this information remains independent, engineers must constantly switch between different systems.

Investigation Context organizes them into a unified entry point.

---

# Investigation Context Architecture

```text
REF Ticket
      │
      ├──────── Evidence Pack
      │
      ├──────── Historical RGA
      │
      ├──────── Runtime Timeline
      │
      ├──────── Runtime Surface Coverage
      │
      └──────── Investigation Metadata
                 │
                 ▼
        Investigation Context
```

Investigation Context is the investigation object.

Not the investigation result.

---

# Investigation Context Components

An Investigation Context may include:

```text
Investigation Context
│
├── REF Information
├── Evidence Pack References
├── Runtime Timeline
├── Runtime Surface Coverage
├── Historical RGA Candidates
├── Candidate Investigation Paths
├── Investigation Questions
├── Runtime Metadata
└── Context Metadata
```

All content consists of references or organization.

Does not duplicate Runtime Dataset.

---

# REF Information

Records the basic information for this investigation.

For example:

- REF Identifier
- Incident Summary
- Incident Type
- Severity
- Deployment Environment
- Reported Time
- Admission Information

REF Information establishes the investigation background.

---

# Evidence Pack References

Investigation Context references one or more Evidence Packs.

For example:

```text
Investigation Context
        │
        ├── Primary Evidence Pack
        ├── Candidate EP-C01
        └── Candidate EP-C02
```

Evidence Packs maintain independent lifecycles.

Context does not duplicate Evidence.

---

# Runtime Timeline

Investigation Context references Runtime Timeline.

Timeline helps engineers understand the sequence of event development.

For example:

```text
Pre-Guard
      ↓
Baseline
      ↓
Deviation
      ↓
Recovery
      ↓
Post-Guard
```

Timeline itself does not interpret events.

---

# Runtime Surface Coverage

Investigation Context may reference Runtime Surface Coverage.

For example:

| Runtime Surface | Coverage |
|-----------------|----------|
| Camera | ✓ |
| LiDAR | ✓ |
| Ethernet | ✓ |
| Linux Runtime | ✓ |
| ROS Topic | ✓ |
| Power | ✗ |

Surface Coverage indicates evidence coverage scope.

Does not indicate that the issue has been located.

---

# Historical RGA Candidates

Investigation Context may contain Historical Recall results.

For example:

```text
Historical RGA
        │
        ├── Strong Candidate
        ├── Partial Candidate
        └── Weak Candidate
```

Context preserves candidate results.

Not investigation conclusions.

---

# Candidate Investigation Paths

Investigation Context may reference multiple recommended investigation paths.

For example:

```text
Path A
Review Ethernet

Path B
Review Driver Runtime

Path C
Review Sensor Runtime
```

Context may provide multiple Investigation Paths.

The engineer makes the final selection.

---

# Investigation Questions

Investigation Context may preserve questions that need to be answered during the investigation process.

For example:

- Did a Driver Restart occur?
- Is the Runtime Timeline continuous?
- Did a Runtime Timeout occur?
- Is there an existing Historical Pattern?

These questions help focus the investigation.

Not automatic analysis results.

---

# Runtime Metadata

Context may reference runtime metadata relevant to the investigation.

For example:

- Runtime Configuration
- Deployment Metadata
- Runtime Version
- Runtime Environment
- Export Metadata

Metadata helps understand the investigation background.

---

# Context Metadata

Context itself may preserve metadata.

For example:

- Context Identifier
- Creation Time
- Referenced Evidence Packs
- Referenced Historical RGA
- Context Version

Used to manage Context lifecycle.

---

# Context Reuse

The same Investigation Context can serve multiple investigation participants.

For example:

```text
Investigation Context
          │
          ├── OEM Tier 2
          ├── OEM Tier 3
          └── Sensor Manufacturer FAE
```

All roles reference the same Context.

Avoids duplicating investigation information organization.

---

# Context Evolution

As the Investigation progresses, Context can be continuously updated.

For example:

```text
Context v1
      │
      ▼
Add Historical RGA
      │
      ▼
Context v2
      │
      ▼
Add Investigation Path
      │
      ▼
Context v3
```

Context is a continuously evolving investigation object.

Not a one-time generated document.

---

# Investigation Context vs Evidence Pack

Evidence Pack preserves:

- Runtime Evidence
- Runtime Timeline
- Runtime Surface Observation

Investigation Context preserves:

- Investigation reference relationships
- Historical knowledge references
- Investigation Path
- Investigation Questions

Evidence Pack answers:

> What happened?

Investigation Context answers:

> What evidence and knowledge are we currently using to conduct the investigation?

---

# Investigation Context vs Historical RGA

Historical RGA preserves:

- Historical investigation knowledge
- IR
- LL
- Investigation Pattern

Investigation Context preserves:

- Current investigation
- Current references
- Current Investigation Path
- Current Historical Recall

Historical RGA is a knowledge asset.

Investigation Context is the current investigation workspace.

---

# Design Principles

Investigation Context follows these principles:

- Does not preserve Runtime Dataset
- Does not duplicate Evidence Pack
- Does not duplicate Historical RGA
- Unifies investigation object organization
- Supports multiple Evidence Packs
- Supports multiple Historical RGA
- Supports continuous evolution
- Does not automatically generate Root Cause
- Does not automatically generate Investigation Result

---

# Summary

Investigation Context™ is the unified investigation context for Runtime Investigation.

It organizes REF, Evidence Pack, Historical RGA, Runtime Timeline, and investigation information into a complete investigation view, enabling OEM and Sensor Manufacturer to collaborate around the same investigation context without repeatedly organizing runtime evidence or historical knowledge.

---

# Next Reading

- Investigation Tier Candidate™
- Sensor Engagement Pack™
- Assist Vault™
