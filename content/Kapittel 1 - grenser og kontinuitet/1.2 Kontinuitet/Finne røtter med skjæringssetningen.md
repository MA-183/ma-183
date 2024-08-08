---
draft: "true"
---

Fra skjæringssetningen vet vi at hvis en funksjon $f$ er kontinuerlig og positiv i $a$ og negativ i $b$, så må den være lik $0$ mellom $a$ og $b$. Det er fordi skjæringssetningen sier at $f$ oppnår alle sine verdier mellom $f(a)$ og $f(b)$.

Vi kan nå bruke dette til å *estimere* hvor $f$ har et nullpunkt. 

> [!info]+ Eksempel 
> Bruk skjæringssetningen til å estimere et nullpunkt for $f(x) = \cos (x)-x$.
> 

Hvis vi undersøker midtpunktet $\frac{\pi}{4}$ får vi $f\left( \frac{\pi}{4} \right) = \cos\left( \frac{\pi}{4} \right)-\frac{\pi}{4} = \frac{\sqrt2}{2}-\frac{\pi}{4} \approx -0.078$, altså negativt. Det kan vi nå bruke til å konkludere med at nullpunktet må ligge mellom $0$ og $\frac{\pi}{4}$. Vi kan derfor teste $\frac{\pi}{8}$, noe som gir $f\left( \frac{\pi}{8} \right) \approx 0.53$. Nullpunktet vårt må altså ligge mellom $\frac{\pi}{4}$ og $\frac{\pi}{8}$. Denne prosessen kan vi fortsette så lenge vi vil (men det blir ganske drøyt å gjøre for hånd).

La oss la Python gjøre jobben. 

```python
from math import cos, pi
a = 0
b = pi/2

def f(x):
    return cos(x)-x

for i in range(50):
    # finn midtpunktet mellom a og b
    c = (a+b)/2
    # finn ut om det har samme fortegn som f(a) eller f(b). 
    # Hvis f(a)f(c) > 0 så har begge samme fortegn. Vi ønsker da å bytte ut a med c. 
    if f(a)*f(c) > 0:
        a = c
    # Hvis ikke har f(b) og f(c) samme fortegn og vi ønsker å bytte b med c
    else:
        b = c
    print(f"Verdiene er nå {f(a):.20f} og {f(b):.20f}")
```
