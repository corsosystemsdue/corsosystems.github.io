$(function(){
    var date = new Date();
    var startDate = new Date();

    startDate.setHours(date.getHours()-1);
    date.setHours(date.getHours()-0);

    $('#startDatepicker').datetimepicker();
     $('#endDatepicker').datetimepicker();

    $('#startDatepicker').val(moment(startDate).format("MM/DD/YYYY h:mm:ss A"));
    $('#endDatepicker').val(moment(date).format("MM/DD/YYYY h:mm:ss A"));

    $('#update').on('click', function() {
        updateTrend();
    });

    function generateTrend(fileName, start, end){
        $.ajax({
            url:'http://192.168.0.1/DataLogs/'+fileName,
            type:'get',
            dataType:'text',
            success:function(data){
                var result = $.csv.toObjects(data);
                var pump1Data = [];
                var pump2Data = [];
                        
                for(var i in result){
                    if(Date.parse(result[i].Date + " "+ result[i]["UTC Time"]) >= start && Date.parse(result[i].Date + " "+ result[i]["UTC Time"])<=end){
                        pump1Data.push([Date.parse(result[i].Date + " "+ result[i]["UTC Time"]),result[i].On])
                        pump2Data.push([Date.parse(result[i].Date + " "+ result[i]["UTC Time"]),result[i].Off])
                    }
                }
            
                $.plot("#trend",[pump1Data,pump2Data],{
                    xaxis: { mode: "time", timezone: "browser" }
                });
            }
        })
    }

    function updateTrend(){
        var timeStamps = [];

        $.ajax({
            url:'http://192.168.0.1/Portal/Portal.mwsl?PriNav=FileBrowser&Path=/DataLogs/',
            type:'get',
            dataType:'text',
            success:function(data){
                var response = $('<html />').html(data);
                var timestamp = '';
                var fileName = '';
                var start = Date.parse($('#startDatepicker').val());
                var end = Date.parse($('#endDatepicker').val());

                $('#fileTable').html($(response).find('#fileBrowserTable').html());
                $('#fileTable').css('display', 'none');
                $('#fileTable').find('tr').each(function(index){
                    if($(this).find('.fbChanged .systemTime .fbTime').text().length>7){
                        timestamp = Date.parse(moment($(this).find('.fbChanged .systemTime .fbTime').text(),"hh:mm:ss a MM/DD/YYYY"));
                        if(timestamp>=start && timestamp<= end){
                            fileName = $(this).find('.fileBrowserName .hiddenOnSmall a').text();
                            generateTrend(fileName, start, end);
                            break;
                        }
                    }
                });
            }
        })
    }



});