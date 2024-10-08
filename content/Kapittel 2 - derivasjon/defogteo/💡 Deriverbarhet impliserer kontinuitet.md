
> [!tip] Deriverbarhet impliserer kontinuitet
>  Hvis $f$ er deriverbar i $x$ så er $f$ kontinuerlig i $x$.



> [!note]- Argument 
> 
> At $f$ er deriverbar i $x$ betyr at
> $$
> \lim_{h \longrightarrow  0 } \frac{f(x+h) -f(x) }{h } = f'(x). 
> $$
> 
> Vi er nødt til å vise at 
> $$
> \lim_{h \longrightarrow  0 } f(x+h)-f(x) = 0. 
> $$
> 
> Ved å omforme $f(x+h)-f(x)$ til ${\color{red} \frac{f(x+h)-f(x) }{h } } {\color{green} h }$ kan vi nå bruke at grensene til både rød (den er $f'(x)$) og grønn eksisterer.  [[Kapittel 1 - grenser og kontinuitet/defogteo/💡 Grenseverdiregler|Fra punkt 3. i grenseverdireglene]] må grensen til produktet være $f'(x)\cdot 0 = 0$. Altså at
> $$
> \lim_{h \longrightarrow  0 } f(x+h)-f(x) = f'(x)\cdot0 =0. 
> $$
> Nøyaktig slik vi skulle vise.
