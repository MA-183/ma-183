> [!tip] Derivasjon av en invers funksjon
> Dersom $f$ er en funksjon med $f'(x)>0$ på $I$, da er
> $$\begin{aligned} \frac{d}{dx} f^{-1}(x) = \frac{1 }{f'(f^{-1}(x)) }   \end{aligned}$$  
> på $I$.

> [!note]- Argument 
> [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Kontinuitet av inverse funksjoner|Vi vet at]] $f^{-1}(x)$ er kontinuerlig og stigende. Ser vi på definisjonen av den deriverte kan vi skrive det slik
> $$
> \begin{aligned} 
> \lim_{z\longrightarrow   y} \frac{f^{-1}(z)-f^{-1}(y)}{z-y}.
> \end{aligned} 
> $$ 
> Vi kan merke oss at det eksisterer $x_z = f^{-1}(z)$ og $x = f^{-1}(x)$. Dermed er $z = f(x_z)$ og $y=f(x)$. Dermed står det
>  $$
> \begin{aligned} 
> & \lim_{z\longrightarrow   y} \frac{f^{-1}(z)-f^{-1}(y)}{z-y} \\
> & \lim_{z\longrightarrow  y} \frac{x_z-x}{f(x_z)-f(x)} \\
> & \lim_{z\longrightarrow  y} \frac{1}{\frac{f(x_z)-f(x)}{x_z-x}}.
> \end{aligned} 
> $$ 
> Siden $f^{-1}$ er kontinuerlig vet vi at når $z\longrightarrow y$ vil $f^{-1}(z) = x_z \longrightarrow f(y) = x$. Vi kan nå skrive om siste grense og få
> $$
>  \lim_{z\longrightarrow  y} \frac{1}{\frac{f(x_z)-f(x)}{x_z-x}} = \lim_{x_z\longrightarrow  x} \frac{1}{\frac{f(x_z)-f(x)}{x_z-x}} = \frac{1}{f'(x)} = \frac{1}{f'(f(y))}.
> $$
> Likheten i siste grense holder siden $f$ er deriverbar, kombinert med punkt 5. i [[Kapittel 1 - grenser og kontinuitet/defogteo/💡 Grenseverdiregler|grenseverdiregler]].

