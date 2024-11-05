> [!tip] Eksponentialregler
> Hvis $x$, $y$ er reelle tall, da er 
> $$
> \begin{aligned} 
> 1. \quad & e^{x+y} = e^x\cdot e^y \\
> 2. \quad & (e^x)^y = e^{x\cdot y} \\
> 3. \quad & e^{x-y} = \frac{e^x}{e^y}.
> \end{aligned} 
> $$

> [!note]- Argument 
> 
> > [!abstract] 1
> > Dette er nøyaktig det samme som for $\exp(x+y)$ som vi har argumentert for [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Eksponentialregler|her]]
> 
> > [!abstract] 2
>  Ser vi nå på $(e^x)^y$ så har vi fra [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Logaritmeregler|logaritmereglene]] at $\ln((e^x)^y) = y\ln(e^x) = y \cdot x$, der siste likhet bare bruker at $e^x$ og $\ln(x)$ er hverandres inverse funksjoner. Men hvis $\ln((e^x)^y) = y \cdot x$ betyr det at $(e^x)^y = e^{x\cdot y}$.
> 
> > [!abstract] 3
> > Vi får at 
> > $$
> > \ln(e^{x-y})= (x-y)\ln(e)= x\ln(e)-y\ln(e) = \ln(e^x)-\ln(e^y)= \ln\left( \frac{e^x}{e^y} \right).
> > $$
> > Nå kan vi bruke at $\ln$ er [[Kapittel 3 - Inverse funksjoner/defogteo/✍️ En-til-en funksjoner|en-til-en]] og konkludere med 3.



