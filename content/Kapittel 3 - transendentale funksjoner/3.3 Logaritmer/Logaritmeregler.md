---
draft: "true"
---

> [!tip] Regler
> La $a >0$ og $a\neq 0$ og la $x$ og $y$ være positive reelle tall. Da er
> 1. $log_a(1) = 0$
> 2. $\log_a(xy) = \log_a(x)+\log_a(y)$. 
> 3. $\log_a\left( \frac{1}{x} \right) = -\log_a(x)$
> 4. $\log_a\left( \frac{x}{y} \right) = \log_a(x)-\log_a(y)$
> 5. $\log_a(x^y)=y\log_a(x)$
> 6. $\log_a x = \frac{\log_b(x) }{\log_b(a) }$, dersom $b>0$ og $b\neq 1$.

> [!note] Argument 
> 

> [!abstract] 1
> 

Vi vet at $a^0 = 1$. Det betyr at $\log_a(a^0) = \log_a(1)$. Fra definisjonen av [logaritmer](Kapittel%203%20-%20transendentale%20funksjoner/3.3%20Logaritmer/Logaritmer.md) får vi at $\log_a(1) = 0$.

> [!abstract] 2
> 
 
Vi har at $a^{\log_a(xy)} = xy$ fra definisjonen av logaritmer. På samme måte får vi $a^{\log_a(x)+\log_a(y)} = a^{\log_a(x)}\cdot a^{\log_a(y)} = x\cdot y$. Det betyr at $a^{\log_a(x)+\log_a(y)} = a^{\log_a(xy)}$. Siden $a^x$ er en-til-en, betyr dette at ${\log_a(x)+\log_a(y)} = \log_a(xy)$.

> [!abstract] 3,4 og 5
> 

  3 og 4 følger fra 5, så vi begynner med den. Merk at $(a^x)^y = a^{xy}$. Så $x^y =(a^{\log_a(x)})^y = a^{y\log_a(x)}$, men $x^y$ er også lik $a^{\log_a(x^y)}$, som betyr at 
  $$a^{y\log_a(x)} = a^{\log_a(x^y)}.$$ Tar vi logaritmen på begge sider nå får vi $y\log_a(x) = \log_a(x^y)$ (altså bruker at $a^x$ har en invers).

For 4 kan vi bare se at $\frac{x}{y}=x\cdot y^{-1}$. Dermed må vi ha at $$\log_a\left( \frac{x}{y} \right)= \log_a(x\cdot y^{-1}) = \log_a(x)+\log_a(y^{-1})= \log_a(x)+(-1)\log_a(y)$$
Nå følger 3 som et resultat ved å la $y= -1$.