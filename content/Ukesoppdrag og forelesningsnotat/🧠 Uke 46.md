## 6.2

> [!abstract] 1
> Finn
> $$
> \int \frac{2}{2x-3}dx.
> $$
> 

> [!note]+ Løsning 
> Med litt erfaring kan vi se at $\ln|2x-3|$ bør være nær hva vi leter etter. Faktisk, når vi deriverer med [[Kapittel 2 - derivasjon/defogteo/💡 Kjerneregelen|kjerneregelen]] får vi $\frac{d}{dx} \ln|2x-3|= \frac{2}{2x-3}$. Vi har altså en antiderivert og vi er nå vi mål.
> 
> Alternativt må vi innse at vi bør bruke substitusjonen $2x-3$ for å komme i mål.


> [!abstract] 3
> Finn 
> $$
> \int \frac{x}{\pi x+2}dx.
> $$ 

> [!note]+ Løsning 
> Siden teller og nevner har lik grad, trikser vi (vi bruker i praksis [[Kapittel 0 - Elementære funksjoner/defogteo/💡divisjonsalgoritmen|divisjonsalgoritmen]]) og får
> $$
> \begin{aligned} 
> \frac{x}{\pi x+2} & = \frac{\frac{1}{\pi}(\pi x + 2 - 2)}{\pi x + 2} \\ & = \frac{1}{\pi} \frac{(\pi x + 2 - 2)}{\pi x + 2} \\ &= \frac{1}{\pi}\left( \frac{\pi x + 2}{\pi x + 2}- \frac{2}{\pi x + 2} \right) \\ &= \frac{1}{\pi }\left( 1 + \frac{2}{\pi x + 2} \right).  
> \end{aligned} 
> $$
> Vi ser altså at
> $$
> \begin{aligned} 
> \int \frac{x}{\pi x  + 2} dx =  \frac{1}{\pi}\int 1 + \frac{2}{\pi x + 2}dx.
> \end{aligned} 
> $$
> Vi kan se at $\ln|\pi x+ 2|$ bør være nær en antiderivert til siste ledd i integranden over. Deriverer vi får vi $\frac{\pi}{\pi x + 2}$. For at dette skal bli $\frac{2}{\pi x + 2}$ må vi skalere med $\frac{2}{\pi}$. Det vil si at $\frac{2}{\pi}\ln|\pi x + 2|$ er en antiderivert til siste ledd i integranden. Totalt sett får vi
> $$
> \int \frac{x}{\pi x + 2} dx = \frac{1}{\pi} \int 1 + \frac{2}{\pi x + 2}dx = \frac{1}{\pi}\left( x+\frac{2}{\pi}\ln|\pi x + 2| \right).
> $$


> [!abstract] 4
> Finn
> $$
> \int \frac{x^2}{x-4}dx.
> $$
> 


> [!note]+ Løsning 
> Siden teller har grad større enn nevner kan vi bruke [[Kapittel 0 - Elementære funksjoner/defogteo/💡divisjonsalgoritmen|divisjonsalgoritmen]] og polynomdivisjon til å skrive
> $$
> \begin{aligned} 
> \frac{x^2}{x-4} &= \frac{x^2-4x +4x}{x-4} = \frac{x(x-4)+4x}{x-4} \\ &= x + 4 \frac{x}{x-4}  \\ &= x + 4\frac{x-4 + 4}{x-4} \\ &= x + 4 \left( \frac{x-4}{x-4} + \frac{4}{x-4} \right) \\ &= x + 4 + 4 \frac{4}{x-4} .
> \end{aligned} 
> $$
> Skriver vi om nå kan vi altså integrere slik
> $$
> \begin{aligned} 
> \int \frac{x^2}{x-4}dx = \int x + 4 + 16 \frac{1}{x-4}dx = \frac{x^2}{2}+4x+16\ln|x-4|+C
> \end{aligned} 
> $$


> [!abstract] 5
> Finn
> $$
> \int \frac{1}{x^2-9}dx.
> $$
> 


> [!note]+ Løsning 
> Vi prøver å skrive $x^2-9$ faktorisert. Vi ser at dette enkelt kan gjøres som $(x-3)(x+3)$ ved hjelp av konjugatsetningen. Målet er nå å bruke delbrøksoppspalting. Det vil si at vi ønsker å finne $A$ og $B$ slik at
> $$
> \begin{aligned} 
> \frac{1}{(x+3)(x-3)} & = \frac{A}{x-3} + \frac{B}{x+3} \\ &= \frac{A(x+3)+B(x-3)}{(x-3)(x+3)} \\ &= \frac{Ax+3A+Bx-3B}{(x-3)(x+3)} \\ &= \frac{x(A+B)+(3A-3B)}{(x-3)(x+3)}.
> \end{aligned}
> $$
> Ved å sammenligne ser vi at 
> $$
> \begin{array}{lllll}
> A  & +B    & = & 0 \\
> 3A & -3B & = & 1.
> \end{array}
> $$
> Det vil si at hvis vi løser likningssystemet, så må $6A = 1$ eller $A = \frac{1}{6}$. Videre gir første likning at $B = -\frac{1}{6}$.
> Vi kan dermed skrive
> $$
> \begin{aligned} 
> \int \frac{1}{x^2-9}dx  &= \int \frac{1}{6}\cdot \frac{1}{x-3}-\frac{1}{6}\cdot \frac{1}{x+3} dx \\ &= \frac{1}{6}(\ln|x-3|-\ln|x+3|)+C.
> \end{aligned} 
> $$
 
> [!abstract] 6
> Finn 
> $$
> \int \frac{1}{5-x^2}dx.
> $$ 

> [!note]+ Løsning 
> Vi kjenner igjen nevneren som en differanse mellom kvadrater: $5 - x^2 = (\sqrt{5} - x)(\sqrt{5} + x)$. Dette tillater oss å bruke delbrøksoppspalting. Vi antar at
> $$
> \frac{1}{5-x^2} = \frac{A}{\sqrt{5} - x} + \frac{B}{\sqrt{5} + x},
> $$
> og samler brøkene på høyre side:
> $$
> \frac{A}{\sqrt{5} - x} + \frac{B}{\sqrt{5} + x} = \frac{A(\sqrt{5}+x) + B(\sqrt{5}-x)}{(\sqrt{5}-x)(\sqrt{5}+x)}.
> $$
> Dette gir
> $$
> A(\sqrt{5}+x) + B(\sqrt{5}-x) = 1.
> $$
> Ved å samle leddene får vi
> $$
> A\sqrt{5} + Ax + B\sqrt{5} - Bx = 1.
> $$
> Vi kan dele opp i to likninger basert på koeffisientene til $x$ og konstantleddet:
> $$
> A - B = 0, \quad A\sqrt{5} + B\sqrt{5} = 1.
> $$
> Fra $A - B = 0$ får vi $B = A$. Setter vi dette inn i den andre likningen, får vi:
> $$
> A\sqrt{5} + A\sqrt{5} = 1 \implies A = \frac{1}{2\sqrt{5}} =  B.
> $$
> Dermed kan vi skrive
> $$
> \int \frac{1}{5-x^2}dx = \frac{1}{2\sqrt{5}}\int \frac{1}{\sqrt{5}-x}+ \frac{1}{\sqrt{5}+x}dx.
> $$
> Hver av disse integralene gir naturlige logaritmer:
> $$
> \frac{1}{2\sqrt{5}}\ln|\sqrt{5}-x| - \frac{1}{2\sqrt{5}}\ln|\sqrt{5}+x| + C.
> $$
> 
> $$
> {\color{grey} \text{ som kan forenkles til }\frac{1}{2\sqrt{5}}\ln\left|\frac{\sqrt{5}-x}{\sqrt{5}+x}\right| + C. }
> $$


> [!abstract] 9
> Finn 
> $$
> \int \frac{x^2}{x^2+x-2}dx.
> $$ 

> [!note]+ Løsning 
> Vi skriver om for integranden slik
> $$
> \begin{aligned} 
> \frac{x^2}{x^2+x-2}  &= \frac{x^2+x-2 - x +2}{x^2+x-2} \\ &= 1 + \frac{-x+2}{x^2+x-2}.
> \end{aligned} 
> $$
> Dermed blir integralet til
> $$
> \int \frac{x^2}{x^2+x-2} dx = \int 1 + \frac{-x+2}{x^2+x-2}dx.
> $$
> Vi fokuserer dermed på siste ledd, $\frac{-x+2}{x^2+x-2}$ og prøver å bruke delbrøksoppspalting. Det vil si at vi må først faktorisere nevneren til lineære faktorer. Da får vi at $x^2+x-2 = (x+2)(x-1)$. Vi leter etter $A$ og $B$ slik at
> $$
> \frac{-x+2}{x^2+x-2} = \frac{A}{x+2}+ \frac{B}{x-1}.
> $$
> Ganger vi gjennom med $x+2$ og setter inn $x=-2$ får vi at 
> $$
> \frac{-(-2)+2}{-2-1} = \frac{4}{-3}=  A.
> $$
> 
> Ganger vi gjennom med $x-1$ og setter inn $x=1$ får vi at 
> $$
> \frac{-1+2}{1+2} = \frac{1}{3}= B.
> $$
> 
> Totalt sett kan vi altså skrive
> $$
> \begin{aligned} 
> \int \frac{x^2}{x^2+x-2}dx & = \int 1 -\frac{4}{3}\cdot\frac{1}{x+2}+\frac{1}{3}\cdot\frac{1}{x-1}dx \\ &= x-\frac{4}{3}\ln|x+2|+\frac{1}{3}\ln|x-1|+\C
> \end{aligned} 
> $$


> [!abstract] 11
> Finn
> $$
> \int \frac{x-2}{x^2+x}dx.
> $$ 

> [!note]+ Løsning 
> Vi faktoriserer nevneren som $x^2 + x = x(x+1)$. Dermed kan brøken skrives som
> $$
> \frac{x-2}{x^2+x} = \frac{A}{x} + \frac{B}{x+1}.
> $$
> Vi finner $A$ og $B$ ved å løse:
> $$
> \frac{A(x+1) + Bx}{x(x+1)} = \frac{x-2}{x(x+1)}.
> $$
> Dette gir:
> $$
> A(x+1) + Bx = x-2.
> $$
> Sammenligning av ledd gir:
> $$
> A + B = 1, \quad A = -2.
> $$
> Dermed er $B = 3$, og brøken kan skrives som:
> $$
> \frac{x-2}{x^2+x} = \frac{-2}{x} + \frac{3}{x+1}.
> $$
> Integralene blir:
> $$
> \int \frac{x-2}{x^2+x}dx = -2\int \frac{1}{x}dx + 3\int \frac{1}{x+1}dx.
> $$
> Resultatet er:
> $$
> -2\ln|x| + 3\ln|x+1| + C.
> $$



> [!abstract] 12
> Finn
> $$
> \int \frac{1}{x^3+9x}dx.
> $$ 

> [!note]+ Løsning 
> Vi faktoriserer nevneren som $x^3 + 9x = x(x^2 + 9)$. Dermed blir brøken:
> $$
> \begin{aligned} 
> \frac{1}{x^3+9x} & = \frac{A}{x} + \frac{Bx+C}{x^2+9} \\ &= \frac{Ax^2+9A+Bx^2+Cx}{x(x^2+9)} \\ &= \frac{x^2(A+B)+Cx+(9A)}{x(x^2+9)}.
> \end{aligned} 
> $$
> Vi ser altså at $A+B = 0$, $C = 0$, og at $A = \frac{1}{9}$. Dermed må $B = - \frac{1}{9}$. Setter vi inn får vi
> $$
> \begin{aligned} 
> \int \frac{1}{x^3+9x}dx & = \frac{1}{9}\int \frac{1}{x}-\frac{x}{x^2+9}dx \\ &= \frac{1}{9}\left( \ln|x|+\frac{1}{2}\ln|x^2+9| \right)+ D
> \end{aligned} 
> $$
> Merk at vi bruker $D$ og ikke $C$ siden $C$ allerede er definert og løst til å være 0.