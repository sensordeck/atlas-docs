---
title: Runtime Investigation™
sidebar_label: Runtime Investigation™
---

# Runtime Investigation™

## Overview

Atlas Runtime Investigation™ is a standardized investigation and organizational knowledge reuse system for robot Runtime Execution Failure (REF).

It receives Evidence Packs from Runtime Sensor Governance™ and organizes runtime evidence, historical investigation assets, engineering investigation results, and closure processes into a complete chain:

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

The goal of Runtime Investigation™ is not to replace engineers, nor to automatically confirm root causes.

Its goal is to:

- Start every investigation from structured evidence
- Prioritize reuse of historical experience in every investigation
- Enable OEM and Sensor Manufacturer collaboration with unified evidence
- Transform every completed investigation into a reusable organizational asset for the future

---

# 1. What is REF?

REF is Runtime Execution Failure.

It refers to execution anomalies that occur during real robot operation, for example:

- Unexpected Stop
- Collision
- Obstacle Miss
- False Obstacle
- Localization Failure
- Path Deviation
- Fall
- Manipulation Failure

REF describes runtime events and their impacts.

REF itself does not equal root cause.

For example:

```text
Robot suddenly stops
```

This is a REF.

But it may be associated with different runtime phenomena:

- LiDAR data interruption
- Camera Frame Drop
- Ethernet Link Loss
- USB Disconnect
- Driver Exit
- Linux Runtime Disturbance
- Power Event
- Application Behaviour

Atlas does not automatically determine which of these is the root cause when a REF is established.

---

# 2. REF Intake and Admission

Runtime Investigation starts from REF Intake.

Tier 1 establishes a REF Ticket based on information provided by end users, customer service, field personnel, or system alerts.

Typical inputs include:

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

Tier 1 responsibilities are to record, confirm, and route.

Tier 1 does not need to:

- Confirm technical root cause
- Complete engineering analysis
- Determine responsibility attribution
- Write final IR or LL

```text
Customer Report
        ↓
Tier 1 Intake
        ↓
Admission Policy
        ↓
Route to Tier 2
```

Admission Policy determines whether the event enters formal Runtime Investigation.

---

# 3. Evidence Pack as Unified Evidence Entry Point

Runtime Investigation should not start directly from massive raw logs.

Atlas uses Evidence Pack as the standard investigation input.

Evidence Pack can come from:

- Manual slicing by Tier 1 providing approximate REF time window
- Automatic generation by Agent based on Dataset Abnormal
- Automatic generation by Agent based on Cross-stream Correlation
- Controlled Event
- Known Runtime Trigger

Evidence Pack typically contains:

- Five-Window Evidence
- Runtime Timeline
- Surface Coverage
- Runtime Metadata
- Event Markers
- Integrity Information
- Raw Evidence References
- Export Manifest

Evidence Pack is an investigation evidence bundle.

It is not the final investigation conclusion.

---

# 4. Historical RGA Recall

After each REF enters investigation, Atlas prioritizes retrieval of Historical RGA, historical investigation cases.

RGA is Runtime Governance Asset.

Historical RGA can contain:

- Past REF types
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

Atlas supports:

- Strong Candidate
- Partial Candidate
- Weak Candidate
- No Relevant Match

Atlas follows this principle:

> Partial matches are preferred over no recall at all.

Differences in environment, devices, or versions should not be the sole reason to prevent historical asset recall.

Each recall should explain:

```text
why_retrieved
```

Letting engineers understand:

- Which features match
- Which conditions differ
- Why this historical asset is still worth reviewing

Historical RGA Recall provides an investigation starting point but does not automatically copy historical conclusions to current events.

---

# 5. Investigation Context

Atlas organizes the current REF, Evidence Pack, and Historical RGA into Investigation Context.

The purpose of Investigation Context is to place information needed for investigation in the same context.

It typically includes:

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

Investigation Context should not contain final root causes unconfirmed by engineers.

Its goal is to help engineers quickly understand:

- What happened
- What evidence currently exists
- Which Surfaces are covered
- What information is still missing
- Whether similar situations occurred historically
- What should be prioritized for the next step

---

# 6. Investigation Tier Candidate

Atlas generates Investigation Tier Candidate based on current evidence and event scope.

It is used to suggest which tier investigation process this REF should enter.

## Tier 1

Applicable to:

- Information collection
- Customer communication
- Time confirmation
- Device identification
- Evidence Availability confirmation
- Routing and escalation

Tier 1 does not complete in-depth engineering investigation.

---

## Tier 2

Applicable to:

- Evidence Pack review
- Runtime Timeline alignment
- Historical RGA Recall
- Investigation Context establishment
- Standard Investigation Path execution
- Determining whether Tier 3 or Sensor FAE is needed

---

## Tier 3

Applicable to:

- Cross-system complex events
- Multi-Runtime Surface correlation
- Requiring specialized engineering capability
- Standard path cannot complete
- Requiring in-depth Runtime or product engineering analysis

---

## Sensor FAE

Applicable to:

- Sensor-specific Runtime Evidence
- Sensor Interface Investigation
- Driver or Firmware Collaboration
- Sensor Manufacturer Response
- OEM and Sensor Manufacturer joint investigation

Investigation Tier Candidate is a routing recommendation.

It is not a responsibility determination, nor a root cause determination.

Final tier is confirmed by the customer organization's Admission Policy and authorized engineers.

---

# 7. OEM Investigation Chain

OEM investigation chain typically includes Tier 1, Tier 2, and Tier 3.

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
Tier 3 Escalation (if needed)
    ↓
OEM IR
    ↓
OEM LL
```

OEM engineering team can perform:

- Runtime Timeline Review
- Surface Coverage Review
- Historical RGA Comparison
- Investigation Path
- Excluded Path
- Additional Evidence Request
- Controlled Reproduction
- Engineering Assessment

Atlas organizes processes and assets.

Engineers are responsible for investigation decisions.

---

# 8. Sensor Manufacturer Investigation Chain

When a REF involves a Sensor Candidate, OEM can generate Sensor Engagement Pack.

```text
OEM REF
    ↓
Evidence Pack
    ↓
Investigation Context
    ↓
Sensor Engagement Pack (references OEM EP)
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

Sensor Engagement Pack can include:

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

Sensor Manufacturer FAE conducts investigation using unified evidence packs, rather than relying on back-and-forth screenshots and scattered logs.

---

# 9. Sensor Engagement Pack Exchange Mode

Atlas supports different evidence exchange boundaries.

## Mode A: Raw Evidence Reference

Applicable when OEM authorizes Sensor Manufacturer to view specified raw evidence.

May include:

- Raw data reference
- Packet capture reference
- Frame or point-cloud reference
- Driver log reference
- Runtime timeline reference

---

## Mode B: Signature and Recall

Applicable when raw data cannot be shared directly.

Can provide only:

- Evidence Signature
- Runtime Metadata
- Timeline Summary
- Surface Coverage
- Historical Recall Result
- Investigation Questions

Mode B can support collaboration while protecting OEM data boundaries.

---

# 10. Investigation Result (IR)

IR is Investigation Result.

IR is written by authorized OEM engineers or Sensor FAE.

IR is used to record engineering result status after investigation completion.

Typical states include:

- matched_*
- candidate_*
- not_applicable

IR can record:

- Observed Result
- Matched Pattern
- Candidate Pattern
- Evidence References
- Investigation Path Performed
- Excluded Path
- Open Questions
- Required Follow-up

IR should not automatically be written as:

- Root Cause Confirmed
- Liability Assigned
- OEM Fault
- Sensor Fault

Unless the customer's own authorization process allows it and is confirmed by their engineering team.

Atlas does not automatically generate final engineering conclusions.

---

# 11. Lesson Learned (LL)

LL is Lesson Learned.

It records engineering experience from this investigation that can be reused in the future.

LL can include:

- Steps that should be prioritized in the future
- Validated effective Investigation Path
- Directions that can be excluded
- Observation points that need to be supplemented
- Deployment configuration recommendations
- Testing or reproduction methods
- Data collection gaps
- Future Admission recommendations

LL should be written as executable steps whenever possible, rather than vague descriptions.

For example:

```text
1. Confirm Ethernet physical link status
2. Verify IP and subnet
3. Use packet capture to verify UDP arrives
4. Check Driver process and ROS node status
5. Compare with cable or switch direct connection
```

LL is written by engineers.

Atlas is responsible for saving, associating, and future recall.

---

# 12. Ticket Closure

REF Ticket can only be closed after necessary investigation assets are completed.

Typical Closure Gates include:

- REF established
- Evidence Pack referenceable
- Investigation Context completed
- Required IR submitted
- Required LL submitted
- Required OEM or Sensor Response completed
- RGA generated or updated
- Closure State recorded

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

Ticket Closure is not simply changing status to Closed.

It represents that this investigation has formed organizational assets that can be reused in the future.

---

# 13. RGA Generation and Update

Each completed REF investigation can generate new RGA or update existing RGA.

RGA can associate:

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

The value of RGA is not just preserving the past.

It is used for retrieval, comparison, and investigation reuse for future REF.

---

# 14. Assist Vault

Assist Vault preserves reusable investigation assets.

It can include:

- Historical RGA
- Investigation Path
- Excluded Path
- IR
- LL
- Closure Summary
- Surface Pattern
- Evidence Signature
- Reuse Conditions

Assist Vault should not become a public pool of raw customer data.

Atlas should follow:

- Customer data ownership
- Access control
- De-identification
- Data boundary
- Export policy
- Reuse authorization

The core of sharing is not raw customer data.

The core is authorized, de-identifiable, and reusable investigation capabilities.

---

# 15. Future REF Reuse

When a new REF occurs in the future, Atlas retrieves from Assist Vault again.

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

Future reuse results should preserve:

- Match Level
- Why Retrieved
- Matching Dimensions
- Different Dimensions
- Reusable Investigation Path
- Non-reusable Conditions
- Engineer Review Requirement

Atlas should not automatically upgrade past conclusions to current confirmed conclusions just because historical matches are strong.

Historical assets are used to assist investigation, not replace current evidence and engineering judgment.

---

# 16. Main Outputs of Runtime Investigation

Runtime Investigation™ primarily produces the following assets:

## REF Ticket

Records event, customer report, time range, severity, and routing status.

## Historical RGA Match Result

Records historical candidates, match level, and `why_retrieved`.

## Investigation Context

Unifies organization of current evidence and historical assets.

## Investigation Tier Candidate

Provides investigation tier and collaboration routing recommendations.

## Sensor Engagement Pack

Supports standardized evidence exchange between OEM and Sensor Manufacturer.

## Investigation Result

Records authorized engineering investigation results.

## Lesson Learned

Records future reusable investigation experience.

## Closure Record

Records investigation closure conditions and final status.

## Runtime Governance Asset

Preserves this investigation as future retrievable assets.

## Assist Vault Entry

Stores authorized reusable assets in organizational knowledge base.

---

# 17. Atlas Supports

Runtime Investigation™ supports:

- REF Intake
- Admission Policy
- Historical RGA & Assist Vault pre-construction
- Evidence Pack reference
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

Runtime Investigation™ is not responsible for:

- Automatically confirming Root Cause
- Automatically confirming Causality
- Liability Assignment
- Automatically determining OEM Fault
- Automatically determining Sensor Fault
- Replacing Tier 2 or Tier 3 engineers
- Replacing Sensor FAE
- Automatically writing unconfirmed IR by engineers
- Automatically writing unconfirmed LL by engineers
- Directly copying historical conclusions as current conclusions

Atlas is responsible for:

- Organizing evidence
- Recalling history
- Building context
- Standardizing processes
- Managing investigation assets
- Supporting future reuse

---

# 19. Relationship with Runtime Sensor Governance™

Runtime Sensor Governance™ is responsible for:

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

Runtime Investigation™ is responsible for:

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

The former establishes the runtime evidence foundation.

The latter transforms evidence into standard investigation processes and reusable organizational capabilities.

---

# Summary

Atlas Runtime Investigation™ advances a Runtime Execution Failure from customer report to evidence organization, historical recall, engineering investigation, IR, LL, Ticket Closure, and future reuse.

The core closed loop it establishes is:

```text
Every REF starts from Historical RGA
                ↓
Engineers complete IR and LL
                ↓
Every completed REF becomes a reusable RGA
                ↓
The next REF starts from organizational memory
```

Atlas does not replace engineers.

Atlas enables engineers to no longer start from scratch with infinite logs and scattered history.

---

# Next Reading

- Atlas Agent™
- Runtime Dataset
- Evidence Pack™
- Historical RGA™
- Investigation Context
- Sensor Engagement Pack™
- Assist Vault™
