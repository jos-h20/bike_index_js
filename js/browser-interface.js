var MyBike = require('./../js/mybike.js').MyBike;
var moment = require('moment');
// var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#search_form').submit(function(event){
    event.preventDefault();

    // var search_serial = $('#search_serial').val();
    var my_serial = $('#my_serial').val();
    var manufacture = 'test';
    // var serial = 'U129U04195';
    var location = 'portland';
    var myBike = new MyBike(manufacture, my_serial, location);
  //
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=4&proximity=portland%2C%20or&proximity_square=200&stolen_after=0').then(function(response) {
      var bikes_array = response.bikes;
      console.log(bikes_array);
        var stolen_bike = [];
        for(var i = 0; i < bikes_array.length; i++) {
          var result = myBike.isStolen(response.bikes[i].serial);
          console.log(result);
          if(result) {
            stolen_bike.push(response.bikes[i]);
          }
        };
        if(stolen_bike[0] !== undefined) {
          $('#bike-status').text("Your bike was stolen in " + stolen_bike[0].stolen_location);
          alert('Your Bike was stolen');
        } else {
          $('#bike-status').text("Your Bike is not stolen");
        }

    });
  });




});
