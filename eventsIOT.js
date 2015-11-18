var express = require('express');

var motionSense = require('./events/motionSense');
var doorSense = require('./events/doorSense');
var tempSense = require('./events/tempSense');
var humidSense = require('./events/humidSense');
var tankWaterSense = require('./events/tankWaterSense');
var acceleSense = require('./events/acceleSense');

var router = express.Router();

var mInterval = 1000;
var dInterval = 5000;
var tInterval = 2000;
var aInterval = 1000;
var hInterval = 60000 * 5;
var wInterval = 60000 * 5;

var motionData = 0;
var doorData = 0;
var tempData = 248;
var humidData = 51;
var waterData = [0, 0, 0, 0];
var acceleData = [0, 0, 0];


router.get('/minterval', function(req, res) {
    mInterval = req.param('interval');
    res.send(mInterval);
    console.log("got " + mInterval);
});
router.get('/dinterval', function(req, res) {
    dInterval = req.param('interval');
    console.log("got " + dInterval);
});
router.get('/ainterval', function(req, res) {
    aInterval = req.param('interval');
    console.log("got " + aInterval);
});
router.get('/hinterval', function(req, res) {
    hInterval = req.param('interval');
    console.log("got " + hInterval);
});

/* motion   0
 * door     1
 * temp     2
 * humidity 3 
 * water    4
 * accele   5
 */
router.get('/data', function(req, res) {
    var eventId = req.param('eId');

    if (eventId == 0) {
        motionData = req.param('data');
    } else if (eventId == 1) {
        doorData = req.param('data');
    } else if (eventId == 2) {
        tempData = req.param('data');
    } else if (eventId == 3) {
        humidData = req.param('data');
    } else if (eventId == 4) {
        waterData = req.param('data');
    } else if (eventId == 5) {
        acceleData = req.param('data');
    }
    console.log("motion", motionData, "door", doorData, "temp", tempData);
});

setInterval(function () {
    motionSense.motion(motionData, mInterval);
}, mInterval);
//setInterval(function () {
//    doorSense.doorOpenCls(doorData);
//}, dInterval);
setInterval(function () {
    tempSense.temp(tempData);
}, tInterval);
setInterval(function () {
    humidSense.humidity(humidData);
}, hInterval);
setInterval(function () {
    tankWaterSense.waterLvl(waterData);
}, wInterval);
setInterval(function () {
    acceleSense.acceleration(acceleData);
}, aInterval);

module.exports = router;