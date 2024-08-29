## 1.2

> [!abstract] 3

Under er tegninger der vi se hva $x$ går mot i blått og hva $g(x)$ går mot i rosa. Vi ser da at $\lim_{x\longrightarrow 1-}g(x) =1$.
![[Files/shapes at 24-08-26 08.51.32.svg]]

> [!abstract] 4

Under er tegninger der vi se hva $x$ går mot i blått og hva $g(x)$ går mot i rosa. Vi ser da at $\lim_{x\longrightarrow 1+}g(x) = 0$.
![[Files/shapes at 24-08-26 08.52.28.svg]]

> [!abstract] 5

Under er tegninger der vi se hva $x$ går mot i blått og hva $g(x)$ går mot i rosa. Vi ser da at $\lim_{x\longrightarrow 3+}g(x) = 0$.
![[Files/shapes at 24-08-26 08.52.36.svg]]

> [!abstract] 6

Under er tegninger der vi se hva $x$ går mot i blått og hva $g(x)$ går mot i rosa. Vi ser da at $\lim_{x\longrightarrow 3-}g(x) = 0$.

![[Files/shapes at 24-08-26 08.53.22.svg]]

> [!abstract] 10

Dette er en kontinuerlig funksjon, og vi ser at vi også bare kan sette inn verdien og få
$$
\lim_{t\longrightarrow  -4} \frac{t^2}{4-t} = \frac{(-4)^2}{4-(-4)} = \frac{16}{8}=2.
$$

> [!abstract] 11

Vi ser at $x^2-1=(x-1)(x+1)$, så vi kan forkorte. Men vi ser også at vi bare kan sette $x=1$ rett inn uten problemer
$$
\lim_{x\longrightarrow  1}\frac{x^2-1}{x+1} = \frac{1^2-1}{1+1} = \frac{0}{2}=0
$$

> [!abstract] 12

Vi ser at $x^2-1=(x-1)(x+1)$, så vi kan forkorte, og får
$$
\begin{aligned} 
  \lim_{x\longrightarrow  -1}\frac{x^2-1}{x+1} &=\lim_{x\longrightarrow  -1}\frac{(x-1)\cancel{ (x+1) }}{\cancel{ x+1 }} \lim_{x\longrightarrow  -1}(x-1) \\ &=-1-1=-2 
\end{aligned} 
$$

> [!abstract] 13

> [!abstract] 14

> [!abstract] 17

Ved å bruke tredje kvadratsetning får vi
$$
\begin{aligned} 
  \lim_{x\longrightarrow  9}\frac{\sqrt{x}-3}{x-9} &= \lim_{x\longrightarrow  9} \frac{\sqrt{x}-3}{(\sqrt{x}-3)(\sqrt{x}+3)} \\ &=\lim_{x\longrightarrow  9}\frac{1}{\sqrt{x}+3} = \sqrt{9}+3=6 
\end{aligned}
$$

> [!abstract] 25

## 1.3

> [!abstract] 3

Siden vi ser på en grense til uendelig på en rasjonal funksjon, gjør vi standardtrikset ved å faktorisere ut høyeste grad. Det gir
$$
\begin{aligned} 
  \lim_{x\longrightarrow  \infty} \frac{3x^3-5x^2+7}{8+2x-5x^3} & = \lim_{x\longrightarrow  \infty} \frac{\cancel{ x^3 }\left( 3-\frac{5}{x}+\frac{7}{x^3} \right)}{\cancel{ x^3 }\left(\frac{8}{x^3}+\frac{2}{x^2}-5 \right)} \\ &= \lim_{x\longrightarrow  \infty}  \frac{ 3-\frac{5}{x}+\frac{7}{x^3} }{\frac{8}{x^3}+\frac{2}{x^2}-5 } \\ &= \frac{3-0+0}{0+0-5} = - \frac{3}{5}
\end{aligned} 
$$

> [!abstract] 11

Merk at hvis $h=x-3$, eller at $x=3+h$ så vil $x\longrightarrow 3$ så vil $h\longrightarrow 0$. Det gjør at vi enkelt kan endre grensen slik
$$
\lim_{x\longrightarrow  3}\frac{1}{3-x}= \lim_{h\longrightarrow  0}\frac{1}{3-(3+h)}=\lim_{h \longrightarrow  0} \frac{1}{h}.
$$
Nå ser vi at venstre grense går mot $-\infty$ og høyre grense går mot $\infty$, så grensen eksisterer ikke.

> [!abstract] 19

> [!abstract] 20

> [!abstract] 28

## 1.4

> [!abstract] 5

> [!abstract] 17

Vi er ute etter $k$ slik at $f(x)$ er kontinuerlig når
$$
f(x) = \begin{cases}
x^2, & \text{ hvis } x \leq 2 \\
k-x^2, & \text{ hvis } x>2.
\end{cases}
$$
Vi ser at $f(2)= 2^2=4$. Vi trenger at når $x\longrightarrow 2$ fra venstre går mot $4$. Vi at $\lim_{x\longrightarrow 2-}f(x)=k-2^2 =k-4$. Dermed må $k=8$.

> [!abstract] 29

> [!abstract] 31

## A.3

> [!abstract] 4

La oss bevise at $f(x)=C$ er kontinuerlig på hele tallinja. 

Vi velger et vilkårlig punkt $a$ og vi ønsker å, for en vilkårlig $\varepsilon>0$ finne en $\delta$ slik at $|f(x)-f(a)|=|f(x)-C| <\varepsilon$ så lenge $|x-a|<\delta$.
Her er ting heldigvis enkelt, for hvis $\varepsilon>0$, så er $f(x)=C$ så $|f(x)-f(a)| = |C-C|=0$, så enhver $\delta>0$ fungerer. Vi ser også at $a$ var et vilkårlig punkt, så $f$ er kontinuerlig i alle punkt på tallinja, altså er $f$ kontinuerlig.

La oss bevise at $g(x)=x$ er kontinuerlig på $\mathbb{R}$. Velg $a\in\mathbb{R}$ og $\varepsilon>0$. Da er $|g(x)-g(a)|=|x-a|$, så hvis $\delta<\varepsilon$ får vi at når $|x-a|<\delta <\varepsilon$ så er $|g(x)-g(a)|<\varepsilon$. Siden $a$ og $\varepsilon$ var vilkårlig valgt, ser vi at $g(x)$ er kontinuerlig for alle $a$ så $g(x)$ er kontinuerlig på $\mathbb{R}$.

> [!abstract] 5

## 2.2

> [!abstract] 1

> [!abstract] 2

> [!abstract] 3

> [!abstract] 5

> [!abstract] 11

Vi ønsker å derivere $y=x^2-3x$ for hånd.

Da får vi 
$$
\begin{aligned} 
  & \lim_{h\longrightarrow  0}\frac{(x+h)^2-3(x+h)-(x^2-3x)}{h} 
  \\ = & \lim_{h\longrightarrow  0} \frac{\cancel{ x^2 }+2xh+h^2-\cancel{ 3x }-3h-\cancel{ x^2 }+\cancel{ 3x }}{h} 
  \\ =& \lim_{h\longrightarrow  0}\frac{2xh+h^2-3h}{h}  \\ =& \lim_{h\longrightarrow  0}\frac{\cancel{ h }(2x+h-3)}{\cancel{ h }} 
  \\ =& \lim_{h\longrightarrow  0}2x+h-3 = 2x-3.
\end{aligned}    
$$

## 2.3

> [!abstract] 17

Vi skal se på $f(x)=\frac{1-4x^2}{x^3}$. Vi kan for eksempel bruke kvotientregelen her. Vi kan også først forenkle uttrykket.

$$
f(x)=\frac{1}{x^3}-\frac{4x^2}{x^3}=x^{-3}-4x^{-1}.
$$
Vanlige regneregler gir nå
$$
f'(x)=-3x^{-3-1}-4\cdot(-1) x^{-1-1} =-3x^{-4}+4x^{-2}.
$$

> [!abstract] 23

Vi skal derivere $s = \frac{1+\sqrt{t}}{1-\sqrt{t}}$. Vi vet at $\frac{d}{dx}(1+t^{1/2}) = \frac{1}{2}t^{-\frac{1}{2}}$ og $\frac{d}{dx}(1-t^{1/2}) = -\frac{1}{2}t^{-\frac{1}{2}}$.

Kvotientregelen gir da
$$
\begin{aligned} 
   &\frac{\frac{1}{2}t^{-1/2}(1-\sqrt{t})-(1+\sqrt{t})\cdot\left( -\frac{1}{2} \right)t^{-1/2}}{(1-\sqrt{t})^2} \\ =& \frac{t^{-1/2}}{2}\cdot\frac{1-\cancel{ \sqrt{t} }+1+\cancel{ \sqrt{t} }}{(1-\sqrt{t})^2} = \frac{t^{-1/2}}{\cancel{ 2 }}\cdot\frac{\cancel{ 2 }}{(1-\sqrt{t})^2} \\ =& \frac{1}{\sqrt{t}(1-\sqrt{t})^2}
\end{aligned} 
$$

> [!abstract] 36

> [!abstract] 46

