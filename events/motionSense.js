var dataArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

module.exports = {
    motion: function(data) {
        fillArray(data);

        if (eval(dataArray.join('+')) > 7) {
            var date = new Date();
            printDate(date);
        }
    }
};

function printDate(date) {
    console.log("Motion detected on " + date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " at " +
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

function fillArray(data) {
    for (var i = dataArray.length-1; i >= 0 ; i--) {
        dataArray[i] = dataArray[i-1];
    }
    dataArray[0] = data;
}
