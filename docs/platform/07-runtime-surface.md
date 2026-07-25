---
title: Runtime Surface™
sidebar_label: Runtime Surface™
---

# Runtime Surface™

## Overview

Runtime Surface™ 是 Atlas Runtime Governance™ 中最基本的观测单元（Observation Unit）。

每一个 Runtime Surface 表示一类可以持续观察、记录和参与 Runtime Investigation 的运行时对象。

Atlas Runtime Dataset、Evidence Pack、Historical RGA、Investigation Context 均建立在 Runtime Surface 之上。

---

# 为什么需要 Runtime Surface？

机器人运行时异常通常不会发生在单一组件。

例如：

```text
LiDAR Point Cloud Lost
```

真正参与事件的可能包括：

```text
LiDAR
Ethernet
Linux Driver
ROS Topic
Power
Timestamp
```

如果这些数据分别存在不同日志中，就很难建立统一调查时间线。

Runtime Surface 提供统一观察模型，使不同来源的数据能够在同一时间轴上组织和关联。

---

# Runtime Surface Architecture

```text
Robot Runtime
│
├── Sensor Surface
├── Power Surface
├── Bus Surface
├── Linux Runtime Surface
├── Driver Surface
├── ROS Runtime Surface
└── Custom Surface
```

每一种 Surface 都可以持续产生 Runtime Observation。

这些 Observation 最终进入统一 Runtime Dataset。

---

# Runtime Surface Registry

所有 Runtime Surface 都注册到 Surface Registry。

Surface Registry 定义：

- Surface ID
- Surface Type
- Observation Interface
- Availability
- Collection Policy
- Export Policy

Surface Registry 使 Atlas 能够了解：

- 当前部署有哪些 Runtime Surface
- 哪些 Surface 已覆盖
- 哪些 Surface 不存在
- 哪些 Surface 未参与本次 Evidence Pack

---

# Runtime Surface Categories

## Sensor Surface

表示物理传感器运行状态。

例如：

- Camera
- LiDAR
- IMU
- GNSS
- Radar
- Ultrasonic

典型 Observation：

- Device availability
- Frame continuity
- Packet continuity
- Sensor metadata

---

## Power Surface

表示运行时供电相关状态。

例如：

- Voltage
- Power interruption
- Brownout
- Power recovery

Power Surface 可以帮助调查供电相关异常。

---

## Bus Surface

表示通信总线运行状态。

例如：

- USB
- Ethernet
- CAN
- SPI
- I²C
- UART
- CSI

典型 Observation：

- Device connection
- Link status
- Packet activity
- Bus errors

---

## Linux Runtime Surface

表示 Linux Runtime 状态。

例如：

- Process lifecycle
- CPU usage
- Memory pressure
- Disk activity
- Kernel events

这些 Observation 有助于识别运行环境异常。

---

## Driver Surface

表示驱动层运行状态。

例如：

- Driver start
- Driver exit
- Driver restart
- Runtime errors

Driver Surface 不包含驱动源码。

它仅观察驱动运行行为。

---

## ROS Runtime Surface

表示 ROS Runtime 状态。

例如：

- Topic frequency
- Topic availability
- Node lifecycle
- Message continuity

ROS Runtime Surface 提供机器人应用层之前的重要观察点。

---

## Custom Surface

OEM 可以扩展新的 Runtime Surface。

例如：

- FPGA
- MCU
- PLC
- Safety Controller
- Robot Middleware
- Custom Runtime Component

Atlas 不限制 Runtime Surface 类型。

---

# Runtime Observation

每个 Runtime Surface 持续产生 Observation。

典型 Observation 包括：

- Timestamp
- Runtime Event
- Runtime Status
- Metadata
- Availability
- Continuity

Atlas 不要求所有 Surface 产生相同数据。

不同 Surface 可以拥有不同 Observation Schema。

---

# Runtime Dataset

所有 Runtime Observation 最终进入统一 Runtime Dataset。

```text
Runtime Surface
        │
        ▼
Runtime Observation
        │
        ▼
Runtime Dataset
```

Atlas 不会为不同 Runtime Surface 建立独立的数据生命周期。

所有 Surface 共用统一 Runtime Dataset。

---

# Surface Correlation

Runtime Investigation 可以关联多个 Runtime Surface。

例如：

```text
Camera Frame Drop
        │
        ├──────── Linux Driver Restart
        │
        ├──────── CPU Spike
        │
        └──────── ROS Topic Loss
```

Atlas 可以建立 Runtime Surface 的时间关联。

Surface Correlation 提供调查入口，但不代表因果关系。

---

# Surface Coverage

每一个 Evidence Pack 都会记录 Runtime Surface Coverage。

例如：

| Runtime Surface | Coverage |
|-----------------|----------|
| Camera | ✓ |
| LiDAR | ✓ |
| Ethernet | ✓ |
| Linux Runtime | ✓ |
| ROS Topic | ✓ |
| Power | ✗ |
| CAN | ✗ |

Surface Coverage 用于说明：

- 哪些 Runtime Surface 已被观察
- 哪些 Surface 缺失
- 哪些 Surface 未参与本次调查

Surface Coverage 不用于评价调查质量。

它仅说明证据覆盖范围。

---

# Runtime Surface 与 Investigation

Runtime Surface 不直接参与调查。

它提供调查所需的 Runtime Observation。

```text
Runtime Surface
        │
        ▼
Runtime Observation
        │
        ▼
Runtime Dataset
        │
        ▼
Evidence Pack
        │
        ▼
Runtime Investigation
```

Surface 是调查证据来源，而不是调查结论。

---

# Design Principles

Runtime Surface 遵循以下原则：

- 每个 Surface 独立观察
- 每个 Surface 可独立扩展
- 所有 Surface 共用 Runtime Dataset
- 所有 Surface 使用统一时间轴
- Surface Correlation 不代表因果关系
- Surface Coverage 不代表问题定位完成

---

# Summary

Runtime Surface™ 定义了 Atlas 可以持续观察的运行时对象。

所有 Runtime Observation 最终汇聚到统一 Runtime Dataset，并作为 Evidence Pack 和 Runtime Investigation 的基础。

Runtime Surface 建立了不同运行时组件之间统一的观察模型，使调查能够围绕同一时间轴组织，而不是依赖分散日志。

---

# 下一步阅读

- Runtime Datase
- Evidence Pack™
- Historical RGA™
- Investigation Context
