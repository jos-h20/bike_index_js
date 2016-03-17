var MyBike = require('./../js/mybike.js').MyBike;
var moment = require('moment');
var time = require('./../js/time.js').time;
// var bike_query = $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=100&proximity_square=200&stolen_after=0');
var apiKey = require('./../.env').apiKey;

$(document).ready(function(){

  $('#search_form').submit(function(event){
    event.preventDefault();

    var my_manufacture = $('#my_manufacture').val();
    var my_serial = $('#my_serial').val();
    var my_location = $('#my_location').val();

    var myBike = new MyBike(my_manufacture, my_serial, my_location);

    $.get(apiKey).then(function(response) {
      var bikes_array = response.bikes;
      console.log(bikes_array);
        var stolen_bike = [];
        for(var i = 0; i < bikes_array.length; i++) {
          var result = myBike.isStolen(response.bikes[i].serial);
          if(result) {
            stolen_bike.push(response.bikes[i]);
          }
        }
        if(stolen_bike[0] !== undefined) {
          var date_stolen = time(stolen_bike[0].date_stolen);
          $('#bike-stolen').text("Your bike was stolen in " + stolen_bike[0].stolen_location + " at " + date_stolen);
          alert('Your Bike was stolen');
        } else {
          $('#bike-not-stolen').text("Your Bike is not stolen");
        }

    });
  });
  $('#search_manufacture').submit(function(event){
    event.preventDefault();

    var my_manufacture = $('#my_manufacture').val();
    var my_serial = $('#my_serial').val();
    var my_location = $('#my_location').val();

    var myBike = new MyBike(my_manufacture, my_serial, my_location);

    $.get(apiKey).then(function(response) {

      var bikes_array = response.bikes;
      var manufacture_count = 0;

      for(var i = 0; i < bikes_array.length; i++) {
        if(myBike.countManufacture(response.bikes[i].manufacturer_name)) {
          manufacture_count++;
        } $('#manufacture_count').text(my_manufacture + " was matched " + manufacture_count + " times.");
      }
    });
  }); //end of search manufacture function

}); //End of when ready
