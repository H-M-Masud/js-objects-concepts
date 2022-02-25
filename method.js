const student = {
    id: 101,
    money:5000,
    name:'RJ kibriya',
    major: "mathematics",
    isRich:false,
    subjects:['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name:'kundu',
        subject:'mathematics'
    },
    takeExam: function(){
        console.log(this.name,'taking exam')
    },
    treatDay: function(expense, boksis){
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treatDay(900, 100);
const remaining2 = student.treatDay(500, 50);
console.log(remaining2)