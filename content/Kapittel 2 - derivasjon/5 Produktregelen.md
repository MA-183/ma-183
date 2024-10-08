---
title: 📄 Produktregelen
---
![[Kapittel 2 - derivasjon/defogteo/💡 Produktregelen|💡 Produktregelen]]


> [!question] Spørsmål 
> Hvordan kan vi finne $(x^2+1)(x^3+4)$ sin deriverte uten å løse opp parentesen?
> 

I eksempelet over kan vi bruke produktregelen. Vi får da at

$$
\begin{aligned} 
  \frac{d}{dx}(x^2+1)(x^3+4) '& = (x^2+1)'(x^3+4) + (x^2+1)(x^3+4)'  \\
  &= (2x)(x^3+4)+(x^2+1)(3x^2) \\
  &= 2x^4+8+3x^4+3x^2 \\
  &= 5x^4 +3x^2+8.
\end{aligned} 
$$
Nå som vi ser at vi kan bruke produktregelen er det også naturlig å lure på om det finnes noen sammenheng for $\frac{f}{g}$ der $f$ og $g$ er deriverbare. Denne sammenhengen kaller vi [[Kapittel 2 - derivasjon/6 Kvotientregelen|kvotientregelen]].