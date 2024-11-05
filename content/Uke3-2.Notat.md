---
draft: "true"
---
- bruke den deriverte (Definisjon 4, s. 100).
- bruke både Lagranges notasjon ($f'(x)$) og Leibniz notasjon ($\frac{df}{dx}$) 
- bruke og argumentere for at deriverbare funksjoner er kontinuerlige (Teorem 1, s. 109).
- bruke og argumentere for at lineære sammensetninger av kontinuerlige funksjoner er kontinuerlige (Teorem 2, s. 109).
- bruke og argumentere for produktregelen (Teorem 3, s. 111).
- bruke og argumentere for kvotientregelen (Teorem 4 og 5, s. 112 og 114).
- Studenten skal kunne regne eksemplene 1.2: 1–5 og 7–9. 1.3: 1–10. 1.4: 1–4 og 6–11. 2.2: 1–3 og 5. 2.3: 1–10.

## Fra sist

> [!info] Grenser
> Hvis $f(x)$ kommer så nær $L$ vi bare vil, bare $x$ er nær nok $a$, så sier vi at $f(x) \longrightarrow  L$ når $x \longrightarrow a$. Skriver $\lim_{x\longrightarrow a}f(x) = L$.   
>

![[Files/shapes at 24-08-26 08.51.32.svg]]
1. $\lim_{x\longrightarrow  1} f(x)$ eksisterer ikke fordi den går mot en fra venstre og 0 fra høyre.
2. $\lim_{x\longrightarrow 2}f(x) = 1$ fordi den går mot 1 fra venstre og høyre
3. $\lim_{x\longrightarrow 3}f(x) = 0$ fordi den går mot 0 fra venstre og høyre. **MERK**, $f(3) = 1$, men $\lim_{x\longrightarrow 3}f(x) = 0$, så $\lim_{x\longrightarrow  3}f(x) \neq f(3)$.

> [!tip] Grenseverdiregler, teo 1.2.2
> Hvis $\lim_{x\longrightarrow a}f(x) = L$ og $\lim_{x\longrightarrow a}g(x) = M$ da er
> 1. $\lim_{x\longrightarrow a}(f(x)+g(x))=L+M$ (samme for minus)
> 2. $\lim_{x\longrightarrow a}f(x)\cdot g(x) =LM$ (samme for deling, når $M \neq0$).
> 3. + noen flere: se s.69
> 
> Gjelder for $a$ i $\mathbb{R}$ og uendelig eller ensidige grenser.

Vi avslutta med å gjette 
> [!question] Spørsmål 
> Kan vi gjette nullpunkt til funksjonen under? Der $f(2)=7$ og $f(10)=-1$.
> 
> ![[Files/shapes at 24-08-25 13.10.09.svg]]

Metode vi bruke kalles halvveringsmetoden. Den funker når funksjonen ikke har hull, og er sammenhengende. 

Eksempler der det går galt

![[Files/shapes at 24-08-26 08.51.32.svg]]

$f$ må være *kontinuerlig*


> [!info] Kontinuitet, def 1.4.4+1.4.7
> La $f(x)$ være definert på et intervall $(a,b)$ og $c$ være et indre punkt i $(a,b)$. Da er $f$ *kontinuerlig* i $c$ hvis $$\lim_{x\longrightarrow  c}f(x) = f(c).$$
> Ellers er $f$ *diskontinuerlig* i $c$.
> 
>Vi sier at $f$ er kontinuerlig, hvis den er kontinuerlig i $D(f)$.

Intuitivt har kontinuerlige funksjoner følgende egenskaper

![[Files/shapes at 24-09-02 14.35.06.svg]]
$\frac{1}{x}$ er kontinuerlig på $(0,1)$ men har ingen maksverdi. Faktisk er $x$ kontinuerlig på $(0,1)$, men har ingen maks- eller min-verdier.

Må ha endepunktene med for at det over stemmer.

> [!tip] Min-maksteorem, teorem 1.4.8 
> En kontinuerlig funksjon på et lukket intervall $[a,b]$ oppnår sin min- og maks-verdi. 
> 1. Det finnes $q$ slik at $f(x)\leq f(q)$ på $[a,b]$.
> 2. Det finnes $p$ slik at $f(x)\geq f(p)$ på $[a,b]$.

og 

> [!tip] Skjæringssetningen, 1.4.9  
> Hvis $f$ kont på $[a,b]$, da tar $f$ alle verdier mellom $f(a)$ og $f(b)$.

> [!warning] Merk 
> Kan tenke på det som at kontinuerlige funksjoner tar maksverdi og minimumsverdi og alle verdier i mellom.

Algoritmen vi gjorde over er å bruke skjæringssetningen til å approksimere nullpunkter! Finnes bedre metoder!

Kontinuitet er definert med grenser. Vi får noen opplagte sammenhenger.

> [!tip] Sammensetninger av kontinuerlige funksjoner 1.4.6 og 1.4.7 (litt forenkla)
> Hvis $f$ og $g$ er kontinuerlige på samme punkt er $f\cdot g$ og $f+g$, $f-g$ kontinuerlige funksjoner. 
> 
> Hvis $f(g(x))$ er kontinuerlig i et punkt $c$ hvis $g$ er kontinuerlig i $c$ og $f$ er kontinuerlig i $g(c)$.



## Derivasjon

Hvorfor så vi på kontinuerlige funksjoner? Jo, hvis $f$ er kont så tar $f$ min, maks og alle verdier mellom (ingen hull).

Eks: Ønsker ofte å optimere. Finne makspunkt.

Hvis $f(x)$ beskriver inntekt til en bedrift ved produksjon av $x$ enheter (tar høyde for utgifter også). 
![[Files/kritiskpunkt.svg]]
> [!question] Merk 
> Vi må finne en måte å beskrive stigning til en funksjon, $f$, i et punkt!

Stigning i $x$ er *nesten* gjennomsnittlig stigning mellom $x$ og et punkt nær $x$, for eksempel $x+h$. Figur viser at gjennomsnittlig stigning er
$$
\frac{f(x+h)-f(x)}{h}
$$

Bare velg $h$ veldig liten... Grenser!!
![[Files/sekant.svg|600]]
Er naturlig å tenke at hvis 
$$
\lim_{h\longrightarrow  0}\frac{f(x+h)-f(x)}{h}
$$
eksisterer så får vi stigningen i punktet.



> [!info] Den deriverte, def 2.2.4
> $f$ sin deriverte er en ny funksjon $f'$ som er definert som
> $$f'(x) = \lim_{h\longrightarrow  0}\frac{f(x+h)-f(x)}{h}$$ 
>i alle punkter $x$ der grensa eksisterer. Hvis $f'(x)$ eksisterer sier vi at $f$ er deriverbar i $x$. 

> [!warning] Merk 
> Geometrisk vil grensen være stigningen til tangenten som går gjennom $(x,f(x))$.

> [!warning] Oppgave 
> Lag en skisse av $f'(x)$ når $f$ ser slik ut.

FIXME BILDE

Når $f'(x)$ eksisterer $\longrightarrow$ grense nevner mot 0 $\longrightarrow$ teller mot 0 $\longrightarrow$ $f(x+h) \longrightarrow f(x)$. Dvs $f$ kontinuerlig i $x$.

![[Kapittel 2 - derivasjon/defogteo/💡 Deriverbarhet impliserer kontinuitet|Teo 2.3.1 Deriverbarhet impliserer kontinuitet]]

> [!warning] Notasjon
> Skrivemåter for den deriverte:
>  $f'(x) = \frac{dy}{dx} = \frac{d}{dx}f(x)$.
> Flere på s. 104.
>  


> [!question] Spørsmål 
> Ved hjelp av definisjonen. Finn 
> 1. $f'(x)$ når $f(x) = 2x$
> 2. $g'(x)$ når $g(x) = x^2$
> 3. $h'(x)$ når $h(x) = \sqrt{x}$


> [!abstract] 1

$$
\begin{aligned} 
 &\lim_{h\longrightarrow   0} \frac{f(x+h)-f(x)}{h}\\
  =& \lim_{h\longrightarrow  0} \frac{2(x+h)-2x}{h}  \\ = & \lim_{h\longrightarrow  0}\frac{\cancel{ 2x }+2h-\cancel{ 2x }}{h} = \lim_{h\longrightarrow  0}\frac{2\cancel{ h }}{\cancel{ h }} \\ = & \lim_{h\longrightarrow  0}2 = 2.
\end{aligned} 
$$

> [!abstract] 2

$$
\begin{aligned} 
  & \lim_{h\longrightarrow   0}\frac{f(x+h)-f(x)}{h} \\ = & \lim_{x\longrightarrow  0}\frac{(x+h)^2-x^2}{h} \\ = & \lim_{h\longrightarrow  0} \frac{\cancel{ x^2 }+2xh+h^2-\cancel{ x^2 }}{h}  \\ = & \lim_{h\longrightarrow  0}\frac{2xh+h^2}{h} \\ =& \lim_{h\longrightarrow  0}\frac{\cancel{ h }(2x+h)}{\cancel{ h }} \\ =& \lim_{h\longrightarrow  0} 2x+h = 2x+0 = 2x.
\end{aligned} 
$$


![[Kapittel 3 - Inverse funksjoner/defogteo/💡 Potensreglene for derivasjon|💡 Potensreglene for derivasjon]]


> [!abstract] 3

$$
\begin{aligned} 
  & \lim_{h\longrightarrow  0}\frac{f(x+h)-f(x)}{h} \\  = & \lim_{h\longrightarrow  0} \frac{\sqrt{x+h}-\sqrt{x}}{h} \\ =& \lim_{h\longrightarrow  0} \frac{(\sqrt{x+h}-\sqrt{x})(\sqrt{x+h}+\sqrt{x})}{x(\sqrt{x+h}+\sqrt{x})} && \bigg|\text{3. kvadratsetn.} \\ =& \lim_{h\longrightarrow  0}\frac{(\cancel{ x }+h)-\cancel{ x }}{h(\sqrt{x+h}+\sqrt{x})} \\=& \lim_{h\longrightarrow  0}\frac{\cancel{ h }}{\cancel{ h }(\sqrt{x+h}+\sqrt{x})} \\  = & \lim_{h\longrightarrow  0}\frac{1}{\sqrt{x+h}+\sqrt{x}} = \frac{1}{\sqrt{x+0}+\sqrt{x}} = \frac{1}{2\sqrt{x}}.
\end{aligned} 
$$

Merk regelen over gir egentlig regninga automatisk fordi

$$
\begin{aligned} 
  (\sqrt{x}) = \frac{d}{dx} \sqrt{x}  & =\frac{d}{dx}x^{1/2} = \frac{1}{2}x^{1/2-1}  \\  &= \frac{1}{2}x^{-1/2} \\ &= \frac{1}{2}\cdot \frac{1}{x^{1/2}} = \frac{1}{2\sqrt{x}}.
\end{aligned} 
$$



> [!question] Spørsmål 
> Hvis $f$ og $g$ er deriverbare i $x$, kan vi finne $(f\cdot g)'(x)?$ 
> 1. Hva er $\frac{d}{dx}(x \cdot x)$.

Nr. 2 over gir $\frac{d}{dx}(x\cdot x ) = 2x$ altså ikke deriver hvert legg og gang sammen: $(x)'\cdot(x)' = 1\cdot1$.

På samme måte som at summer, produkt og kvotienter av grenser "oppfører" seg pent gjør derivasjon også det. (Derivasjon er jo tross alt bare grenser!). **Men** det er noen ting som ved første øyekast ikke er like opplagt.

> [!tip] Derivasjonsregler, teo 2.3.2-2.3.5
> Anta at $f$ og $g$ er deriverbare i $x$. Da er
> 1. Summeregel: $(f+g)'(x) = f'(x)+g'(x)$, samme for -
> 2. Produktregel: $(f \cdot g)'(x) = f'(x)g(x)+f(x)g'(x)$. 
> 3. Kvotientregel: $\left( \frac{f}{g} \right)'(x) = \frac{f'(x)g(x)-f(x)g'(x)}{(g(x))^2}$
>

> [!warning] Oppgave 
> 
Vi skal se at $\sin(x)$ sin deriverte er $\cos(x)$ (spoiler).
Med andre ord er $\frac{d}{dx}\sin(x) = (\sin(x))' = \cos(x)$.
> 1. Hva er  $\frac{d}{dx}(x\cdot\sin(x))$?
> 2. Hva er $\frac{d}{dx}\sin(x)\cdot x^2$?
> 3. Hva er $\frac{d}{dx} \sin(x)\cdot\sin(x)$?
