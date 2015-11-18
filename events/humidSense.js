/*Humidity sensor DHT11 arduino */

var dataArray = [40, 40, 40, 40, 40, 40, 40, 40, 40, 40];

module.exports = {
    humidity: function(data) {
        fillArray(data);

        if (dataArray[0] > 50) {
            cosole.log("Humidity is above the comfort level");
        } else if (dataArray[0] < 30) {
            console.log("Humidity is below the comfort level");
        }
    }
};

function fillArray(data) {
    for (var i = dataArray.length-1; i >= 0 ; i--) {
        dataArray[i] = dataArray[i-1];
    }
    dataArray[0] = data;
}