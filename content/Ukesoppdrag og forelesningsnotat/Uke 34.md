## P.4

> [!abstract] 5

Vi ser først etter $D(h)$. Begrensningen her er at vi må ha positive tall under rottegnet. Altså at $2-t \geq 0$, eller at $2\geq t$, så $D(h)=(-\infty,2]$.

Vi ser nå etter $V(h)$. Da er vi ute etter alle $a$ der det eksisterer $t$ hvor $a = \frac{t}{\sqrt{2-t}}$. Vi løser for $t$ og får
$$
\begin{aligned} 
  a^2  &= \frac{t^2}{2-t} \\ a^2(2-t) &=t^2 \\ -t^2 +2a^2-a^2t & = 0 \\t^2+a^2t-2a^2 &= 0 \\ \phantom{} \\ &\text{abc-formelen} \\ \phantom{} \\ t & = \frac{-a^2\pm\sqrt{a^4+8a^2}}{2}. 
\end{aligned} 
$$
Vi ser at uansett hva $a$ er, så finnes $t$ som løser likningen. Dermed må rekkevidden være $\mathbb{R}$.

> [!abstract] 11
> 

Dette er funksjonen $x^2$ løfta 1 oppover på andreaksen. Det betyr at den har en symmetri rundt linjen $x=0$, og funksjonen er derfor jevn.

> [!abstract] 31
> 

Denne funksjonen er også symmetrisk om $x=0$. I tillegg er det klart at $-|x| = -|-x|$, altså er funksjonen jevn.

> [!abstract] 33
> 

Dette er funksjonen $|x|$ forskjøvet $2$ mot høyre på $x$-aksen. Den er derfor symmetrisk om $x=2$. Det betyr også at funksjonen ikke er jevn eller odde. 

## P.6

> [!abstract] 7
> 

Vi ser at $x=-1$ gir $(-1)^3+1 = 0$. Dermed er $-1$ en rot. Gjør vi polynomdivisjon finner vi at $x^3+1 = (x+1)(x^2-x+1)$. Bruker vi abc-formelen på andregradspolynomet $x^2-x+1$ får vi
$$
x = \frac{1\pm \sqrt{1^2-4}  }{2 },
$$
som betyr at vi ikke har flere røtter. 

> [!abstract] 8
> 

Vi bruker konjugatsetningen (to ganger) og får $x^4-1 = (x^2+1)(x^2-1) =(x^2+1)(x-1)(x+1)$.

> [!abstract] 12
> 

Vi ser først at $x^4$ kan faktoriseres ut, $0$ er altså en rot med multiplisitet $4$. Det gir $x^4(x^5-4x^3-x^2+4)$. Nå ser vi enkelt ser at $x=1$ er en rot. Faktoriserer vi ut får vi $$x^4(x-1)(x^4 + x^3 - 3 x^2 - 4 x - 4 ).$$ Med litt undersøking finner vi også at $x=2$ gir $0$. Faktoriserer vi ut får vi $$x^4(x-1)(x-2)(x^3 + 3 x^2 + 3 x + 2).$$ Til slutt kan vi også finne at $x=-2$ er en løsning. Det gir faktoriseringen. 
$$
x^4(x-1)(x-2)(x+2)(x^2+x+1).
$$

> [!abstract] 17-20
> 

For hånd

> [!abstract] abc-formelen  

Utledening av abc-formelen er her [P.6.3 Andregradsfunksjoner og abc-formelen](Kapittel%200%20-%20innledende%20kapittel/P.6.3%20Andregradsfunksjoner%20og%20abc-formelen.md).

## P.7

> [!abstract] 7
> 

Vet at $\cos(\pi-x) = \cos (x)$, så $\cos(\pi-(x))=\cos(-x)=\cos (x)$.

> [!abstract] 8
> 

Rotasjon med $2\pi$ gir $\sin(2\pi-x)=\sin(-x)=-\sin (x)$.

> [!abstract] 12
> 

Skriver med $\sin (x)$ og $\cos (x)$ og får
$$
\begin{aligned} 
  \frac{\frac{\sin (x) }{\cos (x) } -\frac{\cos (x) }{\sin (x) }  }{\frac{\sin (x) }{\cos (x) } +\frac{\cos (x) }{\sin (x) }  }  &= \frac{\frac{\sin^2(x)-\cos^2(x) }{\cancel{ \cos (x)\sin (x)  }}  }{\frac{\sin^2(x)+\cos^2(x) }{\cancel{ \cos (x)\sin (x)  }}  } \\& = \frac{\sin^2(x)-\cos^2(x) }{1 } \\& =\sin^2(x)-\cos^2(x).
\end{aligned} 
$$

> [!abstract] Tegn $\cos (x)$ og $\tan (x)$. Forklar de naturlige utvidelse.  

Tegn selv. Utvidelsen kommer ved å bruke enhetssirkelen. Da ser vi at funksjonene er periodiske med periode $2\pi$.

> [!abstract] $\tan(\theta)=\frac{\sin(\theta) }{\cos(\theta) }$  

Tegn opp med trekant med hypotenus lik $1$. Se at de andre sidene er $\cos(\theta)$ og $\sin(\theta)$. Nå er det opplagt fra den geometriske definisjonen av $\tan(\theta)$.

> [!abstract] Tangens som en tangent
> 

Som vi ser under er lengden på tangenten som tangerer sirkelen i $(0,1)$ og vinkelbeinet som lager vinkelen $\theta$ med x-aksen faktisk $\tan(\theta)$.
![undefined](Files/shapes%20at%2024-08-19%2013.11.11.svg)