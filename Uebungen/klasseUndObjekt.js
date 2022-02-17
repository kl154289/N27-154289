console.log("Übungen zu Klasse und Objekt")
console.log("============================")

// Übung 1
// In einem Fußballverein sollen Spieler verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) das Objekt zur realen Welt ist der Spieler 

// zu b)
class Spieler{
    constructor(){
        this.Name
        this.Position
        this.Verein
        this.Nummer
        this.Alter 
    }
}

// zu c)
// Es wird nun ein konkreter Spueler mint konkreten Eigenschaften erzeugt.
// dazu wird der konkreter Spieler deklariert (bekanntgemacht): let spielerMueller 
// in einem zweiten Schritt wird der konkrete Spieler instanziert = new Spieler ()  

let spielerMueller = new Spieler () 

// zu d) 
// Es werden konkrete Eigenschaftswerte in den Arbeitsspeicher geschrieben:

spielerMueller.Name = "Thomas Müller"
spielerMueller.Nummer = 25
spielerMueller.Position = "Stürmer"
spielerMueller.Verein = "FCB" 
spielerMueller.Alter = 18 

console.log(spielerMueller.Name)
console.log(spielerMueller.Position)
console.log("Der Spieler "+ spielerMueller.Name + " hat die Nummer "+ spielerMueller.Nummer +"." )

if(spielerMueller.Alter >= 18){
    spielerMueller.Volljährig = true
    console.log("Der Spieler" + spielerMueller.Name + " ist volljährig")

}

// Übung 2
// In einem Schulprogramm sollen Zeugnisse verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

// zu a) Das Zeugnis ist das Objekt der realen Welt 

class Zeugnis{
    constructor(){
        this.SchuelerName
        this.Klasse
        this.Geburtsdatum 
        this.Fehlstunden 
        this.Faecher
        this.GesamtNote 
    }
}
// zu c)
let zeugnisMarvin = new Zeugnis()
// zu d)
zeugnisMarvin.SchuelerName = "Marvin Kiff"
zeugnisMarvin.Geburtsdatum = "11.02.2022"
zeugnisMarvin.Klasse = "10a"
zeugnisMarvin.Fehlstunden = 123
zeugnisMarvin.Faecher = "Deutsch"
zeugnisMarvin.GesamtNote = 4

let zeugnisMax = new Zeugnis()

zeugnisMax.SchuelerName = "Max Muster"
zeugnisMax.Fehlstunden = 10 
zeugnisMax.GesamtNote = 1

if(zeugnisMax.Fehlstunden > zeugnisMarvin.Fehlstunden){
    console.log("Max hat mehr Fehlstunden")
}else{
    console.log("Marvin hat mer")
}






// Übung 3
// In einem Kiosk soll das Sortiment mit verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten
// zu a) Die Objekte der realen Welt sind die Produkte 

// zu b)

class Produkt{
    constructor(){

        this.Bruttopreis
        this.Bezeichnung 
        this.MwStSatz 
        this.Barcode 
        this.Preis 
    }

}

// zu c) 
// Deklaration und Instanziierung 
let produkt1 = new Produkt()

// zu d) 

produkt1.Bezeichnung = "Kaugummi"
produkt1.Barcode = 5901234123457 
produkt1.Bruttopreis = 1.19 // Im Quellcode steht anstelle des Kommas ein Punkt
produkt1.MwStSatz = 19 // Prozent 

console.log("Das Rrodukt " + produkt1.Bezeichnung + " Hat den Bruttopreis " + produkt1.Bruttopreis + " €.")

produkt1.Nettopreis = produkt1.Bruttopreis / (100 + produkt1.MwStSatz) * 100  

console.log("Nettopreis: " + produkt1.Nettopreis + " €.")

if(produkt1.Bruttopreis > 1){
    console.log("Achtung! Preis von " + produkt1.Bezeichnung +" muss gesenkt werden!")
}else{
    console.log("Preis ist von " + produkt1.Bezeichnung +" o.k.") 
}

// Übung 4
// Für ein Schulfest sollen alle Stände verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten



class Stand{
    constructor(){
        this.Namen 
        this.Lage 
        this.Oeffnungszeiten 
        this.Personalanzahl
        this.Angebot 
        this.Ausgaben 
        this.Einnahmen 
    }
}

let standcafeteria = new Stand

standcafeteria.Name = "Cafeteria" 
standcafeteria.Lage = "Turnhalle"
standcafeteria.Oeffnungszeiten = "10 Uhr bis 18 Uhr"
standcafeteria.Personalanzahl = 3 
standcafeteria.Angebot = "Kaffee und Kuchen"
standcafeteria.Ausgaben = 500
standcafeteria.Einnahmen = 1000 

if(standcafeteria.Einnahmen > standcafeteria.Ausgaben){
    console.log("Der Stand " + standcafeteria.Name + " macht Gewinn. ")
}else{
    console.log("Der Stand " + standcafeteria.Name + " macht keinen Gewinn")
}











