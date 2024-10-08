---
tags: []
title: 📄 Derivasjon av andre trigonometriske funksjoner
---
Mange av de andre trigonometriske funksjonene vi møter på, kan defineres ved hjelp av $\cos (x)$ og $\sin (x)$. Siden vi kan [[Kapittel 2 - derivasjon/9 Sinus og cosinus derivert|derivere cos og sin]] og kan bruke [[Kapittel 2 - derivasjon/defogteo/💡 Produktregelen|produktregelen]], [[Kapittel 2 - derivasjon/defogteo/💡 Kvotientregelen|kvotientregelen]] og kjerneregelen, kan vi nå derivere andre trigonometriske funksjoner. 

> [!info] Eksempel 
> 1. $\frac{d}{dx}\tan (x) = \frac{1}{\cos^2 (x)} = 1+ \tan^2(x)$
> 2. $\frac{d}{dx}\frac{1}{\cos (x)} = \frac{\sin (x) }{\cos^2(x) }$

> [!abstract]- 1
> 
> Vi skriver om $\tan (x)=\sin (x)\cdot(\cos (x))^{-1}$. Vi får nå
> 
> $$
> \begin{aligned} \frac{d}{dx} \tan (x) & = \sin (x)\cdot(-1)\cdot(-\sin (x))(-\cos (x))^{-2}+\cos (x)(\cos (x))^{-1}  \\ &= \frac{\sin^2(x)}{\cos^2(x)}+\frac{\cos^2(x) }{\cos^2(x) } \\ &= {\color{#5ca6f4} \frac{\sin^2(x)+\cos^2(x) }{\cos^2(x)  }} = \frac{1}{\cos^2(x)}. \end{aligned}
> $$ 
> Legg merke til at vi brukte [[Kapittel 0 - innledende kapittel/5.4 Viktige trigonometriske identiteter|sammenhengen]] at $\sin^2(x) +\cos^2(x) = 1$ for å gå til siste likhet. Vi kunne også regnet slik
> $$
> \begin{aligned} 
> &= {\color{#5ca6f4} \frac{\sin^2(x)+\cos^2(x) }{\cos^2(x)  }} \\ &= \frac{\sin^2(x)}{\cos^2(x)}+ \frac{\cos^2(x)}{\cos^2(x)} \\ &= \tan^2(x)+1.
> \end{aligned} 
> $$
> 

> [!abstract] 2
> 
> $$
> \begin{aligned}   \frac{d}{dx} \frac{1}{\cos (x)}   & = \frac{d}{dx} (\cos (x))^{-1} \\   &= -1\cdot(-\sin (x))(\cos (x))^{-2} \\   & = \frac{\sin (x) }{\cos^2(x) } \end{aligned} 
> $$


Vi har nå kontroll på derivasjon av alle funksjonene vi har møtt opp til nå i kurset, inkludert de trigonometriske funksjonene som sinus, cosinus og tangens. La oss oppsummere kort:

- Derivasjonen av $\sin(x)$ er $\cos(x)$.
- Derivasjonen av $\cos(x)$ er $-\sin(x)$.
- Derivasjonen av $\tan(x)$ er $\sec^2(x)= \frac{1}{\cos^2(x)}$.

Men hva skjer hvis vi fortsetter å derivere disse funksjonene flere ganger? Dette leder oss inn i begrepet høyere ordens derivasjon, som betyr at vi deriverer en funksjon flere ganger etter hverandre.

De som også er kjent med noe fysikk, vet nok at derivasjon binder sammen strekning, fart og akselerasjon. Her representerer:

- Strekning $s(t)$ en funksjon av tid.
- Fart $v(t) = s'(t)$ den første deriverte av strekningen.
- Akselerasjon $a(t) = v'(t) = s''(t)$ den andre deriverte av strekningen.

Les mer om [[Kapittel 2 - derivasjon/92 Høyere ordens deriverte|høyere ordens deriverte]].