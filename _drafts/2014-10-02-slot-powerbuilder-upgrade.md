---
layout: case_study
title: "Casino Gaming Manufacturing Facility HMI System Upgrades"
description: "Reverse engineered a PowerBuilder application and implemented its functionality and more using FactoryTalk View SE."
tags: ["Discrete Manufacturing", "Technology Migration","ERP Integration", "Process Analytics","Database Management", "PLC", "HMI"]
permalink: /case_studies/manufacturing/casino-gaming-powerbuilder-upgrade
case_study_title: "Casino Gaming Manufacturing HMI Upgrades"
image: "/img/skyline.JPG"
summary: "A casino gaming manufacturer worked with us to migrate an internally developed system to industry standards using more modern technology."
type: "Case Study"
---

<h3>Summary</h3>
<p class="left-align">A large casino gaming manufacturing company used Sybase PowerBuilder on a stand-alone operator workstation to track where certain games were in the manufacturing process as well as to re-introduct re-worked games into the system for further processing. Our staff reverse-engineered the PowerBuilder application and re-implemented its functionality using FactoryTalk View SE.</p>

<h3>Benefits</h3>
<ul class="left-align">
	<li>After upgrades the system met industry standards</li>
	<li>The system was fully integrated into the company's ERP system enabling more precise and traceable scheduling and inventory management</li>
	<li>Configuration issues requiring frequent re-starts of the PowerBuilder application were eliminated</li>
	<li>The new application incorporated local PanelView Plus screens to provide a full overview of the line from one location</li>
</ul>

<h3>Technology</h3>
<ul class="left-align">
	<li>Sybase PowerBuilder</li>
	<li>FactoryTalk View SE</li>
	<li>FactoryTalk Transaction Manager</li>
	<li>Allen Bradley CompactLogix PLCs</li>
	<li>Allen Bradley PanelView Plus</li>
	<li>SQL Server</li>
	<li>SAP ERP</li>
	<li>Handheld barcode scanners</li>
	<li>RFID tags and scanners</li>
</ul>

<h3>Solution</h3>
<p class="left-align">As part of a larger control system upgrade we worked with the system's stakeholders to understand their shortcomings with the existing system. One of their issues was not being able to see status of the entire line from this particular workstation. This workstation was frequently used by supervisors to track down specific machines required for re-work, signal them to be removed from the line and re-instat them once re-work was complete. They also wanted to use the workstation to handle on-the-fly scheduling changes requested by the purchasing department.</p>

<p class="left-align">We reviewed and reverse engineered the existing codebase and screen layouts from PowerBuilder and re-implemented them as closely as possible in FactoryTalk View SE. From there we implemented new screens incorporating tabular data from the company's SAP ERP system and used scripting to allow the user to select machines in the list and re-direct them to various locations in the line based on the machine's serial number and the pallet it was tied to in the system.</p>

<p class="left-align">We also incorporated a bar code scanner to scan the serial number barcode on each machine to allow machines to be re-introduced to the line from re-work by automatically pulling up their records once they were scanned.</p>