---
title: Runtime Investigation™
sidebar_label: Runtime Investigation™
---

# Runtime Investigation™

## Overview

Atlas Runtime Investigation™ 是一套面向机器人 Runtime Execution Failure（REF）的标准化调查与组织知识复用系统。

它接收来自 Runtime Sensor Governance™ 的 Evidence Pack，将运行时证据、历史调查资产、工程调查结果与关闭流程组织成一条完整链路：

```text
REF Intake
    ↓
Evidence Pack
    ↓
Historical RGA Recall
    ↓
Investigation Context
    ↓
Investigation Tier Candidate
    ↓
OEM / Sensor Investigation
    ↓
Investigation Result
    ↓
Lesson Learned
    ↓
Ticket Closure
    ↓
Assist Vault
    ↓
Future REF Reuse
```

Runtime Investigation™ 的目标不是替代工程师，也不是自动确认根因。

它的目标是：

- 让每一次调查从结构化证据开始
- 让每一次调查优先复用历史经验
- 让 OEM 与 Sensor Manufacturer 使用统一证据协作
- 让每一次完成的调查成为未来可复用的组织资产

---

# 1. 什么是 REF？

REF 是 Runtime Execution Failure。

它指机器人在真实运行过程中出现的执行异常，例如：

- Unexpected Stop
- Collision
- Obstacle Miss
- False Obstacle
- Localization Failure
- Path Deviation
- Fall
- Manipulation Failure

REF 描述的是运行时事件及其影响。

REF 本身不等于根因。

例如：

```text
机器人突然停止
```

这是一个 REF。

但它可能与以下不同运行时现象相关：

- LiDAR 数据中断
- Camera Frame Drop
- Ethernet Link Loss
- USB Disconnect
- Driver Exit
- Linux Runtime Disturbance
- Power Event
- Application Behaviour

Atlas 不在 REF 建立时自动判断其中哪一个是根因。

---

# 2. REF Intake 与 Admission

Runtime Investigation 从 REF Intake 开始。

Tier 1 根据最终用户、客服、现场人员或系统告警提供的信息建立 REF Ticket。

典型输入包括：

- Incident Summary
- Customer Report
- Robot or Device ID
- Deployment Environment
- Approximate REF Time
- Incident Type Candidate
- Severity
- Runtime Evidence Availability
- Agent Upload Bundle ID
- Evidence Window ID
- Tier 1 Action

Tier 1 的职责是记录、确认和路由。

Tier 1 不需要：

- 确认技术根因
- 完成工程分析
- 判断责任归属
- 撰写最终 IR 或 LL

```text
Customer Report
        ↓
Tier 1 Intake
        ↓
Admission Policy
        ↓
Route to Tier 2
```

Admission Policy 决定该事件是否进入正式 Runtime Investigation。

---

# 3. Evidence Pack 作为统一证据入口

Runtime Investigation 不应直接从海量原始日志开始。

Atlas 使用 Evidence Pack 作为标准调查输入。

Evidence Pack 可以来自：

- Tier 1 提供约莫 REF 时段后的人工切片
- Agent 根据 Dataset Abnormal 自动生成
- Agent 根据 Cross-stream Correlation 自动生成
- Controlled Event
- 已知 Runtime Trigger

Evidence Pack 通常包含：

- Five-Window Evidence
- Runtime Timeline
- Surface Coverage
- Runtime Metadata
- Event Markers
- Integrity Information
- Raw Evidence References
- Export Manifest

Evidence Pack 是调查证据包。

它不是最终调查结论。

---

# 4. Historical RGA Recall 历史调查案例召回

每一次 REF 进入调查后，Atlas 优先检索 Historical RGA，历史调查案例。

RGA 是 Runtime Governance Asset。

Historical RGA 可以包含：

- 过去的 REF 类型
- Runtime Pattern
- Investigation Path
- Excluded Path
- Investigation Result (IR)
- Lesson Learned (LL)
- Closure State
- Related Surface
- Evidence References
- Reuse Conditions

```text
Current REF
    +
Current Evidence Pack
        ↓
Historical RGA Recall
        ↓
Candidate Matches
        ↓
Why Retrieved
```

Atlas 支持：

- Strong Candidate
- Partial Candidate
- Weak Candidate
- No Relevant Match

Atlas 遵循以下原则：

> 部分匹配优先于完全不召回。

环境、设备或版本不同，不应成为阻止历史资产召回的唯一理由。

每一次召回都应说明：

```text
why_retrieved
```

让工程师理解：

- 哪些特征匹配
- 哪些条件不同
- 为什么该历史资产仍值得查看

Historical RGA Recall 提供调查起点，但不自动将历史结论复制到当前事件。

---

# 5. Investigation Context

Atlas 将当前 REF、Evidence Pack 和 Historical RGA 组织成 Investigation Context。

Investigation Context 的作用是将调查所需信息放在同一个上下文中。

它通常包括：

- Current REF
- Incident Summary
- Five-Window Timeline
- Runtime Surface Coverage
- Observed Runtime Abnormalities
- Historical RGA Candidates
- Why Retrieved
- Known Gaps
- Investigation Questions
- Candidate Investigation Path
- Excluded Path References

```text
REF
 +
Evidence Pack
 +
Historical RGA
        ↓
Investigation Context
```

Investigation Context 不应包含未经工程师确认的最终根因。

它的目标是帮助工程师快速理解：

- 发生了什么
- 目前有哪些证据
- 哪些 Surface 已覆盖
- 哪些信息仍然缺失
- 历史上是否出现过相似情况
- 下一步应该优先检查什么

---

# 6. Investigation Tier Candidate

Atlas 根据当前证据和事件范围生成 Investigation Tier Candidate。

它用于建议该 REF 应进入哪一级调查流程。

## Tier 1

适用于：

- 信息收集
- 客户沟通
- 时间确认
- 设备识别
- Evidence Availability 确认
- 路由与升级

Tier 1 不完成深度工程调查。

---

## Tier 2

适用于：

- Evidence Pack 审查
- Runtime Timeline 对齐
- Historical RGA Recall
- Investigation Context 建立
- 标准 Investigation Path 执行
- 是否需要 Tier 3 或 Sensor FAE 的判断

---

## Tier 3

适用于：

- 跨系统复杂事件
- 多 Runtime Surface 关联
- 需要专项工程能力
- 标准路径无法完成
- 需要深入 Runtime 或产品工程分析

---

## Sensor FAE

适用于：

- Sensor-specific Runtime Evidence
- Sensor Interface Investigation
- Driver or Firmware Collaboration
- Sensor Manufacturer Response
- OEM 与传感器厂联合调查

Investigation Tier Candidate 是路由建议。

它不是责任判断，也不是根因判断。

最终层级由客户组织的 Admission Policy 和授权工程师确认。

---

# 7. OEM Investigation Chain

OEM 调查链通常包括 Tier 1、Tier 2 和 Tier 3。

```text
Tier 1 Intake
    ↓
Evidence Pack
    ↓
Historical RGA Recall
    ↓
Investigation Context
    ↓
Tier 2 Investigation
    ↓
Tier 3 Escalation（如需要）
    ↓
OEM IR
    ↓
OEM LL
```

OEM 工程团队可以执行：

- Runtime Timeline Review
- Surface Coverage Review
- Historical RGA Comparison
- Investigation Path
- Excluded Path
- Additional Evidence Request
- Controlled Reproduction
- Engineering Assessment

Atlas 组织流程和资产。

工程师负责调查判断。

---

# 8. Sensor Manufacturer Investigation Chain

当 REF 涉及 Sensor Candidate时，OEM 可以生成 Sensor Engagement Pack。

```text
OEM REF
    ↓
Evidence Pack
    ↓
Investigation Context
    ↓
Sensor Engagement Pack (引用 OEM EP)
    ↓
Sensor REF Ticket
    ↓
Sensor Investigation
    ↓
Sensor IR
    ↓
Sensor LL
    ↓
Sensor Response
    ↓
OEM Closure
```

Sensor Engagement Pack 可以包括：

- Source OEM REF
- Relevant Evidence Pack References
- Relevant Five-Window Evidence
- Sensor Surface Coverage
- Runtime Timeline
- Historical Sensor RGA Candidates
- Why Retrieved
- OEM Investigation Questions
- Exchange Mode
- Data Access Boundary

Sensor Manufacturer FAE 使用统一证据包开展调查，而不是依赖来回发送截图和零散日志。

---

# 9. Sensor Engagement Pack 的 Exchange Mode

Atlas 支持不同证据交换边界。

## Mode A：Raw Evidence Reference

适用于 OEM 授权 Sensor Manufacturer 查看指定原始证据的情况。

可能包括：

- Raw data reference
- Packet capture reference
- Frame or point-cloud reference
- Driver log reference
- Runtime timeline reference

---

## Mode B：Signature and Recall

适用于原始数据不能直接共享的情况。

可以只提供：

- Evidence Signature
- Runtime Metadata
- Timeline Summary
- Surface Coverage
- Historical Recall Result
- Investigation Questions

Mode B 可以支持协作，同时保护 OEM 数据边界。

---

# 10. Investigation Result（IR）

IR 是 Investigation Result。

IR 由获得授权的 OEM 工程师或 Sensor FAE 撰写。

IR 用于记录调查完成后的工程结果状态。

典型状态包括：

- matched_*
- candidate_*
- not_applicable

IR 可以记录：

- Observed Result
- Matched Pattern
- Candidate Pattern
- Evidence References
- Investigation Path Performed
- Excluded Path
- Open Questions
- Required Follow-up

IR 不应自动写成：

- Root Cause Confirmed
- Liability Assigned
- OEM Fault
- Sensor Fault

除非客户自己的授权流程允许，并由其工程团队自行确认。

Atlas 不自动生成最终工程结论。

---

# 11. Lesson Learned（LL）

LL 是 Lesson Learned。

它记录本次调查中可被未来复用的工程经验。

LL 可以包括：

- 未来应优先检查的步骤
- 已验证有效的 Investigation Path
- 可以排除的方向
- 需要补充的观测点
- 部署配置建议
- 测试或复现方法
- 数据采集缺口
- 未来 Admission 建议

LL 应尽量写成可执行步骤，而不是模糊描述。

例如：

```text
1. 确认 Ethernet physical link 状态
2. 核对 IP 与 subnet
3. 使用 packet capture 验证 UDP 是否到达
4. 检查 Driver process 与 ROS node 状态
5. 进行线缆或交换机直连对比
```

LL 由工程师撰写。

Atlas 负责保存、关联和未来召回。

---

# 12. Ticket Closure

REF Ticket 只有在必要调查资产完成后才能关闭。

典型 Closure Gate 包括：

- REF 已建立
- Evidence Pack 可引用
- Investigation Context 已完成
- Required IR 已提交
- Required LL 已提交
- Required OEM or Sensor Response 已完成
- RGA 已生成或更新
- Closure State 已记录

```text
IR Complete
    +
LL Complete
    +
Required Response Complete
        ↓
RGA Generate / Update
        ↓
Ticket Closure
```

Ticket Closure 不是简单修改状态为 Closed。

它代表本次调查已形成可供未来复用的组织资产。

---

# 13. RGA 生成与更新

每一次完成的 REF 调查都可以生成新的 RGA，或更新已有 RGA。

RGA 可以关联：

- Source REF
- Source Evidence Pack
- Investigation Context
- OEM IR
- OEM LL
- Sensor IR
- Sensor LL
- Closure Record
- Runtime Surfaces
- Historical Pattern
- Reuse Metadata

```text
Completed Investigation
        ↓
IR + LL + Evidence References
        ↓
RGA
        ↓
Assist Vault
```

RGA 的价值不只是保存过去。

它用于未来 REF 的检索、比较和调查复用。

---

# 14. Assist Vault

Assist Vault 保存可复用的调查资产。

它可以包括：

- Historical RGA
- Investigation Path
- Excluded Path
- IR
- LL
- Closure Summary
- Surface Pattern
- Evidence Signature
- Reuse Conditions

Assist Vault 不应成为原始客户数据的公共池。

Atlas 应遵循：

- Customer data ownership
- Access control
- De-identification
- Data boundary
- Export policy
- Reuse authorization

共享的核心不是客户原始数据。

共享的是已经获得授权、可去标识化并可复用的调查能力。

---

# 15. Future REF Reuse

当未来出现新的 REF 时，Atlas 再次检索 Assist Vault。

```text
New REF
    ↓
New Evidence Pack
    ↓
Historical RGA Recall
    ↓
Prior IR / LL Reuse
    ↓
Faster Investigation
```

未来复用结果应保留：

- Match Level
- Why Retrieved
- Matching Dimensions
- Different Dimensions
- Reusable Investigation Path
- Non-reusable Conditions
- Engineer Review Requirement

Atlas 不应因为历史匹配较强，就自动将过去结论升格为当前确定结论。

历史资产用于辅助调查，不替代当前证据和工程判断。

---

# 16. Runtime Investigation 的主要输出

Runtime Investigation™ 主要产生以下资产：

## REF Ticket

记录事件、客户报告、时间范围、严重度和路由状态。

## Historical RGA Match Result

记录历史候选、匹配等级和 `why_retrieved`。

## Investigation Context

统一组织当前证据与历史资产。

## Investigation Tier Candidate

提供调查层级和协作路由建议。

## Sensor Engagement Pack

支持 OEM 与 Sensor Manufacturer 的标准化证据交换。

## Investigation Result

记录获得授权的工程调查结果。

## Lesson Learned

记录未来可复用的调查经验。

## Closure Record

记录调查关闭条件和最终状态。

## Runtime Governance Asset

将本次调查沉淀为未来可检索的资产。

## Assist Vault Entry

将获得授权的可复用资产存入组织知识库。

---

# 17. Atlas Supports

Runtime Investigation™ 支持：

- REF Intake
- Admission Policy
- Historical RGA & Assist Vault 预建
- Evidence Pack 引用
- Historical RGA Recall
- Partial Match Recall
- Why Retrieved
- Investigation Context
- Investigation Tier Candidate
- OEM Tier 1 / Tier 2 / Tier 3 Workflow
- Sensor Manufacturer FAE Workflow
- Sensor Engagement Pack
- Exchange Mode A / B
- IR / LL Artifact Management
- Ticket Closure Gate
- RGA Generation and Update
- Assist Vault
- Future REF Reuse
- Customer-controlled Data Boundary

---

# 18. Atlas Does Not Support

Runtime Investigation™ 不负责：

- 自动确认 Root Cause
- 自动确认 Causality
- Liability Assignment
- 自动判定 OEM Fault
- 自动判定 Sensor Fault
- 替代 Tier 2 或 Tier 3 工程师
- 替代 Sensor FAE
- 自动编写未经工程师确认的 IR
- 自动编写未经工程师确认的 LL
- 将历史结论直接复制为当前结论

Atlas 负责：

- 组织证据
- 召回历史
- 构建上下文
- 标准化流程
- 管理调查资产
- 支持未来复用

---

# 19. 与 Runtime Sensor Governance™ 的关系

Runtime Sensor Governance™ 负责：

```text
Observe
    ↓
Persist
    ↓
Retain
    ↓
Export
    ↓
Evidence Pack
    ↓
Investigation Tier Candidate
```

Runtime Investigation™ 负责：

```text
REF Intake
    ↓
Historical RGA Recall
    ↓
Investigation Context
    ↓
OEM / Sensor Investigation
    ↓
IR
    ↓
LL
    ↓
Ticket Closure
    ↓
RGA
    ↓
Assist Vault
    ↓
Future REF Reuse
```

前者建立运行时证据基础。

后者将证据转化为标准调查流程和可复用组织能力。

---

# Summary

Atlas Runtime Investigation™ 将一次 Runtime Execution Failure 从客户报告，推进到证据组织、历史召回、工程调查、IR、LL、Ticket Closure 和未来复用。

它建立的核心闭环是：

```text
Every REF starts from Historical RGA
                ↓
Engineers complete IR and LL
                ↓
Every completed REF becomes a reusable RGA
                ↓
The next REF starts from organizational memory
```

Atlas 不替代工程师。

Atlas 让工程师不再从无限日志和零散历史中重新开始。

---

# 下一步阅读

- Atlas Agent™
- Runtime Dataset
- Evidence Pack™
- Historical RGA™
- Investigation Context
- Sensor Engagement Pack™
- Assist Vault™
