## 3.3

> [!abstract] 1
> Forenkle uttrykket $\frac{e^3}{\sqrt{e^5}}$

> [!note]+ Løsning
>
> 
> $$
> \begin{aligned} 
>   \frac{e^3}{\sqrt{e^5}} =\frac{e^3}{(e^5)^{1/2}} = \frac{e^3}{e^{5/2}} = e^{3-5/2}= e^{1/2}=\sqrt{e}.
> \end{aligned} 
> $$
> 

> [!abstract] 2
> Forenkle uttrykket $\ln(e^{1/2}e^{2/3})$.

> [!note]+ Løsning
>
> 
> $$
> \begin{aligned} 
>   \ln(e^{1/2}\cdot e^{2/3}) = \ln(e^{1/2}+\ln(e^{2/3}))  = \frac{1}{2}+\frac{2}{3}= \frac{7}{6}. 
> \end{aligned} 
> $$
> 

> [!abstract] 3
> Forenkle uttrykket $e^{5\ln(x)}$.

> [!note]+ Løsning
>
> 
> $$e^{5\ln(x)} = (e^{\ln(x)})^5 =x^5$$
> 

> [!abstract] 4
> Forenkle uttrykket $e^{\frac{3\ln(9)}{2}}$.

> [!note]+ Løsning
>
> 
> $$
> e^{(3\ln(9))/2} = e^{\frac{3}{2}\ln(9)} = e^{\ln(9^{3/2})} = e^{\ln(3^3)} = 3^3 = 27.
> $$
> 

> [!abstract] 5
> Forenkle uttrykket $\ln\left( \frac{1}{e^{3x}} \right)$

> [!note]+ Løsning
>
> 
> $$
> \ln\left( \frac{1}{e^{3x}} \right) = \ln(e^{-3x})= -3x.
> $$
> 

> [!abstract] 6
> Forenkle uttrykket $e^{2\ln(\cos(x))}+(\ln(e^{\sin(x)}))^2$.

> [!note]+ Løsning
>
> 
> $$
> \begin{aligned} 
>   e^{2\ln(\cos(x))}+(\ln(e^{\sin(x)}))^2  &= e^{\ln(\cos^2(x))}+(\sin(x))^2 \\ & = \cos^2(x)+\sin^2(x) = 1.
> \end{aligned} 
> $$
> 

> [!abstract] 11
> Løs likningen $2^{x+1} = 3^x$.

> [!note]+ Løsning
>
> 
> Vi løser ved å ta $\ln$ av begge sider og bruke [[Kapittel 3 - transendentale funksjoner/Definisjoner og teoremer/Teo 3.3.2 Logaritmeregler|logaritmeregler]] for å forenkle. Siden funksjonen er [[Kapittel 3 - transendentale funksjoner/Definisjoner og teoremer/Def 3.1.1 En-til-en funksjoner|en-til-en funksjoner]] må løsningen være bevart ved å gjøre det.
> 
> $$
> \begin{aligned} 
>   2^{x+1}  &= 3^x  \\ \ln(2^{x+1}) &= \ln(3^x) \\ (x+1)\ln(2) &= x\ln(3) \\ x\ln(2)+\ln(2) & = x\ln(3) \\ \ln(2)  &= x(\ln(3)-\ln(2)) \\ \ln(2)  &= x\ln\left( \frac{3}{2} \right) \\ x & = \frac{\ln(2)}{\ln\left( \frac{3}{2} \right)}.
> \end{aligned}  
> $$
> 

> [!abstract] 12
> Løs likningen $3^x = 9^{1-x}$. 

> [!note]+ Løsning
> Vi skriver om $9$ til $3^2$ og ser at likningen blir
> $$
> 3^x = (3^2)^{1-x} = 3^{2(1-x)}.
> $$
> Det betyr at $x = 2(1-x)$ eller $x = 2-2x$ som gir at $x = \frac{2}{3}$.




> [!abstract] 13
> Løs likningen $\frac{1}{2^x} = \frac{5}{8^{x+3}}$

> [!note]+ Løsning
> Vi tar $\ln$ på begge sider av likningen og utnytter [[Kapittel 3 - transendentale funksjoner/Definisjoner og teoremer/Teo 3.3.2 Logaritmeregler|logaritmeregler]]. Da får vi
> $$
> \begin{aligned} 
> \ln\left( \frac{1}{2^x} \right) & = \ln\left( \frac{5}{8^{x+3}} \right) \\
> \ln(1)-\ln(2^x) &= \ln(5)-\ln(8^{x+3}) \\ -x\ln(2) &= \ln(5)-(x+3)\ln(2^3) \\ -\ln(5) &= x\ln(2)-3(x+3)\ln(2) \\ -\ln(5) &= x\ln(2)-3x\ln(2)-9\ln(2) \\ 9\ln(2)-\ln(5) &= -2x\ln(2) \\ x &= \frac{9\ln(2)-\ln(5)}{-2\ln(2)}- 
> \end{aligned} 
> $$
> 

> [!abstract] 14
> Løs likningen $2^{x^2-3} = 4^x$

> [!note]+ Løsning
> Først skriver vi $4^x = (2^2)^x=2^{2x}$. Likningen blir da
> $$
> \begin{aligned} 
> 2^{x^2-3} = 2^{2x}.
> \end{aligned}
>  $$
> Nå kan vi ta $\ln$ på begge sier, men vi kan også inne at siden eksponentialfunksjoner er [[Kapittel 3 - transendentale funksjoner/Definisjoner og teoremer/Def 3.1.1 En-til-en funksjoner|en-til-en]] kan vi bare sammenlikne eksponentene og si at
> $$
> x^2-3 = 2x.
> $$
> Bruker vi abc-formelen får vi løsningene $x = -1$ og $x = 3$.

> [!abstract] 19
> Deriver funksjonen $y=e^{5x}$.

> [!note]+ Løsning
> Vi bruker [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.4.6 Kjerneregelen|kjerneregelen]] og får
> $$
> \frac{d}{dx} y = 5 e^{5x} = 5y. 
> $$
> 

> [!abstract] 20
> Deriver funksjonen $y = xe^x -x$.

> [!note]+ Løsning
> Vi bruker [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.4 Produktregelen|produktregelen]] på første ledd og får
> $$
> y' = 1\cdot e^x + x e^x - 1 = e^x(1+x)-1
> $$ 
> 

> [!abstract] 21
> Deriver funksjonen $y = \frac{x}{e^{2x}}$.

> [!note]+ Løsning
> Vi bruker [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.5 Kvotientregelen|kvotientregelen]] (på hele uttrykket) og [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.4 Produktregelen|produktregelen]] (når vi deriver nevner) og får 
> $$
> \begin{aligned} 
> \frac{dy}{dx} & = \frac{1\cdot e^{2x} - x \cdot 2e^{2x}}{(e^{2x})^2} \\ & =  \frac{ \cancel{ e^{2x} }- 2x \cdot \cancel{ e^{2x} }}{e^{2x} \cdot \cancel{ e^{2x} }} \\ &= \frac{1-2x}{e^{2x}} = \frac{1}{e^{2x}}-2 y
> \end{aligned} 
> $$
> 

> [!abstract] 22
> Deriver uttrykket $y = x^2 e^{x/2}$

> [!note]+ Løsning
>Vi bruker [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.4 Produktregelen|produktregelen]], der $x^2$ og $e^{\frac{x}{2}}$ er de to faktorene. I tillegg bruker vi [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.4.6 Kjerneregelen|kjerneregelen]] for å derivere $e^{\frac{x}{2}}$, der $e^x$ er ytre funksjon og $\frac{x}{2}$ er indre. Det gir oss
> $$
> \begin{aligned}
> 2x e^{x/2} + x^2\cdot \left( \frac{1}{2} e^{x/2} \right) = e^{x/2}\left( 2x+\frac{x^2}{2} \right).
> \end{aligned} 
> $$
> 

> [!abstract] 31
> Deriver funksjonen $y =e^x \sin(x)$.

> [!note]+ Løsning
> Uttrykket er et produkt av $e^x$ og $\sin(x)$. Derfor bruker vi [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.4 Produktregelen|produktregelen]] for å derivere disse. Det gir
> $$
> y' = e^x \sin(x) + e^x\cos(x).
> $$
> 

> [!abstract] 32
> Deriver funksjonen $y = e^{-x}\cos(x)$.

> [!note]+ Løsning
>Uttrykket er et produkt av $e^{-x}$ og $\cos(x)$. Derfor bruker vi [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.4 Produktregelen|produktregelen]] for å derivere disse. Det gir
> $$
> \begin{aligned} 
> \frac{dy}{dx} & = -e^{-x} \sin(x) + e^{-x}(-\sin(x)) \\ & = -e^{-x}(\cos(x)+\sin(x)).
> \end{aligned} 
> $$
> Merk at vi bruker [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.4.6 Kjerneregelen|kjerneregelen]] for å derivere $e^{-x}$, ved å betrakte $-x$ som indre funksjon og $e^x$ som ytre.
> 
## 3.4


> [!abstract] 1
> Avgjør verdien til $\lim_{x\longrightarrow \infty} x^3e^{-x}$.

> [!note]+ Løsning
> Her trenger vi bare skrive om uttrykket som $\frac{x^3}{e^x}$ og se at dette bare et tilfelle av [[Kapittel 3 - transendentale funksjoner/Definisjoner og teoremer/Teo 3.4.5 Eksponentiell vekst|punkt 2. her]]. Eksponentialfunksjoner vokser slår polynomer!
> 

> [!abstract] 3
> Avgjør verdien $\lim_{x\longrightarrow \infty}\frac{2e^x-3}{e^x +5}.$

> [!note]+ Løsning
> Vi kan vet at eksponentialfunksjoner vokser raskest, så vi faktoriserer ut de som faktor i teller og nevner og får
> $$
> \begin{aligned} 
> \lim_{x\longrightarrow \infty}\frac{2e^x-3}{e^x +5} &=  \lim_{x\longrightarrow  \infty}\frac{\cancel{ e^x }\left( 2-\frac{3}{e^x} \right)}{\cancel{ e^x }\left( 1+\frac{5}{e^x} \right)} \\ &= \lim_{x\longrightarrow  \infty} \frac{ 2-\frac{3}{e^x}}{1+\frac{5}{e^x}} = \frac{2-0}{1+0}=2.
> \end{aligned} 
> $$
> 

> [!abstract] 5
> Avgjør verdien til $\lim_{(x)\longrightarrow 0+} x\ln(x)$.
> 

> [!note]+ Løsning
>Dette er ikke annet enn et spesialtilfelle der $a=1$ av punkt 3. i [[Kapittel 3 - transendentale funksjoner/Definisjoner og teoremer/Teo 3.4.5 Eksponentiell vekst|teoremet om eksponentiell vekst]].
> 

> [!abstract] 9
> En bakteriekultur vokser i en hastighet proporsjonalt med størrelsen på bakteriekulturen. Hvis det er $100$ bakterier i kulturen når $t=0$ vil antall bakterie dobles hver time. Hvor mange bakterier er det når $t = \frac{5}{2}$?



> [!note]+ Løsning
> 
> 

> [!abstract] 10

> [!note]+ Løsning
>
> 

> [!abstract] 11

> [!note]+ Løsning
>
> 

> [!abstract] 12

> [!note]+ Løsning
>
> 
> 
## 4.3
> 

> [!abstract] 1

> [!note]+ Løsning
>
> 

> [!abstract] 3

> [!note]+ Løsning
>
> 

> [!abstract] 5

> [!note]+ Løsning
>
> 

> [!abstract] 9

> [!note]+ Løsning
>
> 

> [!abstract] 13

> [!note]+ Løsning
>
> 

> [!abstract] 19

> [!note]+ Løsning
>
> 

> [!abstract] 24

> [!note]+ Løsning
>
> 
> 