---
{}
---
Som vi ser på illustrasjonen under, kan vi sette sammen funksjoner ved først å bruke en funksjon $f$, og deretter sende resultatet fra $f(x)$ inn i en ny funksjon $g$. Resultatet blir at $g$ får inn verdien $f(x)$, vi får altså $g(f(x))$.
![Komposisjoner](Files/komposisjoner.svg)

Tenker vi for eksempel på funksjonen $f(x) = x-1$ og $g(x) = x^2$
$x \overset{ -1 }{\longrightarrow  } x-1 \overset{ (\quad )^2 }{\longrightarrow  } (x-1)^2$

Dette noteres ofte som $(g\ \circ f)(x)$, som er lik $g(f(x))$. Vi har sett over at $(g\ \circ f)(x) = g(f(x)) = g(x-1) = (x-1)^2$. 

> [!warning] Merk  
>  
> $f\ \circ g$ er ikke det samme som $g \ \circ f$. 

Dette kan vi enkelt bekrefte ved å undersøke nærmere.
$(f\ \circ g)(x) = f(g(x)) = f(x^2) = x^2-1$.

![[Kapittel 0 - innledende kapittel/Definisjoner og teoremer/Def P.5.4 Komposisjoner av funksjoner|Def P.5.4 Komposisjoner av funksjoner]]


#### Flere eksempler

Hvis $h(x) = \sqrt{x+1}$, så kan vi tenke oss at vi "ser" to funksjoner. Den ene er rotfunksjonen. La oss kalle den $g(x)=\sqrt x$. Den andre er den som legges til 1, altså $f(x) = x+1$. Vi får nå at 
$$
x \overset{ +1 }{\longrightarrow  } x+1 \overset{ \sqrt{\quad} }{\longrightarrow  } \sqrt{x+1}
$$
Vi kan derfor skrive $h$ som en komposisjon av $f$ og $g$ slik:
$$
h(x) = g(f(x))  = (g\ \circ f)(x).
$$

Kan vi nå si noe om definisjonsområdet til $t$? Jo, vi ser at $\sqrt x$ må få positive verdier, altså at $x\geq 0$. For $\sqrt{x+1}$ så må jo $x+1 \geq 0$, det gir
$$
\begin{aligned} 
  x+1& \geq 0 \\
  x+1-1 &\geq 0-1 \\
  x & \geq -1.
\end{aligned} 
$$
Definisjonsområdet blir da $D(h) = [-1,\infty).$

Hvis vi tar $t(x) = \frac{1}{x-1}$. Hvordan kan vi bryte denne funksjonen ned til en komposisjon av enklere funksjoner?

Jo, vi ser at
$$
x \longrightarrow x-1 \longrightarrow \frac{1}{x-1}.
$$
Det første som skjer, er at vi trekker fra 1. Deretter deler vi 1 på det vi har. Vi har at $t(x) = F(G(x))$, der $G(x)  = x-1$ og $F(x) = \frac{1}{x}$. 

En tredje måte å lage nye funksjoner på er ved å *klippe og lime* sammen flere forskjellige funksjoner. De kaller vi [P.5.3 Stykkevis definerte funksjoner](Kapittel%200%20-%20innledende%20kapittel/P.5.3%20Stykkevis%20definerte%20funksjoner.md)