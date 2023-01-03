**Abfragen 

Suche alle Kunden aus der Tabelle kunde:

SELECT * FROM kunde;

Das Sternchen steht für alle Eigenschaften (Spalten) aller Kundendatensätzen (Zeilen) 

**Abfrage 2 

Suche alle Vornahmen und Nachnamen aller Kunden:

SELECT vorname, nachname FROM kunden;

**Abfrage 3
Suche alle Vornamen und Nachnamen aller Kunden, die in Borken wohnen:

SELECT vorname, nachname FROM kunden WHERE ort = "Borken"; 


