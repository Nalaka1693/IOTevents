/*Temp sensor TO-92 arduino analog*/

var dataArray = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30];

module.exports = {
    temp: function(data) {
        fillArray(data);
        
        if (dataArray[0] > 40) {
            cosole.log("Caution! temperature is extremely high");
        } else if (dataArray[0] > dataArray[1] &&  dataArray[1] > dataArray[2] &&  dataArray[2] > dataArray[3]) {
            console.log("Caution! temperature is rising rapidly");
        } else if (dataArray[0] - dataArray[1] > 5) {
            console.log("Caution! may be a fire go to a safe place");
        }
    }
};

function fillArray(data) {
    for (var i = dataArray.length-1; i >= 0 ; i--) {
        dataArray[i] = dataArray[i-1];
    }

    dataArray[0] = data;
}
