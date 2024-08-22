---
{}
---
![[Kapittel X - Definisjoner og teoremer/Teo P.7.2 Addisjonsformlene|Teo P.7.2 Addisjonsformlene]]

I all hovedsak er det 1. og 2. som er viktige å kunne. De to andre kan da utledes ved hjelp av [disse identitetene](Kapittel%200%20-%20innledende%20kapittel/P.7.4%20Viktige%20identiteter.md)

> [!note] Argument 
> 

![](Files/shapes%20at%2024-07-15%2013.18.41.svg)

På begge bildene over ser vi at den røde streken er like lang, fordi den skjærer av like stor sirkelbue. Målet er nå å regne ut lengden på den røde linjen på to måter. Denne vil gi oss en sammenheng vi skal utnytte.

VS: Vi bruker Pytagoras for å finne rød linje og får at korteste katet er $1-\cos(s-t)$ og lengste katet er $\sin(s-t)$. Pytagoras gir oss nå at $(1-\cos(s-t))^2+\sin^2(s-t) = \text{rød linje}$.

HS: Samme ide gir oss her at $(\cos(t)-\cos(s))^2 +(\sin(t)-\sin(s))^2 = \text{rød linje}$. 

Vi setter disse nå lik hverandre og utnytter at $\cos^2 (t)+ \sin^2(t) = 1$, som gir

$$
\begin{aligned} 
  (1-\cos(s-t))^2+\sin^2(s-t)  &= (\cos(t)-\cos(s))^2 +(\sin(t)-\sin(s))^2   \\
  \phantom{} \\
  1^2 -2\cos(s-t)+{\color{#fd8b89}\cos^2(s-t) + \sin^2(s-t)} & = {\color{#ffc034}\cos^2(t)} -2\cos(t)\cos(t)+{\color{#40c057}\cos^2(s)} +{\color{#ffc034}\sin^2(t)}-2\sin(t)\sin(s) + {\color{#40c057}\sin^2(s)} \\
  \phantom{} \\
  \cancel{ 1 }-2\cos(s-t) + \cancel{ {\color{#fd8b89}1} } &= \cancel{ {\color{#ffc034}   1} } - 2(\cos(t)\cos(s)+\sin(t)\sin(s)) +\cancel{ {\color{#40c057} 1 } } & |-2\\
  \phantom{} \\
  \cos(s-t) & = (\cos(s)\cos(t)+\sin(t)\sin(s)) 
\end{aligned} 
$$

Merk nå at (ved å bruke [P.7.4 Viktige identiteter](Kapittel%200%20-%20innledende%20kapittel/P.7.4%20Viktige%20identiteter.md)) $\cos(s+t) = \cos(s-(-t)) = \cos(s)\cos(-t)+\sin(s)\sin(-t) = \cos(t)\cos(s)-\sin(s)\sin(t).$

Siden $\cos\left( \frac{\pi}{2}-t \right) = \sin(t)$ har vi at
$$
\begin{aligned} 
  \sin(s+t) & = \cos\left( \frac{\pi}{2}-(s+t) \right) \\
   & = \cos\left( \left( \frac{\pi}{2}-s \right)-t \right) \\
   & = \cos \left( \frac{\pi}{2}-s \right)\cos(t)+\sin\left( \frac{\pi}{2}-s \right)\sin(t) \\
   & = \sin(s)\cos(t)+\cos(s)\sin(t).
\end{aligned} 
$$

Addisjonsformlene fører også til noen spesielle ved å la $s = t$, nemlig [dobbeltvinkel-formlene](Kapittel%200%20-%20innledende%20kapittel/P.7.6%20Dobbeltvinkel-formlene.md).