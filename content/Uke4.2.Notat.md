---
draft: "true"
---
## Læringsmål

- - bruke at $\lim_{\theta \rightarrow 0}\sin \theta = \sin 0 = 0$, $\lim_{\theta \rightarrow 0}\cos \theta = \cos 0 = 1$ og $\lim_{\theta \rightarrow 0} \frac{\sin \theta}{\theta} = 1$ 
- bruke og argumentere for den deriverte til $\sin x$ og $\cos x$
- derivere $\tan x = \frac{\sin x}{\cos x}$ 
- forklare og regne ut høyere ordens deriverte 
- bruke middelverdisetningen
- definere voksende, avtakende, strengt voksende og strengt avtagende funksjoner
- argumentere for at en funksjon $f$ er strengt voksende, strengt avtakende, avtakende, voksende på et intervall $J$ gitt at $f'$ er positiv, negativ, ikkepositiv, ikkenegativ på $J$
- argumentere for at $f$ er en konstant funksjon på et intervall $I$ hvis og bare hvis $f'(x) = 0$ for alle $x\in I$ 



## Sin og cos er deriverbar

Så at 
$$
\begin{aligned} 
  & \lim_{h\longrightarrow  0}\frac{\sin(x+h)-\sin(x)}{h} \\ & \lim_{h\longrightarrow  0}  \sin(x) {\color{#40c057} \frac{\cos(h)-1}{h} } + \cos(x) {\color{#e599f7} \frac{\sin(h)}{h} }
\end{aligned} 
$$
Siden $\sin(x)$ og $\cos(x)$ her er konstant, undersøker vi grensene, grønn og rosa.

> [!tip] Teorem 8 
>   Hvis $h$ er målt i radianer har vi
>   1. $\displaystyle \lim_{h \longrightarrow 0 }\frac{\sin(\theta) }{h } = 1$
>   2. $\begin{aligned} \lim_{h \longrightarrow 0 } \frac{\cos(h) - 1 }{h } = 0  \end{aligned}$  

![](Files/shapes%20at%2024-07-30%2012.09.00.svg)

$$
\begin{aligned} 
  \sin (h) < h < \frac{\sin(h) }{\cos(h) }.
\end{aligned} 
$$


Hva med $\frac{\cos(h)-1}{h}$?

Vi [[Kapittel 0 - innledende kapittel/P.7.4 Viktige identiteter|bruker]] at $\cos^2(t)+\sin^2(t) = 1$ r vi at rosa uttrykket kan omformes slik som i neste ledd under: 

$$
\begin{aligned} \lim_{h \longrightarrow  0  } \frac{\cos(h)-1 }{h } &= \lim_{h \longrightarrow  0  } \frac{\cos(h)-1 }{h } \frac{(\cos(h)+1)}{(\cos(h)+1)} \\ & =\lim_{h\longrightarrow  0}\frac{\cos^2(h)-1}{h}\cdot \frac{1}{\cos(h)+1}\\ & = \lim_{h\longrightarrow  0} \frac{\sin^2(h)}{h} \\ &= \lim_{h\longrightarrow  0}{\color{#40c057}  \frac{\sin(h)}{h} } \cdot{\color{#e599f7}  \frac{\sin(h)}{\cos(h)+1}  } \\ &=   {\color{#40c057} 1 } \cdot {\color{#e599f7} \frac{0}{1+1}  =0}\end{aligned}
$$


Ser vi tilbake
$$
\begin{aligned} 
  & \lim_{h\longrightarrow  0}\frac{\sin(x+h)-\sin(x)}{h} \\ & \lim_{h\longrightarrow  0}  \sin(x) {\color{#40c057} \frac{\cos(h)-1}{h} } + \cos(x) {\color{#e599f7} \frac{\sin(h)}{h} } \\ & \phantom{\lim_{h\longrightarrow  0}} \sin(x)\cdot {\color{#40c057} 0 }+\cos(x)\cdot {\color{#e599f7} 1 } = \cos(x)
\end{aligned} 
$$
Hva med $\frac{d}{dx} \cos(x)$?<
## Middelverdisetningen

![[Kapittel 2 - derivasjon/defogteo/Teo 2.8.11 Middelverditeoremet|Teo 2.8.11 Middelverditeoremet]]

Bildet og ideen er slik: $f$ i rosa, linja mellom punktene i blått og $g$ er avstanden mellom $f$ og blå linje. 
Differansen er også kontinuerlig på $[a,b]$ og deriverbar på $(a,b)$. 

Punktet der $f$ har derivert lik gjennomsnittlig stigning er der $g$ har derivert lik 0.  Vi trenger altså bare vise at $g$ har et $c$ slik at $g'(c) = 0$.

![[Files/middelveriteoremet.svg|400]]

Middelverditeoremet følger dermed hvis vi viser:
> [!tip] Kritiske punkter, Teorem 2.8.14
> Anta at $g$ er definert på et åpent interval $(a,b)$ og oppnår sitt maksimum (eller minimum) i et punkt $c$ i $(a,b)$ og $f'(c)$ eksisterer. 
> Da er $g'(c) = 0$.

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

![[Kapittel 2 - derivasjon/defogteo/Def 2.8.6 Stigende og synkende funksjoner|Def 2.8.6 Stigende og synkende funksjoner]]

![[Kapittel 2 - derivasjon/defogteo/Teo 2.8.12 Stigende og synkende funksjoner|Teo 2.8.12 Stigende og synkende funksjoner]]

La $x_1$ og $x_2$ være punkter i $I$ med $x_2 > x_1$. Fra middelverditeoremet vet vi at det eksisterer et punkt $c$ i $(x_1, x_2)$ (og derfor i $J$) slik at 
$$
\frac{f(x_2)-f(x_1) }{x_2-x_1 }  = f'(c).
$$
Litt omstokking gir $f(x_2) - f(x_1) = (x_2-x_1)f'(c)$. Siden $x_2-x_1>0$, har $f(x_2)-f(x_1)$ samme fortegn som $f'(c)$. 

Det er nå klart at hvis $f'(x)$ har samme fortegn på hele intervallet, så må også resultatet følge. 





![[Kapittel 2 - derivasjon/defogteo/Teo 2.8.13 Konstante funksjoner#^1eb5fb|Teo 2.8.13 Konstante funksjoner]]

> [!note] Argument 
> 

^5bd276

Velg et punkt i $I$ og la $C = f(x_0)$. Hvis $x$ er et annet punkt i $I$, da sier [[Kapittel 2 - derivasjon/defogteo/Teo 2.8.11 Middelverditeoremet|middelverditeoremet]] at det eksisterer et punkt $c$ mellom $x_0$ og $x$ slik at 
$$
\frac{f(x)-f(x_0) }{x-x_0 }  = f'(c) = 0
$$
Så $f(x)=f(x_0)=C$ for alle $x$.  



















La oss gå tilbake til derivasjon og få kontroll på regning ved å ta noen eksempler.

> [!info] Eksempel 
> Finn den deriverte til $\frac{\sin(x)}{x^2}$.

Produktregel sier $\left( \frac{f}{g} \right)' = \frac{f'g-fg}{g^2}$. Her er  $f(x) = \sin(x)$ og $g(x) = x^2$. Så $f'(x) = \cos(x)$ og $g'(x) = 2x$. Setter vi inn får vi
$$
\frac{d}{dx}  \frac{\sin(x)}{x^2} = \frac{\cos(x) x^2 - \sin(x) 2x}{(x^2)^2}
$$
Forenkling gir
$$
\frac{x^2\cos(x)-2x\sin(x)}{x^4}.
$$

> [!info] Eksempel 
> Finn den deriverte til
> $\sin(x)\cdot \cos(x^2)$

Produktregelen sier $({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' = {\color{#f46f22} { f' } } {\color{#3cc15c} g } + {\color{#e796f5} f }{\color{#5ca6f4} { g' } }$. Her er ${\color{#e796f5} f(x) = \sin(x) }$ og ${\color{#3cc15c} g(x) = \cos(x^2) }$. 

1. ${\color{#f46f22} { f'(x) = \cos(x) } }$ 
2. For å derivere ${\color{#3cc15c} \cos({\color{#fbc544} x^2 }) }$ ser vi at ${\color{#fbc544} x^2 }$ er indre funksjon og $\cos(x)$ er ytre. Setter $u=x^2 \longrightarrow  \frac{du}{dx} = 2x$ og får $\cos(u) \longrightarrow \frac{d}{du}\cos(u) =-\sin(u)$. Kjerneregel sier $\frac{d}{dx}\cos(u) = \frac{d}{dx}\cos(x) \cdot \frac{du}{dx}$. Dermed er ${\color{#5ca6f4} g'(x) = -\sin(u)2x = -2x\sin(x^2) }$.
Setter vi alt sammen får vi nå
$$
\frac{d}{dx} \sin(x) \cos(x^2) = {\color{#f46f22} \cos(x) } {\color{#3cc15c} \cos(x^2) } + {\color{#e796f5} \sin(x) } \cdot{\color{#5ca6f4}  (-2x\sin(x^2)) }
$$



> [!info] Eksempel 
> Finn den deriverte til $\sin(\cos(x))$.

Ser at ${\color{#e796f5} u = \cos(x) }$ er indre funksjon og $f(u )={\color{#3cc15c} \sin({\color{#e796f5} u }) }$ er ytre funksjon. 

 $u = \cos(x) \longrightarrow  {\color{#f46f22} \frac{du}{dx} = -\sin(x) }$

${\color{#5ca6f4} \frac{d}{du}\sin(u) = \cos(u) }$

Kjerneregelen sier nå
$$
\begin{aligned} 
(  \sin(\cos(x)))'  &= {\color{#5ca6f4} \frac{d}{du}\sin(u) } \cdot {\color{#f46f22} \frac{du}{dx} } \\ &= {\color{#5ca6f4} \cos(u) } {\color{#f46f22} (-\sin(x)) } \\ &= -\cos\big(\cos(x)\big)\cdot \sin(x).
\end{aligned} 
$$


> [!info] Eksempel 
> Finn $\sin(\cos(x)) \cdot \cos(x^3)$.

Hvis ${\color{#e796f5} f(x) =\sin(\cos(x)) }$ og ${\color{#3cc15c} g(x) =\cos(x^3) }$ sier produktregelen at

$({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' = {\color{#f46f22} f' }{\color{#3cc15c} g } + {\color{#e796f5} f }{\color{#5ca6f4} g' }$

Fra forrige eksempel er ${\color{#f46f22} f'(x) = -\cos(\cos(x))\cdot \sin(x) }$.

Bruker vi kjerneregel på $\cos(x^3)$ ser vi at kjernen derivert er $3x^2$, og $\cos(x)$ derivert er $-\sin(x)$ så vi får
$$
{\color{#5ca6f4} g'(x) = 3x^2(-\sin(x^3)) =-3x^2\sin(x^3)}
$$

Nå setter vi alt sammen og får
$$
\begin{aligned} 
  ({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' & = {\color{#f46f22} f' }{\color{#3cc15c} g } + {\color{#e796f5} f }{\color{#5ca6f4} g' } \\  &= {\color{#f46f22}  -\cos(\cos(x))\cdot \sin(x) } {\color{#3cc15c} \cos(x^3) } + {\color{#e796f5} \sin(\cos(x)) }\cdot{\color{#5ca6f4} (-3x^2\sin(x^3)) }
\end{aligned} 
$$
