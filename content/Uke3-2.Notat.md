---
draft: "true"
---
- bruke den deriverte (Definisjon 4, s. 100).
- bruke både Lagranges notasjon ($f'(x)$) og Leibniz notasjon ($\frac{df}{dx}$) 
- bruke og argumentere for at deriverbare funksjoner er kontinuerlige (Teorem 1, s. 109).
- bruke og argumentere for at lineære sammensetninger av kontinuerlige funksjoner er kontinuerlige (Teorem 2, s. 109).
- bruke og argumentere for produktregelen (Teorem 3, s. 111).
- bruke og argumentere for kvotientregelen (Teorem 4 og 5, s. 112 og 114).
- Studenten skal kunne regne eksemplene 1.2: 1–5 og 7–9. 1.3: 1–10. 1.4: 1–4 og 6–11. 2.2: 1–3 og 5. 2.3: 1–10.

## Derivasjon

Vi endte på kontinuerlige funksjoner. Hvorfor så vi på kontinuerlige funksjoner? Jo, hvis $f$ er kont så tar $f$ min, maks og alle verdier mellom (ingen hull).

Målet med kurset. Studere funksjoner. Vi begrenser oss til funksjoner som har egenskaper som vi ønsker!

For eksempel ønsker vi ofte å studere funksjoner for å optimere de, finne maks eller minimumspunkter, men også topper eller bunner. 

Hvis $I(x)$ beskriver inntekt til en bedrift ved produksjon av $x$ enheter (tar høyde for utgifter også). Da er det klart at vi ønsker å finne "toppen".
![[Files/shapes at 24-08-30 15.11.30.svg]]
> [!question] Merk 
> Vi må finne en måte å beskrive stigning til en funksjon, $f$, i et punkt!

Stigning i $x$ er *nesten* gjennomsnittlig stigning mellom $x$ og et punkt nær $x$, for eksempel $x+h$. Figur viser at gjennomsnittlig stigning er
$$
\frac{f(x+h)-f(x)}{h}
$$

Bare velg $h$ veldig liten...
![[Files/shapes at 24-08-30 15.18.32.svg|600]]
Er naturlig å tenke at hvis 
$$
\lim_{h\longrightarrow  0}\frac{f(x+h)-f(x)}{h}
$$
eksisterer så får vi stigningen i punktet.

> [!warning] Merk 
> Geometrisk vil grensen være stigningen til tangenten som går gjennom $(x,f(x))$.

> [!info] Den deriverte, def 2.2.4
> $f$ sin deriverte er en ny funksjon $f'$ som er definert som
> $$f'(x) = \lim_{h\longrightarrow  0}\frac{f(x+h)-f(x)}{h}$$ 
>i alle punkter $x$ der grensa eksisterer. Hvis $f'(x)$ eksisterer sier vi at $f$ er deriverbar i $x$. 

> [!warning] Merk 
> Verdien $f'(x)$ er stigningen til tangenten som går gjennom $(x,f(x))$.

Når $f'(x)$ eksisterer $\longrightarrow$ grense nevner mot 0 $\longrightarrow$ teller mot 0 $\longrightarrow$ $f(x+h) \longrightarrow f(x)$. Dvs $f$ kontinuerlig i $x$.

![[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.1 Deriverbarhet impliserer kontinuitet#^963b1d|Teo 2.3.1 Deriverbarhet impliserer kontinuitet]]



