---
title: 📄 Regning med komplekse tall
---
Siden de komplekse tallene skal være en utvidelse av de reelle tallene, bør de også oppføre seg slik vi forventer med tanke på addisjon og multiplikasjon. Komplekse tall består av en reell del og en imaginær del. Det blir da naturlig å tenke seg at når vi legger sammen komplekse tall, så vil de reelle delene legges sammen, og de imaginære delene legges sammen.

> [!info] Sum og differanse av komplekse tall
> Hvis $w = a+bi$ og $z = x+yi$ der $a,b, x$ og $y$ er reelle tall, da er
> $$w+z = (a+x)+(b+y)i$$
>  
> $$w-z = (a-x)+(b-y)i.$$ 

Å multiplisere komplekse tall er nok ikke like intuitivt som med summer. Fra den distributive lov vet vi at $(a+b)(c+d) = ac+ad+bc+bd$. Denne loven vil vi at fortsatt skal gjelde, og den forteller oss da hvordan vi multipliserer komplekse tall.

Vi har at $(a+bi)(x+yi)=ax+ayi+bxi+byi^2 = (ax-by)+(ay+bx)i$, siden $i^2 = -1$.  

> [!info] Produktet av to komplekse tall
> Hvis $w = a+bi$ og $z = x+yi$ der $a,b, x$ og $y$ er reelle tall, da er
>  $wz = (ax-by)+(ay+bx)i$.

> [!info] Eksempel 
> Regn ut
> 1. $(3+4i)(2-i)$
> 2. $(3+4i)(3-4i)$

> [!abstract] 1
> 

Vi har at $$\begin{aligned} (3+4i)(2-i) & = 3\cdot2+3\cdot(-i)+4i\cdot2+4i\cdot(-i) \\ &= 6-4i^2-3i+8i \\ &= 6-4(-1)+5i \\&=10+5i. \end{aligned}$$ 

> [!abstract] 2
> 

$$\begin{aligned} (3+4i)(3-4i)  &= 9-\cancel{ 12i+12i }- 16i^2 \\&= 9 + 16 = 25.  \end{aligned}$$ 

Fra det siste eksempelet ser vi faktisk at for alle reelle tall $a$ og $b$ så er 
$$\begin{aligned} (a+bi)(a-bi)  = a^2\cancel{ -bi+bi } +b^2 = a^2+b^2.  \end{aligned} $$

Hvis $z = a+bi$, så er $(a+bi)(a-bi) = |z|^2$. Tallet $a-bi$ kaller vi $z$ sin *komplekst konjugerte* og vi noterer det slik. 

> [!info] Kompleks konjugert, definisjon A.5
> Den kompleks konjugerte til et tall $z = a+bi$ er et annet komplekst tall $\overline{z}=a-bi$. 

Man kan jo også lure på om det kommer noe fornuftig ut av regning med komplekse tall på polarform. Vi skal se at [[Kapittel 0 - innledende kapittel/P.A.4 Multiplikasjon på polarform|multiplikasjon på polarform]] gir oss en utrolig nyttig geometrisk intuisjon bak multiplikasjon av komplekse tall. 