import { View, Text } from 'react-native'
import React from 'react'

const Validate = (value, rules) => {
  let isValid = true;
  let tmpErrorMsg = '';
  let tmpisValid;
  let errorMsg = '';
  let checkval;
  if (value instanceof Array && value[0] !== undefined) {
    checkval = value[0];
  }
  else {
    if (value instanceof Array && value[0] === undefined)
      checkval = '';
    else
      checkval = value;
  }

  for (let rule in rules) {
    switch (rule) {
      case 'minLength':
       // tmpisValid = minLengthValidator(checkval, rules[rule]);
        if (checkval == '' || checkval.length == 0) {
          tmpisValid = true
        } else {
          tmpisValid = minLengthValidator(checkval, rules[rule]);
        }
        tmpErrorMsg = !tmpisValid ? `Enter atleast ${rules[rule]} value` : ''
        // tmpErrorMsg = !tmpisValid ? (customminerr && customminerr !== '' ? customminerr : errorCodes.MIN_LENGTH_ERR) : ''
        isValid = isValid && tmpisValid
        if (!tmpisValid)
          errorMsg = setErrorMsg(errorMsg, tmpErrorMsg)
      break;

      case 'maxLength':
        
        tmpisValid = maxLengthValidator(checkval, rules[rule]);
        tmpErrorMsg = !tmpisValid ? `Maximum Length is ${rules[rule]}` : ''
        isValid = isValid && tmpisValid
        if (!tmpisValid)
          errorMsg = setErrorMsg(errorMsg, tmpErrorMsg)
      break;

      case 'isRequired':
          if (rules[rule] === true) {
            tmpisValid = requiredValidator(checkval);
            tmpErrorMsg = !tmpisValid ? "** Mandatory Field " : ''    
            // tmpErrorMsg = !tmpisValid ? (customErrorMsg && customErrorMsg != '' ? customErrorMsg : errorCodes.MANDATORY_ERR) : ''
            isValid = isValid && tmpisValid
            if (!tmpisValid)
              errorMsg = setErrorMsg(errorMsg, tmpErrorMsg)
            break;
          } else {
            errorMsg = "";
            isValid = true;
            break;
          }

      case 'isNumber':
            tmpisValid = numberValidator(checkval);
            tmpErrorMsg = !tmpisValid ? "Enter only numbers" : ''
            isValid = isValid && tmpisValid
            if (!tmpisValid)
              errorMsg = setErrorMsg(errorMsg, tmpErrorMsg)
      break;

      case 'isEmail':
              tmpisValid = emailValidator(checkval);
              tmpErrorMsg = !tmpisValid ? "Invalid Email" : ''
              isValid = isValid && tmpisValid
              if (!tmpisValid)
                errorMsg = setErrorMsg(errorMsg, tmpErrorMsg)
      break;

      case 'mobileNumberValidator':
        tmpisValid = mobileNumberValidator(checkval);
        tmpErrorMsg = !tmpisValid ? "Enter Valid Mobile Number" : ''
        isValid = isValid && tmpisValid
        if (!tmpisValid)
          errorMsg = setErrorMsg(errorMsg, tmpErrorMsg)
      break;

      default:
        // isValid = true;
        // errorMsg = ''
      break;
      
    }
  }
  return {
    valid: isValid,
    errorMsg: errorMsg
  }
}

const setErrorMsg = (ErrMessage, message) => {
  let resMessage;
  if (ErrMessage.length > 0) {
    resMessage = ErrMessage.concat(',', message)
  }
  else
    resMessage = message


  return resMessage
}

const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
}

const maxLengthValidator = (value, maxLength) => {
  return value.length <= maxLength;
}

const requiredValidator = value => {
  //return value != null ?  (value.totrim() !== '') : '';
  return value != null ? (value.toString().trim() !== '') : false;
}

const numberValidator = value => {
  if (value !== null){
    if (value.length > 0) {
      const pattern = /^[0-9]+$/
      return pattern.test(value)
    }
    else
      return true;
  }
  else return true;
  
}

const emailValidator = value => {
  if (value.length > 0) {
    // var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(value).toLowerCase());
  }
  else
    return true
}

const mobileNumberValidator = value => {
  if (value.length > 0) {
    const pattern = /^\d{8}$/;
    return pattern.test(value)
  }
  else
    return true;
}

export default Validate