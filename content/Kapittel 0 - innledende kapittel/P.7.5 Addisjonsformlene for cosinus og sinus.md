---
{}
---
![[Kapittel 0 - innledende kapittel/Definisjoner og teoremer/Teo P.7.2 Addisjonsformlene|Teo P.7.2 Addisjonsformlene]]

I all hovedsak er det 1. og 2. som er viktige å kunne. De to andre kan da utledes ved hjelp av [disse identitetene](Kapittel%200%20-%20innledende%20kapittel/P.7.4%20Viktige%20identiteter.md)

> [!note] Argument 
> 

For å utlede formlene begynner vi med å se på $\cos(s-t)$. Det gjør vi ved å tegne vinkelen $s-t$ på to måter. Den ene der vi tenker på $s-t$ som ett enkelt tall (første figur under), og den andre som, først gå $s$ og deretter trekk fra $t$ (andre figur under).

![[Files/output.svg]]
![[Files/sirkel2addisjonsformler2.svg]]

På begge bildene over ser vi at den røde streken er like lang, fordi den skjærer av like stor sirkelbue. Målet er nå å regne ut lengden på den røde linjen på to måter. Denne vil gi oss en sammenheng vi skal utnytte.

VS: Vi bruker Pytagoras for å finne rød linje og får at korteste katet er $1-\cos(s-t)$ og lengste katet er $\sin(s-t)$. Pytagoras gir oss nå at $(1-\cos(s-t))^2+\sin^2(s-t) = (\text{rød linje}^2)$.

Forenkler vi dette får vi

$$
\begin{aligned} 
   & (1-\cos(s-t))^2+\sin^2(s-t)   \\
  \phantom{} \\
  =&1^2 -2\cos(s-t)+{\color{#fd8b89}\cos^2(s-t) + \sin^2(s-t)}   \\
  \phantom{} \\
 =& { 1 }-2\cos(s-t) + { {\color{#fd8b89}1} }  \\ =&{\color{#e599f7} 2-2\cos(s-t) }
\end{aligned} 
$$

Vi har altså at $({\color{#e03131} \text{rød linje} })^2 = {\color{#e599f7} 2-2\cos(s-t) }$

HS: Samme ide gir oss her at $(\cos(t)-\cos(s))^2 +(\sin(t)-\sin(s))^2 = (\text{rød linje})^2$. 

Forenkler vi dette får vi

$$
\begin{aligned} 
     &\phantom{=} (\cos(t)-\cos(s))^2 +(\sin(t)-\sin(s))^2   \\
  \phantom{} \\
   & = {\color{#ffc034}\cos^2(t)} -2\cos(t)\cos(t)+{\color{#40c057}\cos^2(s)} +{\color{#ffc034}\sin^2(t)}-2\sin(t)\sin(s) + {\color{#40c057}\sin^2(s)} \\
  \phantom{} \\
  &= { {\color{#ffc034}   1} } - 2(\cos(t)\cos(s)+\sin(t)\sin(s)) +{ {\color{#40c057} 1 } }
  \\ &= {\color{#4dabf7} { 2-2(\cos(t)\cos(s)+\sin(t)\sin(s)) } }
\end{aligned} 
$$

Vi har altså at $({\color{#e03131} \text{rød linje} })^2 = {\color{#4dabf7} 2-2(\cos(t)\cos(s)+\sin(t)\sin(s))}$

Sammenligner vi konklusjonene fra VS og HS over får vi at 
$$
\begin{aligned} 
 {\color{#e599f7} 2-2\cos(s-t) } & =  {\color{#4dabf7} { 2-2(\cos(t)\cos(s)+\sin(t)\sin(s)) } }  \\ \phantom{} \\ & \text{Trekk fra 2 og del på -2} \\  \phantom{} \\ \cos(s-t) &=\cos(t)\cos(s)+\sin(t)\sin(s).
\end{aligned} 
$$
$$

$$
Merk nå at (ved å bruke [[Kapittel 0 - innledende kapittel/P.7.4 Viktige identiteter|elementære identiteter]]) 
$$
\begin{aligned} 
  \cos(s+t) = \cos(s-(-t))  & = \cos(s)\cos(-t)+\sin(s)\sin(-t) \\ & = \cos(t)\cos(s)-\sin(s)\sin(t).
\end{aligned} 
$$

Siden $\cos\left( \frac{\pi}{2}-t \right) = \sin(t)$ har vi at
$$
\begin{aligned} 
  \sin(s+t) & = \cos\left( \frac{\pi}{2}-(s+t) \right) \\
   & = \cos\left( \left( \frac{\pi}{2}-s \right)-t \right) \\
   & = \cos \left( \frac{\pi}{2}-s \right)\cos(t)+\sin\left( \frac{\pi}{2}-s \right)\sin(t) \\
   & = \sin(s)\cos(t)+\cos(s)\sin(t).
\end{aligned} 
$$

Addisjonsformlene fører også til noen spesielle ved å la $s = t$, nemlig [[Kapittel 0 - innledende kapittel/P.7.6 Dobbeltvinkel-formlene|dobbeltvinkel-formlene]].