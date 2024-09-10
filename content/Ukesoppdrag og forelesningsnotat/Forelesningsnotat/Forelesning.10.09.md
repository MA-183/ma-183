Husk NoA - Tavle her https://tinyurl.com/ma183-10-09 \
Husk prosjektoppgave!! \

Tillitsvalgt - Sunniva og Vegar
## Læringsmål

- bruke produktregelen, kvotientregelen og kjerneregelen
- bruke at $\lim_{\theta \rightarrow 0}\sin \theta = \sin 0 = 0$, $\lim_{\theta \rightarrow 0}\cos \theta = \cos 0 = 1$ og $\lim_{\theta \rightarrow 0} \frac{\sin \theta}{\theta} = 1$ 
- bruke og argumentere for den deriverte til $\sin x$ og $\cos x$
- derivere $\tan x = \frac{\sin x}{\cos x}$ 
- forklare og regne ut høyere ordens deriverte 



## Forrige uke

$f'(x)$ definerte vi som stigning til tangenten som går gjennom $(x,f(x))$.

![[Files/shapes at 24-09-10 14.20.54.svg]]
Formel
$$
\lim_{h\longrightarrow  0}\frac{f(x+h)-f(x)}{h}.
$$
Hvis den deriverte eksister, så geometrisk sett tenker vi at det finnes en entydig tangentlinje. Vi kan si at 
$f(x) \approx f(a)+f'(a)(x-a)$.
![[Files/shapes at 24-09-10 14.39.46.svg]]
Må være rett linje fordi hvis $x=a$ så står det $f(a)+f'(a)(a-a) = f(a)$. Så det er en linje med rett stigning og som går gjennom $(a,f(a))$. 

> [!warning] Merk 
> Skrivemåter:
> Hvis $f$ er deriverbar i $x$ er følgende ekvivalent (det betyr det samme). 
> $$f'(x) = \lim_{h\longrightarrow  0}\frac{f(x+h)-f(x)}{h} = \frac{d}{dx} f(x) = \frac{df}{dx} = \frac{dy}{dx} = y' $$
> Skal vi evaluere en funksjon i et punkt $x_0$ skriver vi noen ganger slik
> $$f'(x_0) = \frac{d}{dx} (f(x))\bigg|_{x=x_0}$$

> [!warning] Oppgave 
> Finn
> $\frac{d}{dx} x^2=2x$
> Finn $f(x)$ sin deriverte når $f(x) = \sqrt{x} = x^{1/2}$. $f'(x) = \frac{1}{2\sqrt{x}} = \frac{1}{2}x^{-\frac{1}{2}}$ 

> [!tip] Potensreglene for derivasjon
> $\frac{d}{dx}x^r =  r\cdot x^{r-1}$,
>for alle $x$ og $r$ som "gir mening".
>Med andre ord: $f(x) = x^r$ så er $f'(x) = rx^{r-1}$. 

> [!tip] Derivasjonsregler, teo 2.3.2-2.3.5
> Anta at $f$ og $g$ er deriverbare i $x$. Da er
> 1. Summeregel: $(f+g)'(x) = f'(x)+g'(x)$, samme for -
> 2. Produktregel: $(f \cdot g)'(x) = f'(x)g(x)+f(x)g'(x)$. 
> 3. Kvotientregel: $\left( \frac{f}{g} \right)'(x) = \frac{f'(x)g(x)-f(x)g'(x)}{(g(x))^2}$

Hva kan vi si om $f(g(x))$ sin deriverte? 

Først:

La $f(x) = x^2$

> [!warning] Oppgave 
> Hva skjer med (grafen)
> 1. $f(2x)$ sammenligna med $f(x)$
> 2. $f(3x)$ sammenligna med $f(x)$
> 3. $f(x+1)$ sammenligna med $f(x)$
> 4. $f(2x+1)$ sammenligna med $f(x)$

1. Blir dobbelt så bratt som $f(x)$ fordi den vokser dobbelt så fort pga $2x$. 
2. Tre ganger så bratt
3. Like bratt, men forskjøvet horisontalt mot venstre
4. Dobbelt så bratt og forskjøvet mot venstre. 

![[Files/shapes at 24-09-10 14.48.10.svg]]

La oss se på $f(g(x))$ og anta at $g(x)$ er deriverbar i $a$ og at $f$ er deriverbar i $g(a)$. 

$$
\begin{aligned} 
  & \lim_{h\longrightarrow  0} \frac{f(g(x+h))-f(g(x))}{h} \\ & \lim_{h\longrightarrow  0} {\color{#e599f7} \frac{f(g(x+h))-f(g(x))}{g(x+h)-g(x)} } \cdot {\color{#40c057} \frac{g(x+h)-g(x)}{h}  } \\ &= {\color{#e599f7} f'(g(x)) } \cdot {\color{#40c057} g'(x) }
\end{aligned} 
$$

Argumenter over bryter ned hvis $g(x+h) = g(x)$ når $x$. Se boka for fullstendig argument.

Leibniz notasjon
$$
\frac{df}{dx} = \frac{dg}{dx}\cdot \frac{df}{dg}
$$
Fart til fly i forhold til meg = fart til tog i forhold til meg gange med fart til fly i forhold til tog. 
f = fly
g = tog
x = meg. 

Spoiler: $\frac{d}{dx} \sin(x) = \cos(x)$.
> [!warning] Oppgave 
> Bruk kjerneregel til å avgjøre hva
> 1. $\frac{d}{dx} \sin(2x)$
> 2. $\frac{d}{dx} \sin(x^2)$.



> [!tip] Teorem
> $\frac{d}{dx} \sin(x) = (\sin(x))' = \cos(x)$
> $\frac{d}{dx} \cos(x) = -\sin(x)$.
> 

$$
\begin{aligned} 
  \frac{d}{dx} \sin(x) & = \lim_{h\longrightarrow  0} \frac{{\color{#40c057} \sin(x+h) }-\sin(x)}{h} \\ &= \lim_{h\longrightarrow  0}\frac{{\color{#40c057} \sin(x)\cos(h)+\sin(h)\cos(x)  }- \sin(x)}{h} \\
  & = \lim_{h\longrightarrow  0}\frac{\sin(x)(\cos(h)-1) +\cos(x)\sin(h)}{h}
\end{aligned} 
$$










