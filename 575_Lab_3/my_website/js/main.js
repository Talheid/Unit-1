//define AJAX function
function jQueryAjax(){
    //define a variable to hold the data
	var mydata;

    //basic jQuery ajax method
    $.ajax("data/GPSCities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;

            //checks the data for the cities, and displays it as a string
            console.log(mydata);
			$('#mydiv').append('GeoJSON data: ' + JSON.stringify(mydata));
        }
    });

    //data cannot be accessed
    console.log(mydata);
	
};



//calls back the data string
function debugCallback(response){
	
	$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};

function debugAjax(){
	
	//basic jQuery ajax method
	$.ajax("data/GPSCities.geojson", {
		dataType: "json",
		success: function(response){
			
			debugCallback(mydata);
		}
	});

	$('#mydiv').append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

$(document).ready(jQueryAjax);