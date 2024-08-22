---
draft: "true"
---
HUSK NOA

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

## Komplekse tall

De første tallene vi blir kjent med er de naturlige tallene, også kjent som telle-tallene.

$\mathbb{N} = \{1,2,3,4,5,6,\ldots\}$.

Etter hvert 0 og negative tall. Løser $x + 6 = 3$. 

$\mathbb{Z} = \{\ldots, -3,-2,-1,0,1,2,3,\ldots\}$.

Så de rasjonale tallene, eller brøker. Løse $3\cdot x = 1$.

$\mathbb{Q} =\{\frac{n}{m} : m, n\in \mathbb{Z}\}$

Så de reelle tallene, alle tall på tallinja: Eks, Pytagoras gir  $d^2 =1^2+1^2 = 2$, med løsning $\sqrt 2$. (Oppbygging lærer dere om i reell analyse).

Hva med $x^2 = -1$. 

Vi sier at $i$ er tallet slik at $i^2 = -1$, altså et tall som løser $x^2 = -1$. 

> [!info] Komplekse tall, definisjon A.1 
>  
>  Et *komplekst* tall er et tall på formen
>  $a+bi$,
>  der $a$ og $b$ er *reelle* tall og $i$ er den imaginære enheten.
>  Ofte skriver vi $z = a+bi$.


> [!warning] Merk 
> Boka: 
> $\text{Re}(a+bi) = a$, reell del
> $\text{Im}(a+bi)=b$, imaginær del
> 

Komplekse tall er par av tall: representere i et plan

Tenk på $3+4i$ som $3$ enheter på førsteaksen, og $4$ enheter andreaksen. Eks

![](Files/shapes%20at%2024-08-12%2013.19.24.svg)

> [!question] Spørsmål 
> Kan vi si noe om størrelsen på et komplekst tall? For eksempel, hvor stort er $1+i?$.
> 

![](Files/shapes%20at%2024-08-12%2014.13.06.svg)

> [!info] Absoluttverdien til et komplekst tall (modulus), definisjon A.3
> Avstanden fra origo til et punkt $(a,b)$ som korresponderer med det komplekse tallet 
> $z = a+bi$ 
> kalles absoluttverdien (modulus) til $z$.
> Noteres $|z| = |a+bi|$ og er størrelsen
> $|z| =  |a+bi| = \sqrt{a^2+b^2}$. 

> [!question] Spørsmål 
> Finnes dere andre tall som har samme modulus som $1+i?$
> 

Ja!  $1-i$ og $-1+i$ og $-1-i$.

Flere? $|1+i| = \sqrt{2}$, så alle tall på sirkel med sentrum i origo og radius $\sqrt{2}$.

Stråler ut fra origo i forskjellige vinkler.

Vi kan representere komplekse tall med lengde og hvilken vinkel

![](Files/shapes%20at%2024-08-12%2014.57.36.svg)
> [!warning] Merk 
> Vi kaller vinkelen som et tall $z = a+bi$ danner med førsteaksen for argumentet til $z$ og noterer det slik $\text{arg}(z)$. I bildet over er $\theta$ argumentet til tallet $z$.
> 

Kan veksle mellom $z=a+bi$  (*kartesisk form*) og $z = r\cos(\theta)+ir\sin(\theta)$ (*polar form*)

> [!question] Spørsmål 
> Hva er tallet
> 1. $z = 1+\sqrt 3 i$ på polar form?
> 2. $w = 1+i$ på polar form?


> [!abstract] 1


![](Files/shapes%20at%2024-08-12%2015.11.07.svg)

Hvis $z = 1+\sqrt{3}i$ så er $|z| = \sqrt{1+\sqrt{3}^2}=\sqrt{4} = 2$. 

Leter etter $\text{arq}(1+\sqrt{3}i)=\theta$, figuren gir $\cos(\theta) = \frac{1}{2}$. 

Enten $\frac{\pi}{6}$ eller $-\frac{\pi}{6}$, men må ha positivt vinkel.
Får da
$$1+\sqrt{3}i = 2\cos\left( \frac{\pi}{6} \right)+2i\sin\left( \frac{\pi}{6} \right).$$
> [!abstract]  2
> 

Vi ser at $|z| = \sqrt{1^2+1^2} = \sqrt{2}$, vi kan derfor skrive $z = \sqrt{2}\left( \frac{\sqrt{2}}{2}+\frac{\sqrt{2}}{2}i \right)$. Nå ser vi at 
$z = \sqrt{2}\left( \cos\left( \frac{\pi}{4} \right)+i\sin\left( \frac{\pi}{4} \right) \right).$

## Addisjon

$(2+6i) + (3-2i) = 2+3+(6-2)i = 5+4i$.

> [!info] Sum og differanse av komplekse tall
> Hvis $w = a+bi$ og $z = x+yi$ der $a,b, x$ og $y$ er reelle tall, da er
> $$w+z = (a+x)+(b+y)i$$
>  
> $$w-z = (a-x)+(b-y)i.$$ 

## Multiplikasjon


Distributive lov:
$$
(3+4)(5+7) = 3(5+7)+4(5+7) = 3\cdot5 + 3\cdot 7 + 4 \cdot 5 + 4\cdot7
$$
altså,
$(a+b)(c+d) = a(c+d)+b(c+d) = ac+ad+bc+bd$.

Derfor må vi ha 
$(3+4i)(5+7i) = 3\cdot5+3\cdot7i+4i\cdot5+4i\cdot7i = 15+21i+20i+28i^2$ fordi $i^2 =-1$, får vi $15-28+41i =-13+41i.$
Generelt
$(a+bi)(x+yi)=ax+ayi+bxi+byi^2 = (ax-by)+(ay+bx)i$, siden $i^2 = -1$.  

> [!info] Produktet av to komplekse tall
> Hvis $w = a+bi$ og $z = x+yi$ der $a,b, x$ og $y$ er reelle tall, da er
>  $wz = (ax-by)+(ay+bx)i$.

> [!question] Spørsmål  
> Hva er
> 1. $(3+4i)(2-i)$
> 2. $(3+4i)(3-4i)$

> [!abstract]  1
> 

Vi har at $$\begin{aligned} (3+4i)(2-i) & = 3\cdot2+3\cdot(-i)+4i\cdot2+4i\cdot(-i) \\ &= 6-4i^2-3i+8i \\ &= 6-4(-1)+5i \\&=10+5i. \end{aligned}$$ 

> [!abstract]  2
> 

$$\begin{aligned} (3+4i)(3-4i)  &= 9-\cancel{ 12i+12i }- 16i^2 \\&= 9 + 16 = 25.  \end{aligned}$$ 

Fra det siste eksempelet ser vi faktisk at for alle reelle tall $a$ og $b$ så er 
$$\begin{aligned} (a+bi)(a-bi)  = a^2\cancel{ -bi+bi } +b^2 = a^2+b^2.  \end{aligned} $$

Hvis $z = a+bi$, så er $(a+bi)(a-bi) = |z|^2$. Tallet $a-bi$ kaller vi $z$ sin *komplekst konjugerte* og vi noterer det slik. 

> [!info] Kompleks konjugert, definisjon A.5
> Den kompleks konjugerte til et tall $z = a+bi$ er et annet komplekst tall $\overline{z}=a-bi$. 

Multiplikasjon på polarform:

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

Det blir kjedelig å skrive $\cos(\theta)+i\sin(\theta)$ i lengden. 

> [!tip] Eksponentialform 
>   Hvis $z= r(\cos(\theta)+i\sin(\theta))$ kan vi skrive $z = re^{i\theta}$. 

Forenkler mye regning. Eks:

$z = re^{i\theta}$ gir $\frac{1}{z}= \frac{1}{re^{i\theta}} = \frac{1}{r}e^{i\cdot(-\theta)} = \frac{1}{r}(\cos(-\theta)+i\sin(-\theta))$.

> [!question] Spørsmål 
> Vis at formen over stemmer hvis
> $z = r(\cos(\theta)+i\sin(\theta))$ uten å bruke eksponentialform.
> 


![undefined](Files/shapes%20at%2024-08-19%2014.37.21.svg)
   

## Komplekse røtter

> [!question] Spørsmål 
> Kan vi finne røttene til $z^3 = 1$?

![undefined](Files/shapes%20at%2024-08-19%2014.48.08.svg)

> [!question] Spørsmål 
> Løs $z^4 = 16i$  

![undefined](Files/shapes%20at%2024-08-19%2014.58.27.svg)
