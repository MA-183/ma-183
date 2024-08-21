---
draft: "true"
---
Husk NOA

## Trigonometri

Trigonon (trekanter) og metric (måling), er opphavet til trigonometri. Trig handler om trekanter. Men! Det finnes også et sirkelperspektiv. *Begge* er veldig viktig å ha kontroll på. 

Vi starter med trekanter. 

Merk at rettvinkla trekanter dukker opp når vi et ute etter langer (ofte pga Pytagoras).

På grunn av formlikhet er forholdene mellom sidene i trekantene konstante. 

![undefined](Files/shapes%20at%2024-08-14%2013.47.48.svg)

Fra formlikhet så er

$$
\frac{\text{motstående} }{\text{hypotenus} }, \frac{\text{hosliggende} }{\text{hypotenus} }, \frac{\text{motstående} }{\text{hosliggende} }   
$$
like i både den lille og den store trekanten. 

Tenk deg at vi har en rettvinkla trekant som på figuren

![undefined](Files/shapes%20at%2024-08-14%2013.53.57.svg)
> [!question] Spørsmål 
>  Hvilken trekant er det her? Altså, hvilke vinkler har trekanten?
>  

![undefined](Files/shapes%20at%2024-08-14%2013.57.00.svg)
En likesida trekant, der alle trekantene er $60^\circ$. Det må vel bety at den opprinnelige trekanten var 30-60-90 trekant. 

Gitt et forhold mellom to sidelengder i en *rettvinkla* trekant, så er vinklene avgjort. Det går også motsatt vei. Dersom vi vet *vinklene* i e rettvinkla trekant, så vil forholdet mellom sidene i trekanten være avgjort (uavhengig av størrelsen på trekanten, pga formlikhet). 


Forholdene i rettvinkla trekanter er derfor en funksjon av vinkelen $t$ i trekanten.

1. $\sin (t) =\frac{\text{motstående} }{\text{hypotenus} }$
2. $\cos (t) = \frac{\text{hosliggende} }{\text{hypotenus} }$
3. $\tan (t) = \frac{\text{motstående} }{\text{hosliggende} }$.

![300](Files/shapes%20at%2024-08-14%2013.47.48.svg)

Vi har nå definert $\cos (t)$, $\sin (t)$ og $\tan (t)$ for vinkler $t$ mellom $0$ og $90$ grader. (Vi skriver noen ganger det her som $t\in(0^\circ,90^\circ)$)

Definisjonen over er fra trekantperspektivet. Målet nå er å definere trig funksjonene med sirkelperspektivet. 

Først, skal vi definere vinkler med det vi kaller radianer.

I kalkulus skal vi bruke radianer framover.

> [!info] Radianer
> Vi definerer radianer som $\frac{\text{buelengden av en sirkel} }{\text{radius til sirkelen} }.$
> Ser vi på enhetssirkelen så er radiusen $1$ og dermed kan vi tenke på radianer som en buelengde i en sirkel med radius $1$.  


Vi kan visualisere $t$ radianer på enhetsirkelen som en buelengde på sirkelen med lenge $t$ slik som i figuren.

![undefined](Files/shapes%20at%2024-08-14%2014.09.51.svg)

Spesielt viktig og merke seg, er at $2\pi$ radianer da er en hel rotasjon (omkrets av sirkel er $2\pi r = 2\pi$ når $r = 1$).

Hvorfor bruke radianer? Spoiler: $\sin' (t) )\cos (t)$, bare når vi måler i radianer). 

Må kunne veksle mellom radianer og grader.

Det gjør vi enkelt fordi vi vet at

$360^\circ = 2\pi \text{ radianer}$, så med andre ord er

$1^\circ = \frac{2\pi}{360}$ radianer, og
$1\text{ radian} =\frac{360}{2\pi}^\circ$.

> [!question] Spørsmål 
> 1. Hva er $60^\circ$ i radianer?
> 2. Hva er $135^\circ$ i radianer?
> 3. Hva er $\frac{3\pi}{2}$ radianer i grader?


> [!abstract]  1
> 

$1^\circ = \frac{2\pi}{360}$ radianer. Gang gjennom med 60. Da får vi jo at $60^\circ = \frac{120\pi}{360} \text{ radianer} =\frac{\pi}{3}$.

> [!abstract]  2
> 

$1^\circ\cdot135 = 135^\circ =\frac{2\pi}{360}\cdot135 =\frac{270\pi }{360 } = \frac{3\pi}{4}$ radianer.

> [!abstract]  3
> 

Vet at $1$ radian er $\frac{360^\circ}{2\pi}$ . Gang gjennom med $\frac{3\pi}{2}$, som gir $\frac{360^\circ}{2\cancel{ \pi }} \cdot \frac{3\cancel{ \pi }}{2} = \frac{360}{4}\cdot3 =270$ grader. 

La oss se på trig fra sirkelperspektivet..

Det første vi gjør er å plassere trekantene våre i enhetssirkelen. 

![undefined](Files/shapes%20at%2024-08-14%2014.27.17.svg)
Siden $\sin (t) = \frac{\text{motstående}}{\text{hypotenus}}$ og hypotenusen er lik $1$ i enhetssirkelen, så er er $\sin(t) = \text{motstående}$ når vi plasserer trekanten inn i enhetssirkelen. Med andre ord er $\sin (t)$ faktisk høyden til punktet der trekanten skjærer med enhetssirkelen. 


> [!tip] Cosinus og sinus
> For et reelt tall $t$ vil buelengden fra $x-$aksen definere et punkt $P_t$ på sirkelen.
>  ![](Files/shapes%20at%2024-08-07%2013.36.49.svg)
>  Ved hjelp av $P_t$ definerer vi $\cos (t)$ og $\sin (t)$ som $x-$ og $y-$koordinatene til punktet $P_t$.
>  1. $\cos (t) =x-$koordinaten til $P_t$,
>  2. $\sin (t) = y-$koordinaten til $P_t$. 



Vi vet for eksempel at $\cos(30^\circ) =\cos\left( \frac{\pi}{6} \right) = \frac{\sqrt{3}}{2}$.

> [!question] Spørsmål 
> Hva er $\cos (t)$ og $\sin (t)$ når $t$ er
> 1. $\frac{\pi}{4}$ (altså 45 grader).
> 2. $\frac{\pi}{3}$
> 3. $\frac{\pi}{2}$
> 4. $\pi$.
> Det kan være lurt å tegne alle vinklene i enhetssirkelen!


