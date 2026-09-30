---
title: "Fiskalizacija 2.0 i eRačun: što tvrtke trebaju provjeriti u IT-u"
description: "Što se promijenilo s eRačunom od 1. 1. 2026., koji rokovi vrijede za obveznike PDV-a i ostale te praktična IT provjera: posrednik, certifikati, arhiva, pristupi."
pubDate: 2026-10-01
tags: ["fiskalizacija", "eRačun", "Fiskalizacija 2.0", "knjigovodstvo", "IT provjera"]
readingTime: 6
---

Novi Zakon o fiskalizaciji (NN 89/25) primjenjuje se od 1. rujna 2025., a odredbe o eRačunu od 1. siječnja 2026. Nakon devet mjeseci primjene većina tvrtki eRačune šalje i prima, ali se često dogodi da je prelazak riješen u knjigovodstvenom programu, dok IT pozadina ostane nedorađena: tko ima pristup, gdje su računi arhivirani, kada istječe certifikat i što ako posrednik ne radi.

U nastavku je kratak pregled obveza i popis stvari koje vrijedi provjeriti.

## Što se promijenilo od 1. siječnja 2026.

### Tko izdaje i zaprima eRačune

- **Obveznici PDV-a** sa sjedištem u Hrvatskoj od 1. 1. 2026. moraju eRačune **izdavati, zaprimati i fiskalizirati** u međusobnom poslovanju (B2B).
- **Porezni obveznici izvan sustava PDV-a** (npr. paušalni obrti i drugi obveznici poreza na dohodak ili dobit) od 1. 1. 2026. moraju eRačune **zaprimati** i fiskalizirati zaprimljene, a obveza **izdavanja** za njih počinje 1. 1. 2027.
- Za njih Porezna uprava nudi besplatnu aplikaciju **MIKROeRAČUN**: zaprimanje od 2026., izdavanje od 2027.
- Tijela javnog sektora bez PDV-a zaprimaju od 2026., a izdaju od 2027.

Važna praktična posljedica: **PDF poslan e-mailom nije eRačun.** Porezna uprava to izričito navodi u svojim pitanjima i odgovorima. E-mail više nije kanal za razmjenu računa među obveznicima.

### Fiskalizacija eRačuna

Fiskalizacija eRačuna je zaseban, automatiziran postupak: propisani podaci iz izdanog ili zaprimljenog eRačuna šalju se Poreznoj upravi kao fiskalizacijska poruka. Na samom eRačunu ne vidi se nikakva oznaka Porezne.

- Izdavatelj fiskalizira u trenutku izdavanja (kod samoizdavanja u roku od pet radnih dana).
- Primatelj fiskalizira najkasnije **pet radnih dana od primitka**.
- Fiskalizaciju može provoditi obveznik sam ili ovlašteni posrednik, ali odgovornost ostaje na obvezniku.

### Informacijski posrednik i AMS

eRačuni se razmjenjuju preko **pristupnih točaka**, u pravilu informacijskog posrednika s kojim tvrtka ima ugovor. Adrese za zaprimanje objavljuju se u **AMS-u** (adresaru metapodatkovnih servisa), a obveznik svog posrednika potvrđuje u **FiskAplikaciji** (pristup kroz ePorezna). Rok za potvrdu bio je 31. 12. 2025.

Nekoliko korisnih pravila:

- Posrednik mora imati potvrdu o sukladnosti Porezne uprave i nalaziti se na njezinom službenom popisu; među uvjetima je i važeći ISO certifikat.
- Tvrtka može koristiti više posrednika, svaki uz zaseban identifikator.
- Potvrda novog posrednika na istom identifikatoru automatski poništava prethodnu.
- Tehnički je moguće biti i sam svoja pristupna točka, ali to je realno samo za veće sustave.

### eIzvještavanje

Uz razmjenu i fiskalizaciju postoji i izvještajni sustav:

- **izdavatelj** prijavljuje **naplatu** izdanih eRačuna,
- **primatelj** prijavljuje **odbijanje** eRačuna,
- izdavatelj prijavljuje i račune koje nije mogao izdati kao eRačun jer primatelj nema adresu u AMS-u.

Rok je **do 20. dana u mjesecu za prethodni mjesec**, a podaci se šalju web-servisom, preko posrednika ili kroz FiskAplikaciju.

### Čuvanje i kazne

Izdane i zaprimljene eRačune treba čuvati **u izvornom obliku šest godina** od isteka godine u kojoj su izdani (čl. 35. Zakona). Neizdavanje, nezaprimanje ili nefiskaliziranje eRačuna prekršaj je za koji je pravnoj osobi propisana novčana kazna od **3.980 do 66.360 eura** (čl. 71.).

## IT provjera: deset točaka

### 1. Knjigovodstveni program ili ERP

- Radi li integracija s posrednikom automatski (slanje, preuzimanje, statusi) ili netko ručno prebacuje datoteke?
- Jesu li artikli i usluge povezani s **KPD klasifikacijom**, kako Porezna uprava traži?
- Je li instalirana zadnja verzija programa? Porezna uprava tijekom 2026. dopunjavala je upute, a dobavljači softvera prate te izmjene.

### 2. Posrednik i ugovor

- Tko je potvrđen u FiskAplikaciji i odgovara li to stvarnom ugovoru?
- Što ugovor kaže o dostupnosti usluge, podršci i izlasku (izvoz svih računa u XML-u pri promjeni posrednika)?
- Informacijski posrednici za eRačun prema Zakonu o kibernetičkoj sigurnosti spadaju u ključne subjekte bez obzira na veličinu, pa je razumno pitati ih kako ispunjavaju te obveze.

### 3. Certifikati

- Za fiskalizaciju se mogu koristiti certifikati pružatelja usluga povjerenja; obveznik može i ovlastiti drugu osobu (npr. posrednika) da potpisuje poruke svojim certifikatom. Znajte koji je slučaj kod vas.
- FINA-in aplikacijski certifikat za fiskalizaciju vrijedi **pet godina**. FINA šalje podsjetnike 45, 30 i 15 dana prije isteka, ali oni često završe u sandučiću osobe koja više ne radi u tvrtki. Upišite datum isteka u zajednički kalendar.
- Provjerite gdje je certifikat instaliran (na kojem poslužitelju ili računalu), tko zna lozinku i postoji li sigurna kopija.

### 4. Pristupi i ovlaštenja

- Tko ima pristup FiskAplikaciji i portalu posrednika? Računi bivših zaposlenika ili vanjskih suradnika moraju biti ugašeni.
- Koristite osobne račune, ne dijeljene, i uključite višefaktorsku autentikaciju gdje posrednik to podržava.

### 5. Arhiva i sigurnosna kopija

- Gdje se čuva **izvorni XML** eRačuna: samo kod posrednika, u bazi knjigovodstvenog programa ili i lokalno? Obveza čuvanja je vaša, ne posrednikova.
- Uključite tu lokaciju u backup i povremeno napravite **test vraćanja** jednog računa.
- Šest godina je dulje od prosječnog životnog vijeka poslužitelja i ugovora s posrednikom. Planirajte kako ćete arhivu prenijeti.

### 6. E-mail sandučići

- Stari sandučić za račune (npr. racuni@...) i dalje prima PDF-ove od dobavljača iz inozemstva i onih koji nisu obveznici. Odredite tko ga prati.
- Pravila čuvanja (retention) u Microsoft 365 ili na drugom sustavu uskladite s rokovima čuvanja dokumentacije.

### 7. Praćenje statusa i rokova

- Tko svaki dan provjerava odbijene i neisporučene eRačune te greške fiskalizacije?
- Tko prati rok eIzvještavanja do 20. u mjesecu?

### 8. Plan za ispad

- Što radite ako posrednik ili internetska veza nisu dostupni? Imajte zapisan postupak i kontakt podrške.

### 9. Knjigovodstveni servisi

- Ako vodite knjige za više klijenata, vodite evidenciju: klijent, posrednik, tko je ovlašten, datum isteka certifikata.

### 10. Dokumentacija

- Jedna stranica s gore navedenim podacima štedi sate kad se nešto pokvari ili kad se promijeni osoba koja je to vodila.

## Zaključak

Zakonske obveze uglavnom su riješene kroz posrednika i knjigovodstveni program, ali certifikati, pristupi, arhiva i backup ostaju na tvrtki. Ako želite da netko prođe ovaj popis s vama, IDEJA IT može napraviti kratak pregled vašeg sustava za eRačune i predložiti konkretne popravke.

## Izvori

- [Zakon o fiskalizaciji, NN 89/25 (Narodne novine)](https://narodne-novine.nn.hr/clanci/sluzbeni/2025_06_89_1233.html)
- [Porezna uprava: Izdavanje i primanje eRačuna i fiskalizacija eRačuna](https://porezna-uprava.gov.hr/hr/izdavanje-i-primanje-eracuna-i-fiskalizacija-eracuna/8047)
- [Porezna uprava: Fiskalizacija eRačuna](https://porezna-uprava.gov.hr/hr/fiskalizacija-eracuna-azurirano-17-4-2026/8049)
- [Porezna uprava: Pristupna točka](https://porezna-uprava.gov.hr/hr/pristupna-tocka/8053)
- [Porezna uprava: Izvještajni sustav](https://porezna-uprava.gov.hr/hr/izvjestajni-sustav/8051)
- [Porezna uprava: Pitanja i odgovori vezani uz Zakon o fiskalizaciji (PDF)](https://porezna-uprava.gov.hr/UserDocsImages/Fiskalizacija/Fiskalizacija_eRacun/Pitanja%20i%20odgovori%20vezani%20uz%20Zakon%20o%20fiskalizaciji.pdf)
- [Porezna uprava: Fiskalizacija 2.0, pripremne radnje](https://porezna-uprava.gov.hr/hr/fiskalizacija-2-0-letak/8083)
- [Porezna uprava: Potvrda informacijskog posrednika za zaprimanje eRačuna](https://porezna.gov.hr/fiskalizacija/bezgotovinski-racuni/bezgotovinski-racuni-novosti/o/potvrda-informacijskog-posrednika)
- [Porezna uprava: Istek certifikata za fiskalizaciju nakon 5 godina](https://porezna.gov.hr/fiskalizacija/gotovinski-racuni/gotovinski-racuni-novosti/o/istek-certifikata-za-fiskalizaciju-nakon-5-godina)
- [FINA: Poslovni aplikacijski certifikat za fiskalizaciju](https://www.fina.hr/poslovni-digitalni-certifikati/poslovni-certifikati-za-fiskalizaciju)
- [Zakon o kibernetičkoj sigurnosti, NN 14/24 (Narodne novine)](https://narodne-novine.nn.hr/clanci/sluzbeni/2024_02_14_254.html)
