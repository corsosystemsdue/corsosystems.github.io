---
category: CaseStudy
layout: case_study
title: "Casino Gaming Conveyor System Upgrades"
description: "Upgraded the conveyor system at a leading casino gaming manufacturing facility increasing productivity and efficiency."
tags: [ "Manufacturing Execution System (MES)", "Database Management", "PLC", "HMI"]
image: "/img/slotfloor.jpg"
summary: "A casino gaming manufacturing facility increased productivity after working with us to re-design and integrate their control system with SAP."
case_study_title: "Casino Gaming Conveyor System Upgrades"
date: "2014-12-16"
detail_summary: "<p>An in-house integrator at a large casino gaming machine manufacturer had implemented a conveyor control system prior to retiring from the company. After his departure and near constant supervision of the system, productivity dropped due to in-process machines being sent to incorrect locations, a holding and re-work area not functioning correctly and various other issues. Our staff was brought in to bring the system up to industry standards and bring productivity to desired levels.</p>"
industry: "Manufactured Goods"
location: "Reno, NV"
services: "SCADA implementation, Database management, Process Analytics, Process Optimization"
results_table: "Results"
focus: "<li>Bring system to modern standards</li><li>Reduce process upsets</li><li>Increase productivity</li>"
drive: "<li>Develop system using cutting-edge hardware and software</li><li>Implement system and train personnel on its operation</li><li>Improve process efficiency</li>"
results: "<li>Modern system</li><li>Process upsets reduced to near zero</li><li>Increased productivity</li>"
solution: "<p>Our staff worked with the in-house integrator prior to his departure to understand his design methodology, current issues with the system and future plans for further development. We familiarized ourselves with the existing code base and met with the system's stakeholders to formulate a plan moving forward.</p><p>Over the course of a few evenings when the line was down we began resolving issues with the Transaction Manager configuration passing incorrect data from the PLC to SQL Server. This exposed several race conditions in the logic preventing some machines from being sent to technician workstations and instead being sent to the end of the line as if they were complete machines. We resolved the race conditions and implemented similar changes to a machine holding/re-work re-entry area at the end of the line. During continued operation of the system we noticed some pallets consistently being sent to incorrect locations on the line and further research indicated the RFID tags on the pallets were incorrectly installed. Resolving this issue along with the logic changes reduced runaway machines from 50+ per shift to less than one a day on average.</p><p>Once all of the logic issues on the line were resolved we completed integration with the company's SAP ERP system to integrate scheduling and inventory data into the control system to better utilize the technicians on the line. </p>"
technology: "<li>FactoryTalk View SE</li>
	<li>FactoryTalk Transaction Manager</li>
	<li>Allen Bradley CompactLogix PLCs</li>
	<li>Allen Bradley PanelView Plus</li>
	<li>SQL Server</li>
	<li>SAP ERP</li>
	<li>RFID tags and scanners</li>"
benefits: "<p>
	        <span class=\"glyphicon glyphicon-chevron-right\"></span> After upgrades the system met industry standards for logic and safety</p>
	    <p>
	     	<span class=\"glyphicon glyphicon-chevron-right\"></span> The control system was fully integrated into the company's ERP system enabling more precise and traceable scheduling and inventory management</p>
	    <p>
	        <span class=\"glyphicon glyphicon-chevron-right\"></span> The number of machines being sent to incorrect locations was reduced from 50+ per shift to less than one per day on average</p>
	    <p>
			<span class=\"glyphicon glyphicon-chevron-right\"></span> The amount of time spent moving machines back to the front of the line and manually directing them went from full-time to essentially zero</p>
		<p>
			<span class=\"glyphicon glyphicon-chevron-right\"></span> System upgrades found 1/3 of the pallets used on the line had incorrectly installed RFID tags</p>"
type: "Case Study"
---


