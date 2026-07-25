---
title: Sensor Manufacturer Deployment
sidebar_label: Sensor Manufacturer Deployment
---

# Sensor Manufacturer Deployment

## Overview

Atlas Runtime Sensor Governance™ 帮助 Sensor Manufacturer 将分散的 FAE 支持经验、现场调查案例和已知环境干扰，沉淀为可复用的 Sensor Runtime Knowledge。

Sensor Manufacturer 部署 Atlas 的重点不是建立新的认证体系。

核心目标是建立两类长期资产：

```text
Sensor Runtime Profile
+
Pre-built Sensor Historical RGA
```

Sensor Runtime Profile 描述一款 Sensor 在不同运行环境和已知干扰下的 Runtime Behaviour、Known Sensor REF Pattern 与 Investigation Context。

Sensor Historical RGA 保存已经完成的 Sensor Investigation、IR、LL 和可复用调查路径。

两者共同帮助 Sensor FAE：

- 更快理解 OEM 现场事件
- 更快召回相似历史案例
- 减少重复调查
- 提高跨 OEM、跨场景复用能力
- 将 FAE 经验沉淀为组织资产

---

# Deployment Objective

Sensor Manufacturer 部署 Atlas 后，应形成以下能力：

```text
Sensor Product
      │
      ├── Runtime Profile
      │
      ├── Known Sensor REF Context
      │
      ├── Historical RGA
      │
      ├── FAE Investigation Workflow
      │
      └── OEM Collaboration
```

Atlas 不替代 Sensor Manufacturer 的：

- Driver Development
- Firmware Development
- Reliability Testing
- RMA Process
- Customer Support System

Atlas 将这些活动中产生的 Runtime Investigation Knowledge 组织为可召回、可复用的治理资产。

---

# Minimum Deployment Requirements

Sensor Manufacturer 使用 Atlas 的最低要求包括：

```text
Sensor Product Definition
+
Sensor Runtime Surface Access
+
Known Environment Coverage
+
Historical Investigation Cases
+
FAE Investigation Owner
+
RGA Repository
```

不要求 Sensor Manufacturer 建立机器人级 Fleet Management。

也不要求访问 OEM 的完整机器人系统。

---

# Sensor Runtime Scope

Sensor Manufacturer 的治理边界应限定在 Sensor 及其直接运行时路径。

```text
Environment
      │
      ▼
Sensor Hardware
      │
      ▼
Firmware
      │
      ▼
Sensor Interface
      │
      ▼
Driver
      │
      ▼
Sensor Runtime Output
```

Sensor Investigation 可以参考 OEM 提供的系统证据。

但 Sensor IR 和 Sensor LL 应保持在 Sensor Scope 内。

---

# Sensor Runtime Surface Requirements

每一款纳入 Atlas 的 Sensor，应建立明确的 Runtime Surface Definition。

---

## Sensor Identity Surface

建议包括：

- Sensor Type
- Product Model
- Hardware Revision
- Firmware Version
- Driver Version
- SDK Version
- Interface Type
- Host Platform
- Internal Product Identifier

可使用匿名 Product Identifier。

不要求在跨组织协作中公开设备 Serial Number。

---

## Sensor Hardware Surface

建议根据产品能力记录：

- Power State
- Reset State
- Internal Temperature
- Internal Health State
- Self-test Result
- Boot State
- Streaming State
- Internal Error Code
- Recovery State

---

## Sensor Interface Surface

根据 Sensor 类型接入：

- Ethernet
- USB
- MIPI CSI
- CAN
- UART
- SPI
- I²C
- SerDes
- PPS
- Trigger
- Synchronization

建议观察：

- Link State
- Packet Rate
- Error Count
- Reconnect Event
- Timeout
- Interface Reset
- Enumeration State
- Bandwidth Change

---

## Sensor Driver Surface

建议包括：

- Driver Process State
- Driver Start / Stop
- Driver Restart
- Device Open / Close
- Timeout
- Error Code
- Buffer State
- Reconnect Attempt
- Firmware Communication State
- Driver Version

---

## Sensor Output Surface

不同 Sensor 应记录与其输出相关的 Runtime Observation。

### LiDAR

- Point Cloud Frequency
- Packet Rate
- Packet Loss
- Frame Completeness
- Timestamp Continuity
- Return Count
- Internal Status
- Link State

### Camera

- Frame Rate
- Frame Drop
- Exposure State
- Image Timestamp
- Stream Start / Stop
- Buffer State
- USB / MIPI Error
- Driver State

### IMU

- Sample Rate
- Timestamp Continuity
- Bias Change
- Saturation
- Communication Error
- Reset Event
- Data Validity State

### GNSS

- Fix State
- Satellite Count
- PPS State
- Timestamp State
- Correction Data State
- Communication State

### Radar

- Frame Rate
- Target Count
- Interface State
- Timestamp Continuity
- Driver State
- Internal Error State

---

## Sensor Timing Surface

建议包括：

- Sensor Timestamp
- Host Timestamp
- Frame Sequence
- Packet Sequence
- PPS State
- Trigger State
- Clock Offset
- Timestamp Jump
- Timestamp Drift

Timing Surface 用于判断数据连续性和跨流关系。

它不用于自动确认因果。

---

# Sensor Runtime Profile

## Definition

Sensor Runtime Profile 是一款 Sensor 在特定产品版本、Host 条件、部署环境和已知干扰下形成的结构化 Runtime Behaviour Profile。

它不是：

- Compliance Approval
- Quality Guarantee
- Universal Performance Claim

它是 Sensor Manufacturer 已观察、已记录、可供未来 Investigation 参考的 Runtime Knowledge。

---

# What a Sensor Runtime Profile Describes

一个 Sensor Runtime Profile 可以描述：

```text
Sensor Product
+
Firmware / Driver Version
+
Host and Interface
+
Deployment Environment
+
Known Disturbance
+
Observed Runtime Behaviour
+
Known Sensor REF Context
+
Recovery Behaviour
+
Investigation References
```

Profile 只描述已覆盖条件下的观察结果。

未覆盖场景不得推断。

---

# Sensor Profile Dimensions

建议按以下维度建立 Sensor Runtime Profile。

---

## Product Dimension

- Sensor Model
- Hardware Revision
- Firmware Version
- Driver Version
- SDK Version
- Interface Mode

---

## Host Dimension

- SBC / Host Platform
- Linux Version
- Kernel Version
- Driver Environment
- USB Controller
- Ethernet Controller
- Compute Load Condition

---

## Robot Integration Dimension

- Mounting Position
- Cable Length
- Power Architecture
- Interface Topology
- Hub / Switch
- Driver Configuration
- Output Consumption Method

Profile 不需要包含 OEM 的机密算法。

只记录影响 Sensor Runtime 的 Integration Context。

---

## Deployment Environment Dimension

例如：

- Restaurant
- Hotel
- Hospital
- Shopping Mall
- Warehouse
- Factory
- Outdoor Delivery
- Underground Parking
- Campus
- Logistics Yard

同一款 Sensor 可以拥有多个 Environment Profile。

---

## Known Disturbance Dimension

例如：

- Optical Disturbance
- Thermal Disturbance
- Vibration
- Electrical Disturbance
- Communication Disturbance
- Timing Disturbance
- Host Compute Disturbance

---

# Known Sensor REF Investigation Context

Sensor Runtime Profile 的重要组成部分，是已知 Sensor REF 的 Investigation Context。

它描述：

> 在某种已知环境或干扰下，Sensor 曾出现什么 Runtime Pattern，以及未来调查时应从哪些证据和路径开始。

例如：

```text
Deployment Environment
Restaurant

Known Disturbance
Reflective Glass

Observed Runtime Pattern
Intermittent LiDAR return reduction

Relevant Surfaces
LiDAR Output
Internal Status
Ethernet Packet Rate
Temperature

Investigation Context
Compare return count, packet continuity and internal status

Known Recovery Behaviour
Automatic recovery after environment change
```

Known Sensor REF Context 不代表所有未来事件都具有相同原因。

它只提供已知调查参考。

---

# Profile Structure

一个标准 Sensor Runtime Profile 可以包含：

```text
Sensor Runtime Profile
│
├── Profile Identifier
├── Sensor Product Definition
├── Firmware / Driver Definition
├── Host and Interface Context
├── Deployment Environment
├── Known Disturbance
├── Runtime Surface Coverage
├── Baseline Runtime Behaviour
├── Known Sensor REF Patterns
├── Investigation Context
├── Recovery Behaviour
├── Historical RGA References
└── Coverage Boundary
```

---

# Baseline Runtime Behaviour

Profile 可以记录已覆盖条件下的正常运行表现。

例如：

- Expected Frame Rate Range
- Expected Packet Rate Range
- Expected Timestamp Continuity
- Expected Startup Sequence
- Expected Recovery Sequence
- Expected Internal State

Baseline 不是永久不变的统一标准。

它必须绑定：

- Product Version
- Host Context
- Environment
- Test Condition

---

# Known Sensor REF Patterns

Profile 可以记录已知 Runtime Pattern。

例如：

- Frame Interruption
- Packet Loss
- Sensor Reconnect
- Driver Restart
- Timestamp Jump
- Output Frequency Reduction
- Internal Thermal Protection
- Interface Enumeration Loss
- Recovery Failure

每一个 Pattern 应关联：

- Relevant Surface
- Environment
- Disturbance
- Observed Sequence
- Investigation Context
- Historical RGA Reference

---

# Profile Coverage Boundary

每个 Sensor Runtime Profile 必须明确 Coverage Boundary。

例如：

```text
Covered

- LiDAR Model X
- Firmware 2.4
- Ethernet Interface
- Ubuntu 22.04
- Warehouse Environment
- Packet-loss disturbance
```

```text
Not Covered

- Outdoor rain
- Different firmware
- USB interface
- Alternative driver
- Unobserved host platform
```

Atlas 不将未覆盖条件解释为正常、异常或已验证。

---

# Profile Lifecycle

```text
Sensor Product Definition
          │
          ▼
Runtime Surface Mapping
          │
          ▼
Known Environment Observation
          │
          ▼
Known Sensor REF Context
          │
          ▼
Sensor Runtime Profile
          │
          ▼
Field Investigation Reuse
          │
          ▼
Profile Update
```

Profile 可以随着：

- Firmware Update
- Driver Update
- New Host Platform
- New Deployment Environment
- New Historical RGA
- New Known Disturbance

持续演进。

---

# Known Environment Coverage

Sensor Manufacturer 应选择真实且高价值的场景建立 Profile。

不需要一开始覆盖所有环境。

建议优先选择：

- 主要客户部署场景
- 高频 FAE 支持场景
- 高退货率场景
- 高工时调查场景
- 安全相关场景
- 新产品目标场景

---

# Controlled Environment Observation

Sensor Manufacturer 可以通过 Controlled Environment（CE）建立已知干扰条件下的 Runtime Profile。

CE 的目标不是认证 Sensor。

也不是模拟完整机器人系统。

它用于观察：

> Sensor 在已知环境干扰下会表现出怎样的 Runtime Behaviour。

---

## Optical Disturbance

适用于 Camera、LiDAR 等光学 Sensor。

例如：

- Strong Sunlight
- Low Light
- Glass
- Mirror
- Reflective Surface
- Fog
- Dust
- Smoke
- Water Droplet
- Rapid Light Transition

---

## Thermal Disturbance

例如：

- High Temperature
- Low Temperature
- Rapid Temperature Change
- Thermal Drift
- Internal Thermal Protection

---

## Vibration and Motion Disturbance

例如：

- Mechanical Vibration
- Shock
- Robot Acceleration
- Mount Movement
- Connector Movement

---

## Electrical Disturbance

例如：

- Voltage Drop
- Power Ripple
- Power Cycle
- Ground Noise
- Shared Load Change
- EMI
- ESD Recovery

---

## Communication Disturbance

例如：

- Ethernet Packet Loss
- Link Interruption
- USB Reconnect
- USB Bus Congestion
- CAN Bus Load
- Bandwidth Saturation
- Host Restart
- Driver Restart

---

## Timing Disturbance

例如：

- Timestamp Jump
- Clock Drift
- PPS Loss
- Trigger Loss
- Frame Sequence Gap
- Host / Sensor Clock Misalignment

---

## Host Runtime Disturbance

例如：

- CPU Load
- Memory Pressure
- Disk I/O
- Network Congestion
- Scheduler Delay
- Process Restart
- Driver Restart

这些干扰属于 Sensor Runtime Environment。

Profile 只记录 Sensor 及直接边界的行为。

---

# Pre-built Sensor Historical RGA

Sensor Manufacturer 不应从空 Historical Repository 开始部署 Atlas。

建议在正式接入 OEM 协作前，预构建一批 Sensor Historical RGA。

Historical RGA 来自已经完成的：

- FAE Support Case
- RMA Investigation
- Firmware Issue
- Driver Issue
- Integration Case
- Compatibility Test
- Reliability Test
- Field Failure Analysis
- Controlled Environment Observation

---

# Why Pre-build Historical RGA?

没有预构建 RGA：

```text
New Sensor REF
       │
       ▼
FAE Starts From Zero
```

有预构建 RGA：

```text
New Sensor REF
       │
       ▼
Historical Recall
       │
       ▼
Known Investigation Context
       │
       ▼
Reusable Investigation Path
```

Pre-built RGA 使 FAE 从第一天就能复用历史经验。

---

# Recommended Initial RGA Coverage

建议首批选择：

```text
One Sensor Product
+
Three to Five Common Runtime Patterns
+
Five to Ten Historical Cases
+
Two to Four Key Deployment Environments
```

例如：

```text
LiDAR Model X

├── Packet Loss
├── Link Interruption
├── Timestamp Discontinuity
├── Thermal Protection
└── Driver Reconnect
```

对应环境：

```text
Warehouse
Factory
Restaurant
Outdoor Delivery
```

---

# High-value Historical Cases

优先选择以下案例：

- 多次发生
- 涉及多个 OEM
- 消耗大量 FAE 工时
- 曾升级 Firmware 或 Driver 团队
- 已形成清晰 Investigation Path
- 已有明确 IR 和 LL
- 能跨场景复用
- 能减少重复答复

高频案例通常比单一极端案例更快产生 ROI。

---

# Sensor Historical RGA Minimum Fields

每一个预构建 Sensor Historical RGA 建议包含：

```text
Sensor Historical RGA
│
├── RGA Identifier
├── Sensor Product Model
├── Hardware Revision
├── Firmware Version
├── Driver Version
├── Interface Type
├── Host Context
├── Deployment Environment
├── Known Disturbance
├── Sensor Runtime Pattern
├── Runtime Surface References
├── Investigation Path
├── Excluded Path
├── Sensor Investigation Result
├── Sensor Lesson Learned
├── Evidence Reference
└── Authorization Metadata
```

如果历史案例没有完整原始证据，也可以建立 Non-identifiable 或 Signature-based RGA。

至少应保留：

- Runtime Pattern
- Investigation Context
- Investigation Path
- IR
- LL

---

# RGA Organization

建议按以下层级组织：

```text
Sensor Product
      │
      ├── Hardware Revision
      ├── Firmware Version
      ├── Driver Version
      ├── Interface
      ├── Host Platform
      ├── Deployment Environment
      └── Runtime Pattern
```

例如：

```text
Camera Model A
│
├── Restaurant
│     ├── Low-light frame drop
│     └── Reflective surface exposure instability
│
├── Warehouse
│     ├── USB reconnect
│     └── Host bandwidth congestion
│
└── Outdoor Delivery
      ├── Thermal protection
      └── Rapid light transition
```

---

# Relationship Between Profile and Historical RGA

Sensor Runtime Profile 与 Sensor Historical RGA 不相同。

Sensor Runtime Profile 描述：

- Product Runtime Behaviour
- Environment Context
- Known Disturbance
- Known Sensor REF Pattern
- Coverage Boundary

Sensor Historical RGA 保存：

- Completed Investigation
- Investigation Path
- Excluded Path
- Sensor IR
- Sensor LL
- Reuse Metadata

两者关系：

```text
Sensor Runtime Profile
        │
        ├── References Known Patterns
        │
        └── References Historical RGA
```

Profile 提供产品与环境视图。

Historical RGA 提供已完成调查的知识资产。

---

# OEM Collaboration

当 OEM Runtime Investigation 涉及 Sensor Candidate 时，OEM 可以通过 Sensor Engagement Pack 向 Sensor FAE 发起协作。

```text
OEM REF Ticket
      │
      ▼
Sensor Engagement Pack
      │
      ▼
Sensor REF Ticket
      │
      ▼
Sensor Historical Recall
      │
      ▼
Sensor Investigation
      │
      ▼
Sensor IR and LL
      │
      ▼
Sensor Ticket Closure
      │
      ▼
OEM REF Closure
```

Sensor FAE 可以同时检索：

- Sensor Runtime Profile
- Sensor Historical RGA
- Known Environment Context
- Known CE Disturbance

---

# Evidence Modes

OEM 与 Sensor Manufacturer 的证据交换取决于 NDA 和授权边界。

---

## Raw Evidence Mode

适用于双方存在 NDA，并针对具体 Sensor REF 开展调查。

可以共享：

- OEM Evidence Pack
- Raw Runtime Observation
- Runtime Timeline
- Sensor-specific Logs
- Configuration Context

Raw Evidence Mode 只服务于指定调查。

不会自动进入共享知识库。

---

## Non-identifiable Mode

适用于：

- 无 NDA
- 跨 OEM 经验复用
- Assist Vault
- Signature-based Recall

可以共享：

- Runtime Pattern
- Surface Signature
- Investigation Context
- Investigation Path
- Lesson Learned

不共享：

- OEM Identity
- Customer Identity
- Robot Serial Number
- Raw Dataset
- Proprietary Configuration

---

# Sensor Manufacturer Infrastructure

Sensor Manufacturer 可以根据现有条件选择部署方式。

---

## Existing FAE or Support Platform

适用于已有：

- CRM
- Ticketing System
- FAE Portal
- RMA System
- Internal Knowledge Base
- Lab Server

Atlas 可以通过 Reference ID 与现有系统关联。

```text
Existing FAE Ticket
        │
        ▼
Atlas Sensor REF
        │
        ▼
Historical Recall
        │
        ▼
Sensor Investigation
        │
        ▼
IR / LL / RGA
```

不要求替换现有 Support Platform。

---

## Internal Server Deployment

适用于具有总部或实验室服务器的 Sensor Manufacturer。

```text
FAE / Lab
    │
    ▼
Atlas Investigation Workspace
    │
    ├── Sensor Runtime Profiles
    ├── Sensor Historical RGA
    └── Investigation Records
```

---

## Minimal Standalone Deployment

适用于小型 Sensor Manufacturer 或试点团队。

最小组件包括：

- Investigation Workstation
- Sensor Runtime Profile Repository
- Historical RGA Repository
- Import / Export Tool
- FAE Owner

无需先建设复杂 Cloud。

---

# Information Required from Sensor Manufacturer

## Product Information

- Sensor Model
- Hardware Revision
- Firmware Version
- Driver / SDK Version
- Interface Type
- Supported Host Environment

---

## Runtime Surface Information

- Internal State
- Output Data
- Error State
- Timing Source
- Interface State
- Recovery Behaviour
- Available Diagnostic Interface

---

## Environment Information

- Main Deployment Scenarios
- Known Environmental Risks
- Existing CE Test Conditions
- Known Host Conditions
- Known Integration Constraints

---

## Historical Asset Information

- FAE Tickets
- RMA Cases
- Driver Cases
- Firmware Cases
- Known Runtime Patterns
- Existing Investigation Steps
- Existing IR
- Existing LL

---

## Governance Information

- FAE Investigation Owner
- Driver Team Escalation Owner
- Firmware Team Escalation Owner
- Product Owner
- OEM Collaboration Policy
- NDA and Data Exchange Policy
- RGA Authorization Policy

---

# Recommended Deployment Sequence

```text
Phase 1
Sensor Product and Surface Mapping

        ↓

Phase 2
Historical Case Selection

        ↓

Phase 3
Pre-built Sensor Historical RGA

        ↓

Phase 4
Known Environment and CE Coverage

        ↓

Phase 5
Sensor Runtime Profile Creation

        ↓

Phase 6
OEM Collaboration Pilot

        ↓

Phase 7
FAE and ROI Expansion
```

---

## Phase 1 — Product and Surface Mapping

选择：

- One Sensor Product
- One Firmware / Driver Combination
- One Primary Interface

完成 Sensor Runtime Surface Mapping。

---

## Phase 2 — Historical Case Selection

选择：

- Five to Ten High-value Cases
- Three to Five Runtime Patterns
- Two to Four Deployment Environments

---

## Phase 3 — Historical RGA Pre-build

将历史案例标准化为：

- Runtime Pattern
- Investigation Path
- Excluded Path
- IR
- LL

---

## Phase 4 — Known Environment Coverage

补充高价值的：

- Deployment Environment
- CE Disturbance
- Host Runtime Condition
- Recovery Behaviour

---

## Phase 5 — Sensor Runtime Profile

将产品、场景、干扰、Pattern 和 Historical RGA 组织成 Sensor Runtime Profile。

---

## Phase 6 — OEM Collaboration Pilot

选择一个 OEM 和一个真实或 Controlled REF，验证：

- EGP Intake
- Sensor REF Creation
- Historical Recall
- Sensor Investigation
- Sensor IR / LL
- Ticket Closure

---

## Phase 7 — FAE and ROI Expansion

扩展到：

- Multiple OEMs
- Multiple Robot Platforms
- Multiple Deployment Environments
- Multiple Firmware Versions
- FAE Response Metrics
- RGA Reuse Metrics
- Tier 3 Escalation Metrics
- Engineering Hours Saved

---

# Maximum-value Deployment

Sensor Manufacturer 获得最大 Atlas 价值，需要同时建立：

```text
Sensor Runtime Surface Coverage
+
Sensor Runtime Profiles
+
Pre-built Historical RGA
+
Standard FAE Investigation Workflow
```

只有 Profile，没有 Historical RGA，FAE 仍然需要重新设计调查路径。

只有 Historical RGA，没有 Profile，历史知识缺少产品、版本和环境上下文。

两者结合，才能让 Sensor Manufacturer 实现：

- Faster FAE Investigation
- Cross-OEM Knowledge Reuse
- Cross-environment Pattern Recognition
- Lower Repeated Engineering Effort
- Better Product Reliability Feedback
- Continuous Sensor Organization Memory

---

# Summary

Sensor Manufacturer Deployment 的核心不是生成 Passport、Certificate 或认证文件。

完整部署应建立：

```text
1. Sensor Runtime Surface Coverage

2. Sensor Runtime Profiles

3. Pre-built Sensor Historical RGA

4. Standard FAE Investigation Workflow
```

Sensor Runtime Profile 描述一款 Sensor 在不同产品版本、Host 条件、机器人集成方式、部署场景和已知 CE 干扰下的 Runtime Behaviour、Known Sensor REF Pattern 与 Investigation Context。

Sensor Historical RGA 保存已经完成的 Sensor Investigation、IR、LL 和可复用调查路径。

当 OEM 发起 Sensor Engagement 时，FAE 可以从 Sensor Runtime Profile 和 Historical RGA 开始调查，而不是重新收集背景、重新查找案例、重新设计排查步骤。

Atlas 负责组织 Sensor Runtime Knowledge、记住过去，并让每一次 FAE 调查持续服务于未来的 OEM、机器人平台和部署场景。

---

# 下一步阅读

- Pilot Deployment™
- Production Deployment™
