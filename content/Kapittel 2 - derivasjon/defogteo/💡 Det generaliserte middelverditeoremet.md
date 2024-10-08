> [!tip] Det generaliserte mellomverditeoremet
> 
> Hvis funksjonene $f$ og $g$ begge er kontinuerlige på $[a,b]$ og deriverbare på $(a,b)$, og hvis $g'(x)\neq 0$ for alle $x$ i $(a,b)$, da eksisterer det et tall $c$ i $(a,b)$ slik at
> $$\frac{f(b)-f(a) }{g(b)-g(a) } = \frac{f'(c) }{g'(c) }.$$ 


> [!note]- Argument 
> Merk at $g(b)\neq g(a)$, ellers ville det vært et tall $x$ i $(a,b)$ slik at $g'(x)= 0$ fra [[Kapittel 2 - derivasjon/defogteo/💡 Middelverditeoremet|middelverditeoremet]]. Det betyr at enten er $g(x)\geq 0$ eller $g(x)\leq 0$ for alle $x$ i $[a,b]$ fra [[Kapittel 1 - grenser og kontinuitet/defogteo/💡 Skjæringssetningen|skjæringssetningen]]. Vi bruker derfor middelverditeoremet på
> $$
> h(x) = (f(b)-f(a))(g(x)-g(a))-(g(b)-g(a))(f(x)-f(a)).
> $$
> Siden $h(a) = 0 =h(b)$, så må det eksistere en $c$ i $(a,b)$ slik at $h'(c)=0$. Med andre ord er
> $$
> h'(c)=0 = (f(b)-f(a))g'(c)-(g(b)-g(a))f'(c).
> $$
> Det betyr også at
> $$
> \begin{aligned} 
> (f(b)-f(a))g'(c) & = (g(b)-g(a))f'(c) &&\bigg|: g'(c) \\ \phantom{} \\ (f(b)-f(a)) & = \frac{(g(b)-g(a))f'(c)}{g'(c)}  &&\bigg|(g(b)-g(a)) \\ \phantom{} \\ \frac{f(b)-f(a) }{g(b)-g(a) } & = \frac{f'(c) }{g'(c) }.
> \end{aligned} 
> $$

