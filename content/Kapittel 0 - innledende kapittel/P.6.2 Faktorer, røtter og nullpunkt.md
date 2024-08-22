---
{}
---
Se på $\displaystyle \frac{x^2-x}{x-1} =\frac{x\cancel{ (x-1) }}{\cancel{ x-1 }} \overset{ {\color{grey} \text{når } x\neq 1 } }{=  } x$.

Ser vi på eksempelet over, så kan vi se at hvis $x = 5$ så står det $\frac{5^2-5 }{4 } = \frac{20}{4}$ altså et helt vanlig delestykke. Det vi gjorde over viste oss at svaret blir $5$. Det vi skal legge merke til er at når vi setter inn en verdi for $x$ får vi et vanlig delestykke. Da går det an å stille seg spørsmålet. Kan vi utføre divisjonen før vi setter inn en verdi for $x$? Eller med andre ord, kan vi utføre divisjonen for alle $x$'er samtidig? Svaret er ja, og vi kaller dette polynomdivisjon.

Vi kan dele polynomer på hverandre hvis "grad oppe" > "grad nede".

![](/Files/polydivi.svg)

![Teorem - P.6.0 divisjonsalgoritmen](Kapittel%20X%20-%20Definisjoner%20og%20teoremer/Teorem%20-%20P.6.0%20divisjonsalgoritmen.md)

> [!warning] Merk  
>  
Vi sier at $B(x)$ er en faktor i $A(x)$ hvis $R(x) = 0$ (altså at vi har 0 i rest etter divisjon).

Hvis vi har at $A(r) = 0$ for en verdi $r$, kaller vi $r$ en rot av $A$. For eksempel ser vi at $3$ er en rot av $P(x)= x^2-6x+9$ fordi $P(3) = 3^2-6\cdot3+9 = 9 -18+9 = 0$.

![Teorem - P.6.1 Faktorteoremet](Kapittel%20X%20-%20Definisjoner%20og%20teoremer/Teorem%20-%20P.6.1%20Faktorteoremet.md)

> [!warning] Merk 
> 

Dette er et nyttig teorem, men det er kanskje ikke åpenbart hvorfor. La oss se hvorfor før vi argumenterer for at teoremet stemmer. Tenk deg at du ønsker å finne nullpunktene til $f(x)=x^3-4x^2+3$. Det er ikke helt åpenbart hvordan man skal gå frem, men siden $f(1) = 1-4+3 = 0$ betyr det at $x-1$ er en faktor. 

Hvis vi utfører polynomdivisjon, får vi $f(x)=Q(x)(x-1)=(x^2-3x-3)(x-1)$. 

Siden vi har kontroll på andregradspolynomer finner vi enkelt de siste nullpunktene herfra.

La oss nå argumentere for teoremet.

> [!note] Argument 
> 

Siden $x-r$ er av grad $1$, så vil divisjonsalgoritmen gi at vi får en rest $R_k$ som har grad 0, altså bare et tall.

Så $\displaystyle\frac{P(x)}{x-r} = Q(x)+\frac{c}{x-r}.$ Gang gjennom med $x-r$ på begge sider.
$$
P(x) = Q(x)(x-r)+ c
$$ 
Setter vi inn $r$ får vi
$$
P(r) = Q(r)(0) + c = c.
$$

 Altså at $P(r) = c$. 

Det må bety at $P(r) = 0$ nøyaktig når $c = 0$, altså når resten $R(x) = 0$.

Andregradsfunksjoner dukker også typisk opp i arbeid med polynomer. Derfor bør vi ha kontroll over hvordan vi finner røttene til de, noe vi kan se her [P.6.3 Andregradsfunksjoner og abc-formelen](Kapittel%200%20-%20innledende%20kapittel/P.6.3%20Andregradsfunksjoner%20og%20abc-formelen.md)