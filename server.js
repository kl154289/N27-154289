// Das installierte MsYQL-Module mit require() eingebunden 
// Das MySQL-Module stellt die verbindung stellt die verbindung zwischen der App un der 
// MySQL-Datenbank her. 
// Eine Datenbank wird benötigt, wenn Daten auch nach der Laufzeit des
// Programms noch weiter existieren sollen.
// Außerdem ermöglicht die Datenbank, dass z.B. Geldüberweisungen 
// zwischen Anwendern möglich werden.

var mysql = require('mysql');
var IBAN = require('iban'); 

// Die Verbindung zur Datenbank eird hergestellt. Dazu werden die 
// Adresse und die Anmeldedataen der Datenbank angegeben.

var dbVerbindung = mysql.createConnection({
    host: "10.40.38.110",
    user: "placematman",
    password: "BKB123456!",
    database: "dbn27" 
  });
  
  dbVerbindung.connect(function(err) {

    // Wenn dei Verbindung scheitert, wird ein Fehler geworfen.

    if (err) throw err;

    // Wenn die Verbindung aufgebaut werden kann, wird der Erfolg
    // auf der Console geloggt.

    console.log("Connected!");
  });

  // Die Verbindung zur Datenbank wird geöffnet.

  dbVerbindung.connect(function(fehler){

    // Die Tabelle namens kunde wird erstellt.
    // Die Spalten heißen: idKunde, vorname, nachname, ort, kennwort, mail 
    // VARCHAR(45) legt den Datentyp der Spalte auf "Text" mit der länge max.45 fest
    // INT(11) begrenzt die Eingabe auf 11 Ziffern.
    // idKunde ist Primary Key. Das bedeutet, dass die idKunde den Datensatz eindeutig 
    // kennzeichnet.

    dbVerbindung.query('CREATE TABLE kunde(idKunde INT(11), vorname VARCHAR(45), nachname VARCHAR(45), ort VARCHAR(45), kennwort VARCHAR(45), mail VARCHAR(45), PRIMARY KEY(idKunde));', function (fehler) {
        // Falls ein Problem beim der Query aufommt,...
    if (fehler) {
        // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet, ...
             if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

        // ... dann wird eine Fehlermeldung geloggt. 

            console.log("Tabelle kunde existiert bereits und wird nicht angelegt.")
     }else{
         console.log("Fehler: " + fehler )
         }
        }else{
         console.log("Tabelle Kunde erfolgreich angelegt.")
    }
    })
    })


    dbVerbindung.query('CREATE TABLE kredit(Zinssatz INT(11), Kreditbetrag INT(11), Laufzeit VARCHAR(45), PRIMARY KEY(Zinssatz));', function (fehler) {
        // Falls ein Problem beim der Query aufommt,...
    if (fehler) {
        // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet, ...
             if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

        // ... dann wird eine Fehlermeldung geloggt. 

            console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
     }else{
         console.log("Fehler: " + fehler )
         }
        }else{
         console.log("Tabelle kredit erfolgreich angelegt.")
    }
    }); 

    dbVerbindung.query('CREATE TABLE konto( Kontostand INT(11), Kontoart INT(11), PIN INT(4) PRIMARY KEY(IBAN));', function (fehler) {
        // Falls ein Problem beim der Query aufommt,...
        
    if (fehler) {
        // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet, ...
             if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

        // ... dann wird eine Fehlermeldung geloggt. 

            console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
     }else{
         console.log("Fehler: " + fehler )
         }
        }else{
         console.log("Tabelle kredit erfolgreich angelegt.")
    }
    }); 

    dbVerbindung.query('INSERT INTO kunde(idKunde, vorname, nachname, ort, kennwort, mail) VALUES (150000, "Pit", "Kiff", "BOR", "123!", "pk@web.de") ;', function (fehler) {
      
        // Falls ein Problem bei der Query aufkommt, ...
        
        if (fehler) {
        
            // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet, ...
    
            if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
    
                //... dann wird eine Fehlermdldung geloggt. 
    
                console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
            
            }else{
                console.log("Fehler: " + fehler )
            }
        }else{
                console.log("Tabelle kredit erfolgreich angelegt.")
         }
    });
    
// Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben Eigenschaften.
// In unserem Bankingprogramm intressieren uns Objekte,
// wie z.B. Kunde, Konten...
// Alle Kunden unsere Bank haben die selben Eigenschaften,aber
// unterschitedliche Eigenschaftswerte 

class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail 
        this.Telefon
    }
}
class Berater{
    constructor(){
        this.IdBerater
        this.Nachname
        this.Vorname
        this.Mail 
        this.Telefon
        this.Filiale 
        this.Bergruessung
        this.Position 
    }
}

// Die Klasse Konto ist der Bauplan für alle konto-Oblekte.
// in der Klasse werden alle relevanten Eigenschaften definirt. 
// Die Konto-Objekte, die aus dieser Klasse erzeugt werden, haben die selben Eigenschaften, 
// aber unterschidliche Eigenschaftswerte 
class Konto {
    constructor(){

        // Die relevanten Eigenschaften werden im Konstruktor aufgelistet.
        // Eigenschaften werden immer großgeschriben   

        this.Kontostand
        this.IBAN
        this.Kontoart  
        this.PIN 
    }
}

class Kredit {
    constructor(){
        this.Zinssatz
        this.Kreditbetrag 
        this.Laufzeit
    }

    // eine Funktion berechnet etwas. Im Namen der Funktion steht also immer ein Verb.
    berechneGesamtkostenKredit(){
        return this.Kreditbetrag * this.Zinssatz / 100 + this.Kreditbetrag
    }

}



// Von der Kunden-Klasse wird eine konkrete Instanz 
// gebildet. 

let kunde = new Kunde() 

// Die Konkrete Instanz bekommt Eigenschaftswerte 
// zugewiesen 

kunde.IdKunde = 154289 
kunde.Nachname = "Han"
kunde.Vorname = "Hanz"
kunde.Geburtsdatum = "12.1.2000"
kunde.Mail = "Hanz@gmail.com"
kunde.Kennwort = "123"
kunde.Telefon = 123456789

let berater = new Berater

berater.IdBerater = 100001
berater.Nachname = "Harry"
berater.Vorname = "Berater"
berater.Mail = "IchHelfe@gmail.com"
berater.Telefon = 123456789
berater.Filiale = "Borken"
berater.Bergruessung = "Hallo hau ab das Geld ist nicht echt!"
berater.Position = "Chef"

// Instanzierung eines Obejkts namens konto vom Typ Konto
// "let konto" bedeutet, dass ei Objekt namens konto exisitieren soll. 
// Man sagt, das konto wird deklariert 

//"=new Konto()" nennt man die instanzierung. Bei der Initanziirung wird Festplattenspeicher reserviert, 
// um bei der anschließenden Initzialisirung konkrete Eigenschaft-
// werte für das Objekt zu speichern.

let konto = new Konto

//Bei der Initialisierung werden konkrete Eigenschaften in die reservierten 
// Speicherzellen geschrieben. 
// Die Zuweisung von Eigenschaftswerten geschied immer von recht nach links. 

konto.Kontostand = 10
konto.IBAN = "DE12401111110022888816"
konto.Kontoart = "Giro"
konto.PIN = 1234

let kredit = new Kredit

kredit.Zinssatz = 1 
kredit.Kreditbetrag = 100
kredit.Laufzeit = 1


const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
const cookieParser = require('cookie-parser') 
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
meineApp.use(cookieParser('geheim'))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Die Methode meineApp.get('/'...) wird abgearbeitet, wenn
// der Kunde die Indexseite (locolhost:3000 btw. 
// n27.herokuapp.com) ansurft. 

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {

    // Wenn der Kunde bereits angemeldet ist, soll die 
    // Index-Seite an den Browser gegeben werden.

    // Wenn ein signierter Cookie mit Namen 'istAngemeldetAls' im Browser vorhanden ist,
    // dann ist die Prüfung wahr und es wird die gerenderte Index.Seite an den Browser
    // zurückgegeben. Anderfalls wird die Login.Seite sn den Browser gegeben. 

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('index.ejs')
    }else{

    // Wenn der Kunde nichtbereits angemeldet ist, soll die 
    // Login-Seite an den Browser gegeben werden.

        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    }        
})

// Die Methode meineApp.post('/login') wird abgearbeitet, sobald 
// der Anwender im Login-Formular auf "Einloggen" klickt. 

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {   
    
    // Die im Browser eingegebene IdKunde und Kennwort werden zugewiesen
    // an die Konstante namens idKunde und kennwort.

    const idKunde = browserAnfrage.body.IdKunde 
    const kennwort = browserAnfrage.body.Kennwort

    console.log("Id des Kunden: " + idKunde) 
    console.log("Kennwort des Kunden: " + kennwort)

    // Die Identität des Kunden wird überprüft. 
    // if and javascript 
    
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){

        // Ein Cookie namens 'istAngemeldetAls' wird beim Browser gesetzt.#
        // Der Wert des Cookies ist das in eine Zeichenkette umgewandelte Kunden-Objekt.
        // Der Cookie wird signiert, also gegen Manpulation geschützt. 

        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
        console.log("Der Cookie wurde erfolgreich gesetzt")

        // Wenn die Id des Kunden mit der Eingabe im Browser übereinstimmt
        // Und("&&") das Kennwort ebenfalls 
        // dann gibt der SErver die gerenderte Index-Seite zurück.
        serverAntwort.render('index.ejs', {})          
    }else{
        // Wenn sie nicht übereinstimmen wird die Login-Seite geladen. 
    serverAntwort.render('login.ejs', {
        Meldung : "Ihre Zugangsdaten sind falsch."
    })  
    }
    serverAntwort.render('login.ejs', {
        Meldung : "Bitte geben sie ihere Zugangsdaten ein. "
    })         
        
})

// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {  
    
    // Der Cookie wird gelöscht 

    serverAntwort.clearCookie('istAngemeldetAls')
    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:

    serverAntwort.render('login.ejs', {
        Meldung : "Bitte geben sie ihere Zugangsdaten ein."
    })          
})
// wenn die about Seite angesurft wird, wird die about-Seite
// zum Browser zurückgegeben 
meineApp.get('/about',(browserAnfrage, serverAntwort, next) => { 

    // wenn der Anmelde Cooki gesätzt ist, wird der Nutzer zur 
    // about-Seite gelänkt.

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('about.ejs')
    }else{

    // Wenn der Kunde nichtbereits angemeldet ist, soll die 
    // Login-Seite an den Browser gegeben werden.

        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    }             
             
}) 

meineApp.get('/profil',(browserAnfrage, serverAntwort, next) => {
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('profil.ejs', {
            Vorname: kunde.Vorname,
            Nachname: kunde.Nachname,
            Telefon: kunde.Telefon,
            Mail: kunde.Mail,
            Password: kunde.Kennwort,
            Erfolgsmeldung: ""
        })
    }else{

    // Wenn der Kunde nichtbereits angemeldet ist, soll die 
    // Login-Seite an den Browser gegeben werden.

        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    }                
    
}) 

meineApp.get('/support',(browserAnfrage, serverAntwort, next) => {
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('support.ejs', {
            VornameBerater: berater.Vorname,
            NachnameBerater: berater.Nachname,
            TelefonBerater: berater.Telefon,
            MailBerater: berater.Mail,
            FilialeBerater: berater.Filiale,
            Bergruessung: berater.Bergruessung,
            Position: berater.Position,
            ErfolgsmeldungBerater: ""
        })

    }else{

    // Wenn der Kunde nichtbereits angemeldet ist, soll die 
    // Login-Seite an den Browser gegeben werden.

        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    } 
            
    
}) 

// Sobald der Speicher butten auf der Profilseite gedrückt wird,
// wird die meineApp.post 'profile' abgearbeitet  

meineApp.post('/profil',(browserAnfrage, serverAntwort, next) => {
    
    // Die erfolgsmeldung für das Speichern der geänderete 
    // der Profilsdaten wird in einer lokalen Variable namens 
    // Erfolgsmeldung gespeichert 

    let erfolgsmeldung = ""

   // Der Wert der Eigenschaft von Mail in Browser wird
   // zugewiesen an die Eigenschaft Mail des Objekts kunde 

    if(kunde.Mail != browserAnfrage.body.Mail){
        // wenn der Wert der Eigenschaft von kunde.Mail abweicht 
        // von Wert der Eigenschaft Mail aus dem Browserformular 
        // dann wird die Erfolgsmeldung initialisiert 
        erfolgsmeldung = erfolgsmeldung + "Änderung der Mail erfolgreich."
        kunde.Mail = browserAnfrage.body.Mail
        console.log(erfolgsmeldung) 
    }
    if(kunde.Telefon != browserAnfrage.body.Telefon){
       erfolgsmeldung = erfolgsmeldung + "Änderung der Telefonnummer erfolgreich."
       kunde.Telefon= browserAnfrage.body.Telefon
       console.log(erfolgsmeldung) 
    }
    if(kunde.Kennwort != browserAnfrage.body.Kennwort){
        erfolgsmeldung = erfolgsmeldung + "Änderung des Passworts erfolgreich."
        kunde.Kennwort = browserAnfrage.body.Kennwort
    }
    
    
    

    serverAntwort.render('profil.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Telefon: kunde.Telefon,
        Mail: kunde.Mail,
        Password: kunde.Kennwort,
        Erfolgsmeldung: erfolgsmeldung
    })  
}) 
// sobald der "Button Kontostand anzeigen" auf der Index-Seite gedrückt wird,
// wird die meineApp.get ('/kontosatdAnzeigen'- Funktion abgearbeitet) 

meineApp.get('/kontostandAnzeigen',(browserAnfrage, serverAntwort, next) => {
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('kontostandAnzeigen.ejs', {
           Kontostand: konto.Kontostand,
           IBAN: konto.IBAN,
           Kontoart: konto.Kontoart, 
           PIN: konto.PIN 
        })

    }else{

    
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    } 
            
    
}) 
meineApp.get('/kreditrechner',(browserAnfrage, serverAntwort, next) => {
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('kreditrechner.ejs', {
       Kreditbetrag: kredit.Kreditbetrag,
       Zinssatz: kredit.Zinssatz,
       Laufzeit: kredit.Laufzeit,
       Erfolgsmeldung: "" 
        })

    }else{

    
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    } 
            
    
}) 

meineApp.post('/kreditrechner',(browserAnfrage, serverAntwort, next) => {
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('kreditrechner.ejs', {
       Kreditbetrag: kredit.Kreditbetrag,
       Zinssatz: kredit.Zinssatz,
       Laufzeit: kredit.Laufzeit
        })

    }else{

    
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    } 
            
    
}) 
meineApp.get('/kontoAnlegen',(browserAnfrage, serverAntwort, next) => {
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('kontoAnlegen.ejs', {
       
        })

    }else{

    
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    } 
            
    
}) 

meineApp.post('/kontoAnlegen',(browserAnfrage, serverAntwort, next) => {
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('kontoAnlegen.ejs', {
       
        })

    }else{

    
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    } 
            
    
}) 

//require('./Uebungen/ifUndElse.js')
//require('./Uebungen/klasseUndObjekt.js')
//require('./Klausuren/20220531_klausur.js')
//require('./Klausuren/20221026_klausur.js')
//require('./Klausuren/20230111_klausur.js')
// onclick="alert('Änderungen gespeicher')" 
