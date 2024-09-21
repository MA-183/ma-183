---
draft: "true"
---
- forklare sammenhengen mellom én- og to-sidede grenser (Definisjon 1 og 2 og Teorem 1, s. 66–68).
- bruke regler for grenser (Teorem 2 og 3, s. 69–70).
- gi en uformell definisjon av grenser ved uendelig (Definisjon 3, s. 73).
- gi en definisjon av kontinuitet i et punkt (indre punkt og endepunkt) og på kontinuitet på et intervall, samt forklare når en funksjon $f$ er diskontinuerlig i et punkt $x_0$ (Definisjon 4–7, s. 79–81).
- bruke at sammensetning av kontinuerlige funksjoner er kontinuerlig (Teorem 6 og 7, s. 82).
- bruke Max-Min teoremet for kontinuerlige funksjoner (Teorem 8, s. 83).
- bruke skjæringssetningen for kontinuerlige funksjoner og bruke skjæringssetningen til å approksimere nullpunkter (Teorem 9, s. 85).

## Grenser

Vi begynner med en reise tilbake til Arkimedes (200 år før Kristus)

![[Files/shapes at 24-08-25 10.16.06.svg]]

> [!question] Spørsmål 
> Hva er størst. Sirkel med radius $2$ eller rektangel med sidelengder 3 og 4?

![[Files/shapes at 24-08-25 10.20.05.svg]]

Hvis vi kutter finere

![[Files/shapes at 24-08-25 10.25.00.svg]]

Mindre som ligger utenfor parallellogram (det i rødt), og høyde enda nærmere $r$. 
Kan kutte sirkelen til å være så nært vi vil et parallellogram med grunnlinje $\pi r$ og høyde $r$. 

> [!warning] Merk 
> Sirkel med radius $r$ må ha areal $\pi r^2$.



![[Kapittel 1 - grenser og kontinuitet/defogteo/Def Grenseverdi|Def Grenseverdi]]

Vi kan tegne dette slik
![900](Files/grensebilde.svg)
Det gir oss den formelle definisjonen

![[Kapittel 1 - grenser og kontinuitet/defogteo/Def Grenseverdi (formell)|Def Grenseverdi (formell)]]

Definisjonen over er for de som sikter høyt!

> [!question] Spørsmål (eksempel 4)
> Hva er
> 1. $$\lim_{x\longrightarrow -2}\frac{x^2-2x+1}{x-1}?$$
> 2. $$\lim_{x\longrightarrow a}\frac{\frac{1}{a}-\frac{1}{ax}}{x-a}?$$

> [!abstract] 1
> 

Vi har at $x^2-2x+1 = (x-1)^2$, dermed får vi
$$
\begin{aligned} 
   \lim_{x\longrightarrow   -2}\frac{x^2-2x+1}{x-1}& =\lim_{x\longrightarrow  -2}\frac{(x-1)\cancel{ ^2 }}{\cancel{ x-1 }}  = \lim_{x\longrightarrow   -2} x-1 \\ &= -2-1 = -3
\end{aligned} 
$$
> [!abstract] 2

Vi har at $\frac{1}{a}-\frac{1}{x}=\frac{x}{xa}-\frac{a}{xa}=\frac{a-x}{xa}$. Det gir
$$
\begin{aligned} 
  \lim_{x\longrightarrow   a} \frac{\frac{1}{x}-\frac{1}{a} }{x-a} & = \lim_{x\longrightarrow  a}\frac{\frac{x-a}{xa}}{x-a} \\ &= \lim_{x\longrightarrow  a} \frac{\cancel{ (x-a) }\frac{1}{xa}}{\cancel{ x-a }} = \lim_{x\longrightarrow  a} \frac{1}{xa}=\frac{1}{x^2}.
\end{aligned} 
$$

> [!warning] Merk 
> 1. $\lim_{x\longrightarrow a+}f(x)$ er grense der vi kun betrakter $x>a$. Grense fra *høyre*.
> 2. $\lim_{x\longrightarrow  a-}$ er grense der vi kun betrakter $x<a$. Grense fra *venstre*.
> 3. $\lim_{x\longrightarrow \infty}f(x)$ er grense der vi betrakter vilkårlige store $x$.

> [!tip] Grenseverdiregler, teo 1.2.2
> Hvis $\lim_{x\longrightarrow a}f(x) = L$ og $\lim_{x\longrightarrow a}g(x) = M$ da er
> 1. $\lim_{x\longrightarrow a}(f(x)+g(x))=L+M$ (samme for minus)
> 2. $\lim_{x\longrightarrow a}f(x)\cdot g(x) =LM$ (samme for deling, når $M \neq0$).
> 3. + noen flere: se s.69
> 
> Gjelder for $a$ i $\mathbb{R}$ og uendelig eller ensidige grenser.


> [!question] Spørsmål - standardeksempel
> Hva er 
> $$\lim_{x\longrightarrow  \infty}\frac{3x^5+3x^2}{2x^5}?$$

Typisk "triks" når vi har $x\longrightarrow \infty$ på rasjonale funksjoner: trekk ut høyeste potens:

$$
\begin{aligned} 
  \lim_{x\longrightarrow  \infty}\frac{\cancel{ x^5 }\left( 3+\frac{3x^2}{x^5} \right)}{\cancel{ x^5 }(2)} =\lim_{x\longrightarrow  \infty}\frac{3+\frac{3}{x^3}}{2} = \frac{3+0}{2}=\frac{3}{2}
\end{aligned} 
$$
fordi $\frac{3}{x^3} \longrightarrow \frac{3}{\text{noe veldig stort}} = \text{veldig lite}\longrightarrow  0$.

> [!question] Spørsmål 
> Kan vi gjette nullpunkt til funksjonen under? Der $f(2)=7$ og $f(10)=-1$.
> 
> ![[Files/shapes at 24-08-25 13.10.09.svg]]

Gjetter $x=6$ og får at $f$ spytter ut $7$. Gjetter $8$ og får at $f$ spytter ut $4$. Gjetter $9$ og får $1.75$, gjetter 9.5 og får noe positivt....
Vi gjetter alltid midtpunktet mellom positiv og negativ verdi.

I python
![[Files/Pasted image 20240825133435.png]]

Kjører vi en løkke får vi 
![[Files/Pasted image 20240902142540.png]]

![[Files/Pasted image 20240825133522.png]]

> [!question] Spørsmål 
> Hva må til for at denne teknikken fungerer? Kunne $f$ hatt noen egenskaper som ødela algoritmen vår?

$f$ må være det vi kaller *kontinuerlig*.

> [!info] Kontinuitet, def 1.4.4+1.4.7
> La $f(x)$ være definert på et intervall $(a,b)$ og $c$ være et indre punkt i $(a,b)$. Da er $f$ *kontinuerlig* i $c$ hvis $$\lim_{x\longrightarrow  c}f(x) = f(c).$$
> Ellers er $f$ *diskontinuerlig* i $c$.
> 
>Vi sier at $f$ er kontinuerlig, hvis den er kontinuerlig i $D(f)$.

Intuitivt har kontinuerlige funksjoner følgende egenskaper

![[Files/shapes at 24-09-02 14.35.06.svg]]


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

