---
layout: case_study
title: "Wonderware Historian Implementation for Environmental Impact Reporting"
description: "Implemented Wonderware Historian to collect process and emissions data to automatically generate reports for state environmental impact reporting requirements."
tags: ["Mining", "Process Analytics","Process Historian","Database Management"]
permalink: /case_studies/mining/gold-mine-wonderware-historian
type: "Case Study"
---

<h3>Summary</h3>
<p class="left-align">A small mine in Nevada required automatic pollution reporting and data collection to meet EPA regulations.</p>

<h3>Benefits</h3>
<ul class="left-align">
	<li>Automated daily reporting of pollutant use and discharge directly to the State Department of Environmental Protection</li>
	<li>Reporting functionality allowing regulators or mine personnel to review reports from any day after the system was implemented</li>
	<li>Process data now stored in a Historian allowing for better data analysis and tracking</li>
</ul>

<h3>Technology</h3>
<ul class="left-align">
	<li>Wonderware Historian</li>
	<li>Wonderware Historian Client</li>
	<li>SQL Server</li>
</ul>

<h3>Solution</h3>
<p class="left-align">A small gold mine outside of Elko Nevada was required by the State Department of Environmental Protection to submit daily reports detailing pollutant use and discharge along with some process data to verify the readings.</p>

<p class="left-align">We installed and configured Wonderware Historian to collect and store process data along with Wonderware Historian Client to populate an Excel report at the end of each day. When the report was created we ran a SQL Server stored procedure to print the Excel report to PDF and upload it to the Department of Environmental Protection's FTP server.</p>