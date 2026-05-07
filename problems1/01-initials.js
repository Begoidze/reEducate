// let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."

let fullName = "Lika Mamaladze";

let parts = fullName.split(" ");

let firstInitial = parts[0][0];
let secondInitial = parts[1][0];

let initials = firstInitial + "." + secondInitial + ".";
console.log("The initials are: " + initials);
