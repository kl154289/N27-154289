// Programme veraarbeiten oft Objekte der realen Welt.
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
class Konto {
    constructor(){
        this.Kontostand
        this.IBAN
        this.Art 
        this.PIN 
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

let konto = new Konto

//Initialisierung 

konto.Kontostand = 10
konto.IBAN = "De12 4011 1111 0022 8888 16"
konto.Art = "Girokonto"
konto.PIN = 1234




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
    // dann ist die Pr??fung wahr und es wird die gerenderte Index.Seite an den Browser
    // zur??ckgegeben. Anderfalls wird die Login.Seite sn den Browser gegeben. 

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

    // Die Identit??t des Kunden wird ??berpr??ft. 
    // if and javascript 
    
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){

        // Ein Cookie namens 'istAngemeldetAls' wird beim Browser gesetzt.#
        // Der Wert des Cookies ist das in eine Zeichenkette umgewandelte Kunden-Objekt.
        // Der Cookie wird signiert, also gegen Manpulation gesch??tzt. 

        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
        console.log("Der Cookie wurde erfolgreich gesetzt")

        // Wenn die Id des Kunden mit der Eingabe im Browser ??bereinstimmt
        // Und("&&") das Kennwort ebenfalls 
        // dann gibt der SErver die gerenderte Index-Seite zur??ck.
        serverAntwort.render('index.ejs', {})          
    }else{
        // Wenn sie nicht ??bereinstimmen wird die Login-Seite geladen. 
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
    
    // Der Cookie wird gel??scht 

    serverAntwort.clearCookie('istAngemeldetAls')
    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zur??ckgegeben:

    serverAntwort.render('login.ejs', {
        Meldung : "Bitte geben sie ihere Zugangsdaten ein."
    })          
})
// wenn die about Seite angesurft wird, wird die about-Seite
// zum Browser zur??ckgegeben 
meineApp.get('/about',(browserAnfrage, serverAntwort, next) => { 

    // wenn der Anmelde Cooki ges??tzt ist, wird der Nutzer zur 
    // about-Seite gel??nkt.

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

// Sobald der Speicher butten auf der Profilseite gedr??ckt wird,
// wird die meineApp.post 'profile' abgearbeitet  

meineApp.post('/profil',(browserAnfrage, serverAntwort, next) => {
    
    // Die erfolgsmeldung f??r das Speichern der ge??nderete 
    // der Profilsdaten wird in einer lokalen Variable namens 
    // Erfolgsmeldung gespeichert 

    let erfolgsmeldung = ""

   // Der Wert der Eigenschaft von Mail in Browser wird
   // zugewiesen an die Eigenschaft Mail des Objekts kunde 

    if(kunde.Mail != browserAnfrage.body.Mail){
        // wenn der Wert der Eigenschaft von kunde.Mail abweicht 
        // von Wert der Eigenschaft Mail aus dem Browserformular 
        // dann wird die Erfolgsmeldung initialisiert 
        erfolgsmeldung = erfolgsmeldung + "??nderung der Mail erfolgreich."
        kunde.Mail = browserAnfrage.body.Mail
        console.log(erfolgsmeldung) 
    }
    if(kunde.Telefon != browserAnfrage.body.Telefon){
       erfolgsmeldung = erfolgsmeldung + "??nderung der Telefonnummer erfolgreich."
       kunde.Telefon= browserAnfrage.body.Telefon
       console.log(erfolgsmeldung) 
    }
    if(kunde.Kennwort != browserAnfrage.body.Kennwort){
        erfolgsmeldung = erfolgsmeldung + "??nderung des Passworts erfolgreich."
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
        serverAntwort.render('kontostandAnzeigen.ejs', {
       
        })

    }else{

    
        serverAntwort.render('login.ejs', {
            Meldung : ""
        })  
    } 
            
    
}) 


require('./Uebungen/ifUndElse.js')
require('./Uebungen/klasseUndObjekt.js')
require('./Uebungen/klausur.js')

// onclick="alert('??nderungen gespeicher')" 
