/*water level sensor with 4 level sensors*/

module.exports = {
    waterLvl: function(data) {
        if (data[0] == 1 && data[1] == 0 && data[2] == 0 && data[3] == 0) {
            console.log("Tank water level is low");
        } else if (data[0] == 1 && data[1] == 1 && data[2] == 1 && data[3] == 1) {
            console.log("Tank is full turn off the inlet to save water");
        }
    }
};
