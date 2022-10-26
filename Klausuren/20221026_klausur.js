console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Datenschutz behandelt die Personen bezogenen Daten wie
// z.B. Alter, Name, Wohnort und deren schutz vor missbrauch oder verlusst.
//
// Datensicherheit beschäftigt sich mit dem Schutz dieser Daten sowohl Digital als auch Analog,
// Dabei wird versucht möglichst viele Sichheitslücken zu schließen um den Glässeren Menschen zu verhindern.
//
//
//
//
//
// 
// 
// 
// 
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
//Die symmetrische Verschlüsselung arbeitet mit einem Key (Schlüssel) um die Dateien zu verschlüsseln und entschlüsseln.
//Die asymmetrische Verschlüsselung arbeitet mit zwei Keys einen öffentlichen Key (public key) und eine 
//privaten Key (privete key).
//Der public key wird zum verschlüsseln verwendet und ist allen zugänglich. 
//Der privete key wird zum entschlüsseln verwendet.
//Während die symmetrische Verschlüsselung sehr schnell ist und man die Datei nicht für jeden Empfänger einzelnt 
//verschlüsseln muss ist die asymmetrische Verschlüsselung dafür um so sichherer aber langsamer. 
//
// 
// 
// 
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// Mann kann z.B. den symmertrichen Key asymmetrische verschlüsseln um zwar trotzdem die Schnelligkeit der 
// symmertrichen Verschlüsselung zu nutzen aber zu gleich die deutlich sichhere Verschlüsselung der 
// asymmetrische Verschlüsselung zu nutzen.
// 
//
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// Bei der Deklaratzion werden mögliche Gruppen und Eigenschaften benannt. 
// Bei der Initialisierung wird eine Objekt erschaffen/ vestgelegt.
// Und bei der Initialisierung werden den Eigenschaften des Objektes konkrete Werte zugeteilt.
//
//
//
//  
// 
//
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

class Zeugnis{
    constructor(){
        this.Schüler 
        this.Klasse
        
        this.Mathe 
        this.Deutsch 
        this.Englisch 
        this.BWL
        this.VWL
        this.Sport
        this.WI
        this.Spanisch
        this.Fehltage 
        this.Sonderqualifikatzion 
    }
}

// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  

let pitKiff = new Zeugnis

pitKiff.Schüler = "Pit Kiff"
pitKiff.Klasse = "11b"

pitKiff.Mathe = 1
pitKiff.Deutsch = 2
pitKiff.Englisch = 3
pitKiff.BWL = 2
pitKiff.VWL = 2 
pitKiff.Sport = 3
pitKiff.WI = 4
pitKiff.Spanisch = 2
pitKiff.Fehltage = 0
pitKiff.Sonderqualifikatzion = "keine" 




// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 

console.log("Der Schüler/ Die Schlüleren " + pitKiff.Schüler + " aus der Klasse " + pitKiff.Klasse + " hatt in:" )


console.log("Mathe die Note " + pitKiff.Mathe )
console.log("Deutsch die Note  " + pitKiff.Deutsch ) 
console.log("Englisch die Note  " +pitKiff.Englisch ) 
console.log("BWL die Note  " +pitKiff.BWL ) 
console.log("VWL die Note  " +pitKiff.VWL ) 
console.log("Sport die Note  " +pitKiff.Sport ) 
console.log("WI die Note " +pitKiff.WI ) 
console.log("Spanisch die Note " +pitKiff.Spanisch ) 
console.log("Der Schüler/ Die Schlüleren " + pitKiff.Schüler + " hatt: "+ pitKiff.Fehltage +"Fehltage") 
console.log("Es liegt " + pitKiff.Sonderqualifikatzion + " Sonderqualifikatzion vor.")





// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 

console.log("Git und Pit:")

let pitMathe = 15
let pitDeutsch = 10
let pitEnglisch = 5

let pitdurchnitt = (pitMathe + pitDeutsch + pitEnglisch)/3
let pitdurchnitt2 = (pitMathe + pitDeutsch + pitEnglisch)/3*2
let gitMathe = 10
let gitDeutsch = 8
let gitEnglisch = 15

let gitdurchnitt = (gitMathe + gitDeutsch + gitEnglisch)/3 
let gitdurchnitt2 = (gitMathe + gitDeutsch + gitEnglisch)/3*2

// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"

if(pitdurchnitt > gitdurchnitt){ 
console.log("Pit hat das bessere Zeugnis")
}
if(pitdurchnitt < gitdurchnitt){ 
    console.log("Git hat das bessere Zeugnis")
    }
if(pitdurchnitt == gitdurchnitt){ 
    console.log("Pit gleich Git")
    }

if(pitdurchnitt > gitdurchnitt2 > pitdurchnitt2){ 
    console.log("Pit hat das viel bessere Zeugnis")
    }
if(pitdurchnitt < gitdurchnitt2 < pitdurchnitt2){ 
    console.log("Git hat das viel bessere Zeugnis")
    }
if(pitdurchnitt == gitdurchnitt2){ 
        console.log("Pit hat das viel bessere Zeugnis")
        }
if(pitdurchnitt2 == gitdurchnitt){ 
        console.log("Git hat das viel bessere Zeugnis")
        }
    
//test
