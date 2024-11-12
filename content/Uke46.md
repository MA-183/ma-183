---
draft: "true"
---



### Delbrøksoppspalting

> [!warning] Problem
> Kan vi integrere rasjonale funksjoner. Det er
> Kan vi finne
> $$
> \int \frac{P(x)}{Q(x)}dx
> $$ 
> der $P$ og $Q$ er polynomer.

Polyas fire steg for å løse problemer

1. Forstå problemet
2. Lag en plan
3. Gjennomfør planen
4. Se tilbake. Kunne du gjort det bedre?

Forhåpentligvis forstår vi problemet (pkt 1.)
Vi skal nå se på punkt 2. Hva skal vi gjøre her?


Typiske strategier er

- Gjett og sjekk
- Lag en tabell
- Se etter mønster
- **Se på spesialtilfeller**
- Bruk symmetri
- Sett opp en likning
- Lag en skisse
- **Løs en annet, enklere problem**
- Jobb baklengs

> [!question] Spørsmål 
> Hva kan være naturlige spesialtilfeller vi kan se på? Hva er de enkleste spesialtilfellene vi kommer på?

Sortert etter vanskelighet/kompleksitet:

$\frac{1}{x}$,
$\frac{1}{x+1}$
$\frac{1}{2x+1}$
$\frac{1}{ax}$
$\frac{1}{ax+b}$
$\frac{x}{2x+1}$
$\frac{ax+b}{cx+d}$
$\frac{1}{x^2+1}$
$\frac{1}{x^2-1} = \frac{1}{(x+1)(x-1)}$

Vi kjenner allerede til noen integraler med kvadratiske nevnere

> [!tip] Rasjonale funksjoner med kvadratiske nevnere
> Vi har at
> $$
> \begin{aligned} 
> & \int \frac{x}{x^2\pm a^2} dx = \frac{1}{2}\ln|x^2\pm a^2|+C, \quad \text{løses med substitusjon} \\
> & \int \frac{1}{x^2+a^2} dx = \frac{1}{a}\tan^{-1}\left( \frac{x}{a} \right)+C.
> \end{aligned} 
> $$ 

> [!question] Spørsmål 
> Kan vi løse
> $$
> \int \frac{1}{x^2-1}dx?
> $$

 Merk at $x^2-1 = (x-1)(x+1)$. Tenk igjennom!


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


> [!abstract] Eksempel 6
> Finn $\int \frac{1}{x^3+1}dx$

> [!note] Argument 
> Vi ser at $x=-1$ er en rot. Dermed kan vi skrive
> $$
> x^3+1=(x+1)(x^2+bx+c) = x^3+bx^2+cx+x^2+bx+c = x^3+(b+1)x^2+(c+b)x+c.
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
> Vi har nå at 