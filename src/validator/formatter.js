let trim_string = function(){
    const name = "   Bhuvnesh Indoriya"
    const trim = name.trim()
    const up = name.trim().toUpperCase()
    const lw = name.trim().toLowerCase()
    return `
    this is uppercase--${up}
    this is lowercase --${lw}
    this is trim example--${trim}`
    
   
}

module.exports.trim_string = trim_string

