
> [!tip] Produktregelen
> Hvis $f$ og $g$ er deriverbare i $x$, da er $f\cdot g$ også deriverbare i $x$ og 
> $$(fg)'(x) = f'(x)g(x)+f(x)+g'(x)$$ 

> [!info] Argument 

$$
\begin{aligned} 
  &(fg)'(x) = \lim_{h \longrightarrow 0 } \frac{f(x+h)g(x+h)-f(x)g(x) }{h }  
\end{aligned} 
$$
Vi bruker nå et algebraisk trikst, ved å legge til noe og trekke fra det samme (noen ganger kalt det eldste trikset i boka). Det gir
$$
\begin{aligned} 
  &= \lim_{h \longrightarrow  0 } \frac{{\color{cyan} f(x+h)g(x+h)-f(x)g(x+h) } +f(x)g(x+h)-f(x)g(x) }{h }   \\
  &= \lim_{h\longrightarrow 0 }{\color{cyan} g(x+h)\frac{f(x+h)-f(x) }{h }  } +f(x)\frac{g(x+h)-g(x) }{h } 
  \\
  &= g(x)f'(x) + g'(x)f(x).
\end{aligned} 
$$

Merk at vi her bruker at $g(x+h) \longrightarrow g(x)$ når $h \longrightarrow 0$ fordi $g$ er deriverbar, og derfor kontinuerlig, i $x$.

> [!question] Spørsmål 
> Hvordan kan vi finne $(x^2+1)(x^3+4)$ sin deriverte uten å løse opp parentesen?
> 

I eksempelet over kan vi bruke produktregelen. Vi får da at

$$
\begin{aligned} 
  \frac{d}{dx}(x^2+1)(x^3+4) '& = (x^2+1)'(x^3+4) + (x^2+1)(x^3+4)'  \\
  &= (2x)(x^3+4)+(x^2+1)(3x^2) \\
  &= 2x^4+8+3x^4+3x^2 \\
  &= 5x^4 +3x^2+8.
\end{aligned} 
$$

## Kvotientregelen

Vi kan nå også spørre oss hva
<br><br> <br><br> <br><br> <br><br> <br><br> <br><br> <br><br> <br><br> <br><br> <br><br> <br><br> <br><br> 