---
title: Pilot to Production Deployment
sidebar_label: Pilot to Production
---

# Pilot to Production Deployment

## Overview

Atlas Pilot to Production Deployment 是 OEM 或 Sensor Manufacturer 将 Atlas 从受控试点逐步扩展为长期 Runtime Governance Infrastructure 的项目管理框架。

它不是一次性软件安装，也不是围绕单一机器人、单一 Sensor 编写的内部 Glue Code。

Atlas 的目标是建立一套可跨：

- Robot SKU
- Sensor SKU
- SBC / Host Platform
- Linux / ROS Environment
- Deployment Scenario
- OEM 与 Sensor Manufacturer

持续复用的 Runtime Governance Infrastructure。

```text
Pilot
  │
  ▼
Controlled Deployment
  │
  ▼
Production Readiness
  │
  ▼
Multi-SKU Expansion
  │
  ▼
Full-scale Deployment
```

每个阶段都必须具备独立 Scope、Budget、Milestone、Acceptance Criteria 和退出机制。

Pilot 成功不代表自动进入全量部署。

---

# Infrastructure, Not Glue Code

Atlas 不应被部署为只适用于某一款机器人的临时代码。

典型 Glue Code 模式是：

```text
Robot A
+
Sensor X
+
One Driver
+
One Script
+
One Customer Issue
```

当 Robot、Sensor、SBC 或 Software Version 改变时，工程团队需要重新开发和维护。

Atlas 采用基础设施模式：

```text
Canonical Runtime Surface
+
Standard Runtime Dataset
+
Standard Evidence Pack
+
Standard Investigation Workflow
+
Reusable Historical RGA
```

具体产品差异通过以下方式接入：

- Surface Registry
- Runtime Adapter
- Configuration
- Product Profile
- Deployment Policy

Atlas Core、Evidence Schema、Investigation Chain 和 RGA Model 保持一致。

---

# Cross-SKU and Cross-platform Architecture

Atlas 应支持在统一治理模型下扩展到不同平台。

```text
Atlas Runtime Governance Infrastructure
│
├── Robot SKU A
│   ├── SBC A
│   ├── LiDAR X
│   └── Camera Y
│
├── Robot SKU B
│   ├── SBC B
│   ├── LiDAR Z
│   └── IMU M
│
└── Robot SKU C
    ├── Industrial PC
    ├── Camera Y
    └── Radar N
```

跨平台不表示所有平台具有完全相同的 Runtime Surface。

它表示：

- 使用统一的 Surface Definition
- 使用统一的 Evidence Pack Schema
- 使用统一的 Investigation Objects
- 使用统一的 Historical RGA Model
- 对未覆盖 Surface 明确标记
- 通过 Adapter 处理接口差异

---

# Dual-flywheel Deployment Model

Atlas 采用 OEM 与 Sensor Manufacturer 双飞轮设计。

```text
OEM Runtime Governance Flywheel
            │
            │ Sensor Engagement
            ▼
Sensor Runtime Governance Flywheel
            │
            │ Sensor IR / LL / RGA
            ▼
OEM Runtime Governance Flywheel
```

无论最先采用 Atlas 的是 OEM 还是 Sensor Manufacturer，Atlas 都可以沿着真实调查协作链继续扩展。

最终目标是逐步建立：

```text
Sensor
   ↓
Bus / Power / Timing
   ↓
Linux / Driver
   ↓
SBC
   ↓
ROS / Application
   ↓
Robot Runtime
```

这一 Sensor-to-SBC Runtime Governance Ecosystem。

---

## OEM-first Expansion

当 OEM 首先采用 Atlas：

```text
OEM Robot Deployment
        │
        ▼
OEM REF Investigation
        │
        ▼
Sensor Candidate
        │
        ▼
Sensor Engagement Pack
        │
        ▼
Sensor FAE Investigation
        │
        ▼
Sensor Historical RGA
```

Atlas 可以继续协助相关 Sensor Manufacturer 建立：

- Sensor Runtime Profile
- Sensor Historical RGA
- Standard FAE Investigation Workflow
- OEM Collaboration Interface

---

## Sensor-first Expansion

当 Sensor Manufacturer 首先采用 Atlas：

```text
Sensor Runtime Profile
        │
        ▼
Sensor Historical RGA
        │
        ▼
OEM Integration
        │
        ▼
OEM Runtime Surface Mapping
        │
        ▼
OEM REF Investigation
        │
        ▼
OEM Historical RGA
```

Atlas 可以沿着 Sensor 的实际 OEM 客户与机器人平台，逐步建立完整的 Sensor-to-SBC 治理链。

---

# OEM and Sensor Deployment Differences

OEM 与 Sensor Manufacturer 使用相同 Atlas Canonical Model，但项目目标不同。

| Item | OEM Deployment | Sensor Manufacturer Deployment |
|---|---|---|
| Primary Object | Robot SKU / Fleet | Sensor Product / Sensor SKU |
| Main Investigation | Robot Runtime REF | Sensor REF / FAE Investigation |
| Surface Scope | Sensor、Power、Bus、Linux、Driver、ROS、Robot State | Sensor、Firmware、Interface、Driver、Output、Timing |
| Historical RGA | Multi-sensor and system cases | Sensor-only cases across OEMs and environments |
| Main User | Tier 1 / Tier 2 / Tier 3 | FAE / Driver / Firmware / Product Team |
| Expansion Unit | One Robot Model at a time | One Sensor Product at a time |
| ROI Focus | Investigation time、Tier 3 involvement、fleet support cost | FAE response、cross-OEM reuse、engineering escalation |
| Collaboration | Engage Sensor Factory | Support multiple OEMs |

---

# Project Governance

每一个 Pilot、Controlled Deployment 和 Production Deployment 都应作为正式项目管理。

最低项目结构：

```text
Executive Sponsor
        │
        ▼
Organizational Representative
        │
        ▼
Project Manager
        │
        ├── Business Owner
        ├── Runtime Engineering Lead
        ├── Investigation Lead
        ├── IT / Security
        ├── Legal / Procurement
        └── Atlas Project Lead
```

小型项目中，一个人可以承担多个角色。

但每项责任必须有明确 Owner。

---

# Organizational Representative

客户必须指定一名 Organizational Representative。

该角色不是普通技术联系人，而是客户组织的正式项目代表。

主要职责：

- 确认项目范围
- 协调跨部门资源
- 确认客户输入
- 批准 Change Request
- 签署 Milestone Acceptance
- 管理项目升级
- 提交继续、暂停或终止决定

Atlas 不应以单一工程师的非正式意见作为组织级验收结论。

---

# OEM Project Roster

OEM 项目建议包括：

| Role | Main Responsibility |
|---|---|
| Executive Sponsor | Budget 与部署决策 |
| Organizational Representative | 跨部门协调与正式验收 |
| OEM Project Manager | Schedule、Risk、Milestone |
| Product Owner | Robot SKU 与业务场景 |
| Runtime Engineering Lead | Agent 与 Surface 接入 |
| Tier 1 Representative | REF Intake |
| Tier 2 Investigation Lead | Evidence、Recall 与调查组织 |
| Tier 3 Engineering Representative | 复杂事件与技术边界 |
| Fleet / Cloud Owner | 数据传输与总部接入 |
| Sensor Coordination Owner | Sensor Factory 协作 |
| IT / Security | 数据、权限与部署审查 |
| Legal / Procurement | 合同、IP 与退出机制 |

Tier 3 不应承担 Pilot 的常规日志收集和数据整理。

---

# Sensor Manufacturer Project Roster

Sensor Manufacturer 项目建议包括：

| Role | Main Responsibility |
|---|---|
| Executive Sponsor | Budget 与产品线决策 |
| Organizational Representative | 正式协调与验收 |
| Project Manager | Schedule、Scope、Risk |
| Sensor Product Owner | Sensor SKU 与目标市场 |
| FAE Lead | Sensor REF Workflow |
| Driver Lead | Driver Runtime Boundary |
| Firmware Lead | Firmware Investigation |
| Validation / Reliability Lead | Known Environment Coverage |
| OEM Collaboration Owner | OEM 接入和 EGP |
| IT / Security | Repository 与数据交换 |
| Legal / Procurement | NDA、IP 与退出机制 |

---

# Budget Structure

项目预算应覆盖完整部署成本，而不仅是 Atlas License。

```text
Total Project Budget
│
├── Atlas Software / License
├── Professional Services
├── Integration and Adapter Work
├── Historical RGA Pre-build
├── Infrastructure
├── Customer Internal Engineering
├── Training and Change Management
├── Security / Legal Review
└── Contingency
```

---

## OEM Budget Items

OEM 通常需要预算：

- Robot Runtime Surface Mapping
- Atlas Agent Integration
- Fleet / Cloud Integration
- OEM Historical RGA Pre-build
- Tier 1 / Tier 2 Workflow Setup
- Sensor Factory Collaboration
- Selected Robot Deployment
- Governance Metrics and ROI Tracking
- Training and Operational Handover

---

## Sensor Manufacturer Budget Items

Sensor Manufacturer 通常需要预算：

- Sensor Runtime Surface Mapping
- Sensor Runtime Profile Creation
- Known Environment / CE Observation
- Sensor Historical RGA Pre-build
- FAE Workflow Integration
- Driver / Firmware Escalation Workflow
- OEM EGP Collaboration
- Product and Environment Expansion
- FAE ROI Tracking

---

## Contingency Budget

建议预留：

```text
10%–20%
```

用于已批准的：

- Additional Adapter
- New Surface
- Extra Test Cycle
- Infrastructure Change
- Approved Scope Expansion

Contingency 不应被视为默认可消费预算。

---

# Milestone-based Payment

建议采用 Milestone Payment。

每一期付款应绑定：

- Defined Deliverable
- Acceptance Criteria
- Acceptance Period
- Written Acceptance
- Remediation Process
- Change Boundary

---

## Suggested Payment Structure

| Milestone | Suggested Payment |
|---|---:|
| Contract and Project Initiation | 15% |
| Architecture and Surface Readiness | 15% |
| Historical Asset Initialization | 15% |
| Pilot Technical Chain Acceptance | 20% |
| Controlled Deployment Acceptance | 15% |
| Production Readiness Acceptance | 10% |
| Final Handover / Full-scale Plan | 10% |

实际比例可以根据项目规模调整。

---

# Stage 0 — Project Initiation

## Common Deliverables

- Contract / SOW
- Project Charter
- Approved Budget
- Named Roster
- Scope Definition
- Data and IP Boundary
- Milestone Plan
- Payment Schedule
- Change Process
- Exit Mechanism
- Escrow Requirement

## Start Gate

项目启动前必须确认：

- Executive Sponsor
- Organizational Representative
- Project Manager
- Budget Approval
- In-scope Product
- In-scope Environment
- Acceptance Signatory
- Data Owner
- Exit Terms

---

# Stage 1 — Pilot Deployment

Pilot 应限制在明确的最小范围内。

---

## OEM Pilot Scope

建议选择：

```text
One Robot Model
+
One Critical Sensor
+
One Deployment Scenario
+
One to Three REF Types
+
Five to Ten OEM Historical Cases
```

例如：

```text
Delivery Robot A
+
LiDAR X
+
Restaurant
+
Unexpected Stop
```

---

## Sensor Manufacturer Pilot Scope

建议选择：

```text
One Sensor Product
+
One Firmware / Driver Combination
+
Two to Four Environments
+
Three to Five Runtime Patterns
+
Five to Ten Historical Cases
```

例如：

```text
LiDAR X
+
Firmware 2.4
+
Warehouse / Factory / Restaurant
+
Packet Loss / Reconnect / Timestamp Gap
```

---

## Pilot Acceptance

Pilot 应验证：

- Runtime Surface 可观察
- Agent 可以 Observe、Persist、Retain、Export
- Evidence Pack 可生成
- Historical RGA 可召回
- Investigation Context 可形成
- Investigation 可以闭环
- IR 与 LL 可以保存
- 新 RGA 可以建立
- ROI Baseline 可以计算

---

# Stage 2 — Controlled Deployment

Controlled Deployment 是 Pilot 与 Production 之间的正式阶段。

它不是无边界扩大。

核心原则：

> 每次只扩展一个主要产品模型或一个明确的平台组合。

---

## OEM Controlled Deployment

OEM 应采用：

```text
One Robot Model at a Time
```

每一款 Robot Model 应分别确认：

- SBC / Host Platform
- Linux / ROS Version
- Sensor Combination
- Power Architecture
- Communication Surface
- Deployment Scenario
- Historical RGA Coverage
- Export Infrastructure
- Support Roster

推荐顺序：

```text
Robot Model A
      │
      ▼
Acceptance
      │
      ▼
Robot Model B
      │
      ▼
Acceptance
      │
      ▼
Robot Model C
```

不要一次将 Atlas 部署到所有 Fleet SKU。

---

## Sensor Controlled Deployment

Sensor Manufacturer 应采用：

```text
One Sensor Product at a Time
```

每款 Sensor 应分别确认：

- Hardware Revision
- Firmware Version
- Driver / SDK
- Interface
- Host Platform
- Known Environment
- Runtime Profile
- Historical RGA
- FAE Workflow

推荐顺序：

```text
Sensor Product X
      │
      ▼
Acceptance
      │
      ▼
Sensor Product Y
      │
      ▼
Acceptance
```

同一 Sensor Product 可以逐步扩展到不同 OEM 和场景。

---

# Controlled Deployment Gates

每次扩展前必须通过以下 Gate：

```text
Surface Readiness

Historical RGA Readiness

Agent Stability

Evidence Chain

Investigation Workflow

Security Review

Operational Owner

ROI Tracking
```

未通过 Gate 的产品模型不进入下一阶段。

---

# Stage 3 — Production Readiness

Production Readiness 评估 Atlas 是否具备长期运行条件。

评估包括：

- Runtime Stability
- Storage and Retention
- Dataset Lock
- Export Reliability
- Repository Backup
- Access Control
- Historical Recall Quality
- Ticket Closure
- Sensor Collaboration
- Operational Support
- Auditability
- Exit Readiness

Production Readiness 不代表 Atlas 对所有未来 REF 提供自动根因结论。

---

# Stage 4 — Multi-SKU and Cross-platform Expansion

完成第一款产品的 Controlled Deployment 后，可以复用 Atlas Canonical Infrastructure。

```text
Validated Atlas Core
        │
        ├── New Surface Mapping
        ├── New Adapter Configuration
        ├── New Product Profile
        └── New Historical RGA
```

不应为每个新 SKU 重写独立调查系统。

---

## Reusable Components

跨 SKU 复用的部分包括：

- Atlas Agent Core
- Runtime Dataset Lifecycle
- Evidence Pack Schema
- Five-Segment Window
- REF Lifecycle
- Historical Recall
- Investigation Context
- Investigation Tier Candidate
- IR / LL Model
- Ticket Closure
- Governance Metrics

---

## Product-specific Components

每个 SKU 需要确认：

- Surface Registry
- Adapter
- Product Metadata
- Timestamp Source
- Runtime Profile
- Historical RGA Coverage
- Retention Policy
- Deployment Configuration

---

# Stage 5 — Full-scale Deployment

Full-scale Deployment 应在多个 Controlled Deployment 成功后启动。

```text
Validated Product Models
        │
        ▼
Standard Deployment Template
        │
        ▼
Fleet / Product-line Rollout
        │
        ▼
Central Governance Operation
```

---

## OEM Full-scale Deployment

可以包括：

- Multiple Robot Models
- Multiple Fleet Regions
- Multiple Deployment Scenarios
- Multiple Sensor Manufacturers
- Central Tier 2 Investigation
- Distributed Tier 1 Intake
- Controlled Tier 3 Escalation
- CTO Runtime Governance Dashboard

---

## Sensor Manufacturer Full-scale Deployment

可以包括：

- Multiple Sensor Products
- Multiple Firmware Branches
- Multiple OEM Customers
- Multiple Robot Platforms
- Multiple Deployment Environments
- Central Sensor RGA Repository
- Standardized FAE Investigation
- Product Reliability Feedback

---

# Dual-flywheel Operating Model

Full-scale Deployment 后，两个飞轮持续互相增强。

---

## OEM Flywheel

```text
OEM REF
   ↓
Evidence Pack
   ↓
Historical Recall
   ↓
Investigation
   ↓
IR / LL
   ↓
OEM Historical RGA
   ↓
Faster Future Investigation
```

---

## Sensor Flywheel

```text
Sensor REF
   ↓
Sensor Runtime Profile
   ↓
Sensor Historical Recall
   ↓
FAE Investigation
   ↓
Sensor IR / LL
   ↓
Sensor Historical RGA
   ↓
Faster Cross-OEM Support
```

---

## Flywheel Connection

```text
OEM Historical Knowledge
        │
        ▼
Sensor Engagement Pack
        │
        ▼
Sensor Historical Knowledge
        │
        ▼
Sensor Response
        │
        ▼
OEM Closure and Reuse
```

双方不需要共享完整私有 Repository。

它们通过标准对象和授权边界协同。

---

# Change Management

以下事项必须进入正式 Change Request：

- New Robot Model
- New Sensor Product
- New SBC Platform
- New Deployment Environment
- New Runtime Surface
- New REF Type
- New Cloud Integration
- New Data Mode
- New Geographic Region
- New Production SLA

Change Request 应记录：

- Scope Impact
- Technical Impact
- Budget Impact
- Schedule Impact
- Security Impact
- Acceptance Impact

---

# Data and IP Ownership

## Customer-owned

- Customer Runtime Dataset
- Raw Logs
- Customer Configuration
- Customer Historical Cases
- Customer IR / LL
- OEM Historical RGA
- Sensor Historical RGA
- Customer-specific Governance Records

## Atlas-owned

- Atlas Core Code
- Canonical Schema
- Generic Runtime Governance Logic
- Evidence Pack Model
- Investigation Workflow
- Generic Adapter Framework
- Pre-existing Atlas IP

## Project-specific Deliverables

以下内容的所有权或使用权必须在合同中单独定义：

- Customer-specific Adapter
- Customer-specific Integration
- Deployment Configuration
- Custom Reporting
- Custom Workflow Extension

---

# Safe Exit Mechanism

每个阶段都必须允许客户在可控条件下退出。

```text
Exit Decision
      │
      ▼
Freeze Accepted Project State
      │
      ▼
Export Customer Assets
      │
      ▼
Technical Handover
      │
      ▼
Revoke Access
      │
      ▼
Confirm Data Deletion
```

---

# Exit Package

建议包括：

- Runtime Dataset Export
- Evidence Pack Export
- Historical RGA Export
- Sensor Runtime Profile Export
- Surface Registry
- Configuration
- Investigation Records
- Schema Documentation
- Deployment Documentation
- Accepted Release Information
- Open Issue List
- Data Deletion Confirmation

建议采用开放格式：

- JSON
- Markdown
- CSV
- Documented Archive

客户资产不应只能通过 Atlas UI 读取。

---

# Code Escrow

Code Escrow 用于保障长期生产部署的供应商连续性。

Pilot 阶段可以先确认 Escrow 条款。

进入 Production 前完成正式 Escrow。

---

## Escrow Scope

可以包括：

- Contracted Atlas Release
- Customer-specific Adapter
- Build Instructions
- Dependency Manifest
- Deployment Documentation
- Configuration Schema
- Verification Hash

---

## Escrow Verification

应验证：

- Archive Completeness
- Version Match
- Hash Integrity
- Build Reproducibility
- Dependency Availability
- Deployment Instructions

仅保存一个无法构建的代码压缩包不构成有效 Escrow。

---

## Escrow Release Triggers

可以包括：

- Atlas Insolvency
- Permanent Product Discontinuation
- Contracted Critical Support Termination
- Material Breach Not Cured
- Agreed Business Continuity Event

普通项目争议不应自动触发 Escrow Release。

---

# Termination and Payment

退出责任应根据原因处理。

---

## Customer Convenience Termination

通常支付：

- 已验收 Milestone
- 已完成但尚处于验收期的可交付成果
- 已批准且不可取消的成本
- 合同约定的 Transition Cost

未启动的未来 Milestone 不应自动全额收费。

---

## Atlas Material Breach

合同可以约定：

- 暂停受影响 Milestone 付款
- 补救期
- 未验收款项退款
- 强制 Exit Package
- Transition Assistance
- 符合条件时触发 Escrow

---

## Controlled Deployment Exit

某款 Robot Model 或 Sensor Product 未通过验收时，可以只停止该模型扩展。

不必自动终止已验收的其它部署。

```text
Robot A — Accepted

Robot B — Failed Gate

Robot C — Not Started
```

这种模型级退出机制可以隔离扩展风险。

---

# Management Decision Gates

每个阶段结束后，应进行正式管理层决策。

可选结果：

```text
Approve Next Stage

Approve with Conditions

Extend Current Stage

Request Remediation

Pause Deployment

Exit Selected Model

Terminate Program
```

决策依据包括：

- Technical Acceptance
- Budget Consumption
- Schedule
- Security
- Historical RGA Readiness
- Investigation ROI
- Tier 3 Involvement
- Operational Readiness
- Remaining Risk

---

# ROI Tracking

项目应从 Pilot 开始建立 Baseline。

建议指标：

- Time to Evidence Pack
- Median Investigation Time
- Ticket Closure Time
- Historical RGA Reuse Rate
- Tier 3 Involvement Rate
- Engineering Hours per REF
- Repeat Investigation Avoided
- Sensor FAE Response Time
- Cross-OEM RGA Reuse
- Cost per Closed REF

---

## OEM ROI

重点观察：

- Robot Model REF Trend
- Fleet Investigation Cost
- Tier 3 Escalation
- Sensor Collaboration Time
- Historical RGA Reuse
- Customer Support Efficiency

---

## Sensor Manufacturer ROI

重点观察：

- FAE Investigation Time
- Cases per Sensor Product
- Cross-OEM Reuse
- Driver / Firmware Escalation
- Repeated Question Reduction
- Environment Pattern Coverage

---

# Minimum Production Gate

进入 Full-scale Deployment 前，至少需要：

- One or More Controlled Models Accepted
- Stable Atlas Agent
- Defined Surface Coverage
- Historical RGA Repository
- Operational Roster
- Security Approval
- Backup and Restore
- Data Export Capability
- Exit Package Tested
- Code Escrow Completed, if contracted
- ROI Baseline Established
- Production Budget Approved

---

# Summary

Atlas Pilot to Production Deployment 应遵循：

```text
Pilot

↓

One-model Controlled Deployment

↓

Production Readiness

↓

Cross-SKU / Cross-platform Expansion

↓

Full-scale Deployment
```

OEM 以 Robot Model 为扩展单位，建立从 Sensor、Power、Bus、Linux、Driver 到 ROS 和 Robot Runtime 的完整治理链。

Sensor Manufacturer 以 Sensor Product 为扩展单位，建立 Sensor Runtime Profile、Historical RGA 和标准 FAE Investigation Workflow，并逐步扩展到不同 OEM、机器人平台和部署场景。

Atlas 的双飞轮意味着：

- OEM 先采用，可以沿 Sensor Engagement 链引入 Sensor Manufacturer。
- Sensor Manufacturer 先采用，可以沿 OEM Integration 链引入 Robot Runtime Governance。
- 双方最终共同建立 Sensor-to-SBC Runtime Governance Ecosystem。

---

# 下一步阅读

- SDK
- ROS2
- API
- CLI
Atlas 不是单一项目的 Glue Code。

它是一套可以跨 SKU、跨平台、跨场景和跨组织持续复用的 Runtime Governance Infrastructure。
