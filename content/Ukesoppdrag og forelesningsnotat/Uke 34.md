## P.4


> [!abstract] 5
> Avgjør definisjonsmengde og verdimengde for $h(t) = \frac{t}{\sqrt{2-t}}.$

> [!note]- Løsning
>
> 
> Vi ser først etter $D(h)$. Begrensningen her er at vi må ha positive tall under rottegnet. Altså at $2-t \geq 0$, eller at $2\geq t$, så $D(h)=(-\infty,2]$.
> 
> Vi ser nå etter $V(h)$. Da er vi ute etter alle $a$ der det eksisterer $t$ hvor $a = \frac{t}{\sqrt{2-t}}$. Vi løser for $t$ og får
> $$
> \begin{aligned} 
>   a^2  &= \frac{t^2}{2-t} \\ a^2(2-t) &=t^2 \\ -t^2 +2a^2-a^2t & = 0 \\t^2+a^2t-2a^2 &= 0 \\ \phantom{} \\ &\text{abc-formelen} \\ \phantom{} \\ t & = \frac{-a^2\pm\sqrt{a^4+8a^2}}{2}. 
> \end{aligned} 
> $$
> Vi ser at uansett hva $a$ er, så finnes $t$ som løser likningen. Dermed må rekkevidden være $\mathbb{R}$.
> 

> [!abstract] 11
> Avgjør om funksjonen $f(x) = x^2+1$ har noen symmetrier. Er den jevn eller odde?

> [!note]- Løsning
>
> 
> 
> Dette er funksjonen $x^2$ løfta 1 oppover på andreaksen. Det betyr at den har en symmetri rundt linjen $x=0$, og funksjonen er derfor jevn.
> 

> [!abstract] 31
> Skisser grafen $f(x) = -|x|$.

> [!note]- Løsning
>
> Denne funksjonen er også symmetrisk om $x=0$. I tillegg er det klart at $-|x| = -|-x|$, altså er funksjonen jevn.
> 
> ![[Files/shapes at 24-09-09 12.38.39 1.svg]]



> [!abstract] 33
> Skisser grafen $f(x) = |x-2|$

> [!note]- Løsning
>
> 
> 
> Dette er funksjonen $|x|$ forskjøvet $2$ mot høyre på $x$-aksen. Den er derfor symmetrisk om $x=2$. Det betyr også at funksjonen ikke er jevn eller odde. 
> ![[Files/shapes at 24-09-09 12.39.22.svg]]
> 
## P.6


> [!abstract] 7
> Finn de reelle røttene til polynomet $x^3+1$. Skriv polynomet som et produkt av faktorene sine.

> [!note]- Løsning
>
> 
> 
> Vi ser at $x=-1$ gir $(-1)^3+1 = 0$. Dermed er $-1$ en rot. Gjør vi polynomdivisjon finner vi at $x^3+1 = (x+1)(x^2-x+1)$. Bruker vi abc-formelen på andregradspolynomet $x^2-x+1$ får vi
> $$
> x = \frac{1\pm \sqrt{1^2-4}  }{2 },
> $$
> som betyr at vi ikke har flere røtter. 
> 

> [!abstract] 8
> Finn de reelle røttene til polynomet $x^4-1$. Skriv polynomet som et produkt av faktorene sine.

> [!note]- Løsning
>
> 
> 
> Vi bruker konjugatsetningen (to ganger) og får $x^4-1 = (x^2+1)(x^2-1) =(x^2+1)(x-1)(x+1)$.
> 

> [!abstract] 12
> Finn de reelle røttene til polynomet $x^9-4x^7-x^6+4x^4$. Skriv polynomet som et produkt av faktorene sine.

> [!note]- Løsning
>
> 
> 
> Vi ser først at $x^4$ kan faktoriseres ut, $0$ er altså en rot med multiplisitet $4$. Det gir $x^4(x^5-4x^3-x^2+4)$. Nå ser vi enkelt ser at $x=1$ er en rot. Faktoriserer vi ut får vi $$x^4(x-1)(x^4 + x^3 - 3 x^2 - 4 x - 4 ).$$ Med litt undersøking finner vi også at $x=2$ gir $0$. Faktoriserer vi ut får vi $$x^4(x-1)(x-2)(x^3 + 3 x^2 + 3 x + 2).$$ Til slutt kan vi også finne at $x=-2$ er en løsning. Det gir faktoriseringen. 
> $$
> x^4(x-1)(x-2)(x+2)(x^2+x+1).
> $$
> 

> [!abstract] 17
> Skriv $\frac{x^3-1}{x^2-2}$ som en sum av et polynom og en rasjonal funksjon der graden til telleren er lavere enn graden til nevneren i den rasjonale funksjonen.


> [!note]- Løsning
> ![[Files/shapes at 24-09-09 12.51.32.svg]]


> [!abstract] 18
> Skriv $\frac{x^2}{x^2+5x+3}$ som en sum av et polynom og en rasjonal funksjon der graden til telleren er lavere enn graden til nevneren i den rasjonale funksjonen.


> [!note]- Løsning
> 
![[Files/shapes at 24-09-09 12.53.24.svg]]

> [!abstract] 19
> Skriv $\frac{x^3}{x^2+2x+3}$ som en sum av et polynom og en rasjonal funksjon der graden til telleren er lavere enn graden til nevneren i den rasjonale funksjonen.


> [!note]- Løsning
> ![[Files/shapes at 24-09-09 12.52.09.svg]]



> [!abstract] 20
> Skriv $\frac{x^4+x^2}{x^3+x^2+1}$ som en sum av et polynom og en rasjonal funksjon der graden til telleren er lavere enn graden til nevneren i den rasjonale funksjonen.

> [!note]- Løsning
![[Files/shapes at 24-09-09 12.53.09.svg]]


> [!abstract] Utled abc-formelen.

> [!note]- Løsning
>abc-formelen  
> 
> Utledening av abc-formelen er her [P.6.3 Andregradsfunksjoner og abc-formelen](Kapittel%200%20-%20innledende%20kapittel/P.6.3%20Andregradsfunksjoner%20og%20abc-formelen.md).
> 
## P.7


> [!abstract] 7
> Uttrykk $\cos(\pi+x)$ ved hjelp av $\sin(x)$ og $\cos(x)$.

> [!note]- Løsning
>
> 
> 
> Vet at $\cos(\pi-x) = \cos (x)$, så $\cos(\pi-(x))=\cos(-x)=\cos (x)$.
> 

> [!abstract] 8
> Uttrykk $\sin(2\pi-x)$ ved hjelp av $\sin(x)$ og $\cos(x)$.

> [!note]- Løsning
>
> 
> 
> Rotasjon med $2\pi$ gir $\sin(2\pi-x)=\sin(-x)=-\sin (x)$.
> 

> [!abstract] 12
> Uttrykk $\frac{\tan(x)-\frac{1}{\tan(x)}}{\tan(x)+\frac{1}{\tan(x)}}$ ved hjelp av $\sin(x)$ og $\cos(x)$.

> [!note]- Løsning
>
> 
> 
> Skriver med $\sin (x)$ og $\cos (x)$ og får
> $$
> \begin{aligned} 
>   \frac{\frac{\sin (x) }{\cos (x) } -\frac{\cos (x) }{\sin (x) }  }{\frac{\sin (x) }{\cos (x) } +\frac{\cos (x) }{\sin (x) }  }  &= \frac{\frac{\sin^2(x)-\cos^2(x) }{\cancel{ \cos (x)\sin (x)  }}  }{\frac{\sin^2(x)+\cos^2(x) }{\cancel{ \cos (x)\sin (x)  }}  } \\& = \frac{\sin^2(x)-\cos^2(x) }{1 } \\& =\sin^2(x)-\cos^2(x).
> \end{aligned} 
> $$
> 

> [!abstract]  Forklar den naturlige utvidelsen av $\cos(x)$ sin definisjonsmengde til $\mathbb{R}$  og hvorfor $\tan(x)$ sin naturlige utvidelse e 

> [!note]- Løsning
>Tegn $\cos (x)$ og $\tan (x)$. Forklar de naturlige utvidelse.  
> 
> Tegn selv. Utvidelsen kommer ved å bruke enhetssirkelen. Da ser vi at funksjonene er periodiske med periode $2\pi$.
> 

> [!abstract] Gi et argument for hvorfor den geometriske definisjonen av $\tan(x)$ er forenelig med definisjonen $\tan(x) = \frac{\sin(x)}{\cos(x)}$.

> [!note]- Løsning
>$\tan(\theta)=\frac{\sin(\theta) }{\cos(\theta) }$  
> 
> Tegn opp med trekant med hypotenus lik $1$. Se at de andre sidene er $\cos(\theta)$ og $\sin(\theta)$. Nå er det opplagt fra den geometriske definisjonen av $\tan(\theta)$.
> 

> [!abstract] Tegn en vinkel $x$ (i grunnstilling) inn i enhetssirkelen, og tegn en linje som tangerer sirkelen i punktet $(1,0)$. Hvor høyt opp på denne tangenten skjærer vinkelen (hvis vi utvider vinkelbeinet)?

> [!note]- Løsning
>Tangens som en tangent
> 
> 
> Som vi ser under er lengden på tangenten som tangerer sirkelen i $(0,1)$ og vinkelbeinet som lager vinkelen $\theta$ med x-aksen faktisk $\tan(\theta)$.
> ![undefined](Files/shapes%20at%2024-08-19%2013.11.11.svg)