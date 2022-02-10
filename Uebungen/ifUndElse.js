console.log("Übungen zu If-Else")
console.log("==================")

console.log("Übung 1 - Prüfung auf Gleichheit:")

// exel:
// A1:1 Der Wert wird in zelle A1 getippt 
// B1:2 Der Wert wird in zelle B1 getippt 
// =wenn(A1=B1;"gleich";"ungleich")

// JAVASCRIPT

let a1 = 1  // eine Variable (z.b A1 oder zahl 1) wirt mit dem Wert 1 initialisiert 
let b1 = 1  // eine Variable (z.b B1 oder zahl 2) wirt mit dem Wert 2 initialisiert 

if(a1 == b1){
    console.log("a1 und b1 sind gleich")
}else{
    console.log("a1 und b1 sind nicht gleich")
}

console.log("Übung 2 - Prüfung auf Wert- und Type-Gleichheit:")

let a2 = "1" // Die Variable a2 wird mit dem Text "1" initialisiert 
let b2 = 1   //  Die Variable b2 wird mit der Zahl 1 initialisiert

if(a2 === b2){
    console.log("a2 und b2 sind gleich")
}else{
    console.log("a2 und b2 sind nicht gleich")
}

// Erkenntnisgewin: Mit dem einfachem Gleicheitszeichen wird ein Wert von rechts nach 
// links zugewiesen. Mit dem doppelten Gleichheitszeichen werden zwei Werte auf
// Wert- Gleichheit geprüft.
// Mit dem dreifachen Gleichheitszeichen werden zwei Werte 
// auf Wert- und Type-Gleichheit geprüft.

console.log("Übung 3 - Prüfung auf Wert- (und Type-) Gleichheit:")

let c1 = "1"
let d1 = "1"

if(c1 === d1){
    console.log("c1 und d1 sind gleich")
}else{
    console.log(" c1 und d1 sind leider nicht gleich")
}

console.log("Übung 4 - Prüfung auf Wert- (und Type-) Gleichheit:")

let hauptstadt1 = "Bonn"
let hauptstadt2 = "Weimar"

if(hauptstadt1 == hauptstadt2){
    console.log("Bonn ist gleich Weimar")
}else{
    console.log("Bonn ist nicht Weimar")
}

console.log("Übung 5 - Prüfung auf größer:")

let einwohnerBerlin = 3000000
let einwohnerKoeln = 1000000

if(einwohnerBerlin > einwohnerKoeln){
    console.log("Berlin ist größer.")
}else{
    console.log("Köln ist größer.")
}

console.log("Übung 6 - Prüfung auf kleiner:")

let punkteBayern = 52
let punkteDortmund = 43

if(punkteBayern < punkteDortmund){
    console.log("Dortmund ist Meister")
}else{
    console.log("Bayern ist Meister")
}

console.log("Übung 6 - Prüfung des MwSt-Satzes:")
let lebensmittel = true

if(lebensmittel){
    console.log("Mehrwertsteuer: 7%")
}else{
    console.log("Mehrwertsteuer: 19%")
}

// Erkenntnisgewinn: Wenn der Ausdruck (hier: lebensmittel) true oder false ist,
// ist kein vergleichsoperator (== oder ===) notwendig. 

console.log("Übung 7 - Die Prüfung ist immer true:")
if(true){
    console.log("Diese Prüfung ist immer wahr.")
}
