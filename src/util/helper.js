const monthdateday = function(){
const today = new Date()
const day = today.getDay()
const month = today.getMonth()
return `weekday ${day} date${today} month${month}  `
}
module.exports.monthdateday=monthdateday