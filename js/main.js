const checkMaxLength = (string, maxLength)=> {
  if (string.length > maxLength) {
    return false;
  }
  return true;
};
checkMaxLength('Ghbdtn rfr ltkf', 15);

// Answer

const checkMaxLength = (string, maxLength)=> {
    return string.length <= maxLength;
  }
checkMaxLength('Ghbdtn rfr ltkf', 15);
