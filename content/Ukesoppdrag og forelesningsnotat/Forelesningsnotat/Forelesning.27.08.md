> [!warning] HUSK NOA - Tavla finnes her https://tinyurl.com/ma183-27-08

- skrive komplekse tall på kartesisk form (Definisjon 1, s. A-2).
- bruke begrepene realdel og imaginærdel (Definisjon 2, s. A-2), absoluttverdi (Definisjon 3, s. A-3), argument (Definisjon 4, s. A-3), og kompleks konjugert (Definisjon 5, s. A-4).
- polar form (lilla rute, s. A-4), og omskrive komplekse tall mellom kartesisk og polar form.
- representere komplekse tall i det komplekse planet.
- addere, subtrahere og multiplisere komplekse tall (grønne ruter, s. A-5).
- dividere komplekse tall (Eksempel 6, s. A-8).
- de Moivre’s teorem (Theorem 1, s. A-7).
- håndtere komplekse tall på formen $re^{i\theta}$, der $r > 0$ (Theorem 1, Remark, s. A-7).
- løse potenslikninger på formen $z^n = w$, der $w \in \mathbb{C}$ og $n \in \mathbb{N}$ (s. A-9–10).
- regne eksemplene Appendix I: 1–8.

## Trig

![[Files/shapes at 24-08-27 14.36.58.svg]]

> [!question] Spørsmål 
> Gjør algebraen:
> 1. $\cos(s+t)=\cos(s-(-t)) = \cos(s)\cos(-t)+\sin(s)\sin(-t)$
> 2. $\sin(s+t)= \cos\left( \frac{\pi}{2}-(s+t) \right)=\cos\left( \left( \frac{\pi}{2}-s \right)-t \right)$.
> 3. $\sin(s-t)$

## Komplekse tall

$\mathbb{N} =\{1, 2, 3, \ldots\}$

$\mathbb{Z} =\{\ldots, -3,-2,-1,0,1,2,3,\ldots\}$

$\mathbb{Q}= \left\{ \frac{a}{b} \right\}$

$\mathbb{R}$

$x^2 =2$

$x^2 = -1$

> [!warning] Merk 
> Vi sier at $i$ er tallet slik at $i^2= -1$, med andre ord er $i = \sqrt{-1}$.

> [!info] Komplekse tall, definisjon A.1
> Et *komplekst tall* er et tall på formen
> $a+bi$,
> der $a$ og $b$ er reelle tall. 
>Ofte skriver vi $z = a+bi$.

> [!warning] Merk 
> Boka:
> $\text{Re}(a+bi) = a$, reell del
> $\text{Im}(a+bi) = b$, imaginær del

Komplekse taller er et par av tall: representere de i et plan

> [!question] Spørsmål 
> Representer $3+4i$ i et koordinatsystem. 

> [!question] Spørsmål 
> Kan vi si noe om størrelsen på et komplekst tall? For eks hvor stort er tallet $-1+i?$

![[Files/shapes at 24-08-27 14.57.18.svg]]
> [!info] Størrelsen til et komplekst tall (modulus), definisjon A.3
> Avstanden fra origo til et punkt $(a,b)$, så korresponderer det med tallet $z= a+bi$,
> og 
> størrelsen definerer vi til å være lengden mellom origo og $(a,b)$ som da er $\sqrt{a^2+b^2}$ 
> Vi skriver det slik $|z| =\sqrt{a^2+b^2}$

> [!question] Spørsmål 
> Finnes det andre tall som har samme størrelse som $-1+i$?

> [!info] Definisjon
> Hvis $z= a+bi$ så kaller vi det kartesisk form
> Hvis $z = r(\cos(t)+i\sin(t))$ kaller vi det polar form. 
> Boka: $\text{arg}(z) = \text{ vinkelen } t$ til den polare formen. 

## Addisjon av komplekse tall

$(2+6i)+(3-2i) =2+6i+3-2i=5+4i$

> [!info] sum og differanse
> Hvis $w = a+bi$ og $z = d+ei$ så er
> $w+z= (a+d)+(b+e)i$ 
> $w-z =(a-d)+(b-e)i$

## Multiplikasjon 

Distributive lov:

$(3+4)(5+7) =3(5+7)+4(5+7)=3\cdot5+3\cdot7+4\cdot5+4\cdot7.$

> [!question] Spørsmål 
> Hvis vi vil at distributive lov skal holde, hva blir
> $(a+bi)(c+di)$?

$$
\begin{aligned} 
  (a+bi)(c+di) & = a(c+di)+bi(c+di)  \\ &=ac+adi+bci+bdi^2 \\&= ac+adi+bci-bd\\ & = (ac-bd)+(ad+bc)i
\end{aligned} 
$$

$(3+4i)(5+7i)=3(5+7i)+4i(5+7i) )$ $=3\cdot5+3\cdot7i+4i\cdot5+4i\cdot7i$
$=15+21i+20i+28i^2$
$=15+41i-28=-13+41i$

$$
i \longrightarrow  i^2 = -1 \longrightarrow  i^3=i^2\cdot i =-1 \cdot i =-i \longrightarrow  i^4 = i^2 \cdot i^2 = -1\cdot-1 =1
$$

> [!question] Spørsmål 
> Hva er 
> 1. $(3+4i)(3-4i)$
> 2. $\left( \cos\left( \frac{\pi}{3} \right)+i\sin\left( \frac{\pi}{3} \right) \right)\left( \cos\left( \frac{\pi}{6} \right)+i\sin\left( \frac{\pi}{6} \right) \right)$

![[Files/shapes at 24-08-27 16.01.57.svg]]
