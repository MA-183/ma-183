
> [!tip] Addisjonsformlene, Teorem 2
> 1. $\cos(s+t) =\cos(s)\cos(t)-\sin(s)\sin(t)$
> 2. $\sin(s+t) = \sin(s)\cos(t)+\cos(s)\sin(t)$
> 3. $\cos(s-t) = \cos(s)\cos(t)+\sin(s)\sin(t)$
> 4. $\sin(s-t)=\sin(s)\cos (t) - \cos(s)\sin(t)$

I all hovedsak er det 1. og 2. som er viktige å kunne. De to andre kan da utledes ved hjelp av [disse identitetene](P.7%20Trigonometri/Viktige%20identiteter.md)

> [!note] Argument 
> 

![](../Files/shapes%20at%2024-07-15%2013.18.41.svg)

På begge bildene over ser vi at den røde streken er like lang, fordi den skjærer av like stor sirkelbue. Målet er nå å regne ut lengden på den røde linjen på to måter. Denne vil gi oss en sammenheng vi skal utnytte.

VS: Vi bruker Pytagoras for å finne rød linje og får at korteste katet er $1-\cos(s-t)$ og lengste katet er $\sin(s-t)$. Pytagoras gir oss nå at $(1-\cos(s-t))^2+\sin^2(s-t) = \text{rød linje}$.

HS: Samme ide gir oss her at $(\cos(t)-\cos(s))^2 +(\sin(t)-\sin(s))^2 = \text{rød linje}$. 
 %%
Vi setter disse nå lik hverandre og utnytter at $\cos^2 (t)+ \sin^2(t) = 1$, som gir

$$
\begin{aligned} 
  (1-\cos(s-t))^2+\sin^2(s-t)  &= (\cos(t)-\cos(s))^2 +(\sin(t)-\sin(s))^2   \\
  \phantom{} \\
  1^2 -2\cos(s-t)+{\color{red}\cos^2(s-t) + \sin^2(s-t)} & = {\color{green}\cos^2(t)} -2\cos(t)\cos(t)+{\color{blue}\cos^2(s)} +{\color{}\sin^2(t)}-2\sin(t)\sin(s) + {\color{blue}\sin^2(s)} \\
  \phantom{} \\
  1-2\cos(s-t) + {\color{red}1} &= {\color{green}   1} - 2(\cos(t)\cos(s)+\sin(t)\sin(s)) +{\color{blue} 1 } & |-2\\
  \phantom{} \\
  \cos(s-t) & = (\cos(s)\cos(t)+\sin(t)\sin(s))
\end{aligned} 
$$

Merk nå at (ved å bruke [Viktige identiteter](P.7%20Trigonometri/Viktige%20identiteter.md)) $\cos(s+t) = \cos(s-(-t)) = \cos(s)\cos(-t)+\sin(s)\sin(-t) = \cos(t)\cos(s)-\sin(s)\sin(t)$. Og siden $\cos\left( \frac{\pi}{2}-t \right) = \sin(t)$ har vi at
$$
\begin{aligned} 
  \sin(s+t) & = \cos\left( \frac{\pi}{2}-(s+t) \right) \\
   & = \cos\left( \left( \frac{\pi}{2}-s \right)-t \right) \\
   & = \cos \left( \frac{\pi}{2}-s \right)\cos(t)+\sin\left( \frac{\pi}{2}-s \right)\sin(t) \\
   & = \sin(s)\cos(t)+\cos(s)\sin(t).
\end{aligned} 
$$
