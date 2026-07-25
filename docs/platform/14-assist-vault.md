---
title: Assist Vault™
sidebar_label: Assist Vault™
---

# Assist Vault™

## Overview

Assist Vault™ 是 Atlas Runtime Governance™ 的跨组织 Runtime Investigation Knowledge Exchange。

它不是 Runtime Dataset Repository。

也不是 Historical RGA Repository。

Assist Vault 保存的是**经过授权、可共享、不可识别（Non-identifiable）的调查知识**，帮助整个机器人行业减少重复调查，加速 Runtime Investigation。

---

# Why Assist Vault?

Runtime Investigation 完成后，大量调查经验仅保留在组织内部。

例如：

- OEM Historical RGA
- Sensor Historical RGA

其它组织无法复用这些经验。

Assist Vault 提供一个可选的知识共享层。

只有经过授权的调查知识才会进入 Assist Vault。

---

# Three Knowledge Domains

Atlas Runtime Governance 维护三个独立知识域。

```text
Runtime Investigation Knowledge

        │
        ├──────── OEM Historical RGA
        │
        ├──────── Sensor Historical RGA
        │
        └──────── Atlas Assist Vault
```

三者具有不同职责。

---

# OEM Historical RGA

OEM Historical RGA 属于 OEM 私有知识资产。

包含：

- OEM Investigation
- OEM IR
- OEM LL
- OEM Workflow
- OEM Runtime Experience

通常包含客户项目相关内容。

默认不共享。

---

# Sensor Historical RGA

Sensor Historical RGA 属于 Sensor Manufacturer 私有知识资产。

包含：

- Sensor Investigation
- Sensor IR
- Sensor LL
- Sensor Runtime Behaviour
- Sensor Deployment Experience

默认不共享。

---

# Atlas Assist Vault

Assist Vault 保存经过授权后的行业调查知识。

例如：

- Runtime Pattern
- Investigation Strategy
- Investigation Path
- Lesson Learned
- Runtime Behaviour
- Best Practice

Assist Vault 不保存客户身份。

也不保存完整调查记录。

---

# Knowledge Boundary

```text
OEM Historical RGA

        │

   Customer NDA

        │

        ▼

Non-identifiable

        │

        ▼

Atlas Assist Vault

        ▲

        │

Sensor Historical RGA
```

Assist Vault 永远位于 OEM 与 Sensor 私有知识域之外。

---

# Data Exchange Modes

Atlas 支持两种协作模式。

## Mode A — Raw Collaboration

适用于：

- OEM ↔ Sensor Manufacturer
- 双方已签署 NDA
- 指定调查合作

可以共享：

- Runtime Dataset
- Evidence Pack
- Investigation Context
- Runtime Timeline
- Raw Runtime Observation

```text
OEM

↓

Raw Runtime Evidence

↓

Sensor Investigation
```

Mode A 用于一次具体 Runtime Investigation。

---

## Mode B — Non-identifiable Collaboration

适用于：

- Atlas Assist Vault
- 行业知识共享
- 无 NDA
- 跨客户经验复用

共享内容包括：

- Runtime Pattern
- Investigation Path
- Lesson Learned
- Investigation Strategy
- Runtime Behaviour Pattern

不会共享：

- Runtime Dataset
- Customer Identity
- Device Serial Number
- Project Information
- Customer Logs
- Proprietary Configuration

```text
Historical RGA

↓

De-identification

↓

Assist Vault
```

Mode B 不共享原始运行时数据。

---

# OEM ↔ Sensor Collaboration

OEM 与 Sensor Manufacturer 可以采用 Raw Collaboration。

```text
OEM REF

↓

Evidence Pack

↓

Sensor Engagement Pack

↓

Sensor Investigation

↓

Sensor Response

↓

OEM Closure
```

这是一次调查协作。

并不会自动进入 Assist Vault。

---

# OEM → Assist Vault

OEM 可以选择将 Historical RGA 转换为 Assist Asset。

```text
OEM Historical RGA

↓

Authorization

↓

De-identification

↓

Assist Vault
```

只有经过客户授权后才能共享。

---

# Sensor → Assist Vault

Sensor Manufacturer 同样可以贡献调查经验。

```text
Sensor Historical RGA

↓

Authorization

↓

De-identification

↓

Assist Vault
```

Sensor 不需要公开：

- Customer Name
- OEM Name
- Project

仅共享可复用调查知识。

---

# What Does Assist Vault Store?

Assist Vault 可以包含：

```text
Assist Asset
│
├── Runtime Pattern
├── Investigation Path
├── Lesson Learned
├── Runtime Behaviour
├── Investigation Strategy
├── Runtime Surface Pattern
├── Reuse Metadata
└── Source Authorization
```

Assist Vault 不保存：

- Runtime Dataset
- Raw Logs
- Evidence Pack
- Historical RGA
- Customer Information

---

# What Is Removed?

进入 Assist Vault 前，会移除客户相关信息。

例如：

- Customer Name
- OEM Name
- Sensor Project
- Serial Number
- Runtime Dataset
- Device Identifier
- Deployment Address
- Internal Ticket

保留：

- Runtime Behaviour
- Investigation Experience
- Engineering Knowledge

---

# Historical Recall

未来 Investigation 可以检索 Assist Vault。

```text
Current Investigation

        │

        ▼

Assist Vault Recall

        │

        ▼

Candidate Assist Assets
```

Assist Vault 提供：

- Runtime Pattern
- Investigation Strategy
- Lesson Learned

不会提供客户数据。

---

# Relationship with Historical RGA

Historical RGA：

- Organization-owned
- Investigation Record
- Private Knowledge
- Customer-specific

Assist Vault：

- Atlas-managed
- Shared Knowledge
- Non-identifiable
- Cross-organization

Historical RGA 可以存在。

无需进入 Assist Vault。

---

# Authorization Boundary

Assist Vault 永远遵循授权原则。

任何共享都必须经过授权。

Atlas 不自动：

- 上传客户数据
- 上传 Runtime Dataset
- 上传 Historical RGA
- 上传 Investigation Record

只有经过授权且完成去识别化后，调查知识才能进入 Assist Vault。

---

# Design Principles

Assist Vault 遵循以下原则：

- 与 OEM Historical RGA 完全独立
- 与 Sensor Historical RGA 完全独立
- 不保存 Runtime Dataset
- 不保存 Raw Logs
- 不保存 Customer Identity
- 支持 OEM NDA Raw Collaboration
- 支持 Sensor NDA Raw Collaboration
- 支持 Non-identifiable Knowledge Sharing
- 所有共享均基于授权

---

# OEM vs Sensor vs Assist Vault

| Repository | Owner | Raw Runtime Data | Customer-specific | Shared |
|------------|-------|------------------|-------------------|--------|
| OEM Historical RGA | OEM | ✓ | ✓ | No |
| Sensor Historical RGA | Sensor Manufacturer | ✓ | ✓ | No |
| Atlas Assist Vault | Atlas | ✗ | ✗ | Yes (Authorized Only) |

---

# Summary

Assist Vault™ 是 Atlas Runtime Governance™ 的行业知识共享层。

OEM Historical RGA 与 Sensor Historical RGA 保持各自独立的调查知识库，用于组织内部 Runtime Investigation。双方在 NDA 场景下可以通过 Evidence Pack 和 Sensor Engagement Pack 进行 Raw Runtime Data 协作。

对于希望跨组织复用的调查经验，Atlas 提供 Assist Vault。经过授权与去识别化处理后，仅保留可复用的 Runtime Pattern、Investigation Path 和 Lesson Learned，使整个行业能够共享调查能力，而无需共享客户数据、原始日志或私有调查记录。

---

# 下一步阅读

- CTO Runtime Governance Dashboard
