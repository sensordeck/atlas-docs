---
title: Atlas Agent™
sidebar_label: Atlas Agent™
---

# Atlas Agent™

## Overview

Atlas Agent™ 是部署在机器人运行环境中的 Runtime Agent。

它负责持续执行 Runtime Observation，并根据配置策略采集、保留和导出运行时数据，为 Runtime Governance 提供统一的数据入口。

Atlas Agent 是 Atlas Runtime Governance™ 的现场执行组件。

---

# Runtime Architecture

一个典型部署如下：

```text
Robot Runtime
│
├── Sensors
├── Power
├── USB / Ethernet / CAN
├── Linux Runtime
├── Device Drivers
├── ROS Runtime
└── Applications
        │
        ▼
    Atlas Agent
        │
        ▼
Runtime Dataset
```

Atlas Agent 与机器人业务逻辑解耦。

它不会参与机器人控制流程。

---

# Runtime Dataset Lifecycle

Atlas Agent 维护一套统一的 Runtime Dataset 生命周期。

所有运行时数据，无论最终用于哪种调查模式，都遵循同一生命周期：

```text
Observe
    ↓
Persist
    ↓
Rolling Buffer
    ↓
Time-range Export
```

Atlas 不会针对不同调查模式维护多份 Runtime Dataset。

无论是：

- Tier 1 手动指定 REF 时间范围
- 自动 Candidate Timeline
- Candidate Evidence Pack
- Primary Evidence Pack

都基于同一份 Runtime Dataset。

---

## Observe

Atlas Agent 持续观察 Runtime Surface，并接收运行时数据。

例如：

- Sensor Runtime
- Driver Runtime
- Linux Runtime
- Runtime Events
- Runtime Metadata
- Timestamp
- Surface Status

所有观测数据进入统一的数据生命周期。

---

## Persist

Agent 将 Runtime Observation 持续写入 Runtime Dataset。

Persist 的目标不是生成调查结果，而是确保运行时数据能够被后续调查引用。

---

## Rolling Buffer

Runtime Dataset 默认采用 Rolling Buffer 管理。

当达到保留策略限制时，最旧的数据按照覆盖策略自动释放。

Retention Policy 可配置，包括：

- `rolling_buffer_hours`
- `max_storage_size`
- `overwrite_policy`
- `dataset_lock_on_ref`

默认建议值：

| Policy | Default |
|---------|---------|
| rolling_buffer_hours | 48 hours |
| overwrite_policy | circular |
| dataset_lock_on_ref | enabled |

OEM 可根据实际部署环境调整上述策略。

---

## Dataset Lock

当 Runtime Execution Failure（REF）进入正式调查后，Atlas Agent 会锁定对应时间范围的数据。

锁定期间：

- 不参与 Rolling Buffer 覆盖
- 不允许自动删除
- 保持 Runtime Dataset 完整性
- 直到 Evidence Pack 导出完成后解除锁定

Dataset Lock 仅影响对应时间段，不影响其它 Runtime Dataset 的正常循环。

---

## Time-range Export

Atlas Agent 支持按时间范围导出 Runtime Dataset。

导出来源可以包括：

- Tier 1 指定的 REF 时间范围
- Candidate Timeline
- Candidate Evidence Pack
- Primary Evidence Pack

所有导出均引用同一份 Runtime Dataset，不复制、不重新采集运行时数据。

---

## Architecture Principle

Atlas 始终维护一份统一的 Runtime Dataset 生命周期。

```text
                 Runtime Dataset
                        │
      ┌─────────────────┼──────────────────┐
      │                 │                  │
      ▼                 ▼                  ▼
Manual REF       Candidate Timeline   Candidate EP
 Time Slice           Generation         Builder
      │                 │                  │
      └─────────────────┴──────────────────┘
                        │
                        ▼
                 Evidence Pack Export
```

不同调查模式共享同一份 Runtime Dataset。

Atlas 不会因为不同 Investigation Workflow 而创建独立的数据生命周期，也不会维护两套 Runtime Dataset。
---

# Internal Components

Atlas Agent 由多个运行模块组成。

```text
Atlas Agent
│
├── Runtime Observer
├── Dataset Manager
├── Retention Manager
├── Evidence Builder
├── Export Manager
├── Surface Adapter
└── Configuration Manager
```

每个模块负责不同职责。

---

# Runtime Observer

Runtime Observer 持续监听 Runtime Surface。

Observer 负责：

- 接收 Runtime Event
- 接收 Surface Status
- 接收 Runtime Metadata
- 接收 Timestamp
- 接收 Runtime State

Observer 不负责分析 Root Cause。

---

# Dataset Manager

Dataset Manager 负责组织 Runtime Dataset。

主要职责：

- 写入 Dataset
- 建立统一时间轴
- 数据分段
- 数据索引
- Metadata 管理

Dataset Manager 不负责调查。

---

# Retention Manager

Retention Manager 根据策略管理 Runtime Dataset。

例如：

- 最大保存容量
- 最大保存时间
- 循环覆盖策略
- Export 前保留
- Export 后删除
- Protected Dataset

Retention Policy 可以根据 OEM 要求配置。

---

# Evidence Builder

Evidence Builder 根据指定事件生成 Evidence Pack。

Evidence Builder 可以响应：

- Manual Window Request
- Runtime Event
- Dataset Trigger
- Controlled Event

Evidence Builder 不决定调查层级。

它仅负责构建标准化 Evidence Pack。

---

# Export Manager

Export Manager 负责导出 Runtime 数据。

支持：

- Runtime Dataset
- Evidence Pack
- Runtime Metadata
- Export Manifest

导出目标由客户部署策略决定。

---

# Surface Adapter

不同机器人平台拥有不同 Runtime Surface。

Surface Adapter 负责：

- Runtime Surface Discovery
- Surface Registration
- Runtime Interface
- Data Collection Interface

Atlas 不要求所有机器人具有完全一致的数据接口。

Surface Adapter 提供统一抽象层。

---

# Configuration Manager

Configuration Manager 管理 Agent 配置。

例如：

- Observation Policy
- Retention Policy
- Export Policy
- Runtime Surface
- Sampling Policy
- Trigger Policy

不同机器人可拥有不同配置。

---

# Deployment Model

Atlas Agent 可以部署于：

- Robot SBC
- Industrial PC
- Edge Computer
- Embedded Linux Platform

Agent 不依赖云端运行。

所有 Runtime Observation 均可在本地完成。

---

# Resource Consumption

Atlas Agent 设计目标：

- 长时间运行
- 低资源占用
- 不影响机器人实时控制
- 可独立升级
- 可独立停止

具体资源占用取决于：

- Runtime Surface 数量
- Dataset Policy
- Sampling Rate
- Export Policy

---

# Security Boundary

Atlas Agent 默认遵循客户数据边界。

包括：

- Customer-owned Runtime Data
- Local Storage
- Configurable Export
- Access Control
- Data Retention Policy

Atlas Agent 不要求持续连接外部服务。

---

# Failure Handling

当 Agent 本身发生异常时，应尽可能：

- 保持已有 Dataset 完整
- 保留 Export Metadata
- 记录 Agent Runtime Event
- 支持重新启动后继续运行

Agent 的异常不应影响机器人业务运行。

---

# Extensibility

Atlas Agent 支持扩展新的 Runtime Surface。

例如：

- Camera
- LiDAR
- IMU
- GNSS
- CAN
- Ethernet
- USB
- GPIO
- PPS
- Custom Sensor

扩展通过 Surface Adapter 完成，而无需修改 Agent 核心架构。

---

# Summary

Atlas Agent™ 是 Atlas Runtime Governance™ 的现场执行组件。

它负责：

- Runtime Observation
- Runtime Dataset Management
- Evidence Pack Generation
- Runtime Data Export

Agent 本身不参与调查分析，也不负责 Root Cause 判断。

它提供统一、稳定且可扩展的 Runtime 数据基础，为后续 Runtime Investigation 提供可靠证据来源。

---

# 下一步阅读

- Runtime Surfaces
- Runtime Datase
- Evidence Pack™
- Historical RGA™
