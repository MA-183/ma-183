> [!tip] Kvotientregelen, Teorem 5
> Hvis $f$ og $g$ er deriverbare i $x$ og hvis $g(x) \neq 0$, da er $\frac{f}{g}$ deriverbar i $x$ og
> $$\begin{aligned} \left( \frac{f}{g} \right)'(x) = \frac{g(x)f'(x) - f(x)g'(x) }{(g(x))^2 }   \end{aligned}$$ 	 


> [!note]- Argument 
> 
> Dersom vi først argumenterer for [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.4 Produktregelen|produktregelen]] og [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.4.6 Kjerneregelen|kjerneregelen]], så følger dette direkte.
> 
> Vi lar ${\color{#3cc15c} h(x) = (g(x))^{-1} = \frac{1}{g(x)} }$ og ser at $\left( \frac{f}{g} \right) = {\color{#e796f5} f }\cdot {\color{#3cc15c} h }$, og nå er det bare produktregelen som skal brukes
> 
>  Produktregelen sier at 
> $$
> ({\color{#e796f5} f }\cdot {\color{#3cc15c} h })' = {\color{#f46f22} f' }{\color{#3cc15c} h }+{\color{#e796f5} f }{\color{#5ca6f4} h' }.
> $$
> Det eneste problemet nå er at vi må avgjøre hva $h'(x)$ er. Hvis $u= g(x)$, så er $h(u) = u^{-1}$, så $\frac{dh}{du} = -u^{-2}$, og $\frac{du}{dx}=g'(x)$. [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.4.6 Kjerneregelen|Kjerneregelen]] gir nå at ${\color{#5ca6f4} h'(x) } = \frac{dh}{du}\frac{du}{dx}=g'(x)\cdot (-u^{-2}) ={\color{#5ca6f4} \frac{g'(x)}{g(x)^2} }$. 
> Vi får nå at 
> $$
> \begin{aligned} \left( \frac{f}{g} \right)'(x) =( {\color{#e796f5} f }\cdot {\color{#3cc15c} h })'  &= {\color{#f46f22} f'(x) }{\color{#3cc15c} h(x) }+{\color{#e796f5} f(x) }\cdot{\color{#5ca6f4}  h'(x) }   \\ &= {\color{#f46f22} f'(x) }{\color{#3cc15c} (g(x))^{-1} }+{\color{#e796f5} f(x) }\cdot{\color{#5ca6f4}  \frac{-g'(x) }{(g(x))^2 } } \\ &= \frac{f'(x) }{g(x) }-\frac{f(x)g'(x) }{(g(x))^2 } \\ &= \frac{f'(x)g(x) - f(x)g'(x) }{(g(x))^2. }    \end{aligned}
> $$ 
> 
> Vi kan altså merke oss at kvotientregelen strengt tatt er en overflødig regel. 

