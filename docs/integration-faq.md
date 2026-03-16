---
title: Integration & Deployment FAQ
sidebar_position: 7
---

# Integration & Deployment FAQ

The following information helps robotics teams quickly evaluate Atlas for integration into real robot platforms.

## Mechanical CAD & Dimensions

Robotics teams must verify mechanical fit before evaluating a hardware platform.

Atlas provides full mechanical references for chassis integration.

**Available mechanical assets**

- 3D STEP model of the Atlas reference board
- Mechanical drawing with board outline
- Mounting hole pattern and spacing
- Connector heights and keep-out zones

**Download**

- Atlas Mechanical STEP Model
- Atlas Mechanical Drawing (PDF)

## Thermal Envelope

Atlas is designed for deployment in mobile robotics environments.

| Parameter | Specification |
| --- | --- |
| Operating Temperature | -40°C to +85°C |
| Cooling | Passive conduction / chassis mounting |
| Typical Power Dissipation | ~6–8W depending on sensor load |
| Fan Requirement | Not required |

Atlas is designed to operate fanless when mounted to a robot chassis or aluminum mounting plate that provides basic heat spreading.

## Power Capability

Atlas includes an onboard protected power distribution system that powers connected sensors.

| Rail | Maximum Available | Typical Usage |
| --- | --- | --- |
| 5V Sensor Rail | 3A | USB cameras, USB LiDAR |
| 3.3V Sensor Rail | 1.5A | IMU, GNSS modules |
| PPS / Timing IO | <50mA | Synchronization signals |

### Example supported configuration

| Sensor | Power |
| --- | --- |
| 2 × USB LiDAR (5W each) | 10W |
| 3 × UVC cameras (2W each) | 6W |
| IMU + GNSS | 1W |
| **Total** | **17W** |

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
| USB 3.0 | UVC cameras, USB LiDAR |
| UART | GNSS, navigation sensors |
| SPI | IMU |
| I2C | Auxiliary sensors |
| PPS | Timing reference |

Atlas aggregates these sensors into a single upstream connection to the robot compute platform.
Example command:

```bash
ros2 launch atlas_dsil_bridge telemetry.launch.py
