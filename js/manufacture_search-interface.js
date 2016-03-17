$(document).ready(function() {
  
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

});
