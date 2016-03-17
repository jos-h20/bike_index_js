exports.MyBike = function(manufacture, serial, location) {
  this.manufacture = manufacture;
  this.serial = serial;
  this.location = location;
};

exports.MyBike.prototype.isStolen = function(search_serial) {

  if (this.serial === search_serial) {
    return true;
  }
  else {
    return false;
  }
};
