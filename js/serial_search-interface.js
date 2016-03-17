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
    }).fail(function(error){
      $('#bike-not-stolen').text("Shit's broke. Try again later.");
    });
  });
}); //End of when ready
