> [!tip] Middelverditeoremet for integraler
>  Hvis $f$ er kontinuerlig på $[a,b]$, da eksisterer det et punkt $c$ i $[a,b]$ slik at
>  $$
>  \int_{a}^{b}f(x)dx = (b-a)f(c).
>  $$

> [!note]- Argument 
> Fra [[Kapittel 1 - grenser og kontinuitet/defogteo/💡 Skjæringssetningen|skjæringssetningen]] og [[Kapittel 1 - grenser og kontinuitet/defogteo/💡 Min-maks teoremet|min-maks teoremet]] vet vi at $f$ oppnår en minste verdi $f(q)=m$, og en høyeste verdi $f(p)=M$, og alle verdier mellom.
> Fra definisjonen av [[Kapittel 5 - integrasjon/defogteo/✍️ Øvre- og nedre Riemannsummer|øvre og nedre Riemannsummer]] kan vi også se at 
> $$
> f(q)(b-a) \leq L(f,P)
> $$  
> for alle partisjoner $P$. Spesielt må $f(q)(b-a) \leq \int_{a}^{b}f(x)dx$. Tilsvarende må $\int_{a}^{b}f(x)dx \leq f(p)(b-a)$. Deler vi begge ulikhetene på $(b-a)$ og setter de sammen får vi
> $$
> f(q) \leq \frac{1}{b-a}\int_{a}^{b}f(x)dx \leq f(p).
> $$
> Vi kan lese ulikheten over som at $\frac{1}{b-a}\int_{a}^{b}f(x)dx$ er en verdi mellom minimum- og maksimumsverdi til $f$ på $[a,b]$. Dermed må det eksistere $c$ der $f(c)$ oppnår denne verdien fra [[Kapittel 1 - grenser og kontinuitet/defogteo/💡 Skjæringssetningen|skjæringssetningen]].