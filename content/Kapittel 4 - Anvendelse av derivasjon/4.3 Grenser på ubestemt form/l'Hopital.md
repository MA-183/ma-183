
Vi har allerede vist at 
$$
\lim_{x \longrightarrow  0 } \frac{\sin(x) }{x }  = 1, 
$$
da vi så på [spesielle trigonometriske grenser](Kapittel%202%20-%20derivasjon/2.1%20Derivasjon/Spesielle%20trigonometriske%20grenser.md).

Denne grensen var krevende å vurdere fordi at vi ville ende med $\frac{0 }{0 }$ dersom vi satte inn $x=0$. 

> [!info] Ubestemt form, s 231 
>  Under ser du en liste med grenser som er på det vi kaller *ubestemt form*.
>  $$\begin{array}{rlrl}
>   & \text{Type} & & & & \text{ Eksempel}  \\
>   & \left[ \frac{0 }{0 }  \right] & & & &\displaystyle \lim_{x \longrightarrow  0 } \frac{\sin(x) }{x }  \\  & \left[ \frac{\infty }{\infty }  \right] &&&& \displaystyle\lim_{x \longrightarrow  \infty } \frac{(\ln(x))^2 }{e^{2x} } \\ & [0\cdot\infty] &&&& \displaystyle\lim_{x \longrightarrow  0+ } x\ln\left( \frac{1}{x} \right) \\ & [\infty - \infty]  &&&& \displaystyle \lim_{x \longrightarrow  \left( \frac{\pi}{2} \right)- } \left( \tan(x)-\frac{1 }{\pi-2x }  \right)   \\ & [0^0] &&&& \displaystyle \lim_{x \longrightarrow  0+ } x^x \\ & [\infty^0] &&&& \displaystyle \lim_{x \longrightarrow  \left( \frac{\pi}{2} \right)- } \tan(x)^{\cos(x)} \\ & [1^\infty] &&&& \lim_{x \longrightarrow  \infty }\left( 1+\frac{1}{x} \right)^x  
\end{array}$$

Ved hjelp av l'Hoptials regel skal vi utvikle en metode for håndtere grenser på ubestemt form.

> [!tip] Første l'Hopitals regel, teorem 4.3.3
> Anta at funksjonene $f$ og $g$ er deriverbare på intervallet $(a,b)$ og $g'(x) \neq 0$ der. Anta i tillegg at
> 1. $\lim_{x \longrightarrow a+ } f(x) = \lim_{x\longrightarrow a+ }g(x) = 0$ og
> 2. $\lim_{x \longrightarrow a+ } \frac{f'(x) }{g'(x) } = L$, der $L$ er endelig er endelig $\infty$ eller $-\infty$.
> Da er
> $\displaystyle \lim_{x \longrightarrow a+ } \frac{f(x) }{ g(x)} = L.$
>   Tilsvarende resultater holder hvis hvert tilfelle av grensene $\lim_{x \longrightarrow a+ }$ erstattes med $\lim_{x \longrightarrow b-}$ eller $\lim_{x \longrightarrow c }$ der $a < c < b$. Resultatene holder også i tilfellene der $a = -\infty$ og $b = \infty$. 

> [!note] Argument 
> 

Vi viser tilfellet der $\lim_{x \longrightarrow a+ }$ der $a$ er endelig. Definer
$$
F(x) = \begin{cases} f(x), & \text{hvis } a < x < b \\ 0, & \text{hvis } x = a
\end{cases}
$$
og
$$
G(x) = \begin{cases} g(x), & \text{hvis } a < x < b \\ 0, & \text{hvis } x = a
\end{cases}
$$

Da er $F$ og $G$ kontinuerlige på intervallet $[a,x]$ og deriverbare på intervallet $(a,x)$ for alle $x$ i $(a,b)$. Fra [det generaliserte middelverditeoremet](Kapittel%202%20-%20derivasjon/2.8%20Middelteoremet/Det%20generaliserte%20middelverditeoremet.md) vet vi at det eksisterer et tall $c$ i $(a,b)$ slik at
$$
\frac{f(x) }{g(x) }  = \frac{F(x) }{G(x) }  = \frac{F(x)-F(a) }{G(x)-G(a) } = \frac{F'(c) }{ G'(c) } = \frac{f'(c) }{g'(c) }. 
$$
Siden $a<c<x$ og hvis $x \longrightarrow a+$, så må nødvendigvis $c \longrightarrow a+$, så vi har at
$$
\lim_{x\longrightarrow  a+ } \frac{f(x) }{g(x) }  = \lim_{c \longrightarrow  a+ } \frac{f'(c) }{g'(c) } =L  
$$

Tilfellet der $\lim_{x\longrightarrow b- }$ for endelige $b$ bevises på samme måte. Tilfellene der $a = -\infty$ eller $b = \infty$ følger fra de tidligere resultatene ved å gjøre et variabelskifte. La $x = \frac{1}{t}$
$$
\lim_{x \longrightarrow  \infty } \frac{f(x) }{g(x) }  = \lim_{t \longrightarrow  0+ } \frac{f\left( \frac{1}{t} \right) }{g\left( \frac{1}{t} \right) } = \lim_{t \longrightarrow  0+ } \frac{f'\left( \frac{1}{t} \right)\cancel{ \left( \frac{-1 }{t^2 }  \right) } }{g'\left( \frac{1}{t}\right)\cancel{ \left( -\frac{1}{t^2} \right) }  }     = \lim_{x \longrightarrow  \infty } \frac{f'(x) }{g'(x) }  = L. 
$$


> [!tip] Andre l'Hopitals regel
> Anta at $f$ og $g$ er deriverbare på intervallet $(a,b)$ og at $g'(x) \neq 0$ der. Anta i tillegg at
> 1. $\lim_{x \longrightarrow a+ } g(x) = \pm \infty$ and
> 2. $\lim_{x \longrightarrow a+ } \frac{f'(x) }{g'(x) } = L$, der $L$ er endelig, $\infty$ eller $-\infty$.
> Da er
> $$\lim_{x \longrightarrow  a+ } \frac{f(x) }{g(x) }  = L. $$
>  Tilsvarende resultater holder også for $\lim_{x\longrightarrow b- }$ og $\lim_{x \longrightarrow c }$ der $a< c < b$. Tilfellene $a = -\infty$ og $b = \infty$ holder også. 


> [!warning] Merk
> 1. l'Hopitals regel gjelder ikke for grenser som ikke er på *ubestemt* form.
> 2. Selv om $\lim\frac{f'(x) }{g'(x) }$ ikke eksisterer, kan vi ikke trekke noen annen konklusjon, enn at l'Hopital som teknikk ikke fungerer. Det kan fortsatt være at grensen eksisterer og er mulig å finne ved å bruke andre teknikker.
