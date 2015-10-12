---
category: Blog
layout: blog_post
title: "WinCC Performance Monitor"
page_title: "WinCC Performance Monitor"
tags: ["KPI",Siemens"]
image: "/img/winccDataOverview.png"
author: "Alex Marcy"
author-email: "alex@corsosystems.com"
blurb: "<p>Siemens' performance management suite has three major components, the database, process communications and reporting/analysis. This post details the database and communications systems and how they can be used to integrate WinCC Performance Monitor into your process.</p>"
date: "14-11-2014"
---

<p>Most systems your company uses are going to have a few common components. You need a way to get data into the system, a way to analyze that data, and a way to view the results. WinCC Performance Monitor operates the same way. Data from your process control system is brought into the system using the WinCC data manager, stored in a SQL Server database and accessed in reports using Simatic Information Server.</p>

<p>In this post we will give you an overview of how WinCC Performance Monitor models your process and data is brought into the system. The next post will discuss how to access the data using Simatic Information Server in addition to integrating with other business systems you may be using.</p>
<br/>
<h5><b>Modeling Your Process</b></h5>
<img src="/img/perfMonTree.png" width="430px"/>
<p>WinCC Performance Monitor allows you to easily model your process equipment and processing lines. This is done is by defining overall equipment types or process areas and instantiating these types with instances for each piece equipment in your plant.</p> 


<p>In addition to creating template types for your equipment, you can associate datapoints from your process to your model allowing you calculate OEE or any other KPI you can come up with. You can create custom KPIs with customizable calculations to meet any reporting or analysis requirements you might have.</p>

<img src="/img/perfMonKPIs.png" width="430px"/>
<p>Using your WinCC HMI application allows you to enter your production schedules, shifts, planned downtime and other manual data into the system. Utilizing your actual production schedules allows you to analyze data by shift, crew, and by date giving you the ability to further understand how your entire plant, including personnel, is doing.</p>

<p>By utilizing the detailed modeling capabilities of WinCC Performance Monitor you are able to generate standard metrics such as OEE and production throughput while also having the ability to incorporate manually entered data to generate any KPI you could possibly need to monitor.</p>

<br/>
<h5><b>Tracking Your Process</b></h5>
<p>WinCC Performance Monitor uses actual process data to track things like downtime and production losses. You can implement complex hierarchies to track the effect of upstream or downstream process upsets. You can also generate automatic reason codes for process events or manually enter them after the fact, enabling you to easily find the most common issues your plant faces.</p>

<p>All of the data tracked by Performance Monitor is accessible in WinCC with standard trending and dashboard controls or using <a href="/blog/simatic-information-server.html">Simatic Information Server</a> and can be integrated into other business systems directly through the database. This gives you the ability to truly turn your process data into useful information from the shop floor to the top floor.</p>

<br/>
<h5><b>Communicating With Your Process</b></h5>
<p>Data from your process is brought into WinCC Performance Monitor directly from your WinCC HMI application. You don't need to configure a separate communication system like on some other platforms. This reduces the amount of time to implement the system as well as reducing the amount of time to troubleshoot any communication issues in the first place.</p>

<br/>
<h5><b>A Full-Service Performance Management Solution</b></h5>
<p>Implementing WinCC Performance monitor gives you accurate, real-time tracking of your processes' performance and the tools you need to analyze and improve operations directly in your HMI. In addition to tracking OEE and its components, downtime, throughput, and cycle time, you can create any KPI you could possibly need with the ability to create your own calculations.</p>

<p>WinCC Performance Monitor is an easy to configure and use tool capable of giving you the ability to understand and manage your process at an extremely detailed level.</p>



