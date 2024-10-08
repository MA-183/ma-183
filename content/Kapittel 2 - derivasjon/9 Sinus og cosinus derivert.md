---
title: 📄 Sinus og cosinus derivert
---
![[Kapittel 2 - derivasjon/defogteo/💡 Sinus derivert|💡 Sinus derivert]]

Siden $\sin(x)$ og $\cos(x)$ henger veldig tett sammen, er det ikke overraskende at vi også nå enkelt kan konkludere med hva $\cos(x)$ sin deriverte er.

![[Kapittel 2 - derivasjon/defogteo/💡 Cosinus derivert|💡 Cosinus derivert]]

> [!warning] Merk 
> Det betyr også at $\cos$ og $\sin$ er kontinuerlige siden [[Kapittel 2 - derivasjon/defogteo/💡 Deriverbarhet impliserer kontinuitet|deriverbarhet impliserer kontinuitet]].

> [!info] Eksempel 
> Avgjør de deriverte til
> 1. $\sin(\pi x)$
> 2. $x^3\sin(x^2)$
> 3. $\frac{\cos(x) }{1+\sin(x) }$.

> [!abstract]- 1
> 
> Vi bruker [7 Kjerneregelen](Kapittel%202%20-%20derivasjon/7%20Kjerneregelen.md) og får $\frac{d}{dx}\sin(\pi x) \pi\cos(\pi x)$.

> [!abstract]- 2
> 
> Her må vi bruke både [7 Kjerneregelen](Kapittel%202%20-%20derivasjon/7%20Kjerneregelen.md) og [5 Produktregelen](Kapittel%202%20-%20derivasjon/5%20Produktregelen.md). Vi merker oss først at kjerneregelen gir at $\frac{d}{dx} \sin(x^2) = 2x\cos(x^2)$. Deretter gir produktregelen at
>   $$
>   \frac{d}{dx} x^3\sin(x^2) = 3x^2\sin(x^2)+x^3\cdot 2(x)\cos(x^2).y
$$

> [!abstract]- 3
> 
> [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.5 Kvotientregelen|Kvotientregelen]] sier $\left( \frac{{\color{#e796f5} f }}{{\color{#3cc15c} g }} \right)' = \frac{{\color{#f46f22} f' }{\color{#3cc15c} g }-{\color{#e796f5} f }{\color{#5ca6f4} g' }}{{\color{#3cc15c} g^2 }}$
> 
> Her er
> 
> 1. ${\color{#e796f5} f(x) = \cos(x) }$ og dermed ${\color{#f46f22} f'(x) = -\sin(x) }$,
> 2. ${\color{#3cc15c} g(x)=1+\sin(x) }$ og dermed er ${\color{#5ca6f4} g'(x)=\cos(x) }$
> 
> Setter vi alt samme får vi
> $$
> \begin{aligned} 
>   \frac{d}{dx} \frac{\cos(x) }{1+\sin(x) } 
>   =&  \frac{{\color{#f46f22} -\sin(x) }{\color{#3cc15c} (1+\sin(x) })-{\color{#e796f5} \cos(x) }\cdot{\color{#5ca6f4} \cos(x)  }}{({\color{#3cc15c} 1+\sin(x) })^2 } \\ 
>   = & \frac{-(\sin^2(x)+\cos^2(x))-\sin(x) }{(1+\sin(x))^2 } \\
>   = & \frac{-\cancel{ (1+\sin(x)) }}{(1+\sin(x))\cdot \cancel{ (1+\sin(x)) }} \\
>   = & \frac{-1 }{1+\sin(x) } 
>   \end{aligned} 
>   $$
>   
>   


Nå som vi kan derivere $\cos$ og $\sin$ blir det naturlig å tenke seg at vi kan derivere [[Kapittel 2 - derivasjon/91 Derivasjon av andre trigonometriske funksjoner|andre trigonometriske funksjoner]].