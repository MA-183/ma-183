---
draft: "true"
---
- skrive komplekse tall på kartesisk form (Definisjon 1, s. A-2).

**Ja** $a+bi$

- bruke begrepene realdel og imaginærdel (Definisjon 2, s. A-2), absoluttverdi (Definisjon 3, s. A-3), argument (Definisjon 4, s. A-3), og kompleks konjugert (Definisjon 5, s. A-4).

**Ja**
$$
\text{Re}(a+bi)=a
$$
$$
\text{Im}(a+bi)=b
$$
**Absoluttverdi** til $z = a+bi$ er $|z|=\sqrt{a^2+b^2}$.

**Polarform**: $z = r(\cos(t)+i\sin(t))$, der $r$ er størrelsen til $z$ og $t$ er vinkelen som dannes med positiv $x$-akse. 

**Argumentet** til $z$ er $\text{Arg}(z)=t$, altså vinkelen som dannes med positive $x$-akse.

**Kompleks konjugert**
*Kartesisk form*: $z=a+bi$ da er $\overline z$ den kompleks konjugerte og er definert som $\overline z=a-bi$.

*Polar form*: $z = r(\cos(t)+i\sin(t))$ da er $\overline z=r(\cos(-t)+i\sin(-t))$.

- polar form (lilla rute, s. A-4), og omskrive komplekse tall mellom kartesisk og polar form.

**Ja, polar form**
**Omgjøring**, ikke helt

- representere komplekse tall i det komplekse planet.

**Ja**

- addere, subtrahere og multiplisere komplekse tall (grønne ruter, s. A-5).

**Ja**, på kartesisk form! Avslutta på polar form.

- dividere komplekse tall (Eksempel 6, s. A-8).
- de Moivre’s teorem (Theorem 1, s. A-7).
- håndtere komplekse tall på formen $re^{i\theta}$, der $r > 0$ (Theorem 1, Remark, s. A-7).
- løse potenslikninger på formen $z^n = w$, der $w \in \mathbb{C}$ og $n \in \mathbb{N}$ (s. A-9–10).
- regne eksemplene Appendix I: 1–8.

## Komplekse tall

Vi så at: TEGN
$$
\left( \cos\left( \frac{\pi}{3} \right)+i\sin\left( \frac{\pi}{3} \right) \right)\left( \cos\left( \frac{\pi}{6} \right)i\sin\left( \frac{\pi}{6} \right) \right) = \cos\left( \frac{\pi}{3}+\frac{\pi}{6} \right)+i\sin\left( \frac{\pi}{3}+\frac{\pi}{6} \right)
$$

Ser at det generelt gjelder. Hva med 
$z = \cos(t)+i\sin(t)$ og $w = \cos(v)+i\sin(v)?$

Jo $z\cdot w =\cos(t+v)+i\sin(t+v)$. 

Spesielt har vi $z\cdot z=\cos(2t)+i\sin(2t)$ og $z^3 = z^2\cdot z =\cos(3t)+i\sin(3t)$

Generelt har vi

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

TEGNFORHÅND

$z=r(\cos(t)+i\sin(t))$

$$
\begin{aligned} 
  \frac{1}{r}\frac{1}{\cos(t)+i\sin(t)}\cdot\frac{\cos(-t)+i\sin(-t)}{\cos(-t)+i\sin(-t)} &= \frac{1}{r}\frac{\cos(-t)+i\sin(-t)}{\cos(t-t)+i\sin(t-t)} \\ &=\frac{1}{r}\frac{\cos(-t)+i\sin(-t)}{\cos(0)+i\sin(0)} \\ &= \frac{1}{r}\frac{\cos(-t)+i\sin(-t)}{1+0i} \\ &= \frac{1}{r}(\cos(-t)+i\sin(-t)). 
\end{aligned} 
$$

PEK PÅ AT VI UTVIDER MED KOMPLEKSKONJUTERT! Sånn nesten

> [!question] Spørsmål 
> Hvis $z=2e^{i\pi/2}$ og $w =4 e^{i\pi}$, hva er
> 1. $z\cdot w$?
> 2. $\frac{z}{w}$?

SKRIV FOR HÅND

> [!question] Spørsmål 
> Hva er $\frac{z}{w}$ hvis 
> $z = 2+4i$ og $w = 1-5i$?

Jo, utnytter egenskapen til den kompleks konjugerte for å bli kvitt nevner
$$
\begin{aligned} 
  \frac{2+4i}{1-5i}\cdot\frac{1+5i}{1+5i} &= \frac{(2+4i)(1+5i)}{(1-5i)(1+5i)} \\ &=\frac{2+5i+4i+20i^2}{1-5^2i^2} \\ &=-\frac{18+9i}{1+5^2} = \frac{18}{26}+i \frac{9}{26}.
\end{aligned} 
$$

## Komplekse røtter

> [!question] Spørsmål 
> Kan vi finne røttene til $z^3 = 1$?

![undefined](Files/shapes%20at%2024-08-19%2014.48.08.svg)

> [!question] Spørsmål 
> Løs $z^4 = 16i$  

![undefined](Files/shapes%20at%2024-08-19%2014.58.27.svg)
