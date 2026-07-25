---
id: intro
title: Atlas Runtime Governance
sidebar_label: Atlas Runtime Governance
slug: /
description: Atlas 面向机器人 OEM 与传感器厂商，建立跨 SKU、跨平台、跨场景、可持续复用的运行时证据、调查与组织记忆基础设施。
hide_title: true
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Atlas Runtime Governance

**机器人运行时智能与调查基础设施**

Atlas 天枢面向机器人 OEM 与传感器厂商，持续观察 Sensor 到 SBC 之间的运行时环境，把原本分散、短暂、难以复用的数据，转化为可调查证据、可复用知识和可持续增长的组织能力。

> **From before deployment to after deployment.**  
> **Observe. Understand. Investigate. Improve. Reuse.**

Atlas 不替代 ROS 2、传感器驱动、Fleet Management、工单系统或现有研发工具链。

Atlas 建立的是机器人行业此前缺失的一层：

> **Runtime Sensor Governance Infrastructure™**

![Atlas Runtime Governance](/img/11.png)

---

## 机器人进入真实世界之后，问题才真正开始

机器人上线后，会持续面对研发环境中难以完整覆盖的运行时变化：

- 不同光照、反射、遮挡、温度、振动与湿度条件
- 不同电源质量、线束状态、总线负载与通信环境
- 不同 Linux、Driver、Firmware、ROS 与 Host Platform 组合
- 不同 Robot SKU、Sensor SKU 与部署场景
- 不同客户现场的操作方式、维护条件与系统负载

同一款机器人、同一款传感器、同一套软件，在不同现场可能表现出完全不同的运行时行为。

真正昂贵的，不只是一次运行时执行失效。

真正昂贵的是：

> **每一次 Runtime Execution Failure（REF），都重新收集日志、重新解释现场、重新寻找证据、重新排查。**

调查完成后，经验又散落在工单、邮件、聊天记录、个人电脑和工程师记忆中。

下一次相似事件发生，组织再次从零开始。

---

## Atlas 把一次性排查，变成可持续治理

Atlas 将运行时事件组织为一条完整的证据与知识链：

```text
Atlas Agent
    ↓
Observe
    ↓
Persist
    ↓
Retain
    ↓
Evidence Pack (证据包)
    ↓
Historical RGA Recall (历史排查案例召回）
    ↓
OEM / Sensor Investigation
    ↓
IR  (Investigation Result 调查结果) / LL (Lesson Learned 经验沉淀）
    ↓
Assist Vault （运行时知识资产库）
    ↓
Future REF Reuse
```

Atlas 不只是帮助团队关闭一个工单。

Atlas 让每一次调查都产生新的组织资产，并成为下一次调查的起点。

---

## Atlas 的核心价值

### Evidence-Driven，不靠意见推动调查

Atlas 将异常前后的运行时数据组织为统一 Evidence Pack。

团队围绕同一份有时间窗口、有来源、有边界、有完整性记录的证据开展调查，而不是围绕不同版本的日志反复争论。

### Historical First，不从零开始

每一次 REF 都优先召回 Historical RGA。

调查团队可以参考过去已经完成的：

- Investigation Result
- Lesson Learned
- Investigation Path
- Excluded Path
- Runtime Pattern
- Recovery Pattern
- Why Retrieved

历史案例不会自动升级为当前事件的根因结论，但会为工程师提供更快、更有边界的调查入口。

### Cross-Team Collaboration，统一 OEM 与 Sensor 的调查上下文

Atlas 在 OEM Tier 1、Tier 2、Tier 3 与 Sensor FAE 之间建立统一的证据和调查上下文。

OEM 不再向传感器厂发送零散日志。

Sensor FAE 不再从头猜测现场发生了什么。

双方围绕同一 REF、同一 Evidence Pack 和同一历史上下文开展协作。

### Reusable Knowledge，让工程经验持续增值

调查完成后，IR、LL 与 RGA 被结构化保存。

新的调查结果可以服务：

- 下一个 REF
- 下一个 Robot SKU
- 下一个 Sensor SKU
- 下一个 Host Platform
- 下一个部署场景
- 下一个客户项目

Atlas 将一次性的工程成本，转化为可持续复用的组织能力。

### Your Data, Your Control

客户原始数据、Evidence Pack 与内部调查资产始终由客户控制。

Atlas 支持私有部署、保留策略、导出策略、访问边界与去标识化复用。

共享的不是客户数据。

共享的是经过授权的调查能力与组织经验。

---

## 跨 SKU、跨平台、跨场景

Atlas 不是为单一机器人、单一传感器或单一客户问题编写的项目型 Glue Code。

Atlas 使用统一的 Runtime Governance Model，在产品差异之上保持一致的证据结构、调查流程和历史资产模型。

### 跨 Robot SKU

同一 OEM 可以逐步扩展到不同机器人型号，而不需要为每个 SKU 重新构建一套调查系统。

### 跨 Sensor SKU

同一传感器厂商可以在统一治理框架下管理 LiDAR、Camera、IMU、GNSS、Radar 等不同产品。

### 跨 Host Platform

Atlas 可适配 x86、NVIDIA Jetson、ARM SBC、ROS 2 与客户自定义运行环境。

### 跨部署场景

餐厅、酒店、医院、商场、仓库、工厂与户外环境可以使用统一治理框架，同时保留各自的 Runtime Profile 与 Investigation Context。

> **Atlas 的目标不是让每个项目多一个脚本。**
>
> **Atlas 的目标是让整个组织拥有一套可以持续扩展的运行时治理基础设施。**

---

## 两条产品线，一个治理平台

### [Atlas Runtime Sensor Governance™](/products/runtime-sensor-governance)

**面向传感器厂商**

帮助 Sensor CTO、FAE Lead、Firmware、Driver、Validation 与 Product Team 建立跨 OEM、跨产品、跨场景的运行时治理能力。

重点价值包括：

- 建立 Sensor Runtime Profiles
- 沉淀 Historical Sensor RGA
- 提升 FAE 调查效率
- 统一 OEM 协同调查材料
- 复用跨客户、跨项目的调查经验
- 将现场问题转化为产品改进输入

### [Atlas Runtime Investigation™](/products/runtime-investigation)

**面向机器人 OEM**

帮助 CTO、Engineering VP、Tier 1、Tier 2、Tier 3 与 Customer Support 建立标准化、可运营、可衡量的运行时调查体系。

重点价值包括：

- 统一运行时证据
- 缩短 Investigation Time
- 降低 Tier 3 重复投入
- 提升 Historical RGA Reuse
- 建立组织级 Assist Vault
- 让每一次 REF 都产生长期价值

---

## 不同角色为什么需要 Atlas

### CTO / Engineering VP

Atlas 将运行时调查从不可见的工程消耗，转化为可以衡量的治理能力。

管理层可以持续观察：

- REF Trend
- Median Time to Closure
- Historical RGA Reuse
- Tier 3 Involvement
- Sensor FAE Response
- Engineering Cost
- Cross-SKU Expansion
- Governance ROI

### OEM Tier 1

Tier 1 可以使用统一 Intake 与 Evidence Reference 完成事件接收和升级，不再依赖自由文本描述和临时截图。

### OEM Tier 2

Tier 2 可以从完整 Investigation Context 和 Historical RGA 开始调查，减少日志整理、时间对齐和重复排查。

### OEM Tier 3

Tier 3 只参与真正需要深度工程判断的少数事件，而不是长期承担证据收集和重复分析。

### Sensor CTO / FAE Lead

传感器厂可以围绕统一 Sensor Engagement Pack 开展调查，建立跨 OEM、跨 SKU、跨项目持续复用的 Sensor RGA。

### Sensor FAE

FAE 可以在明确的时间窗口、Runtime Surface、OEM Context 与历史调查路径基础上工作，不再从零理解客户现场。

---

## Atlas 守护的运行时边界

Atlas 专注于机器人系统中最容易被忽略、但运行时问题高发的边界：

```text
Sensor
    ↓
Power / Bus / Timing
    ↓
Linux / Driver / Buffer / Scheduler
    ↓
SBC
    ↓
ROS Topic / Application Input
```

Atlas 持续观察并组织：

- Sensor Runtime
- Power
- USB / Ethernet / CAN / CSI
- Trigger / PPS / Timing
- Linux Runtime
- Driver
- Buffer / Scheduler
- ROS Topic
- Application Input

Atlas 不负责：

- 自动确认 Root Cause
- 自动分配责任
- 自动生成最终 Investigation Result
- 替代工程师作出最终技术判断

Atlas 负责组织证据、召回历史、建立上下文并缩小调查范围。

IR 与 LL 始终由获得授权的工程师完成。

---

## 从 Pilot 到组织级基础设施

Atlas 以企业级定制化项目交付。

典型路径为：

```text
Pilot
    ↓
Controlled Deployment
    ↓
Production Readiness
    ↓
Cross-SKU Expansion
    ↓
Organization-wide Runtime Governance
```

Atlas 可以从一个 Robot Model、一个 Sensor Product 或一个高频 REF 场景开始，逐步扩展到：

- 更多 Robot SKU
- 更多 Sensor SKU
- 更多 Host Platform
- 更多客户现场
- 更多调查团队
- 更完整的 Historical RGA
- 更成熟的组织治理指标

---

## 最终目标

Atlas 的最终目标，不只是更快关闭一次事故。

Atlas 要帮助机器人企业与传感器厂商建立一种新的组织能力：

> **每一次 REF 都从历史开始。**
>
> **每一个新案例都增加未来能力。**
>
> **每一次调查都让整个组织更强。**

工程师继续创造新的机器人、新的传感器和新的产品。

Atlas 负责持续观察运行时、组织证据、保存历史，并让过去的工程经验不断创造新的价值。

---

## 继续了解

- [了解 Atlas Runtime Sensor Governance™](/products/runtime-sensor-governance)
- [了解 Atlas Runtime Investigation™](/products/runtime-investigation)
- [访问 SensorDeck 官方网站](https://sensordeck.tech)
