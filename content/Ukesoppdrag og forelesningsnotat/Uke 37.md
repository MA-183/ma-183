## 2.4 

> [!abstract] 1
> Avgjør den deriverte til $y=(2x+3)^6$

> [!note]- Løsning
>
> 
> $y = (2x+3)^6$. Vi dekomponerer ved å se at $f(x)=2x+3$ er den indre delen av funksjonen og $g(x) = x^6$ er den ytre. Vi får da at $y = g(f(x)).$ Da gir kjerneregelen at $\frac{dy}{dx} = f'(x)\cdot g'(f(x))$. 
> 
> Siden $f'(x) = 2$ og $g'(x)=6x^5$ så er $g'(f(x))=6(2x+3)^5$. Setter vi det sammen får vi
> 
> $\frac{dy}{dx} = 2\cdot 6(2x+3)^5 = 12(2x+3)^5$.
> 
> 

> [!abstract] 3
> Avgjør den deriverte til $f(x) = (4-x^2)^{10}$

> [!note]- Løsning
>
> 
> Finn den deriverte til funksjonen $f$ når $f(x)=(4-x^2)^{10}$.
> $f'(x) = \dfrac{d}{dx}((4-x^2)^{10})$
> Bruker kjerneregelen ved å la $u=4-x^2$, slik at $\dfrac{df}{dx}=\dfrac{df}{du}\cdot\dfrac{du}{dx}$
> $$
> \begin{aligned} 
>   f'(x)=\dfrac{d}{dx}u^{10} &=\dfrac{d}{dx}u^{10}\cdot\dfrac{du}{dx} \\ &=\dfrac{d}{du}u^{10}\cdot\dfrac{d}{dx}(4-x^2)  \\ &= 10u^9(-2x).
> \end{aligned} 
> $$
> Substituerer inn $4-x^2$ for $u$ igjen
> $$
> \begin{aligned} 
> f'(x) &=  10(4-x^2)^9(-2x)
> \\ & =-20x(4-x^2)^9.
> \end{aligned} 
> $$
> 
> 
> 

> [!abstract] 6
> Avgjør den deriverte til $(1+x^{2/3})^{\frac{3}{2}}$.

> [!note]- Løsning
>
> 
> Finn den deriverte til funksjonen $f$ når $f(x)=(1+x^{\frac{2}{3}})^{\frac{3}{2}}$.
> 
> Setter $u=1+x^{\frac{2}{3}}$ og får at
> $$
> \begin{aligned} 
>   f'(x) &=\dfrac{d}{du}u^{\frac{3}{2}}\cdot\dfrac{d}{dx}(1+x^{\frac{2}{3}})
> \\ & =\dfrac{3}{2}u^{\frac{1}{2}}(\dfrac{2}{3}x^{-\frac{1}{3}})
> \\ &=(1+x^{\frac{2}{3}})^{\frac{1}{2}}x^{-\frac{1}{3}} \\ \phantom{} & \\ &\text{eventuelt} \\ \phantom{} \\ &  {\color{#666} =
> \dfrac{\sqrt{1+\sqrt[3]{x}^2}}{\sqrt[3]{x}}. }
> \end{aligned} 
> $$
> 
> 

> [!abstract] 31
> Avgjør verdien $\frac{d}{dt}\sqrt{3t-7}\bigg|_{t=3}$.

> [!note]- Løsning
>
> 
> $$
> \begin{align*}
> \dfrac{d}{dt}\sqrt{3t-7}\bigg|_{t=3} 
> &= \dfrac{d}{dt}u^{\frac{1}{2}}\bigg|_{t=3}, \quad \text{der  } u = 3t - 7\\[0.2 cm]
> &= \dfrac{d}{du}u^{\frac{1}{2}} \cdot \dfrac{du}{dt}\bigg|_{t=3}\\[0.2 cm]
> &= \dfrac{d}{du}u^{\frac{1}{2}} \cdot \dfrac{d}{dt}(3t-7)\bigg|_{t=3}\\[0.2 cm]
> &= \dfrac{1}{2}u^{-\frac{1}{2}} \cdot 3\bigg|_{t=3}\\[0.2 cm]
> &= \dfrac{1}{2}(3t-7)^{-\frac{1}{2}} \cdot 3\bigg|_{t=3}\\[0.2 cm]
> &= \dfrac{1}{2}(3 \cdot 3 - 7)^{-\frac{1}{2}} \cdot 3\\[0.2 cm]
> &= \dfrac{1}{2} \cdot 2^{-\frac{1}{2}} \cdot 3\\[0.2 cm]
> &= \dfrac{3}{2\sqrt{2}}, \quad \text{eller tilsvarende } \dfrac{3\sqrt{2}}{4}.
> \end{align*}
> 
> $$
> 
## 2.5


> [!abstract] 3
> Avgjør den deriverte til $\cos(3x)$ og forenkle uttrykket hvis det lar seg gjøre. 

> [!note]- Løsning
>
> 
> Vi benytter oss av [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] der $3x$ er den indre funksjonen og $\cos(x)$ er den ytre.
> 
> Vi får da at $\frac{d}{dx} y = 3\cdot(-\sin(3x))=-3\sin(3x)$.
> 

> [!abstract] 5
> Avgjør den deriverte til $\tan(\pi x)$ og forenkle uttrykket hvis det lar seg gjøre. 

> [!note]- Løsning
>
> 
> Fra [[Kapittel 2 - derivasjon/2.5.3 Derivasjon av andre trigonometriske funksjoner#^63c620|notatet om derivasjon av andre trigonometriske funksjoner]] vet vi at $\frac{d}{dx}\tan(x) = \frac{1}{\cos^2(x)}$. Vi bruker nå [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] og får at
> $$
> \frac{d}{dx} \tan(\pi x) = \pi \cdot \frac{1}{\cos^2(\pi x)}.
> $$
> 

> [!abstract] 11
> Avgjør den deriverte til $\sin(\pi x^2)$ og forenkle uttrykket hvis det lar seg gjøre. 

> [!note]- Løsning
>
> 
> Vi benytter oss av [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] der $g(x) = \pi x^2$ er den indre funksjonen og $f(x) = \sin(x)$ er den ytre. Da er 
> $$
> \sin(\pi x^2) = 2\pi x \cos(\pi x^2)
> $$
> 
> 

> [!abstract] 13
> Avgjør den deriverte til $y = \sqrt{1+\cos(x)}$ og forenkle uttrykket hvis det lar seg gjøre. 

> [!note]- Løsning
>
> 
> Vi benytter oss av [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] der $g(x) = 1+\cos(x)$ er den indre funksjonen og $f(x)=\sqrt{x}$ er den ytre. Da er $g'(x) = -\sin(x)$ og $f'(x) = \frac{1}{2\sqrt{x}}$. Da får vi at
> $$
> \frac{d}{dx} \sqrt{1+\cos(x)} = g'(x)f'(g(x))=-\sin(x) \cdot \frac{1}{2\sqrt{1+\cos(x)}}.
> $$
> 

> [!abstract] 15
> Avgjør den deriverte til $\cos(x+\sin(x))$ og forenkle uttrykket hvis det lar seg gjøre. 

> [!note]- Løsning
>
> 
> Hvis $f(x) = \cos(x+\sin(x))$ så kan vi tenke på $\cos(x)$ som ytre funksjon og $x+\sin(x)$ som indre. Da gir [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] at 
> $$
> f'(x) = (1+\cos(x))(-\sin(x+\sin(x))).
> $$
> 
> Det er ikke noen opplagte måter å forenkle uttrykket enn å skrive det litt *penere*.
> $$
> f'(x)=-(1+\cos(x))\sin(x+\sin(x)).
> $$
> 
> 
> 

> [!abstract] 26
> Avgjør den deriverte til $\tan(3x)\cdot \frac{\cos(3x)}{\sin(3x)}$ og forenkle uttrykket hvis det lar seg gjøre. 

> [!note]- Løsning
>
> 
> Vi skriver om $\tan(3x)\cot(3x)$ ved å bruke definisjonen. Da får vi
> $$
> \tan(3x)\cos(3x)= \frac{\sin(3x)}{\cos(3x)}\frac{\cos(3x)}{\sin(3x)} = 1.
> $$
> 
> Dermed er den deriverte helt åpenbar, nemlig 0.
> 

> [!abstract] 27
> Avgjør den deriverte til $t\cos(t)-\sin(t)$ og forenkle uttrykket hvis det lar seg gjøre. 

> [!note]- Løsning
>
> 
> Vi ser på $t\cos(t)-\sin(t)$. Vi bruker [[Kapittel 2 - derivasjon/defogteo/Teo Produktregelen|produktregelen]] på første ledd og får at
> $$
> \begin{aligned} 
>   \frac{d}{dt} (t\cos(t)-\sin(t)) & = (\cos(t)+t\cdot(-\sin(t))-\cos(t)) \\ &= \cos(t)-t\sin(t)-\cos(t) \\ &= - t \sin(t).
> \end{aligned} 
> $$
> 

> [!abstract] 28
> Avgjør den deriverte til $t\sin(t)+\cos(t)$ og forenkle uttrykket hvis det lar seg gjøre. 

> [!note]- Løsning
>
> 
> Her vil [[Kapittel 2 - derivasjon/defogteo/Teo Produktregelen|produktregelen]] hjelpe oss. Vi får
> $$
> \begin{aligned} 
>   \frac{d}{dt} (t\sin(t)+\cos(t)) &= 1\sin(t)+t\cos(t)-\sin(t) \\ &= t\cos(t).
> \end{aligned} 
> $$
> 

> [!abstract] 29
> Avgjør den deriverte til $\frac{\sin(x)}{1+\cos(x)}$ og forenkle uttrykket hvis det lar seg gjøre. 

> [!note]- Løsning
>
> 
> Her kan vi bruke [[Kapittel 2 - derivasjon/defogteo/Teo Kvotientregelen|kvotientregelen]].
> $$
> \begin{aligned} 
>   \frac{d}{dx} \left( \frac{\sin(x)}{1+\cos(x)} \right)  & = \frac{\cos(x)(1+\cos(x))-\sin(x)(-\sin(x))}{(1+\cos(x))^2} \\ &= \frac{\cos(x)+{\color{#e599f7} \cos^2(x)+\sin^2(x) }}{(1+\cos(x))^2} \\ &= \frac{1+\cos(x)}{(1+\cos(x))^2} \\ &= \frac{1}{1+\cos(x)}.
> \end{aligned} 
> $$
> 

> [!abstract] 30
> Avgjør den deriverte til $\frac{\cos(x)}{1+\sin(x)}$ og forenkle uttrykket hvis det lar seg gjøre. 

> [!note]- Løsning
>
> 
> Det virker naturlig å bruke kvotientregelen her. Deriver derfor teller og nevner hver for seg først. $\frac{d}{dx}\cos(x) =-\sin(x)$ og $\frac{d}{dx}(1+\sin(x)) = \cos(x)$. 
> 
> Kvotientregelen forteller oss nå at
> 
> $$
> \begin{aligned} 
>   \frac{d}{dx} \frac{\cos(x)}{1+\sin(x)} & = \frac{-\sin(x)(1+\sin(x))-\cos(x)\cdot(\cos(x))}{(1+\sin(x))^2}  \\ &= \frac{-{\color{#c595f7} \sin^2(x) }-\sin(x)-{\color{#c595f7} \cos^2(x) }}{(1+\sin(x))^2} \\ &= \frac{-1-\sin(x)}{(1+\sin(x))^2} = -\frac{\cancel{ 1+\sin(x) }}{(1+\sin(x))\cancel{ ^2 }} =\frac{-1}.{1+\sin(x)}
> \end{aligned}
> $$
> 
> Merk at vi bruker identiteten $\cos^2(x)+\sin^2(x)=1$ i den markerte utregningen over.
> 

> [!abstract] 53
> Bestem verdien til $\lim_{x\longrightarrow 0}\frac{\tan(2x)}{x}$.

> [!note]- Løsning
>
> 
> Vi skal se på 
> $$
> \lim_{x\longrightarrow  0}\frac{\tan(2x)}{x} = \lim_{x\longrightarrow  0}\frac{\frac{\sin(2x)}{\cos(2x)}}{x}=\lim_{x\longrightarrow  0}\frac{\sin(2x)}{x}\cdot \frac{1}{\cos(2x)}.
> $$
> Vi ser at $\frac{1}{\cos(2x)}$ går mot $\frac{1}{\cos(0)}=\frac{1}{1}=1$ når $x$ går mot $0$. Dermed må vi bare avgjøre om $\frac{\sin(2x)}{x}$ er noe vi kan gjenkjenne. 
> 
> Grensen ligner veldig på 
> 
> $\lim_{x\longrightarrow 0} \frac{\sin(x)}{x} = 1$, så vi prøver å få den på denne formen, det gjør vi slik
> 
> $$
> \frac{\sin(2x)}{x} = \frac{\sin(2x)}{\frac{1}{2}\cdot 2x} = \frac{1}{\frac{1}{2}}\cdot \frac{\sin(2x)}{2x} = 2\cdot \frac{\sin(2x)}{2x}.
> $$
> 
> Hvis $u=2x$ er det klart at $u\longrightarrow 0$ når $x\longrightarrow 0$, så vi kan omforme grensen over til
> $$
> \lim_{x\longrightarrow  0}\frac{\tan(2x)}{x} = \lim_{u\longrightarrow  0} 2\frac{\sin(u)}{u}\cdot \frac{1}{\cos(u)} = 2\cdot1\cdot1 = 2.
> $$
> 
> 
## 2.6


> [!abstract] 3
> Avgjør $y'$, $y''$ og $y'''$  når $y = \frac{6}{(x-1)^2}$

> [!note]- Løsning
>
> 
> $y= \frac{6}{(x-1)^2} =6 (x-1)^{-2}$. [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|Kjerneregelen]] gir nå
> $$
> \begin{aligned} 
>  & y'  = 6\cdot(-2)(x-1)^{-3} =-12(x-1)^{-3} \\ & y'' = -12\cdot(-3)(x-1)^{-4} = 36(x-1)^{-4} \\ & y'''= 36\cdot(-4)(x-1)^{-5} = -144(x-1)^{-5}.
> \end{aligned} 
> $$
> 
> 

> [!abstract] 9
> Avgjør $y'$, $y''$ og $y'''$  når $y=\tan(x)$.

> [!note]- Løsning
>
> 
> $y = \tan(x) = \frac{\sin(x)}{\cos(x)}$. Vi vet allerede fra [[Kapittel 2 - derivasjon/2.5.3 Derivasjon av andre trigonometriske funksjoner|derivasjon av andre trigonometriske funksjoner]] at 
> $$
> y' = \frac{d}{dx} \tan(x) = \frac{1}{\cos^2(x)} = \frac{\sin^2(x)+\cos^2(x)}{\cos^2(x)} = \tan^2(x)+1.
> $$
> 
> Nå kan vi kombinere [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] med at vi vet hva $\tan(x)$ sin deriverte er og få
> $$
> \begin{aligned} 
>   & y'' = 2\tan(x)\cdot(\tan^2(x)+1) = 2\tan^3(x)+2\tan(x) \\ & y'''  = 2\cdot3\tan^2(x)\cdot(\tan^2(x)+1)+2(\tan^2(x)+1 ).
> \end{aligned} 
> $$
> 
> Vi kan forenkle $y'''$ litt og få
> $$
> y''' = 6\tan^4(x)+8\tan^2(x)+2
> $$
> 
> 

> [!abstract] 13
> La $f(x) = \frac{1}{x}$. Finn nok høyere ordens deriverte til $f$ slik at du kan gjette et generelt formel for $f^{(n)}(x)$.

> [!note]- Løsning
> (du trenger ikke verifisere med induksjon)
> 
> Skriv $f(x)=\frac{1}{x}=x^{-1}$. Vi kan enkelt derivere ved å bruke [[Kapittel 3 - transendentale funksjoner/defogteo/Teo Potensreglene for derivasjon|potensreglene for derivasjon]].
> 
> $f'(x) = (-1)\cdot x^{-2} = -x^{-2}$.
> 
> Deriverer vi på nytt får vi
> $$
> f''(x)= -(-2)x^{-3} = 2x^{-3}.
> $$
> 
> Deriverer vi på nytt får vi
> 
> $$
> f^{(3)}(x)= 2(-3)x^{-4} = -3!x^{-4}.
> $$
> 
> Et mønster begynner å danne seg, og vi kan gjette at det bør se noe slikt ut:
> 
> $$
> f^{(n)}(x) = \pm n! \cdot x^{-n-1},
> $$
> der det er $+$ eller $-$ avhengig av om $n$ er partall (da vil vi ha $+$) eller oddetall (da vil vi ha $-$).
> 
> Et typisk triks for å få dette til er å skrive det slik:
> 
> $$
> f^{(n)}(x) = (-1)^n \cdot n! \cdot x^{-n-1}.
> $$
> 
> Vi verifiserer ikke med induksjon, men kan teste om det fungerer for $n=4$. Da sier formelen at vi bør få:
> 
> $$
> f^{(4)}(x) = (-1)^4 \cdot 4! \cdot x^{-5} = 4! \cdot x^{-5}.
> $$
> 
> Utfører vi derivasjon av $f^{(3)}(x)$, ser vi at vårt forslag stemmer.
> 
> 

> [!abstract] 17
> La $f(x) = \frac{1}{a+bx}$. Finn nok høyere ordens deriverte til $f$ slik at du kan gjette et generelt formel for $f^{(n)}(x)$.

> [!note]- Løsning
> (du trenger ikke verifisere med induksjon)
> 
> Skriv $f(x)=\frac{1}{a+bx}=(a+bx)^{-1}$.  Kjerneregelen gir når at
> 
> $f'(x) = b\cdot(-1)\cdot(a+bx)^{-2} =-b(a+bx)^{-2}$, fordi funksjonens indre, $a+bx$, sin deriverte er $b$ og funksjonens ytre, $x^{-1}$, sin deriverte er $-1x^{-2}$.
> 
> Deriverer vi på nytt får vi
> $$
> f''(x)=-b\cdot b\cdot(-2)(a+bx)^{-3}=2\cdot b^2 (a+bx)^{-3}.
> $$
> 
> Deriverer vi på nytt får vi 
> 
> $$
> f^{(3)}(x)=2\cdot b^2 \cdot b \cdot (-3)(a+bx)^{-4} = -1 \cdot 3! \cdot b^3 (a+bx)^{-4}.
> $$
> 
> Et mønster begynner å danne seg og vi kan gjette at det bør se noe slikt ut
> 
> $$
> f^{(n)}(x) = \pm n!\cdot b^n \cdot(a+bx)^{-n-1},
> $$
> der det er $+$ eller $-$ avhengig av om $n$ er partall (da vil vi ha $+$) eller oddetall (da vil vi ha $-$).
> 
> Et typisk triks for å få dette til er å skrive det slik
> 
> $$
> f^{(n)}(x) = (-1)^n\cdot n!\cdot b^n \cdot(a+bx)^{-n-1}.
> $$
> Vi verifiserer ikke med induksjon, men kan teste om det fungerer for $n=4$. Da sier formelen at vi bør få
> 
> $$
> f^{(4)}(x) = (-1)^4 4!\cdot b^4 \cdot(a+bx)^{-5} = 4!\cdot b^4 \cdot(a+bx)^{-5}.
> $$
> 
> Utfører vi derivasjon av $f^{(3)}(x)$ ser vi at vårt forslag stemmer. 
> 
## 2.8


> [!abstract] 3
> La $f(x) = x^3-3x+1$ på $[-2,2]$.
> 1. Forklar hva middelverdisetningen sier for $f$.
> 2. Avgjør punktet $c$ slik at $f'(c)$ er lik $\frac{f(b)-f(a)}{b-a}$. 

> [!note]- Løsning
> 
> 1.
> Middelverdisetningen sier at det skal finnes et punkt $c$ slik at $f'(c)$ er lik gjennomsnittsstigningen for $f$ fra $a$ til $b$. 
> 2. 
> Vi skal se på intervallet $[-2,2]$ for funksjonen $f(x)=x^3-3x+1$. Da er $f(-2)=(-2)^3-3(-2)+1 =-8+6+1=-1$ og $f(2)=8-6+1=3$.
> 
> Funksjonen stiger fra $-1$ til $3$, altså $4$ fra $-2$ til $2$, så den stiger i snitt med $1$ per $x$.
> 
> Middelverditeoremet sier at det skal finnes minst én $c$ i $[-2,2]$ slik at $f'(c) = 1$. 
> 
> Oppgaven ber oss om å finne alle slike $c$, så vi deriverer $f(x)$ og får 
> 
> $$
> f'(x)=3x^2-3.
> $$
> 
> Målet er nå å finne alle $x\in[-2,2]$ slik at $f'(x)=1$
> 
> Det gir likningen 
> $$
> \begin{aligned} 
>   3x^2-3 & = 1 \\ 3x^2 &= 4 \\ x^2 &= \frac{4}{3} \\ x &= \pm \frac{\sqrt{4}}{\sqrt{3}} = \pm\frac{2}{\sqrt{3}}\cdot \frac{\sqrt{3}}{\sqrt{3}} \\ &= \pm\frac{2\sqrt{3}}{3}.
> \end{aligned} 
> $$
> Siden begge disse verdiene er mindre enn $2$ i absoluttverdi har vi funnet alle verdiene. 
> 
