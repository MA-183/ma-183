> [!tip] $\ln(x)$ vokser sakte.
> Hvis $x > 0$, da er $\ln(x) \leq x-1$.
> 

> [!note]- Argument 
> Ideen er ganske enkel. Hvis vi først legger merke til at $\ln(1) = 0$ og at $x-1$ i punktet $x=1$ også er $0$, vet vi at de er like der. 
> 
> Vi vet at $\frac{d}{dx}\ln(x) = \frac{1}{x}$, og før $1$ har $\ln(x)$ stigning større enn $x-1$, $\ln(x)$ stiger altså fortere før $x=1$ der de blir like. Det må jo bety at hvis de skal bli like i $x=1$ så må $\ln(x)$ være lavere frem til $1$.
> 
> Siden $\ln(x)$ har lavere stigning enn $1$ etter $x=1$ må den alltid vokse tregere enn $x-1$, så $x-1$ må også være større etter $x=1$, og vi er i mål. Rent symbols kan vi vise argumentet over slik.
> 
> 
> La $g(x) = \ln (x) - (x-1)$ for $x > 0$ og se at $g'(x) = \frac{1}{x}-1$.
> 
> Siden $g'(x) >0$ når $x< 1$ er funksjonen stigende. Kombinerer vi det med at $g(1)=0$, så er $g$ negativ for alle $x < 1$. Sagt med andre ord $g(x) = \ln(x)-(x-1)<0 \implies \ln(x) < x-1$.
> 
> Siden $g'(x) <0$ når $x>1$ er funksjonen synkende. Kombinerer vi det med at $g(1)= 0$ så må $g(x) = \ln(x)-(x-1)<0$ for alle $x>1$. Sagt med andre ord er $g(x) = \ln(x)-(x-1)<0 \implies \ln(x)<x-1$ for alle $x>1$.