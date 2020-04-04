import validate from "validate.js";
import constraints from "./constraints";
import { isFinite } from "lodash";

validate.validators.phone = function(value, options, key, attributes) {
  if (options.presence === true) {
    const numParse = parseInt(value);
    const numLen = value.length;

    if (
      (numLen > 0 && (numLen < 9 || numLen > 13)) ||
      (numLen > 0 && !isFinite(numParse)) ||
      numParse < 100000000 ||
      numParse > 999999999999
    ) {
      return options.message ? options.message : "invalide";
    }
  }

  return null;
};

export function validateField(
  fieldName,
  value,
  repeatedField = [],
  constraintGroup = ""
) {
  let formValues = {};
  formValues[fieldName] = value;

  if (
    validate.isObject(repeatedField) &&
    !validate.isEmpty(repeatedField[0]) &&
    !validate.isEmpty(repeatedField[1]) &&
    repeatedField[0] !== fieldName
  ) {
    formValues[repeatedField[0]] = repeatedField[1];
  }

  let formField = {};
  formField[fieldName] =
    validate.isString(constraintGroup) && constraintGroup.length > 0
      ? constraints[constraintGroup][fieldName]
      : constraints[fieldName];
  

  const result = validate(formValues, formField);  

  if (result) {
    return result[fieldName][0];
  }

  return null;
}

export function isFormValid(formData, constraintGroup) {
  if (typeof formData !== "object") {
    throw new Error("FormData must be an object !");
  }

  let valid = true;
  const keys = Object.keys(formData);

  for (let key of keys) {
    const error = validateField(key, formData[key].value, [], constraintGroup);
    if (error !== null) {
      valid = [key, error];
      break;
    }
  }
  console.log("valid", valid);

  return valid;
}
