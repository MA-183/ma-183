> [!tip] Stigende og synkende funksjoner
>   La $J$ være et åpent intervall, og la $I$ være et intervall som består av alle punktene i $J$ (potensielt inkludert endepunktene i $J$). Anta at $f$ er kontinuerlig på $I$ og deriverbar på $J$.
>   a. Hvis $f'(x) > 0$ for alle $x$ i $J$, så er $f$ stigende på $I$.
>   b. Hvis $f'(x) < 0$ for alle $x$ i $J$, så er $f$ synkende på $I$.
>   c. Hvis $f'(x) \geq 0$ for alle $x$ i $J$, da er $f$ ikke-synkende på $I$.
>   d. Hvis $f'(x) \leq 0$ for alle $x$ i $J$, da er $f$ ikke-stigende på $I$.


> [!note]- Argument 
> 
> La $x_1$ og $x_2$ være punkter i $I$ med $x_2 > x_1$. Fra [[Kapittel 2 - derivasjon/defogteo/💡 Middelverditeoremet|middelverditeoremet]] vet vi at det eksisterer et punkt $c$ i $(x_1, x_2)$ (og derfor i $J$) slik at 
> $$
> \frac{f(x_2)-f(x_1) }{x_2-x_1 }  = f'(c).
> $$
> Litt omstokking gir $f(x_2) - f(x_1) = (x_2-x_1)f'(c)$. Siden $x_2-x_1>0$, har $f(x_2)-f(x_1)$ samme fortegn som $f'(c)$. 
> 
> Det er nå klart at hvis $f'(x)$ har samme fortegn på hele intervallet, så må også resultatet følge. 
> 