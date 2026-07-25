---
title: Why Atlas
sidebar_label: Why Atlas
---

# Why Atlas?

## 一个真实的问题

机器人已经广泛应用于餐厅、酒店、医院、仓库和工厂。

当机器人发生异常时，工程团队通常都会问同一个问题：

> **到底发生了什么？**

然而，大多数团队面对的是大量运行时数据，而不是清晰的调查线索。

例如：

- ROS Log
- ROS Bag
- Sensor Raw Data
- Linux Kernel Log
- Driver Log
- Network Packet
- CPU / Memory
- Camera Images
- LiDAR Point Clouds

这些数据往往达到数 GB 甚至数十 GB。

真正困难的不是数据不足，而是如何在有限时间内找到真正与事件相关的证据。

---

# 传统调查方式

大多数运行时问题仍然依赖人工排查：

```text
收到客户反馈
        │
        ▼
收集日志
        │
        ▼
人工分析
        │
        ▼
反复沟通
        │
        ▼
定位问题
```

这种方式通常存在几个问题：

- 数据来源分散
- 不同工程师调查方法不同
- 调查时间长
- 历史经验难以复用
- 相同问题不断重复出现

调查结束后，知识往往停留在个人，而没有沉淀为组织资产。

---

# Atlas 的解决方案

Atlas 并不是新的日志工具。

Atlas 建立了一套标准化的运行时调查流程。

```text
Runtime Event
        │
        ▼
Atlas Agent
        │
        ▼
Evidence Pack
        │
        ▼
Historical RGA Recall
        │
        ▼
Investigation
        │
        ▼
Investigation Result (IR)
        │
        ▼
Lesson Learned (LL)
        │
        ▼
Knowledge Reuse
```

Atlas 将分散的数据组织成统一的调查证据，并将调查结果持续沉淀为组织能力。

---

# Atlas 带来的改变

传统模式：

```text
事故
    ↓
调查
    ↓
结束
```

Atlas 模式：

```text
事故
    ↓
调查
    ↓
IR
    ↓
LL
    ↓
Historical RGA
    ↓
下一次调查直接复用
```

每一次调查，都会提升组织未来的调查效率。

---

# 为什么历史经验重要？

许多运行时问题都会重复发生。

例如：

- USB 断连
- Ethernet 丢包
- Camera Frame Drop
- LiDAR Timeout
- PPS Drift
- CPU Overload
- Memory Pressure
- Driver Crash

如果每一次都重新开始调查，工程团队会不断重复相同工作。

Atlas 会优先召回 Historical RGA，帮助工程师快速判断是否存在相似案例，从已有经验开始调查，而不是从零开始。

---

# Atlas 的价值

## 对 CTO

- 建立统一的运行时治理体系
- 降低调查成本
- 积累组织知识资产
- 提高工程团队效率

---

## 对研发工程师

- 更快定位问题
- 减少重复排查
- 使用统一调查流程
- 更容易复用历史经验

---

## 对 Sensor Manufacturer

- 使用统一 Evidence Pack 与 OEM 协作
- 提高跨团队调查效率
- 降低沟通成本

---

## 对 OEM

- 建立标准 Runtime Investigation Workflow
- 缩短 Runtime Execution Failure（REF）调查时间
- 提高产品稳定性

---

# Atlas 的定位

Atlas 不是：

- 日志分析工具
- AI 自动诊断工具
- ROS 替代方案

Atlas 是机器人行业的 **Runtime Governance Infrastructure（运行时治理基础设施）**。

它连接运行时证据、调查流程和组织知识，使每一次调查都成为未来能力的一部分。

---

# Summary

Atlas 的价值并不是产生更多数据。

Atlas 的价值在于：

- 组织运行时证据
- 标准化调查流程
- 复用历史调查经验
- 持续积累组织知识

**每一次 Runtime Investigation，都让下一次调查从历史开始，而不是从零开始。**

---

# 下一步阅读

- Runtime Governance Principle
