## 3.1

> [!abstract] 2

Vi sjekker om $f$ er en-til-en. Velg to punkter $x_1$ og $x_2$ og merk at $f(x_1) = 2x_1-1$ og $f(x_2) = 2x_2-1$. Hvis disse skal være like må 
$$
\begin{aligned} 
  f(x_1) = 2x_1-1 &= 2x_2 -1 = f(x_2) & \bigg|+1 \\ 2x_1 &= 2x_2 \\ x_1 &= x_2. 
\end{aligned} 
$$
Vi konkluderer med at $f$ er en-til-en.

Siden rekkevidde og definisjonsmengde er $\mathbb{R}$ for $f$, må det samme gjelde for $f^{-1}$.

Vi løser for $f^{-1}$.

La $y = 2x-1$. Vi skal løse for $x$. Da får vi

$$
\begin{aligned} 
  y  & = 2x-1 \\ y-1 & = 2x \\ \frac{y-1}{2} &= x. 
\end{aligned} 
$$
Det betyr at $f^{-1}(y) = \frac{y-1}{2}$.





> [!abstract] 4

La $x_1$ og $x_2$ være to punkter. Hvis $f$ skal være en-til-en så må vi klare å konkludere med at hvis $f(x_1)=f(x_2)$ så må $x_1 = x_2$. Vi undersøker.

$$
\begin{aligned} 
-\sqrt{x_1-1} &= -\sqrt{x_2-1} && \quad\quad\quad \bigg|    (\quad){}^2 \\
x_1-1 &= x_2-1 && \quad\quad\quad\bigg|+1  \\ x_1 &= x_2.
\end{aligned} 
$$
$f$ er altså en-til-en. 

Vi har at $f(x) = -\sqrt{x-1}$. Vi løser for $f$ og får at 
$$
\begin{aligned} 
  f(x)  &= -\sqrt{x-1} \\ (f(x))^2 & = x-1 \\ (f(x))^2+1 &= x.
\end{aligned} 
$$

Dermed er $f^{-1}(x) = x^2+1$

> [!abstract] 6

Vi undersøker om $f$ er en-til-en ved å se om $f(x_1) = f(x_2)$ impliserer at $x_1$ må være lik $x_2$. Det gir

$$
\begin{aligned} 
  f(x_1) = 1 + x_1^{1/3} & = 1+ x_2^{1/3} = f(x_2) \\
  x_1^{1/3} &= x_2^{1/3}  \\ (x_1^{1/3})^3 &= (x_2^{1/3})^3 \\ x_1 & = x_2.
\end{aligned} 
$$
Tredjerøtter kan godt ta negative verdier, derfor er $D(f) = \mathbb{R}$.  I tillegg kan vi fort konkludere med at verdimengde, $V(f)$, også må være $\mathbb{R}$. 

En måte å se det på er ved å finne $f^{-1}$.

$$
\begin{aligned} 
  y & = 1 + x^{1/3} \\
  y-1 & = x^{1/3} \\ 
  (y-1)^3 & = x. 
\end{aligned} 
$$
Det betyr at $f^{-1}(y) = (y-1)^3$. Vi ser at $f^{-1}$ er definert for alle $y\in \mathbb{R}$. Det betyr altså at $V(f) = D(f^{-1}) = \mathbb{R}$.



> [!abstract] 8

Vi starter med å sjekke om $f(x) = (1 - 2x)^3$ er en-til-en. Anta at $f(x_1) = f(x_2)$: $$ \begin{aligned} (1 - 2x_1)^3 & = (1 - 2x_2)^3 && \quad \bigg|\sqrt[3]{} \\ 1 - 2x_1 & = 1 - 2x_2 \\ -2x_1 & = -2x_2 \\ x_1 & = x_2. \end{aligned} $$
Dermed er $f(x)$ en-til-en. For å finne $f^{-1}$, setter vi $y = (1 - 2x)^3$ og løser for $x$: $$ \begin{aligned} y & = (1 - 2x)^3 && \quad \bigg|\sqrt[3]{} \\ \sqrt[3]{y} & = 1 - 2x \\ 2x & = 1 - \sqrt[3]{y} \\ x & = \frac{1 - \sqrt[3]{y}}{2}. \end{aligned} $$ Derfor er $f^{-1}(y) = \frac{1 - \sqrt[3]{y}}{2}$. Siden både definisjonsmengden og verdimengden for $f(x)$ er hele $\mathbb{R}$, gjelder det samme for $f^{-1}$.


> [!abstract] 9

Vi sjekker om $f(x) = \frac{1}{x + 1}$ er en-til-en ved å anta at $f(x_1) = f(x_2)$: $$ \begin{aligned} \frac{1}{x_1 + 1} & = \frac{1}{x_2 + 1} \\ x_1 + 1 & = x_2 + 1 \\ x_1 & = x_2. \end{aligned} $$Dermed er $f(x)$ en-til-en. For å finne $f^{-1}$, setter vi $y = \frac{1}{x + 1}$ og løser for $x$: $$ \begin{aligned} y(x + 1) & = 1 \\ yx + y & = 1 \\ yx & = 1 - y \\ x & = \frac{1 - y}{y}. \end{aligned} $$ Derfor er $f^{-1}(y) = \frac{1 - y}{y}$. Siden $x \neq -1$ for $f(x)$, og $y \neq 0$ for $f^{-1}(y)$, har vi $D(f) = \mathbb{R} \setminus \{-1\}$ og $V(f) = \mathbb{R} \setminus \{0\}$.


> [!abstract] 10


Sjekker først om $f$ er en-til-en. Først gjør vi en 

$$
\begin{aligned} 
  \frac{x_1}{1+x_1} &= \frac{x_2}{1+x_2} && \quad\quad\quad \bigg| 
\cdot (1+x_1) \\ x_1 &= \frac{x_2(1+x_1)}{1+x_2}&& \quad\quad\quad \bigg| \cdot (1+x_2) \\ x_1(1+x_2) &= x_2(1+x_1) \\ x_1 +\cancel{ x_1x_2 } &= x_2+\cancel{ x_1x_2 } \\ x_1 &= x_2.
\end{aligned} 
$$

Vi kan se at $D(f) = \mathbb{R}\setminus\{-1\} = (-\infty, -1)\cup(1,\infty)$. For å si noe om $V(f)$ prøver vi å finne $f^{-1}$ fordi $V(f) = D(f^{-1})$.

$$
\begin{aligned} 
  y & = \frac{x}{1+x} && \quad\quad \bigg|\cdot(1+x) \\ y(1+x) &= x \\ y+yx  &= x \\ y  &= x-yx  \\ y & = x(1-y) \\ \frac{y}{1-y} &= x.
\end{aligned}
$$
Dermed er $x = f^{-1}(y) = \frac{y}{1-y}$ definert for alle $y\neq 1$. 
Nå har vi at $V(f)= D(f^{-1}) = (-\infty, 1)\cup(1,\infty)$.


> [!abstract] 11

Vi starter med å sjekke om $f(x) = \frac{1 - 2x}{1 + x}$ er en-til-en. Anta at $f(x_1) = f(x_2)$: $$ \begin{aligned} \frac{1 - 2x_1}{1 + x_1} & = \frac{1 - 2x_2}{1 + x_2} \\ (1 - 2x_1)(1 + x_2) & = (1 - 2x_2)(1 + x_1) \\ 1 + x_2 - 2x_1 - 2x_1x_2 & = 1 + x_1 - 2x_2 - 2x_2x_1 \\ x_2 - 2x_1 & = x_1 - 2x_2 \\ 3x_2 & = 3x_1 \\ x_1 & = x_2. \end{aligned} $$ Dermed er $f(x)$ en-til-en. For å finne $f^{-1}$, setter vi $y = \frac{1 - 2x}{1 + x}$ og løser for $x$: $$ \begin{aligned} y(1 + x) & = 1 - 2x \\ y + yx & = 1 - 2x \\ yx + 2x & = 1 - y \\ x(y + 2) & = 1 - y \\ x & = \frac{1 - y}{y + 2}. \end{aligned} $$ Derfor er $f^{-1}(y) = \frac{1 - y}{y + 2}$.

> [!abstract] 13

Oppgaven sier at $g(x) = f(x) - 2$. Vi finner $g^{-1}$ uttrykt ved $f^{-1}$: $$ \begin{aligned} y & = g(x) \\ y & = f(x) - 2 \\ f(x) & = y + 2.\end{aligned} $$ 
Siden $f$ har en invers kan må vi ha at vi kan vurdere både venstre og høyre side med $f^{-1}$, det gir
$$
\begin{aligned} 
  f^{-1}(f(x)) & = f^{-1}(y+2) \\ x & = f^{-1}(y+2). 
\end{aligned} 
$$
Derfor er $g^{-1}(y) = f^{-1}(y + 2)$.

> [!abstract] 28

Vi har at $f(x) = 1 + 2x^3$. For å finne $(f^{-1})'(y)$ bruker vi at $f^{-1}(f(x)) = x$, og deriverer begge sider $x$ med [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.4.6 Kjerneregelen|kjerneregelen]]: $$ \begin{aligned} \frac{d}{dx}f^{-1}(f(x)) & = \frac{d}{dx}x \\ (f^{-1})'(f(x)) \cdot f'(x) & = 1. \end{aligned} $$ Det betyr at $(f^{-1})'(y) = \frac{1}{f'(x)}$ når $y = f(x)$. Vi finner først $f'(x)$: $$ \begin{aligned} f'(x) & = 6x^2. \end{aligned} $$ Så når $y = f(x) = 1 + 2x^3$, finner vi $x$ ved å løse $x = \sqrt[3]{\frac{y - 1}{2}}$. Dermed er: $$ \begin{aligned} (f^{-1})'(y) & = \frac{1}{6\left(\sqrt[3]{\frac{y - 1}{2}}\right)^2}. \end{aligned} $$

Merk at det kan være enklere å holde styr på leddene hvis vi definerer $f^{-1}(x) = g(x)$ og la $y = f(x)$. Da er første utregning at $g(f(x)) = g(y)= x$ og kjerneregelen gir
$$
g'(f(x))f'(x)  = g'(y)f'(x)= 1.
$$
så $g'(y) = \frac{1}{f'(x)}$, og siden $x=g(y)$ får vi
$$
g'(y) = \frac{1}{f'(g(y))} = \frac{1}{6(g(y))^2}.
$$

Løser vi for $g = f^{-1}$ slik over, får vi samme konklusjon.

> [!abstract] 29

Vi skal vise at $f(x) = \frac{4x^3}{x^2 + 1}$ har en invers og finne $(f^{-1})'(2)$. 
Vi viser at funksjonen vår er stigende ved å vise at den deriverte alltid er positiv. [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.5 Kvotientregelen|kvotientregelen]] gir oss
$$ \begin{aligned} f'(x) &= \frac{(x^2 + 1) \cdot 12x^2 - 4x^3 \cdot 2x}{(x^2 + 1)^2} \\ &= \frac{12x^2(x^2 + 1) - 8x^4}{(x^2 + 1)^2} \\ &= \frac{12x^4 + 12x^2 - 8x^4}{(x^2 + 1)^2} \\ &= \frac{4x^4 + 12x^2}{(x^2 + 1)^2} \\ &= \frac{4x^2(x^2 + 3)}{(x^2 + 1)^2}. \end{aligned} $$ 
Nevner er alltid positiv og teller er alltid positiv, bortsett fra når $x = 0$, da er teller lik $0$. Siden $f'(x) >0$ på det åpne intervallet $(-\infty,0)$ og $(0,\infty)$ kan vi konkludere med at $f$ er strengt stigende fra [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.8.12 Stigende og synkende funksjoner|teoremet om stigende og synkende funksjoner]], så $f$ er en-til-en og har derfor en invers.

Sammenhengen $\frac{d}{dx}f^{-1}(x) = \frac{1}{f'(f^{-1}(x))}$ forteller oss at vi må finne $f^{-1}(2)$, eller sagt med andre ord, finne en verdi $a$ slik at $f(a) = 2$  for da er $f^{-1}(2) = a$. Nå finner vi $a$ slik at $f(a) = 2$: $$ \begin{aligned} \frac{4a^3}{a^2 + 1} &= 2 \\ 4a^3 &= 2(a^2 + 1) \\ 2a^3 &= a^2 + 1 \\ 2a^3 - a^2 &= 1 \\ a^2(2a-1)= 1. \end{aligned} $$ Vi finner at $a = 1$ løser ligningen. Nå bruker vi $a = 1$ til å finne $(f^{-1})'(2)$: $$ \begin{aligned} (f^{-1})'(2) &= \frac{1}{f'(f^{-1}(2))} \\ &= \frac{1}{f'(1)}\end{aligned} $$Vi sjekker hva $f'(1)$ er og får
$$
f'(1)= \frac{4(1)^2((1)^2 + 3)}{((1)^2 + 1)^2} = \frac{4 \cdot 4}{4} = 4,
$$
som gir at
$$
(f^{-1})'(2) = \frac{1}{f'(1)} = \frac{1}{4}.
$$


> [!abstract] 30

Oppgaven sier at vi skal finne $(f^{-1})'(-2)$ for $f(x) = x\sqrt{3 + x^2}$. Vi bruker samme fremgangsmåte som i forrige oppgave. Deriverer $f^{-1}(f(x)) = x$: $$ \begin{aligned} (f^{-1})'(f(x)) \cdot f'(x) & = 1. \end{aligned} $$ Så $(f^{-1})'(y) = \frac{1}{f'(x)}$ hvor $y = f(x)$. Vi finner først $f'(x)$: $$ \begin{aligned} f'(x) & = \frac{d}{dx}\left(x\sqrt{3 + x^2}\right) \\ & = \sqrt{3 + x^2} + x\cdot\frac{x}{\sqrt{3 + x^2}} \\ & = \frac{3 + 2x^2}{\sqrt{3 + x^2}}. \end{aligned} $$ For $f(x) = -2$, må vi løse $x\sqrt{3 + x^2} = -2$.
Da har vi
$$
\begin{aligned} 
  (x\sqrt{3+x^2}) & = (-2) \\ (x\sqrt{3+x^2})^2 & = (-2)^2 \\ x^2(3+x^2)  &= 4 \\ 3x^2+x^4-  4 & = 0 && \bigg| \text{acb-formel på } x^2 \\ \phantom{} \\  x^2 & = \frac{-3\pm\sqrt{9+16}}{2} = \frac{-3\pm 5}{2}.  
\end{aligned} 
$$
De eneste reelle løsningene vi får her er at $x =1$ eller $x = -1$.  Tar vi et skritt tilbake ser vi at vi kvadrerte likningen vår, noe som også gjør at $x = 1$ faktisk ikke er en løsning på den originale likningen, da venstre side av uttrykket vil bli positivt, altså ikke lik $-2$. 

Nå gjenstår det bare å se at 
$$
(f^{-1})
$$

## 3.2

> [!abstract] 1


> [!abstract] 2


> [!abstract] 3


> [!abstract] 4


> [!abstract] 5


> [!abstract] 6


> [!abstract] 7


> [!abstract] 8


## 3.3

> [!abstract] 7


> [!abstract] 8


> [!abstract] 9


> [!abstract] 10


> [!abstract] 15


> [!abstract] 23


> [!abstract] 24


> [!abstract] 33


> [!abstract] 34


> [!abstract] 35


> [!abstract] 36

