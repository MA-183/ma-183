> [!tip] Middelverditeoremet, Teorem 11
> Anta at en funksjon $f$ er kontinuerlig på et lukket, endelig intervall $[a,b]$ og at $f$ er deriverbar på det åpne intervallet $(a,b)$. Da eksisterer det et punkt $c$ i $(a,b)$, slik at 
> $$\frac{f(b)-f(a) }{b-a } = f'(c).$$


For å bevise dette bruker vi et spesialtilfelle der $f(a) = f(b)$, som kalles [[Kapittel 2 - derivasjon/defogteo/Teo 2.8.15 Rolles teorem|Rolles teorem]].

> [!note]- Argument 
> 
> Vi ønsker å vise at det finnes et punkt på $f$ som har samme stigning som gjennomsnittsstigningen mellom $a$ og $b$.
> 
> ![[Files/middelverditeorem.svg]]
> 
> Ser på vi på grafen over kan vi tenke oss at vi kan lage funksjonen som viser *avstanden* mellom den lineære funksjonen som går gjennom $f(a)$ og $f(b)$. Den funksjonen uttrykkes slik
> 
> $$
> \begin{aligned}   g(x)  &= f(x)-\frac{f(b)-f(a) }{b-a }(x-a)+f(a) \end{aligned} 
> $$
> 
> Den ser ut som grafen i gult under.
> 
> ![[Files/middelveriteoremet.svg|400]]
> 
> Ideen er at [Rolles teorem](Kapittel%202%20-%20derivasjon/2.8.3.2%20Rolles%20teorem.md) teorem forteller oss at funksjonen $g$ har et punkt $c$ der $g'(c) = 0$. Det er denne $c$-en som også bør være punktet vi er på jakt etter for $f$. Vi kan også se at det er tilfellet når vi kikker på de stiplede linjene over.
> 
> For å bekrefte det så deriverer vi $g$ og får
> $$
> g'(x)=f'(x)- \frac{f(b)-f(a) }{b-a }.
> $$
> Spesielt får vi at hvis $g'(c) = 0$ så er 
> $$
> g'(c) = f'(c)-\frac{f(b)-f(a) }{b-a }=0.
> $$
> Som betyr at $f'(c) = \frac{f(b)-f(a) }{b-a }$ akkurat som forventet.

