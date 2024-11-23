## 4.4


> [!abstract]-  13
> Avgjør om $f(x) = |x-1|$ har noen lokale eller globale ekstremalpunktet på $[-2,2]$.


> [!note]- Løsning
> Funksjonen $f(x) = |x-1|$ har et knekkpunkt ved $x = 1$, der den er kontinuerlig men ikke deriverbar. For å undersøke ekstreme verdier, sjekker vi endepunktene og knekkpunktet.
> 
> - $f(-2) = |(-2) - 1| = 3$
> - $f(1) = |1 - 1| = 0$
> - $f(2) = |2 - 1| = 1$
> 
> Globalt minimum skjer ved $x = 1$ med verdi $0$, og globalt maksimum skjer ved $x = -2$ med verdi $3$.



> [!abstract]- 19
> Gitt funksjonen $f(x) = x^3 -3x-2$.
> 
> 1. Avgjør og klassifiser alle ekstremalpunkter til funksjonen $f$.
> 2. Tegn grafen til $f$ ved hjelp av nullpunktene til funksjonen, samt informasjon fra $f'(x)$ og $f''(x)$. 


> [!note]- Løsning
> Deriver funksjonen $f(x)$ for å finne de kritiske punktene:
> $$
> f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1).
> $$
> Nullpunktene er $x = -1$ og $x = 1$. For å klassifisere ekstremalpunktene, ser vi på faktorene til $f'(x)$ og fortegnene rundt nullpunktene.
> Når vi gjør det kan vi tegne et fortegnsskjema slik
> ![[Files/shapes at 24-09-24 14.16.39.svg]]
>  
> Vi ser altså at 
> 
> - For $x < -1$, er ${\color{#3cc15c} f'(x) > 0 }$ (stigende).
> - For $-1 < x < 1$, er ${\color{#fbc544} f'(x) < 0 }$ (synkende).
> - For $x > 1$, er ${\color{#3cc15c} f'(x) > 0 }$ (stigende).
> 
> Dermed er $x = -1$ et lokalt maksimum og $x = 1$ et lokalt minimum. Da er ${\color{#e796f5} f(-1) = 0 }$ og ${\color{#e796f5} f(1)=-4 }$.
> 
> 2. Tegn grafen ved hjelp av nullpunkter og informasjon fra $f'(x)$ og $f''(x)$.
> Deriver $f(x)$ en gang til:
> $$
> f''(x) = 6x.
> $$
> Dette viser oss at grafen er konkav opp for $x > 0$ og konkav ned for $x < 0$ og skifter fra konkav til konveks i ${\color{#f46f22} f(0)=-2 }$. 
> 
> Vi begynner med å tegne inn ${\color{#e796f5} \text{kritiske punkt} }$ og ${\color{#f46f22} f(0)=-2 }$ der $f$ skifter til å være konkav til konveks. Deretter bruker vi informasjonen fra den deriverte i 1. Tegner vi alt dette inn bør skissen se omtrent slik ut
> 
> ![[Files/shapes at 24-09-24 14.28.57.svg]]
> 

## 4.5


> [!abstract]- 25
> Klassifiser de kritiske punktene til $f(x) = x(x-2)^2+1$. Bruk andrederiverttesten hvis det er mulig.


> [!note]- Løsning
> Finner de kritiske punktene ved å derivere $f(x)$ ved hjelp av [[Kapittel 2 - derivasjon/defogteo/💡 Produktregelen|produktregelen]]:
> $$
> f'(x) = (x-2)^2 + 2x(x-2) = 3x^2 - 8x + 4.
> $$
> Løs $f'(x) = 0$ for å finne de kritiske punktene:
> $$
> 3x^2 - 8x + 4 = 0.
> $$
> Bruker [[Kapittel 0 - Elementære funksjoner/defogteo/💡abc-formelen|abc-formelen]]:
> $$
> \begin{aligned} 
> x  & = \frac{-(-8) \pm \sqrt{(-8)^2 - 4(3)(4)}}{2(3)} \\ &= \frac{8 \pm \sqrt{16}}{6} \\ &= \frac{8 \pm 4}{6}.
> \end{aligned} 
> $$
> De kritiske punktene er $x = 2$ og $x = \frac{2}{3}$. Bruk [[Kapittel 4 - Anvendelse av derivasjon/defogteo/💡 Andrederiverttesten|andrederiverttesten]]:
> 
> $$
> f''(x) = 6x - 8.
> $$
> - For $x = 2$, $f''(2) = 4 > 0$ (lokalt minimum).
> - For $x = \frac{2}{3}$, $f''\left(\frac{2}{3}\right) = -4 < 0$ (lokalt maksimum).



> [!abstract]- 31
> Klassifiser de kritiske punktene til $f(x) = x\ln(x)$. Bruk andrederiverttesten hvis det er mulig.



> [!note]- Løsning
> Finner de kritiske punktene ved å derivere $f(x)$:
> $$
> f'(x) = \ln(x) + 1.
> $$
> Løs $f'(x) = 0$:
> $$
> \ln(x) = -1 \quad \Rightarrow \quad x = e^{-1} = \frac{1}{e}.
> $$
> Bruk [[Kapittel 4 - Anvendelse av derivasjon/defogteo/💡 Andrederiverttesten|andrederiverttesten]] for å klassifisere punktet:
> $$
> f''(x) = \frac{1}{x}.
> $$
> Siden $f''\left(\frac{1}{e}\right) = e > 0$, har vi et lokalt minimum ved $x = \frac{1}{e}$.


## 4.6


> [!abstract]- 7
> Tegn grafen $f(x) = (x^2-1)^3$ ved hjelp av all informasjon du bruke fra $f$, $f'$ og $f''$. 


> [!note]- Løsning
> Deriverer $f(x)$ for å finne kritiske punkter og konkavitet:
> 
> $$
> f'(x) = 3(x^2 - 1)^2 \cdot 2x = 6x(x^2 - 1)^2.
> $$
> De ${\color{#e796f5} \text{kritiske punktene} }$ er derfor ved ${\color{#e796f5} x = -1 }$, ${\color{#e796f5} x = 0 }$, og ${\color{#e796f5} x = 1 }$. 
> Lager vi et fortegnsskjema kan vi undersøke stigningen ved å se på faktorene av funksjonen. Det blir for eksempel slik
> 
> ![[Files/shapes at 24-09-24 15.01.03.svg]]
> 
> Vi ser for eksempel at de to kritiske punktene i $-1$ og $1$ ikke er ekstremalpunkter. 
> 
> Vi ser nå på den andrederiverte:
> $$
> \begin{aligned} 
> f''(x) & = 6(x^2 - 1)^2 + 24x^2(x^2 - 1) 
> \\
> & = 6(x^2-1)(x^2-1+4x^2) 
> \\
> & = 6(x-1)(x+1)(5x^2-1)
> \\
> &= 6(x-1)(x+1)(\sqrt{5}x-1)(\sqrt{5}x+1).
> \end{aligned} 
> $$
> Lager vi et fortegnsskjema kan vi få frem hvor $f$ skal være konveks og konkav. For eksempel kan vi splitte funksjonen inn i lineære faktorer slik som over. Det gir følgende fortegnsskjema
> 
> ![[Files/shapes at 24-09-24 15.14.00.svg]]
> 
> Vi kan nå tegne inn de ekstra vendepunktene i $-\frac{\sqrt{5}}{5}$ og $\frac{\sqrt{5}}{5}$. Totalt bør vi får en graf som ser omtrent slik ut
> 
> ![[Files/shapes at 24-09-24 15.10.05.svg]]

> [!abstract]- 11
> Tegn grafen $g(x) = \frac{x^3}{1+x}$ ved hjelp av all informasjon du bruke fra $g$, $g'$ og $g''$. 


> [!abstract]- 15
> Tegn grafen $h(x) = \frac{x^2}{x^2-1}$ ved hjelp av all informasjon du bruke fra $h$, $h'$ og $h''$. 


> [!abstract]- 30
> Tegn grafen $f(x) = e^{-2x}$ ved hjelp av all informasjon du bruke fra $f$, $f'$ og $f''$. 




## 4.8


> [!abstract]- 1
> To positive tall har sum $7$. Hva er den største mulige verdien av produktet deres?

> [!note]- Løsning
> La $x$ være det ene tallet, da er $7-x$ det andre. Produktet er:
> $$
> P(x) = x(7-x) = 7x - x^2.
> $$
> Deriverer og setter lik $0$ for å finne maksimum:
> $$
> P'(x) = 7 - 2x = 0 \quad \Rightarrow \quad x = \frac{7}{2}.
> $$
> Det maksimale produktet er når begge tallene er $\frac{7}{2}$, og produktet er:
> $$
> P = \left( \frac{7}{2} \right)^2 = \frac{49}{4}.
> $$
> Merk at dette er en andregradsfunksjon, så vi vet at denne må ha et toppunkt når koeffisienten foran $x^2$ er negativ.

> [!abstract]- 8
> Et rektangel har areal $A$. Vis at hvis rektangelet er kvadratisk så har det minst mulig omkrets. 

> [!note]- Løsning
> La lengden og bredden til rektangelet være $x$ og $y$. Da er $xy = A$. Siden $A$ er et tall, kan vi si at $y = \frac{A}{x}$ og omkretsen $O = 2x + 2y$ kan nå skrives om slik
> $$
> O(x) = 2x + 2\frac{A}{x}.
> $$
> Deriverer omkretsen for å finne minimum:
> $$
> O'(x) = 2 - 2\frac{A}{x^2}.
> $$
> Løser for $O'(x) = 0$ og finner at $x = \sqrt{A}$, som gir 
> $$
> y = \frac{\cancel{ A }}{\cancel{ \sqrt{A} }}\cdot\frac{\sqrt{A}}{\cancel{ \sqrt{A} }} = \sqrt{A}.
> $$ 
> Derfor har et kvadratisk rektangel minst mulig omkrets.

> [!abstract]- 9
> En likebeint trekant har omkrets $O$. Vis at hvis trekanten er likesidet har den strøst mulig areal.

> [!note]- Løsning
> La lengden på en side av trekanten være $s$. Ved å betrakte en likesidet trekant kan vi finne høyden med Pytagoras slik som figuren viser
> ![[Files/shapes at 24-10-01 09.43.07.svg]]
> Omkretsen er da $O = 2x+2s$. Siden $O$ er en konstant kan vi løse for $s$ og få $s = \frac{O}{2}-x$  Hvis arealet er $A$ vet vi også at $A = x\cdot h$. Bruker vi Pytagoras kan vi løse for $h$ og få $h = \sqrt{s^2-x^2}$. Vi får derfor at
> $$
> \begin{aligned} 
> A = & x\sqrt{s^2-x^2} \\
>  \overset{ \text{ setter inn for } s }{=  } &  x\sqrt{\left( \frac{O}{2} -x\right)^2-x^2} \\  =  & x \sqrt{\frac{O^2}{4}-2Ox\cancel{ +x^2-x^2 }} \\ = & \sqrt{\frac{O^2x^2 }{4}-Ox^3}.
> \end{aligned} 
> $$
> Vi kan nå se at $A$ er størst når $f(x) =\frac{O^2x^2 }{4}-Ox^3$ er størst. Deriverer vi $f$ får vi $f'(x)=\frac{O^2\cdot x}{2}-3\cdot O\cdot x^2=x\cdot O\left( \frac{O}{2}-3x \right)$. Det kritiske punktet er når $\frac{O}{2}-3x = 0$ eller $x = \frac{O}{6}$. Vi ser også at dette må være et toppunkt siden arealet er 0 når $x$ er 0 eller $x$ er like stor som $s$.


> [!abstract]- 28
> Find lengden av den lengste stolpen som kan bæres horisontalt fra en gang med bredde $a$ meter rundt et hjørne til en gang som har bredde $b$ meter. Se figur og anta at stolpen har 0 i bredde.
> 
> ![[Files/shapes at 24-09-24 13.21.04.svg]]
> 

> [!note]+ Løsning
> Lengden på stolpen som kan bæres rundt hjørnet kan beskrives ved hypotenusen i to rettvinklede trekanter, en med kateten $a$ og en med kateten $b$. Bruk Pythagoras' setning:
> 
> La $L$ være lengden på stolpen. Da er lengden gitt ved ligningen:
> $$
> \frac{a}{\cos(\theta)}+\frac{b}{\sin(\theta)}  = L(\theta),
> $$
> hvor $\theta$ er vinkelen mellom gangen og stolpen. Målet er å velge en stolpe som er så stor at den fortsatt kan komme seg rundt hjørnet. Derfor må vi finne den minste lengden $L$ tar. Hadde vi valgt en stolpe større enn dette vil vi komme til et punkt der den ikke kommer seg rundt hjørnet. 
>
> Vi deriverer med hensyn på $\theta$ og får
> $$
> \begin{aligned} 
> L'(\theta) & =  \frac{a\sin(\theta)}{\cos^2(\theta)} -\frac{b\cos\theta}{\sin^2(\theta)}.
> \end{aligned} 
> $$
> Vi prøver å finne et kritisk punkt ved å finne når $L'(\theta) = 0$. Det gir
> $$
> \begin{aligned} 
> 0 & =  \frac{a\sin(\theta)}{\cos^2(\theta)} -\frac{b\cos\theta}{\sin^2(\theta)} \\
> 0 & = \frac{a\sin^3(\theta)- b\cos^3(\theta)}{\cos^2(\theta)\sin^2(\theta)} \\  0 & = a\sin^3(\theta) - b\cos^3(\theta) \\ 0 &  = \frac{\sin^3(\theta)}{\cos^3(\theta)} - b \\ b &= a \tan^3(\theta) \\ \left( \frac{b}{a} \right)^{1/3} &= \tan(\theta) \\ \frac{\sin(\theta)}{\cos(\theta)} &= \left( \frac{b}{a} \right)^{1/3}.
> \end{aligned} 
> $$
> Siden $L(\theta)$ beregnes ved hjelp av $\cos(\theta)$ og $\sin(\theta)$ må vi finne $\cos(\theta)$ og $\sin(\theta)$. Merk først at vi har sammenhengen $\cos(\theta) = \sqrt{1-\sin^2(\theta)}$. Det er mulig nå å regne ut rent algebraisk hva $\cos(\theta)$ blir. Vi kan også gå trigonometrisk til verks og se at når vi vet forholdet mellom katetene, altså $\tan(\theta)$, kan vi kalle forholdet for $x$ og lage en trekant som ser slik ut. ${\color{grey} \text{Vi bruker } x\text{ fordi dette kan vi gjøre generelt} }$
>  ![[Files/uke42trigtrekant.svg]]
>  Den trigonometriske definisjonen av $\cos(\theta)$ er hosliggende delt på hypotenus. Det vil si at $\cos(\theta)= \frac{1}{\sqrt{1-x^2}}$.
>  
>  Siden vi vet at forholdet $x$ i dette tilfellet er $\frac{b^{\frac{1}{3}}}{a^{\frac{1}{3}}}$ kan vi nå sette inn og få
> $$
> \cos(\theta) =  \frac{1}{\sqrt{1-\frac{b^{\frac{2}{3}}}{a^{\frac{2}{3}}}}}
> $$
> og vi ser også at
> $$
> \sin(\theta)=  \frac{\frac{b^{1/3}}{a^{1/3}}}{\sqrt{1-\frac{b^{\frac{2}{3}}}{a^{\frac{2}{3}}}}}
> $$
> 
> Setter vi dette inn i $L(\theta)$ får vi
> $$
> \begin{aligned} 
>  L(\theta) & = \frac{a}{\cos(\theta)}+\frac{b}{\sin(\theta)} \\ &=   \frac{a}{\frac{1}{\sqrt{1-\frac{b^{\frac{2}{3}}}{a^{\frac{2}{3}}}}}}+\frac{b}{\frac{\frac{b^{1/3}}{a^{1/3}}}{\sqrt{1-\frac{b^{\frac{2}{3}}}{a^{\frac{2}{3}}}}}} \\ &= \sqrt{1-\frac{b^{\frac{2}{3}}}{a^{\frac{2}{3}}}}\left( a+\frac{b}{\frac{b^{1/3}}{a^{1/3}}} \right) \\ & = \sqrt{{\color{#e796f5} {\frac{1}{a^{\frac{2}{3}}}} }(a^{2/3}-b^{2/3})}\left( a+\frac{b}{\frac{b^{1/3}}{a^{1/3}}} \right) \\ &= {\color{#e796f5} \frac{1}{a^{1/3}} }\sqrt{a^{2/3}-b^{2/3}}\left( a+\frac{b}{\frac{b^{1/3}}{a^{1/3}}} \right) \\ &= \sqrt{b^{2/3}-a^{2/3}}\left( \frac{a}{a^{1/3}}+\frac{b}{b^{1/3}} \right) \\ &= \sqrt{b^{2/3}-a^{2/3}}\left( a^{2/3}+{b^{2/3}}\right) \\ &=\left( a^{2/3}+{b^{2/3}}\right)^{3/2}.
> \end{aligned} 
> $$
## 4.9

> [!abstract]- 15 
> Gjør en passende lineær approksimasjon av $\sqrt{x}$ for å estimere $\sqrt{50}$. 


> [!note]- Løsning
> Vi bruker lineær approksimasjon basert på punktet $x_0 = 49$, der $\sqrt{49} = 7$. Deriver funksjonen $f(x) = \sqrt{x}$:
> $$
> f'(x) = \frac{1}{2\sqrt{x}}.
> $$
> For $x = 49$, er $f'(49) = \frac{1}{14}$. Lineær approksimasjon er gitt ved:
> $$
> L(x) = f(x_0) + f'(x_0)(x - x_0).
> $$
> Sett inn $x_0 = 49$ og $f'(49)$:
> $$
> L(x) = 7 + \frac{1}{14}(x - 49).
> $$
> For $x = 50$:
> $$
> L(50) = 7 + \frac{1}{14}(50 - 49) = 7 + \frac{1}{14} = 7.071.
> $$
> Estimert verdi for $\sqrt{50}$ er omtrent $7.071$.

> [!abstract]- 17 
> Gjør en passende lineær approksimasjon av $\sqrt[4]{x}$ for å estimere $\sqrt{85}$. 

> [!note]- Løsning
> Vi bruker lineær approksimasjon basert på punktet $x_0 = 81$, der $\sqrt[4]{81} = 3$. Deriver funksjonen $f(x) = \sqrt[4]{x}$:
> $$
> f'(x) = \frac{1}{4x^{3/4}}.
> $$
> For $x = 81$, er $f'(81) = \frac{1}{4 \cdot 81^{3/4}} = \frac{1}{108}$. Lineær approksimasjon er gitt ved:
> $$
> L(x) = f(x_0) + f'(x_0)(x - x_0).
> $$
> Sett inn $x_0 = 81$ og $f'(81)$:
> $$
> L(x) = 3 + \frac{1}{108}(x - 81).
> $$
> For $x = 85$:
> $$
> L(85) = 3 + \frac{1}{108}(85 - 81) = 3 + \frac{4}{108} = 3.037.
> $$
> Estimert verdi for $\sqrt[4]{85}$ er omtrent $3.037$.
## 4.10

> [!abstract]- 3
> Finn Taylorpolynomet av grad 4 til $\ln(x)$ rundt $x=2$.

> [!note]- Løsning
> For $\ln(x)$ rundt $x = 2$, bruker vi Taylor-rekkefølger:
> $$
> \begin{aligned} 
> f(x)  = & \phantom{+} f(a) + f'(a)(x - a) \\ & + \frac{f''(a)}{2!}(x - a)^2 \\ & + \frac{f'''(a)}{3!}(x - a)^3  \\ & + \frac{f^{(4)}(a)}{4!}(x - a)^4.
> \end{aligned} 
> $$
> Deriver vi funksjonen $\ln(x)$ får vi
> $$
> \begin{aligned} 
> & f(x) = \ln(x) && f(2), =  \ln(2) \\
> & f'(x) = \frac{1}{x}, &&  f'(2) = \frac{1}{2}, \\ & f''(x) = -\frac{1}{x^2}, && f''(2) = -\frac{1}{4}, \\ & f'''(x) = \frac{2}{x^3}, && f'''(2) = \frac{2}{8}, \\ & f^{(4)}(x), = -\frac{6}{x^4} && f^{(4)}(2) = -\frac{6}{16}.
> \end{aligned} 
> $$
> V finner nå verdiene ved $x = 2$:
> Taylorpolynomet er da:
> $$
> P_4(x) = \ln(2) + \frac{1}{2}(x-2) - \frac{1}{8}(x-2)^2 + \frac{1}{24}(x-2)^3 - \frac{1}{64}(x-2)^4.
> $$


> [!abstract]- 5
> Finn Taylorpolynomet av grad 3 til $\sqrt{x}$ rundt $x=4$.

> [!note]- Løsning
> For $\sqrt{x}$ rundt $x = 4$, deriver funksjonen:
> $$
> \begin{aligned} 
> & f(x) =  x^{1/2}, && f(4) = 2,    \\
> & f'(x) = \frac{1}{2\sqrt{x}}, && f'(4) = \frac{1}{4}, \\
> & f''(x) = -\frac{1}{4x^{3/2}}, &&  f''(4) = -\frac{1}{32},\\ & f^{(3)}(x) = \frac{3}{8x^{5/2}} && f^{(3)}(4) = \frac{3}{256}.
> \end{aligned} 
> $$
> Beregn verdiene ved $x = 4$:
> $$
> 
> $$
> Taylorpolynomet av grad 3 er:
> $$
> P_3(x) = 2 + \frac{1}{4}(x-4) - \frac{1}{64}(x-4)^2 + \frac{1}{512}(x-4)^3.
> $$

> [!abstract]- 10
> Finn Taylorpolynomet av grad 2 til $\sqrt{x}$ rundt $x=64$. Bruk Taylorpolynomet til å estimere $\sqrt{61}$.

> [!note]- Løsning
> Vi finner de første to deriverte av $\sqrt{x}$ rundt $x = 64$:
> $$
> f(x) = \sqrt{x}, \quad f'(x) = \frac{1}{2\sqrt{x}}, \quad f''(x) = -\frac{1}{4x^{3/2}}.
> $$
> Taylorpolynomet av grad 2 er:
> $$
> P_2(x) = 8 + \frac{1}{16}(x - 64) - \frac{1}{4096}(x - 64)^2.
> $$
> For $x = 61$, estimerer vi:
> $$
> P_2(61) = 8 + \frac{1}{16}(-3) - \frac{1}{4096}(9)  \approx 7.8103027344.
> $$

> [!abstract]- 15
> Finn Taylorpolynomet av grad 7 til $\sin{(x)}$ rundt $a=0$. Hva er Lagrange resten til Taylorpolynomet?

> [!note]- Løsning
> Taylorpolynomet til $\sin(x)$ rundt $x = 0$ er:
> $$
> P_7(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!}.
> $$
> Lagrange-resten $E_7(x)$ er gitt ved $f^{(8)}(x) = \sin(x)$, som betyr at 
> $$
> E_7(x) = \frac{\sin(s)}{8!} x^8 \quad \text{for} \quad s \in (0, x).
> $$

> [!abstract]- 18
> Finn Taylorpolynomet av grad 6 til $\frac{1}{1-x}$ rundt $a=0$. Hva er Lagrange resten til Taylorpolynomet?


> [!note]- Løsning
> Taylorpolynomet til $\frac{1}{1-x}$ rundt $x = 0$ er den geometriske rekken:
> $$
> P_6(x) = 1 + x + x^2 + x^3 + x^4 + x^5 + x^6.
> $$
> Lagrange-resten $E_6(x)$ er gitt ved $f^{(7)}(x) = \frac{7!}{(1-x)^{8}}$. Som betyr at:
> $$
> E_6(x) = \frac{f^{(7)}(s)}{7!} x^7 = \frac{x^7}{(1-s)^8} \quad \text{for en} \quad s \in (0, x).
> $$


> [!abstract]- 19
> Finn Taylorpolynomet av grad 6 til $\ln(x)$ rundt $a=1$. Hva er Lagrange resten til Taylorpolynomet?


> [!note]- Løsning
> Taylorpolynomet til $\ln(x)$ rundt $x = 1$ er:
> $$
> P_6(x) = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \frac{(x-1)^4}{4} + \frac{(x-1)^5}{5} - \frac{(x-1)^6}{6}.
> $$
> Lagrange-resten $E_6(x)$ er gitt ved:
> $$
> E_6(x) = \frac{f^{(7)}(s)}{7!} (x-1)^7 = \frac{(x-1)^7}{7s^7} \quad \text{for} \quad s \in (1, x).
> $$
