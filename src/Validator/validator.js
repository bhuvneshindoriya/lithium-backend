const isValidString = function (Stringvalue) {
    if (typeof Stringvalue === "undefined" || Stringvalue === null) return false;
    if (typeof Stringvalue === "string" && Stringvalue.trim().length === 0) return false;
    return true;
}

const nameValidation = function (name){
    if (/^[A-Za-z][A-Za-z ._]{5,20}$/.test(name)) return true
}

const mobileValidation = function (number){
    if (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(number)) return true
}

const logolinkvalidator = function(logolink){
    if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_\+.~#?&//=]*)\.(.png|.jpg|.jpeg))$/i.test(logolink))  return true
}



module.exports = { isValidString , nameValidation , mobileValidation ,logolinkvalidator}