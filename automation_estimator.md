---
layout: page
title: Automation Estimator
tagline: 

---
<body>
	<style type="text/css">
		.header{
			color:#7a7a7a;
			font-size:12px;
		}

		@media screen{
			.onlyprint{display:none;}
		}

		@media print {
		  	.noprint {display:none;}
		  	.print{margin:0 auto;}
		}



	</style>
	<div class="row">
		<div class="col-md-4 noprint">
			<h2>Automation Project Estimator</h2>
			<br/>
			<p>The Automation Project Estimator is a <b>simple tool</b> allowing project managers to <b>quickly</b> and <b>thoroughly</b> estimate the time and materials required for <b>any project</b>.</p>
			<p>To use, simply enter the title of the project and your default hourly rate. Then adjust your anticipated hours for each task to generate the total project estimate. When finished, you can view your finalized estimate in a print-ready format in case you’d like to save a PDF or print a copy for your records.</p>
			<p>We included the common tasks encountered on most automation projects, you can easily add new tasks using the "Add Task" button if you need more line items.</p>
			<p>*Note, we have no way of accessing any information you put into the Automation Estimator. Unless someone is looking over your shoulder you will have complete privacy while using our tools. If you have any questions or would like more information on the Automation Estimator or anything else please <a href="http://www.corsosystems.com/contact">contact us</a>.</p>
		</div>
		<div class="col-md-7 col-md-offset-1">
		<br/>
		<table id="header" class="table-striped print">
			<thead>
				<tr>
					<td width="510px" class="header">Project Name</td>
					<td width="110px" class="header">Default Rate</td>
					<td width="47px"></td>
				</tr>
			</thead>
			<tbody>	
			</tbody>
		</table>
		<br/>
		<table id="estimation" class="table-striped print">
			<thead>
				<tr>
					<td width="300px" class="header">Task Description</td>
					<td width="60px" class="header">Hours</td>
					<td width="45px" class="header"></td>
					<td width="60px" class="header">Rate</td>
					<td width="45px" class="header"></td>
					<td width="110px" class="header">Estimated Fee</td>
					<td width="47px"></td>
				</tr>
			</thead>
			<tbody>	
			</tbody>
		</table>
		<br/>
		<table id="summary" class="table-striped print">
			<thead>
				<tr>
					<td width="300px"></td>
					<td width="60px"></td>
					<td width="45px"></td>
					<td width="60px"></td>
					<td width="45px"></td>
					<td width="157px"></td>
				</tr>
			</thead>
			<tbody>
				<tr></tr>
				<tr>
					<td width="300px"><button id="addRow" class="btn btn-info btn-sm noprint">Add Task</button></td>
					<td width="60px"></td>
					<td width="45px"></td>
					<td width="60px"></td>
					<td width="45px"></td>
					<td width="157px"><label id="total">0</label><button class="printMe btn btn-primary btn-sm noprint" style="float:right;">Print</button></td>
				</tr>
			</tbody>
		</table>
		</div>
	</div>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<script type="text/javascript">

$(function() {
	var tasks = ["Project Kickoff/Design meeting","Additional Project Meetings","Develop Control Philosophy","HMI Screen Mockups","Develop HMI Screens","Develop PLC Program","Software Configuration","Configure Communications","Alarm Configuration","Historian Configuration","Software deployment","Prepare O&M Materials","Functional Acceptance Testing (FAT)","Site Acceptance Testing (SAT)","Startup/Commissioning","Training"];

	$('#header > tbody:last').append('<tr><td class="hover"><input class="desc" type="text" style="display:none;font-size:20px;" width="300px"></input><label class="lbl" style="font-size:20px;">Project Name</label><button class="edit btn btn-primary btn-sm" style="display:none;margin-left:10px;">Edit</button><button class="save btn btn-success btn-sm" style="display:none;margin-left:10px;">Save</button></td><td class="rateHover">$<input class="defaultRate" type="text" style="display:none;width:60px;font-size:20px;" value="0"></input><label class="rateLbl" style="font-size:20px;">0</label><button class="rateEdit btn btn-primary btn-sm" style="display:none;margin-left:10px;">Edit</button><button class="rateSave btn btn-success btn-sm" style="display:none;margin-left:10px;">Save</button></td></tr>');

	tasks.forEach(function(task) {
		$('#estimation > tbody:last').append('<tr><td class="hover"><input class="desc" type="text" style="display:none;" width="300px"></input><label class="lbl">'+task+'</label><button class="edit btn btn-primary btn-sm" style="display:none;margin-left:10px;">Edit</button><button class="save btn btn-success btn-sm" style="display:none;margin-left:10px;">Save</button></td><td><input class="hours noprint" type="text" style="width:60px;" value="0"></input><label class="hoursLabel onlyprint">0</label></td><td style="text-align:center;">x</td><td><input class="rate noprint" type="text" style="width:60px;" value="0"></input><label class="rateLabel onlyprint">0</label></td><td style="text-align:center;">=</td><td><label class="fee">0</label></td><td><button class="delete btn btn-danger btn-xs noprint">Delete</button</td></tr>');
	});

	$('#addRow').on("click",function(){
		$('#estimation > tbody:last').append('<tr><td class="hover"><input class="desc" type="text" style="display:none;" width="300px"></input><label class="lbl">New Task</label><button class="edit btn btn-primary btn-sm" style="display:none;margin-left:10px;">Edit</button><button class="save btn btn-success btn-sm" style="display:none;margin-left:10px;">Save</button></td><td><input class="hours noprint" type="text" style="width:60px;" value="0"></input><label class="hoursLabel onlyprint">0</label></td><td style="text-align:center;">x</td><td><input class="rate noprint" type="text" style="width:60px;" value="'+$(".defaultRate").val()+'""></input><label class="rateLabel onlyprint">'+$(".defaultRate").val()+'</label></td><td style="text-align:center;">=</td><td><label class="fee">0</label></td><td><button class="delete btn btn-danger btn-xs noprint">Delete</button</td></tr>');
	});

	$(document).on("click",".edit", function() {
		$(this).siblings('.desc').val($(this).siblings('.lbl').text());
		$(this).css("display", "none");
		$(this).siblings('.lbl').css("display", "none");
		$(this).siblings('.desc').css("display", "inline");
		$(this).siblings('.save').css("display", "inline");
	});

	$(document).on("click",".save", function() {
		$(this).siblings('.lbl').text($(this).siblings('.desc').val());
		$(this).css("display", "none");
		$(this).siblings('.lbl').css("display", "inline");
		$(this).siblings('.desc').css("display", "none");
	});

	$(document).on("click",".rateEdit", function() {
		$(this).siblings('.defaultRate').val($(this).siblings('.rateLbl').text());
		$(this).css("display", "none");
		$(this).siblings('.rateLbl').css("display", "none");
		$(this).siblings('.defaultRate').css("display", "inline");
		$(this).siblings('.rateSave').css("display", "inline");
	});

	$(document).on("click",".rateSave", function() {
		$(this).siblings('.rateLbl').text($(this).siblings('.defaultRate').val());
		$(this).css("display", "none");
		$(this).siblings('.rateLbl').css("display", "inline");
		$(this).siblings('.defaultRate').css("display", "none");
		
		$('.rate').each(function(){
			$(this).val($('.defaultRate').val());
			$(this).parent().siblings('td').children('.fee').text('$ '+($(this).val()*$(this).parent().siblings('td').children('.hours').val()));
			$(this).siblings('.rateLabel').text($(this).val());
		});
		updateTotal();
	});

	$(document).on("change",".hours",function(){
		$(this).parent().siblings('td').children('.fee').text('$ '+($(this).val()*$(this).parent().siblings('td').children('.rate').val()));
		$(this).siblings('.hoursLabel').text($(this).val());
		updateTotal();
	});

	$(document).on("change",".rate",function(){
		$(this).parent().siblings('td').children('.fee').text('$ '+($(this).val()*$(this).parent().siblings('td').children('.hours').val()));
		$(this).siblings('.rateLabel').text($(this).val());
		updateTotal();
	});

	function updateTotal(){
		var total = 0;

		$('.fee').each(function(){
			var val = $(this).text().slice(2);
			total += Number(val);
		});

		$('#total').text('$ '+total);
	}

	$(document).on("mouseenter",".hover", function () {
	    	if(!$(this).children('.save').is(':visible'))
	    	{
	    		$( this ).children('.edit').css('display', 'inline');
	    	}
	    });
	$(document).on("mouseleave",".hover", function () {
	    $( this ).children('.edit').css('display', 'none');
	});

	$(document).on("mouseenter",".rateHover", function () {
    	if(!$(this).children('.rateSave').is(':visible'))
    	{
    		$( this ).children('.rateEdit').css('display', 'inline');
    	}
    });
	$(document).on("mouseleave",".rateHover", function () {
        $( this ).children('.rateEdit').css('display', 'none');
    });

    $(document).on('click','.delete', function(event) {
    	$(this).parent().parent().remove();
    });
    $('.printMe').click(function(){
         window.print();
    });
});

</script>