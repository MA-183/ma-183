Kjerneregelen er på en måte en av de mest intuitive derivasjonsreglene vi har.

For å få den intuisjonen, la oss først se på $\cos(x)$ og $\cos(ax)$, der $a$ er en konstant. I rødt under, ser du $\cos(x)$. I sort farge ser du $\cos(3x)$. Som vi ser, så er $\cos(3x)$ tre ganger så rask som $\cos(x)$. Helt generelt vil $\cos(ax)$ være $a$ ganger så *rask* som $\cos (x)$. Trykk deg inn på grafen og undersøk litt selv. Det er viktig at du blir helt sikker på at dette stemmer!

<iframe src="https://www.desmos.com/calculator/u8vohp8lyi?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

En måte vi kan forstå dette på, er ved å tenke oss at funksjonen $ax$, strekker eller krymper tallinjen. Denne strekkingen gjør åpenbart også at funksjonen må stige eller synke like mye raskere (eller treigere) i hvert punkt også. Det må bety at $\cos(ax)' = a\cos(ax)'$. Selv om vi ikke har mulighet til å si hva $\cos(x)$ sin deriverte enda, kan vi være helt sikker på dette.

Faktisk kan vi helt generelt konkludere med at $f(ax)' = af'(ax)$.

Det er denne observasjonen vi skal utnytte. Anta nå at vi for eksempel skal se på $h(x) =\sqrt{x^2+1}.$ Vi vet hvordan vi deriverer $x^2+1$ og vi vet hvordan vi deriverer $\sqrt{x}$, men ikke komposisjonen. Det vi likevel vet er at veldig lokalt rundt $x$ så endrer $x^2+1$ seg med ca $(x^2+1)' =2x$. Det må bety at den strekker seg tallinja med en faktor på $2x$ rundt $x$. Vi vet også at $\sqrt{x}' = \frac{1}{2\sqrt{x}}$. 