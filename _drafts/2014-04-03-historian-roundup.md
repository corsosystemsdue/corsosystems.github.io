---
category: Blog
layout: blog_post
title: "Historian Roundup"
page_title: "Historian Roundup"
tags: ["Education", "Process Historian", "MES"]
image: "/img/todo1.jpg"
author: "Alex Marcy"
author-email: "alex@corsosystems.com"
blurb: "<p>A process historian is usually the first step towards a fully integrated enterprise. Here we will take a look at some of the popular options on the market, what makes them the same, and what makes them different.</p>"
date: "03-04-2015"
---

<p>A Process Historian's job is simple. Collect data from your process, make it available for trending/reporting/analysis, and run indefinitely.</p>

<p>Each historian has its pros and cons and the right one for you is entirely dependent on your specific situation.</p>

<h4>Configuration, Communication, and Collection </h4>

*(In No Particular Order)

<h4>Rockwell - FactoryTalk Historian</h4>
<h5>Configuration, Communication, and Collection </h5>
Rockwell's FactoryTalk Historian is built on top of the OSI PI engine which is a proven technology capable of handling high amounts of data throughput.

Out of the box FactoryTalk Historian is optimized to communicate with Allen Bradley hardware and can communicate with almost any device using third party OPC servers. 

FactoryTalk Historian utilizes the FactoryTalk Directory infrastructure to manage tags and scan cycles leveraging the "Create Tags Once" methodology to simplify system configuration. Tags can managed in any of three ways, using the FactoryTalk Administration Console by navigating to the tags directly in a PLC, using the PI System Management Tools and configuring tags using a wizard-style interface, or using an Excel Add-in to manage tags in an Excel worksheet.

FactoryTalk Historian provides High Availability or Mission Critical architectures using redundancy to ensure minimal data loss of data in most situations. Using FactoryTalk Historian ME devices at the plant floor level and FactoryTalk View SE at the information systems level, multi-tier and/or remote data collection applications with the capability of store and forward can be implemented.

Data compression algorithms can be configured to minimize storage space and deadband ranges can be configured on each tag to store data only when it changes by a certain amount rather than storing every data point.

<h5>Licensing</h5>
FactoryTalk Historian is licensed based on the number of historical tags you need for your system. The smallest license is for 250 tags, with the options from there roughly doubling at each tier up to 100,000 tags per server.

In addition to the number of licensed tags, FactoryTalk Historian allows you to configure calculated tags such as totalizers without using additional licensed values.

Licensing is required for "third-party" (read non-Allen Bradley) devices, such as OPC servers, PLCs from other manufacturers, Modbus devices, DNP 3.0 devices, etc.

Historical data can be accessed via SQL queries using the VantagePoint CLR using a single VantagePoint user license included with Historian SE. If you need to access data via SQL queries using an ODBC connection you will need to purchase the "Advanced Server Option" license as well as client access licenses (CALs) for database access. The CALs are either for a specific number of named users or unlimited users for the specific number of licensed tags.

In addition to Historian licensing you will have an option or requirement from your distributor to purchase support. This is an annual fee giving you access to Rockwell tech support as well as upgrades to your software as they become available.

As with most software packages licensing requirements should be discussed with an integration professional as well as your regional distributor.

<h5>Data Access/Visualization</h5>
FactoryTalk Historian has a number of data visualization options. If you are using FactoryTalk View you can view trend data using the built-in trend tools.

If you want a more robust tool for trending, reporting, Excel worksheets, etc. you can use FactoryTalk VantagePoint. VantagePoint is a software package with roots in the Wonderware world, built by the same people who created the precursor to their existing package. FactoryTalk Historian SE comes with a single seat VantagePoint license as part of the purchase price, giving you everything you need to get your feet wet.

VantagePoint gives you an excellent trending tool with a full set of analysis features. In addition to time-series trending VantagePoint has an X-Y Plotter allowing you to compare any tags you desire with the option to create a golden batch based on ideal process conditions.

VantagePoint has the option to import your data into Excel reports, opening it up to the full range of functionality you are probably familiar with already.

VantagePoint is a web-based platform with a built-in portal giving you access to any reports you have created with the option to include parameters such as date ranges, tag selection, or any other report parameters you can think of.

In addition to historical data analysis, VantagePoint gives you access to dashboard tools you can use to create rich graphical interfaces for a real-time view of your process.

FactoryTalk Historian also has the ability to work with Excel directly with the purchase of an additional license for the functionality. This allows you to create reports in Excel without spending time learning VantagePoint.

Outside of trending and reporting tools the other main way to access historical data is through database queries. A couple of versions ago FactoryTalk Historian included SQL Server ODBC access out of the box making this form of access extremely easy. For "officially" unconfirmed yet easy to infer reasons, this was likely due to system integrators creating their own software packages competing with VantagePoint (which had recently been acquired by Rockwell). Since then the ODBC connection has been moved to an "Advanced Server License" along with a couple of other features.

To access data using SQL queries, thus making it accessible to other business systems, QA/QC, production, ERP, etc., you can use a feature called the VantagePoint CLR. Basically the VantagePoint CLR is a set of pre-defined queries you can use to access historical data through VantagePoint. The documentation for this feature is very clear and while it adds a few steps to installation and acts as a middleman between you and your data it is pretty easy to use. We have used it on every FactoryTalk Historian installation we have done since it was released and all of our customers have been happy with its performance.

As with most Rockwell products FactoryTalk Historian and VantagePoint are well integrated with Microsoft platforms making it difficult to use other databases or operating systems.


<h5>Inductive Automation - Ignition</h5>
<h5>Configuration, Communication, and Collection </h5>
Inductive Automation's Historian is integrated with their Ignition platform and is designed to store data in a database instead of flat files. 

Data can be collected from almost any device using OPC servers, as well as serial devices using Inductive Automation's Serial Module. 

Enabling historical data collection for a tag is as simple as checking a box. Data can also be configured with scaled values, allowing you to use Ignition to handle whatever a PLC programmer might throw at you.

Inductive Automation's Historian can be deployed across an entire enterprise using their SQL Bridge Module. This gives you the ability to access all of your historical data at any facility or implement store and forward for remote sites.

High Availability or Mission Critical architectures are supported using redundant servers to ensure minimal data loss in the event of a power failure or network upset.

With data stored in SQL tables, the database you are using will dictate the data compression levels attainable compared to the proprietary file formats of other historians. With disk space now an essentially unlimited commodity this is no longer the same concern it might have been 5 years ago. On the plus side you can query tables directly without having to purchase the additional licensing required by some of the other vendors or by going through various middle-tier applications which can cause performance degradation when reading data from the Historian. 

Deadband configuration is available, storing only datapoints as they change instead of storing every point as it is collected.
<h5>Licensing</h5>
Inductive Automation's approach to licensing is simple. If you purchase any of their Ignition tiers above "Lite" you get unlimited historical tags included with your system.

The caveat to this is that you will also need a database license, in addition to Ignition licensing. From the basic Community or Express versions of some of the popular database packages, all the way up to a world-wide enterprise solution you can find a database to meet your needs and budget. Your company likely already has this infrastructure in place making Ignition an easy addition to your arsenal.

Many databases are supported and unlike some of the other offerings on the market you are not limited to SQL Server when using Ignition.

<h5>Data Access/Visualization</h5>

Inductive Automation offers one of the most "open" architectures of any of the major Historian offerings. With data accessible directly through a SQL database you can easily access data for any line-of-business or process programs you are using. 

Trending is handled using Ignition's built-in trending tools. This is a powerful tool used to view real-time or historical data with configurable pens. The other great feature of Inductive's architecture is the ability to seamlessly integrate data from your database with historical data on the trend control. While this is possible in other packages with additional licensing requirements, it works out of the box with Ignition. This is typically manually entered data from non-Inductive Automation databases, such as QA/QC systems, or other line-of-business applications. This provides you the ability to build a single application that can be used across all levels of your organization to access data at any level of detail from the shop floor to the top floor.

Ignition also gives you the ability to access your data in tabular format with table controls. These controls give you direct access to SQL queries allowing you to access any data you might need in any format you can dream up.

With the Reporting Module (included in each tier with historical tags) you have a powerful reporting engine you can use to build reports for any of the data in your system. Reports can include tables, graphs, and images, use dynamic parameters such as date ranges, and be easily exported to image and PDF formats.

The beauty of the Ignition platform is that all of the data access methods are built-into the system from the start. You are free to build systems on top of the historical data as necessary and can easily extend functionality into areas like Manufacturing Execution Systems without having to learn an entirely new software package.





<h5>Wonderware - Historian</h5>
<h5>Configuration, Communication, and Collection </h5>
Wonderware's historical data system, part of their System Platform architecture, is known simply as Historian. Historian is a proprietary system using flat files to store process data. 

Historian allows you to collect and store data from any device using Wonderware's DAServer communication protocols. 

Configuring tags can be done in two ways, first through a wizard-style interface using Wonderware's System Management Console. Secondly you can configure tags using an Excel worksheet with the ability to easily import/export tags. Wonderware's Historian makes it easy to scale tags before their values are written to the Historian, easily handling any data situation you might throw at it.

Historian's architecture is adaptable to many situations including multi-site and multi-tier architectures. This allows you to configure Historian nodes at the plant level which can communicate with a Historian instance at the corporate level acting as a central repository for data from all of your facilities. These architectures also enable High Availability and Mission Critical systems built on the Wonderware platform.

Deadband configuration is available, storing only datapoints as they change instead of storing every point as it is collected.

<h5>Licensing</h5>
Wonderware Historian, like other offerings is licensed based on tag count.

Unlike some of the other packages Wonderware Historian's price begins at free, yes $0.00. You can store data for up to 32 tags without having to purchase or install a license. You are limited to 7 days of data in your Historian database, although if you need more it is possible to copy the data to a different database as necessary.

Beyond the 32 tag license there are various tiers from 500 tags all the way to 2 Million tags each with their own price/support based on your distributor and any price breaks you get through them.

If you are using a non-Wonderware HMI, or are only using Wonderware Historian you will still need to purchase DA Server licensing to communicate with your process equipment with the specifics of what DA Server and licensing you need to be determined on a case by case basis.  As always, this is something your integration and distribution partners can help you navigate.

In addition to tag licensing, you will need to purchase licensing based on how you would like to access the data if you want to use some of the more advanced trending tools as outlined below. These licensing details are based on your system and will need to be worked out as part of your overall system design.

<h5>Data Access/Visualization</h5>
Accessing data in Historian can be accomplished in two ways. First by using Wonderware's Historian Client application which provides rich trending, data analysis and reporting capabilities without requiring any knowledge of database architecture or queries. 

As mentioned in the FactoryTalk Historian section, Wonderware's Historian Client package was created by the same team who created the software that became VantagePoint. While there are a few differences in functionality they are largely very similar packages. 

Nearly all of your bases are covered with Historian Client. A robust trending tool gives you access to all of your time-series data with access to various analysis tools. You can also use an X-Y Scatter Plot with the ability to generate a "golden batch" comparison for your ideal process conditions.

Second, you can access the data through Microsoft SQL Server using Wonderware's query interface. This allows you to use the historical data in other applications such as lab information management or downtime/OEE tracking systems in conjunction with manually entered data from process operators or technicians. Clear documentation is available showing you how to retrieve your data in different formats and we have used this method with great success on many projects.





<h5>Siemens - Simatic Process Historian</h5>
<h5>Configuration, Communication, and Collection </h5>
<h5>Licensing</h5>
<h5>Data Access/Visualization</h5>





<h5>Siemens - </h5>
<h5>Configuration, Communication, and Collection </h5>
<h5>Licensing</h5>
<h5>Data Access/Visualization</h5>



<h4>Comparison</h4>




<h4>Wrapping Up</h4>
