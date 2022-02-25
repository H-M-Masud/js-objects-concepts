const kibria = {
    id: 101,
    money:5000,
    name:'RJ kibrira',
    treatDay: function(expense, boksis){
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name:'Hero Balam',

}
const normalGolam = {
    id: 102,
    money: 8000,
    name:'Hero Balam',

}
console.log(heroBalam)
const heroTreatDay = kibria.treatDay.bind(heroBalam);
heroTreatDay(500);

const normalGolam = kibria.treatDay.bind(normalGolam);