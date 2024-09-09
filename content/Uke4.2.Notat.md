---
draft: "true"
---
## Læringsmål

- bruke middelverdisetningen
- definere voksende, avtakende, strengt voksende og strengt avtagende funksjoner
- argumentere for at en funksjon $f$ er strengt voksende, strengt avtakende, avtakende, voksende på et intervall $J$ gitt at $f'$ er positiv, negativ, ikkepositiv, ikkenegativ på $J$
- argumentere for at $f$ er en konstant funksjon på et intervall $I$ hvis og bare hvis $f'(x) = 0$ for alle $x\in I$ 


## Middelverdisetningen

![[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.8.11 Middelverditeoremet|Teo 2.8.11 Middelverditeoremet]]

Bildet og ideen er slik: $f$ i lilla, linja mellom punktene i blått og $g$ er avstanden mellom $f$ og blå linje. 
Differansen er kontinuerlig på $[a,b]$ og deriverbar på $(a,b)$. 

Deriverte er lik er der differansen har toppunkt og derivert lik 0.  Det må også bety at det er der de begge har lik derivert.

![[Files/desmos-graph (9) 3.svg|400]]

Anta at $f$ har et maksimum i $c$. Da er $f(x)-f(c) \leq 0$, når $x$ er i $(a,b)$. Derfor er
$$
\frac{f(x)-f(c) }{x-c } \leq 0,
$$
når $x \ge c$. Det betyr at $f'(c) = \lim_{x \longrightarrow c^+ } \frac{f(x) - f(c) }{x-c } \leq 0$.
Dersom $x\leq c$ så er 
$$
\frac{f(x)-f(c) }{x-c } \geq 0,
$$
Det betyr at $f'(c) = \lim_{x \longrightarrow c^- } \frac{f(x) - f(c) }{x-c } \geq 0$.

Dermed må $f'(c) = 0$.



Skal se på hva den deriverte kan fortelle oss.

![[Kapittel 2 - derivasjon/Definisjoner og teoremer/Def 2.8.6 Stigende og synkende funksjoner|Def 2.8.6 Stigende og synkende funksjoner]]

![[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.8.12 Stigende og synkende funksjoner|Teo 2.8.12 Stigende og synkende funksjoner]]

La $x_1$ og $x_2$ være punkter i $I$ med $x_2 > x_1$. Fra middelverditeoremet vet vi at det eksisterer et punkt $c$ i $(x_1, x_2)$ (og derfor i $J$) slik at 
$$
\frac{f(x_2)-f(x_1) }{x_2-x_1 }  = f'(c).
$$
Litt omstokking gir $f(x_2) - f(x_1) = (x_2-x_1)f'(c)$. Siden $x_2-x_1>0$, har $f(x_2)-f(x_1)$ samme fortegn som $f'(c)$. 

Det er nå klart at hvis $f'(x)$ har samme fortegn på hele intervallet, så må også resultatet følge. 





![[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.8.13 Konstante funksjoner#^1eb5fb|Teo 2.8.13 Konstante funksjoner]]

> [!note] Argument 
> 

^5bd276

Velg et punkt i $I$ og la $C = f(x_0)$. Hvis $x$ er et annet punkt i $I$, da sier [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.8.11 Middelverditeoremet|middelverditeoremet]] at det eksisterer et punkt $c$ mellom $x_0$ og $x$ slik at 
$$
\frac{f(x)-f(x_0) }{x-x_0 }  = f'(c) = 0
$$
Så $f(x)=f(x_0)=C$ for alle $x$.  

