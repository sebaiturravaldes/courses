/**
 *
 * Example 1 Whithout: Consolidate Conditional Expression
 */
function canUploadImage(file) {
  if (!file) return false;
  else if (file.size > 2000000) return false;
  else if (file.mimetype.includes("image")) return false;

  return true;
}

/**
 *
 * Example 1 Whith: Consolidate Conditional Expression
 */
function canUploadImage(file) {
  if (!file || file.size > 2000000 || file.mimetype.includes("image"))
    return false;

  return true;
}

/**
 *
 * Example 2 Whithout: Consolidate Conditional Expression
 */
function greaterThan(a, b) {
  if (a && b) {
    if (a > b) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/**
 *
 * Example 2 Whith: Consolidate Conditional Expression
 */
function greaterThan(a, b) {
  if (a && b && a > b) {
    return true;
  } else {
    return false;
  }
}
