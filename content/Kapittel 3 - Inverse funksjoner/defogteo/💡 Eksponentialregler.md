> [!tip] Eksponentialregler
> Hvis $x$ og $y$ er reelle tall, da er 
> $$
> \exp(x+y) = \exp(x)\cdot\exp(y).
> $$
> Hvis $r$ er et rasjonalt tall har vi
> $$
> \exp(r\cdot x) = \exp(x)^r.
> $$

> [!note]- Argument 
> La ${\color{#f46f22} a = \exp(x) }$ og ${\color{#5ca6f4} b=\exp(y) }$. da er $x =\ln(a)$ og $y=\ln(b)$ siden $\exp$ er $\ln$ sin [[Kapittel 3 - Inverse funksjoner/defogteo/✍️ Inverse funksjoner|inverse funksjon]]. Vi vet fra [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Logaritmeregler for den naturlige logaritme|logaritmereglene]] at 
> $$
> x+y = \ln(a)+\ln(b) = \ln(a\cdot b).
> $$
> Ved å ty til definisjonen av inversfunksjoner igjen må det bety at 
> $$
> \exp(x+y) = {\color{#f46f22} a }\cdot {\color{#5ca6f4} b } = {\color{#f46f22} \exp(x) } \cdot {\color{#5ca6f4} \exp(y) }.
> $$
> 
> Ser vi nå på $\exp(x)^r$ så har vi fra [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Logaritmeregler for den naturlige logaritme|logaritmeregler]] at $\ln(\exp(x)^r) = r\ln(\exp(x)) = r \cdot x$, der siste likhet bare bruker at $\exp$ og $\ln$ er hverandres inverse funksjoner. Men hvis $\ln(\exp(x)^r) = r \cdot x$ betyr det at $\exp(x)^r = \exp(r\cdot x)$ ved å ta $\exp$ av hver side og ty definisjonen av inversfunksjoner igjen. 



