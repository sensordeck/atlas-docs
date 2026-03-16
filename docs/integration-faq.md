---
title: Integration & Deployment FAQ
sidebar_position: 7
---

# Integration & Deployment FAQ

The following information helps robotics teams quickly evaluate Atlas for integration into real robot platforms.

## Mechanical CAD and Dimensions

Robotics teams must verify mechanical fit before evaluating a hardware platform.

Atlas provides mechanical references for chassis integration.

**Available mechanical assets**

- 3D STEP model of the Atlas reference board
- Mechanical drawing with board outline
- Mounting hole pattern and spacing
- Connector heights and keep-out zones

**Downloads**

- Atlas Mechanical STEP Model
- Atlas Mechanical Drawing (PDF)

## Thermal Envelope

Atlas is designed for deployment in mobile robotics environments.

| Parameter | Specification |
| --- | --- |
| Operating Temperature | -40 C to +85 C |
| Cooling | Passive conduction or chassis mounting |
| Typical Power Dissipation | 6 W to 8 W depending on sensor load |
| Fan Requirement | Not required |

Atlas is designed to operate fanless when mounted to a robot chassis or aluminum mounting plate that provides basic heat spreading.

## Power Capability

Atlas includes an onboard protected power distribution system that powers connected sensors.

| Rail | Maximum Available | Typical Usage |
| --- | --- | --- |
| 5V Sensor Rail | 3 A | USB cameras and USB LiDAR |
| 3.3V Sensor Rail | 1.5 A | IMU and GNSS modules |
| PPS and Timing IO | less than 50 mA | Synchronization signals |

## Example Supported Configuration

| Sensor | Power |
| --- | --- |
| 2 x USB LiDAR at 5 W each | 10 W |
| 3 x UVC cameras at 2 W each | 6 W |
| IMU plus GNSS | 1 W |
| **Total** | **17 W** |

This configuration remains within the Atlas power envelope.

Atlas power outputs include:

- Over-current protection
- Short-circuit protection
- Brownout protection
- Power fault telemetry to the MCU

## Sensor Capacity

Atlas supports typical robotics sensor stacks.

| Interface | Typical Devices |
| --- | --- |
| USB 3.0 | UVC cameras and USB LiDAR |
| UART | GNSS and navigation sensors |
| SPI | IMU |
| I2C | Auxiliary sensors |
| PPS | Timing reference |

Atlas aggregates these sensors into a single upstream connection to the robot compute platform.
