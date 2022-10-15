let trim_string = function(){
    const name = "   Bhuvnesh Indoriya"
    const trim = name.trim()
    const up = name.trim().toUpperCase()
    const lw = name.trim().toLowerCase()
    return `${up} ${lw} ${trim}`
    
   
}

module.exports.trim_string = trim_string

