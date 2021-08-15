/**
 * Without Guard Clauses
 */
function isValidNumber(number) {
  if (number) {
    if (number !== null) {
      if (typeof number === "number") {
        return true;
      } else {
        throw TypeError("number param must be type number.");
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * With Guard Clauses
 */
function isValidNumber(number) {
  if (!number || number === null) return false;
  if (typeof number !== "number")
    throw TypeError("number param must be type number.");

  return true;
}
