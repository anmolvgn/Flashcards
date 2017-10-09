var request = require('request');

var nodeArgs = process.argv;
var Q = [];
var A = [];
var front_side = process.argv[2];
var back_side = process.argv[3];
var clozedCard = function(Q,A){
    this.front_side = function(Q){
        var Q = process.argv[4];
        console.log(this);
    },
    this.back_side = function(A){
        var A = process.argv[5];
    }
};

module.exports = {
    Q,
    A,
    clozedCard
};