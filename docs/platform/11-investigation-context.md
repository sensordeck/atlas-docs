---
title: Investigation Context™
sidebar_label: Investigation Context™
---

# Investigation Context™

## Overview

Investigation Context™ 是 Atlas Runtime Governance™ 中统一的调查上下文对象。

它将 Runtime Investigation 所需的证据、历史知识和调查信息组织成一个完整的调查视图，使工程师无需在多个系统、多个日志和多个调查记录之间来回切换。

Investigation Context 不产生新的运行时数据，也不生成调查结论。

它负责组织调查信息。

---

# Why Investigation Context?

一次 Runtime Investigation 往往涉及多个独立来源。

例如：

- REF Ticket
- Evidence Pack
- Runtime Timeline
- Historical RGA
- Runtime Surface Coverage
- Investigation Questions

如果这些信息彼此独立，工程师需要不断切换不同系统。

Investigation Context 将它们组织为统一入口。

---

# Investigation Context Architecture

```text
REF Ticket
      │
      ├──────── Evidence Pack
      │
      ├──────── Historical RGA
      │
      ├──────── Runtime Timeline
      │
      ├──────── Runtime Surface Coverage
      │
      └──────── Investigation Metadata
                 │
                 ▼
        Investigation Context
```

Investigation Context 是调查对象。

不是调查结果。

---

# Investigation Context Components

一个 Investigation Context 可以包括：

```text
Investigation Context
│
├── REF Information
├── Evidence Pack References
├── Runtime Timeline
├── Runtime Surface Coverage
├── Historical RGA Candidates
├── Candidate Investigation Paths
├── Investigation Questions
├── Runtime Metadata
└── Context Metadata
```

所有内容均为引用或组织。

不复制 Runtime Dataset。

---

# REF Information

记录本次调查的基础信息。

例如：

- REF Identifier
- Incident Summary
- Incident Type
- Severity
- Deployment Environment
- Reported Time
- Admission Information

REF Information 用于建立调查背景。

---

# Evidence Pack References

Investigation Context 引用一个或多个 Evidence Pack。

例如：

```text
Investigation Context
        │
        ├── Primary Evidence Pack
        ├── Candidate EP-C01
        └── Candidate EP-C02
```

Evidence Pack 保持独立生命周期。

Context 不复制 Evidence。

---

# Runtime Timeline

Investigation Context 引用 Runtime Timeline。

Timeline 用于帮助工程师理解事件发展顺序。

例如：

```text
Pre-Guard
      ↓
Baseline
      ↓
Deviation
      ↓
Recovery
      ↓
Post-Guard
```

Timeline 本身不解释事件。

---

# Runtime Surface Coverage

Investigation Context 可以引用 Runtime Surface Coverage。

例如：

| Runtime Surface | Coverage |
|-----------------|----------|
| Camera | ✓ |
| LiDAR | ✓ |
| Ethernet | ✓ |
| Linux Runtime | ✓ |
| ROS Topic | ✓ |
| Power | ✗ |

Surface Coverage 用于说明证据覆盖范围。

不表示问题已经定位。

---

# Historical RGA Candidates

Investigation Context 可以包含 Historical Recall 的结果。

例如：

```text
Historical RGA
        │
        ├── Strong Candidate
        ├── Partial Candidate
        └── Weak Candidate
```

Context 保存的是候选结果。

不是调查结论。

---

# Candidate Investigation Paths

Investigation Context 可以引用多个推荐调查路径。

例如：

```text
Path A
Review Ethernet

Path B
Review Driver Runtime

Path C
Review Sensor Runtime
```

Context 可以提供多个 Investigation Path。

最终由工程师选择。

---

# Investigation Questions

Investigation Context 可以保存调查过程中需要回答的问题。

例如：

- 是否发生 Driver Restart？
- Runtime Timeline 是否连续？
- 是否出现 Runtime Timeout？
- 是否已有 Historical Pattern？

这些问题帮助调查聚焦。

不是自动分析结果。

---

# Runtime Metadata

Context 可以引用与调查相关的运行时元数据。

例如：

- Runtime Configuration
- Deployment Metadata
- Runtime Version
- Runtime Environment
- Export Metadata

Metadata 用于帮助理解调查背景。

---

# Context Metadata

Context 本身可以保存元数据。

例如：

- Context Identifier
- Creation Time
- Referenced Evidence Packs
- Referenced Historical RGA
- Context Version

用于管理 Context 生命周期。

---

# Context Reuse

同一个 Investigation Context 可以服务多个调查参与者。

例如：

```text
Investigation Context
          │
          ├── OEM Tier 2
          ├── OEM Tier 3
          └── Sensor Manufacturer FAE
```

所有角色引用同一个 Context。

避免重复组织调查信息。

---

# Context Evolution

随着 Investigation 推进，Context 可以持续更新。

例如：

```text
Context v1
      │
      ▼
新增 Historical RGA
      │
      ▼
Context v2
      │
      ▼
新增 Investigation Path
      │
      ▼
Context v3
```

Context 是持续演进的调查对象。

不是一次性生成的文档。

---

# Investigation Context vs Evidence Pack

Evidence Pack 保存：

- Runtime Evidence
- Runtime Timeline
- Runtime Surface Observation

Investigation Context 保存：

- 调查引用关系
- 历史知识引用
- Investigation Path
- Investigation Questions

Evidence Pack 回答：

> 发生了什么？

Investigation Context 回答：

> 我们现在基于哪些证据和知识开展调查？

---

# Investigation Context vs Historical RGA

Historical RGA 保存：

- 历史调查知识
- IR
- LL
- Investigation Pattern

Investigation Context 保存：

- 当前调查
- 当前引用
- 当前 Investigation Path
- 当前 Historical Recall

Historical RGA 是知识资产。

Investigation Context 是当前调查工作空间。

---

# Design Principles

Investigation Context 遵循以下原则：

- 不保存 Runtime Dataset
- 不复制 Evidence Pack
- 不复制 Historical RGA
- 统一组织调查对象
- 支持多个 Evidence Pack
- 支持多个 Historical RGA
- 支持持续演进
- 不自动生成 Root Cause
- 不自动生成 Investigation Result

---

# Summary

Investigation Context™ 是 Runtime Investigation 的统一调查上下文。

它将 REF、Evidence Pack、Historical RGA、Runtime Timeline 和调查信息组织成一个完整的调查视图，使 OEM 与 Sensor Manufacturer 能够围绕同一调查上下文协同工作，而无需重复整理运行时证据或历史知识。

---

# 下一步阅读

- Investigation Tier Candidate™
- Sensor Engagement Pack™
- Assist Vault™
