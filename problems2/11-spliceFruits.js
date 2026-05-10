/* let fruits = ["apple", "banana", "orange", "kiwi"]
   წაშალე "banana" მასივიდან splice()-ით
   "orange"-ის წინ დაამატე "mango"
   ბოლოს დაბეჭდე ახალი მასივი.
   splice(საიდან დაიწოს, რამდენი წაშალოს, რითი ჩაანაცვლოს) */

let fruits = ["apple", "banana", "orange", "kiwi"];

let bananaIndex = fruits.indexOf("banana");
if (bananaIndex !== -1) fruits.splice(bananaIndex, 1);

let orangeIndex = fruits.indexOf("orange");
if (orangeIndex !== -1) fruits.splice(orangeIndex, 0, "mango");

console.log(fruits);
