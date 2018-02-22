(function(){
    console.log("Hello!");
    a = 14;
    var c = a + 2;
    console.log(c);

    var b = {
        coolness: "over 9000",
        whenconsumed: function(cost){
            console.log(cost + " has been consumed");
        }
    };
    console.log("coolness: " + b.coolness);
    b.whenconsumed(123);

    function car(color) {
        this.color = color;
        this.whenconsumed = function(cost) {
            console.log(cost + " has been consumed");
        };
        this.later = function() {
            //var that = this;
            setTimeout(function(){console.log(this);}.bind(this), 2000);
        };
    }

    car.prototype.blub = function() {
        console.log("Blub");
    };

    car.bla= function(){
        console.log("bla");
    }

    var coolcar = new car("cool color");
    coolcar.later();
    coolcar.whenconsumed(500);
    coolcar.blub();
    //coolcar.bla();

    coolcar.blub();
    var nextcar = new car("next color");
    nextcar.blub();



})();

function test() {
    console.log("TEST");
    var b = 30;
    for (i = 0; i < 100; i++) {
        var c = i+b;
    }
    console.log(c);
};

test();