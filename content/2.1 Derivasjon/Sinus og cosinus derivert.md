> [!tip] Den deriverte til $\sin(x)$ 
>   $\frac{d}{dx} \sin(x) = \cos(x)$

> [!note] Argument 
> 

Fra [Teorem 8 og 8.5](2.1%20Derivasjon/Spesielle%20trigonometriske%20grenser.md) har vi at $\frac{\cos(h)-1 }{h }$ går mot $0$ og $\frac{\sin(h) }{h }$ går begge mot $1$ når $h \longrightarrow 0$. vi kan nå bruke definisjonen av den deriverte og få
$$
\begin{aligned} 
  \frac{d}{dx} \sin(x) 
   = &\lim_{ h \longrightarrow  0} \frac{\sin(x+h)-\sin(x) }{h } \\
   \overset{\text{1.} }{=  }& \lim_{h\longrightarrow 0 }\frac{\sin(x)\cos(h) + \cos(x)\sin(h)-\sin(x) }{ h} \\
   \overset{ \text{faktoriserer} }{=  } &\lim_{h \longrightarrow  0 }  \frac{\sin (x)(\cos(h)-1)+\cos(x)\sin(h) }{h } \\
   \overset{ 2. }{=  } & \lim_{h\longrightarrow  0 } \sin(x)\cdot \lim_{h \longrightarrow  0 }\frac{\cos(h)-1 }{h }  + \lim_{h \longrightarrow  0 }\cos(x)\cdot\lim_{h \longrightarrow  0   }\frac{\sin(h) }{h } \\
   = & \sin (x)\cdot 0 + \cos(x)\cdot1 = \cos(x)
\end{aligned} 
$$

Der 1. er [Addisjonsformlene for cosinus og sinus](P.7%20Trigonometri/Addisjonsformlene%20for%20cosinus%20og%20sinus.md) og 2. bruker [punkt 3. i regler for grenseverdier](1.1%20Grenser/2.1%20Grenseverdi%20-%20regler.md).

> [!tip] Den deriverte til cos(x) 
> $\frac{d}{dx}\cos(x) = -\sin(x)$
> 

> [!note] Argument 
> 

Basert på at $\cos(x) = \sin\left( \frac{\pi}{2}-x \right)$, så må 
$$
\frac{d}{dx} \cos(x) = \frac{d}{dx} \sin\left( \frac{\pi}{2}-x \right) = -1\cdot \cos\left( \frac{\pi}{2}-x \right) = - \sin(x).
$$

Merk at vi bruker [Kjerneregelen](2.1%20Derivasjon/Kjerneregelen.md) her, i tillegg til [trigonometriske identiteter](P.7%20Trigonometri/Viktige%20identiteter.md).

> [!info] Eksempel 
> Avgjør de deriverte til
> 1. $\sin(\pi x)$
> 2. $x^3\sin(x^2)$
> 3. $\frac{\cos(x) }{1+\sin(x) }$.



> [!check] 1
> 

Vi bruker [Kjerneregelen](2.1%20Derivasjon/Kjerneregelen.md) og får $\frac{d}{dx}\sin(\pi x) \pi\cos(\pi x)$.

> [!check] 2
> 

  Her må vi bruke både [Kjerneregelen](2.1%20Derivasjon/Kjerneregelen.md) og [Produktregelen](2.1%20Derivasjon/Produktregelen.md). Vi merker oss først at kjerneregelen gir at $\frac{d}{dx} \sin(x^2) = 2x\cos(x^2)$. Deretter gir produktregelen at
  $$
\frac{d}{dx} x^3\sin(x^2) = 3x^2\sin(x^2)+x^3\cdot 2(x)\cos(x^2).
$$
> [!check] 3
> 

[Kvotientregelen](2.1%20Derivasjon/Kvotientregelen.md) gir oss nå at dette blir

$$
\begin{aligned} 
  \frac{d}{dx} \frac{\cos(x) }{1+\sin(x) } 
=&  \frac{-\sin(x)(1+\sin(x))-\cos(x)\cdot\cos(x) }{(1+\sin(x))^2 } \\
= & \frac{-(\sin^2(x)+\cos^2(x))-\sin(x) }{(1+\sin(x))^2 } \\
= & \frac{-\cancel{ (1+\sin(x)) }}{(1+\sin(x))\cdot \cancel{ (1+\sin(x)) }} \\
= & \frac{-1 }{1+\sin(x) } 
\end{aligned} 
$$

