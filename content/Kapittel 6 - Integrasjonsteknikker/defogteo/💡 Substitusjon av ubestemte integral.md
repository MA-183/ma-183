> [!tip] Substitusjon av ubestemte integral
>  
>  Hvis $u = g(x)$ er en deriverbar funksjon med verdimengde $I$ og $f$ er kontinuerlig på $I$, da er 
>   $$
>   \begin{aligned} 
>   \int f(g(x))g'(x)dx = \int f(u) du    
>   \end{aligned}
> $$ 

> [!note]- Argument 
> Fra [[Kapittel 5 - integrasjon/defogteo/💡 Analysens fundamentalteorem|analysens fundamentalteorem]] er  $F(x) = \int_{a}^{x}f(t)dt$ en antiderivert til $f$. Det vil si at det eksisterer en antiderivert til $f$ på $I$. Spesielt kan vi si at $F'(t) = f(t)$. Kombinerer vi dette med [[Kapittel 2 - derivasjon/defogteo/💡 Kjerneregelen|kjerneregelen]] får vi at
> $$
> \frac{d}{dx}  F(g(x)) = F'(g(x))g'(x) = f(g(x))g'(x).
> $$
> Nå ser vi at vi har 
> $$
> \begin{aligned} 
>   \int f(g(x))g'(x) dx & = \int \frac{d}{dx} F(g(x)) dx  = F(g(x))+C = F(u) +C= \int f(u)du.
>   \end{aligned} 
> $$


