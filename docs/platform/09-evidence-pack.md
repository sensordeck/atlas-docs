---
title: Evidence Pack™
sidebar_label: Evidence Pack™
---

# Evidence Pack™

## Overview

Evidence Pack™（EP）是 Atlas Runtime Governance™ 的标准运行时证据包。

Evidence Pack 并不保存新的运行时数据。

它是在 Runtime Dataset 的基础上，根据指定时间范围生成的一份结构化调查证据。

Evidence Pack 是 Runtime Investigation 的统一证据输入。

---

# Runtime Evidence Architecture

```text
Runtime Dataset
        │
        ▼
Evidence Window
        │
        ▼
Evidence Pack Builder
        │
        ▼
Evidence Pack
```

Evidence Pack 始终引用 Runtime Dataset。

它不会重新采集运行时数据。

---

# Evidence Pack Components

一个标准 Evidence Pack 包括：

```text
Evidence Pack
│
├── Evidence Window
├── Runtime Timeline
├── Runtime Surface Coverage
├── Runtime Metadata
├── Event Markers
├── Dataset References
├── Integrity Information
└── Export Manifest
```

Evidence Pack 只组织调查所需证据。

它不包含调查结论。

---

# Evidence Window

Evidence Window 定义本次调查引用的时间范围。

Evidence Window 可以来自：

- Manual Time Slice
- Candidate Timeline
- Controlled Event
- Runtime Trigger

Evidence Window 是 Evidence Pack 的基础。

---

# Five-Segment Window

Atlas 使用统一的 Five-Segment Window 组织运行时证据。

```text
Pre-Guard
      │
      ▼
Baseline
      │
      ▼
Deviation
      │
      ▼
Recovery
      │
      ▼
Post-Guard
```

Five-Segment Window 为所有 Evidence Pack 提供一致的时间结构。

Window 长度可以根据策略调整。

Window 结构保持一致。

---

## Pre-Guard

记录事件发生之前较早阶段的运行状态。

主要用于观察：

- 是否已有弱异常
- 是否存在长期变化趋势
- 是否存在前置事件

---

## Baseline

记录事件发生前的正常运行状态。

Baseline 提供：

- 正常行为参考
- Runtime 对比基线
- Surface 正常状态

---

## Deviation

记录异常发生阶段。

通常包含：

- Runtime Event
- Surface Abnormality
- Runtime Change
- Observation Change

Deviation 是调查重点。

但不是唯一调查内容。

---

## Recovery

记录异常后的恢复阶段。

例如：

- Driver Restart
- Device Reconnect
- Runtime Recovery
- Recovery Failure

Recovery 有助于理解事件发展过程。

---

## Post-Guard

记录恢复后的运行状态。

主要用于观察：

- 是否恢复正常
- 是否再次出现异常
- 是否存在持续影响

---

# Runtime Timeline

Evidence Pack 保留统一 Runtime Timeline。

所有 Runtime Surface Observation 均按照统一时间轴组织。

```text
Time
────────────────────────────────────────>

Camera

LiDAR

USB

Driver

Linux Runtime

ROS Topic
```

Timeline 不负责解释事件。

它仅记录事件发生顺序。

---

# Runtime Surface Coverage

Evidence Pack 会记录参与本次证据的 Runtime Surface。

例如：

| Runtime Surface | Included |
|-----------------|----------|
| Camera | ✓ |
| LiDAR | ✓ |
| Ethernet | ✓ |
| Linux Runtime | ✓ |
| ROS Topic | ✓ |
| Power | ✗ |

Surface Coverage 用于说明证据来源范围。

它不评价调查质量。

---

# Runtime Metadata

Evidence Pack 可以引用运行时元数据。

例如：

- Device Metadata
- Runtime Metadata
- Collection Timestamp
- Deployment Metadata
- Runtime Configuration

Metadata 用于帮助理解运行环境。

不是调查结论。

---

# Event Markers

Event Marker 用于标记重要运行时事件。

例如：

- Runtime Trigger
- Controlled Event
- Device Reconnect
- Driver Restart
- Runtime Notification

Marker 用于帮助工程师浏览 Runtime Timeline。

---

# Dataset References

Evidence Pack 不复制 Runtime Dataset。

它引用 Runtime Dataset 中对应时间范围的数据。

```text
Runtime Dataset
        │
        ▼
Referenced Time Range
        │
        ▼
Evidence Pack
```

Atlas 始终保持：

> Runtime Dataset 是唯一数据来源。

---

# Integrity Information

Evidence Pack 保存完整性信息。

例如：

- Dataset Reference
- Time Range
- Window Policy
- Hash
- Manifest

Integrity Information 用于保证：

Evidence Pack 与 Runtime Dataset 的一致性。

---

# Export Manifest

Export Manifest 描述本次导出的内容。

例如：

- Included Runtime Surface
- Referenced Dataset
- Window Policy
- Export Time
- Export Mode

Manifest 不保存调查结果。

---

# Candidate Evidence Pack

一个 Runtime Dataset 可以生成多个 Candidate Evidence Pack。

例如：

```text
Runtime Dataset
        │
        ▼
Candidate Timeline
        │
        ├── EP-C01
        ├── EP-C02
        ├── EP-C03
        └── EP-C04
```

每一个 Candidate Evidence Pack：

- 使用相同 EP Schema
- 使用相同 Five-Segment Window
- 引用相同 Runtime Dataset
- 对应不同 Candidate Timeline

Candidate Evidence Pack 全部保留。

---

# Primary Evidence Pack

调查过程中，Tier 2 可以选择其中一个 Candidate Evidence Pack 作为：

```text
Primary Evidence Pack
```

Primary Evidence Pack：

- 不重新生成 Runtime Dataset
- 不修改 Five-Segment Window
- 不改变 EP Schema

仅表示本次调查主要引用的 Evidence Pack。

其它 Candidate Evidence Pack 继续保留。

---

# Evidence Pack Builder

Evidence Pack Builder 负责根据指定时间范围生成 Evidence Pack。

Builder 输入：

```text
Runtime Dataset
        +
Evidence Window
```

Builder 输出：

```text
Evidence Pack
```

Evidence Pack Builder 不负责：

- Runtime Analysis
- Root Cause
- Investigation Result
- Tier Decision

它仅负责构建统一 Evidence。

---

# Design Principles

Evidence Pack 遵循以下原则：

- 引用 Runtime Dataset
- 不复制 Runtime Dataset
- 使用统一 EP Schema
- 使用统一 Five-Segment Window
- 支持 Manual 与 Candidate 两种生成方式
- Candidate EP 与 Primary EP 共用同一 Builder
- Candidate EP 全部保留
- Primary EP 不改变其它 Candidate EP

---

# Runtime Dataset vs Evidence Pack

Runtime Dataset：

- 持续存在
- 持续增长
- Rolling Buffer 管理
- 保存完整 Observation

Evidence Pack：

- 引用 Dataset
- 围绕指定时间范围组织
- 用于 Investigation
- 生命周期独立于 Dataset

Runtime Dataset 是数据基础。

Evidence Pack 是调查证据。

---

# Summary

Evidence Pack™ 是 Atlas Runtime Investigation 的统一证据对象。

它引用 Runtime Dataset，并使用统一 Five-Segment Window 与 EP Schema，将指定时间范围组织成标准调查证据。

无论来自 Manual Time Slice 还是 Candidate Timeline，所有 Evidence Pack 都遵循相同的数据模型、构建流程和证据结构，为后续 Runtime Investigation 提供一致的调查入口。

---

# 下一步阅读

- Historical RGA™
- Investigation Context™
- Investigation Tier Candidate™
- Sensor Engagement Pack™
