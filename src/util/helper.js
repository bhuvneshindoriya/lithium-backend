const monthdateday = function(){
const today = new Date()
const month = today.getMonth()
return `
date - ${today}
month - ${month}th `
}
module.exports.monthdateday=monthdateday