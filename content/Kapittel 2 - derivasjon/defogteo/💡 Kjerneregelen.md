> [!tip] Kjerneregelen
> Dersom $f(u)$ er deriverbar i $u=g(x)$ og $g(x)$ er deriverbar i $x$, da er den sammensatte funksjonen $f\circ g (x) = f(g(x))$ deriverbar i $x$ og
> $$\begin{aligned} \frac{d}{dx} f(g(x)) = (f\circ g)'(x) = f'(g(x))g'(x).  \end{aligned}$$  


> [!note]- Bevis
> 
> Anta at $f$ er deriverbar i et punkt $u = g(a)$ og at $g$ er deriverbar i $a$. 
> 
> La $E(k)$ være definert ved 
> $$
> \begin{aligned} & E(0) = 0  \\ & E(k) = \frac{f(u+k)-f(u) }{k } -f'(u) && \text{hvis } k\neq 0.\end{aligned}
> $$
>
> Fra definisjonen av den deriverte er $\lim_{k \longrightarrow 0 } E(k) = f'(u)-f'(u) = 0 = E(0)$, så $E(k)$ er kontinuerlig i $k = 0$. I tillegg har vi at 
> $$
> \begin{aligned} f(u+k)-f(u) = (f'(u)+E(k))k  \end{aligned}
> $$ 
> La $k = g(a+h)-g(a)$, og husk at $u = g(a)$ slik at $u+k = g(a+h)$ og merk at vi får
> $$
> \begin{aligned} f(g(a+h)) - f(g(a)) &= (f'(g(a))+E(k))(g(a+h)-g(a)) \\ \phantom{} \\ &\text{eller at } \\  \phantom{} \\\frac{f(g(a+h)) - f(g(a))}{h} &= (f'(g(a))+E(k))\frac{(g(a+h)-g(a)) }{h}. \end{aligned}
> $$
> 
> Vi skal nå bruke noen [[Kapittel 1 - grenser og kontinuitet/defogteo/💡 Grenseverdiregler|grenseverdiregler]] til å si noe om grensen av høyre siden av likningen over når $h \longrightarrow  0$.
> 1. $g$ er deriverbar i $a$ er $\frac{k}{h} \longrightarrow g'(a)$ når $h\longrightarrow 0$ per definisjon
>     - I tillegg gir deriverbarhet i $a$ kontinuitet i $a$ så $k \longrightarrow 0$ når $h \longrightarrow  0$.
> 2. Siden $E(k) \longrightarrow 0$ når $k\longrightarrow 0$ og $k \longrightarrow  0$ når $h \longrightarrow 0$ så har vi at siden [[Kapittel 1 - grenser og kontinuitet/defogteo/💡 Komposisjoner av kontinuerlige funksjoner er kontinuerlig|komposisjoner av kontinuerlige funksjoner er kontinuerlig]] så vil $E(k) \longrightarrow  0$ når $h \longrightarrow  0$.
>
>Det gir oss at
>$$
>\begin{aligned} 
>   &\lim_{h\longrightarrow  0} \frac{f(g(a+h)) - f(g(a))}{h} \\ \phantom{} \\  = & \lim_{h\longrightarrow  0}\frac{(f'(g(a))+E(k))(g(a+h)-g(a)) }{h} \\ \phantom{} \\  = & \lim_{h\longrightarrow  0}{\color{#40c057} (f'(g(a))+E(k)) }{\color{#e599f7} \frac{(g(a+h)-g(a)) }{h} } \\ \phantom{} \\  = & {\color{#40c057} f'(g(a)) } \cdot \ {\color{#e599f7} g'(a) }.
> \end{aligned} 
> $$
> Merk at grønn er [[Kapittel 1 - grenser og kontinuitet/defogteo/💡 Grenseverdiregler|punkt 1]] kombinert med 2. over. At $\lim{\color{#40c057} \text{grønn} } \cdot {\color{#e599f7} \text{rosa} } = {\color{#40c057} \text{grønn} } \cdot {\color{#e599f7} \text{rosa} }$ er [[Kapittel 1 - grenser og kontinuitet/defogteo/💡 Grenseverdiregler|punkt 3]] kombinert med 1. over.

