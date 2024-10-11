---
draft: "true"
---
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


![[Kapittel 5 - integrasjon/defogteo/✍️ Sigmanotasjon|✍️ Sigmanotasjon]]

> [!abstract] Eksempel 
> Utvid 
> 1. $\sum_{i=1}^{7} (2i+3)$ 
> 2. $\sum_{i=1}^{n} (2i+3)$ 
> 3. $\sum_{i=1}^{n} i$ 


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
### 2 Velge høyde.

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

Merk nå at hvis funksjonen er negativ sier vi at arealet også er negativt. Bildet blir slik

![](Files/riemannsummdefn.svg)

der det blå er negative areal og røde er positive.
## Integrasjon

![[Kapittel 5 - integrasjon/defogteo/✍️ Øvre- og nedre Riemannsummer|✍️ Øvre- og nedre Riemannsummer]]



1.  $\int$ : integraltegnet.
2.  $a$ er nedre grensen  $b$ er øvre grensen.
3.  $f$ kalles  integrand, integrerer over $x$ når vi skriver $\int_{a }^{b }f(x) dx$. 
4. $dx$ er differensialen til $x$. Den erstatter $\Delta x$ i Riemannsummene. 

> [!warning] Merk
> Å endre $x$ med en annen variable endrer ingenting i det bestemte integralet. Med andre ord har vi
> $$\begin{aligned} \int_{a }^{b } f(x) dx = \int_{a }^{b } f(t)dt  \end{aligned}$$  

Kan se voldsomt ut: Bare tenk geometrisk! Merk også at vi må ha
$$
f(l_i)\Delta_{x_i} \leq \int_{x_{i-1}}^{x^i}f(x)dx \leq f(u_i)\Delta_{x_i}.
$$

### AFT

![[Kapittel 5 - integrasjon/defogteo/💡 Analysens fundamentalteorem|💡 Analysens fundamentalteorem]]



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

## Teknikker

Ser at for å kunne bruke del 2 av AFT må vi være gode til å gå baklengs i derivasjon. Klarer vi å gjenkjenne en antiderivert er alt uproblematisk. Men hva vis ikke? Jo, da bør vi utvikle teknikker, på samme måte som vi hadde teknikker for å derivere: produktregelen, kjerneregelen og så videre.


### Substitusjon

Vi begynner med kjerneregelen og prøver å gå baklengs. 

### Delvis integrasjon

Nå skal vi se på hvordan vi kan *gå baklengs* i produktregelen. 

### Delbrøksoppspaltning

