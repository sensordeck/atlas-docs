---
title: Sensor Engagement Pack™
sidebar_label: Sensor Engagement Pack™
---

# Sensor Engagement Pack™

## Overview

Sensor Engagement Pack™ (EGP) 是 Atlas Runtime Governance™ 在 OEM 与 Sensor Manufacturer 之间建立调查协作的标准交付对象。

当 OEM Runtime Investigation 认为事件可能涉及某个 Sensor 时（调查对象候选 / Sensor Candidate)，OEM 可以生成一个 Sensor Engagement Pack，并将其发送给对应的 Sensor FAE（Field Application Engineer）。

EGP 的目标不是重新生成证据，而是帮助 Sensor FAE 快速理解调查背景，并在自己的知识域内开展 Sensor Investigation。

---

# Why Sensor Engagement Pack?

机器人运行时事故通常涉及多个组织。

例如：

- OEM
- Camera Manufacturer
- LiDAR Manufacturer
- IMU Manufacturer

OEM 已经拥有自己的 Runtime Investigation。

但 Sensor Manufacturer 无法直接访问 OEM 内部调查系统。

Sensor Engagement Pack 提供一个标准协作接口，使双方能够共享调查上下文，而无需共享整个内部系统。

---

# OEM ↔ Sensor Investigation Workflow

```text
OEM Runtime REF

        │

        ▼

OEM Runtime Investigation

        │

        ▼

OEM REF Ticket
(Status: Pending Sensor Investigation)

        │

        ▼

Generate Sensor Engagement Pack

        │

        ▼

Sensor Manufacturer

        │

        ▼

Create Sensor REF Ticket

        │

        ▼

Sensor Investigation

        │

        ▼

Sensor RGA (IR + LL)

        │

        ▼

Sensor REF Ticket Closed

        │

        ▼

Return Sensor Response

        │

        ▼

OEM Investigation Continues

        │

        ▼

OEM REF Ticket Closed
```

OEM 与 Sensor Manufacturer 分别维护自己的 Investigation Workflow。

双方通过 Sensor Engagement Pack 建立协作。

---

# Investigation Ownership

整个调查过程中，双方保持独立调查权限。

OEM 负责：

- OEM REF Ticket
- Runtime Evidence Pack
- Runtime Investigation
- Historical OEM RGA (IR + LL)
- OEM Ticket Closure

Sensor Manufacturer 负责：

- Sensor REF Ticket
- Sensor Investigation
- Sensor Historical RGA  (IR + LL)
- Sensor Ticket Closure

双方互不修改对方调查记录。

---

# Sensor Engagement Pack Architecture

```text
OEM Investigation
        │
        ▼
Sensor Engagement Pack
        │
        ▼
Sensor Investigation
```

EGP 是调查上下文的交换对象。

不是新的 Evidence Pack。

---

# What Does a Sensor Engagement Pack Contain?

一个标准 EGP 可以包含：

```text
Sensor Engagement Pack
│
├── OEM REF Information
├── Investigation Context
├── Evidence Pack References
├── Runtime Surface Scope
├── Historical Recall Summary
├── Investigation Questions
├── Requested Sensor Scope
└── Collaboration Metadata
```

EGP 不复制 Runtime Dataset。

所有 Runtime Evidence 均通过 Evidence Pack Reference 引用。

---

# OEM REF Information

EGP 可以包含：

- REF Identifier
- Incident Summary
- Incident Time
- Deployment Environment
- Incident Type
- Severity

帮助 Sensor FAE 快速建立调查背景。

---

# Investigation Context

EGP 引用当前 Investigation Context。

包括：

- Runtime Timeline
- Runtime Surface Coverage
- Historical Recall
- Investigation Notes

Sensor FAE 可以直接基于 Context 开展调查。

---

# Evidence Pack References

EGP 引用 OEM 已生成的 Evidence Pack。

```text
Sensor Engagement Pack
        │
        ▼
Primary Evidence Pack
```

Sensor FAE 不需要重新生成 Evidence Pack。

所有调查均基于同一份 Runtime Evidence。

---

# Runtime Surface Scope

OEM 可以明确说明本次希望 Sensor FAE 调查的范围。

例如：

- Camera Runtime
- LiDAR Runtime
- IMU Runtime
- Driver Runtime
- Sensor Communication

Scope 用于聚焦调查。

---

# Historical Recall Summary

OEM 可以提供当前 Historical Recall 的摘要。

例如：

- Similar Runtime Pattern
- Previous Investigation
- Similar Runtime Behaviour

帮助 Sensor FAE 判断是否存在类似历史经验。

---

# Investigation Questions

OEM 可以提出需要 Sensor FAE 协助回答的问题。

例如：

- 是否属于已知 Sensor Runtime Pattern？
- 是否建议检查 Firmware？
- 是否建议进一步采集 Runtime Observation？

问题用于指导双方协作。

---

# Requested Sensor Scope

OEM 可以明确本次协作范围。

例如：

- Runtime Behaviour Review
- Driver Review
- Interface Review
- Firmware Review

EGP 不要求 Sensor Manufacturer 调查整个机器人系统。

---

# Sensor Investigation

收到 EGP 后，Sensor Manufacturer 建立自己的 Sensor REF Ticket。

```text
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
```

Sensor Investigation 可以引用：

- Sensor Historical RGA
- Sensor Runtime Experience
- Sensor Deployment Knowledge

但不修改 OEM Investigation。

---

# Sensor Response

Sensor Investigation 完成后，可以形成标准调查结果。

例如：

```text
Sensor Investigation Result (IR)

Lesson Learned (LL)

Recommended Actions

Response Summary
```

这些结果返回 OEM。

供 OEM Runtime Investigation 继续使用。

---

# Ticket Closure

Sensor Manufacturer 与 OEM 分别关闭各自 Ticket。

```text
Sensor REF Ticket

↓

Closed

↓

OEM REF Ticket

↓

Closed
```

Sensor Ticket Closure 不自动关闭 OEM REF。

OEM 根据完整调查结果决定最终 Closure。

---

# Collaboration Boundary

Sensor Engagement Pack 仅用于调查协作。

Atlas 不要求：

- 共享完整 Runtime Dataset
- 共享 Historical Repository
- 共享内部调查系统

双方仅共享完成调查所需的信息。

---

# Design Principles

Sensor Engagement Pack 遵循以下原则：

- OEM 与 Sensor 保持独立调查流程
- 一个 OEM REF 可以对应多个 Sensor REF
- EGP 引用已有 Evidence Pack，不生成新的 Evidence
- Sensor Investigation 使用自己的 Historical RGA
- OEM Investigation 使用自己的 Historical RGA
- 双方分别关闭各自 Investigation Ticket
- OEM 最终决定 OEM REF Ticket Closure
- 尊重双方数据和知识产权边界

---

# Sensor Engagement Pack vs Evidence Pack

Evidence Pack 保存：

- Runtime Evidence
- Runtime Timeline
- Runtime Dataset References

Sensor Engagement Pack 保存：

- Investigation Context
- Collaboration Scope
- Evidence References
- Investigation Questions

Evidence Pack 是运行时证据。

Sensor Engagement Pack 是 OEM 与 Sensor 之间的调查协作对象。

---

# Summary

Sensor Engagement Pack™ 是 OEM 与 Sensor Manufacturer 之间的标准 Runtime Investigation 协作对象。

它引用 OEM 已建立的 Investigation Context 和 Evidence Pack，将调查背景、协作范围和问题传递给 Sensor FAE。Sensor Manufacturer 在自己的知识域内创建 Sensor REF Ticket、完成 Sensor Investigation，并返回 IR、LL 和调查建议。双方分别维护各自的调查流程和 Historical RGA，最终由 OEM 完成整个 Runtime REF 的闭环调查与 Ticket Closure。

---

# 下一步阅读

- Assist Vault™
- CTO Runtime Governance Dashboard™
