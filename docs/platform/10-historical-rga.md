---
title: Historical Runtime Governance Asset™
sidebar_label: Historical RGA™
---

# Historical Runtime Governance Asset™

## Overview

Historical Runtime Governance Asset™（Historical RGA，简称 RGA）是 Atlas Runtime Governance™ 的组织运行时知识资产。

每一次完成的 Runtime Investigation，都可以将获得授权的调查成果沉淀为 Historical RGA，供未来调查复用。

Historical RGA 保存的是调查知识，而不是运行时数据。

它回答的是：

> **"过去，我们是如何调查类似 Runtime Execution Failure（REF）的？"**

而不是：

> **"当时发生了什么？"**

---

# Historical RGA Architecture

```text
Completed Investigation
          │
          ▼
 Investigation Result
          │
          ▼
 Lesson Learned
          │
          ▼
 Create Historical RGA
          │
          ▼
 Historical Repository
          │
          ▼
 Future Runtime Investigation
```

Historical RGA 不参与 Runtime Observation。

它属于 Runtime Investigation 完成后的知识沉淀。

---

# Historical RGA Domains

Atlas 支持多个 Historical RGA Knowledge Domain。

目前主要包括两类。

```text
Historical Runtime Governance Asset
│
├── OEM Historical RGA
└── Sensor Historical RGA
```

两者采用相同的数据模型。

区别在于调查边界和知识范围。

---

## OEM Historical RGA

OEM Historical RGA 保存 OEM Runtime Investigation 的历史经验。

通常涉及多个 Runtime Surface。

例如：

- Camera
- LiDAR
- IMU
- USB
- Ethernet
- CAN
- Linux Runtime
- ROS Runtime
- Multiple Sensor Interaction

OEM Historical RGA 更关注：

- Runtime Execution Failure
- Cross-system Investigation
- Multiple Runtime Surface Correlation
- OEM Investigation Workflow
- OEM Lesson Learned

典型案例：

```text
Unexpected Stop

↓

LiDAR
+
Ethernet
+
Linux Driver
+
ROS Topic
```

---

## Sensor Historical RGA

Sensor Historical RGA 保存 Sensor Manufacturer 或 FAE 的历史调查经验。

调查对象聚焦于 Sensor Runtime。

例如：

- Camera Runtime
- LiDAR Runtime
- IMU Runtime
- Driver Runtime
- Sensor Interface
- Firmware Runtime

同一个 Sensor 问题可能来自不同部署环境。

例如：

- Restaurant
- Factory
- Warehouse
- Hospital
- Hotel

Sensor Historical RGA 沉淀的是：

> 不同运行环境下，同一 Sensor 产品的调查经验。

---

# Shared Runtime Governance Model

OEM Historical RGA 与 Sensor Historical RGA 使用统一的数据模型。

一个 Historical RGA 可以包含：

```text
Historical RGA
│
├── Investigation Summary
├── Runtime Pattern
├── Investigation Path
├── Excluded Path
├── Investigation Result (IR)
├── Lesson Learned (LL)
├── Runtime Surface References
├── Evidence References
├── Reuse Metadata
└── Authorization Metadata
```

Historical RGA 不保存 Runtime Dataset。

Evidence 始终通过 Evidence Pack 引用。

---

# Investigation Knowledge

Historical RGA 保存的是调查知识。

包括：

## Runtime Pattern

例如：

- Camera Frame Drop
- LiDAR Packet Loss
- USB Disconnect
- Driver Restart
- Runtime Timeout

Pattern 用于帮助未来建立调查方向。

---

## Investigation Path

记录曾经执行过的调查步骤。

例如：

```text
Verify Connection
Review Timeline
Inspect Driver
Compare Historical Pattern
```

---

## Excluded Path

记录已经验证无关的方向。

例如：

- Power Normal
- Ethernet Stable
- Driver Active

避免未来重复排查。

---

## Investigation Result (IR)

引用 Investigation Result。

保持原始工程记录。

---

## Lesson Learned (LL)

引用 Lesson Learned。

沉淀可复用工程经验。

---

# Historical Recall

新的 Runtime Investigation 可以检索 Historical RGA。

```text
Current REF
      │
      ▼
Historical Recall
      │
      ▼
Candidate Historical RGA
```

Recall 的目标：

- 提供调查入口
- 提供 Runtime Pattern
- 提供 Investigation Path
- 提供 Lesson Learned

Atlas 不自动生成调查结论。

---

# Partial Match

Historical Recall 支持 Partial Match。

即使：

- Robot 不同
- Sensor 不同
- Deployment 不同
- Software Version 不同

Historical RGA 仍然可能具有参考价值。

Atlas 始终遵循：

> Partial Match 优先于完全不召回。

---

# Why Retrieved

每一次 Recall 都记录：

```text
why_retrieved
```

例如：

- Similar Runtime Pattern
- Similar Runtime Surface
- Similar Investigation Path

帮助工程师理解：

为什么推荐查看这份 Historical RGA。

---

# Historical Repository

每个组织维护自己的 Historical Repository。

```text
OEM
   │
   └── OEM Historical RGA Repository

Sensor Manufacturer
   │
   └── Sensor Historical RGA Repository
```

Atlas 不要求双方共享 Repository。

每个组织拥有：

- 独立 Repository
- 独立权限
- 独立生命周期

---

# Cross-domain Collaboration

当 OEM Runtime Investigation 涉及 Sensor Candidate 时：

```text
OEM Investigation
        │
        ▼
OEM Historical Recall
        │
        ▼
Sensor Engagement Pack
        │
        ▼
Sensor Historical Recall
        │
        ▼
Sensor Investigation
```

OEM 检索 OEM Historical RGA。

Sensor Manufacturer 检索 Sensor Historical RGA。

双方共享的是：

- Evidence Pack Reference
- Investigation Context
- Sensor Engagement Pack

而不是共享整个 Historical Repository。

---

# Design Principles

Historical RGA 遵循以下原则：

- 保存调查知识，而不是 Runtime Dataset
- 引用 Evidence Pack，而不是复制 Evidence
- OEM 与 Sensor 使用统一 Schema
- OEM 与 Sensor 拥有独立 Repository
- 支持 Partial Match
- 每次 Recall 提供 why_retrieved
- 不自动确认 Root Cause
- 不自动复制历史结论
- 尊重客户授权边界

---

# Historical RGA vs Evidence Pack

Evidence Pack 回答：

> 当时发生了什么？

Historical RGA 回答：

> 过去类似问题是如何调查的？

Evidence Pack 保存运行时证据。

Historical RGA 保存调查知识。

两者共同构成 Runtime Investigation 的基础。

---

# Summary

Historical Runtime Governance Asset™ 是 Atlas Runtime Governance™ 的组织知识资产。

OEM 与 Sensor Manufacturer 可以分别维护自己的 Historical RGA Repository，在统一的数据模型下沉淀 Investigation Pattern、IR、LL 和调查经验。

未来的 Runtime Investigation 不再从零开始，而是从组织长期积累的运行时知识开始。

---

# 下一步阅读

- Investigation Context
- Investigation Tier Candidate
- Sensor Engagement Pack™
- Assist Vault™
