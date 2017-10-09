var nodeArgs = process.argv;
var question = "";
var answer = "";
var front = process.argv[2];
var back = process.argv[3];
var basicCard = function(front, back){
    this. front = function(question){
        this.question = process.argv[4];
        console.log (this);
    },
    this.back = function(answer){
        this.answer = process.argv[5];
        console.log(this);
    }
};

basicCard(front,back);
//basicCard1= new basicCard(question,answer)

module.exports = {
    question,
    answer,
    basicCard
};

console.log('worked');