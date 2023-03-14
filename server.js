// Das IBAN-Modul wird benötigt um eine gültige IBAN zu errechen

var IBAN = require('iban');




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

    // Der Host ist der Server auf dem die Datenbank installiert ist. 
    // Der Host kann über seinen Namen oder seine IP-Adresse adressiert werden.
    // wenn der Host nicht reagiert kann mit ping 10.40.38.110 geprüft werden ob der Rechner eingeschaltet ist. 
    // Wenn der Rechner auf ping antwortet, aber kein connect aufgebaut werden kann,
    //  dann muss geprüft werden, ob der Datenbank-Dienst auf dem Rechener läuft. 
    // Dazu melden wir uns auf den Datenbanksecer an und starten die MySQL-Workbanch. 
    host: "10.40.38.110",
    user: "placematman",
    password: "BKB123456!",
    database: "dbn27" 
  });

  // Die dbVerbindung ruft die connect-Methode auf, um eine Verbindung mit der
  // Datenbank herzustellen. 
  
  dbVerbindung.connect(function(err) {

    // Wenn dei Verbindung scheitert, wird ein Fehler geworfen.
    // Wenn die Datenbank nicht innerhalb einer definierten Zeit auf 
    // den connect-Versuch antwortet, kommt ein TIMEOUT-Fehler.

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
         console.log("Fehler: " + fehler + "Kunde")
         }
        }else{
         console.log("Tabelle Kunde erfolgreich angelegt.")
    }
    })
    })


    dbVerbindung.query('CREATE TABLE kredit(idKunde INT(11), datum DATETIME, zinssatz FLOAT, laufzeit INT(11), betrag SMALLINT, PRIMARY KEY(idKunde,datum));', function (fehler) {
      
        // Falls ein Problem bei der Query aufkommt, ...
        
        if (fehler) {
        
            // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet, ...
    
            if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
    
                //... dann wird eine Fehlermdldung geloggt. 
    
                console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
            
            }else{
                console.log("Fehler: " + fehler +" kredit")
            }
        }else{
                console.log("Tabelle kredit erfolgreich angelegt.")
         }
      })
      // Eine Tabelle namens Konto wird neu angelegt falls sie noch nicht existiert 

      dbVerbindung.query('CREATE TABLE konto(iban VARCHAR(45), idKunde INT(11), anfangssaldo FLOAT, kontoart VARCHAR(45), timestamp TIMESTAMP, PRIMARY KEY(iban));', function (fehler) {
      
        // Falls ein Problem bei der Query aufkommt, ...
        
        if (fehler) {
        
            // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet, ...
    
            if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
    
                //... dann wird eine Fehlermdldung geloggt. 
    
                console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
            
            }else{
                console.log("Fehler: " + fehler +" konto" )
            }
        }else{
                console.log("Tabelle kredit erfolgreich angelegt.")
         }
      })
  
  // Ein Kunde soll neu in der Datenbank angelegt werden.
  

    

    dbVerbindung.query('INSERT INTO kunde(idKunde, vorname, nachname, ort, kennwort, mail) VALUES (154289, "Pit", "Kiff", "BOR", "123!", "pk@web.de") ;', function (fehler) {
      
        // Falls ein Problem bei der Query aufkommt, ...
        
        if (fehler) {
        
            // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet, ...
    
            if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
    
                //... dann wird eine Fehlermdldung geloggt. 
    
                console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
            
            }else{
                console.log("Fehler: " + fehler +" I kunde" )
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
        this.GesamtkostenKredit
        this.kostenKredit
    }

    // eine Funktion berechnet etwas. Im Namen der Funktion steht also immer ein Verb.
    berechneGesamtkostenKredit(){
        return  this.Kreditbetrag * this.Zinssatz / 100 + this.Kreditbetrag
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
kredit.GesamtkostenKredit = this.Kreditbetrag * this.Zinssatz / 100 + this.Kreditbetrag

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

        // Nachdem der Kunde erfolgreich eingelockt ist, werden seine Konten aus der Datenbank eingelesen.

        
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


meineApp.get('/kontostandAnzeigen',(browserAnfrage, serverAntwort, next) => {
if(browserAnfrage.signedCookies['istAngemeldetAls']){
    console.log("Jetzt werden die Konten eingelesen") 
        // In MY MYSQL werden Abfragen gegen die Datenbank wie folg formuliert:
        // DER Abfragebefehl beginnt mit SELECT 
        // Anschöießent wird die interressierte Spalte angegeben.
        // Mehrere interessierende Spalten werden mit Komma getrentt angegeben.
        // Wenn alle Spalten ausgewählt werden sollen, kann vereinfachend * angegeben werden.      
        //  Beispiele: SELECT iban, anfangssaldo FROM...' oder 'SELECT * FROM....'      
        // Mit FROM wird die Tabelle angegeben, aus der der Result eingelesen werden soll.      
        // Mit WHERE wird zeilenwiese gefilert    
    
    dbVerbindung.query('SELECT * FROM konto WHERE idKunde = 154289;', function (fehler, result) {
      
        console.log(result)



   
        // sobald der "Button Kontostand anzeigen" auf der Index-Seite gedrückt wird,
        // wird die meineApp.get ('/kontostandAnzeigen'- Funktion abgearbeitet) 
        serverAntwort.render('kontostandAnzeigen.ejs', {
            MeineIbans: result, 
            Kontostand: konto.Kontostand,
            IBAN: konto.IBAN,
            Kontoart: konto.Kontoart, 
            PIN: konto.PIN 
       
     });
   
        
})

    }else{

    
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    } 
            
    
}) 
//meineApp.post('/kontostandAnzeigen',(browserAnfrage, serverAntwort, next) => {
    
//    let iban2 = browserAnfrage.body.iban

//   dbVerbindung.query('SELECT kontoart FROM konto WHERE iban = iban2 ;', function (fehler, result) {
      
//      console.log(result)


 //       serverAntwort.render('kontostandAnzeigen.ejs', {
            
 //           Kontostand: result,
//            IBAN: konto.IBAN,
 //           Kontoart: konto.Kontoart
       
 //   })  
//}) 
meineApp.get('/kreditrechner',(browserAnfrage, serverAntwort, next) => {
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('kreditrechner.ejs', {
       Kreditbetrag: kredit.Kreditbetrag,
       Zinssatz: kredit.Zinssatz,
       Laufzeit: kredit.Laufzeit,
       Ergebnis: kredit.GesamtkostenKredit, 
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
       Laufzeit: kredit.Laufzeit,
       Ergebnis: kredit.GesamtkostenKredit
        })

    }else{

    
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    } 
            
    
}) 

// Die Funktion meineApp.get('/kontoAnlegen'...wird abgearbeitet sobald die Seite
// kontoAnlegen im Browser aufgerufen wird) 
meineApp.get('/kontoAnlegen',(browserAnfrage, serverAntwort, next) => {

// Es wird geprüft, ob der User angemeldet ist, also ob der Cookie gesetzt ist.  
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
//Wenn der User angemeldet ist, wird die Konto anlegen gerendert.
        serverAntwort.render('kontoAnlegen.ejs', {
            IBAN: 6,
            Erfolgsmeldung: "",
    })
//Wenn der User nicht angemeldet ist, wird er zum Login zurückgeworfen.
    }else{

    
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    } 
            
    
}) 

//Die Funktion meineApp.post ('/kontoAnlegen'....wird abgearbeitet, sobald der Butoon auf der kontoanlegenSeite gedrückt wird)
//und das Formular abgesendet ('gepostet')wird. 
meineApp.post('/kontoAnlegen',(browserAnfrage, serverAntwort, next) => {   

    let erfolgsmeldung = ""
    
    // Die im Formulsr eingegebene wird an die Konstante namens kontoArt zugewiesen.

    const kontoart = browserAnfrage.body.kontoart

    
    console.log("Konto: " + kontoart +" wurde ausgewaelt.") 

    // Die IBAN wird automatisch erzeugt. Die IBAN kennzeichnet das anzulegende Konto einmalig (Primary Key).
    
    let laenderkennung = "DE"
    let bankleitzahl = 27000000

    // Die Zahl 1111111111 wird zugewisen an eine Variable namens min.
    
    let min = 1111111111;

    // Die Zahl 9999999999 wird zugewisen an eine Variable namens max.

    let max = 9999999999;

    // Eine Zufallszahl zwischen min und max wird von der Math_Bibliothek mit Mathhode random()
    // erzeugt und an dei Variable zufaelligeKontonummer zugewiesen.

    let zufaelligeKontonummer = Math.floor(Math.random()* (max - min + 1)) + min;

    console.log(zufaelligeKontonummer)

    // Die IBAN wird mit einer Node-Bibliothek names IBAN errechnet.
    // Die Parameter der Funktion zur Berechnung der IBAN sind:
    // Laenderkennung, bankleitzahl und Kontonummer. 
    
    let iban = IBAN.fromBBAN(laenderkennung,bankleitzahl+ " " +zufaelligeKontonummer) 
    
    console.log("IBAN: " + iban)



    // Wenn die IBAN korrekt ist , dann wird in der Console ausgegeben: "Iban ist gültig."

    if(IBAN.isValid(iban)){
        console.log("die IBAN ist gueltig")
    }else{
        console.log("diese IBAN ist nicht gueltig")
    }
// Für die generrirte IBAN muss ein neuer Datensatz in der Tabelle konto angelegt werden. 

dbVerbindung.query('INSERT INTO konto(iban, idKunde, anfangssaldo, kontoart, timestamp) VALUES ("' + iban + '",154289, 1,"'+ kontoart +'", NOW()) ;', function (fehler) {
      
    // Falls ein Problem bei der Query aufkommt, ...
    
    if (fehler) {
    
            // ... und der Fehlercode "ER_TABLE_EXISTS_ERROR" lautet, ...

        if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

                //... dann wird eine Fehlermdldung geloggt. 

                console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
            
            }else{
                console.log("Fehler: " + fehler )
                erfolgsmeldung = "Fehler: " + fehler 
            }
            }else{
                erfolgsmeldung = "Das " + kontoart + "mit der Iban "
                console.log("Tabelle kredit erfolgreich angelegt.")
            }
            // Nach dem Erstellen des Kontos wird die Serverantwort gerendert an den Browser zurückgegeben.
        });
            // Damit die Meldung auf ejs-Seite angezeigt wird, muss es auf der ejs-Seite eine Variable
            // namens <%= Erfolgsmeldung &> geben.
         serverAntwort.render('kontoAnlegen.ejs', {
            Erfolgsmeldung: "Das " + kontoart + " mit der IBAN " + iban + " wurde erfolgreich angelegt."
    })              
        
})


//require('./Uebungen/ifUndElse.js')
//require('./Uebungen/klasseUndObjekt.js')
//require('./Klausuren/20220531_klausur.js')
//require('./Klausuren/20221026_klausur.js')
//require('./Klausuren/20230111_klausur.js')
// onclick="alert('Änderungen gespeicher')" 
