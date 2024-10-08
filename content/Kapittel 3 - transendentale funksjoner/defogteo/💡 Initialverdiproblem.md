> [!tip] Initialverdiproblem
> Dersom en funksjon $f(x)$ vokser proporsjonalt til sin verdi. Det vil si at $\frac{df}{dx}= kf$, der $k\in\mathbb{R}$ og $f(0) = y_0$ da har funksjonen den unike løsningen 
> $$
> f(x) = y_0 e^{kx}.
> $$ 


> [!note]- Argument 
> Vi ser først på hva $\frac{df}{dx}= f'(x)=kf$ forteller oss. Vi vet at [[Kapittel 2 - derivasjon/defogteo/💡 Konstante funksjoner|funksjoner er konstante]] dersom de har derivert lik 0 overalt. Det betyr også at hvis resultatet skal stemme, så må $\frac{f(x)}{e^{kx}}$ være en konstant. La oss argumentere for det
> 
> Vi bruker [[Kapittel 2 - derivasjon/defogteo/💡 Kjerneregelen|kjerneregelen]] på
> $$
> \begin{aligned} 
> \frac{d}{dx} \left( \frac{f(x)}{e^{kx}} \right) & = \frac{f'(x)e^{kx}- f(x)ke^{kx}}{e^{2kx}} \\ &= \frac{kf(x) e^{kx}- f(x)k^{kx}}{e^{2kx}} = 0.  
> \end{aligned} 
> $$
> Dermed er $\frac{f(x)}{e^{kx}}=C$ der $C$ er en konstant, altså er $f(x) = Ce^{kx}$. Initialverdibetingelsen $f(0)=y_0 = C e^{0}=C$ gir nå at $y_0 = C$ og vi er i mål.