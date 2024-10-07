> [!tip] l'Hôpitals første regel
> Anta at funksjonene $f$ og $g$ er deriverbare på intervallet $(a,b)$ og $g'(x) \neq 0$ der. Anta i tillegg at
> 1. $\lim_{x \longrightarrow a+ } f(x) = \lim_{x\longrightarrow a+ }g(x) = 0$ og
> 2. $\lim_{x \longrightarrow a+ } \frac{f'(x) }{g'(x) } = L$, der $L$ er endelig er endelig $\infty$ eller $-\infty$.
> Da er
> $\displaystyle \lim_{x \longrightarrow a+ } \frac{f(x) }{ g(x)} = L.$
>   Tilsvarende resultater holder hvis hvert tilfelle av grensene $\lim_{x \longrightarrow a+ }$ erstattes med $\lim_{x \longrightarrow b-}$ eller $\lim_{x \longrightarrow c }$ der $a < c < b$. Resultatene holder også i tilfellene der $a = -\infty$ og $b = \infty$. 


> [!note]- Argument 
> 
> Vi viser tilfellet der $\lim_{x \longrightarrow a+ }$ der $a$ er endelig. Definer
> $$
> F(x) = \begin{cases} f(x), & \text{hvis } a < x < b \\ 0, & \text{hvis } x = a
> \end{cases}
> $$
> og
> $$
> G(x) = \begin{cases} g(x), & \text{hvis } a < x < b \\ 0, & \text{hvis } x = a
> \end{cases}
> $$
> 
> Da er $F$ og $G$ kontinuerlige på intervallet $[a,x]$ og deriverbare på intervallet $(a,x)$ for alle $x$ i $(a,b)$. Fra [det generaliserte middelverditeoremet](Kapittel%202%20-%20derivasjon/99%20Det%20generaliserte%20middelverditeoremet.md) vet vi at det eksisterer et tall $c$ i $(a,b)$ slik at
> $$
> \frac{f(x) }{g(x) }  = \frac{F(x) }{G(x) }  = \frac{F(x)-F(a) }{G(x)-G(a) } = \frac{F'(c) }{ G'(c) } = \frac{f'(c) }{g'(c) }. 
> $$
> Siden $a<c<x$ og hvis $x \longrightarrow a+$, så må nødvendigvis $c \longrightarrow a+$, så vi har at
> $$
> \lim_{x\longrightarrow  a+ } \frac{f(x) }{g(x) }  = \lim_{c \longrightarrow  a+ } \frac{f'(c) }{g'(c) } =L  
> $$
> 
> Tilfellet der $\lim_{x\longrightarrow b- }$ for endelige $b$ bevises på samme måte. Tilfellene der $a = -\infty$ eller $b = \infty$ følger fra de tidligere resultatene ved å gjøre et variabelskifte. La $x = \frac{1}{t}$
> $$
> \lim_{x \longrightarrow  \infty } \frac{f(x) }{g(x) }  = \lim_{t \longrightarrow  0+ } \frac{f\left( \frac{1}{t} \right) }{g\left( \frac{1}{t} \right) } = \lim_{t \longrightarrow  0+ } \frac{f'\left( \frac{1}{t} \right)\cancel{ \left( \frac{-1 }{t^2 }  \right) } }{g'\left( \frac{1}{t}\right)\cancel{ \left( -\frac{1}{t^2} \right) }  }     = \lim_{x \longrightarrow  \infty } \frac{f'(x) }{g'(x) }  = L. 
> $$

