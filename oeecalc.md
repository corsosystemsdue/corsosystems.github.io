---
layout: page
title: OEE Calculator
tagline: Quickly calculate OEE for your process

---

<div class="row" style="text-align:center;">
	<h3>Operational Equipment Effectiveness (OEE)</h3>
</div>

<div class="row">
	<div class="col-md-10 col-md-offset-1">
		<p>A quick way to assess the health your process is by calculating Operation Equipment Effectiveness (OEE). OEE summarizes three key process values into a percentage indicating how your process performed during a given time period.</p>
		<p>The three values you need to calculate OEE are <b>downtime</b>, <b>quality</b>, and <b>throughput</b>. Each of these values represents a ratio of the actual amount to the ideal amount for the time period in question. These ratios are then multiplied by one another resulting in the final OEE value.</p>

		<p>For this calculator<b>Downtime</b> is calculated as the amount of time your process was running vs. the amount of time it was scheduled to run. If you calculate OEE for an 8 hour shift where the process was scheduled to run for 7.5 hours and only ran for 6.5 hours your downtime ratio would be 6.5/7.5 resulting in 0.8667.</p>

		<p><b>Quality</b> is the ratio of how many parts you successfully produced compared to how many you could have produced. Depending on your process this can be a number of actual parts, or can represent lbs produced vs. maximum lbs produced if you are not producing discrete objects. If you produced 700 parts on a shift where you could have made 800 the ratio would be 70/80 giving you 0.875.</p>

		<p><b>Throughput</b> has to do with how quickly you are producing parts. You can use the ideal cycle for you process if you know the value, otherwise you can calculate the value based on your shift duration and production goal. For the 7.5 hour shift producing 800 parts your cycle time would be</p>

	</div>
</div>

<hr>

<div class="row">

</div>

<div class="row">
	<div class="col-md-3 col-md-offset-2">
		<input id="dtActual"/>
	</div>
	<div class="col-md-3">
		<input id="dtIdeal"/>
	</div>
	<div class="col-md-3">
		<label id="dtRatio"/>
	</div>
</div>
<div class="row">
	<div class="col-md-3 col-md-offset-2">
		<input id="qtActual"/>
	</div>
	<div class="col-md-3">
		<input id="qtIdeal"/>
	</div>
	<div class="col-md-3">
		<label id="qtRatio"/>
	</div>
</div>
<div class="row">
	<div class="col-md-3 col-md-offset-2">
		<input id="tpActual"/>
	</div>
	<div class="col-md-3">
		<input id="tpIdeal"/>
	</div>
	<div class="col-md-3">
		<label id="tpRatio"/>
	</div>
</div>

