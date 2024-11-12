Husk NoA - Tavle her 
tinyurl.com/ma-183-oppdatertlenke

Studenten skal kunne

- bruke delbrøksoppspalting
- løse alle integrasjonsproblemer av rasjonale funksjoner der nevneren er en lineær funksjon
- løse noen integrasjonsproblemer av mer generelle rasjonale funksjoner 

## Rasjonale funksjoner og delbrøksoppspalting

> [!warning] Problem
> Kan vi integrere rasjonale funksjoner? Det vil si. Kan vi finne
> $$
> \int \frac{P(x)}{Q(x)}dx,
> $$
> det $P$ og $Q$ er polynomer.

Polyas fire steg for å løse problemer

1. Forstå problemet
2. Lag en plan
3. Gjennomføre planen
4. Se tilbake. Kunne vi gjort det bedre?

Vi skal se på punkt 2 nå. Altså: Lage en plan

Typiske strategier

- Gjett og sjekk
- Lag en tabell
- Se etter mønster
- **Se på spesialtilfeller**
- Bruke symmetri
- Sette opp en likning
- Lage en skisse
- **Løse et annet, enklere problem**
- Jobbe baklengs

> [!question] Spørsmål 
> Hva kan være naturlige spesialtilfeller vi kan se på?  Hva er de enkleste spesialtilfellene vi kommer på?

Spesialtilfeller sortert etter vanskelighetsgrad/kompleksitet

- $P(x)=Q(x)$ --> $\frac{P(x)}{Q(x)}=1$.

$$
\int 1 dx = x+C
$$
- $\frac{1}{x}$
$$
\int \frac{1}{x}dx = \ln|x|+C.
$$

- $\frac{1}{x+1}$

$$
\int \frac{1}{x+1}dx = \ln|x+1|+C
$$

- $\frac{x}{x+1}$

**Hva er** 
$$
\int \frac{x}{x+1}dx?
$$
![[Files/shapes at 24-11-12 21.24.00.svg]]


> [!tip] Resultat (divisjonsalgoritmen)
> Hvis $P(x)$ er av grad større enn $Q(x)$, kan vi utføre polynomdivisjon og få
> $\frac{P(x)}{Q(x)}=A(x)+\frac{R(x)}{Q(x)}$, der $A$ er et polynom og $R$ er et polynom med lavere grad enn $Q$.  
>d
>Det betyr at vi kun trenger å se på rasjonale funksjoner der $P$ har lavere grad enn $Q$. 


- $\frac{1}{ax+b}$

> [!question] Spørsmål 
> Hva er 
> $$
> \int \frac{1}{ax+b}dx?
> $$
> Hint, gjett lurt, eller bruk substitusjon. 

![[Files/shapes at 24-11-12 14.56.44.svg]]






$$
\int \frac{1}{x^2}dx = \int x^{-2}dx = -x^{-1} + C.
$$





> [!question] Spørsmål 
> Hva er
> $$
> \int \frac{1}{x^2+1}dx?
> $$

$$
\int \frac{1}{x^2+1}dx = \tan^{-1}(x)+C
$$

> [!question] Spørsmål 
> Hva er
> $$
> \int \frac{1}{x^2-1}dx = \int \frac{1}{(x-1)(x+1)}dx?
> $$


![[Files/shapes at 24-11-12 15.39.06.svg]]


> [!tip] Rasjonale funksjoner med kvadratiske nevnere
> Vi har at
> $$
> \begin{aligned} 
> & \int \frac{x}{x^2\pm a^2} dx = \frac{1}{2}\ln|x^2\pm a^2|+C, \quad \text{løses med substitusjon} \\
> & \int \frac{1}{x^2+a^2} dx = \frac{1}{a}\tan^{-1}\left( \frac{x}{a} \right)+C.
> \end{aligned} 
> $$ 

![[Files/shapes at 24-11-12 21.25.12.svg]]
Resten ble gjort på tavla:

## Ekstra eksempler

> [!abstract] Eksempel 3
> Finn $\int \frac{x+4}{x^2-5x+6}$

> [!note] Argument 
> Vi faktoriserer nevneren først. Bruk av [[Kapittel 0 - Elementære funksjoner/defogteo/💡abc-formelen|abc-formelen]] gir at $x^2-5x+6 = (x-3)(x-2)$. Dermed får vi
> $$
> \begin{aligned} 
> \int \frac{x+4}{x^2-5x+6}= \int \frac{x+4}{(x-3)(x-2)}.
> \end{aligned} 
> $$
> Målet nå er å skrive $\frac{x+4}{(x-3)(x-2)} = \frac{A}{x-3}+\frac{B}{x-2}$ ved å finne hva $A$ og $B$ må være. 
> Sett nå på felles brøkstrek og sammenlign
> $$
> \begin{aligned} 
> \frac{x+4}{(x-3)(x-2)} & = \frac{A(x-2)}{(x-3)(x-2)}+\frac{B(x-3)}{(x-3)(x-2)} \\ &= \frac{Ax+Bx-2A-3B}{(x-3)(x-2)} \\ & \frac{(A+B)x+(-2A-3B)}{(x-3)(x-2)}
> \end{aligned} 
> $$
> Vi vet at $(A+B)x+(-2A-3B) = x+4$ så $A+B = 1$ og $-2A-3B = 4$. Første likning sier at $A=1-B$, så $-2A-3B = -2(1-B)-3B =-2+2B-3B = -2-B$. 
> 
> Dermed må $-2-B = 4$ eller $B = -6$. 
> 
> Det gir igjen at $A = 1-(-6)= 7$. Nå kan vi sette inn igjen å få
> $$
> \begin{aligned} 
> \int \frac{x+4}{x^2-5x+6} & = \int \frac{x+4}{(x-3)(x-2)} \\ &= \int \frac{7}{x-3}+\frac{-6}{x-2}dx \\ & = 7\ln|x-3|-6\ln|x-2|+C.
> \end{aligned} 
> $$
> Finnes raskere metode. Krever noe forståelse, se boka!

> [!abstract] Eksempel 4
> Finn $\int \frac{x^3+2}{x^3-x}dx$

> [!note] Argument 
> [[Kapittel 0 - Elementære funksjoner/defogteo/💡divisjonsalgoritmen|Divisjonsalgoritmen]] forteller oss at vi kan redusere grad i teller. Det gjør vi slik
> $$
> \frac{x^3-x+x+2}{x^3-x} = \frac{\cancel{ x^3-x }}{\cancel{ x^3-x }}+ \frac{x+2}{x^3-x} = 1+\frac{x+2}{x^3-x}.
> $$
> Vi ser nå på 
> $$
> \frac{x+2}{x^3-x}=\frac{x+2}{x(x^2-1)}= \frac{x+2}{x(x-1)(x+1)}.
> $$
> Målet er nå å finne $A$, $B$ og $C$ slik at 
> $$
> \frac{x+2}{x(x-1)(x+1)} = \frac{A}{x}+ \frac{B}{x-1}+\frac{C}{x+1}.
> $$
> Får $A = -2$, $B = \frac{3}{2}$ og $C = \frac{1}{2}$. Da får vi
> $$
> \begin{aligned} 
> \int \frac{x^3-x+x+2}{x^3-x} dx & = \int 1 -2 \frac{1}{x}+\frac{3}{2} \frac{1}{x-1} + \frac{1}{2} \frac{1}{x+1} dx \\ &= x-2\ln|x|+\frac{3}{2}\ln|x-1|+\frac{1}{2}\ln|x+1|+C.
> \end{aligned} 
> $$



> [!abstract] Eksempel 5
> Finn $\int \frac{2+3x+x^2}{x(x^2+1)}dx$

> [!note] Argument 
> Vi ser at vi ikke kan faktorisere $x^2+1$ mer, men vi vet hva integralet til $\frac{1}{x^2+1}$ er ($\tan^{-1}(x)$). Målet blir derfor å skrive 
> $$
> \frac{x^2+3x+2}{x(x^2+1)} = \frac{A}{x}+\frac{Bx+C}{x^2+1}.
> $$
> Setter vi på felles nevner får vi 
> $$
> \frac{A(x^2+1)+Bx^2+Cx}{x^2+1} = \frac{x^2(A+B)+x\cdot C +A}{x(x^2+1)}.
> $$
> Det er tydelig at $C=3$, $A=2$ og at $A+B=1$ så $B=-1$. Vi kan derfor skrive
> $$
> \begin{aligned} 
> \int  \frac{x^2+3x+2}{x(x^2+1)} dx & = \int \frac{2}{x}+ \frac{-x+3}{x^2+1} dx \\ & = \int \frac{2}{x} - \frac{x}{x^2+1} +\frac{3}{x^2+1}  dx \\ &= 2\ln|x|-\frac{1}{2}\ln|x^2+1|+3\tan^{-1}(x)+C.
> \end{aligned} 
> $$


> [!abstract] Eksempel 6 (mer komplekst og sammensatt eksempel)
> Finn $\int \frac{1}{x^3+1}dx$

> [!note] Argument 
> Vi ser at $x=-1$ er en rot. Dermed kan vi skrive
> $$
> \begin{aligned} 
>  x^3+1=(x+1)(x^2+bx+c) & = x^3+bx^2+cx+x^2+bx+c \\ & = x^3+(b+1)x^2+(c+b)x+c.
> \end{aligned} 
> $$
> Det er tydelig at $b=-1$ og $c+b=0$ så $c=1$. Det betyr at $x^3+1 = (x+1)(x^2-x+1)$. Kunnskap fra komplekse tall gir oss at det ikke er flere reelle røtter.
> 
> Vi må nå finne $A$,$B$ og $C$ slik at
> $$
> \frac{1}{(x+1)(x^2-x+1)} = \frac{A}{x+1}+\frac{Bx+C}{x^2-x+1}.
> $$
> Ganger vi ut får vi
> $$
> \frac{A(x^2-x+1)+Bx(x+1)+C(x+1)}{(x+1)(x^2-x+1)}
> $$
> Når vi forenkler får vi 
> $$
> \frac{x^2(A+B)+x(-A+B+C)+(A+C)}{(x+1)(x^2-x+1)}.
> $$
> Ved å sammenligne får vi
> $$
> \begin{array}{lllll}
> A  & +B &    & = & 0 \\
> -A & +B & +C & = & 0 \\
> A  &    & +C & = & 1.
> \end{array}
> $$
> Ved å løse likningssettet får vi $A = \frac{1}{3}$, $B=-\frac{1}{3}$ og $C=\frac{2}{3}$.
> Dermed kan vi skrive
> $$
> \begin{aligned} 
> \int \frac{1}{x^3+1}dx & = \int \frac{1}{3} \frac{1}{x+1}+ \frac{\frac{-1}{3}x+\frac{2}{3}}{x^2-x+1} dx \\ &= \frac{1}{3}\ln|x+1|+\int \frac{\frac{-1}{3}x+\frac{2}{3}}{x^2-x+1} dx .
> \end{aligned} 
> $$
> Det gjenstår nå å se på siste integral. Vi ser at $(\ln|x^2-x+1|)'= \frac{2x-1}{x^2+x+1}$ Vi trikser derfor litt i telleren og skriver ting slik
> $$
> \int \frac{\frac{-1}{3}x+\frac{2}{3}}{x^2-x+1} dx = \int -\frac{1}{6} \frac{2x-4}{x^2-x+1} dx.
> $$
> Dette ligner nå på $(\ln|x^2-x+1|)'$, vi må bare splitte opp integralet. Det gir
> $$
>  \begin{aligned} 
>  \int -\frac{1}{6} \frac{2x-4}{x^2-x+1} dx & = -\frac{1}{6}\int \frac{2x-1-3}{x^2-x+1} dx \\ & = -\frac{1}{6}\int \frac{2x-1}{x^2-x+1}+\frac{3}{6} \frac{1}{x^2-x+1} dx \\ &= -\frac{1}{6}\ln|x^2-x+1|+\frac{3}{6}\int \frac{1}{x^2-x+1}dx.
>  \end{aligned} 
> $$
> Det er ikke helt opplagt hva vi skal gjøre nå, men vi vet at vi har kontroll på integraler, der integranden er på formen
> $$
> \frac{1}{x^2\pm a^2}.
> $$
> Med det i bakgrunnen bruker vi teknikken fullstendige kvadraters metode og får
> $$
> x^2-x+1 = x^2-x+\frac{1}{4}-\frac{1}{4}+1 = \left( x-\frac{1}{2} \right)^2+\frac{3}{4}.
> $$
> Det siste integralet kan derfor skrives som
> $$
> \int \frac{1}{x^2-x+1}dx = \int \frac{1}{\left( x-\frac{1}{2} \right)^2+ \left( \frac{\sqrt{3}}{2} \right)^2} dx.
> $$
> Substitusjonen $u = x-\frac{1}{2}$ får oss nå i mål (sjekk selv) og gir
> $$
> \int \frac{1}{\left( x-\frac{1}{2} \right)^2+ \left( \frac{\sqrt{3}}{2} \right)^2} dx = \frac{2}{\sqrt{3}}\tan^{-1}\left( 2\frac{x-\frac{1}{2}}{\sqrt{3}} \right) + C
> $$
> Nå gjenstår det bare å sette alt sammen og få
> $$
> \begin{aligned} 
> \int \frac{1}{x^3+1} dx & = \frac{1}{3}\ln|x+1|-\frac{1}{6}\ln(x^2-x+1)+ \frac{3}{6}\frac{2}{\sqrt{3}} \tan^{-1}\left( 2\frac{x-\frac{1}{2}}{\sqrt{3}} \right)+C \\ &= \frac{1}{3}\ln|x+1|-\frac{1}{6}\ln(x^2-x+1)+\frac{1}{\sqrt{3}} \tan^{-1}\left( \frac{2x-1}{\sqrt{3}} \right) +C.
> \end{aligned} 
> $$





































