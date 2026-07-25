---
title: Investigation Tier Candidate™
sidebar_label: Investigation Tier Candidate™
---

# Investigation Tier Candidate™

## Overview

Investigation Tier Candidate™ 是 Atlas Runtime Governance™ 根据当前 Runtime Evidence 和 Investigation Context 提供的调查建议对象。

它用于帮助工程师快速确定下一步调查方向。

Investigation Tier Candidate 不代表调查结论。

它也不决定责任归属。

---

# Why Investigation Tier Candidate?

复杂的 Runtime Investigation 往往存在多个可能方向。

例如：

- Sensor Runtime
- Linux Runtime
- Communication Bus
- Power
- Driver
- ROS Runtime

如果所有方向同时展开调查，不仅效率低，而且容易遗漏关键线索。

Investigation Tier Candidate 将当前证据组织为多个候选调查方向，帮助工程师合理安排调查优先级。

---

# Investigation Tier Candidate Architecture

```text
Evidence Pack
        │
        ├──── Runtime Timeline
        │
        ├──── Runtime Surface Coverage
        │
        ├──── Historical RGA
        │
        └──── Investigation Context
                  │
                  ▼
      Investigation Tier Candidate
```

Investigation Tier Candidate 建立在已有调查信息之上。

它不产生新的 Runtime Evidence。

---

# Candidate Structure

一个 Investigation Tier Candidate 可以包含：

```text
Investigation Tier Candidate
│
├── Candidate Identifier
├── Candidate Summary
├── Candidate Scope
├── Candidate Evidence References
├── Candidate Historical References
├── Suggested Investigation Path
├── Suggested Investigation Tier
└── Candidate Metadata
```

Candidate 本身不保存 Runtime Dataset。

所有运行时数据均通过引用访问。

---

# Candidate Scope

Candidate Scope 描述建议调查的范围。

例如：

- Sensor Runtime
- Linux Runtime
- Communication Runtime
- Driver Runtime
- Multiple Runtime Surface

Scope 用于帮助调查聚焦。

并不表示问题已经定位。

---

# Candidate Evidence References

每个 Candidate 可以引用一个或多个 Evidence Pack。

例如：

```text
Candidate
      │
      ├── Primary Evidence Pack
      └── Candidate Evidence Pack
```

Candidate 不复制 Evidence。

---

# Candidate Historical References

Candidate 可以引用 Historical Recall 结果。

例如：

```text
Historical RGA
        │
        ├── Strong Candidate
        ├── Partial Candidate
        └── Weak Candidate
```

Historical RGA 用于提供调查经验。

并不证明当前事件与历史事件相同。

---

# Suggested Investigation Path

Candidate 可以提供建议调查路径。

例如：

```text
Review Runtime Timeline

↓

Verify Runtime Surface

↓

Compare Historical Pattern

↓

Perform Target Investigation
```

最终调查流程由工程师决定。

---

# Suggested Investigation Tier

Candidate 可以建议由哪个调查层级优先处理。

例如：

| Suggested Tier | Typical Responsibility |
|----------------|------------------------|
| Tier 1 | Initial triage |
| Tier 2 | Technical investigation |
| Tier 3 | Advanced engineering investigation |
| Sensor FAE | Sensor-specific investigation |

Suggested Tier 仅为建议。

组织可以根据自身流程调整调查分工。

---

# Multiple Candidates

一次 Runtime Investigation 可以同时存在多个 Candidate。

例如：

```text
Current REF
      │
      ├── Candidate A
      ├── Candidate B
      └── Candidate C
```

不同 Candidate 可以对应不同调查方向。

它们之间并不存在互斥关系。

---

# Candidate Evolution

随着调查推进，Candidate 可以持续调整。

例如：

```text
Candidate v1

↓

New Evidence

↓

Candidate v2

↓

Historical Recall Updated

↓

Candidate v3
```

Candidate 可以随着新的证据不断完善。

---

# Candidate Priority

Atlas 可以根据当前调查信息组织 Candidate Priority。

例如：

```text
Priority 1

Priority 2

Priority 3
```

Priority 用于帮助安排调查顺序。

Priority 不表示概率。

也不表示 Root Cause。

---

# Candidate Collaboration

多个调查角色可以围绕同一个 Candidate 协同工作。

例如：

```text
Investigation Tier Candidate
            │
            ├── OEM Tier 2
            ├── OEM Tier 3
            └── Sensor FAE
```

所有参与者共享相同的 Candidate 信息。

避免重复组织调查方向。

---

# Investigation Tier Candidate vs Investigation Context

Investigation Context 提供：

- 当前调查信息
- Evidence References
- Historical References
- Runtime Timeline

Investigation Tier Candidate 提供：

- 候选调查方向
- 建议调查范围
- 建议调查路径
- 建议调查层级

Context 描述当前调查。

Candidate 描述下一步调查建议。

---

# Investigation Tier Candidate vs Historical RGA

Historical RGA 保存：

- 历史调查知识
- Investigation Pattern
- Investigation Result
- Lesson Learned

Investigation Tier Candidate 保存：

- 当前候选调查方向
- 当前建议调查路径
- 当前建议调查层级

Historical RGA 是历史知识。

Candidate 是当前调查建议。

---

# Design Principles

Investigation Tier Candidate 遵循以下原则：

- 基于当前 Runtime Evidence
- 基于 Investigation Context
- 可引用 Historical RGA
- 支持多个 Candidate 并存
- 支持持续演进
- 不自动确认 Root Cause
- 不自动确定责任归属
- 不替代工程师判断

---

# Summary

Investigation Tier Candidate™ 是 Atlas Runtime Governance™ 的调查建议对象。

它结合当前 Runtime Evidence、Investigation Context 和 Historical RGA，为工程师组织多个候选调查方向、建议调查路径和建议调查层级，帮助团队更高效地开展 Runtime Investigation，同时始终保持调查结果由工程师最终确认。

---

# 下一步阅读

- Sensor Engagement Pack™
- Assist Vault™
- CTO-Runtime Governance Dashboard™
