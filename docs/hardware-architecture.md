---
title: Hardware Architecture
sidebar_label: Hardware Architecture
sidebar_position: 2
description: Atlas hardware architecture for deterministic sensor aggregation, onboard power distribution, and board-level time authority in robotics systems.
---

# Atlas Fusion V2 Hardware Architecture

> Atlas is an industrial sensor aggregation and timing authority board for robotics platforms.  
> Fusion V2 consolidates sensor connectivity, onboard power distribution, and timing control into one deployable hardware backbone between the sensor domain and the robot compute platform.

---

## Why Atlas Fusion V2 Exists

Robotics teams repeatedly run into the same system-level hardware problems:

- Too many separate sensor cables routed to the SBC
- Mixed interfaces across USB, UART, I2C, SPI, and PPS
- Sensor power delivered through scattered converters and ad hoc wiring
- No clean timing boundary across devices
- Poor field reliability due to loose connectors and harness complexity
- Repeated engineering work for every new robot SKU

Atlas Fusion V2 solves these problems at the hardware infrastructure layer.

It converts multi-sensor integration from **custom wiring and software guesswork** into a **deterministic hardware subsystem**.

---

## System Role

Atlas Fusion V2 is designed as a board-level sensor infrastructure platform for robotics and industrial mobility systems.

At the hardware level, Atlas provides:

- **Sensor aggregation** across mixed interfaces
- **Protected onboard power** for connected sensor groups
- **A board-level timing authority**
- **External PPS input and timing signal redistribution**
- **Single-cable upstream integration** to the compute platform
- **A strong reference design for white-label OEM customization**

---

## High-Level Architecture

<p align="center">
  <img src="/img/Fig 2.png" width="60%" alt="Atlas Fusion V2 architecture" />
</p>

---

## Core Fusion V2 Hardware Functions

### 1. Sensor Aggregation

Atlas aggregates multiple sensor classes onto one integration board:

- USB 3.0 downstream sensor connections
- UART sensor input
- I2C sensor input
- SPI sensor input
- Dedicated UART + PPS path for timing-sensitive navigation sensors
- Timing input and timing output interfaces

This allows the compute platform to integrate against **one board-level sensor domain**, instead of managing multiple direct sensor wiring paths individually.

### 2. Fusion V2 Onboard Power Distribution

Atlas Fusion V2 distributes protected power from the robot battery to the connected sensor group.

Typical board-level power role:

- Accept **9–24V DC** input from the robot battery domain
- Generate regulated onboard rails for sensor and logic domains
- Provide protected 5V and 3.3V outputs for attached sensors
- Isolate faults so one failed peripheral does not bring down the full sensor harness
- Report power and health telemetry upstream through CDC

### 3. Fusion V2 Board-Level Time Authority

Atlas Fusion V2 is not only a sensor breakout board.

It acts as the **timing authority** for the sensor subsystem:

- Accepting an external time reference
- Maintaining a board timing domain
- Redistributing timing signals to downstream devices
- Aligning captured data to board-managed timing events
- Exposing timing state and diagnostics to the host

This timing role is central to Atlas’s value.

---

## Time Authority

### Why Time Authority Matters

In real robotics deployments, multi-sensor systems often fail at the time layer:

- GNSS PPS arrives, but the IMU data is not aligned to it
- Multiple cameras run independently and drift apart
- LiDAR, camera, and inertial data arrive with unrelated timing assumptions
- Software is forced to “guess” alignment after the fact
- Fusion quality degrades under motion, vibration, or latency variation

Atlas solves this by establishing a **single board-managed timing domain**.

Instead of each sensor living in its own time world, Atlas defines the timing boundary and exports timing control through dedicated interfaces.

---

## Fusion V2 Timing Interfaces

Atlas extends its timing domain into the Fusion V2 hardware layer through four dedicated timing interfaces:

| Interface | Role | Function in the timing system | Primary value |
|---|---|---|---|
| `PPS_IN` | External time reference input | Receives PPS from GNSS or another high-accuracy source to align Atlas to a global or system-level reference | Gives Atlas traceable absolute time |
| `PPS_OUT` | Standard PPS output | Redistributes a conditioned board PPS signal to downstream systems | Provides hardware heartbeat and clock reference to other devices |
| `SYNC_OUT` | Periodic synchronization output | Emits periodic sync pulses for simultaneous sensor capture | Enables deterministic multi-sensor acquisition cadence |
| `TRIGGER_OUT` | Programmable trigger output | Emits one-shot, burst, or scheduled trigger pulses | Precisely controls sensor action timing |

These four interfaces together form the hardware expression of Atlas as a **time authority**, not just a passive interface board.

---

## What Each Timing Interface Does

### PPS_IN — External Time Reference

**Question:** Where does Atlas time come from?

`PPS_IN` allows Atlas to lock its time domain to an external high-accuracy source such as:

- GNSS PPS
- a system master clock
- a precision controller or timing appliance
- future external sync infrastructure

With `PPS_IN`, Atlas can align its internal timing domain to a shared system reference.

Without an external PPS source, Atlas may continue in internal free-run mode based on its onboard timing source.

#### Why it matters

- Multi-robot deployments can share the same time baseline
- Sensor data becomes traceable to a known reference
- Timing consistency improves across subsystems

### PPS_OUT — Board Time Redistribution

`PPS_OUT` republishes a conditioned Atlas-managed PPS signal for other devices.

This allows Atlas to serve as the local timing reference distributor for:

- industrial controllers
- compute systems that accept hardware PPS
- legacy devices using external interrupt timing
- downstream equipment that needs a board-level second boundary

#### Why it matters

- Atlas is not only synchronized itself
- it can also redistribute that timing reference outward
- the sensor stack and surrounding system can share one time heartbeat

### SYNC_OUT — Periodic Sensor Synchronization

`SYNC_OUT` is a periodic timing signal that tells downstream devices:

**“Capture now.”**

This signal is intended for deterministic periodic acquisition use cases such as:

- Synchronized multi-camera exposure
- Aligned periodic LiDAR or scan-cycle coordination
- Recurring acquisition boundaries for sensors that support sync input
- Establishing a board-controlled sample cadence

#### Why it matters

- Multiple sensors can be aligned to a common hardware event
- Exposure and sampling drift can be reduced or eliminated
- Motion scenes become easier to fuse accurately

### TRIGGER_OUT — Event Trigger Control

`TRIGGER_OUT` is a programmable event-driven timing signal.

Unlike `SYNC_OUT`, which is periodic, `TRIGGER_OUT` is intended for:

- One-shot trigger events
- Burst sequences
- Scheduled action timing
- Mode-specific sensor wake/capture control

Typical use cases include:

- Triggering a camera at a specific LiDAR scan phase
- Commanding capture only when a condition is met
- Controlling acquisition in power-sensitive systems
- Aligning actuation and sensing events

#### Why it matters

- Atlas can control not only timing cadence, but exact event timing
- acquisition can become intentional, not merely reactive
- complex coordination strategies become possible in hardware

---

## Timing Authority as a Closed Loop

The real difference between Atlas and a simple signal generator is that Atlas is designed around **timing control with data correlation**.

A basic pulse generator only sends pulses.

Atlas’s time-authority model is intended to support a closed loop:

1. a timing event is issued
2. the board records the event boundary
3. sensor data is received
4. the returned data is associated with the relevant timing event or timing epoch
5. timing state is exported upstream through telemetry

Conceptually:

<p align="center">
  <img src="/img/Fig 4.png" width="60%" alt="Atlas Time Authority" />
</p>

This is what elevates Atlas from a board that “has timing pins” into a board that establishes **time authority**.

---

## Timing Signal Characteristics

The table below defines the intended engineering behavior for the timing interfaces.

| Parameter | PPS_IN | PPS_OUT | SYNC_OUT | TRIGGER_OUT |
|---|---|---|---|---|
| Signal role | External reference input | Standard timing output | Periodic sync output | Programmable trigger output |
| Logic level | 3.3V / 5V tolerant input | 3.3V LVTTL | 3.3V LVTTL | 3.3V LVTTL |
| Connector style | Locking terminal or SMA option | Locking terminal or SMA option | Locking terminal or SMA option | Locking terminal or SMA option |
| Output impedance | — | 50Ω target path | 50Ω target path | 50Ω target path |
| Pulse width | Input dependent | Adjustable | Adjustable | Adjustable |
| Frequency behavior | External 1PPS reference | 1Hz base, optional conditioned redistribution | Periodic, configurable | one-shot / burst / periodic |
| Phase behavior | External source defined | aligned to board timing domain | configurable phase offset | configurable phase offset |
| Protection | input clamp / protection | short-circuit protection | short-circuit protection | short-circuit protection |

<p align="center">
  <img src="/img/Fig 5.png" width="60%" alt="Atlas Time Signal" />
</p>

Timing Behavior

Atlas uses the external PPS_IN signal as the global time reference.
Each PPS pulse establishes a deterministic timing epoch inside Atlas.

From this reference, Atlas generates deterministic synchronization signals:

Signal	Function
PPS_IN	External 1 Hz timing reference (GPS, LiDAR master clock, or robot clock source)
SYNC_OUT	Periodic frame synchronization signal distributed to sensors
TRIGGER_OUT	Optional sensor capture trigger for cameras or LiDAR
PPS_OUT	Forwarded PPS signal for downstream devices

This architecture ensures that:

~~~
• Sensor capture occurs on deterministic boundaries
• Timestamps are aligned to a global epoch
• Sensor data streams can be fused reliably in the robot compute stack
~~~

> Final electrical values and implementation limits should track the production hardware specification for the exact Atlas revision.

---

## Timing Modes

Atlas timing authority can be understood in two directions.

### 1. Traceability In

Atlas receives timing authority from outside the board through `PPS_IN`.

Examples:

- GNSS-based absolute time
- external clock master in a vehicle
- factory or lab timing distribution
- future synchronization appliances

### 2. Deterministic Timing Out

Atlas redistributes or asserts timing control through:

- `PPS_OUT` for second-boundary reference
- `SYNC_OUT` for periodic sensor alignment
- `TRIGGER_OUT` for exact acquisition events

This creates a complete timing loop from **time source** to **sensor action**.

---

## Hardware Timestamp Engine

Atlas is designed around a hardware timestamping model rather than relying only on host-side software timestamps.

The board-level timing path supports several layers of timestamp relevance:

| Timing layer | Purpose |
|---|---|
| External PPS alignment | Aligns Atlas to an external reference when available |
| UART + PPS correlation | Supports tighter timestamp association for timing-aware serial sensors |
| USB device arrival timing | Records timing information as data enters the Atlas-managed domain |
| Trigger / sync event correlation | Relates captured data to board-issued timing events |
| Upstream telemetry reporting | Sends timing state and timing diagnostics to the host |

### Intended result

By the time sensor data reaches the compute platform, Atlas has already established the relevant timing boundary for that data path.

That is the core meaning of Atlas time authority.

---

## One-Cable Upstream Architecture

Atlas is designed around a **single upstream connection model** to the robot compute platform.

Instead of routing each sensor and timing dependency separately into the SBC, Atlas consolidates the subsystem into one hardware boundary.

### Traditional approach

- separate USB lines
- standalone UART wiring
- isolated sensor power modules
- independent timing wires
- weak fault isolation
- difficult field debugging

### Atlas approach

- one board-level sensor backbone
- one protected onboard power domain
- one timing authority
- one upstream hardware integration boundary
- one cleaner deployment path to the host

<p align="center">
  <img src="/img/Fig 3.png" width="60%" alt="Atlas Timing Approach" />
</p>

---

## Interface Summary

| Interface Type | Qty | Typical Purpose |
|---|---:|---|
| USB 3.0 Downstream | 3 | USB cameras, USB LiDAR, USB peripherals |
| UART | 1 | Serial sensors or auxiliary telemetry devices |
| I2C | 1 | Low-speed digital sensors |
| SPI | 1 | Higher-speed peripheral or sensor devices |
| UART + PPS | 1 | Timing-sensitive navigation sensor path |
| PPS_IN | 1 | External time reference input |
| PPS_OUT | 1 | Board PPS redistribution |
| SYNC_OUT | 1 | Periodic synchronization output |
| TRIGGER_OUT | 1 | Programmable trigger output |
| USB 3.0 Upstream | 1 | Host connection to robot compute platform |
| DC Power Input | 1 | 9–24V robot battery input |

---

## Fusion V2 Power Architecture

Atlas includes a protected onboard power system that turns robot battery input into a controlled sensor power domain.

### Input domain

- **9–24V DC** wide input range
- designed for common 12V / 24V robotics battery environments
- reverse-polarity protection
- transient protection
- staged power handling suitable for mobile systems

### Output domain

Typical onboard rails include:

- **5V rail** for USB sensor power and logic domains
- **3.3V rail** for MCU and low-voltage sensor interfaces

### Power design goals

- distribute power from one board rather than many external converters
- protect each attached sensor path
- monitor voltage and current state
- report board health upstream through telemetry
- improve deployment consistency and serviceability

---

## Reliability Design Principles

Atlas is intended for mobile and industrial environments.

### Mechanical and connector strategy

- industrial locking external connectors
- reduced risk of cable loosening under vibration
- board mounting points for system fastening
- cleaner cable routing than direct SBC fan-out

### PCB and electrical strategy

- multi-layer PCB stack for signal integrity and power distribution
- defined ground and power reference planes
- protected input path
- isolated fault domains where practical
- timing signal integrity considered as a first-class hardware requirement

### Field integration benefits

- fewer loose connectors
- fewer ad hoc converters
- smaller harness complexity
- clearer fault domain boundaries
- easier service and replacement

---

## Example Timing Topologies

### Example 1 — GNSS-Referenced Mobile Robot

<p align="center">
  <img src="/img/Fig 6.png" width="60%" alt="Atlas Time Topologies" />
</p>

Use case intent:

- GNSS provides external second boundary
- Atlas becomes the local timing authority for the vehicle sensor group
- cameras align to a shared sync event
- LiDAR or other devices can be coordinated with trigger logic

### Example 2 — Factory Robot / Fixed Automation Cell

<p align="center">
  <img src="/img/Fig 7.png" width="60%" alt="Atlas External Time Reference" />
</p>

Use case intent:

- Atlas accepts an external timing reference
- Atlas controls recurring acquisition cadence
- Atlas also generates exact trigger events for synchronized action timing

---

## What the Host Sees

From the compute platform perspective, Atlas presents a much cleaner integration surface.

Typical host-visible results include:

- Standard UVC camera devices
- CDC telemetry path for aggregated board information
- Board timing status
- Power and health telemetry
- Sensor metadata aligned to the Atlas timing domain

This reduces the burden on host-side software and improves determinism upstream.

---

## White-Label OEM Value

Atlas is intended not only as an evaluation board, but as a strong white-label reference design.

OEM teams can use Atlas in three ways:

### Evaluation reference board

Use Atlas as-is to validate sensor integration and timing behavior.

### Subsystem integration platform

Integrate Atlas as a reusable sensor subassembly in pilot or low-volume deployments.

### White-label derivative design

Customize interfaces, power budgets, connectors, logic, and branding around the Atlas hardware architecture.

Typical customization areas include:

- connector count and placement
- power input range and power budget
- timing I/O count and behavior
- MCU or logic selection
- enclosure and branding

---

## Key Takeaway

Atlas is more than a sensor hub.

It is a **deterministic sensor infrastructure board** that combines:

- Sensor aggregation
- Protected onboard power
- Single-cable host integration
- and, most critically, **Board-level time authority**

That timing authority is expressed in hardware through:

- `PPS_IN`
- `PPS_OUT`
- `SYNC_OUT`
- `TRIGGER_OUT`

These interfaces are what turn Atlas from a convenient integration board into a true timing backbone for robotics systems.
- **ROS2 Integration**  
- **Sensor Synchronization Pipeline**  
- **Evaluation Kit Setup**

