---
draft: "true"
---

## Invers trigonometrisk substitusjon


> [!question] Spørsmål 
> Tenk dere at dere vil finne arealet til en sirkel ved hjelp av integraler. Hvordan ser integralet ut? Det vil si, hva er $f(x)$ slik at 
> $$
> \int_a^b f(x) dx
> $$
> gir oss arealet til sirkelen?
> *Hint:* Tegn en skisse.



![[Files/shapes at 24-11-13 11.23.23.svg]]


Vet at $\sqrt{1-x^2}$ er høyden, men denne kan også beskrives som $y=\sin(\theta)$ der $x=\cos(\theta)$ og $\theta$ går fra $0$ til $\pi$. Hva med å sette inn:
$$
{\color{#5ca6f4} \sqrt{1-x^2} = \sqrt{1-\cos^2(\theta)} = \sqrt{\sin^2(\theta)}= |\sin(\theta)| = \sin(\theta).  }
$$
Da er $\frac{dx}{d\theta}=-\sin(\theta)$ eller at ${\color{#f46f22} dx =-\sin(\theta)d\theta }$.
Substitusjonen gir da
$$
\begin{aligned} 
\int_{x=-1}^{x=1} \sqrt{1-x^2}dx &= \int_{\theta =\pi}^{\theta = 0} {\color{#5ca6f4} \sin(\theta) }{\color{#f46f22} (-\sin(\theta))d\theta } \\ & = -\int_{{\color{#3cc15c} \pi }}^{{\color{#3cc15c} 0 }} \sin^2(\theta)d\theta \\ & = \int_{{\color{#3cc15c} 0 }}^{{\color{#3cc15c} \pi }} \frac{1-\cos(2\theta)}{2}d\theta \\ &\left(  \frac{\theta}{2}-\frac{1}{4}\sin(2\theta) \right)\bigg|_0^\pi \\ &=  \left( \frac{\pi}{2}-0 \right)-(0-0)=\frac{\pi}{2}.
\end{aligned} 
$$
Det er halvsirkel. Så hel sirkel med radius $1$ har areal $\pi$.

> [!warning] Merk 
> Når vi regner faktisk areal må vi holde styr på områdene vi integrerer over. For eksempel kunne vi også brukt $x= \sin(\theta)$ med $-\frac{\pi}{2}\leq \theta\leq \frac{\pi}{2}$ i eksempelet over.


> [!tip] Invers sinussubstitusjon
> Integraler som inneholder $\sqrt{a^2-x^2}$ kan (noen ganger) bli forenklet dersom man gjør substitusjonen 
> $$
> x = a \sin(\theta),
> $$ 
> som betyr at
> $$
> \theta = \sin^{-1}\left( \frac{x}{a} \right).
> $$
> 




> [!abstract] Eksempel 
> 
> $$
> \int_0^{1/2} \frac{1}{\sqrt{1 - x^2}} \, dx
> $$

> [!warning] Merk 
> Vet egentlig at antiderivert er $\sin^{-1}(x)$.

> [!abstract] 1 - Velg substitusjonen
> 
> Her kan vi bruke $x = \sin(\theta)$, som gir $dx = \cos(\theta) \, d\theta$. Da kan vi erstatte $\sqrt{1 - x^2}$ med $\cos(\theta)$.
> 

> [!abstract]  2 - Utfør substitusjonen
> 
> Ved å erstatte $x$ med $\sin(\theta)$, får vi:
> $$
> \int_{x=0}^{x=1} \frac{\frac{1}{2}}{\cos(\theta)} \cdot \cos(\theta) \, d\theta = \int d\theta\bigg|_{x=0}^{x=1}.
> $$
> 

> [!abstract] 3 - Beregn integralet
> 
> Det integrerte uttrykket er:
> $$
> \theta + C
> $$

> [!abstract] 4 - Substituer tilbake
> 
> Substituerer vi tilbake $x = \sin(\theta)$, får vi den endelige løsningen:
> $$
> \theta = \sin^{-1}(x)
> $$
> Så løsningen er:
> $$
> \sin^{-1}(x)\bigg|_{0}^{1/2} = \sin^{-1}\left( \frac{1}{2} \right)-\sin^{-1}(0) = \frac{\pi}{6}-0=\frac{\pi}{6}
> $$


> [!question] Spørsmål 
> Gjør substitusjonen $x=\sqrt{5}\sin(\theta)$ på 
> $$
> \int \frac{1}{(5-x^2)^{3/2}}dx.
> $$
> IKKE regn resten, bare substitusjonen.

> [!note] Argument 
> La $x = \sqrt{5}\sin(\theta)$ som betyr at $dx = \sqrt{5}\cos(\theta)d\theta$. Setter vi inn får vi
> $$
> \begin{aligned} 
> \int \frac{1}{(5-x^2)^{3/2}}dx & = \int \frac{1}{(5-(\sqrt{5}\sin(\theta))^2)} \sqrt{5}\cos(\theta)d\theta \\ &= \int \frac{\cos(\theta)}{(5-5\sin^2(\theta))^{3/2}} d\theta \\ &= \int \frac{\cos(\theta)}{5(1-\sin^2(\theta))^{3/2}}d\theta \\ &= \frac{1}{5}\int \frac{\cos(\theta)}{(\cos^2(\theta))^{3/2}} d\theta \\ &= \frac{1}{5} \int \frac{1}{\cos^{3-1}(\theta)}d\theta \\ &= \frac{1}{5}\tan(\theta)+C \\ &= \frac{1}{5}\tan(\sin^{-1}(x))+C
> \end{aligned}.
> $$
> Siden $x=\sqrt{5}\sin(\theta)$, eller $\sin(\theta)= \frac{x}{\sqrt{5}}$. Vi kan lese dette som at vi har en trekant med hypotenus lik $1$, motstående side lik $\frac{x}{\sqrt{5}}$ og hosliggende blir da
> $$
> \sqrt{1-\frac{x^2}{5}}.
> $$
> Dermed vet vi også 
> $$
> \tan(\theta) = \frac{\frac{x}{\sqrt{5}}}{\sqrt{1-\frac{x^2}{5}}}= \frac{x}{\sqrt{5-x^2}}.
> $$
> Vi får dermed 
> $$
> \int \frac{1}{(5-x^2)^{3/2}}dx = \frac{x}{\sqrt{5-x^2}}+C
> $$





> [!tip] Invers tangenssubstitusjon
> Integraler som inneholder $\sqrt{a^2+x^2}$ eller $a^2+x^2$ kan (noen ganger) bli forenklet dersom man gjør substitusjonen 
> $$
> x = a \tan(\theta),
> $$ 
> som betyr at
> $$
> \theta = \tan^{-1}\left( \frac{x}{a} \right).
> $$


> [!abstract] Eksempel 
> Vis at 
> $$
> \int \frac{1}{1+x^2}dx = \tan^{-1}(x)+C
> $$
> ved å gjøre substitusjonen $x = \tan(\theta)$.



> [!warning] Merk 
> Merk at hvis $x = a\tan(\theta)$ så vil 
> $$
> \begin{aligned} 
> \sqrt{a^2+x^2} & = \sqrt{a^2+a^2\tan(\theta)} = a\sqrt{1+\frac{\sin^2(\theta)}{\cos^2(\theta)}}  \\ &= a\sqrt{\frac{1}{\cos^2(\theta)}(\cos^2(\theta)+\sin^2(\theta))} \\ & = a \sqrt{\frac{1}{\cos^2(\theta)}} \\ & = \frac{a}{\cos(\theta)}.
> \end{aligned} 
> $$

> [!question] Spørsmål 
> Gjør substitusjonen $x= \tan(\theta)$ i 
> $$
> \int \frac{1}{\sqrt{1+x^2}}dx
> $$
> og $x=3\tan(\theta)$ i
> $$
> \int \frac{1}{(9+x^2)^2}
> $$
> IKKE regn ut mer enn substitusjonen.


> [!note] Argument 1.
> I begge tilfellene har vi at $dx = \frac{1}{\cos^2(\theta)}d\theta$. Setter vi inne får vi
> $$
> \int \frac{1}{\sqrt{1+x^2}}dx = \int \frac{1}{\sqrt{1+\tan^2(\theta)}}\cdot \frac{1}{\cos^2(\theta)}d\theta.
> $$
> Dersom vi bruker observasjonen over, at $\sqrt{1+\tan^2(\theta)}= \frac{1}{\cos(\theta)}$ får vi
> $$
> \int \frac{1}{\frac{1}{\cos(\theta)}}\cdot \frac{1}{\cos^2(\theta)}d\theta = \int \frac{1}{\cos(\theta)}d\theta
> $$
> Vi gjør et lite triks
> $$
> \frac{1}{\cos(\theta)}= \frac{\cos(\theta)}{\cos^2(\theta)} = \frac{\cos(\theta)}{1-\sin^2(\theta)}.
> $$
> Nå er teller den deriverte til noe i nevner. Substitusjonen ${\color{#5ca6f4} u = \sin(\theta) }$ er derfor naturlig. Det vil si ${\color{#e796f5} du = \cos(\theta)d\theta }$ som gir
> $$
> \begin{aligned} 
> \int \frac{1}{\cos(\theta)}d\theta &= \int \frac{{\cos( \theta)}}{1-{\color{#5ca6f4} \sin }^2(\theta)}{d\theta} \\ &= \int \frac{1}{1-u^2}du \\ &= \int \frac{1}{(1-u)(1+u)}du.
> \end{aligned} 
> $$
> Delbrøksoppspalting gir nå at $\frac{1}{2}\left( \frac{1}{1-u} + \frac{1}{1+u} \right)$. Det vil si at
> $$
> \begin{aligned} 
> \int \frac{1}{\cos(\theta)} d\theta& =\frac{1}{2} \int \frac{1}{1+u}+ \frac{1}{1-u}du \\ &= \frac{1}{2}(\ln|1+u|-\ln|1-u|)+C \\ &= \frac{1}{2}(\ln(1+\sin(\theta))-\ln(1-\sin(\theta)))+C
> \end{aligned} 
> $$
> Vi vet at $x = \tan(\theta)$. Sett opp en rettvinklet trekant med motstående side lik $x$ og hosliggende $1$. Da er dette trekanten med vinkel $\theta$. Dermed må $\sin(\theta) = \frac{1}{\sqrt{1+x^2}}$. Setter vi inn får vi
> $$
> \begin{aligned} 
>  \int \frac{1}{\sqrt{1+x^2}}dx & = \frac{1}{2}\left( \ln\left| 1+\frac{1}{\sqrt{1+x^2}} \right|-\ln\left|1-\frac{1}{\sqrt{1+x^2}}\right| \right)+C \\ &= \frac{1}{2}\left( \ln|\frac{\sqrt{1+x^2}+1}{1-\sqrt{1+x^2}}| \right)+C
> \end{aligned} 
> $$
> Vi kan forenkle. Ganger vi gjennom med $1+\sqrt{1+x^2}$ får vi
> $$
> \frac{1}{2}\left( \ln|\frac{1^2+1+x^2+2\sqrt{1+x^2}}{1-1-x^2}| \right)+C
> $$

> [!note] Argument 2.
> Lar vi $x = 3\tan(\theta)$ får vi $dx = \frac{3}{\cos^2(\theta)}d\theta$. 
> Gjør vi litt omregning får vi 
> $$
> \begin{aligned} 
> \int \frac{1}{(3^2+x^2)^2}dx  &= \int \frac{1}{(3^2+(3\tan(\theta))^2}\cdot \frac{3}{\cos^2(\theta)}d\theta \\ &= \int \frac{3}{3^2(1+\tan^2(\theta))^2} \frac{1}{\cos^2(\theta)}d\theta \\ &= \frac{1}{3} \int \frac{1}{\left( \frac{1}{\cos^2(\theta)}(\cos^2(\theta)+\sin^2(\theta))^2 \right)}  \frac{1}{\cos^2(\theta)}d\theta \\ &= \frac{1}{3} \int \frac{1}{\left( \frac{1}{\cos^2(\theta)} \right)^2} \frac{1}{\cos^2(\theta)}d\theta \\ &= \frac{1}{3} \int \frac{\cos^4(\theta)}{\cos^2(\theta)}d\theta \\ &= \frac{1}{3} \int \cos^2(\theta)d\theta \\ &= \frac{1}{3}\int   \frac{1}{2}(\cos^2(\theta)-\sin^2(\theta))+\frac{1}{2}(\cos^2(\theta)+\sin^2(\theta))d\theta \\ &= \frac{1}{3} \int \frac{1}{2}\cos(2\theta)+\frac{1}{2} d\theta \\ &= \frac{1}{3}\left( \frac{1}{4}\sin(2\theta)+\frac{1}{2}\theta \right)+C \\ &= \frac{1}{6}\left( \frac{1}{2}\sin(2\theta)+\theta+C \right) \\ &= \frac{1}{6}\left( \frac{1}{2}(2\cos(\theta)\sin(\theta))+\theta+C \right)
> \end{aligned} 
> $$
> Siden vi nå kan sette opp følgende trekant
> ![[Files/shapes at 24-11-18 10.57.37.svg]]
> ser vi at $\cos(\theta)= \frac{3}{\sqrt{x^2+3^2}}$ og $\sin(\theta)=\frac{x}{\sqrt{x^2+3^2}}$. I tillegg er $\theta = \tan^{-1}\left( \frac{x}{3} \right)$ som gir
> $$
> \int \frac{1}{(3^2+x^2)^2}dx = \frac{1}{6}\left( \frac{x}{\sqrt{x^2+3^2}}\cdot \frac{3}{\sqrt{x^2+3^2}} \right)+\tan^{-1}\left( \frac{x}{3} \right)+C.
> $$



### Volum ved hjelp av omdreining

Mange figurer 

> [!tip] Volum når man dreier om $x-$aksen
> Hvis vi har en funksjon $f(x)$ kan vi dreie den om $x-$aksen for å lage et omdreiningslegeme. Volumet til denne er
> $$
> \int_a^b \pi (f(x))^2 dx=\pi\int_a^b (f(x))^xdx
> $$ 
>

TEGN HER


> [!question] Spørsmål 
> Dersom vi har en kule med radius $r$ (HUSK TEGNING). Hva er $f(x)$, $a$ og $b$ slik at volumet er 
> $$
> \pi \int_a^b (f(x))^2 dx?
> $$

> [!note] Argument 
> Vi ser at dette bare er en sirkel. Dermed er $f(x) = \sqrt{r-x^2}$ og integralet blir
> $$
> \pi \int_{-r}^{r} \sqrt{r^2-x^2}^2dx = \pi \int_{-r}^{r}r^2-x^2 dx = 2\pi \int_0^r r^2-x^2dx.
> $$
> Vi kan evaluere dette enkelt som
> $$
> \begin{aligned} 
> 2\pi\left( r^2x-\frac{x^3}{3} \right)\bigg|_{0}^r & = 2\pi\left( r^3-\frac{r^3}{3} \right) \\ &= 2\pi \frac{2r^3}{3} =\frac{4r^3}{3}\pi
> \end{aligned} 
> $$

> [!question] Spørsmål 
> TEGN: Hva er volumet til kjegla når $y= 3x$ høyden er 3.

> [!note] Argument 
> Vi vet nå at det er
> $$
> \pi \int_{0}^{3} (3x)^2dx = \frac{9x^3}{3}\bigg|_0^3 = 3\cdot 3^3 = 81.
> $$



> [!question] Spørsmål 
> Gjør substitusjonen $x= \tan(\theta)$ i 
> $$
> \int \frac{1}{\sqrt{1+x^2}}dx
> $$
> og $x=3\tan(\theta)$ i
> $$
> \int \frac{1}{(9+x^2)^2}
> $$
> IKKE regn ut mer enn substitusjonen.
