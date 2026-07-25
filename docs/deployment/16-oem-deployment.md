---
title: OEM Deployment
sidebar_label: OEM Deployment
---

# OEM Deployment

## Overview

Atlas Runtime Governance™ 可以接入已有机器人车队，也可以从单机、离线或试点环境开始部署。

OEM 不需要替换现有的：

- Fleet Management
- Cloud Server
- Ticketing System
- Log Platform
- Customer Support System

Atlas 作为独立的 Runtime Governance Layer，连接机器人现场、运行时证据、调查流程和 Historical RGA。

```text
Deployment Runtime
        │
        ▼
Atlas Agent
        │
        ▼
Runtime Dataset
        │
        ▼
Evidence Pack
        │
        ▼
Runtime Investigation
        │
        ▼
Historical RGA
```

为了最大化 Atlas 的调查价值，OEM 部署前应完成三项基础准备：

1. 建立 System 与 Sensor Runtime Surface Coverage  
2. 预构建 OEM Historical RGA  
3. 协同 Sensor Factory 预构建 Sensor Historical RGA  

---

# Minimum Deployment Requirements

Atlas 的最小部署条件包括：

```text
Runtime Compute
+
Runtime Surface Access
+
Unified Time Reference
+
Local Storage
+
Export Path
+
Investigation Owner
```

这些条件不依赖特定 Cloud、数据库或机器人平台。

---

# Runtime Surface Requirements

Atlas 观察的 Runtime Surface 分为两层：

```text
System Surface
      │
      ▼
Sensor Surface
```

System Surface 是机器人运行时的主要治理边界。

Sensor Surface 是传感器及其底层接口的运行时边界。

两类 Surface 应进入同一 Runtime Timeline。

---

# 1. System Surface Requirements

System Surface 用于观察机器人主系统是否正确接收、承载和传递 Sensor Runtime Data。

建议优先接入以下 Surface。

---

## Power Surface

Power Surface 用于观察供电状态和复位事件。

建议包括：

- Main Power State
- Sensor Rail State
- Voltage Drop Event
- Brownout Event
- Power Cycle
- Reset Signal
- Overcurrent Event
- Power Enable State

典型调查问题：

- Sensor 是否因供电波动掉线？
- SBC、Hub 或 Sensor 是否发生复位？
- 多个 Sensor 是否在同一时间失效？
- Runtime Failure 是否与 Power Event 同步？

---

## Linux Runtime Surface

Linux Runtime Surface 用于观察主机操作系统的运行状态。

建议包括：

- Kernel Event
- Device Enumeration
- Process State
- CPU Load
- Memory Pressure
- Disk I/O
- Scheduler Delay
- Network State
- USB State
- Driver Load / Unload
- Kernel Warning
- System Restart

典型调查问题：

- Sensor 掉线前是否出现 Kernel Event？
- Driver 是否重启？
- CPU 或 Memory Pressure 是否造成数据中断？
- Device 是否从 Linux 中消失？
- Network Interface 是否发生 Link Transition？

---

## Communication Surface

Communication Surface 用于观察 Sensor 与 SBC 之间的数据通道。

建议根据机器人架构接入：

- Ethernet
- USB
- CAN
- MIPI CSI
- UART
- SPI
- I²C
- SerDes
- Trigger
- PPS
- Synchronization Signal

建议记录：

- Link State
- Packet Rate
- Error Count
- Reconnect Event
- Timeout
- Bus Reset
- Device Address
- Interface Enumeration
- Bandwidth Change

---

## Driver Surface

Driver Surface 用于观察 Sensor Driver 的运行状态。

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

Driver Surface 连接底层设备状态与上层 Runtime Output。

---

## ROS / Application Surface

ROS 或 Application Surface 用于观察机器人应用实际接收到的数据。

建议包括：

- ROS Node State
- ROS Topic Frequency
- Message Timestamp
- Message Delay
- Message Drop
- Callback Rate
- Application Input State
- Runtime State Transition
- Health Flag

典型调查问题：

- Sensor 仍在线，但 ROS Topic 是否停止？
- Driver 有数据，但 Application Callback 是否中断？
- Topic Frequency 是否在事件前下降？
- 多个 Topic 是否同时发生异常？

---

## Robot Runtime State

建议记录与 REF 相关的机器人运行状态。

例如：

- Navigation State
- Localization State
- Obstacle State
- Safety State
- Motion State
- Mission State
- Manual / Autonomous Mode
- Stop Command
- Recovery State

这些状态用于建立 Runtime Investigation Context。

Atlas 不用它们自动判断 Root Cause。

---

# 2. Sensor Surface Requirements

Sensor Surface 聚焦 Sensor 自身及其直接 Runtime Output。

每一种 Sensor 应至少建立一个明确的 Surface Definition。

---

## Sensor Identity

建议记录：

- Sensor Type
- Manufacturer
- Product Model
- Hardware Revision
- Firmware Version
- Driver Version
- Interface Type
- Sensor Identifier

Sensor Identifier 可以采用内部匿名 ID。

不要求向外部公开 Serial Number。

---

## Sensor Runtime State

建议包括：

- Online / Offline
- Initialized / Not Initialized
- Streaming / Not Streaming
- Internal Error State
- Temperature State
- Reset State
- Firmware State
- Self-test Result
- Reconnect State

---

## Sensor Data Surface

根据 Sensor 类型记录关键 Runtime Output。

### LiDAR

- Point Cloud Frequency
- Packet Rate
- Packet Loss
- Frame Completeness
- Timestamp Continuity
- Return Count
- Internal Status
- Ethernet Link State

### Camera

- Frame Rate
- Frame Drop
- Exposure State
- Image Timestamp
- Stream Start / Stop
- USB / MIPI Error
- Buffer State
- Driver State

### IMU

- Sample Rate
- Timestamp Continuity
- Bias Change
- Saturation
- Communication Error
- Reset Event
- Data Validity Flag

### GNSS

- Fix State
- Satellite Count
- PPS State
- Timestamp State
- Communication State
- Correction Data State

### Radar

- Frame Rate
- Target Count
- Interface State
- Timestamp Continuity
- Driver State
- Internal Error State

---

## Sensor Timing Surface

建议记录：

- Sensor Timestamp
- Host Timestamp
- PPS
- Trigger
- Frame Sequence
- Packet Sequence
- Clock Offset
- Timestamp Jump
- Timestamp Drift

时间同步越完整，Cross-stream Investigation 的价值越高。

---

# Recommended Minimum Surface Set

为了形成最小可用 Evidence Chain，建议一款关键 Sensor 至少覆盖：

```text
Sensor Runtime
+
Communication Interface
+
Power
+
Linux Runtime
+
Driver
+
ROS Topic / Application Input
```

例如，LiDAR 的最小覆盖可以是：

```text
LiDAR Stream
+
Ethernet Link
+
LiDAR Power
+
Linux Network
+
LiDAR Driver
+
Point Cloud Topic
```

Camera 的最小覆盖可以是：

```text
Camera Stream
+
USB / MIPI
+
Camera Power
+
Linux Device State
+
Camera Driver
+
Image Topic
```

未接入的 Surface 必须明确标记为：

```text
Not Observed
```

不能推断为正常。

---

# Unified Time Requirement

所有 System Surface 与 Sensor Surface 必须进入统一 Runtime Timeline。

最低要求：

- Host System Clock 可用
- Observation 可以排序
- Sensor 与 Host Timestamp 可以关联

推荐增强：

- NTP
- PTP
- PPS
- Hardware Trigger
- Frame Sequence
- Packet Sequence

Atlas 不要求所有设备都具备硬件同步。

但必须记录可用的时间来源和时间精度。

---

# OEM Historical RGA Pre-build

对于 OEM 而言，最有价值的 Atlas Deployment 不是从空 Historical Repository 开始。

建议在正式运行前预构建一批 OEM Historical RGA。

这些 RGA 来自：

- 已关闭的客户投诉
- 已完成的现场调查
- 已知 Runtime Failure
- 内部测试案例
- 已验证的排查经验
- 已解决的 Sensor / System Integration Issue

---

# Why Pre-build OEM Historical RGA?

如果没有 Historical RGA：

```text
New REF
   │
   ▼
Start From Zero
```

如果已经预构建 Historical RGA：

```text
New REF
   │
   ▼
Historical Recall
   │
   ▼
Known Investigation Path
   │
   ▼
Faster Narrowing
```

Historical RGA Pre-build 是 Atlas 从第一天产生调查价值的关键。

---

# Recommended OEM RGA Coverage

OEM Historical RGA 应优先覆盖高频、高成本和安全相关的 REF。

建议从以下类型开始：

- Unexpected Stop
- Obstacle Miss
- False Obstacle
- Localization Failure
- Path Deviation
- Collision
- Fall
- Manipulation Failure

不要求首批覆盖全部 REF。

建议选择：

```text
One Robot Model
+
Three to Five Common REF Types
+
Five to Ten Historical Cases
```

---

# OEM RGA Should Cover System-level Cases

OEM Historical RGA 可以覆盖多个 Sensor 与多个 System Surface。

例如：

```text
Unexpected Stop
│
├── LiDAR
├── Ethernet
├── Linux Network
├── Driver
├── ROS Topic
└── Navigation State
```

或者：

```text
Localization Failure
│
├── Camera
├── IMU
├── Timestamp
├── CPU Load
├── ROS Runtime
└── Localization Process
```

OEM RGA 可以包含：

- Single-sensor Issue
- Multi-sensor Interaction
- Bus Issue
- Power Issue
- Linux Runtime Issue
- Driver Issue
- ROS Runtime Issue
- Cross-system Issue

---

# OEM Historical RGA Minimum Fields

每一个预构建 OEM Historical RGA 建议至少包含：

```text
OEM Historical RGA
│
├── RGA Identifier
├── Robot Model
├── REF Type
├── Deployment Environment
├── Runtime Pattern
├── Runtime Surface References
├── Investigation Path
├── Excluded Path
├── Investigation Result (IR)
├── Lesson Learned (LL)
├── Evidence Reference
└── Authorization Metadata
```

如果历史事件没有完整 Evidence Pack，也可以先建立：

```text
Mode B Historical RGA
```

仅保留：

- Runtime Signature
- Investigation Pattern
- Investigation Path
- IR
- LL

后续新 REF 仍可进行 Partial Recall。

---

# Most Valuable OEM Pre-build Cases

优先级最高的历史案例通常具有以下特征：

- 曾多次发生
- 消耗大量 Tier 3 工时
- 涉及多个团队
- 曾升级到 Sensor Factory
- 曾形成 Engineering War Room
- 已有明确 Investigation Path
- 已有可复用 Lesson Learned

不应只选择最严重的事件。

高频重复事件通常具有更高的短期 ROI。

---

# OEM Pre-build Process

```text
Historical Ticket / Case
          │
          ▼
Select Reusable Case
          │
          ▼
Normalize REF Type
          │
          ▼
Map Runtime Surfaces
          │
          ▼
Record IR and LL
          │
          ▼
Create Historical RGA
          │
          ▼
Import into OEM RGA Repository
```

建议由以下人员共同完成：

- Tier 2 Engineer
- Tier 3 Engineer
- Customer Support Lead
- Product Owner

Atlas 负责标准化结构。

工程人员负责确认 IR 与 LL。

---

# OEM and Sensor RGA Difference

| Item | OEM Historical RGA | Sensor Historical RGA |
|---|---|---|
| Owner | OEM | Sensor Manufacturer |
| Main Object | Robot Runtime REF | Sensor Runtime REF |
| Scope | Multi-sensor and System | Sensor-only |
| Typical Surface | Power, Linux, Bus, Driver, ROS, Sensors | Sensor, Firmware, Driver, Interface |
| Environment | Robot Deployment Scenario | Sensor Deployment and CE Environment |
| Evidence Source | OEM Evidence Pack | OEM EP Reference or Sensor Test Evidence |
| IR Boundary | OEM Runtime Investigation | Sensor Investigation |
| Repository | OEM Private RGA Repository | Sensor Private RGA Repository |

双方不共享整个 Historical Repository。

在具体协作中通过 Sensor Engagement Pack 引用同一 OEM Evidence Pack。

---

# Deployment Infrastructure

Atlas 可以适配三种常见 OEM 基础设施。

---

## Existing Fleet Cloud

适用于已有：

- Fleet Management
- Cloud Server
- Object Storage
- Ticketing System
- Headquarters Data Center

```text
Robot
  │
  ▼
Atlas Agent
  │
  ▼
Existing Upload Channel
  │
  ▼
OEM Cloud / Headquarters
  │
  ├── Runtime Repository
  ├── Investigation Workspace
  └── Historical RGA Repository
```

Atlas 可以复用：

- Existing Robot-to-cloud Transport
- REST API
- Message Queue
- SFTP
- Object Storage
- Internal File Service

不要求替换 OEM 现有 Cloud。

---

## Headquarters Server Only

适用于没有完整 Fleet Cloud，但具备总部服务器的 OEM。

```text
Robot
  │
  ▼
Local Runtime Dataset
  │
  ▼
Scheduled / Manual Export
  │
  ▼
Headquarters Server
```

可通过：

- Wi-Fi
- LAN
- VPN
- Maintenance Laptop
- Docking Station
- Removable Storage

完成上传。

---

## No Existing Infrastructure

适用于：

- Early-stage OEM
- Pilot Project
- Offline Robot
- Small Integrator
- Internal Lab

```text
Robot
  │
  ▼
Atlas Agent
  │
  ▼
Local Rolling Buffer
  │
  ▼
Manual Export
  │
  ▼
Investigation Workstation
```

最小配置包括：

- Atlas Agent
- Local Runtime Dataset
- Export Tool
- Investigation Workstation
- Historical RGA Repository

OEM 不需要先建设 Cloud 或数据库。

---

# Storage and Export Requirements

Atlas Agent 最低需要支持：

- Continuous Persist
- Rolling Buffer
- Retention Policy
- Dataset Lock
- Time-range Export

建议起始策略：

```text
rolling_buffer_hours: 48
overwrite_policy: circular
dataset_lock_on_ref: enabled
```

支持的 Export Mode 包括：

- Online Upload
- Scheduled Upload
- Upload After Docking
- Manual Export
- Offline Transfer

---

# OEM Information Required

OEM 部署时建议提供：

## Robot Information

- Robot Model
- SBC / Controller
- Linux Version
- ROS / Application Runtime
- Deployment Environment

## Surface Information

- Sensor List
- Power Architecture
- Communication Interface
- Driver
- ROS Topic / Application Input
- Timestamp Source

## Infrastructure Information

- Existing Fleet Cloud
- Headquarters Server
- Ticketing System
- Upload Channel
- Object Storage
- Network Restriction

## Historical Asset Information

- Existing REF Tickets
- Closed Investigation Cases
- Existing IR
- Existing LL
- Known Repeated Issues
- Existing Sensor FAE Cases

## Governance Information

- Tier 1 Owner
- Tier 2 Owner
- Tier 3 Owner
- Sensor FAE Contact
- Data Authorization Policy

OEM 不需要提供算法源码。

Atlas 只观察获得授权的 Runtime Surface。

---

# Recommended Deployment Sequence

```text
Phase 1
Surface Mapping

        ↓

Phase 2
OEM Historical RGA Pre-build

        ↓

Phase 3
Sensor Historical RGA Pre-build

        ↓

Phase 4
Agent Deployment

        ↓

Phase 5
REF Investigation Pilot

        ↓

Phase 6
Fleet and ROI Expansion
```

---

## Phase 1 — Surface Mapping

选择：

- One Robot Model
- One Critical Sensor
- One Common REF

完成 System 与 Sensor Surface Mapping。

---

## Phase 2 — OEM RGA Pre-build

建议导入：

- Five to Ten Historical Cases
- Three to Five REF Types
- Existing IR and LL
- Known Investigation Paths

---

## Phase 3 — Agent Deployment

确认：

- Observe
- Persist
- Retain
- Export
- Dataset Lock
- Evidence Pack Generation

---

## Phase 4 — Investigation Pilot

验证：

- REF Intake
- Historical Recall
- Investigation Context
- Tier Candidate
- Sensor Engagement
- Ticket Closure
- New RGA Creation

---

## Phase 5 — Fleet and ROI

扩展到：

- Multiple Robot Models
- Multiple Sensors
- Multiple Deployment Environments
- Tier 3 Involvement Tracking
- Historical RGA Reuse
- Engineering Hours Saved
- Investigation ROI

---

# Maximum-value Deployment

Atlas 的最大价值来自三项能力同时建立：

```text
Complete Runtime Surface Coverage
+
Pre-built Historical RGA
+
Continuous Runtime Investigation
```

仅部署 Agent，可以获得 Runtime Evidence。

加入 OEM Historical RGA，可以让 OEM Investigation 从历史经验开始。

加入 Sensor Historical RGA，可以让 Sensor FAE 从产品与环境经验开始。

三者结合，才能实现：

- Faster Investigation
- Higher RGA Reuse
- Lower Tier 3 Involvement
- Lower Engineering Cost
- Continuous Organization Memory

---

# Summary

OEM Deployment 不仅是安装 Atlas Agent。

完整部署包括三个核心基础：

```text
1. System and Sensor Runtime Surface Coverage

2. OEM Historical RGA Pre-build

3. Sensor Historical RGA Pre-build
```

System Surface 应覆盖 Power、Linux、Communication、Driver、ROS 和 Robot Runtime State。

Sensor Surface 应覆盖 Sensor State、Data Output、Timing、Interface、Firmware 和 Driver。

OEM Historical RGA 聚焦机器人级、多 Sensor 和 System Runtime Investigation。

Sensor Historical RGA 聚焦 Sensor 产品本身，并覆盖不同机器人、不同场景和已知 CE Environment Disturbance。

Atlas 将现场运行数据、OEM 调查经验和 Sensor FAE 产品知识连接为持续运行的 Runtime Governance Infrastructure。

核心工程团队继续创造新产品。

Atlas 负责组织证据、记住过去，并让过去持续创造价值。

# 下一步阅读

- Sensor Manufacturer Deployment
- Pilot Deployment™
- Production Deployment™
