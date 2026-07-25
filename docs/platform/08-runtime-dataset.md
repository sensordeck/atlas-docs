---
title: Runtime Dataset™
sidebar_label: Runtime Dataset™
---

# Runtime Dataset™

## Overview

Runtime Dataset™ 是 Atlas Runtime Governance™ 的统一运行时数据集合。

Atlas Agent 持续将 Runtime Observation 写入 Runtime Dataset，所有后续调查均基于这同一份 Dataset 完成。

Runtime Dataset 不是日志文件，也不是 Evidence Pack。

它是 Runtime Evidence 的原始数据基础。

---

# Runtime Dataset Architecture

```text
Runtime Surface
        │
        ▼
Runtime Observation
        │
        ▼
Runtime Dataset
        │
        ├──────── Candidate Timeline
        │
        ├──────── Manual Time Slice
        │
        ├──────── Candidate Evidence Pack
        │
        └──────── Primary Evidence Pack
```

Atlas 始终维护一份 Runtime Dataset。

不同调查模式共享同一数据源。

---

# Runtime Dataset Lifecycle

Runtime Dataset 生命周期包括：

```text
Observe
    ↓
Persist
    ↓
Rolling Buffer
    ↓
Time-range Export
```

Atlas 不会因为不同 Investigation Workflow 建立不同 Dataset。

整个系统始终只有一份 Runtime Dataset 生命周期。

---

## Observe

Atlas Agent 持续观察 Runtime Surface。

Observation 可以来自：

- Sensor Runtime
- Driver Runtime
- Linux Runtime
- Power
- Bus
- ROS Runtime
- Custom Runtime Surface

所有 Observation 均进入 Runtime Dataset。

---

## Persist

Persist 将 Observation 持续写入 Runtime Dataset。

Persist 不负责分析事件。

它负责确保 Runtime Evidence 能够被后续 Investigation 引用。

---

## Rolling Buffer

Runtime Dataset 默认采用 Rolling Buffer。

超过保留范围后，最旧数据按照策略循环覆盖。

Retention Policy 可配置：

- rolling_buffer_hours
- max_storage_size
- overwrite_policy
- dataset_lock_on_ref

默认建议：

| Policy | Default |
|---------|----------|
| rolling_buffer_hours | 48 hours |
| overwrite_policy | circular |
| dataset_lock_on_ref | enabled |

OEM 可以根据部署需求调整策略。

---

## Dataset Lock

当 REF 进入正式调查后，Atlas 会锁定对应时间范围。

锁定期间：

- 不参与 Rolling Buffer
- 不允许覆盖
- 保持 Runtime Evidence 完整

直到 Evidence Pack 导出完成后解除锁定。

Dataset Lock 只影响对应时间段。

---

## Time-range Export

Runtime Dataset 支持按时间范围导出。

导出可以用于：

- Manual Investigation
- Candidate Investigation
- Evidence Pack Generation
- Historical Archive

Export 不会修改 Runtime Dataset。

---

# Runtime Dataset Organization

Runtime Dataset 由多个 Runtime Surface Observation 组成。

例如：

```text
Runtime Dataset
│
├── Camera Observation
├── LiDAR Observation
├── IMU Observation
├── Power Observation
├── Ethernet Observation
├── USB Observation
├── Driver Observation
├── Linux Runtime Observation
└── ROS Topic Observation
```

所有 Observation 使用统一时间轴组织。

---

# Runtime Timeline

Runtime Dataset 中所有 Observation 均对齐至统一 Runtime Timeline。

```text
Time
────────────────────────────────────>

Camera

LiDAR

Ethernet

Driver

Linux Runtime

ROS Topic
```

统一时间轴便于：

- Cross-stream Correlation
- Evidence Window Generation
- Runtime Investigation

---

# Runtime Dataset Consumption

Runtime Dataset 可以被不同模块消费。

```text
Runtime Dataset
        │
        ├──────── Manual Time Slice
        │
        ├──────── Candidate Timeline
        │
        ├──────── Candidate Evidence Pack
        │
        ├──────── Primary Evidence Pack
        │
        └──────── Runtime Export
```

所有模块共享同一份 Dataset。

不会复制 Runtime Dataset。

---

# Manual Time Slice

当 Tier 1 已知事故约莫时间时。

Atlas 根据指定时间范围：

```text
Approximate REF Time
        │
        ▼
Time Slice
        │
        ▼
Evidence Pack
```

无需重新采集数据。

---

# Candidate Timeline

部分事故无法提供准确发生时间。

例如：

> "机器人昨天下午曾经停过。"

Atlas 可以扫描 Runtime Dataset。

识别值得进一步调查的 Candidate Timeline。

Candidate Timeline：

- 提供调查入口
- 提供候选时间段
- 不确认 Root Cause
- 不确认因果关系

---

# Candidate Evidence Pack

每一个 Candidate Timeline 都可以生成对应 Candidate Evidence Pack。

例如：

```text
Candidate Timeline
        │
        ├── EP-C01
        ├── EP-C02
        ├── EP-C03
        └── EP-C04
```

Candidate Evidence Pack 全部保留。

Tier 2 工程师可进一步：

- Review
- Compare
- Merge
- Select Primary Evidence Pack

Atlas 不自动删除 Candidate Evidence Pack。

---

# Primary Evidence Pack

调查过程中，Tier 2 可以选择：

```text
Primary Evidence Pack
```

作为正式 Investigation Evidence。

Primary Evidence Pack：

- 引用 Runtime Dataset
- 使用 Five-Segment Window
- 保留完整 Runtime Timeline

Primary Evidence Pack 不影响 Candidate Evidence Pack 的保存。

---

# Runtime Dataset Principles

Runtime Dataset 遵循以下原则：

- 全系统只有一份 Runtime Dataset
- 所有调查共享同一 Dataset
- Dataset 生命周期统一
- Runtime Observation 不重复采集
- Candidate Timeline 不改变 Dataset
- Evidence Pack 引用 Dataset
- Export 不复制 Dataset

---

# Runtime Dataset vs Evidence Pack

Runtime Dataset：

- 持续存在
- 持续增长
- Rolling Buffer 管理
- 保存完整 Runtime Observation

Evidence Pack：

- 针对单一 REF
- 基于 Runtime Dataset 生成
- 使用 Five-Segment Window
- 用于 Runtime Investigation

Evidence Pack 来源于 Runtime Dataset。

Runtime Dataset 不等于 Evidence Pack。

---

# Runtime Dataset Boundary

Runtime Dataset 仅保存运行时数据。

它不包含：

- Root Cause
- Investigation Result
- Lesson Learned
- Historical RGA
- Investigation Context

这些调查资产属于 Runtime Investigation™。

---

# Summary

Runtime Dataset™ 是 Atlas Runtime Governance™ 唯一的运行时数据基础。

Atlas Agent 持续将 Runtime Observation 写入 Runtime Dataset，并通过统一生命周期管理数据保留、锁定与导出。

所有 Investigation Workflow，包括 Manual Time Slice、Candidate Timeline、Candidate Evidence Pack 和 Primary Evidence Pack，均共享同一份 Runtime Dataset，而不会建立独立的数据生命周期。

---

# 下一步阅读

- Evidence Pack™
- Historical RGA™
- Investigation Context™
