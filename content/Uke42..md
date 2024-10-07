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

![[Files/desmos-graph (11) 2.svg|600]]

> [!question] Spørsmål 
> Hvordan finner vi strekningen vi har kjørt?

Jo summer sammen

Hva hvis det faktisk så slik ut?

![[Files/desmos-graph (12).svg|650]]

Jo, ideen er slik
https://ma-183.github.io/MA-183/files/riemann2

Trenger en måte å summere vilkårlig antall ledd.
## Summasjonsnotasjon


![[Kapittel 5 - integrasjon/defogteo/Def Sigmanotasjon|Def Sigmanotasjon]]

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

![[Files/shapes at 24-10-03 12.41.01.svg]]
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
![[Files/shapes at 24-10-03 12.47.46 1.svg]]

Merk. Dersom vi summerer alle de *små* rektanglene må vi få noe som er mindre enn det ekte arealet, og noe større dersom vi tar de *store* rektanglene.

Merk nå at hvis funksjonen er negativ sier vi at arealet også er negativt. Bildet blir slik

![](Files/shapes%20at%2024-08-05%2008.41.29.svg)

der det blå er negative areal og røde er positive.
## Integrasjon

![[Kapittel 5 - integrasjon/defogteo/Def Øvre- og nedre Riemannsummer|Def Øvre- og nedre Riemannsummer]]



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

![[Kapittel 5 - integrasjon/defogteo/Teo Analysens fundamentalteorem|Teo Analysens fundamentalteorem]]
## Teknikker

### Substitusjon


### Delvis integrasjon


### Delbrøksoppspaltning

