# Atlas White Label OEM Integration Pilot Program

This guide is for robotics teams that have completed the Atlas Evaluation Kit phase and are ready to move into a formal **White Label (OEM) Integration Pilot**.

Successful evaluation confirms that Atlas can improve cross-sensor timing alignment in a real robotics stack. The OEM Integration Pilot is the next step: a structured engineering engagement that adapts Atlas from a reference evaluation platform into a production-oriented timing and sensor infrastructure layer for your robot.

The goal of the pilot is to reduce integration risk, accelerate deployment readiness, and provide a clear path from successful evaluation to OEM production planning.

---

# Program Overview

The Atlas White Label (OEM) Integration Pilot is a structured collaboration designed to move from reference evaluation to full system integration.

The pilot program provides:

• application-specific hardware adaptation  
• software integration support  
• timing and synchronization validation  
• mechanical and power system review  
• a defined path to production handoff  

This program is intended for teams that want to validate Atlas not only as a demo platform, but as a practical subsystem within their own robot architecture.

---

# Pilot Program Roadmap

The pilot is typically executed as a structured multi-phase engineering sprint.

| Phase | Focus | Typical Deliverables |
|---|---|---|
| Phase 1 | Design Audit | sensor list review, I/O mapping, power review, integration plan |
| Phase 2 | Pilot Build Definition | white-label hardware configuration, connector plan, software scope |
| Phase 3 | Validation | system-level synchronization verification, performance report, deployment review |
| Phase 4 | Production Handoff Planning | firmware package, software handoff, manufacturing and supply planning |

The exact timeline depends on system complexity, sensor count, and required customization level.

---

# What the Pilot Program Covers

The OEM Integration Pilot is designed to answer the questions that matter after a successful evaluation:

• How does Atlas fit mechanically into our robot?  
• How does Atlas fit into our power architecture?  
• How does Atlas integrate with our software stack?  
• How do we validate timing and synchronization in our real robot?  
• What is the path from pilot hardware to deployable OEM infrastructure?  

---

# Mechanical and Environmental Integration

Before software integration begins, the physical integration envelope should be confirmed.

## Mechanical Reference Package

At pilot start, Atlas provides a mechanical reference package for integration review.

This package may include:

• 3D STEP model  
• 2D mechanical drawing  
• connector location reference  
• board outline and keep-out guidance  
• mounting hole pattern  
• recommended cable clearance zones  

These files allow the robot team to assess Atlas placement inside the chassis and validate mechanical compatibility before prototype integration.

---

## Thermal Integration

Atlas is designed for embedded robotics integration and should be mounted as part of the robot’s thermal strategy.

Typical pilot guidance includes:

• passive mounting to an aluminum plate or chassis surface  
• optional thermal interface material between Atlas and mounting surface  
• review of enclosure airflow and local thermal concentration  
• verification of thermal behavior under representative sensor load  

If required, pilot participants may receive additional thermal mounting guidance for the target enclosure.

---

## Environmental Positioning

The Atlas board itself is not a sealed enclosure product.

Environmental robustness in the final deployment depends on:

• robot chassis protection  
• connector selection  
• harness strain relief  
• mounting method  
• system-level ingress protection strategy  

The pilot phase includes integration review support to help align Atlas with the intended deployment environment.

---

# Power System Integration

Atlas includes managed onboard power distribution to simplify robot sensor architecture.

## Power Integration Goals

The OEM pilot validates how Atlas fits into the robot’s power path, including:

• input voltage compatibility  
• sensor power budgeting  
• protection and brownout behavior  
• startup sequencing  
• fault visibility through telemetry  

---

## Example Power Model

The exact power configuration depends on the pilot hardware definition, but Atlas is designed around protected onboard sensor distribution.

Typical integration topics include:

| Rail / Interface | Purpose | Pilot Review Focus |
|---|---|---|
| Input Power | robot-side supply into Atlas | voltage range, surge tolerance, polarity protection |
| 5V Sensor Rail | powered USB / sensor distribution | total current budget, fault handling |
| 3.3V Aux Rail | low-power sensor and timing interfaces | peripheral budget and noise sensitivity |
| PPS / Timing I/O | synchronization signals | logic-level compatibility and protection |

Detailed rail limits, protection behavior, and load budgets are reviewed as part of the pilot integration package.

---

## Power Budget Review

A practical power budget is created during the pilot based on the real production sensor stack.

This typically includes:

• number of connected sensors  
• per-sensor power draw  
• Atlas board overhead  
• startup current behavior  
• margin for peak and transient load  

This helps the engineering team determine whether Atlas can cleanly support the intended sensor group while keeping the compute platform power domain separate.

---

# Software Integration Model

The OEM Integration Pilot includes a defined software partnership model to help Atlas fit cleanly into the robot software stack.

## Atlas Software Role

Atlas combines firmware on the device with host-side integration components.

### On-Device Firmware

Firmware running on the Atlas timing and telemetry engine is responsible for functions such as:

• power and health supervision  
• timing management  
• sensor telemetry routing  
• synchronization state reporting  
• configuration handling  

### Host-Side Integration

On the robot compute platform, Atlas integrates through lightweight host-side software components that may include:

• device enumeration support  
• telemetry and diagnostic access  
• synchronization status access  
• timing-aligned data handling  
• optional ROS2-facing integration layer  

The exact software packaging depends on the pilot scope and target platform.

---

## Operating System and Middleware Support

Pilot software integration is aimed at standard robotics development environments.

Typical target environments include:

• Ubuntu 20.04 LTS  
• Ubuntu 22.04 LTS  
• PREEMPT_RT environments where applicable  
• ROS2-based stacks  
• non-ROS Linux applications using native APIs  

Where needed, the pilot may also include discussion of Yocto / Buildroot integration paths for embedded OEM environments.

---

## ROS2 and Native Integration

For ROS2 systems, the pilot integration scope may include:

• launch configuration guidance  
• topic mapping guidance  
• frame and timestamp alignment strategy  
• status / health topic publication  
• integration into perception or localization pipelines  

For non-ROS systems, Atlas may be integrated through native software interfaces such as:

• C++ application interface  
• Python bindings or utility scripts  
• diagnostic or configuration CLI tools  

The pilot program defines the cleanest path based on the customer stack rather than forcing a single middleware assumption.

---

# Time Synchronization Model

Precise timing is one of the core reasons teams move from evaluation into pilot.

## Atlas Timing Role

Atlas acts as a deterministic timing boundary across heterogeneous sensors.

Depending on deployment needs, Atlas may operate as:

• timing authority within the sensor domain  
• timing consumer of an external PPS source  
• synchronization coordinator for multiple device classes  

---

## Timing Inputs and Outputs

Atlas pilot designs may include:

• PPS input from GNSS or external system time source  
• PPS output to downstream devices  
• trigger output for synchronized capture  
• configurable timing interfaces aligned to the sensor stack  

These are reviewed during the pilot to ensure electrical and architectural compatibility.

---

## Synchronization Approach

The pilot validates how synchronization is achieved in the real robot system.

This includes topics such as:

• timestamp origin strategy  
• trigger alignment  
• PPS discipline  
• offset correction strategy  
• latency and jitter characterization  
• synchronization validation under real operating conditions  

Pilot success is typically defined by system-level synchronization metrics, not just component-level behavior.

---

# Sensor Integration and Data Capacity

The pilot phase also validates Atlas against the actual sensor mix planned for the robot.

## Typical Sensor Categories

Atlas may be evaluated with combinations of:

• USB cameras  
• USB LiDAR  
• Ethernet LiDAR  
• serial GNSS  
• IMU modules  
• auxiliary UART, SPI, or I2C sensors  
• externally synchronized devices  

---

## Capacity and Bandwidth Review

A pilot integration review usually includes:

• number of sensors to be connected  
• data path type for each sensor  
• bandwidth constraints  
• compute-side interface assumptions  
• cable and harness routing limitations  

The pilot is the right phase to determine whether the reference Atlas configuration is sufficient or whether a white-label hardware variation is needed.

---

# White Label Hardware Adaptation

A key outcome of the pilot is defining how Atlas transitions from evaluation hardware to a deployment-oriented OEM configuration.

This may include:

• custom connector selection  
• revised port layout  
• harness-specific pinouts  
• mounting adjustments  
• electrical adaptation for the robot timing scheme  
• Atlas-as-module vs Atlas-on-main-board discussions  

The white-label model allows Atlas to evolve from a reference board into a platform-aligned subsystem.

---

# Reliability and Field Readiness

The OEM Integration Pilot is also where Atlas is evaluated as a deployable infrastructure component rather than only a lab tool.

Typical reliability topics include:

• long-duration uptime  
• fault reporting  
• brownout and recovery behavior  
• sensor reconnection handling  
• thermal stability under sustained load  
• cable retention and harness stability  

Where applicable, the pilot can define the expected fallback behavior if timing lock or a sensor heartbeat is lost.

---

# Support Model During the Pilot

Pilot participants receive structured engineering support throughout the engagement.

Typical support may include:

• dedicated technical communication channel  
• scheduled engineering sync meetings  
• review of mechanical and electrical integration questions  
• software integration guidance  
• validation review support  
• access to pilot-stage technical documentation  

The goal is to reduce blockers quickly and shorten the path from evaluation success to deployment decision.

---

# Pilot Deliverables

Pilot deliverables depend on scope, but commonly include the following:

• integration planning package  
• mechanical reference files  
• pilot hardware configuration definition  
• software integration guidance  
• synchronization validation plan  
• system-level performance review  
• production handoff discussion package  

For qualified pilot engagements, additional documentation may be made available under the appropriate agreement structure.

---

# Measuring Pilot Success

Success criteria are defined jointly at the start of the pilot.

Typical pilot success metrics may include:

• successful integration with the target sensor stack  
• validated synchronization across required devices  
• stable operation over defined test duration  
• acceptable thermal and power behavior  
• successful software integration into the target stack  
• readiness for production planning discussion  

The pilot is intended to end with a clear engineering conclusion, not an open-ended experiment.

---

# Frequently Asked Pilot Program Questions

## What changes after the Evaluation Kit phase?

The Evaluation Kit proves Atlas value in a controlled reference setup.

The OEM Integration Pilot moves that value into your actual robot architecture by adapting Atlas around your sensor list, software stack, mechanical constraints, and deployment goals.

---

## Does the pilot include software integration support?

Yes. The pilot is not limited to hardware review.

The program includes software integration guidance appropriate to the robot stack, which may include telemetry integration, synchronization handling, ROS2 integration guidance, diagnostic access, and host-side configuration support.

---

## Does Atlas require ROS2?

No.

ROS2 is supported where relevant, but Atlas can also be integrated into Linux-based non-ROS systems through native software interfaces and deployment-specific host integration.

---

## Can Atlas work with sensors that do not expose hardware sync pins?

Yes.

One of the reasons Atlas is valuable is that it can improve timing coordination in heterogeneous systems where not all sensors provide native synchronization interfaces. The exact synchronization strategy depends on sensor class and deployment architecture.

---

## Can Atlas support higher-end synchronized sensors too?

Yes.

The pilot is the correct stage to define how Atlas interacts with sensors that already support PPS, trigger, PTP, or other synchronization methods. In these systems, Atlas can serve as the timing backbone or coordination layer across the full sensor domain.

---

## What if our cameras use GMSL or FPD-Link instead of USB?

That can be discussed during the pilot scoping phase.

In these architectures, Atlas may still serve as the control-plane timing authority even when high-speed video data follows a different physical transport path.

---

## Can trigger offsets be scheduled to reduce sensor interference?

Pilot-specific timing behaviors such as phased trigger scheduling can be reviewed as part of the program scope if the target sensor stack requires them.

---

## Do we need to buy production boards only from SensorDeck?

Not necessarily.

The White Label OEM model is designed to support multiple commercialization paths depending on program scope, manufacturing strategy, and agreement structure. The pilot phase is where those options are aligned.

---

## What support is included during the pilot?

Pilot participants typically receive direct engineering support, structured sync meetings, and access to the pilot documentation set needed to complete integration and validation work.

---

## How is firmware handled during the pilot?

Pilot firmware is managed as part of the engineering engagement.

Version tracking, feature alignment, update procedures, and any pilot-specific firmware behavior are defined during the program. Deployment-grade update flow can also be discussed where relevant.

---

## What happens after a successful pilot?

A successful pilot typically leads to production planning discussions.

Those discussions may include:

• pilot-to-production hardware transition  
• firmware and software handoff model  
• supply and lead-time planning  
• commercial terms  
• support structure for deployment scale-up  

---

# Post-Evaluation Next Step

Once your internal team has reviewed the evaluation results, the next step is a **White Label OEM Integration Pilot scoping discussion**.

That discussion typically covers:

• production sensor list  
• target compute platform  
• mechanical integration approach  
• timing requirements  
• software environment  
• desired pilot timeline  

The purpose of the scoping step is to determine whether Atlas should move forward as a deployment-oriented subsystem inside your next prototype or production candidate architecture.

---

# Final Positioning

The Atlas Evaluation Kit proves that deterministic timing improves system behavior.

The Atlas White Label OEM Integration Pilot is the structured path that converts that result into a real deployment program.

For engineering leads, this pilot is not just a technical trial. It is the framework for deciding whether Atlas should become part of the robot’s production sensor and timing infrastructure.
