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
            meldung : ""
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
        meldung : "Ihre Zugangsdaten sind falsch."
    })  
    }
    serverAntwort.render('login.ejs', {
        meldung : "Bitte geben sie ihere Zugangsdaten ein. "
    })         
        
})

// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {  
    
    // Der Cookie wird gelöscht 

    serverAntwort.clearCookie('istAngemeldetAls')
    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:

    serverAntwort.render('login.ejs', {
        meldung : "Bitte geben sie ihere Zugangsdaten ein."
    })          
})
// Die meineApp.post('login')wird ausgeführt sobald der Butten auf dem loginformular gedrückt wird.
meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('about.ejs', {})          
}) 

meineApp.get('/profil',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('profil.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Telefon: kunde.Telefon,
        Mail: kunde.Mail,
        Password: kunde.Kennwort,
        Erfolgsmeldung: ""
    }) 
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

// require('./Uebungen/ifUndElse.js')
// require('./Uebungen/klasseUndObjekt.js')


// onclick="alert('Änderungen gespeicher')" 
