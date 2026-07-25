---
title: Assist Vault™
sidebar_label: Assist Vault™
---

# Assist Vault™

## Overview

Assist Vault™ is the cross-organization Runtime Investigation Knowledge Exchange of Atlas Runtime Governance™.

It is not a Runtime Dataset Repository.

Nor is it a Historical RGA Repository.

Assist Vault preserves **authorized, shareable, non-identifiable investigation knowledge**, helping the entire robotics industry reduce duplicate investigations and accelerate Runtime Investigation.

---

# Why Assist Vault?

After Runtime Investigation is completed, a large amount of investigation experience remains only within the organization.

For example:

- OEM Historical RGA
- Sensor Historical RGA

Other organizations cannot reuse this experience.

Assist Vault provides an optional knowledge sharing layer.

Only authorized investigation knowledge will enter Assist Vault.

---

# Three Knowledge Domains

Atlas Runtime Governance maintains three independent knowledge domains.

```text
Runtime Investigation Knowledge

        │
        ├──────── OEM Historical RGA
        │
        ├──────── Sensor Historical RGA
        │
        └──────── Atlas Assist Vault
```

The three have different responsibilities.

---

# OEM Historical RGA

OEM Historical RGA is OEM's private knowledge asset.

Contains:

- OEM Investigation
- OEM IR
- OEM LL
- OEM Workflow
- OEM Runtime Experience

Usually contains customer project-related content.

Not shared by default.

---

# Sensor Historical RGA

Sensor Historical RGA is Sensor Manufacturer's private knowledge asset.

Contains:

- Sensor Investigation
- Sensor IR
- Sensor LL
- Sensor Runtime Behaviour
- Sensor Deployment Experience

Not shared by default.

---

# Atlas Assist Vault

Assist Vault preserves authorized industry investigation knowledge.

For example:

- Runtime Pattern
- Investigation Strategy
- Investigation Path
- Lesson Learned
- Runtime Behaviour
- Best Practice

Assist Vault does not store customer identity.

Nor does it store complete investigation records.

---

# Knowledge Boundary

```text
OEM Historical RGA

        │

   Customer NDA

        │

        ▼

Non-identifiable

        │

        ▼

Atlas Assist Vault

        ▲

        │

Sensor Historical RGA
```

Assist Vault is always outside the private knowledge domains of OEM and Sensor.

---

# Data Exchange Modes

Atlas supports two collaboration modes.

## Mode A — Raw Collaboration

Suitable for:

- OEM ↔ Sensor Manufacturer
- Both parties have signed NDA
- Designated investigation cooperation

Can share:

- Runtime Dataset
- Evidence Pack
- Investigation Context
- Runtime Timeline
- Raw Runtime Observation

```text
OEM

↓

Raw Runtime Evidence

↓

Sensor Investigation
```

Mode A is used for a specific Runtime Investigation.

---

## Mode B — Non-identifiable Collaboration

Suitable for:

- Atlas Assist Vault
- Industry knowledge sharing
- No NDA
- Cross-customer experience reuse

Shared content includes:

- Runtime Pattern
- Investigation Path
- Lesson Learned
- Investigation Strategy
- Runtime Behaviour Pattern

Will not share:

- Runtime Dataset
- Customer Identity
- Device Serial Number
- Project Information
- Customer Logs
- Proprietary Configuration

```text
Historical RGA

↓

De-identification

↓

Assist Vault
```

Mode B does not share raw runtime data.

---

# OEM ↔ Sensor Collaboration

OEM and Sensor Manufacturer can adopt Raw Collaboration.

```text
OEM REF

↓

Evidence Pack

↓

Sensor Engagement Pack

↓

Sensor Investigation

↓

Sensor Response

↓

OEM Closure
```

This is a single investigation collaboration.

It does not automatically enter Assist Vault.

---

# OEM → Assist Vault

OEM can choose to convert Historical RGA into Assist Assets.

```text
OEM Historical RGA

↓

Authorization

↓

De-identification

↓

Assist Vault
```

Can only be shared after customer authorization.

---

# Sensor → Assist Vault

Sensor Manufacturer can also contribute investigation experience.

```text
Sensor Historical RGA

↓

Authorization

↓

De-identification

↓

Assist Vault
```

Sensor does not need to disclose:

- Customer Name
- OEM Name
- Project

Only shares reusable investigation knowledge.

---

# What Does Assist Vault Store?

Assist Vault can contain:

```text
Assist Asset
│
├── Runtime Pattern
├── Investigation Path
├── Lesson Learned
├── Runtime Behaviour
├── Investigation Strategy
├── Runtime Surface Pattern
├── Reuse Metadata
└── Source Authorization
```

Assist Vault does not store:

- Runtime Dataset
- Raw Logs
- Evidence Pack
- Historical RGA
- Customer Information

---

# What Is Removed?

Before entering Assist Vault, customer-related information is removed.

For example:

- Customer Name
- OEM Name
- Sensor Project
- Serial Number
- Runtime Dataset
- Device Identifier
- Deployment Address
- Internal Ticket

Retained:

- Runtime Behaviour
- Investigation Experience
- Engineering Knowledge

---

# Historical Recall

Future Investigation can retrieve from Assist Vault.

```text
Current Investigation

        │

        ▼

Assist Vault Recall

        │

        ▼

Candidate Assist Assets
```

Assist Vault provides:

- Runtime Pattern
- Investigation Strategy
- Lesson Learned

Will not provide customer data.

---

# Relationship with Historical RGA

Historical RGA:

- Organization-owned
- Investigation Record
- Private Knowledge
- Customer-specific

Assist Vault:

- Atlas-managed
- Shared Knowledge
- Non-identifiable
- Cross-organization

Historical RGA can exist.

No need to enter Assist Vault.

---

# Authorization Boundary

Assist Vault always follows the authorization principle.

Any sharing must be authorized.

Atlas does not automatically:

- Upload customer data
- Upload Runtime Dataset
- Upload Historical RGA
- Upload Investigation Record

Only after authorization and de-identification can investigation knowledge enter Assist Vault.

---

# Design Principles

Assist Vault follows these principles:

- Completely independent from OEM Historical RGA
- Completely independent from Sensor Historical RGA
- Does not store Runtime Dataset
- Does not store Raw Logs
- Does not store Customer Identity
- Supports OEM NDA Raw Collaboration
- Supports Sensor NDA Raw Collaboration
- Supports Non-identifiable Knowledge Sharing
- All sharing is authorization-based

---

# OEM vs Sensor vs Assist Vault

| Repository | Owner | Raw Runtime Data | Customer-specific | Shared |
|------------|-------|------------------|-------------------|--------|
| OEM Historical RGA | OEM | ✓ | ✓ | No |
| Sensor Historical RGA | Sensor Manufacturer | ✓ | ✓ | No |
| Atlas Assist Vault | Atlas | ✗ | ✗ | Yes (Authorized Only) |

---

# Summary

Assist Vault™ is the industry knowledge sharing layer of Atlas Runtime Governance™.

OEM Historical RGA and Sensor Historical RGA maintain their respective independent investigation knowledge bases for internal Runtime Investigation within organizations. Both parties can collaborate on Raw Runtime Data through Evidence Pack and Sensor Engagement Pack in NDA scenarios.

For investigation experience that organizations wish to reuse across the industry, Atlas provides Assist Vault. After authorization and de-identification processing, only reusable Runtime Pattern, Investigation Path, and Lesson Learned are retained, enabling the entire industry to share investigation capabilities without sharing customer data, raw logs, or private investigation records.

---

# Next Reading

- CTO Runtime Governance Dashboard
