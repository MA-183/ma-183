> [!tip] Logaritmeregler
> Hvis $x>0$, $y>0$ og $r$ er et rasjonalt tall så er 
> 1. $\ln(xy)= \ln(x)+\ln(y)$
> 2. $\ln\left( \frac{x}{y} \right) = \ln(x)-\ln(y)$
> 3. $\ln(x^r)=r\ln(x)$.

> [!note]- Argument 
> > [!abstract] 1
> > Definer $f(x) = \ln(xy)$ og anta $y$ er konstant. 
> >
> Ved å la $u = yx$ kan vi bruke [[Kapittel 2 - derivasjon/defogteo/💡 Kjerneregelen|kjerneregelen]] til å konkludere med at
> > $$
> > \frac{df}{dx} = y\cdot \frac{1}{yx} = \frac{1}{x}.
> > $$
> > Det betyr at $\ln(x)$ og $f(x)$ har samme deriverte. Vi vet at funksjoner som har lik derivert [[Kapittel 2 - derivasjon/defogteo/💡 Konstante funksjoner|skiller med en konstant]], derfor er 
> > $$
> > f(x)-\ln(x) = C.
> > $$
> > Spesielt er $c = \ln(1)+f(1) = 0+\ln(y) = \ln(y)$. Setter vi det inn igjen får vi
> > $$
> > f(x) = C+\ln(x) = \ln(y)+\ln(x),
> > $$
> > som vi skulle vise.
> 
> > [!abstract] 2
> > Vi begynner med å vise at $\ln\left( \frac{1}{x} \right) = -\ln(x)$. Igjen kan vi derivere $-\ln\left( \frac{1}{x} \right)$ og få, ved å sette $u = \frac{1}{x}$ at $\frac{d}{dx}\left( -\ln\left( \frac{1}{x} \right) \right) = \frac{1}{x}$. Dermed skiller funksjonene kun med en konstant, men vi vet at begge er lik $0$ når $x = 1$ så de er samme funksjon. Nå må vi bare kopiere argumentet fra 1.
> 
> > [!abstract] 3
> >  Vi ser igjen på $\frac{d}{dx}\ln(x^r)$ og bruker [[Kapittel 2 - derivasjon/defogteo/💡 Kjerneregelen|kjerneregelen]] med $u = x^r$ og får
> >  $$
> > r\cdot x^{r-1} \frac{1}{x^r} = r\cdot\frac{1}{x}.  
> > $$
> > Vi ser at argumentet gir at $r\ln(x)-\ln(x^r)=  C$. Setter vi inn $x=1$ får vi at $C=0$ og vi er i mål. 
