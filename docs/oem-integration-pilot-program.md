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

# Why Atlas (vs Internal Development)

Robotics teams often consider building a custom synchronization and sensor integration layer internally.

In practice, this typically leads to:

• fragmented timing implementations across sensors  
• inconsistent timestamp alignment strategies  
• limited observability into synchronization state  
• repeated engineering effort across robot programs  
• increased long-term maintenance burden  

Atlas provides a pre-integrated infrastructure layer that addresses these challenges at the system level.

The OEM Integration Pilot allows teams to:

• avoid building and maintaining custom timing infrastructure  
• reduce integration complexity across heterogeneous sensors  
• gain system-level visibility into synchronization behavior  
• standardize sensor integration across current and future platforms  

This allows internal engineering teams to focus on **robot behavior, autonomy, and product differentiation**, rather than rebuilding infrastructure.

---

# Atlas OEM Enablement Program (8 Weeks)

Atlas includes a structured enablement program to ensure OEM teams can independently operate and extend the system.

## Phases

**Phase 1 — System Understanding (Weeks 1–2)**  
• Atlas architecture and timing model  
• DSIL SDK fundamentals  
• interface and integration standards  

**Phase 2 — Integration & Validation (Weeks 3–6)**  
• IMU / GNSS / UART sensor integration  
• PPS synchronization validation  
• ROS2 / native integration  
• debugging workflows  

**Phase 3 — Production Readiness (Weeks 7–8)**  
• system validation and stress testing  
• performance tuning  
• failure analysis  

## Responsibility Boundary

Atlas does not own sensor drivers or firmware.

Device-level drivers are owned by the OEM or sensor vendor.  
Atlas provides system-level synchronization, integration, and observability.

---

# Pilot Program Roadmap

| Phase | Focus | Deliverables |
|---|---|---|
| Phase 1 | Design Audit | sensor mapping, I/O plan, power review |
| Phase 2 | Pilot Definition | hardware config, connector plan |
| Phase 3 | Validation | sync verification, performance report |
| Phase 4 | Production Planning | firmware packaging, supply planning |

---

# What the Pilot Answers

The pilot is designed to resolve the key uncertainties that block production adoption:

• how Atlas fits into the mechanical and electrical architecture  
• how Atlas integrates into the existing software stack  
• how synchronization behaves under real system conditions  
• how the system performs under power and thermal constraints  
• what changes (if any) are required for production deployment  

---

# Mechanical and Environmental Integration

Atlas provides:

• STEP model and 2D drawings  
• connector and mounting references  
• board outline and keep-out guidance  

## Thermal

• passive chassis mounting recommended  
• airflow and thermal load review  
• validation under real sensor load  

## Environmental

Atlas is not a sealed product. Final robustness depends on:

• enclosure design  
• connector selection  
• harness and mounting strategy  

---

# Power System Integration

## Pilot Focus

• input voltage compatibility  
• sensor power budgeting  
• protection and brownout behavior  
• startup sequencing  
• telemetry visibility  

## Power Model

| Rail | Purpose | Focus |
|---|---|---|
| Input | robot supply | surge, polarity |
| 5V | sensor rail | current budget |
| 3.3V | aux rail | noise sensitivity |
| PPS | timing | logic compatibility |

## Brownout Strategy

Atlas can:

• preserve timing engine  
• shed high-load sensors  
• maintain telemetry visibility  
• support controlled recovery  

---

# Software Integration Model

Atlas is a **system layer**, not a driver layer.

## On-Device

• timing management  
• telemetry routing  
• system health monitoring  

## Host-Side

• telemetry access  
• synchronization state  
• ROS2 or native integration  

## Supported Environments

• Ubuntu / PREEMPT_RT  
• ROS2  
• non-ROS Linux  
• optional Yocto / Buildroot discussion  

---

# Software IP and Ownership

Pilot scoping defines:

• provided code vs OEM-owned code  
• modification rights  
• redistribution boundaries  
• SDK licensing model  

---

# Time Synchronization Model

Atlas acts as a **deterministic timing boundary**.

## Roles

• timing authority  
• PPS consumer  
• synchronization coordinator  

## Interfaces

• PPS input  
• PPS output  
• trigger output  

## Validation Scope

• timestamp origin  
• trigger alignment  
• jitter / latency  
• real-system behavior  

---

# Sensor Integration Scope

Atlas supports heterogeneous sensor systems across **two integration domains**.

## Directly Integrated Sensors (via Atlas)

• USB cameras and USB LiDAR  
• IMU and GNSS modules  
• UART / I2C / SPI sensors  

These are connected physically through Atlas and participate in DSIL telemetry and timing.

---

## Externally Connected Sensors (SBC-side)

• Ethernet LiDAR  
• GMSL / FPD-Link cameras  
• other high-bandwidth pipelines  

These connect directly to the compute platform.

Atlas does not sit in their data path.

---

## Atlas System Role

Atlas provides:

• timing reference  
• trigger coordination  
• timestamp alignment  
• synchronization observability  

Atlas coordinates the system **without owning sensor data pipelines or drivers**.

---

## High-End Sensor Systems

Atlas can act as a **trigger-plane authority** for:

• GMSL camera systems  
• FPD-Link III camera systems  

For sensors that do not support hardware trigger control (such as Ethernet LiDAR), Atlas operates as a **system-level timing reference and observability layer**.

In these cases, Atlas provides:

• synchronization coordination  
• timestamp alignment across sensor domains  
• system-level timing visibility  

Atlas does not control the data path or internal clock of Ethernet-based sensors.

---

## Capacity Review

Pilot evaluates:

• sensor count  
• data paths  
• bandwidth limits  
• cable constraints  

---

# Known Boundaries and Limitations

Atlas is designed as a system-level timing and integration layer and does not replace all aspects of sensor infrastructure.

Key boundaries include:

• Atlas does not replace high-bandwidth data pipelines (USB3, Ethernet, GMSL)  
• Atlas does not control internal sensor clocks for devices without sync interfaces  
• Atlas does not own or maintain sensor drivers or vendor firmware  
• synchronization performance depends on sensor capabilities and system architecture  

These boundaries are explicitly reviewed during the pilot to ensure alignment with the target system.

---

# White Label Hardware Adaptation

## Customization Levels

| Level | Example | Impact |
|---|---|---|
| Minor | connector remap | low NRE |
| Moderate | I/O / mounting change | scoped effort |
| Major | new board design | full NRE |

---

# Reliability and Field Readiness

## Validation Areas

• uptime  
• fault handling  
• reconnection behavior  
• thermal stability  
• power stress response  

## Validation Plan

• long-duration testing  
• thermal stress  
• power fault injection  
• recovery timing  

---

# Firmware Update Strategy

Pilot defines:

• update method (host / OTA)  
• rollback and recovery  
• version control  
• fleet-safe deployment  

---

# Support Model

• engineering communication channel  
• scheduled sync meetings  
• integration support  
• validation review  

The goal is to reduce integration uncertainty and enable internal engineering teams to make a confident adoption decision.

---

# Pilot Deliverables

• integration plan  
• mechanical package  
• hardware configuration  
• software guidance  
• validation results  
• production planning package  

---

# Production Handoff

Includes:

• firmware delivery model  
• software packaging  
• support expectations  
• supply planning  
• lifecycle continuity  

Optional:

• firmware escrow  
• LTS model  

---

# Pilot to Production Transition

The OEM Integration Pilot is structured to support a clear transition into production.

This typically includes:

• alignment on hardware configuration and supply model  
• firmware and software packaging approach  
• expected support and update model  
• preliminary production volume and lead-time considerations  

Commercial terms are not finalized during the pilot, but sufficient visibility is provided to support internal approval and planning.

---

# Measuring Pilot Success

Success criteria are defined jointly at the start of the pilot and serve as the acceptance basis for production readiness discussions.

## Typical Success Metrics

### Integration Completeness
• all target sensors successfully integrated  
• Atlas integrated into mechanical, power, and software architecture  

### Synchronization Performance
• consistent timestamp alignment  
• stable PPS / trigger behavior  
• acceptable latency and jitter  

### System Stability
• no critical failures  
• stable runtime behavior  
• successful reconnection handling  

### Power and Thermal Behavior
• stable power operation  
• no instability under load  
• acceptable thermal performance  

### Software Integration
• telemetry accessible  
• synchronization observable  
• integration verified  

### Deployment Readiness
• no blocking issues  
• clear production path  
• engineering confidence  

---

The pilot concludes with a **clear engineering decision**:

• proceed to production  
or  
• define remaining gaps  

---

# Scoping Clarification Matrix

| Area | Why It Matters | Clarification |
|---|---|---|
| Hardware | cost & lead time | adaptation level |
| Software IP | ownership | modification rights |
| Commercial | decision gating | pricing model |
| Firmware Update | field ops | OTA / rollback |
| Reliability | deployment | validation targets |

---

# FAQ

## Does Atlas require ROS2?
No. ROS2 is optional.

## Does Atlas replace drivers?
No. Atlas does not own drivers.

## Can Atlas work without hardware sync sensors?
Yes, depending on system design.

## Does Atlas support Ethernet LiDAR?
Ethernet LiDAR connects directly to the SBC.  
Atlas coordinates timing but does not process its data path.

## What happens after pilot?
Production planning and deployment alignment.

---

# Final Positioning

The Evaluation Kit proves the concept.

The OEM Integration Pilot converts that into a **production-ready system architecture**.

For engineering teams, this is not just validation.

It is the decision point for adopting Atlas as a **long-term sensor and timing infrastructure layer**.
