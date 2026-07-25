---
title: Runtime Investigation™
sidebar_label: Runtime Investigation™
---

# Runtime Investigation™

## Overview

Atlas Runtime Investigation™ is a standardized investigation and organizational knowledge reuse system designed for robot Runtime Execution Failure (REF).

It receives Evidence Packs from Runtime Investigation™ and organizes runtime evidence, historical investigation assets, engineering investigation results, and closure processes into a complete chain:

   ```text
    REF Intake
        ↓
    Evidence Pack
        ↓
    Historical Runtime Governance Asset (RGA) Recall
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

Runtime Investigation™ is not intended to replace engineers, nor to automatically confirm root causes.

Its goals are:

- Every investigation starts with structured evidence
- Every investigation prioritizes reuse of historical experience
- OEM and Sensor Manufacturer collaborate using unified evidence
- Every completed investigation becomes a reusable organizational asset

---

# 1. What is REF?

REF is Runtime Execution Failure.

It refers to execution anomalies that occur during real-world robot operations, such as:

- Unexpected Stop
- Collision
- Obstacle Miss
- False Obstacle
- Localization Failure
- Path Deviation
- Fall
- Manipulation Failure

REF describes runtime events and their impact.

REF itself is not equivalent to root cause.

For example:

    The robot suddenly stopped

This is a REF.

But it may be related to different runtime phenomena:

- LiDAR data interruption
- Camera Frame Drop
- Ethernet Link Loss
- USB Disconnect
- Driver Exit
- Linux Runtime Disturbance
- Power Event
- Application Behaviour

Atlas does not automatically determine which of these is the root cause when a REF is created.

---

# 2. REF Intake and Admission

Runtime Investigation begins with REF Intake.

Tier 1 creates a REF Ticket based on information provided by end users, customer support, field personnel, or system alerts.

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

Tier 1's responsibility is to record, confirm, and route.

Tier 1 does not need to:

- Confirm technical root cause
- Complete engineering analysis
- Determine liability
- Write final Investigation Result (IR) or Lesson Learned (LL)

    Customer Report
            ↓
    Tier 1 Intake
            ↓
    Admission Policy
            ↓
    Route to Tier 2

Admission Policy determines whether the incident enters formal Runtime Investigation.

---

# 3. Evidence Pack as the Unified Evidence Entry Point

Runtime Investigation should not start directly from massive raw logs.

Atlas uses Evidence Pack as the standard investigation input.

Evidence Packs can come from:

- Manual slicing by Tier 1 around the approximate REF time
- Automatic generation by Agent based on Dataset Abnormal
- Automatic generation by Agent based on Cross-stream Correlation
- Controlled Events
- Known Runtime Triggers

Evidence Packs typically include:

- Five-Window Evidence
- Runtime Timeline
- Surface Coverage
- Runtime Metadata
- Event Markers
- Integrity Information
- Raw Evidence References
- Export Manifest

Evidence Pack is an investigation evidence bundle.

It is not a final investigation conclusion.

---

# 4. Historical RGA Recall

After each REF enters investigation, Atlas prioritizes retrieving Historical RGA (historical investigation cases).

RGA is Runtime Governance Asset.

Historical RGA can include:

- Past REF types
- Runtime Patterns
- Investigation Paths
- Excluded Paths
- Investigation Results (IR)
- Lessons Learned (LL)
- Closure States
- Related Surfaces
- Evidence References
- Reuse Conditions

    Current REF
        +
    Current Evidence Pack
            ↓
    Historical RGA Recall
            ↓
    Candidate Matches
            ↓
    Why Retrieved

Atlas supports:

- Strong Candidate
- Partial Candidate
- Weak Candidate
- No Relevant Match

Atlas follows this principle:

> Partial matching is prioritized over no recall at all.

Differences in environment, device, or version should not be the sole reason to block historical asset recall.

Every recall should explain:

    why_retrieved

So engineers understand:

- Which features match
- Which conditions differ
- Why the historical asset is still worth reviewing

Historical RGA Recall provides an investigation starting point but does not automatically copy historical conclusions to the current event.

---

# 5. Investigation Context

Atlas organizes the current REF, Evidence Pack, and Historical RGA into an Investigation Context.

The purpose of Investigation Context is to place all investigation-required information into one shared context.

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

    REF
     +
    Evidence Pack
     +
    Historical RGA
            ↓
    Investigation Context

Investigation Context should not contain final root causes that have not been confirmed by engineers.

Its goal is to help engineers quickly understand:

- What happened
- What evidence is currently available
- Which surfaces are covered
- What information is still missing
- Whether similar cases have occurred historically
- What should be prioritized for the next step

---

# 6. Investigation Tier Candidate

Atlas generates an Investigation Tier Candidate based on current evidence and event scope.

It is used to suggest which investigation tier the REF should enter.

## Tier 1

Applicable for:

- Information collection
- Customer communication
- Time confirmation
- Device identification
- Evidence Availability confirmation
- Routing and escalation

Tier 1 does not perform in-depth engineering investigation.

---

## Tier 2

Applicable for:

- Evidence Pack review
- Runtime Timeline alignment
- Historical RGA Recall
- Investigation Context establishment
- Standard Investigation Path execution
- Determining whether Tier 3 or Sensor FAE is needed

---

## Tier 3

Applicable for:

- Cross-system complex events
- Multi-Runtime Surface correlation
- Need for specialized engineering capabilities
- Standard paths cannot be completed
- Need for in-depth Runtime or product engineering analysis

---

## Sensor FAE

Applicable for:

- Sensor-specific Runtime Evidence
- Sensor Interface Investigation
- Driver or Firmware Collaboration
- Sensor Manufacturer Response
- Joint investigation between OEM and sensor manufacturer

Investigation Tier Candidate is a routing suggestion.

It is not a liability judgment nor a root cause judgment.

The final tier is confirmed by the customer organization's Admission Policy and authorized engineers.

---

# 7. OEM Investigation Chain

The OEM investigation chain typically includes Tier 1, Tier 2, and Tier 3.

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

OEM engineering teams can perform:

- Runtime Timeline Review
- Surface Coverage Review
- Historical RGA Comparison
- Investigation Path execution
- Excluded Path confirmation
- Additional Evidence Request
- Controlled Reproduction
- Engineering Assessment

Atlas organizes processes and assets.

Engineers are responsible for investigation judgments.

---

# 8. Sensor Manufacturer Investigation Chain

When a REF involves a sensor candidate, the OEM can generate a Sensor Engagement Pack.

    OEM REF
        ↓
    Evidence Pack
        ↓
    Investigation Context
        ↓
    Sensor Engagement Pack (referencing OEM EP)
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

Sensor Manufacturer FAEs conduct investigations using unified evidence bundles, rather than relying on back-and-forth exchanges of screenshots and scattered logs.

---

# 9. Sensor Engagement Pack Exchange Modes

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

Mode B supports collaboration while protecting OEM data boundaries.

---

# 10. Investigation Result (IR)

IR is Investigation Result.

IR is authored by authorized OEM engineers or Sensor FAEs.

IR is used to record the engineering result status after investigation completion.

Typical statuses include:

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

IR should not be automatically written as:

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

- Steps to prioritize in future investigations
- Validated and effective Investigation Paths
- Directions that can be excluded
- Observation points that need to be supplemented
- Deployment configuration recommendations
- Testing or reproduction methods
- Data collection gaps
- Future Admission recommendations

LL should be written as actionable steps rather than vague descriptions.

For example:

    1. Confirm Ethernet physical link status
    2. Verify IP and subnet
    3. Use packet capture to verify UDP arrival
    4. Check Driver process and ROS node status
    5. Perform direct cable or switch comparison

LL is authored by engineers.

Atlas is responsible for saving, associating, and future recall.

---

# 12. Ticket Closure

REF Tickets can only be closed after necessary investigation artifacts are completed.

Typical Closure Gates include:

- REF has been created
- Evidence Pack is referenceable
- Investigation Context is complete
- Required IR has been submitted
- Required LL has been submitted
- Required OEM or Sensor Response has been completed
- RGA has been generated or updated
- Closure State has been recorded

    IR Complete
        +
    LL Complete
        +
    Required Response Complete
            ↓
    RGA Generate / Update
            ↓
    Ticket Closure

Ticket Closure is not simply changing the status to Closed.

It represents that this investigation has formed organizational assets available for future reuse.

---

# 13. RGA Generation and Update

Every completed REF investigation can generate a new RGA or update an existing RGA.

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

    Completed Investigation
            ↓
    IR + LL + Evidence References
            ↓
    RGA
            ↓
    Assist Vault

The value of RGA is not just preserving the past.

It is used for future REF retrieval, comparison, and investigation reuse.

---

# 14. Assist Vault

Assist Vault stores reusable investigation assets.

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

Atlas should adhere to:

- Customer data ownership
- Access control
- De-identification
- Data boundary
- Export policy
- Reuse authorization

The core of sharing is not customer raw data.

It is authorized, de-identified, and reusable investigation capabilities.

---

# 15. Future REF Reuse

When a new REF emerges in the future, Atlas retrieves from Assist Vault again.

    New REF
        ↓
    New Evidence Pack
        ↓
    Historical RGA Recall
        ↓
    Prior IR / LL Reuse
        ↓
    Faster Investigation

Future reuse results should retain:

- Match Level
- Why Retrieved
- Matching Dimensions
- Different Dimensions
- Reusable Investigation Path
- Non-reusable Conditions
- Engineer Review Requirement

Atlas should not automatically elevate past conclusions to current confirmed conclusions simply because historical matching is strong.

Historical assets are for assisting investigations, not replacing current evidence and engineering judgment.

---

# 16. Key Outputs of Runtime Investigation

Runtime Investigation™ primarily produces the following assets:

## REF Ticket

Records incident, customer report, time range, severity, and routing status.

## Historical RGA Match Result

Records historical candidates, match level, and why_retrieved.

## Investigation Context

Unifies current evidence and historical assets.

## Investigation Tier Candidate

Provides investigation tier and collaboration routing suggestions.

## Sensor Engagement Pack

Supports standardized evidence exchange between OEM and Sensor Manufacturer.

## Investigation Result

Records authorized engineering investigation results.

## Lesson Learned

Records reusable investigation experience for the future.

## Closure Record

Records investigation closure conditions and final status.

## Runtime Governance Asset

Sinks this investigation into a retrievable asset for the future.

## Assist Vault Entry

Stores authorized reusable assets into the organizational knowledge base.

---

# 17. Atlas Supports

Runtime Investigation™ supports:

- REF Intake
- Admission Policy
- Historical RGA and Assist Vault pre-establishment
- Evidence Pack referencing
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

Runtime Investigation™ does not handle:

- Automatic Root Cause confirmation
- Automatic Causality confirmation
- Liability Assignment
- Automatic OEM Fault determination
- Automatic Sensor Fault determination
- Replacing Tier 2 or Tier 3 engineers
- Replacing Sensor FAE
- Automatically writing IR without engineer confirmation
- Automatically writing LL without engineer confirmation
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

Runtime Investigation™ is responsible for:

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

The former builds the runtime evidence foundation.

The latter transforms evidence into standardized investigation processes and reusable organizational capabilities.

---

# Summary

Atlas Runtime Investigation™ advances a Runtime Execution Failure from customer report through evidence organization, historical recall, engineering investigation, IR, LL, Ticket Closure, and future reuse.

The core closed-loop it establishes is:

    Every REF starts from Historical RGA
                    ↓
    Engineers complete IR and LL
                    ↓
    Every completed REF becomes a reusable RGA
                    ↓
    The next REF starts from organizational memory

Atlas does not replace engineers.

Atlas ensures engineers no longer have to start from infinite logs and scattered history.

---

# Next Reading

- Atlas Agent™
- Runtime Dataset
- Evidence Pack™
- Historical RGA™
- Investigation Context
- Sensor Engagement Pack™
- Assist Vault™
