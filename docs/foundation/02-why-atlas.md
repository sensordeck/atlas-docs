---
title: Why Atlas
sidebar_label: Why Atlas
---

# Why Atlas?

## A Real Problem

Robots are already widely deployed across restaurants, hotels, hospitals, warehouses, and factories.

When an anomaly occurs in a robot, engineering teams almost always ask the exact same question:

> **What on earth actually happened?**

However, what most teams face is a massive wall of runtime data, rather than clear diagnostic leads.

For example:

- ROS Logs
- ROS Bags
- Sensor Raw Data
- Linux Kernel Logs
- Driver Logs
- Network Packets
- CPU / Memory Metrics
- Camera Images
- LiDAR Point Clouds

This data frequently reaches gigabytes or even tens of gigabytes.

The real challenge is not a lack of data, but how to find true, event-relevant evidence within a limited timeframe.

---

# Traditional Investigation Approaches

Most runtime issues still rely on manual troubleshooting:

```text
Receive Customer Feedback
        │
        ▼
Collect Logs
        │
        ▼
Manual Analysis
        │
        ▼
Repeated Communication
        │
        ▼
Locate Issue
```

This approach typically suffers from several inherent problems:

- Dispersed data sources
- Inconsistent investigation methods across different engineers
- Lengthy investigation cycles
- Difficulty in reusing historical experience
- Identical issues repeatedly resurfacing

Once an investigation concludes, the knowledge often remains locked inside individual heads rather than compounding into organizational assets.

---

# The Atlas Solution

Atlas is not just another logging tool.

Atlas establishes a standardized runtime investigation workflow.

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

Atlas organizes fragmented data into unified evidence for investigation, while continuously transforming investigation conclusions into organizational capability.

---

# What Atlas Changes

Traditional Pattern:

```text
Incident
    ↓
Investigation
    ↓
End
```

Atlas Pattern:

```text
Incident
    ↓
Investigation
    ↓
IR
    ↓
LL
    ↓
Historical RGA
    ↓
Direct Reuse in Next Investigation
```

Every investigation directly elevates the organization's future investigation efficiency.

---

# Why Historical Experience Matters

Many runtime issues recur continuously.

For example:

- USB Disconnections
- Ethernet Packet Drops
- Camera Frame Drops
- LiDAR Timeouts
- PPS Drift
- CPU Overloads
- Memory Pressure
- Driver Crashes

If every incident triggers a brand-new investigation from scratch, engineering teams end up continuously repeating identical work.

Atlas prioritizes recalling Historical RGAs, enabling engineers to quickly evaluate whether similar cases exist—allowing them to start from accumulated experience rather than square one.

---

# The Value of Atlas

## For CTOs

- Establish a unified runtime governance architecture
- Reduce overall investigation overhead
- Compound organizational knowledge assets
- Boost engineering team efficiency

---

## For R&D Engineers

- Accelerate issue localization
- Eliminate repetitive troubleshooting
- Standardize investigation procedures
- Seamlessly reuse historical experience

---

## For Sensor Manufacturers

- Collaborate with OEMs using unified Evidence Packs
- Streamline cross-organizational investigation efficiency
- Lower communication overhead

---

## For OEMs

- Establish a standard Runtime Investigation Workflow
- Cut down Runtime Execution Failure (REF) investigation times
- Elevate product fleet stability

---

# The Positioning of Atlas

Atlas is NOT:

- A log analysis tool
- An automated AI diagnostic engine
- A ROS replacement

Atlas is the robotics industry's **Runtime Governance Infrastructure**.

It bridges runtime evidence, investigation workflows, and organizational knowledge—ensuring every investigation becomes a building block for future operational capability.

---

# Summary

The value of Atlas is not in generating more data.

The value of Atlas lies in:

- Organizing runtime evidence
- Standardizing investigation workflows
- Reusing historical investigation experience
- Continuously compounding organizational knowledge

**Every Runtime Investigation enables the next investigation to begin with history, rather than from zero.**

---

# Next Reading

- Runtime Governance Principle
