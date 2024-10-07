---
title: 📄 Høyere ordens deriverte
---

Hvis den deriverte $y' = f'(x)$ av en funksjon $f(x)$ også er deriverbar i $x$ kan vi beregne dens deriverte. Vi kaller denne for den andrederiverte av $f(x)$, og skriver $y'' = f''(x)$. Her finnes det også flere skrivemåter

> [!info] Notasjon 
> Vi har følgende måter å skrive den andrederiverte til en funksjon $f$.
> $y'' = f''(x) = \frac{d^2y}{dx^2} = \frac{d}{dx}\frac{d}{dx}f(x) = \frac{d^2}{dx^2}f(x)$

På samme måte kan vi snakke om tredje-, fjerde-,..., n-te deriverte.

> [!info] Notasjon
> For den n-te deriverte til en funksjon $f$ bruker vi følgende skrivemåte
> $y^{(n)} = f^{(n)}(x) = \frac{d^{(n)}}{dx^{(n)}}$ og så videre..

> [!question] Spørsmål 
> Hva er mønsteret med $f(x) =\sin(x)$ sine høyere ordens deriverte?

> [!note]- Løsning 
> 
> Vi vet allerede at: 
> $$
>  f'(x) =\frac{d}{dx} \sin(x) = \cos(x) 
>  $$ 
>  Hvis vi nå deriverer $\cos(x)$ igjen, får vi: $$ f''(x) =\frac{d^2}{dx^2} \sin(x) = \frac{d}{dx} \cos(x) = -\sin(x) $$ Her ser vi at den andre deriverte av $\sin(x)$ er $-\sin(x)$. Dette mønsteret fortsetter: 
>  $$
>   f^{(3)}(x)=\frac{d^3}{dx^3} \sin(x) = \frac{d}{dx} \left(-\sin(x)\right) = -\cos(x) 
>   $$ 
>   og 
>   
>  $$
>  f^{(4)}(x) = \frac{d^4}{dx^4} \sin(x) = \frac{d}{dx} \left(-\cos(x)\right) = \sin(x) 
>  $$
>  *Merk* at vi etter fire derivasjoner ender tilbake med den opprinnelige funksjonen $\sin(x)$. Dette mønsteret gjør at vi kan si at de høyere ordens derivasjonene av sinus og cosinus vil fortsette å veksle mellom $\sin(x)$, $\cos(x)$, $-\sin(x)$, og $-\cos(x)$. 
>  
>  For eksempel er den fjerde deriverte av $\sin(x)$ bare $\sin(x)$ igjen, som vi så tidligere. Dermed kan vi også uttrykke den $n$-te deriverte av $\sin(x)$ ved hjelp av et mønster: 
> 
> - Hvis $n$ kan deles på 4, er den $n$-te deriverte $\sin(x)$.
> - Hvis $n$ har 1 i rest etter divisjon med 4, er den $n$-te deriverte $\cos(x)$. 
> - Hvis $n$ har 2 i rest etter divisjon med 4, er den $n$-te deriverte $-\sin(x)$. 
> - Hvis $n$ har 3 i rest etter divisjon med 4, er den $n$-te deriverte $-\cos(x)$. 
> 
> Dette viser oss hvordan trigonometriske funksjoner oppfører seg når vi deriverer dem flere ganger.

Husk at vi tenker geometrisk på den deriverte som stigning til tangenten gjennom et punkt $(x,f(x))$. Det er da naturlig å tenke at derivasjon kan hjelpe å beskrive [[Kapittel 2 - derivasjon/93 Stigende og synkende funksjoner|om funksjoner stiger eller synker.]]