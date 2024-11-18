## 6.3

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
> 


> [!abstract] 11
> 
> 


> [!abstract] 12
> 
> 


> [!abstract] 14
> 
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


