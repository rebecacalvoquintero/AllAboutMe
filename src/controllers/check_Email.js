const checkEmail = (emailAddress) => {
  if (!emailAddress) {
    throw new TypeError('Please enter an email address before sending the form');
  } else {
    return emailAddress;
  }
};

module.exports = checkEmail;
