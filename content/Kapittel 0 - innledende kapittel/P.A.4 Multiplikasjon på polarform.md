---
draft: "true"
---

> [!question] Spørsmål 
> Hva er
> 1. $\left( \cos\left( \frac{\pi}{3} \right)+i\sin\left( \frac{\pi}{3} \right) \right)\cdot\left( \cos\left( \frac{\pi}{6} \right)+i\sin\left( \frac{\pi}{6} \right) \right)$?
> 2. $2\left( \cos\left( \frac{\pi}{4} \right)+i\sin\left( \frac{\pi}{4} \right) \right)\cdot\left( \cos\left( \frac{\pi}{6}+i\sin\left( \frac{\pi}{6} \right) \right) \right)$?

> [!abstract]  1
> 

Vi ganger ut:

$\cos\left( \frac{\pi}{3} \right)\cdot\cos\left( \frac{\pi}{6} \right)-\sin\left( \frac{\pi}{3} \right)\cdot\sin\left( \frac{\pi}{6} \right)+i\left( \cos\left( \frac{\pi}{3} \right)\cdot\sin\left( \frac{\pi}{6} \right)+\cos\left( \frac{\pi}{6} \right)\cdot\sin\left( \frac{\pi}{3} \right) \right)$
Fra addisjonsformlene får vi
$\cos\left( \frac{\pi}{3}+\frac{\pi}{6} \right)+i\left( \sin\left( \frac{\pi}{3}+\frac{\pi}{6} \right) \right) = \cos\left( \frac{\pi}{2} \right)+i\sin\left( \frac{\pi}{2} \right)=0+i.$

Det er ikke noe unikt med vinklene over. Vi har generelt at

> [!tip] Multiplikasjon av komplekse tall
> Hvis $z$ og $w$ er komplekse tall, så er
> 1.  $\text{arg}(z\cdot w)= \text{arg}(z)\cdot \text{arg}(w)$.
> 2. $|z\cdot w| = |z|\cdot |w|$.

Gjentar vi multiplikasjonen ser vi at 

> [!tip] de Moivre's Theorem
> $(\cos(\theta)+i\sin(\theta))^n=\cos(n\theta)+i\sin(n\theta)$.
> 

Det blir kjedelig å skrive $\cos(\theta)+i\sin(\theta)$ i lengden. Det gis ikke begrunnelse for denne sammenhengen i MA-183, men [denne](https://www.youtube.com/watch?v=v0YEaeIClKY) og [denne](https://www.youtube.com/watch?v=-dhHrg-KbJ0) er kan være gode videoer å bruke dersom man kjenner til definisjonen av $e$ som grenseverdi og hvordan man deriverer $e^x$.

> [!tip] Eksponentialform 
>   Hvis $z= r(\cos(\theta)+i\sin(\theta))$ kan vi skrive $z = re^{i\theta}$. 

Ikke bare gjør eksponentialform det mye enklere å skrive, men det forenkler mye regning.

> [!info] Eksempel 

$z = re^{i\theta}$ gir $\frac{1}{z}= \frac{1}{re^{i\theta}} = \frac{1}{r}e^{i\cdot(-\theta)} = \frac{1}{r}(\cos(-\theta)+i\sin(-\theta))$.

> [!question] Spørsmål 
> Vis at formen over stemmer hvis
> $z = r(\cos(\theta)+i\sin(\theta))$ uten å bruke eksponentialform.
> 


![undefined](Files/shapes%20at%2024-08-19%2014.37.21.svg)
   