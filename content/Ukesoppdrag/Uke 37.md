## 2.4

> [!abstract] 3

$y = (2x+3)^6$. Vi dekomponerer ved å se at $f(x)=2x+3$ er den indre delen av funksjonen og $g(x) = x^6$ er den ytre. Vi får da at $y = g(f(x)).$ Da gir kjerneregelen at $\frac{dy}{dx} = f'(x)\cdot g'(f(x))$. 

Siden $f'(x) = 2$ og $g'(x)=6x^5$ så er $g'(f(x))=6(2x+3)^5$. Setter vi det sammen får vi

$\frac{dy}{dx} = 2\cdot 6(2x+3)^5 = 12(2x+3)^5$.

> [!abstract] 6



> [!abstract] 31

## 2.5

> [!abstract] 3

> [!abstract] 5

> [!abstract] 11

> [!abstract] 13


> [!abstract] 15

> [!abstract] 26

> [!abstract] 27

> [!abstract] 28

> [!abstract] 29

> [!abstract] 30

Det virker naturlig å bruke kvotientregelen her. Deriver derfor teller og nevner hver for seg først. $\frac{d}{dx}\cos(x) =-\sin(x)$ og $\frac{d}{dx}(1+\sin(x)) = \cos(x)$. 

Kvotientregelen forteller oss nå at

$$
\begin{aligned} 
  \frac{d}{dx} \frac{\cos(x)}{1+\sin(x)} & = \frac{-\sin(x)(1+\sin(x))-\cos(x)\cdot(\cos(x))}{(1+\sin(x))^2}  \\ &= \frac{-{\color{#c595f7} \sin^2(x) }-\sin(x)-{\color{#c595f7} \cos^2(x) }}{(1+\sin(x))^2} \\ &= \frac{-1-\sin(x)}{(1+\sin(x))^2} = -\frac{\cancel{ 1+\sin(x) }}{(1+\sin(x))\cancel{ ^2 }} =\frac{-1}.{1+\sin(x)}
\end{aligned}
$$

Merk at vi bruker identiteten $\cos^2(x)+\sin^2(x)=1$ i den markerte utregningen over.

> [!abstract] 53

Vi skal se på 
$$
\lim_{x\longrightarrow  0}\frac{\tan(2x)}{x} = \lim_{x\longrightarrow  0}\frac{\frac{\sin(2x)}{\cos(2x)}}{x}=\lim_{x\longrightarrow  0}\frac{\sin(2x)}{x}\cdot \frac{1}{\cos(2x)}.
$$
Vi ser at $\frac{1}{\cos(2x)}$ går mot $\frac{1}{\cos(0)}=\frac{1}{1}=1$ når $x$ går mot $0$. Dermed må vi bare avgjøre om $\frac{\sin(2x)}{x}$ er noe vi kan gjenkjenne. 

Grensen ligner veldig på 

$\lim_{x\longrightarrow 0} \frac{\sin(x)}{x} = 1$, så vi prøver å få den på denne formen, det gjør vi slik

$$
\frac{\sin(2x)}{x} = \frac{\sin(2x)}{\frac{1}{2}\cdot 2x} = \frac{1}{\frac{1}{2}}\cdot \frac{\sin(2x)}{2x} = 2\cdot \frac{\sin(2x)}{2x}.
$$

Hvis $u=2x$ er det klart at $u\longrightarrow 0$ når $x\longrightarrow 0$, så vi kan omforme grensen over til
$$
\lim_{x\longrightarrow  0}\frac{\tan(2x)}{x} = \lim_{u\longrightarrow  0} 2\frac{\sin(u)}{u}\cdot \frac{1}{\cos(u)} = 2\cdot1\cdot1 = 2.
$$


## 2.6

> [!abstract] 3

> [!abstract] 9

> [!abstract] 13 (du trenger ikke verifisere med induksjon)

> [!abstract] 17 (du trenger ikke verifisere med induksjon)

Skriv $f(x)=\frac{1}{a+bx}=(a+bx)^{-1}$.  Kjerneregelen gir når at

$f'(x) = b\cdot(-1)\cdot(a+bx)^{-2} =-b(a+bx)^{-2}$, fordi funksjonens indre, $a+bx$, sin deriverte er $b$ og funksjonens ytre, $x^{-1}$, sin deriverte er $-1x^{-2}$.

Deriverer vi på nytt får vi
$$
f''(x)=-b\cdot b\cdot(-2)(a+bx)^{-3}=2\cdot b^2 (a+bx)^{-3}.
$$

Deriverer vi på nytt får vi 

$$
f^{(3)}(x)=2\cdot b^2 \cdot b \cdot (-3)(a+bx)^{-4} = -1 \cdot 3! \cdot b^3 (a+bx)^{-4}.
$$

Et mønster begynner å danne seg og vi kan gjette at det bør se noe slikt ut

$$
f^{(n)}(x) = \pm n!\cdot b^n \cdot(a+bx)^{-n-1},
$$
der det er $+$ eller $-$ avhengig av om $n$ er partall (da vil vi ha $+$) eller oddetall (da vil vi ha $-$).

Et typisk triks for å få dette til er å skrive det slik

$$
f^{(n)}(x) = (-1)^n\cdot n!\cdot b^n \cdot(a+bx)^{-n-1}.
$$
Vi verifiserer ikke med induksjon, men kan teste om det fungerer for $n=4$. Da sier formelen at vi bør få

$$
f^{(4)}(x) = (-1)^4 4!\cdot b^4 \cdot(a+bx)^{-5} = 4!\cdot b^4 \cdot(a+bx)^{-5}.
$$

Utfører vi derivasjon av $f^{(3)}(x)$ ser vi at vårt forslag stemmer. 

## 2.8

> [!abstract] 3

Vi skal se på intervallet $[-2,2]$ for funksjonen $f(x)=x^3-3x+1$. Da er $f(-2)=(-2)^3-3(-2)+1 =-8+6+1=-1$ og $f(2)=8-6+1=3$.

Funksjonen stiger fra $-1$ til $3$, altså $4$ fra $-2$ til $2$, så den stiger i snitt med $1$ per $x$.

Middelverditeoremet sier at det skal finnes minst én $c$ i $[-2,2]$ slik at $f'(c) = 1$. 

Oppgaven ber oss om å finne alle slike $c$, så vi deriverer $f(x)$ og får 

$$
f'(x)=3x^2-3.
$$

Målet er nå å finne alle $x\in[-2,2]$ slik at $f'(x)=1$

Det gir likningen 
$$
\begin{aligned} 
  3x^2-3 & = 1 \\ 3x^2 &= 4 \\ x^2 &= \frac{4}{3} \\ x &= \pm \frac{\sqrt{4}}{\sqrt{3}} = \pm\frac{2}{\sqrt{3}}\cdot \frac{\sqrt{3}}{\sqrt{3}} \\ &= \pm\frac{2\sqrt{3}}{3}.
\end{aligned} 
$$
Siden begge disse verdiene er mindre enn $2$ i absoluttverdi har vi funnet alle verdiene. 

