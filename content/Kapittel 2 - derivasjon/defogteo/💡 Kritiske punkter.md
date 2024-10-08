> [!tip] Kritiske punkter
> Anta at $f$ er definert på et åpent interval $(a,b)$ og oppnår sitt maksimum (eller minimum) i et punkt $c$ i $(a,b)$ og $f'(c)$ eksisterer. 
> Da er $f'(c) = 0$.
> 


> [!note]- Argument 
> 
> Anta at $f$ har et maksimum i $c$. Da er $f(x)-f(c) \leq 0$, når $x$ er i $(a,b)$. 
> 
> La oss lage et geometrisk bilde av situasjonen først! Vi skal se på den deriverte ved hjelp av definisjonen. Med andre ord skal vi se på sekanter som går gjennom $c$ og et punkt nær $c$. Siden $c$ er et toppunkt må sekanter på venstre side av $c$ ha positiv stigning, og sekanter på høyre side av $c$ ha negativ stigning, slik figuren under viser. 
> 
> ![[Files/kristiskepunkt.svg]]
> 
> Siden antakelsen er at $f'(c)$ eksisterer har den ikke noe annet valg enn å måtte bli $0$. Vi skriver ideen ut
> 
> Når $x \ge c$ er
> $$
> \frac{f(x)-f(c) }{x-c } \leq 0.
> $$
> Det betyr at ${\color{#e796f5} f'(c) } = \lim_{x \longrightarrow c^+ } \frac{f(x) - f(c) }{x-c } {\color{#f46f22} \leq 0 }$.
> 
> Dersom $x\leq c$ så er 
> $$
> \frac{f(x)-f(c) }{x-c } \geq 0,
> $$
> Det betyr at ${\color{#e796f5} f'(c) } = \lim_{x \longrightarrow c^- } \frac{f(x) - f(c) }{x-c } {\color{#5ca6f4} \geq 0 }$.
> 
> Dermed må ${\color{#5ca6f4} 0 \leq } {\color{#e796f5} f'(c)  } {\color{#f46f22} \leq 0 }$. Med andre ord $f'(c) = 0$.

