## 3.3

> [!abstract]- 1
> Forenkle uttrykket $\frac{e^3}{\sqrt{e^5}}$

> [!note]- Løsning
>
> 
> $$
> \begin{aligned} 
>   \frac{e^3}{\sqrt{e^5}} =\frac{e^3}{(e^5)^{1/2}} = \frac{e^3}{e^{5/2}} = e^{3-5/2}= e^{1/2}=\sqrt{e}.
> \end{aligned} 
> $$
> 

> [!abstract]- 2
> Forenkle uttrykket $\ln(e^{1/2}e^{2/3})$.

> [!note]- Løsning
>
> 
> $$
> \begin{aligned} 
>   \ln(e^{1/2}\cdot e^{2/3}) = \ln(e^{1/2}+\ln(e^{2/3}))  = \frac{1}{2}+\frac{2}{3}= \frac{7}{6}. 
> \end{aligned} 
> $$
> 

> [!abstract]- 3
> Forenkle uttrykket $e^{5\ln(x)}$.

> [!note]- Løsning
>
> 
> $$e^{5\ln(x)} = (e^{\ln(x)})^5 =x^5$$
> 

> [!abstract]- 4
> Forenkle uttrykket $e^{\frac{3\ln(9)}{2}}$.

> [!note]- Løsning
>
> 
> $$
> e^{(3\ln(9))/2} = e^{\frac{3}{2}\ln(9)} = e^{\ln(9^{3/2})} = e^{\ln(3^3)} = 3^3 = 27.
> $$
> 

> [!abstract]- 5
> Forenkle uttrykket $\ln\left( \frac{1}{e^{3x}} \right)$

> [!note]- Løsning
>
> 
> $$
> \ln\left( \frac{1}{e^{3x}} \right) = \ln(e^{-3x})= -3x.
> $$
> 

> [!abstract]- 6
> Forenkle uttrykket $e^{2\ln(\cos(x))}+(\ln(e^{\sin(x)}))^2$.

> [!note]- Løsning
>
> 
> $$
> \begin{aligned} 
>   e^{2\ln(\cos(x))}+(\ln(e^{\sin(x)}))^2  &= e^{\ln(\cos^2(x))}+(\sin(x))^2 \\ & = \cos^2(x)+\sin^2(x) = 1.
> \end{aligned} 
> $$
> 

> [!abstract]- 11
> Løs likningen $2^{x+1} = 3^x$.

> [!note]- Løsning
>
> 
> Vi løser ved å ta $\ln$ av begge sider og bruke [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Logaritmeregler for den naturlige logaritme|logaritmeregler]] for å forenkle. Siden funksjonen er [[Kapittel 3 - Inverse funksjoner/defogteo/✍️ En-til-en funksjoner|en-til-en funksjoner]] må løsningen være bevart ved å gjøre det.
> 
> $$
> \begin{aligned} 
>   2^{x+1}  &= 3^x  \\ \ln(2^{x+1}) &= \ln(3^x) \\ (x+1)\ln(2) &= x\ln(3) \\ x\ln(2)+\ln(2) & = x\ln(3) \\ \ln(2)  &= x(\ln(3)-\ln(2)) \\ \ln(2)  &= x\ln\left( \frac{3}{2} \right) \\ x & = \frac{\ln(2)}{\ln\left( \frac{3}{2} \right)}.
> \end{aligned}  
> $$
> 

> [!abstract]- 12
> Løs likningen $3^x = 9^{1-x}$. 

> [!note]- Løsning
> Vi skriver om $9$ til $3^2$ og ser at likningen blir
> $$
> 3^x = (3^2)^{1-x} = 3^{2(1-x)}.
> $$
> Det betyr at $x = 2(1-x)$ eller $x = 2-2x$ som gir at $x = \frac{2}{3}$.




> [!abstract]- 13
> Løs likningen $\frac{1}{2^x} = \frac{5}{8^{x+3}}$

> [!note]- Løsning
> Vi tar $\ln$ på begge sider av likningen og utnytter [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Logaritmeregler for den naturlige logaritme|logaritmeregler]]. Da får vi
> $$
> \begin{aligned} 
> \ln\left( \frac{1}{2^x} \right) & = \ln\left( \frac{5}{8^{x+3}} \right) \\
> \ln(1)-\ln(2^x) &= \ln(5)-\ln(8^{x+3}) \\ -x\ln(2) &= \ln(5)-(x+3)\ln(2^3) \\ -\ln(5) &= x\ln(2)-3(x+3)\ln(2) \\ -\ln(5) &= x\ln(2)-3x\ln(2)-9\ln(2) \\ 9\ln(2)-\ln(5) &= -2x\ln(2) \\ x &= \frac{9\ln(2)-\ln(5)}{-2\ln(2)}- 
> \end{aligned} 
> $$
> 

> [!abstract]- 14
> Løs likningen $2^{x^2-3} = 4^x$

> [!note]- Løsning
> Først skriver vi $4^x = (2^2)^x=2^{2x}$. Likningen blir da
> $$
> \begin{aligned} 
> 2^{x^2-3} = 2^{2x}.
> \end{aligned}
>  $$
> Nå kan vi ta $\ln$ på begge sier, men vi kan også inne at siden eksponentialfunksjoner er [[Kapittel 3 - Inverse funksjoner/defogteo/✍️ En-til-en funksjoner|en-til-en]] kan vi bare sammenlikne eksponentene og si at
> $$
> x^2-3 = 2x.
> $$
> Bruker vi abc-formelen får vi løsningene $x = -1$ og $x = 3$.

> [!abstract]- 19
> Deriver funksjonen $y=e^{5x}$.

> [!note]- Løsning
> Kjerneregelen sier at $({\color{#e796f5} f (}{\color{#3cc15c} g (x)}{\color{#e796f5} ) })' = {\color{#f46f22} g'(x) }\cdot {\color{#5ca6f4} f' }({\color{#3cc15c} g(x) })$
> 
> Ser at $e^{5x}$ består av
> 
> 1. Ytre funksjonen ${\color{#e796f5} f(x) = e^g }$, som gir ${\color{#5ca6f4} f'(g) = \frac{df}{dg} = e^g }$.
> 2. Indre funksjon er ${\color{#3cc15c} g(x)=5x }$, som gir ${\color{#f46f22} g'(x)=\frac{dg}{dx} = 5 }$
> 
> Setter vi det sammen får vi 
> $$
> \frac{d}{dx} y = {\color{#f46f22} g'(x) } {\color{#5ca6f4} f'({\color{#3cc15c} g }) } = {\color{#f46f22} 5 } {\color{#5ca6f4} e^{{\color{#3cc15c} 5x } }} = 5y. 
> $$
> 

> [!abstract]- 20
> Deriver funksjonen $y = xe^x -x$.

> [!note]- Løsning
> Vi ser at første ledd ${\color{#e796f5} x } \cdot {\color{#3cc15c} e^x }$ er et produkt av to funksjoner.
> [[Kapittel 2 - derivasjon/defogteo/💡 Produktregelen|Produktregelen]] sier at 
> $$
> ({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' = {\color{#f46f22} f' }{\color{#3cc15c} g }+{\color{#e796f5} f }{\color{#5ca6f4} g' }.
> $$
> Her er 
> 
> 1. ${\color{#e796f5} f(x)=x }$
> 2. ${\color{#f46f22} f'(x) = 1 }$
> 3. ${\color{#3cc15c} g(x) = e^x }$
> 4. ${\color{#5ca6f4} g'(x)=e^x }$.
> 
> Setter vi det sammen får vi
> $$
> y' = {\color{#f46f22} 1 }\cdot {\color{#3cc15c} e^x } + {\color{#e796f5} x } {\color{#5ca6f4} e^x } - 1 = e^x(1+x)-1.
> $$ 
> 

> [!abstract]- 21
> Deriver funksjonen $y = \frac{x}{e^{2x}}$.

> [!note]- Løsning
> Vi bruker [[Kapittel 2 - derivasjon/defogteo/💡 Kvotientregelen|kvotientregelen]] (på hele uttrykket) og [[Kapittel 2 - derivasjon/defogteo/💡 Produktregelen|produktregelen]] (når vi deriver nevner) og får 
> $$
> \begin{aligned} 
> \frac{dy}{dx} & = \frac{1\cdot e^{2x} - x \cdot 2e^{2x}}{(e^{2x})^2} \\ & =  \frac{ \cancel{ e^{2x} }- 2x \cdot \cancel{ e^{2x} }}{e^{2x} \cdot \cancel{ e^{2x} }} \\ &= \frac{1-2x}{e^{2x}} = \frac{1}{e^{2x}}-2 y
> \end{aligned} 
> $$
> 

> [!abstract]- 22
> Deriver uttrykket $y = x^2 e^{x/2}$

> [!note]- Løsning
>Vi bruker [[Kapittel 2 - derivasjon/defogteo/💡 Produktregelen|produktregelen]], der $x^2$ og $e^{\frac{x}{2}}$ er de to faktorene. I tillegg bruker vi [[Kapittel 2 - derivasjon/defogteo/💡 Kjerneregelen|kjerneregelen]] for å derivere $e^{\frac{x}{2}}$, der $e^x$ er ytre funksjon og $\frac{x}{2}$ er indre. Det gir oss
> $$
> \begin{aligned}
> 2x e^{x/2} + x^2\cdot \left( \frac{1}{2} e^{x/2} \right) = e^{x/2}\left( 2x+\frac{x^2}{2} \right).
> \end{aligned} 
> $$
> 

> [!abstract]- 31
> Deriver funksjonen $y =e^x \sin(x)$.

> [!note]- Løsning
> Uttrykket er et produkt av $e^x$ og $\sin(x)$. Derfor bruker vi [[Kapittel 2 - derivasjon/defogteo/💡 Produktregelen|produktregelen]] for å derivere disse. Det gir
> $$
> y' = e^x \sin(x) + e^x\cos(x).
> $$
> 

> [!abstract]- 32
> Deriver funksjonen $y = e^{-x}\cos(x)$.

> [!note]- Løsning
>Uttrykket er et produkt av $e^{-x}$ og $\cos(x)$. Derfor bruker vi [[Kapittel 2 - derivasjon/defogteo/💡 Produktregelen|produktregelen]] for å derivere disse. Det gir
> $$
> \begin{aligned} 
> \frac{dy}{dx} & = -e^{-x} \sin(x) + e^{-x}(-\sin(x)) \\ & = -e^{-x}(\cos(x)+\sin(x)).
> \end{aligned} 
> $$
> Merk at vi bruker [[Kapittel 2 - derivasjon/defogteo/💡 Kjerneregelen|kjerneregelen]] for å derivere $e^{-x}$, ved å betrakte $-x$ som indre funksjon og $e^x$ som ytre.
> 
## 3.4


> [!abstract]- 1
> Avgjør verdien til $\lim_{x\longrightarrow \infty} x^3e^{-x}$.

> [!note]- Løsning
> Her trenger vi bare skrive om uttrykket som $\frac{x^3}{e^x}$ og se at dette bare et tilfelle av [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Eksponentiell vekst|punkt 2. her]]. Eksponentialfunksjoner vokser slår polynomer!
> 

> [!abstract]- 3
> Avgjør verdien $\lim_{x\longrightarrow \infty}\frac{2e^x-3}{e^x +5}.$

> [!note]- Løsning
> Vi kan vet at eksponentialfunksjoner vokser raskest, så vi faktoriserer ut de som faktor i teller og nevner og får
> $$
> \begin{aligned} 
> \lim_{x\longrightarrow \infty}\frac{2e^x-3}{e^x +5} &=  \lim_{x\longrightarrow  \infty}\frac{\cancel{ e^x }\left( 2-\frac{3}{e^x} \right)}{\cancel{ e^x }\left( 1+\frac{5}{e^x} \right)} \\ &= \lim_{x\longrightarrow  \infty} \frac{ 2-\frac{3}{e^x}}{1+\frac{5}{e^x}} = \frac{2-0}{1+0}=2.
> \end{aligned} 
> $$
> 

> [!abstract]- 5
> Avgjør verdien til $\lim_{(x)\longrightarrow 0+} x\ln(x)$.
> 

> [!note]- Løsning
>Dette er ikke annet enn et spesialtilfelle der $a=1$ av punkt 3. i [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Eksponentiell vekst|teoremet om eksponentiell vekst]].
> 

> [!abstract]- 9
> En bakteriekultur vokser i en hastighet proporsjonalt med størrelsen på bakteriekulturen. Hvis det er $100$ bakterier i kulturen når $t=0$ vil antall bakterie dobles hver time. Hvor mange bakterier er det når $t = \frac{5}{2}$?



> [!note]- Løsning
> 
> Hvis $B(t)$ er funksjonen som forteller antall bakterier i bakteriekulturen etter $t$ timer, så forteller [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Initialverdiproblem|initialverdiproblemet]] oss at $B(t)=100e^{kt}$. Videre får vi vite at når $t=1$ er $B(1)=200 = 100e^{k}$. Vi kan løse slik
> $$
> \begin{aligned} 200 &= 100 e^{k} && \bigg| : 2 \\
> 2  &= e^{k}  && \bigg| \ln() \\
> \ln(2) &= \ln(e^k) = k.
> \end{aligned} 
> $$ 
> 
> 
> Vi har nå at antall bakterier etter $\frac{5}{2}$ timer er  
> $$
> B\left( \frac{5}{2} \right) = 100 e^{\ln(2) \cdot 5/2} = 100 (e^{\ln(2)})^{\frac{5}{2}} =100\cdot 2^{\frac{5}{2}}.
> $$
> 
> *Alternativt*
> Med litt innsikt i eksponentiell vekst får vi at $B(t) = 100\cdot2^t$, så $B\left( \frac{5}{2} \right)= 100\cdot 2^{5/2}$.

> [!abstract]- 10
> Sukker løser seg opp i vann med en hastighet som er proporsjonal med mengden som fremdeles ikke er løst opp. 
> 
> Hvis det var 50 kg sukker til å begynne med, og etter 5 timer er det kun 20 kg igjen, hvor mye lenger tid vil det ta før 90% av sukkeret er løst opp?

> [!note]- Løsning
> 
> La $S(t)$ være mengden sukker som ikke er løst opp etter $t$ timer. Fra informasjonen i oppgaven vet vi at oppløsningshastigheten er proporsjonal med mengden som ikke er løst opp, altså $S'(t) = -kS(t)$.  [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Initialverdiproblem|Initialverdiproblemet]] forteller oss $S(t) = 50 e^{kt}$  for en konstant $k > 0$. 
> 
> hvor $S_0 = 50$ kg er startmengden sukker. Etter 5 timer er det 20 kg sukker igjen, så vi får:
> 
> $$
> \begin{aligned}
> 20 &= 50 e^{-5k} && \bigg| :50 \\
> \frac{2}{5} &= e^{-5k} && \bigg| \ln() \\
> \ln\left(\frac{2}{5}\right) &= -5k \\
> k &= \frac{-\ln\left(\frac{2}{5}\right)}{5}.
> \end{aligned}
> $$
> 
> For å finne hvor mye lenger tid det tar før 90% av sukkeret er løst opp, setter vi $S(t) = 0.1 \cdot 50 = 5$ kg:
> 
> $$
> \begin{aligned}
> 5 &= 50 e^{-kt} \\
> \frac{5}{50} &= e^{-kt} \\
> \frac{1}{10} &= e^{-kt} \\
> \ln\left(\frac{1}{10}\right) &= -kt \\
> t &= \frac{-\ln\left(\frac{1}{10}\right)}{k}.
> \end{aligned}
> $$
> 
> Sett inn verdien for $k$ fra tidligere:
> 
> $$
> \begin{aligned}
> t &= \frac{-\ln\left(\frac{1}{10}\right)}{\frac{-\ln\left(\frac{2}{5}\right)}{5}} \\
> t &= 5 \cdot \frac{\ln\left(\frac{1}{10}\right)}{\ln\left(\frac{2}{5}\right)}.
> \end{aligned}
> $$
> 
> Det vil ta omtrent 12.56 timer til før 90% av sukkeret er løst opp.

> [!abstract]- 11
> Et radioaktivt stoff brytes ned med en hastighet proporsjonal med mengden som er til stede. 
> 
> Hvis 30% av stoffet brytes ned på 15 år, hva er halveringstiden til stoffet?



> [!note]- Løsning
>
> 
> La $A(t)$ være mengden radioaktivt stoff som er igjen etter $t$ år. Siden stoffet brytes ned proporsjonalt med mengden, har vi $A'(t) = -kA(t)$ for en konstant $k$. Vi vet at løsningen på likningen over [[Kapittel 3 - Inverse funksjoner/defogteo/💡 Initialverdiproblem|er på formen]]:
> 
> $$
> A(t) = A_0 e^{-kt},
> $$
> 
> hvor $A_0$ er startmengden av stoffet. Etter 15 år er 30% av stoffet brutt ned, så 70% er igjen:
> 
> $$
> \begin{aligned}
> 0.7A_0 &= A_0 e^{-15k} \\
> 0.7 &= e^{-15k} \\
> \ln(0.7) &= -15k \\
> k &= \frac{-\ln(0.7)}{15}.
> \end{aligned}
> $$
> 
> Halveringstiden $T$ er tiden det tar for halvparten av stoffet å brytes ned, altså når $A(T) = \frac{1}{2}A_0$. Vi setter inn i den generelle løsningen:
> 
> $$
> \begin{aligned}
> \frac{1}{2}A_0 &= A_0 e^{-kT} \\
> \frac{1}{2} &= e^{-kT} \\
> \ln\left(\frac{1}{2}\right) &= -kT \\
> T &= \frac{\ln\left( \frac{1}{2} \right)}{-k}.
> \end{aligned}
> $$
> 
> Vi setter inn verdien for $k$:
> 
> $$
> \begin{aligned}
> T &= \frac{\ln\left( \frac{1}{2} \right)}{\frac{\ln(0.7)}{15}} = \frac{15\ln\left( \frac{1}{2} \right)}{\ln(0.7)} \\
> T &\approx 35.00\ \text{år}.
> \end{aligned}
> $$
> 
> Halveringstiden til stoffet er omtrent 29.15 år.

> [!abstract]- 12
> Hvis halveringstiden til radium er 1,690 år, hvor mange prosent av mengden som er til stede nå vil være igjen etter 
> 
> 1. 100 år?
> 2. 1000 år?

> [!note]- Løsning
> 
> La $A(t)$ være mengden radium som er igjen etter $t$ år. Siden radium brytes ned eksponentielt, kan vi skrive:
> 
> $$
> A(t) = A_0 e^{-kt},
> $$
> 
> hvor $A_0$ er startmengden og $k = \frac{\ln(2)}{1,690}$ fordi halveringstiden til radium er 1,690 år.
> 
> 1. Etter 100 år er mengden som er igjen:
> 
> $$
> \begin{aligned}
> A(100) &= A_0 e^{-k \cdot 100} \\
> &= A_0 e^{-\frac{\ln(2) \cdot 100}{1,690}} \\
> &\approx A_0 e^{-0.0411} \\
> &\approx A_0 \cdot 0.9597.
> \end{aligned}
> $$
> 
> Det er omtrent 95.97% av radiumet igjen etter 100 år.
> 
> 2. Etter 1,000 år er mengden som er igjen:
> 
> $$
> \begin{aligned}
> A(1000) &= A_0 e^{-k \cdot 1000} \\
> &= A_0 e^{-\frac{\ln(2) \cdot 1000}{1,690}} \\
> &\approx A_0 e^{-0.4107} \\
> &\approx A_0 \cdot 0.6631.
> \end{aligned}
> $$
> 
> Det er omtrent 66.31% av radiumet igjen etter 1,000 år.


## 4.3



> [!abstract]- 1
> Regn ut 
> $$
> \lim_{x\longrightarrow  0}\frac{3x}{\tan(4x)}.
> $$

> [!note]- Løsning
>
> Vi ser at grensen går mot den ubestemte formen $\left[ \frac{0}{0} \right]$. Da tenker vi l'Hôpitals regel og deriverer teller og nevner hver for seg og får $\frac{3}{4(1+\tan^2(4x))}$ ([[Kapittel 2 - derivasjon/91 Derivasjon av andre trigonometriske funksjoner|se her]] for derivasjon av $\tan(x)$). Nå ser vi at
> $$
> \begin{aligned} 
> \lim_{x\longrightarrow   0} \frac{3x}{\tan(4x)} \overset{ l'H }{=  } \lim_{x\longrightarrow  0}\frac{3}{4(1+\tan^2(4x))}  & = \frac{3}{4(1+0)}  \\ & = \frac{3}{4}.
> \end{aligned} 
> $$

> [!abstract]- 3
>  Regn ut
>  $$
> \lim_{x\longrightarrow  0}\frac{\sin(ax)}{\sin(bx)}.
> $$


> [!note]- Løsning
> 
> Vi ser at grensen går mot den ubestemte formen $\left[ \frac{0}{0} \right]$. Da tenker vi l'Hôpitals regel og deriverer teller og nevner hver for seg og får $\frac{a\cos(ax)}{b\cos(bx)}$.

> [!abstract]- 5
> Regn ut
>  $$
> \lim_{x\longrightarrow  0}\frac{\sin^{-1}(x)}{\tan^{-1}(x)}. 
> $$

> [!note]- Løsning
> 
> Vi ser at grensen går mot den ubestemte formen $\left[ \frac{0}{0} \right]$. Vi  sjekker om vi kan bruke l'Hôpitals regel, [[Kapittel 3 - Inverse funksjoner/3.1.3 Derivasjon av inverse trigonometriske funksjoner|deriverer]]  teller og nevner hver for seg:
>
> $$
> \begin{aligned}
> \frac{d}{dx} \sin^{-1}(x) &= \frac{1}{\sqrt{1 - x^2}} \\
> \frac{d}{dx} \tan^{-1}(x) &= \frac{1}{1 + x^2}.
> \end{aligned}
> $$
> 
> Nå er det tydelig at vi får en grense som eksisterer. Dermed får vi
> 
> $$
> \lim_{x\longrightarrow  0}\frac{\sin^{-1}(x)}{\tan^{-1}(x)}\overset{ l'H }{=  } \lim_{x\longrightarrow 0} \frac{\frac{1}{\sqrt{1 - x^2}}}{\frac{1}{1 + x^2}}  = \lim_{x\longrightarrow 0} \frac{1 + x^2}{\sqrt{1 - x^2}} = \frac{1}{1} = 1.
> $$



> [!abstract]- 9
> Regn ut
> $$
> \lim_{t\longrightarrow  \pi} \frac{\sin^2(t)}{t-\pi}.
> $$

> [!note]- Løsning
>
> 
> Vi ser at grensen går mot formen $\left[ \frac{0}{0} \right]$. Vi sjekker om vi kan bruke l'Hôpitals regel. Vi deriverer teller og nevner:
> 
> $$
> \begin{aligned} 
> \frac{d}{dt} \sin^2(t) & = 2\sin(t)\cos(t)  = \sin(2t), \\ \frac{d}{dt}(t - \pi) &= 1.
> \end{aligned}  
> $$
> 
> Det er tydelig at kriteriene for l'Hôpitals regel er oppfylt. Dermed får vi
> 
> $$
> \lim_{t\longrightarrow \pi} \frac{\sin^2(t)}{t - \pi} \overset{ l'H }{=  } \lim_{t\longrightarrow \pi} \sin(2t) = \sin(2\pi) = 0.
> $$


> [!abstract]- 13
> Regn ut
> $$
> \lim_{x\longrightarrow  \infty} x \sin\left( \frac{1}{x} \right).
> $$

> [!note]- Løsning
>
> Vi ser at vi kan skrive dette som $\frac{\sin\left( \frac{1}{x} \right)}{\frac{1}{x}}$. Hvis $h = \frac{1}{x}$ så vil $x\longrightarrow \infty$ bety at $h\longrightarrow  0$, så vi kan tenke slik
> $$
> \lim_{x\longrightarrow  \infty} x\sin\left( \frac{1}{x} \right) = \lim_{h\longrightarrow  0} \frac{\sin(h)}{h} = 1.
> $$
> 
> *Alternativt*
> Vi ser at omformingen går mot  $\left[ \frac{0}{0} \right]$, så vi kan undersøke om vi kan bruke l'H. Vi vil da får samme konklusjon. 


> [!abstract]- 19
> $$
> \lim_{t\longrightarrow  \frac{\pi}{2}} \frac{\sin(t)}{t}
> $$

> [!note]- Løsning
>
> Siden $\frac{\sin(t)}{t}$ er en kontinuerlig funksjon rundt $t=\frac{\pi}{2}$ kan vi bare sette inn verdien og få $\lim_{t\longrightarrow \frac{\pi}{2}} \frac{\sin(t)}{t} = \frac{1}{\frac{\pi}{2}}=\frac{2}{\pi}$. 

> [!abstract]- 24
> $$
> \lim_{x\longrightarrow 0+}x^{\sqrt{x}}.
> $$

> [!note]- Løsning
> 
> Vi starter med å ta $\ln$ på begge sider:
> 
> $$
> y = x^{\sqrt{x}} \quad \Rightarrow \quad \ln(y) = \sqrt{x} \ln(x).
> $$
> 
> Nå ser vi på grensen til $\ln(y)$ når $x \to 0^+$:
> 
> $$
> \lim_{x \to 0^+} \sqrt{x} \ln(x) = \lim_{x \to 0^+} \frac{\ln(x)}{1/\sqrt{x}}.
> $$
> 
> Dette er en $\left[ \frac{-\infty}{\infty} \right]$-type grense, så vi undersøker om vi kan bruke l'Hôpitals regel. Deriverer teller og nevner:
> 
> $$
> \frac{d}{dx} \ln(x) = \frac{1}{x}, \quad \frac{d}{dx} \left( \frac{1}{\sqrt{x}} \right) = -\frac{1}{2}x^{-3/2}.
> $$
> 
> Ser vi på $\frac{\frac{1}{x}}{-\frac{1}{2}x^{-3/2}} =  -2x^{1/2}$ ser vi at grensen eksisterer, så vi kan bruke l'H.
> 
> $$
> \lim_{x \to 0^+} \frac{\ln(x)}{1/\sqrt{x}} \overset{ l'H }{=  } \lim_{x \to 0^+} \frac{\frac{1}{x}}{-\frac{1}{2}x^{-3/2}} = \lim_{x \to 0^+} -2x^{1/2} = 0.
> $$
> 
> Dette betyr at $\ln(y) \to 0$, og dermed $y \to e^0 = 1$. Derfor er
> 
> $$
> \lim_{x\longrightarrow 0+}x^{\sqrt{x}} = 1.
> $$