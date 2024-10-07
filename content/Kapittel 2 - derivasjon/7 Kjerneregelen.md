---
title: 📄 Kjerneregelen
---
![[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|Teo 2.4.6]]

En l måte å huske kjerneregelen er å se at den kan skrives slik
$$\begin{aligned}  \frac{df}{dx} = \frac{df}{dg} \frac{dg}{dx}. \end{aligned}$$ 
Kjerneregelen er på en måte en av de mest intuitive derivasjonsreglene vi har. Beviset for kjerneregelen kommer lenger ned.

> [!abstract]- Intuisjon med lineær approksimasjon
> 
> Tenk deg at $f$ er en funksjon av $g$, altså $f(g)$ og at $g$ er en funksjon av $x$. Hvis $g$ er deriverbar i $a$, og $f$ er deriverbar i $c = g(a)$ så kan vi tenke slik.
> 
> Funksjonen $f$ er praktisk talt lineær rundt $c$ (med hensyn på $g$) og kan approksimeres med $f(c)+f'(c)(g-c)$. Siden $g$ er en funksjon av $x$ kan vi derivere med hensyn på $x$ og få
> $$
> \frac{d}{dx} f(g(x)) = f'(c)(g'(x)) = f'(g(a))g'(x).
> $$ 
> Vi vet at dette blir mer og mer riktig, jo nærmere vi går $x = a$. Spesielt bør dette bety at i $a$ så er $\frac{d}{dx} f(g(x))\bigg|_{x=a} = f'(g(a))g'(a)$.

> [!abstract]- Alternativ intuisjon for kjerneregel
> Tenk deg at du ser på to funksjoner $f(x) =x^2$ og $f(3x)= (3x)^2$.
> 
> Ser vi på deres grafer ser vi at $f(3x)$ ser ut til å være *krympet* inn. Altså at man har krympet x-aksen.
> 
> <iframe src="https://www.desmos.com/calculator/qne2wt5lot?embed" width="500" height="500" style="border: 1px solid" frameborder=0></iframe>
> 
> Dette kan vi tenke på som at når vi kjører gjennom $x$ verdiene vil $f(3x)$ kjøre gjennom tre ganger så raskt. Det må jo også bety at siden *farten* til $3x$ går tre ganger så fort, må stigningen til grafen også være tre ganger så stort i hvert punkt.
> 
> Vi må holde tunga rett i munnen her. Merk stigningen til grafen $f(3x)$ når $x=1$ er ikke lik stigningen til grafen $f(x)$ når $x=3$, selv om funksjonsverdien er den samme. Stigningen er **tre ganger** raskere. Vi har altså at for $x=1$ så er $\frac{d}{dx}f(3x) \bigg|_{x=1} = 3\cdot \frac{d}{dx}f(x)\bigg|_{x=3}$
> 
> Nå kommer det et lite hopp som vi må tenke gjennom. Hva skjer hvis vi endrer $3x$ med en funksjon $g(x)$? Jo, mengden som $f(g(x))$ vil strekkes eller krympes i forhold til $f(x)$ avhenger av hvordan $g(x)$ oppfører seg. Dersom $g(x)$ har stigning $3$ i et punkt, vil $g(x)$ oppføre seg som den lineære funksjonen $3x$ i det punktet, og da bør $f$ ha tre ganger så stor stigning. Dersom $g(x)$ var $\frac{1}{2}$ så ville $f(g(x))$ bremses ned i punktet og stigningen måtte bli halvparten så stor. Se for eksempel $\sin (x)$ og $\sin(x^2)$ under.
> 
> <iframe src="https://www.desmos.com/calculator/2pli9h4g3s?embed" width="500" height="500" style="border: 1px solid" frameborder=0></iframe>
> 
> Det må bety at stigningen til $f(g(x))$, som bare er $\frac{d}{dx}f(g(x))$, involverer å finne stigningen til $f$ i tilhørende punkt $g(x)$ og multiplisere dette med stigningen til $g(x)$ i punktet $x$. Med andre ord
> $$\begin{aligned} (f(g(x)))'(x)=g'(x)f'(g(x)).  \end{aligned}$$ 


Nå har vi kontroll på derivasjon av elementære sammensetninger av deriverbare funksjoner. Neste naturlige spørsmål blir å se på derivasjon av trigonometriske funksjoner. For å gjøre det må vi først se på noen [[Kapittel 2 - derivasjon/8 Spesielle trigonometriske grenser|spesielle trigonometriske grenser]].