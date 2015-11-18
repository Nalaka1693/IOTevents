/*Acceleration sensor ADXL302 arduino*/

var dataArray =[[0, 0, 0], [0, 0, 0]];

module.exports = {
    acceleration: function(data) {
        fillArray(data);

        var diffX = dataArray[0][0] - dataArray[1][0];
        var diffY = dataArray[0][1] - dataArray[1][1];
        var diffZ = dataArray[0][2] - dataArray[1][2];

        if (diffX + diffY + diffZ > 50) {
            console.log("Acceleration has detected");
        }
    }
};

function fillArray(data) {
    for (var i = dataArray.length-1; i >= 0 ; i--) {
        dataArray[i] = dataArray[i-1];
    }

    dataArray[0] = data;
}