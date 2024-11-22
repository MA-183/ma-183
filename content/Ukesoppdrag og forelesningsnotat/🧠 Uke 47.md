## 6.3

I disse oppgavene kan det være nyttig å ha disse to teknikkene i bakhodet.

> [!tip] Invers sinussubstitusjon
> Integraler som inneholder $\sqrt{a^2-x^2}$ kan (noen ganger) bli forenklet dersom man gjør substitusjonen 
> $$
> x = a \sin(\theta),
> $$ 
> som betyr at
> $$
> \theta = \sin^{-1}\left( \frac{x}{a} \right).
> $$
> 

> [!tip] Invers tangenssubstitusjon
> Integraler som inneholder $\sqrt{a^2+x^2}$ eller $a^2+x^2$ kan (noen ganger) bli forenklet dersom man gjør substitusjonen 
> $$
> x = a \tan(\theta),
> $$ 
> som betyr at
> $$
> \theta = \tan^{-1}\left( \frac{x}{a} \right).
> $$

> [!warning] Merk 
> Vi gjør substitusjonen fordi 
> $$
> \sqrt{a^2\pm x^2}= \sqrt{a^2\left( 1\pm \left( \frac{x}{a} \right)^2 \right)} = a\sqrt{1\pm \left( \frac{x}{a} \right)^2}.
> $$
> Merk at vi kan få til samme struktur dersom vi jobber med
> $$
> \sqrt{a+bx^2}
> $$
> fordi
> $$
> \sqrt{a+bx^2} = \sqrt{a\left( 1+\frac{b}{a}x^2 \right)} = \sqrt{a}\sqrt{1+\left( \frac{\sqrt{b}x}{\sqrt{a}} \right)^2}.
> $$



> [!abstract] 1
> Avgjør integralet
> $$
> \int \frac{dx}{\sqrt{1-4x^2}}.
> $$


> [!note]- Løsning 
> [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Derivasjon av inverse trigonometriske funksjoner|Vi vet at]] $\frac{d}{dx}\sin^{-1}(x) = \frac{1}{\sqrt{1-x^2}}$. Integranden ligner, vi kan derfor sette ${\color{#5ca6f4} u = 2x }$ som gir at ${\color{#f46f22} \frac{1}{2}du= dx }$. Da får vi
> $$
> \int \frac{{\color{#f46f22} dx }}{\sqrt{1-({\color{#5ca6f4} 2x })^2}} = \int \frac{{\color{#f46f22} \frac{1}{2}du }}{1-{\color{#5ca6f4} u }^2} = \frac{1}{2}\sin^{-1}(u)+C = \frac{1}{2}\sin^{-1}(2x).
> $$


> [!abstract] 2
> Avgjør integralet
> $$
> \int \frac{x^2dx}{\sqrt{1-4x^2}}.
> $$
> Hint. Det kan være nyttig å bruke [[Kapittel 0 - Elementære funksjoner/defogteo/💡Halvvinkelformlene|halvvinkelformlene]] og [[Kapittel 0 - Elementære funksjoner/defogteo/💡Dobbeltvinkelformlene|dobbeltvinkelformlene]] samt de [[Kapittel 0 - Elementære funksjoner/defogteo/💡Trigonometriske identiteter|grunnleggende identitetene]].

> [!note]- Løsning 
> Vi kan ikke lenger innse integralet som en antiderivert til en invers trigonometrisk funksjon, slik som i forrige oppgave. Det ligner likevel så vi setter ${\color{#e796f5} 2x = \sin(u) }$. Da er ${\color{#5ca6f4} dx= \frac{1}{2}\cos(u)du }$.  Vi kan da omforme integralet slik
> $$
> \begin{aligned} 
> \int \frac{x^2dx}{\sqrt{1-4x^2}} & = \int \frac{{\color{#e796f5} \frac{1}{4} \sin^2(u){\color{#5ca6f4} \frac{1}{2}\cos(u)du }}}{{\sqrt{1-{\color{#e796f5} \sin^2(u) }}} } \\ & =  \int \frac{{\color{#e796f5} \frac{1}{4} \sin^2(u){\color{#5ca6f4} \frac{1}{2}\cos(u)du }}}{{\sqrt{\cos^2(u)}} }\\ & =  \frac{1}{8} \int \frac{{\color{#e796f5}  \sin^2(u){\color{#5ca6f4}\cancel{  \cos(u) }du }}}{{\cancel{ \cos(u) }} }.
> \end{aligned} 
> $$
> Vi ser at vi må finne $\int\sin^2(u)du$. Her bruker vi [[Kapittel 0 - Elementære funksjoner/defogteo/💡Halvvinkelformlene|halvvinkelformlene]] og skriver $\sin^2(u)=  \frac{1-\cos(2u) }{2 }$. Da blir integralet slik
> $$
> \begin{aligned} 
> \int \frac{x^2dx}{\sqrt{1-4x^2}} & = \frac{1}{8}\int \frac{1-\cos(2u)}{2} du \\ &= \frac{1}{16}\int 1-\cos(2u)du \\ &= \frac{1}{16}\left( u-\frac{1}{2}\sin(2u) \right) + C \\ &= \frac{u}{16} - \frac{1}{32}\sin(2u)+ C.
> \end{aligned} 
> $$
> Vi må nå bare bruke at ${\color{#5ca6f4} u = \sin^{-1}(2x) }$ og [[Kapittel 0 - Elementære funksjoner/defogteo/💡Dobbeltvinkelformlene|dobbeltvinkelformlene]], som gir ${\color{#f46f22} \sin(2u)=2\sin({\color{#5ca6f4} u })\cos({\color{#5ca6f4} u }) }$. Setter vi inn får vi
> $$
> \begin{aligned} 
> \int \frac{x^2dx}{\sqrt{1-4x^2}} & = \frac{{\color{#5ca6f4} \sin^{-1}(2x) }}{16}+\frac{1}{32}{\color{#f46f22}2 \sin }({\color{#5ca6f4} \sin^{-1}(2x) }){\color{#f46f22} \cos }({\color{#5ca6f4} \sin^{-1}(2x) })+ C \\ &= \frac{\sin^{-1}(2x)}{16}+\frac{1}{16}{\color{#3cc15c} 2x }\sqrt{1-{\color{#3cc15c} \sin^2(\sin^{-1}(2x)) }}+ C \\ &= \frac{\sin^{-1}(2x)}{16}+\frac{1}{8}{\color{#3cc15c} 2x }\sqrt{1-{\color{#3cc15c}( 2x)^2 }}+ C,
> \end{aligned} 
> $$
> der uttrykkene i grønt bruker punkt 1. av de [[Kapittel 0 - Elementære funksjoner/defogteo/💡Trigonometriske identiteter|grunnleggende trigonometriske identitetene]].
> 


> [!abstract] 3
>  Avgjør integralet
> $$
> \int \frac{x^2dx}{\sqrt{9-x^2}}.
> $$
> 

> [!note] Argument 
> Integralet minner om forrige oppgave. Den største forskjellen er at det står $\sqrt{9-x^2}$ og ikke $\sqrt{1-x^2}$. Det løser vi enkelt ved å faktorisere ut $9=3^2$. Dermed får vi $\sqrt{9-x^2}=\sqrt{3^2\left( 1-\left( \frac{x}{3} \right)^2 \right)} = 3\sqrt{1-(x/3)^2}$. Ved å imitere ideen over, setter vi $\frac{x}{3} = \sin(u)$. Gjør vi dette blir regningen og ideene helt identiske og vi vil ende med
> $$
> \frac{9}{2}\sin^{-1}\left( \frac{x}{3} \right) - \frac{1}{2}x\sqrt{9-x^2}+ C
> $$

> [!abstract] 7
> Finn
> $$
> \int \frac{1+x}{\sqrt{9-x^2}}dx
> $$

> [!note]+ Løsning 
> Først splitter vi brøken. Da får vi
> $$
> \int \frac{1+x}{\sqrt{9-x^2}}dx = \int \frac{1}{\sqrt{9-x^2}}dx+\int \frac{x}{\sqrt{9-x^2}}dx.
> $$
> Vi ser at $\sqrt{9-x^2}$ sin deriverte er $-2x\cdot \frac{1}{2}\frac{1}{\sqrt{9-x^2}} = \frac{2x}{\sqrt{9-x^2}}$  som er andre ledd som vi skal integrere, bare skalert med $-1$. Vi fokuserer derfor kun på
> $$
> I = \int \frac{1}{\sqrt{9-x^2}}.
> $$
> Nå ser vi at det kan være naturlig å la ${\color{#e796f5} x = 3\sin(\theta) }$, som betyr at ${\color{#5ca6f4} dx = \cos(\theta)d\theta }$. Merk at $\theta$ kun kan gå fra $-\frac{\pi}{2}$ til $\frac{\pi}{2}$. Det gir dermed
> $$
> I = \int \frac{{\color{#5ca6f4} \cos(\theta) }}{\sqrt{{\color{#e796f5} 3^2 }(1-{\color{#e796f5} \sin^2(\theta) })}}{\color{#5ca6f4} d\theta } = \int \frac{\cos(\theta)}{3\sqrt{\cos^2(\theta)}}d\theta +C= \int \frac{1}{3}d\theta +C
> $$
> Vi har altså at $I = \frac{\theta}{3}=\frac{\sin^{-1}(x)}{3}$. (Merk at vi bruker at $\cos(\theta)>0$ for alle verdier $\theta$ er definert for.)
> Totalt sett får vi 
> $$
> \int \frac{1+x}{\sqrt{9-x^2}}= \frac{\sin^{-1}(x)}{3}-\sqrt{9-x^2}+C
> $$

> [!abstract] 11
> Finn
> $$
> \int \frac{1}{(a^2-x^2)^{3/2}}  dx
> $$
> 

> [!note]+ Løsning 
> Her har vi $a^2-x^2$ i nevner, så vi setter ${\color{#e796f5} x= a\sin(u) }$ som betyr at ${\color{#5ca6f4} dx = a\cos(u)du }$. Vi får da
> $$
> \int \frac{1}{({\color{#e796f5} a }^2(1-{\color{#e796f5} \sin }^2(u)))^{3/2}}\cdot {\color{#5ca6f4} a\sin(u)du }
> $$
> Vi kan nå bruke at $\cos^2(u)=1-\sin^2(u)$. Det gir
> $$
> \begin{aligned} 
> & \int \frac{1}{({\color{#e796f5} a }^2(1-{\color{#e796f5} \sin}^2(u)))^{3/2}}\cdot {\color{#5ca6f4} a\cos(u)du } \\ = & \int \frac{1}{a^3\left( \cos^2(u))^{3/2} \right)} a\cos(u)du \\ =& \frac{1}{a^2}\int \frac{\cos(u)}{\cos^3(u)}du \\ = & \frac{1}{a^2}\int \frac{1}{\cos^2(u)}du \\ & = \frac{1}{a^2}\tan(u)+C.
> \end{aligned} 
> $$
> Siden $x=a\sin(u)$ kan vi sette opp en rettvinklet trekant med hosliggende side lik $x$ og hypotenus lik $a$. Da har vi trekanten med vinkelen $u$. Vi får da at hosliggende er $\sqrt{a^2-x^2}$ og da er $\tan(u)= \frac{x}{\sqrt{a^2-x^2}}$. Vi får dermed
> $$
> \int \frac{1}{(a^2-x^2)^{3/2}}dx = \frac{x}{a^2\sqrt{a^2-x^2}}+C
> $$

> [!abstract] 12
> Finn
> $$
> \int \frac{1}{(a^2+x^2)^{3/2}}  dx
> $$
> 

> [!note]+ Løsning 
> Her har vi $a^2-x^2$ i nevner, så vi setter ${\color{#e796f5} x= a\tan(u) }$ som betyr at ${\color{#5ca6f4} dx = \frac{a}{\cos^2(u)}du }$. Vi får da
> $$
> \int \frac{1}{({\color{#e796f5} a }^2(1-{\color{#e796f5} \tan }^2(u)))^{3/2}}\cdot {\color{#5ca6f4} \frac{a}{\cos^2(u)}du }
> $$
> Vi kan nå bruke at $\tan(u)=\frac{\sin(u)}{\cos(u)}$ og faktorisere ut $\frac{1}{\cos^2(u)}$ i kvadratroten. Det gir
> $$
> \begin{aligned} 
> & \int \frac{1}{({\color{#e796f5} a }^2(1-{\color{#e796f5} \tan }^2(u)))^{3/2}}\cdot {\color{#5ca6f4} \frac{a}{\cos^2(u)}du } \\ = & \int \frac{1}{a^3\left( \frac{1}{\cos^2(u)}(\cos^2(u)+\sin^2(u))^{3/2} \right)} \frac{a}{\cos^2(u)}du \\  = & \int \frac{1}{a^3 \frac{1}{\cos^3(u)}}\cdot \frac{a}{\cos^2(u)}du \\ =& \frac{1}{a^2}\int \cos(u)du = \frac{1}{a^2}\sin(u)+C.
> \end{aligned} 
> $$
> Siden $x=\tan(u)$ kan vi sette opp en rettvinklet trekant med hosliggende side lik $a$ og motstående lik $x$. Da har vi trekanten med vinkelen $u$. Vi får da at hypotenusen er $\sqrt{a^2+x^2}$ og da er $\sin(u)= \frac{x}{\sqrt{a^2+x^2}}$. Vi får dermed
> $$
> \int \frac{1}{(a^2+x^2)^{3/2}}dx = \frac{x}{a^2\sqrt{a^2+x^2}}+C
> $$

> [!abstract] 14
> Finn
> $$
> \int \frac{1}{(1+2x^2)^{5/2}}dx
> $$
> 

## 7.1

Kun skrivemetoden for 1-4

> [!abstract] 1


> [!abstract] 2


> [!abstract] 3


> [!abstract] 4


> [!abstract] 5


> [!abstract] 6


> [!abstract] 7


> [!abstract] 8


