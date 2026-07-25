---
title: Runtime Governance Philosophy
sidebar_label: Runtime Governance Philosophy
---

# Runtime Governance Philosophy

## 什么是 Runtime Governance？

Runtime Governance（运行时治理）是一套持续观察、组织运行时证据、复用历史调查经验的工程体系。

它的目标不是替代工程师，而是让每一次运行时事件（Runtime Execution Failure，REF）的调查更加快速、标准、可复用。

Atlas 将运行时调查从一次性的工程活动，转变为持续积累的组织能力。

---

# Atlas 的使命

机器人每天都在不同环境中运行。

真正困难的不是收集数据，而是在大量运行时数据中快速找到与事件相关的证据。

Atlas 的使命是：

> **将海量运行时数据，组织成可调查、可复用、可持续积累的工程资产。**

---

# Atlas 的第一性原则

Atlas 的设计遵循以下五项原则。

## 1. Evidence Before Opinion

**先证据，后结论。**

任何调查都应建立在运行时证据基础上，而不是经验猜测。

---

## 2. History Before Reinvention

**先历史，再重新开始。**

每一次新的 REF，都应优先召回 Historical RGA。

工程团队应从已有经验开始调查，而不是重复过去已经完成的工作。

---

## 3. Engineers Make Decisions

**Atlas 不替代工程师。**

Atlas 负责：

- 观察
- 保存
- 组织
- 检索
- 关联

最终调查结果始终由工程师确认。

---

## 4. Organizational Knowledge Compounds

每一次调查完成后：

- Investigation Result（IR）
- Lesson Learned（LL）
- Runtime Governance Asset（RGA）

都会成为组织资产。

下一次类似事件发生时，可以直接复用。

组织能力会随着每一次调查不断积累。

---

## 5. Standardized Investigation

不同工程师应采用相同的调查流程。

Atlas 将调查过程标准化，包括：

- Runtime Dataset
- Evidence Pack
- Historical RGA Recall
- Investigation Context
- Investigation Result
- Lesson Learned
- Ticket Closure

---

# Atlas 的角色

Atlas 是运行时治理基础设施。

Atlas 不负责机器人业务逻辑，也不负责算法开发。

Atlas 位于 Sensor 与 Application 之间。

```text
Sensor
    │
Power / Bus
    │
Linux Runtime
    │
Driver
    │
ROS Topic
    │
Application
```

Atlas 负责组织这一运行时边界上的证据。

---

# Atlas 不做什么

Atlas 不负责：

- Root Cause Confirmation（最终根因确认）
- Liability Assignment（责任归属）
- AI 自动诊断
- Robot Navigation
- Motion Control
- SLAM
- AI Algorithm

这些工作仍由工程团队完成。

---

# Atlas 的价值

Atlas 带来的价值包括：

- 更快定位运行时问题
- 减少重复调查
- 建立组织知识库
- 提高跨团队协作效率
- 将一次调查沉淀为长期资产

Atlas 的目标不是减少工程师，而是让工程师把更多时间投入到产品创新，而不是重复排查。

---

# Philosophy Summary

Atlas 坚持以下原则：

- Evidence before Opinion
- History before Reinvention
- Engineers Make Decisions
- Organizational Knowledge Compounds
- Standardized Investigation

**每一次运行时调查，都应该成为下一次调查的起点，而不是终点。**

---

# 下一步阅读

- Why Atlas
- Runtime Governance Principle
