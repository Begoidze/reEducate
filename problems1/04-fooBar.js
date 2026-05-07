/* გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
თუ რიცხვი იყოფა 3-ზე დააბრუნე - "Foo"
თუ იყოფა 5-ზე დააბრუნე - "Bar"
თუ იყოფა ორივეზე დააბრუნე - "FooBar"
თუ არა დააბრუნე - უბრალოდ რიცხვი */

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FooBar");
    } else if (i % 3 === 0) {
        console.log("Foo");
    } else if (i % 5 === 0) {
        console.log("Bar");
    } else {
        console.log(i);
    }
}
