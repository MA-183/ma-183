> [!tip] Eksponentiell vekst 
> Hvis $a>0$ så er 
> 1. $\lim_{x\longrightarrow \infty}\frac{\ln(x)}{x^a} = 0$
> 2. $\lim_{x\longrightarrow \infty}\frac{x^a}{e^x} = 0$
> 3. $\lim_{x\longrightarrow 0+} x^a\ln(x) = 0$
> 4. $\lim_{x\longrightarrow -\infty}|x^a|e^x = 0$.

> [!note]- Argument 
> 
> > [!abstract] 1
> > 
> > Vi vet at [[Kapittel 3 - transendentale funksjoner/defogteo/Teo ln(x) vs x|den naturlige logaritmen vokser sakte]], som betyr at $\ln(x)< x$ for alle $x>0$. Ser vi på når $a>1$ så blir resultatet åpenbart fordi $\ln(x)<x < x^a$, så
> > $$
> > \begin{aligned} 
> > & \lim_{x\longrightarrow  \infty} \frac{\ln(x)}{x^a}  \\ = & \lim_{x\longrightarrow  \infty} \frac{x}{x^a} = \lim_{x\longrightarrow  \infty} \frac{1}{x^{a-1}} = 0.
> > \end{aligned} 
> > $$ 
> > 
> > Det er tilfellet når $0<a<1$ som er litt mer utfordrende, men er vi litt drevne med [[Kapittel 3 - transendentale funksjoner/defogteo/Teo Logaritmeregler|logaritmeregler]] kan vi enkelt trikse oss til noe slik som over. 
> > 
> > Merk at 
> > $$
> > \ln(x) = \ln((x^{a/2})^{2/a}) =\frac{2}{a}\ln(x^{a/2})<\frac{2}{a}x^{a/2}.
> > $$
> > Setter vi dette inn får vi
> > $$
> > \begin{aligned} 
> > & \lim_{x\longrightarrow  \infty} \frac{\ln(x)}{x^a}  \\ < & \lim_{x\longrightarrow  \infty} \frac{\frac{2}{a}x^{a/2}}{x^a} \\ = & \lim_{x\longrightarrow  \infty} \frac{2}{a}\frac{1}{x^{a-a/2}} = \lim_{x\longrightarrow  \infty} \frac{1}{a}\frac{1}{x^{a/2}} = 0.
> > \end{aligned} 
> > $$
> > Den siste grensa stemmer fordi $a>0$ som betyr at $\frac{a}{2}>0$ som betyr at $x^{a/2}\longrightarrow \infty$ når $x\longrightarrow \infty$.
> 
> 
> > [!abstract] 2
> > 
> > Merk at 
> > $$
> > \begin{aligned} 
> > \ln\left( \frac{x^a}{e^x} \right) & = a\ln (x)-x \\ & = a\ln(\sqrt{x}^2)-x \\ &= 2a\ln(\sqrt{x})-x \\ & < 2a\sqrt{x}-x \\ &= \sqrt{x}(2a-\sqrt{x}) \\ & \longrightarrow  [\infty \cdot (-\infty)] = -\infty.
> > \end{aligned} 
> > $$
> > Derfor må også 
> > $$
> > \begin{aligned} 
> > 0<\frac{x^a}{e^x} & = e^{\ln(x^a/e^x)} \\ & < e^{\sqrt{x}(2a-\sqrt{x})} \longrightarrow   [e^{-\infty}] = 0.
> > \end{aligned} 
> > $$



