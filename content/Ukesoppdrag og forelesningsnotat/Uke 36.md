## 1.2

I oppgave 3 til 6 tar vi utgangspunkt i følgende graf.

![[Files/shapes at 24-09-09 10.24.55.svg]]


> [!abstract] 3
> Ved å se på grafen over, avgjør $\lim_{x\longrightarrow 1-}g(x)$.
> 

> [!note]- Løsning 
> 
> Under er tegninger der vi se hva $x$ går mot i blått og hva $g(x)$ går mot i rosa. Vi ser da at $\lim_{x\longrightarrow 1-}g(x) =1$.
> ![[Files/shapes at 24-08-26 08.51.32.svg]]
> 

> [!abstract] 4
>  Ved å se på grafen over, avgjør $\lim_{x\longrightarrow 1+}g(x)$.
> 

> [!note]- Løsning 
> Under er tegninger der vi se hva $x$ går mot i blått og hva $g(x)$ går mot i rosa. Vi ser da at $\lim_{x\longrightarrow 1+}g(x) = 0$.
> ![[Files/shapes at 24-08-26 08.52.28.svg]]
> 

> [!abstract] 5
>  Ved å se på grafen over, avgjør $\lim_{x\longrightarrow 3+}g(x)$.
> 

> [!note]- Løsning 
> 
> Under er tegninger der vi se hva $x$ går mot i blått og hva $g(x)$ går mot i rosa. Vi ser da at $\lim_{x\longrightarrow 3+}g(x) = 0$.
> ![[Files/shapes at 24-08-26 08.52.36.svg]]
> 

> [!abstract] 6
>  Ved å se på grafen over, avgjør $\lim_{x\longrightarrow 3-}g(x)$.
> 

> [!note]- Løsning 
> 
> Under er tegninger der vi se hva $x$ går mot i blått og hva $g(x)$ går mot i rosa. Vi ser da at $\lim_{x\longrightarrow 3-}g(x) = 0$.
> ![[Files/shapes at 24-08-26 08.53.22.svg]]
> 

> [!abstract] 10
> Se på $\lim_{t\longrightarrow -4}\frac{t^2}{4-t}$ og avgjør grensen eller forklar hvorfor den ikke eksisterer.
> 

> [!note]- Løsning 
> 
> Dette er en kontinuerlig funksjon, og vi ser at vi også bare kan sette inn verdien og få
> $$
> \lim_{t\longrightarrow  -4} \frac{t^2}{4-t} =\frac{(-4)^2}{4-(-4)} = \frac{16}{8}=2.
> $$
> 

> [!abstract] 11
> Se på $\lim_{x\longrightarrow  1}\frac{x^2-1}{x+1}$ og avgjør grensen eller forklar hvorfor den ikke eksisterer.
> 

> [!note]- Løsning 
> 
> Vi ser at $x^2-1=(x-1)(x+1)$, så vi kan forkorte. Men vi ser også at vi bare kan sette $x=1$ rett inn uten problemer
> $$
> \lim_{x\longrightarrow  1}\frac{x^2-1}{x+1} = \frac{1^2-1}{1+1} = \frac{0}{2}=0
> $$
> 

> [!abstract] 12
> Se på $\lim_{x\longrightarrow  -1}\frac{x^2-1}{x+1}$ og avgjør grensen eller forklar hvorfor den ikke eksisterer.
> 

> [!note]- Løsning 
> 
> Vi ser at $x^2-1=(x-1)(x+1)$, så vi kan forkorte, og får
> $$
> \begin{aligned} 
>   \lim_{x\longrightarrow  -1}\frac{x^2-1}{x+1} &=\lim_{x\longrightarrow  -1}\frac{(x-1)\cancel{ (x+1) }}{\cancel{ x+1 }} \lim_{x\longrightarrow  -1}(x-1) \\ &=-1-1=-2 
>   \end{aligned} 
>   $$
> 

> [!abstract] 13
> Se på $\lim_{x\longrightarrow   3} \frac{x^2-6x+9}{x^2-9}$ og avgjør grensen eller forklar hvorfor den ikke eksisterer.
> 

> [!note]- Løsning 
> 
> Først forenkler vi uttrykket vårt så mye vi kan.
> 
> $$
> \begin{aligned} 
>   \frac{x^2-6x+9}{x^2-9}=\frac{(x-3)\cancel{ (x-3) }}{\cancel{ (x-3) }(x+3)} \overset{ \text{når x ikke er 3} }{=  } \frac{x-3}{x+3}
>   \end{aligned} 
>   $$
>   Merk at vi bruker kunnskap om faktorisering av polynomer for å forenkle uttrykket, noe man kan lese om her [[Kapittel 0 - innledende kapittel/P.6.2 Faktorer, røtter og nullpunkt|P.6.2 Faktorer, røtter og nullpunkt]].
>   
>   Vi kan nå evaluere grensen slik
>   
>   $$
>   \lim_{x\longrightarrow   3} \frac{x^2-6x+9}{x^2-9}= \lim_{x\longrightarrow  3}\frac{x-3}{x+3}= \frac{0}{6}= 0.
>   $$
>   
> 

> [!abstract] 14
> Se på $\lim_{x\longrightarrow  -2}\frac{x^2+2x}{x^2-4}$ og avgjør grensen eller forklar hvorfor den ikke eksisterer.
> 

> [!note]- Løsning 
> 
> Faktoriser ut $x$ i teller og bruk tredje kvadratsetning i nevner og få
> $$
> \frac{x^2+2x}{x^2-4} = \frac{x\cancel{ (x+2) }}{\cancel{ (x+2) }{ (x-2) }} \overset{ x\neq-2}{=  } \frac{x}{x-2}.
> $$
> 
> Grensen evalueres enkelt nå til
> $$
> \lim_{x\longrightarrow  -2}\frac{x^2+2x}{x^2-4} = \lim_{x\longrightarrow  -2}\frac{x}{x-2}= \frac{-2}{-4}= \frac{1}{2}.
> $$
> 
> 

> [!abstract] 17
> Se på $\lim_{x\longrightarrow  9}\frac{\sqrt{x}-3}{x-9}$ og avgjør grensen eller forklar hvorfor den ikke eksisterer.
> 

> [!note]- Løsning 
> 
> Ved å bruke tredje kvadratsetning får vi
> $$
> \begin{aligned} 
>   \lim_{x\longrightarrow  9}\frac{\sqrt{x}-3}{x-9} &= \lim_{x\longrightarrow  9} \frac{\sqrt{x}-3}{(\sqrt{x}-3)(\sqrt{x}+3)} \\ &=\lim_{x\longrightarrow  9}\frac{1}{\sqrt{x}+3} = \frac{1}{\sqrt{9}+3}=\frac{1}6{}. 
>   \end{aligned}
> $$
> 

> [!abstract] 25
> Se på $\lim_{t\longrightarrow  0}\frac{t}{\sqrt{4+t}-\sqrt{4-t}}$ og avgjør grensen eller forklar hvorfor den ikke eksisterer.
> 

> [!note]- Løsning 
> 
> Et typisk triks hvis man har røtter i nevner er å utvide brøken med konjugatet til nevneren, altså $\sqrt{4+t}+\sqrt{4-t}$ fordi konjugatsetningen gir
> 
> $$
> \begin{aligned} 
>   \frac{t}{\sqrt{4+t}-\sqrt{4-t}}\cdot\frac{\sqrt{4+t}+\sqrt{4-t}}{\sqrt{4+t}+\sqrt{4-t}} &=  \frac{t(\sqrt{4+t}+\sqrt{4-t})}{\sqrt{4+t}^2-\sqrt{4-t}^2} \\ &= \frac{t(\sqrt{4+t}+\sqrt{4-t})}{4+t-(4-t)} \\ &= \frac{\cancel{ t }(\sqrt{4+t}+\sqrt{4-t})}{2\cancel{ t }} \\ &= \frac{\sqrt{4+t}+\sqrt{4-t}}{2}.
>   \end{aligned} 
> $$
> 
> Nå kan vi evaluere og få at 
> 
> $$
> \lim_{t\longrightarrow  0}\frac{t}{\sqrt{4+t}-\sqrt{4-t}} = \lim_{t\longrightarrow  0}\frac{\sqrt{4+t}+\sqrt{4-t}}{2} = \frac{2+2}{2}= 2.
> $$
> 
> 
## 1.3


> [!abstract] 3
> Avgjør grensen $\lim_{x\longrightarrow  \infty} \frac{3x^3-5x^2+7}{8+2x-5x^3}$.
> 

> [!note]- Løsning 
> 
> Siden vi ser på en grense til uendelig på en rasjonal funksjon, gjør vi standardtrikset ved å faktorisere ut høyeste grad. Det gir
> $$
> \begin{aligned} 
>   \lim_{x\longrightarrow  \infty} \frac{3x^3-5x^2+7}{8+2x-5x^3} & = \lim_{x\longrightarrow  \infty} \frac{\cancel{ x^3 }\left( 3-\frac{5}{x}+\frac{7}{x^3} \right)}{\cancel{ x^3 }\left(\frac{8}{x^3}+\frac{2}{x^2}-5 \right)} \\ &= \lim_{x\longrightarrow  \infty}  \frac{ 3-\frac{5}{x}+\frac{7}{x^3} }{\frac{8}{x^3}+\frac{2}{x^2}-5 } \\ &= \frac{3-0+0}{0+0-5} = - \frac{3}{5}
>   \end{aligned} 
> $$
> 

> [!abstract] 11
> Avgjør grensen $\lim_{x\longrightarrow  3}\frac{1}{3-x}$. Dersom den ikke eksisterer, er den $-\infty$, $\infty$ eller ingen av de?
> 

> [!note]- Løsning 
> 
> Merk at hvis $h=x-3$, eller at $x=3+h$ så vil $x\longrightarrow 3$ så vil $h\longrightarrow 0$. Det gjør at vi enkelt kan endre grensen slik
> $$
> \lim_{x\longrightarrow  3}\frac{1}{3-x}= \lim_{h\longrightarrow  0}\frac{1}{3-(3+h)}=\lim_{h \longrightarrow  0} \frac{1}{h}.
> $$
> Nå ser vi at venstre grense går mot $-\infty$ og høyre grense går mot $\infty$, så grensen eksisterer ikke.
> 

> [!abstract] 19
> Avgjør grensen $\lim_{x\longrightarrow  2+}\frac{x}{(2-x)^3}$. Dersom den ikke eksisterer, er den $-\infty$, $\infty$ eller ingen av de?
> 

> [!note]- Løsning 
> 
> Det er kanskje enklest å se grensen hvis vi lar $h = x-2$, for da vil $x\longrightarrow 2+$ bety at $h\longrightarrow 0+$. Vi får da at 
> $$
> \lim_{x\longrightarrow  2+}\frac{x}{(2-x)^3} = \lim_{h\longrightarrow  0+} \frac{h+2}{(2-(2+h))^3} = \lim_{h\longrightarrow  0+} \frac{h+2}{-h^3}
> $$
> Siden $h$ skal gå mot 0 kan vi se at $\frac{2}{-h^3}$ er mindre i absoluttverdi enn $\frac{h+2}{-h^3}$, så det er klart at når $h\longrightarrow 0+$ så vil
> $$
> \lim_{h\longrightarrow  0+}\frac{h+2}{-h^3} \leq\lim_{h\longrightarrow  0+}\frac{2}{-h^3}\longrightarrow  -\infty.
> $$
> 
> Derfor må også den originale grensen gå mot $- \infty$.
> 
> 

> [!abstract] 20
> Avgjør grensen $\lim_{x\longrightarrow  1-}\frac{x}{\sqrt{1-x^2}}$. Dersom den ikke eksisterer, er den $-\infty$, $\infty$ eller ingen av de?
> 

> [!note]- Løsning 
> 
> Merk at $1-x^2 \longrightarrow 0+$ når $x\longrightarrow 1-$. Spesielt går også $\sqrt{1-x^2}\longrightarrow 0+$ når $x\longrightarrow 1-$. I tillegg har vi at 
> $$
> \lim_{x\longrightarrow  1-}\frac{x}{\sqrt{1-x^2}}\geq \lim_{x\longrightarrow  1-}\frac{\frac{1}{2}}{\sqrt{1-x^2}}. 
> $$
> 
> Vi ser nå at den høyre grensen må gå mot $\infty$ siden nevneren går mot $0$ fra høyre side. Så
> $$
> \lim_{x\longrightarrow  1-}\frac{x}{\sqrt{1-x^2}} = \infty.
> $$
> 

> [!abstract] 28
> Avgjør grensen $\lim_{x\longrightarrow  \infty}\frac{x^2}{x+1}-\frac{x^2}{x-1}$. Dersom den ikke eksisterer, er den $-\infty$, $\infty$ eller ingen av de?
> 

> [!note]- Løsning 
> 
> Vi bearbeider uttrykket $\frac{x^2}{x+1}-\frac{x^2}{x-1}$ ved å først sette på felles nevner og får
> $$
> \begin{aligned} 
>    \frac{x^2}{x+1}-\frac{x^2}{x-1} & = \frac{x^2(x-1)-x^2(x+1)}{(x+1)(x-1)} \\ &= \frac{\cancel{ x^3 }-x^2-\cancel{ x^3 }-x^2}{x^2-1} \\ &= \frac{-2x^2}{x^2-1}  = -2\left( \frac{x^2-1+1}{x^2-1} \right) \\ &=-2\left( \frac{x^2-1}{x^2-1}+\frac{1}{x^2-1} \right) \\ &=-2\left( 1+\frac{1}{x^2-1} \right).
>    \end{aligned} 
>    $$
>    
>    Det er nå veldig tydelig at 
>    $$
>    \lim_{x\longrightarrow  \infty}\frac{x^2}{x+1}-\frac{x^2}{x-1} = \lim_{x\longrightarrow  \infty} -2\left( 1+\frac{1}{x^2-1} \right)=-2(1+0)=-2.
>    $$
> 
> 
## 1.4


> [!abstract] 4
> ![[Files/shapes at 24-09-09 10.43.48.svg]]
> Avgjør i hvilke av punktene i grafen under der $f$ er diskontinuerlig. Der $f$ er diskontinuerlig, avgjør om den er kontinuerlig fra venstre side? Høyre side?.
> 

> [!note]- Løsning 
> 
>  Vi ser at $f$ hopper når $x$ er $1$, $2$, $3$, $4$ og $5$. Vi ser at $f$ er kontinuerlig fra høyre side i $x=2$ og i $x=5$. I $x=4$ er $f$ kontinuerlig fra venstre.
> 

> [!abstract] 5
> ![[Files/shapes at 24-09-09 10.43.48.svg]]
> Avgjør og begrunn om $f$ kan redefineres i $x = 1$ slik at den blir kontinuerlig der.
> 

> [!note]- Løsning
>  
> Siden $f(x)$ ser ut til å gå mot uendelig både fra venstre og høyre side kan vi ikke redefinere $f$ slik at den blir kontinuerlig i $x=1$.
> 
> 

> [!abstract] 17
> Finn en verdi for $k$ slik at funksjonen $f$ blir kontinuerlig der
> $f(x) = \begin{cases} x^2, & \text{ hvis } x \leq 2 \\ k-x^2, & \text{ hvis } x>2.\end{cases}$
> 
> 

> [!note]- Løsning 
> 
> Vi er ute etter $k$ slik at $f(x)$ er kontinuerlig når
> $$
> f(x) = \begin{cases}
> x^2, & \text{ hvis } x \leq 2 \\
> k-x^2, & \text{ hvis } x>2.
> \end{cases}
> $$
> Vi ser at $f(2)= 2^2=4$. Vi trenger at når $x\longrightarrow 2$ fra venstre går mot $4$. Vi at $\lim_{x\longrightarrow 2-}f(x)=k-2^2 =k-4$. Dermed må $k=8$.
> 
> 

> [!abstract] 29
> Vis at $f(x)=x^3+x-1$ har et nullpunkt mellom $x=0$ og $x=1$.
> 

> [!note]- Løsning 
> 
> Siden $f(x) = x^3+x-1$ er kontinuerlig og $f(0) = -1$ og $f(1)=1$ så sier [[Kapittel 1 - grenser og kontinuitet/Definisjoner og teoremer/Teo 1.4.9 Skjæringssetningen|skjæringssetningen]] at alle verdier mellom -1 og 1 blir tatt på intervallet $0$ til $1$.
> 
> 

> [!abstract] 31
> Vis at $F(x) = (x-a)^2(x-b)^2+x$ tar verdien $\frac{a+b}{2}$ for et punkt $x$.
> 

> [!note]- Løsning 
> 
> $F(x) = (x-a)^2(x-b)^2+x$. Av symmetrien kan vi anta at $a$ er mindre enn $b$. $F$ er også kontinuerlig på $[a,b]$ og $F(a)=a$ og $F(b) = b$. Fra [[Kapittel 1 - grenser og kontinuitet/Definisjoner og teoremer/Teo 1.4.9 Skjæringssetningen|skjæringssetningen]] må vi ha at $F$ tar alle verdier mellom $a$ og $b$. Spesielt må den ta midtpunktet $\frac{a+b}{2}.$
> 
## 1.5


> [!abstract] 13
> Vis at $\lim_{x\longrightarrow  0}x^2 = 0$ ved å bruke den formelle definisjonen av grenser.
> 

> [!note]- Løsning 
> 
> Oppgaven ber oss om å vise at 
> $$
> \lim_{x\longrightarrow  0}x^2 = 0,
> $$
> ved å bruke den formelle definisjonen av grenser. 
> 
> Det betyr at vi må vise at hvis vi velger en vilkårlig $\varepsilon >0$ så må vi vise at det eksisterer en $\delta>0$ slik at hvis $|x-0|<\delta$ (altså at $x$ er mindre enn $\delta$ unna 0), så vil $|x^2-0|<\varepsilon$. 
> 
> Men hvis $|x^2-0| = |x^2| = x^2 <\varepsilon$ kan vi enkelt se at det er det samme som å si at $x<\sqrt{\varepsilon}$. Dermed må vi få at hvis $\delta \leq \sqrt{\varepsilon}$ så vil konklusjonen følge.
> 
> Det vil si:
> $$
> |x^2-0| = x^2 < \delta^2 <\sqrt{\varepsilon}^2 = \varepsilon.
> $$
> 
> 

> [!abstract] 19
> Vis at $\lim_{x\longrightarrow  1} \sqrt{x}= 1$ ved å bruke den formelle definisjonen av grenser.
> 

> [!note]- Løsning 
> 
> Oppgaven ber oss om å vise at 
> $$
> \lim_{x\longrightarrow  1} \sqrt{x}= 1,
> $$
> ved å bruke den formelle definisjonen av grenser. 
> 
> Det betyr at vi må vise at hvis vi velger en vilkårlig $\varepsilon >0$ så må vi vise at det eksisterer en $\delta>0$ slik at hvis $|x-1|<\delta$ (altså at $x$ er mindre enn $\delta$ unna 1), så vil $|\sqrt{x}-1|<\varepsilon$. 
> 
> *Ide*: Størrelsen til $x$ kan vi anta at alltid er positiv siden vi ser på $\sqrt{x}$.
> 
> Vi vet at hvis $x <1$ så vil $\sqrt{x}$ komme nærmere $1$ enn $x$, tilsvarende vil også $x>1$ ha den egenskapen. Så det må bety at $|1-\sqrt{x}| < |1-x|$ og resultatet følger egentlig automatisk hvis $\delta \leq \varepsilon$. 
> 
> Vi kan derfor enten stoppe her. For de som ønsker et litt mer håndfast argument for ideen over kan tenke slik.
> 
> Vil vise at $|1-\sqrt{x}|<|1-x|$. La oss bruke tredje kvadratsetning for å få noe å sammenligne med 
> 
> $$
> \begin{aligned} 
>   |1-x| = |(1-\sqrt{x})(1+\sqrt{x})| = |1-\sqrt{x}|\cdot|1+\sqrt{x}|.
> \end{aligned}
> $$
>   Siden $1+\sqrt{x}>1$ så vil det å dele på $1+\sqrt{x}$ gjør et positivt tall mindre. Det betyr at
> $$
> \begin{aligned} 
> |1-x| > \frac{|1-x|}{|1+\sqrt{x}|} = \frac{|1-\sqrt{x}|\cdot\cancel{ |1+\sqrt{x}| } }{\cancel{ |1+\sqrt{x}| }}> |1-\sqrt{x}|.
> \end{aligned} 
> $$
> 
>nUlikheten over sier at hvis $\delta<\varepsilon$ og $|1-x|<\delta$ så er $\varepsilon > \delta>|1-x|>|1-\sqrt{x}|$.

## A.3


> [!abstract] 4
> Bevis at $f(x) = C$, der $C$ er en konstant, og $g(x) = x$ begge er kontinuerlige på hele $\mathbb{R}$ ved hjelp av den formelle definisjonen av kontinuitet.

> [!note]- Løsning 
> 
> 
> La oss bevise at $f(x)=C$ er kontinuerlig på hele tallinja. 
> 
> Vi velger et vilkårlig punkt $a$ og vi ønsker å, for en vilkårlig $\varepsilon>0$ finne en $\delta$ slik at $|f(x)-f(a)|=|f(x)-C| <\varepsilon$ så lenge $|x-a|<\delta$.
> Her er ting heldigvis enkelt, for hvis $\varepsilon>0$, så er $f(x)=C$ så $|f(x)-f(a)| = |C-C|=0$, så enhver $\delta>0$ fungerer. Vi ser også at $a$ var et vilkårlig punkt, så $f$ er kontinuerlig i alle punkt på tallinja, altså er $f$ kontinuerlig.
> 
> La oss bevise at $g(x)=x$ er kontinuerlig på $\mathbb{R}$. Velg $a\in\mathbb{R}$ og $\varepsilon>0$. Da er $|g(x)-g(a)|=|x-a|$, så hvis $\delta<\varepsilon$ får vi at når $|x-a|<\delta <\varepsilon$ så er $|g(x)-g(a)|<\varepsilon$. Siden $a$ og $\varepsilon$ var vilkårlig valgt, ser vi at $g(x)$ er kontinuerlig for alle $a$ så $g(x)$ er kontinuerlig på $\mathbb{R}$.
> 

> [!abstract] 5
> Bevis at alle polynomer er kontinuerlig på $\mathbb{R}$.

> [!note]- Løsning 
> 
> 
> 
> 
> Siden et polynom generelt er på formen $a_n x^n+a_{n-1}x^{n-1}+\ldots+a_2x^2+a_1x+a_0$ er det naturlig å tenke at vi bør argumentere ved hjelp av noen generelle resultater. Heldigvis kan vi bruke teorem 1, som sier at alle kombinasjoner av summer, produkter av kontinuerlige funksjoner er kontinuerlige. 
> 
> I oppgave 5 viste vi at både $C$ og $x$ var kontinuerlige. Dermed må både $x\cdot x = x^2$ og $C\cdot x$ være kontinuerlige for alle konstanter $C$. 
> 
> Spesielt kan vi se at vi kan fortsette dette å si at $x^2\cdot x = x^3$ og derfor $x^3\cdot x = x^4$ og derfor... og derfor $x^{n-1}\cdot x = x^n$ er alle kontinuerlige. 
> 
> Videre må derfor også $a_n x^n$ og $a_{n-1}x^{n-1}$,..., $a_1x$ og $a_0$ alle være kontinuerlige. 
> 
> Det vi sier er at alle leddene i et vilkårlig polynom er kontinuerlige. Men siden summer av kontinuerlige funksjoner er kontinuerlige må følgelig også ethvert polynom være kontinuerlig!
> 
> 
> 
## 2.2


> [!abstract] 1
> Skisser den deriverte til grafen under
> 
> ![[Files/shapes at 24-09-09 11.54.47.svg]]

> [!note]- Løsning 
> 
> 
> 
> ![[Files/shapes at 24-08-30 12.06.29.svg]]
> 
> Merk at der funksjonen *knekker* er der den deriverte hopper, markert i hvite ringer. Der er ikke den deriverte definert.
> 

> [!abstract] 2
> Skisser den deriverte til grafen under
> 
> ![[Files/shapes at 24-09-09 11.54.59.svg]]


> [!note]- Løsning 
> 
> 
> 
> 
> ![[Files/shapes at 24-08-30 12.07.03.svg]]
> 
> Merk at der funksjonen *knekker* er der den deriverte hopper, markert i hvite ringer. Der er ikke den deriverte definert.
> 

> [!abstract] 3
> Skisser den deriverte til grafen under
> 
> ![[Files/shapes at 24-09-09 11.55.17.svg]]



> [!note]- Løsning 
> 
> 
> 
> ![[Files/shapes at 24-08-30 12.04.42.svg]]
> 

> [!abstract] 4
> Skisser den deriverte til grafen under
> 
> ![[Files/shapes at 24-09-09 11.55.31.svg]]

> [!note]- Løsning 
> 
> 
> 
> 
> ![[Files/shapes at 24-08-30 12.04.26.svg]]
> 

> [!abstract] 5
> Avgjør hvor grafen under er deriverbar
> 
> ![[Files/shapes at 24-09-09 11.54.47.svg]]

> [!note]- Løsning 
> 
> 
> 
> 
> ![[Files/shapes at 24-08-30 12.06.29.svg]]
> 
> Ved å se på skissen fra 1. ser vi at der funksjonen *knekker* er der den deriverte hopper, markert i hvite ringer. Der er ikke den deriverte definert. Vi får ikke oppgitt enheter, men er det kan se ut som den er definert på $(-2,2)\setminus\{-1, 1\}$, altså alle punkter mellom $-2$ og $2$ bortsett fra $1$ og $-1$. 
> 

> [!abstract] 11
> Avgjør den deriverte til $y=x^2-3x$ ved å bruke definisjonen for den deriverte.

> [!note]- Løsning 
> 
> Vi ønsker å derivere $y=x^2-3x$ for hånd.
> 
> Da får vi 
> $$
> \begin{aligned} 
>   & \lim_{h\longrightarrow  0}\frac{(x+h)^2-3(x+h)-(x^2-3x)}{h} 
>   \\ = & \lim_{h\longrightarrow  0} \frac{\cancel{ x^2 }+2xh+h^2-\cancel{ 3x }-3h-\cancel{ x^2 }+\cancel{ 3x }}{h} 
>   \\ =& \lim_{h\longrightarrow  0}\frac{2xh+h^2-3h}{h}  \\ =& \lim_{h\longrightarrow  0}\frac{\cancel{ h }(2x+h-3)}{\cancel{ h }} 
>   \\ =& \lim_{h\longrightarrow  0}2x+h-3 = 2x-3.
> \end{aligned}    
> $$
> 
## 2.3


> [!abstract] 17
> Deriver $f(x)=\frac{1-4x^2}{x^3}$. Forenkle uttrykket hvis mulig.

> [!note]- Løsning 
> 
> 
> 
> Vi skal se på $f(x)=\frac{1-4x^2}{x^3}$. Vi kan for eksempel bruke kvotientregelen her. Vi kan også først forenkle uttrykket.
> 
> $$
> f(x)=\frac{1}{x^3}-\frac{4x^2}{x^3}=x^{-3}-4x^{-1}.
> $$
> Vanlige regneregler gir nå
> $$
> f'(x)=-3x^{-3-1}-4\cdot(-1) x^{-1-1} =-3x^{-4}+4x^{-2}.
> $$
> 

> [!abstract] 23
> Deriver $s = \frac{1+\sqrt{t}}{1-\sqrt{t}}$. Forenkle uttrykket hvis mulig.

> [!note]- Løsning 
> 
> 
> 
> Vi skal derivere $s = \frac{1+\sqrt{t}}{1-\sqrt{t}}$. Vi vet at $\frac{d}{dt}(1+t^{1/2}) = \frac{1}{2}t^{-\frac{1}{2}}$ og $\frac{d}{dx}(1-t^{1/2}) = -\frac{1}{2}t^{-\frac{1}{2}}$.
> 
> Kvotientregelen gir da
> $$
> \begin{aligned} 
>    &\frac{\frac{1}{2}t^{-1/2}(1-\sqrt{t})-(1+\sqrt{t})\cdot\left( -\frac{1}{2} \right)t^{-1/2}}{(1-\sqrt{t})^2} \\ =& \frac{t^{-1/2}}{2}\cdot\frac{1-\cancel{ \sqrt{t} }+1+\cancel{ \sqrt{t} }}{(1-\sqrt{t})^2} = \frac{t^{-1/2}}{\cancel{ 2 }}\cdot\frac{\cancel{ 2 }}{(1-\sqrt{t})^2} \\ =& \frac{1}{\sqrt{t}(1-\sqrt{t})^2}
> \end{aligned} 
> $$
> 

> [!abstract] 36
> Avgjør verdien til uttrykket 
> $$
> \frac{d}{dx}\left( \frac{f(x)}{x^2+f(x)} \right) \Bigg|_{x=2}
> $$
> når $f(2) = 2$ og $f'(2)= 3$.

> [!note]- Løsning 
> 
> 
> 
> Oppgaven ber oss om å evaluere $\frac{d}{dx}\left( \frac{f(x)}{x^2+f(x)} \right)$ i punktet $x=2$.
> 
> Vi bruker [[Kapittel 2 - derivasjon/2.3.5 Kvotientregelen|kvotientregelen]] for å derivere, så vi deriverer teller og nevner først. $f(x)$ derivert er bare $f'(x)$ og  $\frac{d}{dx}(x^2+f(x))$ er $2x+f'(x)$. Da får vi at
> $$
> \frac{d}{dx}\left( \frac{f(x)}{x^2+f(x)} \right) = \frac{f'(x)(x^2+f(x))-f(x)(2x+f'(x))}{(x^2+f(x))^2}.
> $$
> 
> Nå må vi bare bruke at $f(2) = 2$ og $f'(2)=3$. Setter vi inn får vi
> $$
> \begin{aligned} 
>    \frac{f'(2)(2^2+f(2))-f(2)(2\cdot2+f'(2))}{(2^2+f(2))^2}  &= \frac{3\cdot(4+2)-2(4+3)}{(4+2)^2} \\ &= \frac{18-14}{36} = \frac{4}{36}=  \frac{1}{9}.
> \end{aligned} 
> $$
> 

> [!abstract] 46
> Finn koordinatene til punktene på kurven $y=\frac{x+1}{x+2}$ der tangentlinjen er parallell med linjen $4x$.

> [!note]- Løsning 
> 
> 
> 
> 
> Hvis $y = \frac{x+1}{x+2}$ da er 
> $$
> y' = \frac{1\cdot(x+2)-(x+1)\cdot1}{(x+2)^2} = \frac{1}{(x+2)^2}.
> $$
> 
> Vi å finne $x$ slik at $y' = 4$, altså at tangenten til $y$ i punktet $x$ er parallell med linjen $y = 4x$.
> 
> Det gir oss likningen
> $$
> \begin{aligned} 
>   \frac{1}{(x+2)^2}  & = 4 \\ \frac{1}{4}  & = (x+2)^2 \\ \frac{1}{4} &= x^2+4x+4 \\ x^2+4x+\frac{15}{4} &= 0.
> \end{aligned} 
> $$
> Nå gir [[Kapittel 0 - innledende kapittel/Definisjoner og teoremer/Teo P.6.2 abc-formelen|abc-formelen]] at $x=-\frac{3}{2}$ eller $x = -\frac{5}{2}$. Siden vi skal finne koordinatene, må vi også ha $y$-verdi for disse $x-$verdiene. Det gir punktene.
> $$
> \left( -\frac{3}{2}, -1 \right) \quad \text{ og }\quad \left( -\frac{5}{2}, 3 \right).
> $$