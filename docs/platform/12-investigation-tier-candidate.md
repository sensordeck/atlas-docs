---
title: Investigation Tier Candidate™
sidebar_label: Investigation Tier Candidate™
---

# Investigation Tier Candidate™

## Overview

Investigation Tier Candidate™ is an investigation suggestion object provided by Atlas Runtime Governance™ based on current Runtime Evidence and Investigation Context.

It helps engineers quickly determine the next investigation direction.

Investigation Tier Candidate does not represent investigation conclusions.

It also does not determine responsibility attribution.

---

# Why Investigation Tier Candidate?

Complex Runtime Investigations often have multiple possible directions.

For example:

- Sensor Runtime
- Linux Runtime
- Communication Bus
- Power
- Driver
- ROS Runtime

If all directions are investigated simultaneously, not only is it inefficient, but key clues are also easily missed.

Investigation Tier Candidate organizes current evidence into multiple candidate investigation directions, helping engineers rationally arrange investigation priorities.

---

# Investigation Tier Candidate Architecture

```text
Evidence Pack
        │
        ├──── Runtime Timeline
        │
        ├──── Runtime Surface Coverage
        │
        ├──── Historical RGA
        │
        └──── Investigation Context
                  │
                  ▼
      Investigation Tier Candidate
```

Investigation Tier Candidate is built upon existing investigation information.

It does not produce new Runtime Evidence.

---

# Candidate Structure

An Investigation Tier Candidate can include:

```text
Investigation Tier Candidate
│
├── Candidate Identifier
├── Candidate Summary
├── Candidate Scope
├── Candidate Evidence References
├── Candidate Historical References
├── Suggested Investigation Path
├── Suggested Investigation Tier
└── Candidate Metadata
```

Candidate itself does not store Runtime Dataset.

All runtime data is accessed through references.

---

# Candidate Scope

Candidate Scope describes the scope of suggested investigation.

For example:

- Sensor Runtime
- Linux Runtime
- Communication Runtime
- Driver Runtime
- Multiple Runtime Surface

Scope is used to help focus the investigation.

It does not indicate that the problem has been located.

---

# Candidate Evidence References

Each Candidate can reference one or more Evidence Packs.

For example:

```text
Candidate
      │
      ├── Primary Evidence Pack
      └── Candidate Evidence Pack
```

Candidate does not copy Evidence.

---

# Candidate Historical References

Candidate can reference Historical Recall results.

For example:

```text
Historical RGA
        │
        ├── Strong Candidate
        ├── Partial Candidate
        └── Weak Candidate
```

Historical RGA is used to provide investigation experience.

It does not prove that the current event is the same as historical events.

---

# Suggested Investigation Path

Candidate can provide suggested investigation paths.

For example:

```text
Review Runtime Timeline

↓

Verify Runtime Surface

↓

Compare Historical Pattern

↓

Perform Target Investigation
```

The final investigation process is decided by engineers.

---

# Suggested Investigation Tier

Candidate can suggest which investigation tier should prioritize handling.

For example:

| Suggested Tier | Typical Responsibility |
|----------------|------------------------|
| Tier 1 | Initial triage |
| Tier 2 | Technical investigation |
| Tier 3 | Advanced engineering investigation |
| Sensor FAE | Sensor-specific investigation |

Suggested Tier is only a suggestion.

Organizations can adjust investigation division of labor according to their own processes.

---

# Multiple Candidates

A Runtime Investigation can have multiple Candidates simultaneously.

For example:

```text
Current REF
      │
      ├── Candidate A
      ├── Candidate B
      └── Candidate C
```

Different Candidates can correspond to different investigation directions.

They do not have a mutually exclusive relationship.

---

# Candidate Evolution

As the investigation progresses, Candidates can be continuously adjusted.

For example:

```text
Candidate v1

↓

New Evidence

↓

Candidate v2

↓

Historical Recall Updated

↓

Candidate v3
```

Candidates can be continuously refined with new evidence.

---

# Candidate Priority

Atlas can organize Candidate Priority based on current investigation information.

For example:

```text
Priority 1

Priority 2

Priority 3
```

Priority is used to help arrange investigation order.

Priority does not represent probability.

It also does not represent Root Cause.

---

# Candidate Collaboration

Multiple investigation roles can collaborate around the same Candidate.

For example:

```text
Investigation Tier Candidate
            │
            ├── OEM Tier 2
            ├── OEM Tier 3
            └── Sensor FAE
```

All participants share the same Candidate information.

Avoiding duplicate organization of investigation directions.

---

# Investigation Tier Candidate vs Investigation Context

Investigation Context provides:

- Current investigation information
- Evidence References
- Historical References
- Runtime Timeline

Investigation Tier Candidate provides:

- Candidate investigation directions
- Suggested investigation scope
- Suggested investigation path
- Suggested investigation tier

Context describes the current investigation.

Candidate describes next investigation suggestions.

---

# Investigation Tier Candidate vs Historical RGA

Historical RGA stores:

- Historical investigation knowledge
- Investigation Pattern
- Investigation Result
- Lesson Learned

Investigation Tier Candidate stores:

- Current candidate investigation directions
- Current suggested investigation path
- Current suggested investigation tier

Historical RGA is historical knowledge.

Candidate is current investigation suggestion.

---

# Design Principles

Investigation Tier Candidate follows these principles:

- Based on current Runtime Evidence
- Based on Investigation Context
- Can reference Historical RGA
- Supports multiple Candidates coexisting
- Supports continuous evolution
- Does not automatically confirm Root Cause
- Does not automatically determine responsibility attribution
- Does not replace engineer judgment

---

# Summary

Investigation Tier Candidate™ is the investigation suggestion object of Atlas Runtime Governance™.

It combines current Runtime Evidence, Investigation Context, and Historical RGA to organize multiple candidate investigation directions, suggest investigation paths and investigation tiers for engineers, helping teams conduct Runtime Investigation more efficiently, while always keeping investigation results ultimately confirmed by engineers.

---

# Next Reading

- Sensor Engagement Pack™
- Assist Vault™
- CTO-Runtime Governance Dashboard™
