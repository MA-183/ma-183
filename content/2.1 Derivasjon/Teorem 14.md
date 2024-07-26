> [!tip] Anta at $f$ er definert på et åpent interval $(a,b)$ og oppnår sitt maksimum (eller minimum) i et punkt $c$ i $(a,b)$ og $f'(c)$ eksisterer. 
> Da er $f'(c) = 0$.
> 

> [!note] Argument 
> 

Anta at $f$ har et maksimum i $c$. Da er $f(x)-f(c) \leq 0$, når $x$ er i $(a,b)$. Derfor er
$$
\frac{f(x)-f(c) }{x-c } \leq 0,
$$
når $x \ge c$. Det betyr at $f'(c) = \lim_{x \longrightarrow c^+ } \frac{f(x) - f(c) }{x-c } \leq 0$.
Dersom $x\leq c$ så er 
$$
\frac{f(x)-f(c) }{x-c } \geq 0,
$$
Det betyr at $f'(c) = \lim_{x \longrightarrow c^- } \frac{f(x) - f(c) }{x-c } \geq 0$.

Dermed må $f'(c) = 0$.