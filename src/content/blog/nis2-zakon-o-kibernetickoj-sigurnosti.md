---
title: "NIS2 i Zakon o kibernetičkoj sigurnosti: vrijedi li i za vašu tvrtku?"
description: "Tko je obveznik hrvatskog Zakona o kibernetičkoj sigurnosti (NIS2), kako funkcionira kategorizacija, koji su rokovi za incidente i što mogu napraviti mali dobavljači."
pubDate: 2026-10-01
tags: ["NIS2", "kibernetička sigurnost", "Zakon o kibernetičkoj sigurnosti", "ISO 27001", "sigurnost"]
readingTime: 6
---

Direktiva NIS2 (EU 2022/2555) u Hrvatsku je prenesena **Zakonom o kibernetičkoj sigurnosti** (NN 14/24), objavljenim 7. veljače 2024. i na snazi od 15. veljače 2024. Detaljne mjere i rokove razrađuje **Uredba o kibernetičkoj sigurnosti** (NN 135/24). Česta pitanja koja dobivamo su „odnosi li se to na nas?“ i „što moramo napraviti?“. Odgovor je kraći nego što se čini, ali ima jednu važnu zamku: čak i kad niste obveznik, vaši kupci možda jesu.

## Tko je obveznik

Prema CERT.hr-u, Zakon obuhvaća 19 sektora podijeljenih u dva priloga. Među njima su:

- **Prilog I. (sektori visoke kritičnosti):** energetika, promet, bankarstvo, infrastruktura financijskog tržišta, zdravstvo, voda za ljudsku potrošnju, otpadne vode, digitalna infrastruktura, upravljanje uslugama IKT-a (B2B), javni sektor, svemir.
- **Prilog II. (drugi kritični sektori):** poštanske i kurirske usluge, gospodarenje otpadom, kemikalije, hrana, proizvodnja, pružatelji digitalnih usluga, istraživanje i sustav obrazovanja.

Nacionalni centar za kibernetičku sigurnost (NCSC-HR) predlaže samoprovjeru u tri pitanja:

1. Poslujete li u sektoru ili podsektoru iz Priloga I. ili II.?
2. Jeste li neka od vrsta subjekata navedenih u tim prilozima?
3. Jeste li **srednji ili veliki** subjekt prema EU kriterijima?

Prema NCSC-u, **srednji** subjekt zapošljava 50 do 249 osoba te ima godišnji promet od 10 do 50 milijuna eura ili ukupnu bilancu od 10 do 43 milijuna eura. **Veliki** subjekt ima više od 250 zaposlenih te promet veći od 50 milijuna eura ili bilancu veću od 43 milijuna eura.

Postoje i iznimke od kriterija veličine. Neki subjekti kategoriziraju se **bez obzira na veličinu**, na primjer kvalificirani pružatelji usluga povjerenja i informacijski posrednici u razmjeni eRačuna. Za MSP-ove je najvažnija sljedeća iznimka: prema NCSC-u, **pružatelji upravljanih IKT usluga i upravljanih sigurnosnih usluga** koji rade za kategorizirane subjekte i sami moraju biti kategorizirani, također bez obzira na veličinu.

## Kako funkcionira kategorizacija

Tvrtke se ne proglašavaju obveznicima same. Kategorizaciju provode **nadležna tijela**, a subjekt dobiva **službenu obavijest** o tome je li **ključni** ili **važni** subjekt i koja razina mjera za njega vrijedi (osnovna, srednja ili napredna). NCSC je u ožujku 2025. objavio da će prva kategorizacija u svim sektorima biti gotova do sredine travnja 2025.

Obveze iz Zakona počinju teći tek od primitka te obavijesti. NCSC izričito navodi da građani i nekategorizirane pravne osobe nisu obveznici Zakona. Nekategorizirani subjekti ipak mogu dobrovoljno provesti samoprocjenu i prijavljivati incidente.

## Ključne obveze kategoriziranih subjekata

### Rokovi nakon obavijesti o kategorizaciji

Prema NCSC-u:

- **15 dana** za dostavu podataka o subjektu nadležnom tijelu,
- **30 dana** za početak prijavljivanja značajnih incidenata (platforma PiXi),
- **godinu dana** za provedbu mjera upravljanja rizicima propisane razine,
- **dvije godine** za nadogradnju mjera kroz vlastito upravljanje rizicima,
- **tri godine** za prvu samoprocjenu ili reviziju.

Nakon toga ključni subjekti prolaze reviziju, a važni subjekti provode samoprocjenu, i to najmanje svake dvije godine.

### Mjere upravljanja rizicima

Uredba u Prilogu II. propisuje 13 skupina mjera. Obuhvaćaju, među ostalim, upravljanje imovinom, upravljanje rizicima, sigurnost lanca opskrbe, fizičku sigurnost, kontrolu pristupa i autentikaciju, kriptografiju, detekciju i odgovor na incidente te kontinuitet poslovanja. Za provedbu mjera odgovorni su **članovi upravljačkih tijela** (čl. 29. Zakona). Oni moraju pohađati odgovarajuća osposobljavanja i omogućiti ih zaposlenicima.

### Prijava značajnih incidenata

Uredba propisuje sljedeći redoslijed prijave nadležnom CSIRT-u:

- **rano upozorenje**: najkasnije **24 sata** od saznanja za značajan incident,
- **početna obavijest**: najkasnije **72 sata** od saznanja,
- **završno izvješće**: najkasnije **30 dana** od početne obavijesti,
- za incidente koji traju dulje od 60 dana, **izvješće o napretku** svakih 30 dana.

Incident je značajan ako zadovoljava kriterije iz Uredbe, na primjer ozbiljan prekid usluge ili financijski gubitak iznad propisanog praga.

### Kazne

Direktiva NIS2 propisuje najviše novčane kazne od **10 milijuna eura ili 2 %** ukupnog godišnjeg prometa za ključne subjekte te **7 milijuna eura ili 1,4 %** za važne subjekte. Iste gornje granice, uz propisane najniže iznose, navode se i za hrvatski zakon.

## Mali dobavljači: niste obveznik, ali ste u lancu

Kategorizirani subjekti moraju u ugovorima s dobavljačima urediti sigurnost lanca opskrbe (mjera 8. Uredbe). NCSC navodi da ugovori trebaju pokriti prijavu incidenata na infrastrukturi vanjskog pružatelja, odgovarajuće sigurnosne mjere i jasnu raspodjelu odgovornosti.

U praksi to znači da će računovodstveni servis, programerska tvrtka ili dobavljač opreme koji radi za bolnicu, energetsku tvrtku ili općinu dobiti upitnik, dodatak ugovoru ili zahtjev za dokazima. Ako nudite **upravljane IT usluge** kategoriziranom subjektu, možda i sami podliježete kategorizaciji.

## Prvi koraci: praktičan popis

Ovo vrijedi i ako niste obveznik:

- **Popis imovine:** računala, poslužitelji, mrežna oprema, cloud servisi, podaci i tko je za što odgovoran. Bez popisa ne možete procijeniti rizik.
- **Višefaktorska autentikacija (MFA)** na e-mailu, VPN-u, udaljenom pristupu i administratorskim računima. Isključite zastarjele protokole prijave.
- **Backup s testom vraćanja:** barem jedna kopija izvan dosega napadača (offline ili nepromjenjiva). Povrat testirajte redovito, a ne tek kad zatreba.
- **Zakrpe:** redoviti ciklus nadogradnje operativnih sustava, aplikacija, firmwarea mrežne opreme i VPN uređaja. Uređaji kojima je istekla podrška idu na popis za zamjenu.
- **Logovi:** centralizirano prikupljanje prijava i sigurnosnih događaja (npr. Microsoft 365, domena, vatrozid) s dovoljno dugim razdobljem čuvanja da se incident može istražiti.
- **Plan odgovora na incident:** tko odlučuje, koga se zove, kako se izolira sustav i, za obveznike, tko šalje rano upozorenje u roku od 24 sata.
- **Dobavljači:** popis ključnih dobavljača i njihovih pristupa vašim sustavima.
- **Edukacija:** kratka redovita obuka zaposlenika i uprave.

## ISO 27001 pomaže, ali nije isto što i usklađenost

NCSC izričito navodi da Zakon **ne zahtijeva certifikaciju po ISO/IEC 27001:2022**. Tvrtka koja već ima uspostavljen ISMS ima velik dio procesa i dokumentacije spreman: procjenu rizika, politike, upravljanje dobavljačima i incidentima. Usklađenost se ipak mjeri prema **mjerama iz Priloga II. Uredbe** i propisanoj razini, a prijava incidenata ima vlastite rokove i kanale. ISO certifikat je dobra osnova, ali treba ga mapirati na zahtjeve Uredbe i nadopuniti ono što nedostaje.

Ako niste sigurni jeste li obveznik ili vam je kupac poslao sigurnosni upitnik, IDEJA IT može pomoći s pregledom trenutnog stanja i planom prvih koraka.

## Izvori

- [Zakon o kibernetičkoj sigurnosti, NN 14/24 (Narodne novine)](https://narodne-novine.nn.hr/clanci/sluzbeni/2024_02_14_254.html)
- [Uredba o kibernetičkoj sigurnosti, NN 135/24 (Narodne novine)](https://narodne-novine.nn.hr/clanci/sluzbeni/2024_11_135_2217.html)
- [CERT.hr: Objavljen je Zakon o kibernetičkoj sigurnosti (NN 14/2024)](https://www.cert.hr/objavljen-je-zakon-o-kibernetickoj-sigurnosti-nn-14-2024/)
- [NCSC-HR: Zakon o kibernetičkoj sigurnosti](https://ncsc.hr/hr/zakon-o-kibernetickoj-sigurnosti)
- [NCSC-HR: Zakon o kibernetičkoj sigurnosti (česta pitanja)](https://ncsc.hr/hr/zakon-o-kibernetickoj-sigurnosti-182)
- [NCSC-HR: Pitanja kategoriziranih subjekata](https://ncsc.hr/hr/pitanja-kategoriziranih-subjekata)
- [NCSC-HR: Započeo proces kategorizacije subjekata](https://ncsc.hr/hr/zapoceo-proces-kategorizacije-subjekata-obveznika-zakona-o-kibernetickoj-sigurnosti)
- [NCSC-HR: Smjernice za upravljanje kibernetičkim sigurnosnim rizicima (PDF)](https://ncsc.hr/UserDocsImages/ostalo/SmjerniceUpravljanjeKiberneti%C4%8DkimSigurnosnimRizicima.pdf?vel=2221640)
- [Direktiva (EU) 2022/2555 (NIS2), EUR-Lex](https://eur-lex.europa.eu/legal-content/HR/TXT/HTML/?uri=CELEX:32022L2555)
- [Lider: Što poduzetnicima donosi novi Zakon o kibernetičkoj sigurnosti](https://lidermedia.hr/biznis-i-politika/od-jucer-na-snazi-sto-poduzetnicima-donosi-novi-zakon-o-kibernetickoj-sigurnosti-155643/)
