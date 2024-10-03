---
draft: "true"
---
Velge tillitsvalgt 

## Læringsmål

- bruke produktregelen, kvotientregelen og kjerneregelen
- bruke at $\lim_{\theta \rightarrow 0}\sin \theta = \sin 0 = 0$, $\lim_{\theta \rightarrow 0}\cos \theta = \cos 0 = 1$ og $\lim_{\theta \rightarrow 0} \frac{\sin \theta}{\theta} = 1$ 
- bruke og argumentere for den deriverte til $\sin x$ og $\cos x$ 
- derivere $\tan x = \frac{\sin x}{\cos x}$ 
- forklare og regne ut høyere ordens deriverte 
## Forrige uke

$f'(x)$ definerte vi som stigningen til tangenten som går gjennom $(x,f(x))$. Formelt
$$
\lim_{h\longrightarrow  0}\frac{f(x+h)-f(x)}{h}.
$$
Hvis den deriverte eksisterer (at det finnes entydig tangentlinje), så betyr det også at $f$ er praktisk talt en rett linje rundt $a$. Altså
$f(x) \approx f(a)+f'(a)\cdot(x-a)$.

![[Files/shapes at 24-09-07 13.49.02.svg]]
Se at $y=f(a)+f'(a)(x-a)$ *må* være riktig

rett stigning +  $x=a$ gir $f(a)+f'(a)(a-a)= f(a)$, går gjennom $(a,f(a))$. 


> [!warning] Skrivemåte 
> Hvis $f$ er deriverbar i $x$ er følgende ekvivalent (det betyr det samme)
> $$f'(x) = y' = \frac{d}{dx} f(x) = \frac{dy}{dx} = \frac{df}{dx}$$
> Skal vi evaluere en funksjon i et punkt, $x_0$ skriver vi det noen ganger slik
> $$f'(x_0) = \left.\frac{d}{dx} (f(x))\right\rvert_{x=x_0}.$$

Vi så at

$\frac{d}{dx} x^2 = 2x$ 

og

$\frac{d}{dx} \sqrt{x} = \frac{d}{dx} x^{1/2} = \frac{1}{2}x^{-1/2}=\frac{1}{2\sqrt{x}}$.

Generelt
![[Kapittel 3 - transendentale funksjoner/defogteo/Teo Potensreglene for derivasjon|Teo Potensreglene for derivasjon]]

> [!warning] Merk 
> 
Når $f'(x)$ eksisterer $\longrightarrow$ grense nevner mot 0 $\longrightarrow$ teller mot 0 $\longrightarrow$ $f(x+h) \longrightarrow f(x)$. Dvs $f$ kontinuerlig i $x$ som betyr at deriverbarhet innebærer kontinuitet.



> [!tip] Derivasjonsregler, teo 2.3.2-2.3.5
> Anta at $f$ og $g$ er deriverbare i $x$. Da er
> 1. Summeregel: $(f+g)'(x) = f'(x)+g'(x)$, samme for -
> 2. Produktregel: $(f \cdot g)'(x) = f'(x)g(x)+f(x)g'(x)$. 
> 3. Kvotientregel: $\left( \frac{f}{g} \right)'(x) = \frac{f'(x)g(x)-f(x)g'(x)}{(g(x))^2}$


Hva kan vi si om $f(g(x))$ sin deriverte? 
Først: 
La $f(x) = x^2$.

> [!warning] Oppgave 
> Hva skjer med 
> 1. $f(2x)$
> 2. $f(3x)$
> 3. $f(x+1)$
> 4. $f(2x+1)$


1. $f(2x)$ går dobbelt så fort så den deriverte må vel alltid være dobbelt så stor. $\frac{d}{dx} f(2x)=2f'(2x) = 2\cdot 2\cdot2x = 8x$. $f(2x)=(2x)^2 = 4x^2\longrightarrow 8x$.
2. $f(3x)$ går tre ganger så fort, så den deriverte må være tre ganger så stor
3. $f\left( x+1\right)$ flyttes en mot venstre 
4. $f(2x+1)$ flyttes en mot venstre og går dobbelt så fort.

$(f(ax+b))' = af'(ax+b)$.


$$
\begin{aligned} 
 & \lim_{h\longrightarrow  0} \frac{f(g(x+h))-f(g(x))}{h} \\ =& \lim_{h\longrightarrow  0}\frac{f(g(x+h))- f(g(x))}{g(x+h)-g(x)}\frac{g(x+h)-g(x)}{h} \\  \longrightarrow &  f'(g(x))\cdot g'(x).
\end{aligned} 
$$
Bryter ned hvis $g(x+h) = g(x)$. Da må vi gjøre noe triks. Se boka. 

Leibniz notasjon sier
$$
\frac{df}{dx} = \frac{dg}{dx}\cdot \frac{df}{dg}.
$$
Leibniz notasjon kan vi lese slik: Hvis en fugl flyr to ganger så raskt som en gepard er $\frac{df}{dg} = 2$. Hvis en gepard løper fire ganger så raskt som meg vil $\frac{dg}{dx} = 4$. En fugl må da fly $\frac{df}{dx}$ ganger så rask som meg, nemlig $\frac{df}{dx}= \frac{df}{dg}\cdot \frac{dg}{dx}=2\cdot4 = 8$ ganger så raskt. 



Hopper over bevis, se [[Kapittel 2 - derivasjon/2.4.1 Kjerneregelen|2.4.1 Kjerneregelen]].


![[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen#^ad9861|Kjerneregelen]]

> [!info] Eksempel 
> Hvis $f(x) = \sqrt{1+x^2}$ hva er $f'(x)$?

Kjerneregel. La $u = 1+x^2$. 

Da er $f(x) = \sqrt{1+x^2} = \sqrt{u}$. 

Vi vet at 

$\frac{du}{dx} = u' = 2x$. 

Vi vet også at $\frac{d}{du} f(u) = \frac{d}{du}\sqrt{u} = \frac{1}{2\sqrt{u}}$. Så

$$
\frac{df}{dx} = \frac{df}{du}\cdot \frac{du}{dx}= \frac{1}{2\sqrt{u}}\cdot2x = \frac{1}{2\sqrt{1+x^2}}\cdot 2x
$$

> [!warning] Oppgave 
> Hvis $\frac{d}{dx}\sin(x) = \cos(x)$. Hva er
> 1. $\frac{d}{dx}\cos(2x)$?
> 2. $\frac{d}{dx}\cos(x^2)$
> 3. $\frac{d}{dx}\cos(\cos(x))$?
> 4. $\frac{d}{dx}\cos(x)\cdot x^2$?

Ta en av gangen. Til timen er slutt?

> [!tip] Cosinus er kontinuerlig i 0
> Vi har at
> $$\lim_{x\longrightarrow  0}\sin(x) = 0$$ og
> $$\lim_{x\longrightarrow  0}\cos(x) = 1.$$

![[Files/shapes at 24-08-31 13.38.56.svg]]
$$
\begin{aligned} 
 & x^2  = {\color{#e599f7} \sin^2(t) }+{\color{#40c057} (1-\cos(t))^2 } < t^2 \\ & 0<{\color{#e599f7} |\sin(t) | }< |t| \\ 
 & 0 <{\color{#40c057} |1-\cos(t)| } < |t|
\end{aligned} 
$$
Så $\lim_{t\longrightarrow 0} \sin(t) = 0$ (skvises mellom 0 og $t$) og $\lim_{t\longrightarrow 0} \cos(t) = 1$ (avstanden mellom $1$ og $\cos(t)$ skvises til 0 mellom $0$ og $t$).

> [!tip] Teorem 8 
>   $\displaystyle \lim_{\theta \longrightarrow 0 }\frac{\sin(\theta) }{\theta } = 1$, der $\theta$ er i radianer. 


![](Files/shapes%20at%2024-07-30%2012.09.00.svg)

Det er altså tydelig at
$$
\begin{aligned} 
  \sin (t) < t < \frac{\sin(t) }{\cos(t) }.
\end{aligned} 
$$
Deler vi på $\sin(\theta)$ får vi
$$
1 < \frac{\theta }{\sin(\theta) } < \frac{1}{\cos(\theta)}.
$$
Eller tilsvarende
$$
\cos(t) < \frac{\sin(t)}{t}<1.
$$
Siden $\cos(t) \longrightarrow 1$ når $t\longrightarrow 0$ skvises $\frac{\sin(t)}{t}$ også til $1$. ()



> [!tip] Teorem 8.5
> $$\begin{aligned} \lim_{h \longrightarrow 0 } \frac{\cos(h) - 1 }{h } = 0  \end{aligned}$$  

> [!note] Argument 
> 

Vi [[Kapittel 0 - innledende kapittel/5.4 Viktige trigonometriske identiteter|bruker]] at $\cos^2(t)+\sin^2(t) = 1$ r vi at rosa uttrykket kan omformes slik som i neste ledd under: 

$$
\begin{aligned} \lim_{h \longrightarrow  0  } \frac{\cos(h)-1 }{h } &= \lim_{h \longrightarrow  0  } \frac{\cos(h)-1 }{h } \frac{(\cos(h)+1)}{(\cos(h)+1)} \\ & =\lim_{h\longrightarrow  0}\frac{\cos^2(h)-1}{h}\cdot \frac{1}{\cos(h)+1}\\ & = \lim_{h\longrightarrow  0} \frac{\sin^2(h)}{h} \\ &= \lim_{h\longrightarrow  0}{\color{#40c057}  \frac{\sin(h)}{h} } \cdot{\color{#e599f7}  \frac{\sin(h)}{\cos(h)+1}  } \\ &=   {\color{#40c057} 1 } \cdot {\color{#e599f7} \frac{0}{1+1}  =0}\end{aligned}
$$
> [!tip] 
> 1. $\frac{d}{dx} \sin(x) = \cos(x)$
> 2. $\frac{d}{dx} \cos(x) = -\sin(x)$.

> [!note] Argument 

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


Fra kjerneregelen får vi også
$$
\begin{aligned} 
  \frac{d}{dx} \cos(x) & = \frac{d}{dx} \sin\left( \frac{\pi}{2}-x \right) \\ &=  -\cos\left( \frac{\pi}{2}-x \right) = -\sin(x). 
\end{aligned} 
$$
Så begge resultatene følger.

> [!warning] Merk 
> $\cos(x)$ og $\sin(x)$ er derfor også kontinuerlige over alt. 


> [!warning] Oppgave 
> Hva er $\frac{d}{dx}\tan(x)= \frac{d}{dx} \frac{\sin(x)}{\cos(x)}$?


Kvotientregelen gir
$$
\begin{aligned} 
  \frac{d}{dx} \frac{\sin(x)}{\cos(x)} & = \frac{\cos(x)\cos(x)-\sin(x)(-\sin(x))}{\cos^2(x)} \\ &= \frac{\cos^2(x)+\sin^2(x)}{\cos^2(x)}  = \frac{1}{\cos^2(x)}. 
\end{aligned} 
$$

