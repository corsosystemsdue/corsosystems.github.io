---
category: Blog
layout: blog_post
title: "FactoryTalk Metrics - The Backend"
page_title: "FactoryTalk Metrics - The Backend"
tags: ["KPI", "OEE", "FactoryTalk","Metrics"]
image: "/img/plantModel.png"
author: "Alex Marcy"
author-email: "alex@corsosystems.com"
blurb: "<p>FactoryTalk Metrics has three major components, the database, process communications and reporting/analysis. This post details the database and communications systems and how they can be used to integrate FactoryTalk Metrics into your process.</p>"
date: "11-11-2014"
---

<p>Most systems your company uses are going to have a few common components. A way to get data into the system, a way to analyze that data and a way to view the results. FactoryTalk Metrics operates the same way. Data from your process control system is brought into Metrics using FactoryTalk Transaction Manager, stored in a SQL Server database and accessed in reports using Report Expert or along with real-time process data visualization using FactoryTalk VantagePoint.</p>

<p>In this post we will give you an overview of how FactoryTalk Metrics models your process and data is brought into the system. The next post  will discuss how to access the data using Report Expert and FactoryTalk VantagePoint in addition to integrating with other business systems you may be using.</p>
<br/>
<h5><b>Modeling Your Process</b></h5>
<p>FactoryTalk Metrics allows you to logically model your entire process. This is done is by defining areas known as "work cells". In a typical configuration a work cell would be mapped to a specific area of the process, for example, packaging or raw material feed. For each work cell you can track OEE and its components, downtime, throughput, and production cycle times in addition to various events from your process.</p>

<p>Work cells are comprised of various pieces of equipment. In a packaging work cell at a food and beverage facility you may have a former, a filler, a sealer, and a metal detector. You can track downtime, throughput, cycle time, and events for each piece of equipment in your work cell.</p>

<img src="/img/plantModel.png" width="430px"/>

<p>FactoryTalk Metrics also allows you to enter your production schedules, shifts and planned downtime. Utilizing your actual production schedules allows you to analyze data by shift, crew, and by date giving you the ability to further understand how your entire plant, including personnel, is doing.</p>

<p>By utilizing work cells and production scheduling to model your facility you can use FactoryTalk Metrics to get a detailed view of every piece of equipment in your entire facility during all of your scheduled production runs. You also have the ability to monitor how each piece of equipment contributes to your process losses. This removes operator error in tracking process upsets and gives you a true view of the health of your plant.</p>

<br/>
<h5><b>Tracking Your Process</b></h5>
<p>Work cells and equipment utilize events to trigger downtime start/end times, track throughput and changes in cycle times. This allows you to configure complex conditions for tracking downtime including when upstream or downstream issues cause production losses at any point in the process. Each event can utilize manually entered information, including reason codes.</p>

<p>The true power of events comes into play when you implement automatic reason code tracking. This feature allows you to easily determine when your process went down, what piece(s) of equipment took it down, and the exact reason for the problem. This allows you to understand, on great detail, the cause of your most common production losses, allowing you to quickly and clearly prioritize maintenance and process changes to affect your bottom line.</p>
<img src="/img/events.png" width="430px"/>

<p>All of the data tracked by FactoryTalk Metrics is accessible using the included <a href="/blog/factorytalk-metrics-data-analysis.html">analysis tools</a> and can be integrated into other business systems directly through the database. This gives you the ability to truly turn your process data into useful information from the shop floor to the top floor.</p>

<br/>
<h5><b>Communicating With Your Process</b></h5>
<img src="/img/transMgr.png" width="430px"/>
<p>The central nervous system of FactoryTalk Metrics is FactoryTalk Transaction Manager. The data from your PLCs can be stored directly into a SQL Server database using FactoryTalk Transaction Manager. This allows you to populate the FactoryTalk Metrics database, and also to get real-time process data directly into any of your other SQL Server based systems without having to go through a Process Historian. Granted you don't want to store all of your process data this way, still it is extremely useful to save some manual data entry into you ERP system for example.</p>

<br/>
<h5><b>A Full-Service Performance Management Solution</b></h5>
<p>Implementing FactoryTalk Metrics gives you accurate, real-time tracking of your processes' performance and the tools you need to analyze and improve operations. In addition to tracking OEE and its components, downtime, throughput, and cycle time, you can incorporate data from your PLCs directly into any of your other SQL Server based systems using FactoryTalk Transaction Manager.</p>

<p>FactoryTalk Metrics is an easy to configure and use tool capable of giving you the ability to understand and manage your process at an extremely detailed level.</p>



