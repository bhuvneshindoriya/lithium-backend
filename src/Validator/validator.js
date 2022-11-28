const isValidString = function (stringValue) {
    if (typeof stringValue === "undefined" || stringValue === null) return false
    if (typeof stringValue === "string" && stringValue.trim().length === 0) return false
    return true
}

const nameValidation = function (name){
    if (/^[A-Za-z][A-Za-z ._]{5,20}$/.test(name)) return true
}

const collegenameValidation = function (name){
    if(/^[A-Za-z.]{2,10}$/.test(name)) return true
}

const mobileValidation = function (number){
    if (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(number)) return true
}

const logoLinkValidator = function(logoLink){
    if(/^https?:\/\/(.+\/)+.+(\.(png|jpg|jpeg))$/i.test(logoLink))  return true
}



module.exports = { isValidString , nameValidation , mobileValidation , logoLinkValidator , collegenameValidation}