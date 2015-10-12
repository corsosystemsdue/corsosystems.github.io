---
category: Blog
layout: blog_post
title: "Siemens S7-1200 and S7-1500 Web Server Step-By-Step"
page_title: "Siemens S7-1200 and S7-1500 Web Server Step-By-Step"
tags: ["Education"]
image: "/img/todo1.jpg"
author: "Alex Marcy"
author-email: "alex@corsosystems.com"
blurb: "<p>This Step-By-Step tutorial series covers everything you need to know about using the web server in Siemens' S7-1200 and S7-1500 PLCs. After reading this series you will understand how to configure the web server, generate trends from data logs, handle recipe management in the PLC, and build a fully functional HMI and Reporting system you can use in any web browser, with mobile functionality built right in.</p>"
date: "02-06-2015"
---

<h4>Introduction</h4>

<p>These are going to be long posts. By the end of the series you will have the foundational skills to build a fully functional, web-based system with HMI, reporting, recipe management, trending, and dashboard components using only an S7-1200 or S7-1500 PLC, some Javascript and jQuery libraries, and a web-browser. One assumption is you already have some experience with web development, or are willing to dive into a few potentially new concepts. We won't be breaking down the fundamentals of web development here, just showing what you need to know to get data into the various formats required for the pages to work properly.</p>

<p>This article, the first of the series will cover configuring the web server and show you how to implement trends in a custom web page using the S7-1200 and S7-1500's built-in datalogs for historical data.</p>

<p style="color:#f64100;"><b>Why is this useful?</b></p>

For many OEM systems, using a built-in web server in a PLC can save on hardware costs, software costs, and give you a flexible and powerful way to interact with your equipment. You can avoid the hassle of maintaining a database for storing historical data and still give your users access to the information they need to operate most effectively.

By using web-based development frameworks, you can quickly develop a state-of-the-art, eye-popping system to give you a huge head start on some of the other interface options available to you.

<p style="color:#f64100;"><b>What is a web server?</b></p>

<p>A web server is simply software you can access with a web-browser. It acts as the gateway between your browser and any underlying systems such as a database, and returns information to you in the form of a web-site. When you access your favorite news site, their web server generates the articles and sends them to your browser. When you send an email it goes through an email server, and when you configure the web server in your S7-1200 or S7-1500 PLC, it will give you access to datalogs, custom configured web pages you can use for trends, HMI functionality, dashboards, or even recipes.</p>

<p>Let's dive into the process of configuring the web server in your PLC and show you how to use it in some powerful ways.</p>

<h4>Enabling the web server</h4>

<p>The first step is to enable the web server. After opening your application, go to your PLC's Device Configuration menu, select the Web server item in the tree, and check "Activate Web server on all modules on this device". Compile your project and download to the processor</p>

<img src="/img/s7_1200_SBS_1"/>

<p>After you have enabled the web server and downloaded to the PLC you can access the default page by navigating to your PLC's IP address in your browser.</p>

<img src="/img/s7_1200_SBS_2"/>

<p>Using the default website, you can view the Diagnostic Buffer for your PLC:</p>

<img src="/img/s7_1200_SBS_3"/>

<p>and you can access any data log files you may have stored in the PLC:</p>

<img src="/img/s7_1200_SBS_4"/>

<p>The real power of the web server comes into play when you enable user pages, or custom HTML pages you can use to interact with your PLC data, and generate things like trends and dashboard controls for detailed data analysis in your browser.</p>

<h4>Enabling user pages</h4>

<p>The first thing you need to do is create a directory to hold your user pages. In this case we are using a folder called S7_1200_Web on the C:\ drive. Create an HTML file in this directory and put some HTML in so we can verify everything is working properly. For testing this can be the following:</p>

<img src="/img/s7_1200_SBS_5"/>

<p>Save the HTML file as index.html and go back to your project. Scroll about halfway down to the Web Server menu in the Device Configuration tab to "User-Defined Web Pages" and enter the directory where your user pages are stored. Also enter the name of the default page, in this case we will use index.html. You can also enter your application name which will become part of the URL used to access your user pages.</p>

<p>You will also need to add the file extensions we will be using to the "Advanced" section to enable to PLC to generate the proper program blocks so you can access your pages. Typically these will be either .htm or .html, for html pages and .js for javascript files. Enter these extensions in the "Files with dynamic content" box under "Advanced"</p>

<p>By default the PLC will use DB333 and DB334 and so on to store the contents of your user pages. As you add more pages to the directory it will increment the DB number as necessary. If you would like to use a different DB number you can configure these in the "Advanced" section of the Web server configuration, just below the "User Pages" section.</p>

<p>Once you have filled out these sections, click the "Generate Blocks" button to generate the program blocks the PLC will use to store the HTML from your user pages.</p>

<img src="/img/s7_1200_SBS_6"/>

<p>You will then see the program blocks created, in this case DB333 and DB334</p>

<img src="/img/s7_1200_SBS_7"/>

<p>The final step to enable user pages is to add the WWW function to your logic. Specify your Web DB number, in this case 333, and a tag for the return value, then compile and download to the processor.</p>

<img src="/img/s7_1200_SBS_8"/>

<p>Once you have downloaded your logic with the WWW function, you will see a link to the default user page under "User Pages" on the PLC's default web page. You can also navigate to the page directly with the following URL format: http://{ip address of PLC}/awp/{Application Name}/{User Page}.html, or for our PLC http://192.168.0.1/awp/WebDev/index.html</p>

<img src="/img/s7_1200_SBS_9"/>

<p>Navigating to the page will display the HTML page you requested, in this case we will see a basic trend configured based on a data log file in the PLC. This functionality will be covered later in this article.</p>

<img src="/img/s7_1200_SBS_10"/>

<h4>Building Powerful User Pages</h4>

<p>With user pages enabled in the PLC's web server, we can now expand into a lot of different areas. Dashboards, reports, trends, API's, the list goes on. What you choose to do with your pages is entirely dependent on your needs, and we will cover some of the common use cases we have implemented on most of the web-based systems we have developed over the years.</p>

<h5>General Concepts</h5>

<p>While it is possible to include all of your HTML and Javascript/jQuery code in your user pages directory and on the PLC itself, you might find it beneficial to host the files on another machine on the network, or use a content delivery network (CDN) to deliver the files you need for client-side functionality. Including these files directly in the PLC can cause to large amounts of memory usage, potentially impacting your data logging capabilities. Hosting this files on a different machine or CDN alleviates these issues and can also speed up the load time of your pages. This article will demonstrate how to use a CDN to deliver the jQuery libraries we will be using.</p>

<p>In line with hosting libraries outside of the PLC, we have found hosting a Javascript file on another machine and updating it during development saves a lot of time compared to generating blocks for user pages, compiling, downloading the processor, and rebooting every time a change is made. Using a different machine allows you to edit the Javascript file on the machine, save it, and simply refresh the browser to update the page with any changes. This results in a significant time savings over the course of developing and testing a full application.</p>

<p>We will cover the various functionality components below, in no particular order. At this point you can jump around the article to find what interests you most and work through the exercise without a whole lot of overlap between sections.</p>

<h4>Basic Trending</h4>

<p>If you are using the data log functionality of the S7-1200 or the S7-1500, one powerful tool you can use in your user pages is trending. Given the relative simplicity of most web servers, including the one in our PLC, we will focus on implementing client based trending tools through the use of Javascript and jQuery.</p>

<p>There are a variety of frameworks you can use for this, D3, High Charts, Google Charts, or our framework of choice Flot Charts. They all have their pros and cons, some including license ramifications, open-source vs. closed source, and free vs. paid. We have found Flot Charts to work extremely well for our needs, typically trending time-stamped process data. If you have any questions about our experience with any of the tools we have used, please feel free to reach out and ask.</p>

<p>The basic overview of this section is we will generate a date/time range using date/time pickers on the page. When the user selects the date range and clicks the "Update" button we will request a list of data log files and based on their name, including the date/time the logs began, will select the appropriate file, parse its contents into the format required by Flot and will then display the trend to the user with the correct date/time range on the X-Axis.</p>

<p>First we will go through the process of generating a basic trend with fixed data set. From there we will get into dynamic datasets with date range selections. To demonstrate basic trending our PLC has a small log file tracking the run status of two pumps as seen below:</p>

<img src="/img/s7_1200_SBS_11"/>

<p>Data logs are stored as .CSV files in the S7-1200 and S7-1500 PLCs. This format defines the value of each column in the first line, with each column separated by a comma. Subsequent lines represent values at a particular timestamp, again with each column separated by a comma. This format, while useful for storage and analysis using a program like Excel, isn't directly useful for the approach we will take to generating a trend. The first step we need to accomplish is to break down the CSV data into something Javascript can deal with more effectively.</p>

<p>To acoomplish this, we will use a jQuery library called jQuery-CSV. This library allows us to break the CSV file down into a list of objects we can easily manipulate to work with using Javascript.</p>

<p>Following the tip to load libraries from a CDN, we will load the library from a CDN in the header of our HTML page. Keep in mind you can use any CDN you prefer, store the file on another machine on the network, or even put it directly in the PLC as necessary. Since we will be using jQuery libraries, we will also include the jQuery library itself:</p>

&lt;head&gr;
	&lt;script&gr; type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"&lt;/script&gr;
	&lt;script&gr; type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/0.71/jquery.csv-0.71.min.js"&lt;/script&gr;
&lt;/head&gr;


<p>We will do the same thing for the Flot Charts library, and for development purposes, the development version of the Javascript file we will use for testing. Since we are dealing with time series data, we will also include the Flot Time library, and the Moment.js library to simplify working with different date formats:</p>

&lt;head&gr;
	&lt;script&gr; type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"&lt;/script&gr;
	&lt;script&gr; type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/0.71/jquery.csv-0.71.min.js"&lt;/script&gr;
	&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/flot/0.8.3/jquery.flot.min.js"&gt;&lt;/script&gr;
	&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/flot/0.8.3/jquery.flot.time.min.js"&gt;&lt;/script&gr;
	&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment.min.js" type="text/javascript"&gt;&lt;/script&gr;
	&lt;script src="http://corsosystems.com/js/s7_Demo.js" type="text/javascript"&gt;&lt;/script&gr;
&lt;/head&gr;
i
<p>For Flot to function properly, we will need to add a &lt;div&gt; element to our page, and specify the width and height for our trend, and give it an ID so we can refer to it later in our Javascript code:</p>

&lt;body&gt;
	&lt;div id="trend" style="width:900px;height:450px;"&gt;&lt;/div&gt;
&lt;/body&gt;

<p>This is the basic format we need to display a single trend on a page, so we are done with our HTML page for now. Save it to your user pages folder, generate blocks, and download to the processor. We will do the rest of the work to generate a trend in the s7_Demo.js file linked to in the header.</p>

<p>Let's go through the code used to generate a trend line by line. If you are familiar with Javascript and jQuery this will be pretty straightforward, if not it will cover the basics of what is required for this piece of functionality, and you can find plenty of resources online to go as in-depth as you like on the language as a whole.</p>

<p>The first line of code tells the browser to execute this code only after the pages has completely loaded. This is to make sure all of the Javascript files and jQuery libraries are ready, and the page itself is loaded and ready for us to interact with it:</p>

<img src="/img/s7_1200_SBS_12"/>

<p>The next section defines and AJAX call to our server. This loads data from the specified URL without the user having to interact with the page, and doesn't require the page to be refreshed. We are specifying the specific URL for our datalog file in the URL parameter, telling the server we are requesting or "getting" data, specifying we want expect the data to be returned as text, and are defining the function we will execute when the AJAX call as successfully completed.</p>

<img src="/img/s7_1200_SBS_13"/>

<p>The next line begins the code executing once our AJAX call is complete. The first step is to take the results from our AJAX call, in this case the data in the .CSV file, and use the jQuery-CSV library to convert it to a list of objects Javascript can more easily understand. This is accomplished by calling the jQuery function to convert a CSV file into objects as described in the jQuery-CSV documentation. Once this function has executed, we can use the variable "results" to generate the data we will use for the trend.</p>

<p>The next two lines as simply declaring variables we will use to store the data for each of our trend lines.</p>

<img src="/img/s7_1200_SBS_14"/>

<p>The meat of our Javascript code, where we take the data from the objects we generated from the CSV file and parse them for our trend comes next. We are using a for loop to iterate over all of the objects. Within this loop we are pushing data onto the arrays we defined previously. This simply adds a new element onto each array for each object in the list.</p>

<p>The format Flot requires for trend data is an array of elements of the form [x value, y value]. For our trend we want the x-axis to display the timestamp, and the y-axis to display the value of each dataset at that time. Flot requires the timestamp data to be in a certain format, so we will have to manipulate the data in our object appropriately.</p>

<p>The innermost portion of this function is adding together the "Date" and "UTC Time" columns from our object, with a space separating them. This gives us a human readable timestamp of the format "Month/Day/Year Hours:Minutes:Seconds". To turn this into the format Flot expects (milliseconds since January 1, 1970, 00:00:00) we use the simply use the parse function of the Date type in Javascript as shown below.</p>

<img src="/img/s7_1200_SBS_15"/>

<p>This takes care of the x-axis value, for the y-value we specify the specific data point in our object, in this case Pump1_On or Pump2_On and include it in our elements to be pushed onto the appropriate array.</p>

<p>The final piece of code except for closing brackets/parentheses is to generate the plot itself. To accomplish this we call the .plot() function of the Flot library. We pass the ID value of the div we created in our HTML file as the container for the trend to be put in to, specify an array of the variables we want to use for trend lines, in this case the variables we worked with in the previous section of code, and specify a mode of "time" for the x-axis.

<img src="/img/s7_1200_SBS_16"/>

<p>This generates a basic trend on our page:</p>

<img src="/img/s7_1200_SBS_17"/>

<h4>Advanced Trending</h4>

<p>With the basics of trending covered, let's dive into some more advanced functionality. For our purposes the next step is to add a couple of date/time pickers to our page so we can select a start and end time for our trend. This lets your users narrow down the amount of data they are viewing at any given time and allows them to easily view historical data.</p>

<p>Much like trend tools, there are a ton of options for date, time, and both date and time selection options. These can be simple HTML dropdown controls, or more complex jQuery components with additional functionality. For this tutorial we will use a jQuery date/time picker we have found to be very mobile friendly:</p>

<img src="/img/s7_1200_SBS_18"/>

<p>This date/time picker control is an add-on to an existing library of user interface controls called jQuery-UI. To make it functional we need to include the jQuery-UI library, as well as the files for this partlcular control. For the rest of this article, assume we will be adding the required lines to our existing file, to save some space we won't keep repeating previous lines of code:</p>

&lt;head&gt;
	&lt;script&gr; type="text/javascript" src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"&lt;/script&gr;
	&lt;script&gr; type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-timepicker-addon/1.4.5/jquery-ui-timepicker-addon.min.js"&lt;/script&gr;
	&lt;ink href="https://maxcdn.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet"&gt;
	&lt;link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-ui-timepicker-addon/1.4.5/jquery-ui-timepicker-addon.min.css"&gt;
&lt;/head&gt;

<p>Notice we are also including references to two CSS files, these contain all of the styling for the various controls and will start to become more prevalent in later sections.</p>

<p>To place a date/time picker on the page we need to add a div for each date/time picker we want to use, give it an ID so we can access it in Javascript, and then write the Javascript code we need to generate the control. Let's start with the HTML and break it down into further detail from there:</p>

&lt;div&gt;
        &lt;div&gt;
            &lt;label&gt;Start Date/Time:&lt;/label&gt;
                &lt;input id="startDatepicker" type="text" class="datetimepicker"/&gt;
        &lt;/div&gt;

        &lt;div&gt;
            &lt;label&gt;End Date/Time:&lt;/label&gt;
                &lt;input id="endDatepicker" type="text" class="datetimepicker"/&gt;
        &lt;/div&gt;

        &lt;div&gt;
            &lt;button id="update" style="margin-top:-8px;"&gt;Update&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

<p>This code is pretty basic, we have a div acting as a container for everything, a div for the start time picker along with a label, again for the end time picker, and a button for the user to initiate an update of the trend. The next step is to add some Javascript to our page to create the date/time pickers, we will get to the button in a little while:</p>

<img src="/img/s7_1200_SBS_19"/>

<p>This code will go right below the $(function() call so it is the first thing to be executed when the page loads. This is going to be a little more involved than simply creating the date/time picker to give us additional functionality by pre-populating the pickers.</p>

<p>The first two lines define variables and set them to a value of the current time/date. The next line sets the startDate variable's hour to one hour ago, and the next line is there for posterity in case you wanted to choose a different range than simply the previous hour. The final two lines create the date/time picker and pre-populate their values with the start and end dates, with the correct formatting specified by the Moment.js library. Now when you load the page you will have two date/time pickers, with one at the current time, and one at the current time minus an hour.</p>

<p>With the date/time pickers set up, we can put them to use. This will be one of the more complex portions of the process so far and will cover a lot of different concepts. The basic outline is the page will load with default values for the date/time range, or user will make an adjustment to the range and click the update button. We will get a list of the datalogs and their "last modified" timestamp. We will figure out which datalog best matches with the date range, and load it the same way we did in the previous section. We will leave some items for your own future exploration such as more in-depth interface design and working with date/time ranges spanning multiple data logs.</p>

<p>First we need to know when the user clicks the update button. Using jQuery this is extremely easy using the onClick() function:</p>

<img src="/img/s7_1200_SBS_20"/>

<p>This code does a couple of things, it checks to make sure the date/time pickers have a value and if they do, it calls the updateTrendData() function. If they are empty it alerts the user and tells them to make a selection. We can accomplish the same functionality when the page loads by calling the updateTrendData() function after the date/time pickers have been created as in the previous section.</p>

<p>The meat of this section is what happens in the updateTrendData() function. The first portion of this function needs to determine what datalog file we need to use to populate our trend, based on when it was last edited in relation to other datalogs that may exist. We are going to make an assumption to simplify development. The assumption is datalogs will only be modified as data is added to them, and once a new datalog has been created, we will assume its start time is later in time than the previous datalog's last modification. This allows us to use the datalog information available by default to narrow down the file we need to load without having to go into the PLC code and do anything like provide a timestamp as part of the datalog name when it is created. In this case simple is better.</p>

<p>How do we get the timestamp data from the datalogs in the PLC? If you navigate through the built-in pages in the S7 web server you will find a list of the data logs, with an associated timestamp of when they were last modified. What we will do is load this page using an AJAX call like before so the user doesn't need to interact with the page to load the data and no page refresh is required. When the page is accessed using AJAX we can then search through the HTML to find the timestamps based on the CSS class of the table and the corresponding cell within the the table and iterate over those to build our list of timestamps. Once the list is created we can do some simple comparisons to find the closest matching datalog file and call the function to load it the same way as before.</p>


<p>We are going to make some big assumptions for this tutorial. First, we will assume you have datalogs being generated on a regular basis. Second, we will assume your datalogs are only storing a relatively small amount of data, say 1 hour. Lastly, we are assuming you will only want to look at the data contained in one file. It is entirely possible, with some additional code, to view data from multiple files at once, use files for any length of time, and do things like "real-time" updates. Functionality in those areas is something we can discuss further, but are out of this article's scope.</p>

<p>The first step is to get a list of the datalog files stored in the PLC. We will use AJAX again to accomplish this task. Navigating through the standard webpages, we find a list of data log files and the URL we can use to access the list:
</p>

<insert datalog list image here/>

<p>Upon successfully loading the page, we will return its contents as text to our AJAX function for further parsing and manipulation. First we will declare a variable, set it equal to the response text, and wrap it up with &lt;html&gt; tags so we can manipulate the data with jQuery:</p>

<insert html wrapper call here/>

<p>Next we will  declare variables to hold our start and end timestamps from the datetimepickers.</p>

<insert datetimpicker stuff here</p>

<p>The datalog file information is stored in a table. We will simply copy this to our page to simplify the code for this tutorial, and hide the table so it doesn't clutter up the page:</p>

<insert table copy stuff here/>

<p>Next we will iterate through the rows of the table, checking to see if the row contains a timestamp. If it does, we will parse it into the Javascript format and compare it to our start and end timestamps to see if it is in our desired range. If it is in the range we will get the filename and generate the trend, if it is not in our range we will simply move to the next row in the table. Most of this code is similar to what we have seen previously, the main difference is navigating the table.</p>

<insert table parsing code here/>

<p>This function is called in two places. First it will be called when the page loads, and should load the latest datalog and display it on the trend. The second place it is called is when the user clicks on the "Update" button next to the datetimepickers. In this function we are iterating through the rows of a table. By viewing the page source in our browser, we can see what the various IDs and CSS classes each cell in the table has applied to it. Using this information we can easily find the timestamp and filename in the row using jQuery. First we will use the .find() method to determine if the timestamp cell has a valid timestamp using CSS classes, and the length of the text in the cell:</p>

<insert timestamp search here/>

<p>If we do have a valid timestamp we wlll parse it as before and check to see if it is in our desired range. If it is, we will navigate to the filename cell in this row and pass the filename to our function to generate the trend.</p>

<insert filename search here/>

<p>In the previous section we demonstrated loading a single datalog file. In this section we moved this functionality into a separate function, including variables for our date range to limit the amount of data we are loading from the datalog. This is the same code as before, wrapped up in a function, with a check on the timestamp in the datalog to see if we need to include it in our trend. We are calling this function from the updateTrend() function in the previous section.</p>

<insert data limit code here/>

<p>Now you have the functionality in place for you to load datalogs onto your trend using a user-selectable date range. Simply changing the date range and clicking "Update" will go through the datalogs in the PLC, find the appropriate file and display it on the trend.</p>

<p>Where can you go from here? One option would be to simplify the process by removing the date range selection, instead generating a table of the datalogs and allowing the user to click on a particular file to display it on the trend. Another option giving you more flexibitly along with more backend complexity would be to load data from multiple datalogs to fill your date range with any data in the PLC. A third option would be the addition of "real-time" trending, allowing users to see the most recent data as it is written to the PLC. The Flot website has excellent examples of this functionality, and if you have any questions on how to implement any of these ideas or any you have, we are always happy to help.</p>

<h4>Dashboards</h4>



<h4>Reporting</h4>

talk about generating PDF's?
Email functionality?
Page layouts
Print CSS styles

<h4>Recipes</h4>



<h4>HMI Functionality</h4>
Twitter bootstrap for buttons






