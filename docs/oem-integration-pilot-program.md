# Atlas White Label OEM Integration Pilot Program

This program is for robotics teams that have completed the Atlas Evaluation Kit phase and are ready to move into a **White Label (OEM) Integration Pilot**.

The Evaluation Kit proves Atlas value in a controlled setup.

The OEM Integration Pilot converts that result into a **production-oriented system architecture inside your robot**.

The goal is to:

• reduce integration risk  
• accelerate deployment readiness  
• define a clear path to production  

Atlas is intended to become a **reusable DSIL infrastructure layer across product lines**, not a one-off integration.

---

# Program Overview

The Atlas White Label (OEM) Integration Pilot is a structured engineering engagement that moves from evaluation to deployment readiness.

The pilot provides:

• application-specific hardware adaptation  
• software integration guidance  
• timing and synchronization validation  
• mechanical and power system review  
• production handoff planning  

---

# Reference Platform and Readiness

The Atlas OEM Integration Pilot is built on:

• DSIL SDK v1.0 (user-space + ROS2-ready integration)  
• Fusion V2 reference hardware platform  

These provide a **validated baseline for timing, telemetry, and integration behavior**.

The pilot accepts OEM-specific inputs, including:

• sensor stack  
• compute platform  
• mechanical and power constraints  
• software architecture  

Atlas is not delivered as a fixed product at this stage.

The Fusion V2 platform establishes the reference architecture, while the OEM pilot defines the production configuration.

---

# Why Atlas (vs Internal Development)

Building a custom synchronization and integration layer typically results in:

• fragmented timing implementations  
• inconsistent timestamp alignment  
• limited observability  
• repeated engineering effort  
• long-term maintenance burden  

Atlas provides a system-level infrastructure layer that standardizes these capabilities, allowing teams to focus on autonomy and product differentiation.

---

# Atlas OEM Enablement Program (8 Weeks)

Atlas includes a structured enablement program to ensure OEM teams can independently operate and extend the system.

## Phases

**Phase 1 — System Understanding (Weeks 1–2)**  
• Atlas architecture and timing model  
• DSIL SDK fundamentals  
• integration standards  

**Phase 2 — Integration & Validation (Weeks 3–6)**  
• IMU / GNSS / UART integration  
• PPS validation  
• ROS2 / native integration  
• debugging workflows  

**Phase 3 — Production Readiness (Weeks 7–8)**  
• system validation  
• performance tuning  
• failure analysis  

## Responsibility Boundary

Atlas does not own sensor drivers or firmware.

OEMs own device-level drivers.  
Atlas provides synchronization, integration, and observability.

---

# Pilot Program Roadmap

| Phase | Focus | Deliverables |
|---|---|---|
| Phase 1 | Design Audit | sensor mapping, I/O, power review |
| Phase 2 | Pilot Definition | hardware config, connector plan |
| Phase 3 | Validation | sync verification, performance report |
| Phase 4 | Production Planning | firmware packaging, supply planning |

---

# What the Pilot Answers

• integration into mechanical and electrical architecture  
• software stack alignment  
• synchronization behavior in real conditions  
• power and thermal performance  
• production adaptation requirements  

---

# Mechanical and Environmental Integration

Atlas provides:

• STEP and 2D drawings  
• connector references  
• mounting and layout guidance  

## Thermal

• passive chassis mounting  
• airflow review  
• load validation  

## Environmental

Final robustness depends on:

• enclosure  
• connectors  
• harness design  

---

# Power System Integration

## Focus

• input compatibility  
• sensor power budgeting  
• protection and brownout behavior  
• startup sequencing  
• telemetry visibility  

## Power Model

| Rail | Purpose | Focus |
|---|---|---|
| Input | robot supply | surge, polarity |
| 5V | sensor rail | current budget |
| 3.3V | aux rail | noise |
| PPS | timing | logic compatibility |

## Brownout Strategy

Atlas can:

• preserve timing engine  
• shed high-load sensors  
• maintain telemetry  
• recover safely  

---

# Software Integration Model

Atlas is a **system layer**, not a driver layer.

## On-Device

• timing management  
• telemetry routing  
• system health  

## Host-Side

• telemetry access  
• sync state  
• ROS2 / native integration  

## Supported Environments

• Ubuntu / PREEMPT_RT  
• ROS2  
• non-ROS Linux  
• optional Yocto / Buildroot  

---

# Software IP and Ownership Model

## Atlas-Owned

• firmware (timing + telemetry engine)  
• DSIL SDK core  

Provided as binary (default) or source (optional).

## OEM-Owned

• sensor drivers  
• application logic  
• perception stack  

## Modification Rights

• host-side → fully modifiable  
• SDK APIs → stable interfaces  
• firmware → configurable, not modified unless agreed  

Atlas is observable and configurable, not an opaque black box.

---

# Firmware Lifecycle, LTS, and Escrow

## LTS

• bug fixes  
• security updates  
• compatibility updates  

Typical support: **3–5 years (defined per agreement)**

## Escrow (Optional)

• source escrow  
• release triggers  
• lifecycle protection  

## EOL Planning

• last-time-buy  
• firmware freeze  
• migration planning  

---

# Firmware Update and OTA Safety Model

## Update Methods

• host-assisted  
• service-mode  
• OEM OTA integration  

## Rollback and Recovery

• staged update  
• rollback to last known-good  
• integrity verification  
• watchdog recovery  

## Guarantees

• no permanent bricking  
• recovery without physical intervention (system dependent)  
• update visibility via telemetry  

---

# Certification Roadmap

## Target Certifications (Production)

• CE  
• FCC  
• RoHS / REACH  

## Process

• ISO9001-aligned manufacturing (partner dependent)  
• traceability  
• production testing  

## Pilot Scope

• define certification requirements  
• identify design constraints  
• plan certification path  

---

# Commercial and Engagement Transparency

During initial scoping:

• pilot cost estimate provided  
• NRE scope defined  
• production licensing model outlined  

Possible models:

• per-unit royalty  
• annual license (ARR)  
• NRE + production pricing  

This enables internal approval across engineering, finance, and procurement.

---

# Sensor Integration Scope

## Direct (via Atlas)

• USB cameras / USB LiDAR  
• IMU / GNSS  
• UART / I2C / SPI sensors  

## External (SBC-side)

• Ethernet LiDAR  
• GMSL / FPD-Link  
• high-bandwidth pipelines  

Atlas does not sit in their data path.

## System Role

• timing reference  
• trigger coordination  
• timestamp alignment  
• observability  

## High-End Systems

Trigger-plane authority for:

• GMSL  
• FPD-Link  

Ethernet LiDAR → coordination only (no trigger control)

---

# Known Boundaries and Limitations

• does not replace high-bandwidth pipelines  
• does not control internal sensor clocks  
• does not own drivers  
• performance depends on system architecture  

---

# White Label Hardware Adaptation

| Level | Example | Impact |
|---|---|---|
| Minor | connector remap | low NRE |
| Moderate | I/O changes | scoped |
| Major | redesign | full NRE |

---

# Reliability and Field Readiness

## Validation

• uptime  
• fault handling  
• reconnection  
• thermal stability  
• power stress  

## Plan

• long-duration testing  
• thermal validation  
• fault injection  
• recovery timing  

---

# Support Model

• engineering channel  
• sync meetings  
• integration support  
• validation review  

Goal: enable confident adoption decision.

---

# Pilot Deliverables

• integration plan  
• mechanical package  
• hardware definition  
• software guidance  
• validation results  
• production plan  

---

# Production Handoff

• firmware delivery  
• software packaging  
• supply planning  
• lifecycle strategy  

Optional:

• escrow  
• LTS  

---

# Measuring Pilot Success

## Integration
• sensors integrated  
• system aligned  

## Synchronization
• stable timing  
• acceptable jitter  

## Stability
• no critical failures  

## Power / Thermal
• stable operation  

## Software
• telemetry + integration verified  

## Readiness
• no blockers  
• production path clear  

---

Outcome:

• proceed to production  
or  
• define gaps  

---

# Pilot Commitment and Engineering Outcomes

The Atlas OEM Integration Pilot is structured to produce a **clear, decision-grade engineering outcome**, not an open-ended evaluation.

At the conclusion of the pilot, Atlas delivers a set of **formal engineering artifacts** that support internal production approval.

## Delivered Artifacts

### System Integration Report
• full sensor integration mapping  
• interface and architecture validation  
• mechanical and power integration summary  

---

### Synchronization Benchmark Report
• measured timestamp alignment across sensor set  
• PPS / trigger performance characterization  
• latency and jitter analysis under runtime conditions  

---

### Reliability and Stability Report
• uptime test results  
• sensor disconnect / reconnect behavior  
• fault handling and recovery validation  

---

### Brownout and Power Behavior Analysis
• power stress test results  
• load-shed behavior validation  
• recovery sequencing verification  

---

### Failure Analysis and Edge Case Review
• identified failure modes  
• root cause analysis (if applicable)  
• mitigation strategies and system-level recommendations  

---

### Production Readiness Summary
• confirmed system capabilities  
• identified gaps (if any)  
• recommended path to production configuration  

---

## Engineering Outcome

The pilot is designed to leave the OEM team with:

• validated system behavior under real operating conditions  
• full visibility into synchronization and system health  
• documented performance characteristics  
• clear understanding of system limits and boundaries  

---

## Decision Framework

The pilot concludes with a **structured engineering decision**:

• proceed to production deployment  
or  
• address clearly defined gaps identified during validation  

The goal is to eliminate ambiguity and ensure that the decision to deploy Atlas is based on **measured system behavior, not assumptions**.

---

# Scoping Clarification Matrix

| Area | Why | Clarification |
|---|---|---|
| Hardware | cost | adaptation |
| Software IP | ownership | rights |
| Commercial | approval | pricing |
| Firmware | field ops | OTA |
| Reliability | deployment | targets |

---

# Final Positioning

The Evaluation Kit proves the concept.

The OEM Integration Pilot converts that into a **production-ready system architecture**.

This is the decision point for adopting Atlas as a **long-term infrastructure layer**.
It is the decision point for adopting Atlas as a **long-term sensor and timing infrastructure layer**.

---

# Executive FAQ — OEM Pilot Decision

### Key Questions from Engineering Leadership Before Committing to Atlas

This section addresses the critical questions typically raised by CTOs, VP Engineering, and cross-functional leadership when evaluating whether to proceed with the Atlas OEM Pilot Program.

The goal is to clarify **risk, ROI, integration impact, and production readiness**.

---

## Strategic Fit

### How does Atlas fit into our robotics architecture?

Atlas becomes the **sensor infrastructure layer** beneath your compute stack.

It standardizes:

- sensor connectivity  
- power distribution  
- timing synchronization  

This allows your existing software stack (ROS2, perception, SLAM) to remain unchanged while improving system reliability and scalability.

---

### Is this a short-term tool or a long-term platform decision?

Atlas is designed as a **long-term infrastructure layer**.

Adopting Atlas during the pilot phase enables:

- reuse across multiple robot SKUs  
- consistent sensor integration architecture  
- reduced future hardware redesign cycles  

---

## Risk Assessment

### What is the integration risk?

Low.

Atlas is:

- non-intrusive to software  
- compatible with existing sensors  
- deployable alongside current architecture  

The pilot program is specifically structured to **de-risk integration before production commitment**.

---

### What happens if Atlas does not meet our expectations?

The OEM pilot is designed as a **bounded evaluation phase**.

Outcomes:

- validated integration → proceed to production  
- identified gaps → addressed through customization  
- misalignment → no production commitment required  

This ensures **no forced lock-in at pilot stage**.

---

### Are we dependent on Atlas long-term?

Atlas introduces a standardized hardware layer, but:

- it does not control your software stack  
- it does not replace your compute platform  
- it does not require proprietary sensor firmware  

This reduces long-term dependency risk compared to vertically integrated solutions.

---

## Engineering Impact

### How much engineering effort is required from our team?

Minimal during pilot phase.

Typical involvement:

- hardware connection  
- ROS2 validation  
- system-level testing  

Atlas team supports:

- integration guidance  
- system tuning  
- issue resolution  

---

### Will this disrupt our current development timeline?

No.

Atlas integrates **in parallel** with your existing system.

Your team can:

- validate Atlas without stopping current development  
- compare results directly against existing architecture  

---

### Do we need to redesign our sensors or software?

No.

Atlas is compatible with:

- existing sensors  
- existing ROS2 drivers  
- existing perception pipelines  

---

## ROI and Business Value

### What measurable benefits should we expect?

Atlas reduces:

- integration complexity  
- wiring and harness cost  
- engineering iteration cycles  

Atlas improves:

- system reliability  
- timing consistency  
- scalability across product lines  

---

### How does Atlas reduce long-term cost?

Without Atlas:

- each robot SKU requires custom integration  
- sensor wiring and power must be re-engineered  
- synchronization must be solved repeatedly  

With Atlas:

- one standardized integration model  
- reusable architecture across products  
- reduced engineering and maintenance overhead  

---

### Why not build this internally?

Building internally requires:

- multiple hardware revisions  
- custom synchronization architecture  
- firmware + software stack development  
- long-term maintenance  

Atlas provides a **ready-to-deploy infrastructure layer**, allowing your team to focus on:

- autonomy  
- perception  
- product differentiation  

---

## Production Readiness

### What happens after a successful pilot?

Next steps:

1. Hardware customization (if required)  
2. Mechanical and thermal validation  
3. Production design finalization  
4. Certification (CE/FCC/RoHS)  
5. Volume manufacturing  

---

### Can Atlas be adapted to our production requirements?

Yes.

Customization options include:

- connector types  
- board form factor  
- power configuration  
- synchronization interface  

---

### Is Atlas ready for scaling to production volumes?

Yes.

Atlas is designed to transition from:

- evaluation → pilot → production  

with a consistent architecture.

Manufacturing can be aligned with:

- your preferred vendors  
- your certification requirements  
- your supply chain strategy  

---

## Decision Framework

### What decision should we make after the pilot?

At the end of the OEM pilot, teams typically evaluate:

- integration simplicity  
- system stability  
- performance improvement  
- engineering effort reduction  

If Atlas demonstrates clear value, the next step is **production integration**.

---

## Final Executive Question

### Why should we move forward now?

Because delaying adoption means:

- continued fragmented sensor integration  
- repeated engineering effort  
- increasing system complexity as sensors scale  

Atlas provides a **clear path to standardizing sensor infrastructure early**, reducing long-term cost and risk.

---

## Next Step

Ready to move forward?

- Engage in the **OEM Pilot Program**
- Validate Atlas in your system
- Define your production integration path

**Atlas = Sensor Infrastructure Layer for Scalable Robotics Systems**
