> [!tip] Substitusjon av bestemte integral, teorem 5.6.6
>  
>   Anta at $g$ er en deriverbar funksjon på $[a,b]$ og at $g(a) = A$ og $g(b) =B$. Anta også at $f$ er kontinuerlig i verdimengden til $g$. Da
>   $$\begin{aligned} \int_{a }^{b }f(g(x))g'(x)dx = \int_{A }^{B }f(u)du    \end{aligned}$$ 

> [!note] Argument 
> 

La $F$ være en antiderivert til $f$, altså at $F'(u) = f(u)$. Da har vi fra [kjerneregelen](Kapittel%202%20-%20derivasjon/2.1%20Derivasjon/Kjerneregelen.md) at
$$
\frac{d}{dx}  F(g(x)) = F'(g(x))g'(x) = f(g(x))g'(x).
$$
Fra [analysens fundamentalteorem](Kapittel%205%20-%20integrasjon/Analysens%20fundamentalteorem.md) får vi
$$
\begin{aligned} 
  \int_{a }^{b } f(g(x))g'(x) dx & = F(g(x))\Bigg\rvert_{a}^b = F(g(b)) - F(g(a)) \\ &= F(B)-F(A) = F(u)\Bigg\rvert_A^B = \int_{A }^{B }f(u)du. 
\end{aligned} 
$$
