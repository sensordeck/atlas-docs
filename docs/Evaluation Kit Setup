Evaluation Kit Contents
Hardware
• Fusion V2 board
• OV9281 USB global shutter camera
• RPLIDAR C1
• BMI088 IMU
Software
• DSIL SDK v0.1
• ROS2 sensor drivers
• Timing validation CLI tools
________________________________________
30 Minutes Quick Evaluation Flow
Step 1 — Connect sensors
Camera → Fusion USB1
LiDAR → Fusion USB2
IMU → Fusion I²C
Fusion → SBC USB3
________________________________________
Step 2 — Launch Fusion
fusion_start
Sensors are automatically detected.
________________________________________
Step 3 — ROS2 verification
ros2 topic list
Example output
/fusion/camera0/image
/fusion/lidar0/scan
/fusion/imu/data
________________________________________
Step 4 — Timing validation
dsil-sync-check
This verifies cross-sensor time alignment.
________________________________________
Expected Result
Typical evaluation metrics
• Cross-sensor offset < 1 ms
• Stable synchronization during long runtime
• Deterministic timestamp origin
The Goal of This Evaluation
We are not asking for a purchase decision today.
We are simply asking for one engineering evaluation.
If Fusion proves valuable in your robotics platform, we can explore production integration.
If it does not meet your requirements, the evaluation ends with no obligation.
________________________________________
Evaluation Timeline
Evaluation partners signing the LOI will receive priority access to the first evaluation kits.
________________________________________
Development and Evaluation Timeline
Step 1 — Evaluation LOI Signed
Your engineering team confirms interest in evaluating the Fusion + DSIL platform.
________________________________________
Step 2 — Seed Round Closing
Seed funding enables final engineering completion and production of the evaluation kits.
________________________________________
Step 3 — Platform Completion (60–90 days)
Fusion V2 hardware
•	DSIL SDK v0.1
are finalized and prepared for partner testing.
________________________________________
Evaluation Phase
Day 1 — Evaluation Kit Shipped
Fusion V2 hardware + DSIL SDK delivered.
________________________________________
Day 2–3 — Kit Arrival
Engineering team receives the hardware.
________________________________________
Day 3 — Initial Validation (~30 minutes)
Sensors connected to Fusion.
ROS2 topics appear and synchronization is verified.
________________________________________
Day 7–14 — Optional Stability Testing
Run multi-sensor workloads and long-duration tests.
________________________________________
Day 30 — Production Discussion
Engineering teams determine whether to explore production integration.

Evaluation Process after Signing
•	No purchasing approval or legal review is required at this stage.
•	Technical Introduction Call (30 minutes) Within 3–5 business days
•	SensorDeck engineering team schedules a short call to introduce the Fusion architecture and confirm the evaluation plan. 
•	Evaluation Kit Shipment Evaluation hardware and SDK access are shipped to the partner engineering team according to the early partner schedule. 
•	Engineering Evaluation Period Partners test Fusion within their sensor stack and provide feedback. 
•	SensorDeck engineers support integration and collect evaluation results. 
•	This LOI only expresses technical evaluation interest and does not create purchasing obligations or procurement commitments. 



________________________________________
Hardware Proof of Execution
Fusion V1 was developed to validate the core system architecture before the production-ready Fusion V2 platform.
This prototype platform allowed internal validation of:
• sensor synchronization architecture
• multi-sensor data aggregation
• hardware timestamp injection

 
Fusion V1 PCB


Fusion V1 Hardware Prototype
• Functional power rail architecture
• UVC + CDC aggregation over single USB link
• Deterministic timestamp boundary implementation

Hardware Availability 
Evaluation kits are produced in a limited pilot batch. Early evaluation units will ship to LOI partners within 45–60 days. Fusion V1 prototype boards are already operational internally and available for early technical validation with selected partners. 




________________________________________
Evaluation LOI
Title:
Evaluation and Production Exploration Letter of Intent
________________________________________
Company: _______________________
We confirm that we have received the Fusion + DSIL evaluation materials from SensorDeck.
We agree to:
• Evaluate the Fusion system in our robotics platform
• Provide engineering feedback during testing
• Discuss potential production integration if evaluation results are positive
We understand that:
• This LOI is non-binding
• It does not constitute a purchase commitment
________________________________________
Signed
Name: _____________________
Title: _____________________
Company: _____________________
Date: _____________________

Notes:
SensorDeck is an early-stage robotics infrastructure company currently raising its seed round. The Fusion hardware architecture and DSIL SDK have already been internally validated on working prototype boards. Evaluation hardware production is pre-funded and not dependent on financing completion. The company is currently working with early robotics partners for architecture evaluation.



________________________________________
Technical Decision Summary
This section summarizes the practical engineering reasons robotics teams decide to evaluate Fusion.
________________________________________
Core Engineering Value
Engineering Factor	Traditional Approach	With Fusion
Sensor integration time	2–4 weeks	1–3 days
First-platform development cost	$40k–$60k	~$20k (100 robot units)
Cross-SKU reuse	Rebuild integration per robot	Shared architecture across robot platforms
Sensor timing infrastructure	Custom per project	Reusable DSIL SDK backbone
Fusion allows engineering teams to reduce infrastructure development effort and focus on autonomy, perception, and product differentiation.
________________________________________
Platform Architecture Advantage
Fusion introduces a reusable sensor integration backbone for robotics platforms.
The DSIL SDK layer standardizes sensor timing, synchronization, and data alignment before data reaches the compute platform.
Once integrated, the same architecture can scale across:
• multiple robot SKUs
• next-generation hardware platforms
• different robotics verticals
Examples:
• AMR warehouse robots
• outdoor UGV platforms
• inspection robots
• service robots
Instead of rebuilding sensor synchronization infrastructure for every platform, teams can reuse the DSIL backbone across product lines, improving system stability while reducing engineering overhead.
________________________________________
Evaluation Program Availability
The initial evaluation program includes a limited number of engineering evaluation kits.
Early evaluation partners receive:
• priority access to evaluation hardware
• direct engineering communication with the development team
• early influence on DSIL SDK feature priorities
Evaluation kits will be shipped after completion of the Fusion V2 + DSIL SDK v0.1 release.
________________________________________
What Early Evaluation Partners Receive
Teams signing the evaluation LOI receive:
✓ priority access to the first Fusion V2 evaluation kits
✓ direct engineering support from the SensorDeck team
✓ opportunity to provide feedback during DSIL SDK development
✓ early access to a reusable DSIL infrastructure backbone for future robot platforms
