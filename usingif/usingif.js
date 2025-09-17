function checkAccountStatus(isAccountActive) {
  if (isAccountActive === "true") {
    return "Your account is active. You can proceed with your transaction.";
  } else {
    return "Your account is currently inactive. Please contact support.";
  }
}

console.log(checkAccountStatus(true)); 
console.log(checkAccountStatus(false));