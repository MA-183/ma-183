---
tags: []
title: 📄 Den deriverte
---
![[Kapittel 2 - derivasjon/defogteo/✍️ Derivasjon i et punkt|✍️ Derivasjon i et punkt]]

Det er verdt å merke seg at denne definisjonen også har en geometrisk tolkning når vi ser på reelle funksjoner. 
![[Files/shapes at 24-09-03 13.57.58.svg]]

> [!warning]- Animasjon
> Under kan du trykke på punktene og se hvordan sekantene, i oransje, oppfører seg i forhold til tangenten, i grønt.
> %% Under er et htmldokument som embeddes %%
> <iframe src="Files\derivasjonsomgrense.html"  frameborder="0" scrolling="no" style="aspect-ratio: 500/300; width: 100%"> </iframe>
> 

> [!question] Spørsmål 
>   Hva er $f'(x)$ når $f(x) = ax+b$?

Dersom vi ser på definisjonen, så ser vi at vi skal undersøke $\frac{f(x+h)-f(x) }{h }$ når $h \longrightarrow 0$. Brøken kan skrives slik
$$
\frac{a(x+h)+b - (ax+b) }{h }  = \frac{\cancel{ax+ b }+ah\cancel{-ax- b } }{ h} = \frac{ah }{h } =a.  
$$
Brøken er altså alltid $a$ uavhengig av hva $h$ er. Så $f'(x) = a$. (Merk at dette samsvarer også med den geometriske tolkninga, siden $f$ er en lineær funksjon med stigning $a$.)

> [!question] Spørsmål 
> Finn den deriverte til
> 1. $f(x) = x^2$
> 2. $g(x) = \frac{1}{x}$
> 3. $h(x) = \sqrt x$.

> [!abstract]- 1 
> Vi begynner igjen med å se på uttrykket vårt og venter med grensen. Det gir
> 
> $$
> \begin{aligned}\frac{(x+h)^2-x^2 }{h }  &= \frac{\cancel{ x^2 }+2xh+h^2 -\cancel{  x^2 } }{h } \\ & =  \frac{h(2x+h) }{h }  = 2x+h \end{aligned}
> $$ 
> Vi ser altså at 
> $$
> \lim_{h \longrightarrow  0 } \frac{f(x+h)-f(x) }{h } = \lim_{h \longrightarrow  0 } 2x + h = 2x.  
> $$

> [!abstract]- 2  
>  
>  Vi gjør det samme for $g$. Det gir
>  
>  $$
>  \begin{aligned} 
>    \frac{\frac{1}{x+h}-\frac{1}{x} }{h } &= \frac{\frac{\cancel{ x }}{x(x+h)}-\frac{\cancel{ x }+h }{x(x+h) }  }{ h} \\ &= \frac{\frac{\cancel{ h } }{x(x+h) }  }{\cancel{ h } }   = \frac{1}{x(x+h)}.
>    \end{aligned} 
> $$
> 
> Tar vi nå grensen ser vi at
> $$
> f'(x) = \lim_{h \longrightarrow  0 } \frac{1 }{x(x+h) } = \frac{1}{x^2}.  
> $$
> 

> [!abstract]- 3
> 
> Vi gjør igjen det samme. Det gir
> 
> $$
> \begin{aligned} 
> \frac{\sqrt{x+h}-\sqrt x }{h }  
> \end{aligned} 
> $$
> 
> Her må vi bruke et triks, ofte kalt å multiplisere/utvide med den konjugerte. I dette tilfellet å utvide med $\sqrt{x+h}+\sqrt{x}$. Dette er fordi $(\sqrt{x+h}-\sqrt{ x})(\sqrt{x+h}+\sqrt{x}) = (x+h)-x = h$.
> Merk: trikset brukes ofte når vi ønsker å bli kvitt en kvadratrot.
> 
> Vi får altså
> $$
> \begin{aligned} 
>   \frac{(\sqrt{x+h}-\sqrt x )(\sqrt{x+h}+\sqrt{x}  )}{h(\sqrt{x+h}+\sqrt{x}  ) }   &= \frac{\cancel{ h } }{\cancel{ h }(\sqrt{x+h}+\sqrt{x}  ) } \\ &= \frac{1 }{ (\sqrt{x+h}+\sqrt{x}  )} 
> \end{aligned} 
> $$
> Nå er det tydelig at
> $$
> f'(x) = \lim_{h \longrightarrow  0 } \frac{1 }{(\sqrt{x+h}+\sqrt{x}  ) } =\frac{1}{\sqrt{x} +\sqrt{x} }=\frac{1}{2\sqrt{x} }. 
> $$


Det skal ikke mye til for å overbevise seg selv om at [[Kapittel 2 - derivasjon/3 Deriverbarhet impliserer kontinuitet|deriverbare funksjoner også er kontinuerlige]]. 