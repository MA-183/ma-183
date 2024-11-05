---
draft: "true"
---
## Læringsmål

Studenten skal kunne

- definere den _antideriverte_ 
- definere det _ubestemte integralet_ 
- finne det ubestemte integralet til kjente funksjoner
- kjenne til og bruke elementære integraler 
- gjengi og bruke teknikken _substitusjon_ 
- finne arealet begrenset av to kurver
- gjengi og bruke teknikken _delvis integrasjon_ 

## Hva sa AFT?

To ting:
1. Hvordan finne derivert til en arealfunksjon.
2. Hvordan finne areal ved hjelp av antideriverte.


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

> [!abstract] Spørsmål 
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

Vi skal prøve å reversere i kjerneregelen

Husk at

![[Kapittel 2 - derivasjon/defogteo/💡 Kjerneregelen|💡 Kjerneregelen]]


Kan vi, når jeg sier at kjerneregelen er brukt, gjette antideriverte

> [!question] Spørsmål 
> Hva er
> 1. $\int 6 x^5\cdot e^{x^6} dx$
> 2. $\int 2x \cdot \cos(x^2)dx$
> 3. $\int 2x \cdot \frac{1}{x^2+1}dx$.


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

> [!question] Spørsmål 
> Hva med
> $$
> \int \frac{x}{(x^2 + 1)^2} \, dx.
> $$

Ser at $x^2+1$ sin deriverte er omtrent $x$. Kan tenke oss at den antideriverte er omtrent $\frac{1}{x^2+1}$ siden $\frac{1}{x}$ sin deriverte er  $-\frac{1}{x^2}$.

Hvis vi tester og lar $u=x^2+1$ får vi 
$$
\frac{d}{dx} \frac{1}{x^2+1} = u' \cdot \frac{-1}{u^2} = 2x\cdot \frac{-1}{x^2+1}.
$$
Deler vi på $-2$ får vi integranden så 

$$
\int \frac{x}{(x^2+1)^2}dx = \frac{1}{-2} \frac{1}{x^2+1} + C.
$$

Her var det et veldig erfarent gjett og det skjer mye på en gang. Hva hvis vi ikke ser alt?

Vi ser at $x^2+1$ sin deriverte er $2x$. Så vi setter ${\color{#5ca6f4} u = x^2+1 }$ og $\frac{du}{dx}= 2x$. Hvis vi bruker differensialform kan vi skrive $du = 2xdx$ eller ${\color{#f46f22} \frac{1}{2x}du = dx }$. 

Det gir
$$
\int \frac{x}{({\color{#5ca6f4} x^2+1 })^2}{\color{#f46f22} dx } = \int \frac{\cancel{ x }}{u^2}{\color{#f46f22}  \frac{1}{2\cancel{ x }}du } =\frac{1}{2}\int \frac{1}{u^2}du = \frac{1}{2}\left( -\frac{1}{u} \right)+C.
$$
Setter inn for $u$ igjen får vi
$\frac{1}{2}\left( -\frac{1}{u} \right)+C = \frac{1}{-2} \frac{1}{x^2+1} +C$


![[Kapittel 6 - Integrasjonsteknikker/defogteo/💡 Substitusjon av ubestemte integral|💡 Substitusjon av ubestemte integral]]


> [!abstract] Eksempel 
> Hva kan være en naturlig substitusjon for
> $$
> \int \frac{\sin(3\ln(x))}{x}dx
> $$
> og
> $$
> \int e^x \sqrt{1+e^x}dx
> $$
> og
> $$
> \int \frac{1}{\sqrt{e^{2x}-1}}dx
> $$

Vi lar ${\color{#5ca6f4} u = \ln(x) }$, som også gir ${\color{#f46f22} du = \frac{1}{x}dx }$
$$
\frac{\sin(3({\color{#5ca6f4} \ln(x) }))}{{\color{#f46f22} x }}
$$
Vi kan nå forenkle og få
$$
\begin{aligned} 
\int \sin(3{\color{#5ca6f4} u })\cdot {\color{#f46f22} \frac{1}{x}dx } = \int \sin(3u)du = -\frac{1}{3}\cos(3u)+C = - \frac{1}{3}\cos(3\ln(x))
\end{aligned} 
$$



Neste

La ${\color{#5ca6f4} u = e^x }$ og se at ${\color{#f46f22} du = e^x dx = u dx }$ som gir
$$
\begin{aligned} 
\int{\color{#f46f22}  u }\sqrt{1+{\color{#5ca6f4} u }}{\color{#f46f22} dx  } = \int \sqrt{1+u}\  du = \frac{2}{3} (1+u)^{3/2}+C = \frac{2}{3}(1+e^x)^{3/2}+C.
\end{aligned} 
$$

Siste.

La ${\color{#5ca6f4} u = e^x }$ og se at ${\color{#f46f22} du = e^x dx = u dx }$. Vi skriver ${\color{#f46f22} dx = \frac{1}{u}du }$ som gir
$$
\int \frac{1}{\sqrt{({\color{#5ca6f4}  e^x } )^2-1}}{\color{#f46f22} dx } = \int \frac{1}{\sqrt{{\color{#5ca6f4} u }^2-1}} {\color{#f46f22} \frac{1}{u}du }
$$
Ser ikke helt ut til å hjelpe. Enten gir vi opp, ellers prøver vi litt til.
Vi kan se at 
$$
\frac{1}{\sqrt{u^2-1}}=\frac{1}{\sqrt{u^2\left( 1-\frac{1}{u^2} \right)}} = \frac{1}{u\sqrt{1-\left( \frac{1}{u} \right)^2}}
$$
Det gir
$$
\int \frac{1}{\sqrt{{\color{#5ca6f4} u }^2-1}} {\color{#f46f22} \frac{1}{u}du } = \int \frac{1}{\sqrt{1-\left( \frac{1}{u} \right)^2}} \cdot \left( \frac{1}{u} \right)^2 du.
$$
Det virker naturlig å kanskje gjøre en ny substitusjon ${\color{#3cc15c} w = \frac{1}{u} }$, altså at $\frac{dw}{du}= -\frac{1}{u^2}$. Stokker vi litt om får vi ${\color{#e796f5} dw = -\frac{1}{u^2}du }$

Som gir

$$
\begin{aligned} 
\int \frac{1}{\sqrt{1-\left( {\color{#3cc15c} \frac{1}{u}  }\right)^2}} \cdot {\color{#e796f5} \left( \frac{1}{u} \right)^2 du }& = \int \frac{1}{\sqrt{1-{\color{#3cc15c} w }^2}}{\color{#e796f5} {dw} }\\ & = \sin^{-1}(w)+C \\ &= \sin^{-1}\left( \frac{1}{u} \right)+C  \\ &= \sin^{-1}\left( \frac{1}{e^x} \right)+C.
\end{aligned} 
$$




### Delvis integrasjon


Nå skal vi se på hvordan vi kan *gå baklengs* i produktregelen. 

### Delbrøksoppspaltning

