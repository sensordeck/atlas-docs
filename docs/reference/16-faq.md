---
title: Frequently Asked Questions
sidebar_label: FAQ
---

# Frequently Asked Questions

## Is Atlas another log management system?

No.

Atlas is not a log collection platform.

Atlas provides runtime governance for robots, including:

- Runtime observation
- Evidence organization
- Runtime investigation
- Historical knowledge reuse
- Cross-organizational collaboration

Logs may serve as one source of runtime evidence, but Atlas is not designed to replace existing log management systems.

---

## Does Atlas replace a fleet management system?

No.

Atlas does not replace fleet management platforms.

Fleet management systems focus on:

- Device management
- OTA updates
- Remote monitoring
- Task scheduling
- Robot operations

Atlas focuses on:

- Runtime investigations
- Evidence Packs
- Historical RGA
- Investigation workflows
- Runtime governance

The two systems are complementary.

---

## Does Atlas replace a ticketing system?

No.

Atlas does not replace ticketing platforms such as Jira or ServiceNow.

Atlas integrates with existing ticketing workflows.

Its responsibility begins after a Runtime Execution Failure (REF) has been reported.

---

## Does Atlas automatically determine the root cause?

No.

Atlas does not automatically determine:

- Root cause
- Liability
- Product defects
- Customer fault

Atlas organizes runtime evidence and investigation context.

Engineering teams remain responsible for technical conclusions.

---

## Does Atlas support AI-assisted investigations?

Yes.

Atlas provides structured runtime evidence that can be used by AI-assisted analysis.

However, Atlas does not depend on AI.

All runtime investigation workflows remain deterministic and fully reviewable.

---

## What types of robots does Atlas support?

Atlas is platform-independent.

It can be deployed across different:

- Robot platforms
- SBC platforms
- Linux environments
- ROS-based systems
- Custom robot software

Deployment is based on runtime surface mapping rather than any specific robot architecture.

---

## What sensors does Atlas support?

Atlas is sensor-agnostic.

Typical integrations include:

- Cameras
- LiDAR
- IMUs
- GNSS
- Radar
- Encoders

Additional sensors can be integrated through runtime surface mapping.

---

## Does Atlas require ROS?

No.

ROS is optional.

Atlas can observe runtime surfaces on systems with or without ROS.

---

## Does Atlas require a cloud connection?

No.

Atlas supports multiple deployment models, including:

- Cloud deployment
- Headquarters servers
- On-premises networks
- Offline deployment
- Manual export
- Dock-and-upload workflows

Continuous Internet connectivity is not required.

---

## Does Atlas require us to replace our existing infrastructure?

No.

Atlas is designed to integrate with existing infrastructure.

It coexists with:

- Fleet management platforms
- Cloud platforms
- Ticketing systems
- Object storage
- Existing monitoring platforms

No large-scale infrastructure replacement is required.

---

## Can Atlas support multiple robot models?

Yes.

Atlas is designed as runtime governance infrastructure rather than a project-specific integration.

A single deployment can gradually expand to support multiple:

- Robot models
- Sensor products
- Deployment environments
- SBC platforms

---

## Can Atlas work with multiple sensor manufacturers?

Yes.

OEM runtime investigations can collaborate with different sensor manufacturers through the Sensor Engagement Pack™.

Each sensor manufacturer maintains its own:

- Runtime Profiles
- Historical RGA
- Investigation workflows

Atlas provides the collaboration framework.

---

## What is a Sensor Runtime Profile?

A Sensor Runtime Profile describes how a sensor behaves under known deployment environments and known runtime disturbances.

It is not:

- A certificate
- A passport
- A compliance document

It is reusable runtime investigation knowledge.

---

## What is Historical RGA?

Historical Runtime Governance Asset™ (Historical RGA) stores reusable investigation knowledge.

Typical contents include:

- Runtime patterns
- Investigation paths
- Investigation Results (IR)
- Lessons Learned (LL)
- Runtime Surface references

Historical RGA enables future investigations to begin with accumulated knowledge rather than from scratch.

---

## What is an Evidence Pack?

An Evidence Pack is a standardized package of runtime evidence generated from a Runtime Dataset.

It is associated with a specific Runtime Execution Failure (REF) and provides structured evidence for runtime investigations.

An Evidence Pack is not a log archive.

---

## Does Atlas permanently store all runtime data?

No.

Atlas follows configurable retention policies.

Typical deployments use:

- Rolling buffers
- Retention policies
- Dataset locking upon REF
- Time-range exports

Customers control their own data retention policies.

---

## Who owns the runtime data?

Customers own their runtime data.

OEMs retain ownership of:

- Runtime Datasets
- Evidence Packs
- Historical RGA

Sensor manufacturers retain ownership of:

- Sensor Historical RGA
- Sensor Runtime Profiles

Atlas does not claim ownership of customer runtime data.

---

## Can Atlas share customer data across organizations?

No.

Atlas never automatically shares customer runtime data.

Cross-organizational collaboration always requires customer authorization.

For industry-wide knowledge reuse, Atlas supports anonymized knowledge sharing through Assist Vault™.

---

## Is Atlas a SaaS platform?

Not necessarily.

Atlas supports multiple deployment models, including:

- On-premises deployment
- Private cloud
- Customer-controlled infrastructure
- Hybrid deployment

Deployment depends on customer requirements.

---

## Is Atlas open source?

No.

Atlas is a commercial runtime governance infrastructure developed by SensorDeck.

Customer deployments are delivered through professional integration and customized implementation projects.

---

## Is Atlas designed for only one robot project?

No.

Atlas is designed as reusable runtime governance infrastructure.

It can scale across:

- Multiple robot SKUs
- Multiple sensor products
- Multiple deployment environments
- Multiple customers

without redesigning the runtime investigation framework.

---

## How is Atlas typically deployed?

Deployment typically follows four stages:

```text
Pilot

↓

Controlled Deployment

↓

Production Ready

↓

Full Deployment
