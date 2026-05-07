/* let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში.
    გადაამოწმე, შეიცავს თუ არა "@" */

let email = " EXAMPLE@MAIL.COM ";

let cleanedEmail = email.trim().toLowerCase();

console.log(cleanedEmail);
console.log(cleanedEmail.includes("@") ? "Has @" : "No @");
