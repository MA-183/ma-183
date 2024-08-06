> [!tip]+ Skjæringssetningen, teorem 1.4.9
> Hvis $f(x)$ er kontinuerlig på intervallet $\left[ a,b \right]$ og hvis $s$ er et tall mellom $f(a)$ og $f(b)$, da eksisterer det et tall $c$ i $[a,b]$ slik at $f(c) = s$.
> Helt spesielt så betyr dette at en kontinuerlig funksjon på et lukket intervall oppnår alle verdiene mellom sin minimumsverdi, $m$, og sin maksimumsverdi, $M$. 

> [!info]+ Eksempel
> Avgjør intervallene der $x^3-4x$ er positiv og negativ.

Siden $f(x) = x(x^2-4)= x(x-2)(x+2)$, så er $f(x) = 0$ kun i $x = 0, 2 \text{ og } -2$. Fordi $f$ er kontinuerlig på $\mathbb{R}$, så sier skjæringssetningen at den må ha samme fortegn på $(-\infty, -2)$, på $(-2,0)$, $(0,2)$ og på $(2,\infty)$. Hvis ikke ville $f$ endret fortegn, noe som ville betydd at den måtte skjært x-aksen og hatt enda et nullpunkt.

Vi kan nå enkelt avgjøre hvor funksjonen er positiv og negativ ved å bare regne ut en verdi i de tre intervallene. Det gir

$$\begin{aligned} & f(-3) = (-3)^3-4(-3)=-27+12 = -15 \\ &f(-1) = -1+4 = 3 \\ & f(1) = 1 -4 = -3 \\ & f(3) = 27-15 = 15 \end{aligned}$$ 
Dermed er $f$ negativ frem til $-2$, så positiv frem til $0$ så negativ frem til $2$ og til slutt positiv fra $2$ til uendelig. 

