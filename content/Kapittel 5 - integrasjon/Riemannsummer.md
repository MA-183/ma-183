---
{}
---
La $P$ være en endelig mengde med punkter sortert i stigende rekkefølge fra $a$ til $b$. Det vil si
$$
P = \{x_0, x_1, x_2, \ldots, x_{n-1}, x_n\},
$$
der $a = x_0 < x_1 < x_2<\ldots< x_{n-1}<x_n = b.$
Da kalles $P$ en *partisjon* av $[a,b]$, og den deler intervallet inn i $n$ delintervaller, der intervall nummer $i$ er intervallet $[x_{i-1}, x_i]$. 

Lengden av delintervall $i$ er $\Delta x_i = x_i - x_{i-1}$ for ($1\leq i \leq n$).

Den største lengden i partisjonen kaller vi *normen* til partisjonen $P$ og vi noterer det slik $\Vert P \Vert$. Normen er altså 
$$
\Vert P \Vert = \max_{1\leq i \leq n} \Delta x_i.
$$
For en kontinuerlig funksjon $f$, finnes det minimums- og maksimumspunkter på alle delintervallene. Med andre ord vil det, for hver $i$ fra $1$ til $n$ vil det finnes tall $l_i$ og $u_i$ slik at
$$
f(l_i) \leq f(x) \leq f(u_i)  \quad\quad \text{når } x_{i-1}< x < x_i.
$$

Hvis $f(x) \geq 0$ på $[a,b]$, da kan vi tenke på $f(l_i)\Delta x_i$ og $f(u_i)\Delta x_i$ som arealet av rektanglene som ligger med grunnlinjen på $[x_{i-1}, x_i]$ på $x-$aksen og med høyde på det laveste og høyeste punktet på grafen til $f$ på det intervallet (se figur). Hvis vi kaller området avgrenset av $x-$aksen og grafen til $f$ mellom $x_{i-1}$ og $x_i$ for $A_i$ så er det klart at 
$$
f(l_i)\Delta x_i \leq A_i \leq f(u_i)\Delta x_i.
$$
TEGNING FIXME

Dersom vi tenker at arealet som ligger på undersiden av $x-$aksen som negative areal og $f(x)\leq 0$, da representerer $f(l_i)\Delta x_i$ og $f(u_i)\Delta x_i$ negative arealet av rektanglene som ligger under $x-$aksen. 

> [!tip] Øvre- og nedre Riemannsummer, definisjon 5.3.2
> Den *nedre Riemannsum* $L(f,P)$ og den *øvre Riemannsum*, $U(f,P)$, for funksjonen $f$ og partisjonen $P$ er definert ved
> $$\begin{aligned} L(f, P) & = f(l_1)\Delta x_1 + f(l_2)\Delta x_2 +\ldots + f(l_n)\Delta x_n \\ &= \sum{i=1 }^{n }f(l_i)\Delta x_i. \\ \phantom{} \\ U (f, P) &= f(u_1)\Delta x_1 + f(u_2)\Delta x_2 +\ldots + f(u_n)\Delta x_n \\ &= \sum{i=1 }^{n }f(u_i)\Delta x_i.  \end{aligned}$$  

Figuren under illustrer øvre og nedre Riemannsum og viser de negative arealene markert i blått, og de positive arealene markert i rødt.
![](Files/shapes%20at%2024-08-05%2008.41.29.svg)
Symbolet for det bestemte integral består av flere deler, og alle delene har egne navn.

1. Tegnet $\int$ kalles integraltegnet. Det minner om bokstaven S og representerer en grense av en sum.
2. Vi kaller $a$ den nedre grensen og $b$ den øvre grensen i integrasjonen.
3. Funksjonen $f$ kalles en integrand og vi sier at vi integrerer over $x$ når vi skriver $\int_{a }^{b }f(x) dx$. 
4. $dx$ er differensialen til $x$. Den erstatter $\Delta x$ i Riemannsummene. Hvis en integrand avhenger av mer enn én variabel, så forteller differensialen hvilken variable vi integrerer over.

