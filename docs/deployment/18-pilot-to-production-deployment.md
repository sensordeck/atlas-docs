---
title: Pilot to Production Deployment
sidebar_label: Pilot to Production
---

# Pilot to Production Deployment

## Overview

Atlas Pilot to Production Deployment is a project management framework for OEMs or Sensor Manufacturers to progressively scale Atlas from a controlled pilot into a long-term Runtime Governance Infrastructure.

It is not a one-time software installation, nor is it internal glue code written around a single robot or a single sensor.

The goal of Atlas is to establish a Runtime Governance Infrastructure that can be continuously reused across:

- Robot SKUs
- Sensor SKUs
- SBC / Host Platforms
- Linux / ROS Environments
- Deployment Scenarios
- OEMs and Sensor Manufacturers

```text
Pilot
  │
  ▼
Controlled Deployment
  │
  ▼
Production Readiness
  │
  ▼
Multi-SKU Expansion
  │
  ▼
Full-scale Deployment
```

Each phase must have its own independent Scope, Budget, Milestone, Acceptance Criteria, and Exit Mechanism.

A successful Pilot does not imply automatic progression into full-scale deployment.

---

# Infrastructure, Not Glue Code

Atlas should not be deployed as temporary code that only applies to a single robot model.

A typical Glue Code pattern is:

```text
Robot A
+
Sensor X
+
One Driver
+
One Script
+
One Customer Issue
```

When the Robot, Sensor, SBC, or Software Version changes, the engineering team must re-develop and re-maintain the solution.

Atlas adopts an infrastructure model:

```text
Canonical Runtime Surface
+
Standard Runtime Dataset
+
Standard Evidence Pack
+
Standard Investigation Workflow
+
Reusable Historical RGA
```

Specific product differences are integrated through:

- Surface Registry
- Runtime Adapter
- Configuration
- Product Profile
- Deployment Policy

The Atlas Core, Evidence Schema, Investigation Chain, and RGA Model remain consistent.

---

# Cross-SKU and Cross-platform Architecture

Atlas should support scaling across different platforms under a unified governance model.

```text
Atlas Runtime Governance Infrastructure
│
├── Robot SKU A
│   ├── SBC A
│   ├── LiDAR X
│   └── Camera Y
│
├── Robot SKU B
│   ├── SBC B
│   ├── LiDAR Z
│   └── IMU M
│
└── Robot SKU C
    ├── Industrial PC
    ├── Camera Y
    └── Radar N
```

Cross-platform does not mean all platforms have identical Runtime Surfaces.

It means:

- Using a unified Surface Definition
- Using a unified Evidence Pack Schema
- Using unified Investigation Objects
- Using a unified Historical RGA Model
- Explicitly marking uncovered Surfaces
- Handling interface differences through Adapters

---

# Dual-flywheel Deployment Model

Atlas adopts a dual-flywheel design for OEMs and Sensor Manufacturers.

```text
OEM Runtime Governance Flywheel
            │
            │ Sensor Engagement
            ▼
Sensor Runtime Governance Flywheel
            │
            │ Sensor IR / LL / RGA
            ▼
OEM Runtime Governance Flywheel
```

Regardless of whether the OEM or the Sensor Manufacturer adopts Atlas first, Atlas can continue to expand along the real investigation collaboration chain.

The ultimate goal is to progressively build a Sensor-to-SBC Runtime Governance Ecosystem:

```text
Sensor
   ↓
Bus / Power / Timing
   ↓
Linux / Driver
   ↓
SBC
   ↓
ROS / Application
   ↓
Robot Runtime
```

---

## OEM-first Expansion

When an OEM adopts Atlas first:

```text
OEM Robot Deployment
        │
        ▼
OEM REF Investigation
        │
        ▼
Sensor Candidate
        │
        ▼
Sensor Engagement Pack
        │
        ▼
Sensor FAE Investigation
        │
        ▼
Sensor Historical RGA
```

Atlas can continue to assist relevant Sensor Manufacturers in establishing:

- Sensor Runtime Profile
- Sensor Historical RGA
- Standard FAE Investigation Workflow
- OEM Collaboration Interface

---

## Sensor-first Expansion

When a Sensor Manufacturer adopts Atlas first:

```text
Sensor Runtime Profile
        │
        ▼
Sensor Historical RGA
        │
        ▼
OEM Integration
        │
        ▼
OEM Runtime Surface Mapping
        │
        ▼
OEM REF Investigation
        │
        ▼
OEM Historical RGA
```

Atlas can progressively establish a complete Sensor-to-SBC governance chain along the sensor's actual OEM customers and robot platforms.

---

# OEM and Sensor Deployment Differences

OEMs and Sensor Manufacturers use the same Atlas Canonical Model, but their project goals differ.

| Item | OEM Deployment | Sensor Manufacturer Deployment |
|---|---|---|
| Primary Object | Robot SKU / Fleet | Sensor Product / Sensor SKU |
| Main Investigation | Robot Runtime REF | Sensor REF / FAE Investigation |
| Surface Scope | Sensor, Power, Bus, Linux, Driver, ROS, Robot State | Sensor, Firmware, Interface, Driver, Output, Timing |
| Historical RGA | Multi-sensor and system cases | Sensor-only cases across OEMs and environments |
| Main User | Tier 1 / Tier 2 / Tier 3 | FAE / Driver / Firmware / Product Team |
| Expansion Unit | One Robot Model at a time | One Sensor Product at a time |
| ROI Focus | Investigation time, Tier 3 involvement, fleet support cost | FAE response, cross-OEM reuse, engineering escalation |
| Collaboration | Engage Sensor Factory | Support multiple OEMs |

---

# Project Governance

Every Pilot, Controlled Deployment, and Production Deployment should be managed as a formal project.

Minimum project structure:

```text
Executive Sponsor
        │
        ▼
Organizational Representative
        │
        ▼
Project Manager
        │
        ├── Business Owner
        ├── Runtime Engineering Lead
        ├── Investigation Lead
        ├── IT / Security
        ├── Legal / Procurement
        └── Atlas Project Lead
```

In smaller projects, one individual may fulfill multiple roles.

However, each responsibility must have an explicit Owner.

---

# Organizational Representative

The customer must designate an Organizational Representative.

This role is not a typical technical point of contact, but an official project representative of the customer organization.

Key responsibilities:

- Confirm project scope
- Coordinate cross-departmental resources
- Confirm customer inputs
- Approve Change Requests
- Sign off on Milestone Acceptance
- Manage project escalations
- Submit decisions to proceed, pause, or terminate

Atlas should not rely on informal opinions from individual engineers as organizational-level acceptance conclusions.

---

# OEM Project Roster

The recommended project roster for OEMs includes:

| Role | Main Responsibility |
|---|---|
| Executive Sponsor | Budget and deployment decisions |
| Organizational Representative | Cross-departmental coordination and formal acceptance |
| OEM Project Manager | Schedule, Risk, Milestone |
| Product Owner | Robot SKU and business scenarios |
| Runtime Engineering Lead | Agent and Surface integration |
| Tier 1 Representative | REF Intake |
| Tier 2 Investigation Lead | Evidence, Recall, and investigation organization |
| Tier 3 Engineering Representative | Complex events and technical boundaries |
| Fleet / Cloud Owner | Data transmission and headquarters connection |
| Sensor Coordination Owner | Sensor Factory collaboration |
| IT / Security | Data, permissions, and deployment review |
| Legal / Procurement | Contract, IP, and exit mechanism |

Tier 3 should not be burdened with routine log collection and data processing during the Pilot.

---

# Sensor Manufacturer Project Roster

The recommended project roster for Sensor Manufacturers includes:

| Role | Main Responsibility |
|---|---|
| Executive Sponsor | Budget and product line decisions |
| Organizational Representative | Formal coordination and acceptance |
| Project Manager | Schedule, Scope, Risk |
| Sensor Product Owner | Sensor SKU and target market |
| FAE Lead | Sensor REF Workflow |
| Driver Lead | Driver Runtime Boundary |
| Firmware Lead | Firmware Investigation |
| Validation / Reliability Lead | Known Environment Coverage |
| OEM Collaboration Owner | OEM integration and EGP |
| IT / Security | Repository and data exchange |
| Legal / Procurement | NDA, IP, and exit mechanism |

---

# Budget Structure

The project budget should cover the total deployment cost, not just the Atlas License.

```text
Total Project Budget
│
├── Atlas Software / License
├── Professional Services
├── Integration and Adapter Work
├── Historical RGA Pre-build
├── Infrastructure
├── Customer Internal Engineering
├── Training and Change Management
├── Security / Legal Review
└── Contingency
```

---

## OEM Budget Items

OEMs typically need to budget for:

- Robot Runtime Surface Mapping
- Atlas Agent Integration
- Fleet / Cloud Integration
- OEM Historical RGA Pre-build
- Tier 1 / Tier 2 Workflow Setup
- Sensor Factory Collaboration
- Selected Robot Deployment
- Governance Metrics and ROI Tracking
- Training and Operational Handover

---

## Sensor Manufacturer Budget Items

Sensor Manufacturers typically need to budget for:

- Sensor Runtime Surface Mapping
- Sensor Runtime Profile Creation
- Known Environment / CE Observation
- Sensor Historical RGA Pre-build
- FAE Workflow Integration
- Driver / Firmware Escalation Workflow
- OEM EGP Collaboration
- Product and Environment Expansion
- FAE ROI Tracking

---

## Contingency Budget

It is recommended to reserve:

```text
10%–20%
```

For approved:

- Additional Adapters
- New Surfaces
- Extra Test Cycles
- Infrastructure Changes
- Approved Scope Expansion

Contingency should not be treated as a default consumable budget.

---

# Milestone-based Payment

Milestone-based payment is recommended.

Each payment installment should be tied to:

- Defined Deliverable
- Acceptance Criteria
- Acceptance Period
- Written Acceptance
- Remediation Process
- Change Boundary

---

## Suggested Payment Structure

| Milestone | Suggested Payment |
|---|---:|
| Contract and Project Initiation | 15% |
| Architecture and Surface Readiness | 15% |
| Historical Asset Initialization | 15% |
| Pilot Technical Chain Acceptance | 20% |
| Controlled Deployment Acceptance | 15% |
| Production Readiness Acceptance | 10% |
| Final Handover / Full-scale Plan | 10% |

The actual percentages can be adjusted based on project size.

---

# Stage 0 — Project Initiation

## Common Deliverables

- Contract / SOW
- Project Charter
- Approved Budget
- Named Roster
- Scope Definition
- Data and IP Boundary
- Milestone Plan
- Payment Schedule
- Change Process
- Exit Mechanism
- Escrow Requirement

## Start Gate

Before project initiation, the following must be confirmed:

- Executive Sponsor
- Organizational Representative
- Project Manager
- Budget Approval
- In-scope Product
- In-scope Environment
- Acceptance Signatory
- Data Owner
- Exit Terms

---

# Stage 1 — Pilot Deployment

The Pilot should be constrained to an explicitly defined minimum scope.

---

## OEM Pilot Scope

Recommended selection:

```text
One Robot Model
+
One Critical Sensor
+
One Deployment Scenario
+
One to Three REF Types
+
Five to Ten OEM Historical Cases
```

For example:

```text
Delivery Robot A
+
LiDAR X
+
Restaurant
+
Unexpected Stop
```

---

## Sensor Manufacturer Pilot Scope

Recommended selection:

```text
One Sensor Product
+
One Firmware / Driver Combination
+
Two to Four Environments
+
Three to Five Runtime Patterns
+
Five to Ten Historical Cases
```

For example:

```text
LiDAR X
+
Firmware 2.4
+
Warehouse / Factory / Restaurant
+
Packet Loss / Reconnect / Timestamp Gap
```

---

## Pilot Acceptance

The Pilot should verify that:

- Runtime Surface is observable
- Agent can Observe, Persist, Retain, Export
- Evidence Pack can be generated
- Historical RGA can be recalled
- Investigation Context can be formed
- Investigation can reach closure
- IR and LL can be saved
- New RGAs can be established
- ROI Baseline can be calculated

---

# Stage 2 — Controlled Deployment

Controlled Deployment is the formal phase between Pilot and Production.

It is not an unconstrained expansion.

Core principle:

> Expand only one major product model or platform combination at a time.

---

## OEM Controlled Deployment

OEMs should adopt:

```text
One Robot Model at a Time
```

Each Robot Model should be independently confirmed for:

- SBC / Host Platform
- Linux / ROS Version
- Sensor Combination
- Power Architecture
- Communication Surface
- Deployment Scenario
- Historical RGA Coverage
- Export Infrastructure
- Support Roster

Recommended order:

```text
Robot Model A
      │
      ▼
Acceptance
      │
      ▼
Robot Model B
      │
      ▼
Acceptance
      │
      ▼
Robot Model C
```

Do not deploy Atlas across all Fleet SKUs simultaneously.

---

## Sensor Controlled Deployment

Sensor Manufacturers should adopt:

```text
One Sensor Product at a Time
```

Each Sensor Product should be independently confirmed for:

- Hardware Revision
- Firmware Version
- Driver / SDK
- Interface
- Host Platform
- Known Environment
- Runtime Profile
- Historical RGA
- FAE Workflow

Recommended order:

```text
Sensor Product X
      │
      ▼
Acceptance
      │
      ▼
Sensor Product Y
      │
      ▼
Acceptance
```

The same Sensor Product can be progressively expanded to different OEMs and scenarios.

---

# Controlled Deployment Gates

Before each expansion, the following Gates must be passed:

```text
Surface Readiness

Historical RGA Readiness

Agent Stability

Evidence Chain

Investigation Workflow

Security Review

Operational Owner

ROI Tracking
```

Product models that do not pass the Gate will not proceed to the next phase.

---

# Stage 3 — Production Readiness

Production Readiness evaluates whether Atlas meets the conditions for long-term production operation.

Evaluation includes:

- Runtime Stability
- Storage and Retention
- Dataset Lock
- Export Reliability
- Repository Backup
- Access Control
- Historical Recall Quality
- Ticket Closure
- Sensor Collaboration
- Operational Support
- Auditability
- Exit Readiness

Production Readiness does not mean Atlas provides automated root cause conclusions for all future REFs.

---

# Stage 4 — Multi-SKU and Cross-platform Expansion

After completing the Controlled Deployment for the first product, the Atlas Canonical Infrastructure can be reused.

```text
Validated Atlas Core
        │
        ├── New Surface Mapping
        ├── New Adapter Configuration
        ├── New Product Profile
        └── New Historical RGA
```

An independent investigation system should not be rewritten for every new SKU.

---

## Reusable Components

Components reused across SKUs include:

- Atlas Agent Core
- Runtime Dataset Lifecycle
- Evidence Pack Schema
- Five-Segment Window
- REF Lifecycle
- Historical Recall
- Investigation Context
- Investigation Tier Candidate
- IR / LL Model
- Ticket Closure
- Governance Metrics

---

## Product-specific Components

Components that must be confirmed for each SKU include:

- Surface Registry
- Adapter
- Product Metadata
- Timestamp Source
- Runtime Profile
- Historical RGA Coverage
- Retention Policy
- Deployment Configuration

---

# Stage 5 — Full-scale Deployment

Full-scale Deployment should be initiated after multiple successful Controlled Deployments.

```text
Validated Product Models
        │
        ▼
Standard Deployment Template
        │
        ▼
Fleet / Product-line Rollout
        │
        ▼
Central Governance Operation
```

---

## OEM Full-scale Deployment

Can include:

- Multiple Robot Models
- Multiple Fleet Regions
- Multiple Deployment Scenarios
- Multiple Sensor Manufacturers
- Central Tier 2 Investigation
- Distributed Tier 1 Intake
- Controlled Tier 3 Escalation
- CTO Runtime Governance Dashboard

---

## Sensor Manufacturer Full-scale Deployment

Can include:

- Multiple Sensor Products
- Multiple Firmware Branches
- Multiple OEM Customers
- Multiple Robot Platforms
- Multiple Deployment Environments
- Central Sensor RGA Repository
- Standardized FAE Investigation
- Product Reliability Feedback

---

# Dual-flywheel Operating Model

After Full-scale Deployment, both flywheels continuously reinforce each other.

---

## OEM Flywheel

```text
OEM REF
   ↓
Evidence Pack
   ↓
Historical Recall
   ↓
Investigation
   ↓
IR / LL
   ↓
OEM Historical RGA
   ↓
Faster Future Investigation
```

---

## Sensor Flywheel

```text
Sensor REF
   ↓
Sensor Runtime Profile
   ↓
Sensor Historical Recall
   ↓
FAE Investigation
   ↓
Sensor IR / LL
   ↓
Sensor Historical RGA
   ↓
Faster Cross-OEM Support
```

---

## Flywheel Connection

```text
OEM Historical Knowledge
        │
        ▼
Sensor Engagement Pack
        │
        ▼
Sensor Historical Knowledge
        │
        ▼
Sensor Response
        │
        ▼
OEM Closure and Reuse
```

Neither party needs to share their complete private Repository.

They collaborate through standard objects and authorization boundaries.

---

# Change Management

The following items must enter formal Change Requests:

- New Robot Model
- New Sensor Product
- New SBC Platform
- New Deployment Environment
- New Runtime Surface
- New REF Type
- New Cloud Integration
- New Data Mode
- New Geographic Region
- New Production SLA

Change Requests should record:

- Scope Impact
- Technical Impact
- Budget Impact
- Schedule Impact
- Security Impact
- Acceptance Impact

---

# Data and IP Ownership

## Customer-owned

- Customer Runtime Dataset
- Raw Logs
- Customer Configuration
- Customer Historical Cases
- Customer IR / LL
- OEM Historical RGA
- Sensor Historical RGA
- Customer-specific Governance Records

## Atlas-owned

- Atlas Core Code
- Canonical Schema
- Generic Runtime Governance Logic
- Evidence Pack Model
- Investigation Workflow
- Generic Adapter Framework
- Pre-existing Atlas IP

## Project-specific Deliverables

Ownership or usage rights for the following content must be separately defined in the contract:

- Customer-specific Adapters
- Customer-specific Integrations
- Deployment Configurations
- Custom Reporting
- Custom Workflow Extensions

---

# Safe Exit Mechanism

Every stage must allow the customer to exit under controlled conditions.

```text
Exit Decision
      │
      ▼
Freeze Accepted Project State
      │
      ▼
Export Customer Assets
      │
      ▼
Technical Handover
      │
      ▼
Revoke Access
      │
      ▼
Confirm Data Deletion
```

---

# Exit Package

Recommended inclusions:

- Runtime Dataset Export
- Evidence Pack Export
- Historical RGA Export
- Sensor Runtime Profile Export
- Surface Registry
- Configuration
- Investigation Records
- Schema Documentation
- Deployment Documentation
- Accepted Release Information
- Open Issue List
- Data Deletion Confirmation

An open format is recommended:

- JSON
- Markdown
- CSV
- Documented Archive

Customer assets should not be readable exclusively through the Atlas UI.

---

# Code Escrow

Code Escrow is used to ensure vendor continuity for long-term production deployments.

Escrow terms can be confirmed during the Pilot phase.

Formal Escrow is completed prior to entering Production.

---

## Escrow Scope

Can include:

- Contracted Atlas Release
- Customer-specific Adapters
- Build Instructions
- Dependency Manifest
- Deployment Documentation
- Configuration Schema
- Verification Hash

---

## Escrow Verification

Should verify:

- Archive Completeness
- Version Match
- Hash Integrity
- Build Reproducibility
- Dependency Availability
- Deployment Instructions

Simply saving an unbuildable code archive does not constitute valid Escrow.

---

## Escrow Release Triggers

Can include:

- Atlas Insolvency
- Permanent Product Discontinuation
- Contracted Critical Support Termination
- Material Breach Not Cured
- Agreed Business Continuity Event

Ordinary project disputes should not automatically trigger Escrow Release.

---

# Termination and Payment

Exit liabilities should be handled based on cause.

---

## Customer Convenience Termination

Typically pays for:

- Accepted Milestones
- Deliverables completed but still within acceptance period
- Approved and non-cancelable costs
- Contractually agreed Transition Costs

Unstarted future Milestones should not be automatically charged in full.

---

## Atlas Material Breach

Contracts may stipulate:

- Suspension of impacted Milestone payments
- Remediation period
- Refund for unaccepted installments
- Mandatory Exit Package
- Transition Assistance
- Triggering Escrow under eligible conditions

---

## Controlled Deployment Exit

When a specific Robot Model or Sensor Product fails acceptance, expansion for that model alone can be halted.

Previously accepted deployments for other models do not need to be automatically terminated.

```text
Robot A — Accepted

Robot B — Failed Gate

Robot C — Not Started
```

This model-level exit mechanism isolates scaling risks.

---

# Management Decision Gates

Formal management decisions should occur after each phase.

Possible outcomes:

```text
Approve Next Stage

Approve with Conditions

Extend Current Stage

Request Remediation

Pause Deployment

Exit Selected Model

Terminate Program
```

Decision criteria include:

- Technical Acceptance
- Budget Consumption
- Schedule
- Security
- Historical RGA Readiness
- Investigation ROI
- Tier 3 Involvement
- Operational Readiness
- Remaining Risk

---

# ROI Tracking

The project should establish a Baseline starting from the Pilot.

Recommended metrics:

- Time to Evidence Pack
- Median Investigation Time
- Ticket Closure Time
- Historical RGA Reuse Rate
- Tier 3 Involvement Rate
- Engineering Hours per REF
- Repeat Investigation Avoided
- Sensor FAE Response Time
- Cross-OEM RGA Reuse
- Cost per Closed REF

---

## OEM ROI

Key observations:

- Robot Model REF Trend
- Fleet Investigation Cost
- Tier 3 Escalation
- Sensor Collaboration Time
- Historical RGA Reuse
- Customer Support Efficiency

---

## Sensor Manufacturer ROI

Key observations:

- FAE Investigation Time
- Cases per Sensor Product
- Cross-OEM Reuse
- Driver / Firmware Escalation
- Repeated Question Reduction
- Environment Pattern Coverage

---

# Minimum Production Gate

Before entering Full-scale Deployment, the minimum requirements are:

- One or More Controlled Models Accepted
- Stable Atlas Agent
- Defined Surface Coverage
- Historical RGA Repository
- Operational Roster
- Security Approval
- Backup and Restore
- Data Export Capability
- Exit Package Tested
- Code Escrow Completed, if contracted
- ROI Baseline Established
- Production Budget Approved

---

# Summary

Atlas Pilot to Production Deployment should follow:

```text
Pilot

↓

One-model Controlled Deployment

↓

Production Readiness

↓

Cross-SKU / Cross-platform Expansion

↓

Full-scale Deployment
```

OEMs use the Robot Model as the unit of expansion, establishing a complete governance chain from Sensor, Power, Bus, Linux, Driver to ROS and Robot Runtime.

Sensor Manufacturers use the Sensor Product as the unit of expansion, establishing Sensor Runtime Profiles, Historical RGAs, and standard FAE Investigation Workflows, progressively scaling across different OEMs, robot platforms, and deployment scenarios.

The Atlas dual-flywheel means:

- If adopted by the OEM first, Sensor Manufacturers can be introduced along the Sensor Engagement chain.
- If adopted by the Sensor Manufacturer first, Robot Runtime Governance can be introduced along the OEM Integration chain.
- Both parties ultimately co-build a Sensor-to-SBC Runtime Governance Ecosystem.

---

# Next Steps

- SDK
- ROS2
- API
- CLI

Atlas is not Glue Code for a single project.

It is a Runtime Governance Infrastructure that can be continuously reused across SKUs, platforms, scenarios, and organizations.
