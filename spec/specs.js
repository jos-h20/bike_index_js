var expect = require('chai').expect;
var MyBike = require('./../js/mybike.js').MyBike;

describe("MyBike", function() {
  it("will return the current property", function() {
    var manufacture = "Novara";
    var serial = "U156U20389";
    var location = "Portland";
    var testMyBike = new MyBike(manufacture, serial, location);
    expect(testMyBike.manufacture).to.equal(manufacture);
  });
  it("will return the set property", function() {
    var manufacture= "Novara";
    var serial= "U156U20389";
    var location = "Portland";
    var testMyBike = new MyBike(manufacture, serial, location);
    expect(testMyBike.serial).to.equal(serial);
  });
  it("will trigger a freakish alarm", function() {
    var manufacture = "Novara";
    var serial = "U156U20389";
    var location = "Portland";
    var testMyBike = new MyBike(manufacture, serial, location);
    expect(testMyBike.location).to.equal("Portland");
  });
  it("will trigger a freakish alarm", function() {
    var manufacture = "Novara";
    var search_serial = "U156U20389"
    var serial = "U156U20389";
    var location = "Portland";
    var testMyBike = new MyBike(manufacture, serial, location);
    expect(testMyBike.isStolen(search_serial)).to.equal(true);
  });
  it("will trigger a freakish alarm", function() {
    var manufacture = "Novara";
    var search_serial = "U156U20389"
    var serial = "U156U20384";
    var location = "Portland";
    var testMyBike = new MyBike(manufacture, serial, location);
    expect(testMyBike.isStolen(search_serial)).to.equal(false);
  });
  it("will convert date", function() {
    var manufacture = "Novara";
    var search_serial = "U156U20389"
    var serial = "U156U20384";
    var location = "Portland";
    var unix_time = 1458238640;
    var testMyBike = new MyBike(manufacture, serial, location);
    expect(testMyBike.convertTimeStamp(unix_time)).to.equal("17 Mar 2016 11:17:20");
  });
  it("will count manufacture match", function() {
    var manufacture = "Novara";
    var search_serial = "U156U20389";
    var search_manufacture = "Novara";
    var serial = "U156U20384";
    var location = "Portland";
    var unix_time = 1458238640;
    var testMyBike = new MyBike(manufacture, serial, location);
    expect(testMyBike.countManufacture(search_manufacture)).to.equal(true);
  });
});
