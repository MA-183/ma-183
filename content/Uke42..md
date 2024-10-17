---
draft: "true"
---

Matematisk kveld på onsdag!
[https://forms.office.com/e/93y8MFmYQA](https://forms.office.com/e/93y8MFmYQA)

## Læringsmål

Studenten skal kunne
-  $\Sigma$-*notasjon* for summer 
-  summasjonsformler
- Riemannsummer
- det bestemte integralet
- middelverditeoremet for integraler
- gjennomsnittsverdien til en funksjon
- stykkvis kontinuerlige funksjoner
-  _analysens fundamentalteorem_ 

## Hvorfor finne areal

Da vi introduserte grenser så vi på

https://ma-183.github.io/MA-183/files/sirkelarealarkimedes

Men så gikk vi over til derivasjon

Nytt eksempel på areal: meter per minutt

![[Files/distkontinuerligkonstantfart.svg|600]]

> [!question] Spørsmål 
> Hvordan finner vi strekningen vi har kjørt?

Jo summer sammen

Hva hvis det faktisk så slik ut?

![[Files/kontinuerligfatrt.svg|650]]

Jo, ideen er slik
https://ma-183.github.io/MA-183/files/riemann2

Trenger en måte å summere vilkårlig antall ledd.
## Summasjonsnotasjon

EKSEMPEL FØRST

$$
(2+3\cdot1)+ (2+3\cdot2) + (2+3\cdot3) + (2+3\cdot 4) + \ldots + (2+3\cdot15)
$$


Ser at vi kan skrive det slik 

$$
\sum_{i=1}^{15}(2+3\cdot i)
$$

![[Kapittel 5 - integrasjon/defogteo/✍️ Sigmanotasjon|✍️ Sigmanotasjon]]

Typisk kan det se slik ut: 

FOR HÅND:
$$
\sum_{i=1}^{60}3i+1 = (3\cdot1+1) + (3\cdot2+1)+(3\cdot3+1)+\ldots+(3\cdot60+1)
$$


> [!abstract] Eksempel 
> Utvid 
> 1. $\sum_{i=1}^{7} (2i+3)$ 
> 2. $\sum_{i=1}^{n} (2i+3)$ 
> 3. $\sum_{i=1}^{n} i$ 

Hvorfor trenger vi? Kanskje ikke sååå nyttig i Kalk, men tenk deg at jeg skriver
$$
2+4+8+\ldots + 32
$$
Hva er ...? Her må vi tolke selv, men
$$
\sum_{i=1}^{5}2^i = 2+4+8+16+32
$$
det er også

$$
\sum_{i = 1}^{6} i(i-1)+2 = 2+ 4+ 8+ 14+ 22+32
$$


Så sigmanotasjonen er kortere og inneholder mer info.




![[Kapittel 5 - integrasjon/defogteo/💡 Summasjonsformler|💡 Summasjonsformler]]

Ta 1., 2., og 4. 
## Ideen - Riemannsummer

1. Dele inn intervallet i *partisjoner*
2. Velge *høyde* til rektanglene
3. *Summere alt*

### 1 Partisjonere

La $P$ være en endelig mengde med punkter sortert i stigende rekkefølge fra $a$ til $b$. Det vil si
$$
P = \{x_0, x_1, x_2, \ldots, x_{n-1}, x_n\},
$$
der $a = x_0 < x_1 < x_2<\ldots< x_{n-1}<x_n = b.$

![[Files/partisjon.svg]]
Delintervallene er $[x_{i-1}, x_i]$.
### 2. Velge høyde.

Kont funk. $f$ har min og maks på alle delintervaller.

Dvs: for hver $i$ finnes tall $l_i$ og $u_i$ slik at
$$
f(l_i) \leq f(x) \leq f(u_i)  \quad\quad \text{når } x_{i-1}< x < x_i.
$$
Hvis $f(x) \geq 0$ på $[a,b]$, da kan vi tenke på $f(l_i)\Delta x_i$ og $f(u_i)\Delta x_i$ som arealet av rektanglene som ligger med grunnlinjen på $[x_{i-1}, x_i]$ på $x-$aksen og med høyde på det laveste og høyeste punktet på grafen til $f$ på det intervallet (se figur). Hvis vi kaller området avgrenset av $x-$aksen og grafen til $f$ mellom $x_{i-1}$ og $x_i$ for $A_i$ så er det klart at 
$$
f(l_i)\Delta x_i \leq A_i \leq f(u_i)\Delta x_i.
$$
![[Files/ovrenedreriemannsum.svg]]

Merk. Dersom vi summerer alle de *små* rektanglene må vi få noe som er mindre enn det ekte arealet, og noe større dersom vi tar de *store* rektanglene.

## 3. Sette sammen/summere



Merk nå at hvis funksjonen er negativ sier vi at arealet også er negativt. Bildet blir slik

![](Files/riemannsummdefn.svg)

der det blå er negative areal og røde er positive.
## Integrasjon

![[Kapittel 5 - integrasjon/defogteo/✍️ Øvre- og nedre Riemannsummer|✍️ Øvre- og nedre Riemannsummer]]

Generelle Riemannsummer på side 305. 

Merk nå at hvis funksjonen er negativ sier vi at arealet også er negativt. Bildet blir slik

![](Files/riemannsummdefn.svg)

der det blå er negative areal og røde er positive.

![[Kapittel 5 - integrasjon/defogteo/✍️ Det bestemte integral|✍️ Det bestemte integral]]

Finnes eksempler på funksjoner som ikke er integrerbare. Se boka.

1.  $\int$ : integraltegnet, ligner på S som i sum. $\Sigma$ er hakkete, endelig sum, $\int$ glatt -> grensen av en sum.
2.  $a$ er nedre grensen  $b$ er øvre grensen.
3.  $f$ kalles  integrand, integrerer over $x$ når vi skriver $\int_{a }^{b }f(x) dx$. 
4. $dx$ er differensialen til $x$. Den erstatter $\Delta x$ i Riemannsummene. 

> [!warning] Merk
> Å endre $x$ med en annen variable endrer ingenting i det bestemte integralet. Med andre ord har vi
> $$\begin{aligned} \int_{a }^{b } f(x) dx = \int_{a }^{b } f(t)dt  \end{aligned}$$  

Kan se voldsomt ut: Bare tenk geometrisk! 

> [!tip] Resultat
> Hvis $f$ er kont, så er $f$ integrerbar.  
>

Merk 
$$
\int_{a}^{a}f(x) dx = 0
$$
og
$$
\int_{a}^{b}f(x) dx = - \int_{b}^{a}f(x)dx.
$$


### AFT




![[Kapittel 5 - integrasjon/defogteo/💡 Analysens fundamentalteorem|💡 Analysens fundamentalteorem]]

Argument tar vi etter noen eksempler!!!! HUSK DETTE




> [!warning] Oppgave 
> Bruk AFT del 2 til å finne beregne integralene 
> 
> 1. $\int_{0}^{\pi}\cos(x)dx$.
> 2. $\int_{1}^{e} \frac{1}{t}dt$.
> 3. $\int_{1}^{5}(x^3 + 1)dx$
> 4. $\int_{0}^{\pi} \frac{1}{\sqrt{x}}dx$.


> [!note] Argument 
> 1. Vi vet at når vi deriverer $\sin(x)$ får vi $\cos(x)$. Det betyr at
> $$
> \int_{0}^{\pi}\cos(x)dx = \sin(x)\bigg|_0^\pi = \sin(\pi)-\sin(0)=0-0 =0.
> $$
> 2. Dersom vi husker definisjonen av [[Kapittel 3 - transendentale funksjoner/defogteo/✍️ Den naturlige logaritme|den naturlige logaritme]], er dette bare definisjonen. Derfor får vi også
> $$
> \int_{1}^{e} \frac{1}{t}dt = \ln(e) = 1.
> $$
> 3. Her kan vi bruke at $\frac{d}{dx}\frac{x^4}{4} = x^3$ og $\frac{d}{dx} x =1$. Dermed har vi en antiderivert og vi får
> $$
> \begin{aligned} 
> \int_{1}^{5}(x^3+1)dx & = \left( \frac{x^4}{4}+x \right)\bigg|_1^5 \\ & =  \frac{5^4}{4}+5-\left( \frac{1}{4}+1 \right) \\ & = \frac{625+20-1-4}{4} = 160.
> \end{aligned} 
> $$
> 4. Her må vi finne en funksjon $f(x)$ slik at $f'(x) = \frac{1}{\sqrt{x}}$. Vi vet at $x^{\frac{1}{2}}$ sin deriverte er $\frac{1}{2}x^{-1/2}=\frac{1}{2} \frac{1}{\sqrt{x}}$. Funksjonen $x^{1/2}$ sin deriverte er halvparten av det vi vil. Derfor må $f(x) = 2\sqrt{x}$. Derfor får vi
> $$
> \int_{-\pi}^{\pi} \frac{1}{\sqrt{x}}dx = 2\sqrt{x}\bigg|_0^\pi = 2\sqrt{\pi}.
> $$



> [!warning] Oppgave 
> Bruk AFT del 1 til å finne $\frac{dy}{dx}$ når
> 
> 1. $y = \int_{a}^{x}(t^2+3)dt$.
> 2. $y = \int_{x}^{5}3t\cos(t)dt$.
> 3. $y=\int_{1}^{x^2}\sin(t)dt$
> 4. $y = \int_{1+3x^2}^{4} \frac{1}{1+e^t}dt$.

> [!note] Argument 
> 
> 1. Her ser vi at $f(t) = (t^2+3)$. AFT sier da at 
> $$
> \frac{dy}{dx}= \frac{d}{dx} \int_{a}^{x}f(t)dt = f(x) = x^2+3.
> $$
> 
> 2. Her ser vi at $x$ er den nedre grensen i integralet. Vi snur retning og får
> $$
> \begin{aligned} 
> \frac{dy}{dx}= \frac{d}{dx} \int_{x}^{a}3t\cos(t)dt = -\int_{a}^{x}3t\cos(t)dt = -3x\cos(x).
> \end{aligned} 
> $$
> 3. Vi ser nå at den øvre grensen i integralet er $x^2$ og ikke $x$. Vi har altså at $F(x^2) = \int_{a}^{x^2}\sin(t)dt$. Det er derfor naturlig å gjøre substitusjonen ${\color{#f46f22} x^2 = u }$ og få $F(u) = \int_{a}^{u}\sin(t)dt$. Nå ser vi at vi kun trenger å bruke kjerneregelen. Siden ${\color{#e796f5} F'({\color{#f46f22} u }) = \sin({\color{#f46f22} u }) }$ fra AFT og ${\color{#3cc15c} \frac{du}{dx} = 2x }$  får vi
> $$
> \frac{d}{dx}F(u)={\color{#e796f5} F'({\color{#f46f22} u }) }\cdot {\color{#3cc15c} u'(x) } = \sin(u) \cdot 2x = \sin(x^2) 2x
> $$
> 4. Nå ser vi at vi har utfordringene som i 2. og 3. Vi snur integrasjonsretning og gjør substitusjon ${\color{#f46f22} u= 1+3x^2 }$, som gir ${\color{#3cc15c} u'(x) = 6x }$. Skriver vi $y ={ F(u) = -\int_{a}^{u}f(t)dt }$ får vi nå at ${\color{#e796f5} F'(u) = \frac{1}{1+e^u} }$
> $$
> \frac{dy}{dx}= {\color{#e796f5} F'({\color{#f46f22} u }) }\cdot {\color{#3cc15c} u'(x) }  = \frac{1}{1+e^{1+3x^2}}\cdot6x.
> $$

BEVIS AFT!!!


![[Kapittel 5 - integrasjon/defogteo/💡 Analysens fundamentalteorem|💡 Analysens fundamentalteorem]]




NÅR FUNGERER AFT IKKE?! NÅR MAN HAR DISKONTINUITET

> [!abstract] Eksempel 
> Se på 
> $$
> \int_{-1}^{1}\frac{1}{x}\, dx 
> $$
> Bruker vi AFT her så får vi 
> $$
> \int_{-1}^{1} \frac{1}{x}dx = \ln|x|\bigg|_{-1}^1 = 0-0.
> $$
> Men ser vi på 
> $$
> \int_{h}^{1} \frac{1}{x} dx = \ln(1)-\ln(h)= \ln\left( \frac{1}{h} \right),
> $$
> altså arealet mellom h og 1. Vi ser at når $h$ går mot 0 går $\frac{1}{h} \longrightarrow  \infty$ og derfor går $\ln\left( \frac{1}{h} \right) t\longrightarrow \infty$. Så arealet er uendelig på høyre side og negativt uendelig på venstre side. 
> Det betyr også at ser vi på Riemansummene kan vi aldri klare å få kontroll!!



Hvordan finne areal mellom to kurver? Intuitivt med tegning!


Når $f$ er større enn $g$ får vi
$$
A = \int_{a}^{b}f(x)-g(x)dx
$$
Når de skifter fortegn:
$A = \int_{a}^{b}|g(x)-f(x)|dx$
I praksis løser vi ofte slik
1. Finn skjæringspunkter. 
2. Avgjør hvor $f$ er størst og hvor $g$ er størst.
3. Split integralet i bitene som man fant over.

> [!abstract] Eksempel 
> Hva er arealet mellom grafene til $x^5-x^3$ og $x^3+x$ på intervallet $[-1,1]$? 


## Teknikker

Ser at for å kunne bruke del 2 av AFT må vi være gode til å gå baklengs i derivasjon. Klarer vi å gjenkjenne en antiderivert er alt uproblematisk. Men hva vis ikke? Jo, da bør vi utvikle teknikker, på samme måte som vi hadde teknikker for å derivere: produktregelen, kjerneregelen og så videre.



> [!warning] Problem
> - Hvordan kan vi bruke derivasjonsteorien til å hjelpe oss med integrasjon? 

Gitt $f$, gir AFT at vi leter etter dens *antideriverte*. Med andre ord, finnes det en funksjon $F$ slik at $F'(x) = f(x)$ på et gitt område? Dette spørsmålet er så viktig at vi lager en definisjon av *antideriverte*.

![[Kapittel 5 - integrasjon/defogteo/✍️ Antiderivert|✍️ Antiderivert]]

> [!abstract] Eksempel  
> Finn en antiderivert til funksjonen $f(x) = 2x$.  
>
> Vi vet at hvis $F'(x) = f(x)$, så må vi finne en funksjon $F(x)$ slik at når vi deriverer $F(x)$, får vi $2x$.  
> En løsning er $F(x) = x^2$, siden $F'(x) = 2x$.


Side 152 finnes elementære integraler: Her er noen:

![[Kapittel 5 - integrasjon/defogteo/💡 Elementære integraler|💡 Elementære integraler]]

### Hvor mange antideriverte finnes?

Et naturlig spørsmål er hvor mange forskjellige antideriverte funksjoner som finnes for en gitt funksjon $f$. Svaret er overraskende enkelt. Siden differansen mellom to antideriverte har derivert lik 0, må differansen mellom dem være en [[Kapittel 2 - derivasjon/defogteo/💡 Konstante funksjoner|konstant funksjon]]. Dette betyr at antideriverte er entydig bestemt opp til en konstant.

![[Kapittel 5 - integrasjon/defogteo/💡 Antideriverte funksjoner|💡 Antideriverte funksjoner]]

### Ubestemte integraler

Siden vi nå forstår hva en antiderivert er, kan vi bruke dette til å systematisere integrasjon. 

![[Kapittel 5 - integrasjon/defogteo/✍️ Det ubestemte integralet|✍️ Det ubestemte integralet]]

Vi kan nå finne flere ubestemte integraler bare ved å systematisere det vi har lært til nå. Dette gir oss en del elementære integraler.

Er ikke alltid så lett å bare "se" antideriverte.

### Substitusjon

> [!abstract] Eksempel 
> Se på 
> $$
> \int_{}^{}2x\cdot \cos(x^2)dx
> $$
> Klarer du å gjette en antiderivert? Hint: Kjerneregelen har vært involvert!

${\color{#f46f22} 2x}$ som faktor til $\cos(x^2)$ -tyder på kjerneregel ${\color{#e796f5} u = x^2}$, 

Slik utfører vi substitusjonen:
- La ${\color{#e796f5} u = x^2}$, da er ${\color{#f46f22} u'(x) = 2x}$.
- Integralets form blir da
  $$
  \int \cos({\color{#e796f5} u}) \,{\color{#f46f22} u'(x)}dx,
  $$
  som er enklere å løse. Vi må altså bare finne en funksjon $F(u)$ slik at $F'(u) = \cos(u)$. Vi vet da at $F(u)=\sin(u)$. Det gir 
$$
\int \cos({\color{#e796f5} u}) \,{\color{#f46f22} u'(x)}dx = F(u)+C = \sin(u)+C.
$$
- Ved å tilbake-substituere ${\color{#e796f5} u = x^2}$, får vi den endelige løsningen:
  $$
  \sin(x^2) + C.
  $$

### Eksempel 2: Mer komplekst uttrykk med kjerneregelen

La oss nå betrakte integralet
$$
\int \frac{x}{(x^2 + 1)^2} \, dx.
$$
Her kan vi prøve substitusjonen ${\color{#e796f5} u = x^2 + 1}$, siden den deriverte av $x^2 + 1$ er ${\color{#f46f22} 2x}$, noe som også nesten er til stede som en faktor i integranden. Vi skal nå gjøre substitusjonen ved å bruke differensialform. Vi skal ikke gå inn på teorien bak dette, men det fungerer slik.

La ${\color{#e796f5} u = x^2 + 1}$, da er ${ \frac{du}{dx} = 2x}$, på differensialform skriver vi det slik  ${du = 2x \, dx}$ som også kan skrives som ${\color{#f46f22}\frac{1}{2}du =x \, dx}$.

Nå kan vi gjøre ren substitusjon ved å sette inn og få
  $$
 \int \frac{{\color{#f46f22} x }}{{\color{#e796f5} (x^2 + 1 })^2} \, {\color{#f46f22} dx  }= {\color{#f46f22}  \frac{1}{2} } \int \frac{1}{{\color{#e796f5} u^2}} \, {\color{#f46f22} du},
  $$
  som kan integreres som $-\frac{1}{2{\color{#e796f5} u}} + C$.

Ved å tilbake-substituere ${\color{#e796f5} u = x^2 + 1}$, får vi den endelige løsningen:
  $$
  -\frac{1}{2(x^2 + 1)} + C.
  $$

![[Kapittel 6 - Integrasjonsteknikker/defogteo/💡 Substitusjon av ubestemte integral|💡 Substitusjon av ubestemte integral]]


### Delvis integrasjon

Nå skal vi se på hvordan vi kan *gå baklengs* i produktregelen. 

### Delbrøksoppspaltning

