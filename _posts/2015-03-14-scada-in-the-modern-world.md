---
category: Blog
layout: blog_post
title: "SCADA in the Modern World - The Web Browser"
page_title: "Automation in the Modern World - The Web Browser"
tags: ["Educate", "General"]
image: "/img/scadaweb.png"
author: "Alex Marcy"
author-email: "alex@corsosystems.com"
blurb: "<p>Off-the-shelf automation software isn't always up to speed with the rest of the world. Let's take a look at why and how we are working to change that fact.</p>"
date: "14-03-2015"
---

<p>Off-the-shelf automation software isn't always up to speed with the rest of the technological world. Let's take a look at why and how we are working to change that fact.</p>
<br/>
<h4>The World is Moving Quickly</h4>

<p>With mobile devices in everyone's pocket and the Internet of Things becoming the next buzzword, it is time to take a look at the state of most automation software and one of the ways we have brought our customers' automated systems up to speed with the rest of their technological lives.</p>

<img src="/img/trendadv.png" width="430px"/>
<br/>
<p>Last week we were wrapping up the final portions of a project with a customer who was using Rockwell Automation's FactoryTalk ViewPoint package for web-based access to their HMI system. ViewPoint works very well for this use case and the customer was satisfied with the investment in the software, but we ran into one small issue. One of the maintenance staff members tried to open the ViewPoint site on his phone and was quickly stopped in his tracks when Apple's iOS wouldn't let him use Microsoft Silverlight.</p>

<p>The easiest, and suggested by Rockwell, solution to this problem was to open a remote desktop session app on the phone to access a computer on the control system network and use its web browser to access the HMI screens. This technically works but unless you have a server set up for remote access you will be limited to one person accessing the site on a mobile device at a time. After less than a minute of discussion we determined the most common use case for this system would be severely hampered by this setup and needed a work-around.</p>

<br/>
<h4>Spinning the Web</h4>

<p>Some software platforms such as Inductive Automation's Ignition or Siemens' WinCC OA platform give you the ability to easily access your data on a mobile device. For other platforms where this is more difficult, or for systems with a panel-based HMI where the customer needs better trending/reporting functionality we have a solution.</p>

<p>Our solution uses the existing information infrastructure at a lot of facilities to expose data to mobile devices, with a single site accessible on any device from a desktop PC to a tablet or smartphone, automatically displaying information in an easy to use way.</p>

<br/>
<h4>The Flow of Information</h4>

<p>A very simplified diagram describes the flow of information through the system:</p>

<img src="/img/scadaweb.png" width="430px"/>
<br/>
<p>The user opens their web browser and accesses the server where the website is being hosted. Typically this is on a server in a corporate datacenter with access to the control system data stored in a process historian.</p>

<p>The web server takes various parameters such as a date range, tag/datapoint selection, etc., and uses an ODBC connection to a process historian to get the data the user wants to see. The historian is continuously collecting data from the process. In some cases, direct access to the controls network needs to be restricted for security reasons. In this case the process data required for the we-based system can be stored in a separate database accessible to the web server.</p>

<p>Data from the historian is then displayed in the interface in various ways using different tools and controls available in the browser. As a general rule the functionality of these controls is very flexible, giving you the ability to display and interact with your information in almost any way you might need.</p>

<br/>
<h4>Tools of the Trade</h4>
<p>A seemingly endless number of tools exist to display your process data in useful ways, turning it into information you can use to inform yourself of process conditions at any point in time. These include advanced trending tools giving you the ability to mix different graph types with one another, display discrete events with detailed information available as tooltips, the ability to save trend settings, the trend to an image, the data to Excel or CSV, and just about anything else you might wnat to do with your data.</p>

<p>Other common tools are searchable and sortable tables with the ability to re-order columns, dashboard elements, scheduling layout tools, and email/SMS notifications.</p>

<p>One of the powerful features of web-based systems is the ability to easily tie together different systems in compelling ways. A system we recently developed displayed process values on a trend with alarms and events shown on the trend. Hovering over an alarm on the trend displays a tooltip with the timestamp, information about the alarm, and highlights the corresponding alarm in a table view of all of the alarms below the trend.</p>

<p>Other examples are displaying data from other business systems on the same page with process data. Product quality data can be mapped to production runs giving you additional insight into how your process conditions affect quality. Production scheduling data can be displayed alongside scheduled maintenance to optimize work load during downtimes. Just about any information you use can be displayed in new and interesting ways not currently available in most off the shelf software packages.</p>

<br/>
<h4>Closing the Loop</h4>

<p>To help solve our customers' issue with ViewPoint we recreated the HMI screen more than one person would need to access simultaneously on a phone in a web-based format. This page displays their process tank levels with animated levels and volume displays. The site gets the current levels from the process historian, automatically updates the values every second and is accessible by anyone with a user account from any device they have on hand. The page automatically scales to any device and gave the customer exactly the functionality they needed with only a couple hours of development time from concept to production.</p>

<br/>
<h4>Wrapping Up</h4>

<p>This is a fairly basic overview of the process required to develop a web-based interface for your process information. For more examples of solutions we have implemented please check out some of our case studies on <a href="http://corsosystems.com/casestudy/product-data-management-system/">Production Management</a> and <a href="http://corsosystems.com/casestudy/process-change-management-system/">Change Management</a> systems, or <a href="http://corsosystems.com/contact">contact us</a> and we can give you a demo of some of the live systems our customers are using to view their process data on all of their devices.</p>

