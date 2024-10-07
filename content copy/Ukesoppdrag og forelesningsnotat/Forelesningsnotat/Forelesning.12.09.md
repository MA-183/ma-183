Husk NoA - tavle her: 

## Læringsmål
Husk NOA!
https://tinyurl.com/ma183-09-12

- bruke at $\lim_{\theta \rightarrow 0}\sin \theta = \sin 0 = 0$, $\lim_{\theta \rightarrow 0}\cos \theta = \cos 0 = 1$ og $\lim_{\theta \rightarrow 0} \frac{\sin \theta}{\theta} = 1$ 
- bruke og argumentere for den deriverte til $\sin x$ og $\cos x$
- bruke middelverdisetningen
- definere voksende, avtakende, strengt voksende og strengt avtagende funksjoner
- argumentere for at en funksjon $f$ er strengt voksende, strengt avtakende, avtakende, voksende på et intervall $J$ gitt at $f'$ er positiv, negativ, ikkepositiv, ikkenegativ på $J$
- argumentere for at $f$ er en konstant funksjon på et intervall $I$ hvis og bare hvis $f'(x) = 0$ for alle $x\in I$ 



$$
\begin{aligned} 
 (\sin(x))'=  & \lim_{h\longrightarrow  0}\frac{\sin(x+h)-\sin(x)}{h} \\ & =\lim_{h\longrightarrow  0}  \sin(x) {\color{#40c057} \frac{\cos(h)-1}{h} } + \cos(x) {\color{#e599f7} \frac{\sin(h)}{h} } \\ &= \sin(x)\cdot {\color{#40c057} 0 } + \cos(x) \cdot {\color{#e796f5} 1 } = \cos(x).
\end{aligned} 
$$

Mål:
Vis at 
$$
\begin{aligned} 
  \lim_{h\longrightarrow  0}\frac{\sin(h)}{h}  & = 1
\end{aligned} 
$$
![[Files/shapes at 24-09-12 08.34.19.svg]]

$$
 \lim_{h\longrightarrow  0}\frac{\cos(h)-1}{h}   = 0
$$


![[Files/shapes at 24-09-12 08.41.58.svg]]



> [!tip]  sin derivert
> $\frac{d}{dx} \sin(x) = \cos(x)$
> $\frac{d}{dx} \cos(x) = -\sin(x)$.
>  
>

![[Files/shapes at 24-09-12 09.07.06.svg]]

## Middelverditeoremet og konsekvenser

> [!tip] Middelverditeoremet
> Anta at $f$ er kontinuerlig på et lukka intervall $[a,b]$ og deriverbar på $(a,b)$. Da eksisterer et punkt $c$ i $(a,b)$ slik at 
> $$
> \frac{f(b)-f(a)}{b-a} = f'(c).
> $$ 
>

![[Files/shapes at 24-09-12 09.10.03.svg|700]]

Idé fra bilde: $f$ i rosa og $y$ er linja mellom punktene i blått. $g$ er avstanden mellom $f$ og blå linje.

$g$ er kontinuerlig på $[a,b]$ og deriverbar på $(a,b)$.

Punktet der $f$ har derivert lik gjennomsnittlig stigning er der $g$ har derivert lik 0.


Må vise at deriverbare funksjoner har stigning 0 i sitt ekstremalpunkt. Fordi da har da har $g$ et punkt $c$ slik at $g'(c) = 0$. 

> [!tip] Kritiske punkter, teo 2.8.14
> Anta at $g$ er definert på $(a,b)$ og $g$ oppnår et maksimum eller minimum i $c$ i  $(a,b)$. Da er $g'(c) = 0$ hvis $g$ er deriverbar.  
>


> [!info] Stigende og synkende funksojner
> Anta at $f$ er definert på et intervall $I$ og at $x_1$ og $x_2$ er punkter i $I$. 
> 1. Hvis $f(x_2) > f(x_1)$ hver gang $x_2 > x_1$, så sier vi at $f$ stiger på $I$
> 2. Hvis $f(x_2) < f(x_1)$ hver gang $x_2 > x_1$, så sier vi at $f$ synker på $I$
> 3. Hvis $f(x_2) \geq f(x_1)$ hver gang $x_2 > x_1$, så sier vi at $f$ er ikkesynkende på $I$
> 4. Hvis $f(x_2) \leq f(x_1)$ hver gang $x_2 > x_1$, så sier vi at $f$ ikkestigende på $I$
>  
>

> [!tip] Teorem 2.8.12
> La $f$ være en funksjon som er kontinuerlig på et intervall $[a,b]$ og deriverbar i $(a,b)$.
> 1. Hvis $f'(x)> 0$ for alle $x$ i $(a,b)$, da er $f$ stigende på $(a,b)$.
> 2. Tilsvarende resultat for 2,3 og 4 fra definisjonen. 
> **Merk** vi kan bytte kontinuitet i $[a,b]$ med kontinuitet i  $(a,b)$, $[a,b)$ eller $(a,b]$ og resultatene holder fortsatt.



Skal bevise punkt 1.
Mål, velg $x_2$ og $x_1$ med $x_2>x_1$ og vis at $f(x_2)> f(x_1)$.  Fra middelverditeoremet finnes det en $c$ i $(a,b)$ slik at 
$$
\frac{f(x_2)-f(x_1)}{x_2-x_1} = f'(c) > 0
$$
gang gjennom med $x_2-x_1$ og få

$f(x_2)-f(x_1) = \underbrace{ {\color{#40c057} f'(c) } }_{ positiv }\underbrace{ ({\color{#e796f5} x_2-x_1 }) }_{ positiv }> 0$. som er det samme som å si at $f(x_2) > f(x_1)$.

Argumentet blir praktisk talt identisk for de tre andre punktene. 


> [!tip] Kontante funksjoner
> Hvis $f$ er kontinuerlig på et intervall $I$ og $f'(x) = 0$ for alle $x$ i $I$ sitt indre. Da er $f(x) = C$, der $C$ er en konstant. 



> [!info] Eksempel 
> Finn den deriverte til $\frac{\sin(x)}{x^2}$.


Kvotientregelen sier $\left( \frac{f}{g} \right)' =\frac{f'g-fg'}{g^2}$. Her er ${\color{#e796f5} f(x) = \sin(x) }$ og ${\color{#f46f22} g(x) = x^2 }$. Så ${\color{#3cc15c} f'(x) = \cos(x) }$ og ${\color{#5ca6f4} g'(x) = 2x }$. 


$$
\frac{d}{dx} \left( \frac{\sin(x)}{x^2} \right) = \frac{{\color{#3cc15c} \cos(x) }{\color{#f46f22} x^2 }-{\color{#e796f5} \sin(x) }  {\color{#5ca6f4} 2x }}{{\color{#f46f22} (x^2) }^2}
$$
med litt forenkling får vi
$$
\frac{d}{dx} \left( \frac{\sin(x)}{x^2} \right) = \frac{{\color{#3cc15c} \cos(x) }{\color{#f46f22} x^2 }-{\color{#e796f5} \sin(x) }  {\color{#5ca6f4} 2x }}{{\color{#f46f22} (x^4) }}
$$


> [!info] Eksempel 
> Finn den deriverte til $\sin(x)\cdot \cos(x^2)$

Produktregel sier $({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' = {\color{#f46f22} f' }{\color{#3cc15c} g } + {\color{#e796f5} f }{\color{#5ca6f4} g' }$

Her er ${\color{#e796f5} f(x) = \sin(x) }$ og ${\color{#f46f22} f'(x) = \cos(x) }$ og ${\color{#3cc15c} g(x) = \cos(x^2) }$. 
Ser at $g(x) = \cos(x^2)$ så tenker kjerneregel. La $u = x^2$ og $\frac{du}{dx} = 2x$, da står det $g(u) = \cos(u)$ så
$$
\frac{d}{dx} g = \frac{dg}{du} \cdot \frac{du}{dx}
$$
da får vi
$$
{\color{#5ca6f4} \frac{d}{dx} g = -\sin(u) \cdot 2x =-2x\sin(x^2) }
$$
Setter vi alt sammen får vi nå
$$
\frac{d}{dx} \sin(x) \cos(x^2) = {\color{#f46f22} \cos(x) } {\color{#3cc15c} \cos(x^2) } + {\color{#e796f5} \sin(x) } \cdot{\color{#5ca6f4}  (-2x\sin(x^2)) }
$$



> [!info] Eksempel 
> Finn den deriverte til $\sin(\cos(x))$.

Ser at ${\color{#e796f5} u = \cos(x) }$ er indre funksjon og $f(u )={\color{#3cc15c} \sin({\color{#e796f5} u }) }$ er ytre funksjon.  Tenker kjerneregel.

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











