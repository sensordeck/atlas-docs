---
title: Release Notes
sidebar_label: Release Notes
---

# Release Notes

This page summarizes the major releases of Atlas Runtime Governance™.

Release Notes describe product evolution, new capabilities, compatibility, and significant changes.

Project-specific customizations are documented separately and are not included in the public release notes.

---

# Versioning

Atlas follows Semantic Versioning.

```text
Major.Minor.Patch
```

Example:

```text
v1.0.0
```

Where:

- **Major** — Architectural or compatibility changes
- **Minor** — New features and capabilities
- **Patch** — Bug fixes and maintenance improvements

---

# Current Release

## Atlas Runtime Governance™

### Version

```text
v1.0.0
```

### Status

Production Ready

### Release

Initial Public Release

---

# Highlights

Version 1.0 introduces the first complete Runtime Governance platform for robotics.

Key capabilities include:

- Runtime Dataset lifecycle
- Runtime Surface framework
- Runtime observation
- Runtime Evidence Packs
- Runtime Execution Failure (REF)
- Historical Runtime Governance Assets (Historical RGA)
- Investigation Context
- Investigation Tier Candidates
- Sensor Engagement Pack™
- Assist Vault™
- Runtime Governance Metrics
- Pilot-to-Production deployment framework

---

# Runtime Governance

New capabilities include:

- Standardized Runtime Surface model
- Runtime Dataset retention
- Rolling buffer
- Dataset locking
- Runtime export
- Runtime observation pipeline

---

# Investigation Workflow

Introduces:

- Runtime Execution Failure (REF)
- Evidence Packs
- Historical RGA recall
- Investigation Context
- Investigation Tier Candidates
- Investigation Results (IR)
- Lessons Learned (LL)

Atlas standardizes the runtime investigation workflow but does not determine root cause or assign liability.

---

# OEM Runtime Governance

Introduces:

- Tier 1 Runtime Intake
- Tier 2 Runtime Investigation
- Tier 3 Engineering Support
- Historical knowledge reuse
- Runtime Governance Dashboard
- REF lifecycle management

---

# Sensor Runtime Governance

Introduces:

- Sensor Runtime Profiles
- Sensor Historical RGA
- Sensor REF workflows
- Sensor FAE investigations
- Sensor Engagement Pack™
- OEM collaboration workflows

---

# Assist Vault™

Introduces:

- Anonymized knowledge sharing
- Runtime pattern reuse
- Investigation strategy reuse
- Historical knowledge contributions

Assist Vault shares investigation knowledge—not customer runtime data.

---

# Deployment Framework

Introduces:

- Pilot Deployment
- Controlled Deployment
- Production Ready
- Full Deployment
- Cross-SKU expansion
- Cross-platform expansion

---

# Architecture

Atlas v1.0 establishes a unified Runtime Governance architecture.

```text
Runtime Surfaces

↓

Runtime Observation

↓

Runtime Dataset

↓

Evidence Pack

↓

Runtime Execution Failure

↓

Historical RGA Recall

↓

Investigation Context

↓

Investigation

↓

IR / LL

↓

Historical RGA

↓

Future Investigation Reuse
```

---

# Supported Deployment Models

Atlas supports:

- On-premises deployment
- Private cloud
- Customer-managed infrastructure
- Hybrid deployment

Deployment architecture depends on project requirements.

---

# Compatibility

Atlas is designed to integrate with existing robotic systems.

Typical integrations include:

- Linux
- ROS-based systems
- Custom runtime platforms
- Fleet management platforms
- Enterprise ticketing systems

---

# Known Limitations

Atlas explicitly does **not**:

- Automatically determine root cause
- Assign liability
- Replace fleet management systems
- Replace ticketing systems
- Replace sensor drivers
- Replace robot applications
- Replace safety certification

Atlas is focused exclusively on runtime governance.

---

# Upgrade Notes

Projects upgrading to future releases should review:

- Release Notes
- Migration Guide
- Compatibility Notes
- Configuration Changes

Project-specific adapters may require additional validation.

---

# Support Lifecycle

Each production release is maintained according to the customer's support agreement.

Support may include:

- Bug fixes
- Security updates
- Performance improvements
- Runtime Surface extensions
- Investigation workflow enhancements

---

# Documentation

Each major release may include updates to:

- Foundation
- Products
- Platform
- Investigation
- Deployment
- Reference

Customers should review the updated documentation before upgrading production deployments.

---

# Roadmap

Future releases may include:

- Additional Runtime Surface templates
- Expanded Sensor Runtime Profiles
- Additional investigation templates
- Enhanced Runtime Governance metrics
- Additional deployment automation

Roadmap items are subject to change.

---

# Changelog

## v1.0.0

### Added

- Atlas Runtime Governance architecture
- Runtime Dataset lifecycle
- Runtime Surface framework
- Runtime observation pipeline
- Runtime Evidence Packs
- Runtime Execution Failure workflow
- Historical Runtime Governance Assets (Historical RGA)
- Investigation Context
- Investigation Tier Candidates
- Sensor Runtime Profiles
- Sensor Engagement Pack™
- Assist Vault™
- Pilot-to-Production deployment framework
- Runtime Governance Metrics
- Cross-SKU deployment model
- Cross-platform deployment model

### Changed

- Initial commercial release.

### Deprecated

None.

### Removed

None.

---

# Enterprise Support

Atlas is delivered through enterprise deployment projects.

Project-specific releases may include:

- Customer-specific adapters
- Runtime Surface extensions
- Integration packages
- Customized investigation workflows
- Deployment configurations

These customizations are documented separately from the standard product release notes.
