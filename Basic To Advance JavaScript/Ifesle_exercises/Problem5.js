// Create a program that checks the strength of a password. If the password contains at least 8 characters, including both uppercase and lowercase letters, and at least one special character (!, @, #, $, %, etc.), consider it strong; otherwise, consider it weak.
//    regex
//   /[a-z]/
//  /[A-Z]/
// /[@#$%^&*()_+{}\[\]:;<>,.?~\\-]/
// /[0-9]/

let password = "Anushka%6";

if (
  password.length >= 8 &&
  /[a-z]/.test(password) &&
  /[A-Z]/.test(password) &&
  /[@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password) &&
  /[0-9]/.test(password)
) {
  console.log("Very Good You Have Set Strong Password");
} else {
  console.log("Try Again Your Password Is Weak AnyOne can Hack");
}
