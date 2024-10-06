

HUSK NOA - Tavla er her tinyurl.com/ma183-05-09
## Læringsmål

- bruke den deriverte (Definisjon 4, s. 100).
- bruke både Lagranges notasjon ($f'(x)$) og Leibniz notasjon ($\frac{df}{dx}$) 
- bruke og argumentere for at deriverbare funksjoner er kontinuerlige (Teorem 1, s. 109).
- bruke og argumentere for at lineære sammensetninger av kontinuerlige funksjoner er kontinuerlige (Teorem 2, s. 109).
- bruke og argumentere for produktregelen (Teorem 3, s. 111).
- bruke og argumentere for kvotientregelen (Teorem 4 og 5, s. 112 og 114).
- Studenten skal kunne regne eksemplene 1.2: 1–5 og 7–9. 1.3: 1–10. 1.4: 1–4 og 6–11. 2.2: 1–3 og 5. 2.3: 1–10.


## Fra sist


> [!info] Grenser
>Hvis $f(x)$ kommer så nær $L$ som vi bare vil, bare $x$ er nær nok $a$, så sier vi at 
> $$ f(x) \longrightarrow  L$$
 > når $x\longrightarrow a$. 
 > Skriver $\lim_{x\longrightarrow a}f(x) = L$. 



![[Files/forelesn0509.svg|600]]

 > [!question] Spørsmål 
> Hva er $\lim_{x\longrightarrow 1}f(x)$
> Hva er $\lim_{x\longrightarrow  2}f(x)$?
> Hva er $\lim_{x\longrightarrow  3}f(x)$?

1. 
$\lim_{x\longrightarrow 1}f(x)$ eksisterer ikke, fordi den går mot 1 når $x$ går mot en fra venstre side, men den går mot $0$ når $x$ går mot 1 fra høyre side. 
$\lim_{x\longrightarrow 1-}f(x) = 1$ 
$\lim_{x\longrightarrow 1+}f(x) = 0$.
Her er $f(1) = 0$

2. $\lim_{x\longrightarrow 2}f(x) = 1 = f(2)$.
3. $\lim_{x\longrightarrow 3}f(x)= 0$. **Merk** her er $f(3)= 1$, så $\lim_{x\longrightarrow 3}f(x) \neq f(3)$.

> [!tip] Grenseverdiregler
> Hvis $\lim_{x\longrightarrow a}f(x)= L$ og $\lim_{x\longrightarrow a}g(x) = M$. Da er
> 1. $\lim_{x\longrightarrow a}(f(x)+g(x))=L+M$ (samme for minus)
> 2. $\lim_{x\longrightarrow a}f(x)\cdot g(x) = LM$ (samme for deling, hvis $M\neq 0$).
> 3. det finnes noen flere: s. 69



> ![[Files/shapes at 24-08-25 13.10.09.svg]]


Det vi trenger for at det vi dreiv med på tirsdag skal funke, så må funksjonen være sammenhengende. Vi sier at $f$ må være *kontinuerlig*.

> [!info] Kontinuitet, def 1.4.4, 1.4.7
> La $f(x)$ være definert på et intervall $(a,b)$ og la $c$ være et indre punkt. Da er $f$ kontinuerlig i punktet $c$ hvis
> $$\lim_{x\longrightarrow  c}f(x) = f(c).$$
> Hvis ikke grensa over samsvarer med $f$ i punktet, er $f$ *diskontinuerlig* i $c$. 
>  
>Vi sier at $f$ er kontinuerlig på $(a,b)$ hvis den er kontinuerlig for alle $c$ i $(a,b)$. 

![[Files/foreles0509.svg]]

$\frac{1}{x}$ er kontinuerlig på $(0,1)$, men har ingen topp- eller bunnpunkt. Så det er nødvendig å ha med endepunkter for å være sikker på at kontinuerlige funksjoner har topp og bunn. 

> [!info] Min-maksteoremet, teorem 1.4.8
> En kontinuerlig funksjon $f$ **på et lukka intervall** $[a,b]$ oppnår maks- og min-verdi.
> 1. Det finnes $q$ slik at $f(x)\leq f(q)$  for alle $x\in [a,b]$. (maksverdi)
> 2. Det finnes en $p$ slik at $f(x) \geq f(p)$ for alle $x$ i $[a,b]$ (min-verdi).
>

og

> [!tip] Skjæringssetningen, 1.4.9
> Hvis $f$ er kontinuerlig på $[a,b]$ da tar $f$ alle verdier mellom $f(a)$ og $f(b)$.  


> [!warning] Merk 
> Kan tenke på det som at kontinuerlige funksjoner tar maksverdi og minverdi og alle verdier mellom på et **lukka intervall.** 

> [!tip] Sammensetninger av kontinuerlige funksjoner er kontinuerlige.
> Hvis $f$ og $g$ er kont. på samme punkt, så er $f\cdot g$ og $f +g$ osv kontinuerlig i punktet. 
> Hvis $f(g(x))$ er kontinuerlig i et punkt $c$ hvis $g$ er kontinuerlig i $c$ og $f$ er kontinuerlig $g(c)$.  
>

$f(x) = x^2$ og $g(x) = \cos(x)$

Da er $f(x)g(x) =x^2\cos(x)$ også kontinuerlig. 

Hvis $c = 2$ så er $f$ kont i $2$ og $f(2) = 2^2 = 4$. $\cos(x)$ er kont i $4$, så $\cos(x^2)$ er kontinuerlig i punktet $x = 2$. 


## Derivasjon


![[Files/fore0509.svg]]


> [!warning] Merk 
> Vi må finne en måte å beskrive stigning til en funksjon, $f$, i et punkt. 


![[Files/fore05092.svg]]

Stigning til $f$ i $x$ er *nesten* gjennsnittlig stigning mellom $x$ og et punkt nær $x$, for eksempel $x+h$. Estimatet bør bli bedre jo mindre $h$ er.  
Figuren viser at gjennomsnittlig stigning er
$$
\frac{f(x+h)-f(x)}{h}.
$$

> [!info] Den deriverte, def 2.2.4.
> $f$ sin deriverte er en ny funksjon $f'$ som er definert som
> $$f'(x) = \lim_{h \longrightarrow  0 }\frac{f(x+h)-f(x)}{h}$$
> i alle punkter $x$ der grensa eksisterer. Les $f'(x)$ som f derivert av x. 
> 

> [!warning] Oppgave 
> Lag en skisse av $f'(x)$ når $f$ ser slik ut: 


![[Files/shapes at 24-09-05 09.45.22.svg]]



Fordi derivasjon er definert med grenser kan vi konkludere med 

> [!tip] Derivasojnsregler, teo 2.3.2-2.3.5
> Anta $f$ og $g$ er deriverbare i $x$. Da er
> 1. Summeregel: $(f+g)'(x) = f'(x)+g'(x)$. 
> 2. Produktregel: $(f\cdot g)'(x)=f'(x)g(x)+f(x)\cdot g'(x)$.
> 3. Kvotientregel: $\left( \frac{f}{g} \right)'(x) = \frac{f'(x)\cdot g(x) - f(x)\cdot g'(x)}{g(x)^2}$
>


For intuisjon, sjekk 3b1b sine youtube videoer (essence of calculus).

> [!warning] Oppgave 
> Ved hjelp av definisjonen av den deriverte. Finn
> 1. $f'(x)$ når $f(x) = 2x$
> 2. $g'(x)$ når $g(x) = x^2$
> 3. $k'(x)$ når $k(x) = \sqrt{x}$. 

> [!abstract] 1

$$
\begin{aligned} 
  & \lim_{h\longrightarrow  0} \frac{f(x+h)-f(x)}{h} \\ =& \lim_{h\longrightarrow  0} \frac{2(x+h)-2x}{h} \\ =& \lim_{h\longrightarrow  0} \frac{\cancel{ 2x }+2h-\cancel{ 2x }}{h} \\ =& \lim_{h\longrightarrow  0}\frac{2\cancel{ h }}{\cancel{ h }} \\ =& \lim_{h\longrightarrow  0} 2 = 2. 
\end{aligned} 
$$
Så det betyr at hvis $f(x) = 2x$ så er $f'(x) = 2$ for *alle* $x$. 

> [!warning] Notasjon 
> Skrivemåter for den deriverte
> $f'(x) = \frac{dy}{dx} =\frac{d}{dx} f(x)$
> Så alle skal bety nøyaktig det samme, nemlig grenseverdien vi definerte over. 

$f'(x)= \frac{d}{dx} (2x) = 2$. 
























> [!abstract] 3

$$
\begin{aligned} 
  & \lim_{h\longrightarrow  0} \frac{k(x+h)-k(x)}{h} \\ =& \lim_{h\longrightarrow  0} \frac{\sqrt{x+h}-\sqrt{x}}{h} \\ =& \lim_{h\longrightarrow  0} \frac{\sqrt{x+h}-\sqrt{x}}{h} \left( \frac{(\sqrt{x+h}+\sqrt{x})}{\sqrt{x+h}+\sqrt{x}} \right) \\ =& \lim_{h\longrightarrow  0} \frac{\cancel{ x }+h-\cancel{ x }}{h(\sqrt{x+h}+\sqrt{x})} \\ =& \lim_{h\longrightarrow  0}\frac{\cancel{ h }}{\cancel{ h }(\sqrt{x+h}+\sqrt{x})} \\ =& \lim_{h\longrightarrow  0}\frac{1}{\sqrt{x+h}+\sqrt{x}} = \frac{1}{\sqrt{x+0}+\sqrt{x}} = \frac{1}{2\sqrt{x}}
\end{aligned} 
$$




