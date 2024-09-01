---
draft: "true"
---
Husk NOA

- bruke og argumentere for $abc$-formelen for andregradslikninger
- definere vinkelmålet radianer og veksle mellom radianer og grader (Definisjon 7, s. 46).
- definere $\sin$ og $\cos$ geometrisk for rettvinklede trekanter (s. 46).
- definere $\sin$ og $\cos$ ved hjelp av enhetssirkelen (Definisjon 8, s. 47).
- forklare hvorfor den geometriske definisjonen for $\sin$ og $\cos$ er kompatibel med definisjonen ved hjelp av enhetssirkelen.
- bruke og argumentere (ved hjelp av enhetssirkelen) for identitetene på s. 48–49.
- bruke verdiene for $\sin$ og $\cos$ i tabell 5, s. 50.
- bruke og utlede addisjonsformlene for $\sin$ og $\cos$ (Teorem 2, s. 51 + de lilla boksene på s. 52).
- definere $\tan$ ved hjelp av $\sin$ og $\cos$ (Definisjon 9, s. 53).

## abc-formelen

![](Files/shapes%20at%2024-08-13%2014.01.37.svg)
## Trigonometri

Trigonon (trekanter) metric (måling), gir opphav til trigonometri, altså måling av trekanter. Selv om utgangspunktet for trigonometri er trekanter så finnes det også en side av trekanter som er fra et sirkelperspektiv. Det er nyttig å ha kontroll på *begge* perspektivene!

> [!question] Spørsmål 
> Hva er en vinkel? Hvordan skal vi måle en vinkel?

> [!info] Grader
> Del sirkelen i 360 sektorer, vi kaller en sektor en grad.
> 

> [!info] Radianer, definisjon P.7.1
> En vinkel $t$ målt i radianer er en buelengde som er $t$ lang i en sirkel med radius 1.    
> ![undefined](Files/shapes%20at%2024-08-14%2014.09.51.svg)
> Vinkelen over er $t$ radianer (fordi buelengden er $t$). 
>
>(formelt er $t\text{ radianer} =\frac{\text{buelengde} }{\text{radius} }$)

Det betyr at $2\pi$ radianer er $360^\circ$. Det vil si $\pi$ er 180 grader.

Veien om 1 gir:
$1$ radian er $\frac{360^\circ}{2\pi}$.
$1^\circ$ er $\frac{2\pi}{360}$.


| Grader   | 0   | 30              | 45              | 60              | 90              | 120              | ... |
| -------- | --- | --------------- | --------------- | --------------- | --------------- | ---------------- | --- |
| Radianer | 0   | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $\frac{2\pi}{3}$ |     |


## Trigonometri

![undefined](Files/Pasted%20image%2020240815142926.png)
> [!tip] Cosinus og sinus
> Se figur:
>  $C$ er punkt på enhetssirkelen
>  $\alpha$ er vinkelen danna fra $C$ og x-aksen (også det samme som å spasere fra (1,0) og $\alpha$ radianer langs sirkelen).
> Da er
>  $$C = (\cos( \alpha),\sin(\alpha)).$$
>  Dvs
> -  $\cos(\alpha)$ er x-verdi til $C$
>  - $\sin(\alpha)$ er y-verdi til $C$.

> [!question] Spørsmål 
>   Hva er $\cos (t)$ når $t$ er
>   1. $\frac{\pi}{4}$ (45 grader).
>   2. $\frac{\pi}{3}$ (60 grader).
>   3. $\frac{\pi}{2}$
>   4. $\pi$.

![undefined](Files/shapes%20at%2024-08-15%2014.50.05.svg)

1 og 2 ser vi over. Kikker vi i enhetssirkelen ser vi at
$$
\cos\left( \frac{\pi}{2} \right) = 0, \quad \sin\left( \frac{\pi}{2} \right)= 1.
$$
og
$$
\cos (\pi) = -1,\quad\quad \sin(\pi)=0.
$$

| Grader     | 0                                       | 30                                                  | 45                                                     | 60                                                     | 90                                    | 120                    | ... |
| ---------- | --------------------------------------- | --------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------- | ---------------------- | --- |
| Radianer   | 0                                       | $\frac{\pi}{6}$                                     | $\frac{\pi}{4}$                                        | $\frac{\pi}{3}$                                        | $\frac{\pi}{2}$                       | $\frac{2\pi}{3}$       |     |
| $\sin (t)$ | 0<br><br><br>$\frac{\sqrt{0} }{2 }$<br> | $\frac{1}{2}$<br><br><br>$\frac{\sqrt{1} }{2 }$<br> | $\frac{\sqrt{2}}{2}$<br><br><br>$\frac{\sqrt{2} }{2 }$ | $\frac{\sqrt{3}}{2}$<br><br><br>$\frac{\sqrt{3} }{2 }$ | $1$<br><br><br>$\frac{\sqrt{4} }{2 }$ | $\frac{\sqrt{3} }{2 }$ |     |
| $\cos (t)$ | 1                                       | $\frac{\sqrt{3} }{2 }$                              | $\frac{\sqrt{2} }{ 2}$                                 | $\frac{1}{2}$                                          | $0$                                   | $-\frac{1 }{2 }$       |     |

> [!question] Spørsmål 
> Hva er $\sin\left( \frac{11\pi}{6} \right)$?  

## Geometrisk definisjon
Geometrisk har vi


![undefined](Files/shapes%20at%2024-08-15%2015.07.07.svg)

## Identiteter

Først $x^2+y^2 =1$

![undefined](Files/shapes%20at%2024-08-15%2015.24.31%201.svg)

Vi har altså

> [!info] Identiteter 
>  1. $\cos^2(t)+\sin^2(t) = 1$
>  2. $\cos(t+2\pi) = \cos (t)$ og $\sin(t+2\pi) = \sin (t)$
>  3. $\cos(\pi-t) = -\cos (t)$ og $\sin(\pi-t)=\sin (t)$.
>  4. $\cos(-t)=\cos (t)$ og $\sin(-t)=-\sin (t)$.
>  5. $\cos\left( \frac{\pi}{2}-t \right)= \sin (t)$ og $\sin\left( \frac{\pi}{2}-t \right)=\cos(t)$.


### Addisjonsformlene

![](Files/shapes%20at%2024-07-15%2013.18.41.svg)![undefined](Files/shapes%20at%2024-08-16%2012.39.21.svg)

Vi har altså at 

> [!info] Addisjonsformlene
> $\cos(s-t)=\cos (t)\cos (s)+\sin (t)\sin (s)$.
>  
>  

> [!question] Spørsmål 
> Hva er
> 1. $\cos(s+t)$? Hint, bruk at $s+t = s-(-t)$
> 2. $\sin(s-t)$? Hint, bruk $\cos\left( \frac{\pi}{2}-x \right) = \sin(x)$
> 3. $\sin(s+t)$?
> 4. $\cos(t+t)$?
> 5. $\sin(t+t)$?

> [!abstract]  1
> 

Vi får

$$
\begin{aligned} 
  \cos(s+t) = \cos(s-(-t)) & = \cos (s)\cos(-t)+\sin (s)\sin(-t) \\ &=\cos (s)\cos (t)+\sin (s)(-\sin (t)) \\&=\cos (s)\cos (t)-\sin (s)\sin (t).
\end{aligned} 
$$

> [!abstract]  2
> 

$$
\begin{aligned} 
  \sin(s-t) & = \cos\left( \frac{\pi}{2}-(s-t) \right)  = \cos\left( \left( \frac{\pi}{2}-s \right)+t \right) \\ &= \cos\left( \frac{\pi}{2}-s \right)\cos (t)-\sin\left( \frac{\pi}{2}-s \right)\sin (t) \\ &= \sin(s)\cos (t)-\cos (s)\sin (t).
\end{aligned} 
$$

## Grafer

![undefined](Files/shapes%20at%2024-08-16%2013.33.12.svg)








