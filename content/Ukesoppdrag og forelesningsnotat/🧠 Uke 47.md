## 6.3

I disse oppgavene kan det være nyttig å ha disse to teknikkene i bakhodet.

> [!tip]- Invers sinussubstitusjon
> Integraler som inneholder $\sqrt{a^2-x^2}$ kan (noen ganger) bli forenklet dersom man gjør substitusjonen 
> $$
> x = a \sin(\theta),
> $$ 
> som betyr at
> $$
> \theta = \sin^{-1}\left( \frac{x}{a} \right).
> $$
> 

> [!tip]- Invers tangenssubstitusjon
> Integraler som inneholder $\sqrt{a^2+x^2}$ eller $a^2+x^2$ kan (noen ganger) bli forenklet dersom man gjør substitusjonen 
> $$
> x = a \tan(\theta),
> $$ 
> som betyr at
> $$
> \theta = \tan^{-1}\left( \frac{x}{a} \right).
> $$


> [!warning]- Merk 
> Både invers sinussubstitusjon og tangenssubstitusjon gjøres fordi vi kan omforme det slik
> $$
> \sqrt{a^2\pm x^2}= \sqrt{a^2\left( 1\pm \left( \frac{x}{a} \right)^2 \right)} = a\sqrt{1\pm \left( \frac{x}{a} \right)^2}.
> $$
> Merk at vi kan få til samme struktur dersom vi jobber med
> $$
> \sqrt{a+bx^2}
> $$
> fordi
> $$
> \sqrt{a\pm bx^2} = \sqrt{a\left( 1\pm \frac{b}{a}x^2 \right)} = \sqrt{a}\sqrt{1\pm \left( \frac{\sqrt{b}x}{\sqrt{a}} \right)^2}.
> $$
> Hvis vi nå skal lage en tilsvarende substitusjon setter vi nå $\frac{\sqrt{a}}{\sqrt{b}}x$ lik $\sin(u)$ hvis det er $-$ eller $\tan(u)$ hvis det er $+$.


> [!abstract] 1
> Avgjør integralet
> $$
> \int \frac{dx}{\sqrt{1-4x^2}}.
> $$


> [!note]- Løsning 
> [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Derivasjon av inverse trigonometriske funksjoner|Vi vet at]] $\frac{d}{dx}\sin^{-1}(x) = \frac{1}{\sqrt{1-x^2}}$. Integranden ligner, vi kan derfor sette ${\color{#5ca6f4} u = 2x }$ som gir at ${\color{#f46f22} \frac{1}{2}du= dx }$. Da får vi
> $$
> \int \frac{{\color{#f46f22} dx }}{\sqrt{1-({\color{#5ca6f4} 2x })^2}} = \int \frac{{\color{#f46f22} \frac{1}{2}du }}{\sqrt{1-{\color{#5ca6f4} u }^2}} = \frac{1}{2}\sin^{-1}(u)+C = \frac{1}{2}\sin^{-1}(2x).
> $$
> 
> > [!warning] Merk 
> > Dette kan selvfølgelig gjøres med substitusjonen $2x=\sin(u)$ også, som er mer i tråd med temaet. Gjør gjerne det for å øve, men legg merke til at det er også godt å legge merke til når vi kan være litt mer effektive.
> 


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

> [!note]- Argument 
> Integralet minner om forrige oppgave. Den største forskjellen er at det står $\sqrt{9-x^2}$ og ikke $\sqrt{1-x^2}$. Det løser vi enkelt ved å faktorisere ut $9=3^2$. Dermed får vi $\sqrt{9-x^2}=\sqrt{3^2\left( 1-\left( \frac{x}{3} \right)^2 \right)} = 3\sqrt{1-(x/3)^2}$. Ved å imitere ideen over, setter vi $\frac{x}{3} = \sin(u)$. Gjør vi dette blir regningen og ideene helt identiske og vi vil ende med
> $$
> \frac{9}{2}\sin^{-1}\left( \frac{x}{3} \right) - \frac{1}{2}x\sqrt{9-x^2}+ C
> $$

> [!abstract] 7
> Finn
> $$
> \int \frac{1+x}{\sqrt{9-x^2}}dx
> $$

> [!note]- Løsning 
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

> [!note]- Løsning 
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

> [!note]- Løsning 
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



> [!note]- Løsning 
> Vi lar ${\color{#e796f5} \sqrt{2}x =\tan(u) }$, som betyr at ${\color{#5ca6f4} dx = \frac{\sqrt{2}}{2\cos^2(u)}du }$. Setter vi inn får vi
> $$
> \begin{aligned} 
> \int \frac{1}{(1+2x^2)^{5/2}}{\color{#5ca6f4} dx } &= \int \frac{1}{(1+({\color{#e796f5} \sqrt{2}x })^2)^{5/2}} {\color{#5ca6f4} \frac{\sqrt{2}}{2\cos^2(u)}du } \\ &= \frac{\sqrt{2}}{2}\int \frac{1}{(1+\tan^2(u))^{5/2}} \frac{1}{\cos^2(u)}du
> \end{aligned} 
> $$
> Vi vet at $\sqrt{1+\tan^2(u)}=\frac{1}{|\cos(u)|}$. Vi antar at $\cos(u)\geq0$ slik at vi kan skrive
> $$
> \begin{aligned} 
> & = \frac{\sqrt{2}}{2}\int \frac{1}{\frac{1}{\cos^5(u)}\cdot\cos^2(u)}du = \frac{\sqrt{2}}{2}\int \cos^3(u)du.
> \end{aligned} 
> $$
> Nå har vi flere muligheter. Vi vet at delvis integrasjon på de trigonometriske funksjonene ofte fungerer bra, så vi prøver det. La ${\color{#e796f5} g(u)'=\cos(u) }$ som betyr at ${\color{#f46f22} g(u) = \sin(u) }$ og ${\color{#3cc15c} f(u) = \cos^2(u) }$ og ${\color{#5ca6f4} {f'(u)=-2\cos(u)\sin(u) } }$. Det gir oss
> $$
> \begin{aligned} 
> & = \frac{\sqrt{2}}{2}\int \cos^3(u)du = \frac{\sqrt{2}}{2} \int {\color{#e796f5} \cos(u) }{\color{#3cc15c}  \cos^2(u) } du  \\ & = \frac{\sqrt{2}}{2} \left( {\color{#f46f22} \sin(u) }{\color{#3cc15c} \cos^2(u) }- \int {\color{#f46f22} \sin(u) }{\color{#5ca6f4}  \cdot(-2\cos(u)\sin(u) )}du \right) \\ &= \frac{\sqrt{2}}{2}\left(  { \sin(u) }{ \cos^2(u) }+ 2\int \cos(u)\sin^2(u) du \right).
> \end{aligned} 
> $$
> Vi kan fortsette med delvis integrasjon her, men vi kan også innse (med litt erfaring med kjerneregelen og substitusjon) at siden $\cos(u)$ er den deriverte til $\sin(u)$ så bør det siste integralet bare være omtrent $\sin^3(u)$. Deriverer vi $\sin^3(u)$ får vi $3\cos(u)\sin^2(u)$ så $\frac{\sin^3(u)}{3}$ må være en antiderivert og vi får
> $$
>  \begin{aligned} 
>  \frac{\sqrt{2}}{2}\int \cos^3(u)du  & = \frac{\sqrt{2}}{2}\left(  \sin(u){\color{#fbc544} \cos^2(u) }+\frac{2}{3}\sin^3(u) \right)+C \\ & = \frac{\sqrt{2}}{2}\left( \sin(u)({\color{#fbc544} 1-\sin^2(u) })+\frac{2}{3}\sin^3(u) \right)+C \\ &= \frac{\sqrt{2}}{2}\left( \sin(u)-\frac{1}{3}\sin^3(u) \right)+C
>  \end{aligned} 
> $$
> Det gjenstår nå bare å substituere tilbake. Vi har at  $\sqrt{2}x = \tan(u)$. Lager vi en rettvinklet trekant med motstående side med lengde $\sqrt{2}x$ og hosliggende lik $1$ har vi en trekant med vinkel $u$. Hypotenusen må da være $\sqrt{1+2x^2}$ og $\sin(u)=\frac{\sqrt{2}x}{\sqrt{1+2x^2}}$. Setter vi det inn får vi
> $$
> \begin{aligned} 
>  &\int \frac{1}{(1+2x^2)^{5/2}}{dx }  \\  =& \frac{\sqrt{2}}{2}\left( \sin(u)-\frac{1}{3}\sin^3(u) \right) + C \\ = & \frac{\sqrt{2}}{2}\left( \frac{\sqrt{2}x}{\sqrt{1+2x^2}}-\frac{1}{3}\left( \frac{\sqrt{2}x}{\sqrt{1+2x^2}} \right)^3 \right)+C \\  = & \frac{x}{\sqrt{1+2x^2}}-\frac{2}{3} \frac{x^3}{(\sqrt{1+2x^2})^3} + C \\ =& \frac{x(1+2x^2)-\frac{2}{3}x^3}{(\sqrt{1+2x^2})^3 }+C.
> \end{aligned} 
> $$






## 7.1

Kun skrivemetoden for 1-4

> [!abstract] 1
> Avgjør størrelsen på volumet $S$ når $S$ er generert ved å rotere $y=x^2$ om $x-$aksen begrenset av området $y=0$ og $x=1$.

> [!note]- Løsning 
> Vi vet nå at dette tilsvarer
> $$
> \pi \int (x^2)^2dx =\pi \int x^4dx = \left. \frac{\pi x^5}{5}\right|_0^1 = \frac{\pi}{5}.
> $$


> [!abstract] 2
> Avgjør størrelsen på volumet $S$ når $S$ er generert ved å rotere $y=x^2$ om $y-$aksen og begrenset til $y=0$ og $x=1$.

> [!note]- Løsning 
> Vi kan merke oss at vi ikke trenger å tenke på dette som rundt $y$-aksen, ved å bare omgjøre aksene. Siden $y=x^2$ blir omgjøringen til at det er grafen $y=\sqrt{x}$ vi ser på. I tillegg blir de andre begrensningene at $x=0$ og at $y=1$. 
> 
> Tegner vi opp ser vi at vi prøver å regne ut volumet av en sylinder der vi har fjernet volumet under kurven $\sqrt{x}$. Vi regner derfor volumet av begge deler og trekker fra. Det gir
> $$
> S = \pi\int_0^1 1^2 dx - \pi \int_0^1 \sqrt{x}^2dx = \pi\left( x-\frac{x^2}{2} \right)\Bigg|_0^1 =\frac{\pi}{2}.
> $$

> [!abstract] 3
> Avgjør størrelsen på volumet $S$ når $S$ er generert ved å rotere området begrenset mellom $y=x^2$ og $y=\sqrt{x}$ mellom $x=0$ og $x=1$ om $x-$aksen.


> [!note]- Løsning 
> Vi vet at $\sqrt{x}>x^2$ når $x$ er mellom 0 og $1$. Vi regner derfor ut volumet av omdreningen av arealet under $\sqrt{x}$ først, og trekker deretter vekk området generert av å dreie om $x^2$ rundt $x-$aksen. Det gir at
> $$
> S = \pi\left( \int_0^1 xdx-\int_0^1 x^4dx \right) = \frac{3\pi}{10}.
> $$


> [!abstract] 4
> Avgjør størrelsen på volumet $S$ når $S$ er generert ved å rotere området begrenset mellom $y=x^2$ og $y=\sqrt{x}$ mellom $x=0$ og $x=1$ om $y$-aksen.
> 


> [!note]- Løsning 
> På grunn av symmetrien i til $x^2$ og $\sqrt{x}$, altså at de er hverandres invers. Så er dette problemet nøyaktig det samme som i oppgave 3.

> [!abstract] 5
> Hvis $R$ er området begrenset av $y=2x-x^2$ og $y=0$ mellom $x=0$ og $x=2$. Avgjør volumet $S$ som man får når man  lager omdreiningslegemet ved å rotere om $x-$aksen

> [!note]- Løsning 
>  Vi er på jakt etter
> $$
> S = \pi \int_0^2 (2x-x^2)^2dx = \pi\int_0^2 4x^2-4x^3+x^4dx.
> $$
> Da får vi
> $$
> S = \pi\left( 4\cdot \frac{8}{3}-16+\frac{32}{5} \right) = \pi\left( \frac{160-240+96}{15} \right) = \frac{16\pi}{15}.
> $$
> 


> [!abstract] 6
> Hvis $R$ er området begrenset av $y=x$ og $y=x^2$. Avgjør volumet $S$ som man får når man  lager omdreiningslegemet ved å rotere $R$ om $x-$aksen.

> [!note]- Løsning 
> Vi vet at $R$ er området fra $x=0$ til $x=1$ og at $x>x^2$ der. Derfor er 
> $$
> S = \pi\int_0^1 x^2-x^4 dx = \pi\left( \frac{x^3}{3}-\frac{x^5}{5} \right)\Bigg|_0^1= \frac{2\pi}{15}
> $$




> [!abstract] 8
> Hvis $R$ er området begrenset av $y=1+\sin(x)$ og $y=1$ fra $x=0$ til $x=\pi$. Avgjør volumet $S$ som man får når man  lager omdreiningslegemet ved å rotere $R$ om $x-$aksen.


> [!note]- Løsning 
> Vi ser at siden vi skal ha fra $y=1$ får vi
> $$
> S =\pi\int_0^\pi ( 1+\sin(x))^2-1dx = \pi \int_0^\pi \cancel{ 1 }+2\sin(x)+\sin^2(x)-\cancel{ 1 }dx 
> $$
> Dersom vi bruker [[Kapittel 0 - Elementære funksjoner/defogteo/💡Halvvinkelformlene|halvvinkelformlene]], har vi at $\sin^2(x)=\frac{1-\cos(2x)}{2}$. Det gir
> $$
> \begin{aligned} 
> S & = \pi\left( -2\cos(x)+\frac{x}{2}- \frac{1}{4}\sin(2x) \right)\Bigg|_0^\pi \\ &= 4\pi + \frac{\pi^2}{4}.
> \end{aligned} 
> $$
