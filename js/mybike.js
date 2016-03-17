exports.MyBike = function(manufacture, serial, location) {
  this.manufacture = manufacture;
  this.serial = serial;
  this.location = location;
  this.date = "";
};

exports.MyBike.prototype.isStolen = function(search_serial) {
  if (this.serial === search_serial) {
    return true;
  }
  else {
    return false;
  }
};

exports.MyBike.prototype.convertTimeStamp = function(unix_time) {
  var a = new Date(unix_time * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
};

exports.MyBike.prototype.countManufacture = function (search_manufacture) {
    if (this.manufacture === search_manufacture) {
      return true;
    } else {
      return false;
    }
};
