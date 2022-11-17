const mongoose = require("mongoose")

const isValidEmail = function (emailvalue) {
  let emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[com]{2,3}))$/
  if (emailRegex.test(emailvalue)) return true;
};

const isValidString = function (Stringvalue) {
    if (typeof Stringvalue === "undefined" || Stringvalue === null) return false;
    if (typeof Stringvalue === "string" && Stringvalue.trim().length === 0) return false;  
    return true;
};

const isValidPassword = function (passwordCheck) {
    let pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$/;
    if (pass.test(passwordCheck)) return true;
  };
  const isValidTitle =function(title){
    return ["Mr", "Mrs", "Miss"].indexOf(title) !== -1
}

module.exports={isValidEmail,isValidString,isValidPassword,isValidTitle}