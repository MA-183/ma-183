
> [!tip] Produktregelen, Teorem 3
> Hvis $f$ og $g$ er deriverbare i $x$, da er $f\cdot g$ også deriverbare i $x$ og 
> $$(fg)'(x) = f'(x)g(x)+f(x)+g'(x)$$ 


> [!info]- Argument 
> 
> $$
> \begin{aligned} 
> &(fg)'(x) = \lim_{h \longrightarrow 0 } \frac{f(x+h)g(x+h)-f(x)g(x) }{h }  
> \end{aligned} 
> $$
> Vi bruker nå et algebraisk triks, ved å legge til noe og trekke fra det samme (noen ganger kalt det eldste trikset i boka). Det gir
> $$
> \begin{aligned} 
> &= \lim_{h \longrightarrow  0 } \frac{{\color{#e796f5} f(x+h){\color{#5ca6f4} g(x+h) }-f(x){\color{#5ca6f4} g(x+h)  }} +f(x)g(x+h)-f(x)g(x) }{h }   \\
> &= \lim_{h\longrightarrow 0 }{\color{#5ca6f4} g(x+h) }{\color{#e796f5} \frac{f(x+h)-f(x) }{h }  } +f(x)\frac{g(x+h)-g(x) }{h } 
> \\
> &= g(x)f'(x) + g'(x)f(x).
> \end{aligned} 
> $$
>         
> Merk at vi her bruker at $g(x+h) \longrightarrow g(x)$ når $h \longrightarrow 0$ fordi $g$ er deriverbar, og derfor kontinuerlig, i $x$.
>         