## 3.5

> [!abstract] 1
> Avgjør verdien til $\sin^{-1}\left( \frac{\sqrt{3}}{2} \right)$.


> [!note]+ Løsning
> Vi vet at $\sin^{-1}(x)$ gir vinkelen der sinus av vinkelen er lik $x$. For $\sin^{-1}\left( \frac{\sqrt{3}}{2} \right)$, ser vi at vinkelen er $\frac{\pi}{3}$, siden $\sin\left( \frac{\pi}{3} \right) = \frac{\sqrt{3}}{2}$.
> 
> Derfor er $\sin^{-1}\left( \frac{\sqrt{3}}{2} \right) = \frac{\pi}{3}$.



> [!abstract] 2
> Avgjør verdien til $\cos^{-1}\left( \frac{-1}{2} \right)$.


> [!note]+ Løsning
> Siden $\cos^{-1}(x)$ gir vinkelen der cosinus av vinkelen er lik $x$. For $\cos^{-1}\left( \frac{-1}{2} \right)$, er vinkelen $\frac{2\pi}{3}$, siden $\cos\left( \frac{2\pi}{3} \right) = \frac{-1}{2}$.
> 
> Derfor er $\cos^{-1}\left( \frac{-1}{2} \right) = \frac{2\pi}{3}$.


> [!abstract] 3
> Avgjør verdien til $\tan^{-1}\left( -1 \right)$.


> [!note]+ Løsning
> Siden $\tan^{-1}(x)$ gir vinkelen der tangens av vinkelen er lik $x$. For $\tan^{-1}(-1)$, er vinkelen $\frac{-\pi}{4}$, siden $\tan\left( \frac{-\pi}{4} \right) = -1$.
> 
> Derfor er $\tan^{-1}\left( -1 \right) = \frac{-\pi}{4}$.


> [!abstract] 5
> Avgjør verdien til $\sin\left( \sin^{-1}\left( 0.7 \right) \right)$.


> [!note]+ Løsning
> Siden $\sin^{-1}(x)$ gir vinkelen der sinus av vinkelen er lik $x$. Derfor er $\sin\left( \sin^{-1}(0.7) \right) = 0.7$.


> [!abstract] 6
> Avgjør verdien til $\cos\left( \sin^{-1}\left( 0.7 \right) \right)$.


> [!note]+ Løsning
> La ${\color{#e796f5} \theta = \sin^{-1}(0.7)}$. Da er ${\color{#3cc15c} \sin({\color{#e796f5} \theta }) = 0.7 }$. 
> 
> Ved å bruke Pythagoras' teorem, har vi:
> 
> $$
> {\color{#5ca6f4} \cos^2(\theta) + {\color{#3cc15c} \sin^2({\color{#e796f5} \theta) } } = 1 \quad \Rightarrow \quad \cos^2(\theta) = 1 -{\color{#3cc15c}  0.7^2 } = 1 - 0.49 = 0.51. }
> $$
> Med andre ord er ${\color{#5ca6f4} \cos^2({\color{#e796f5} \theta }) } = {\color{#5ca6f4} \cos({\color{#e796f5} \sin^{-1}(0.7) }) } = 0.51$
> 
> Derfor er ${ \cos({\color{#e796f5} \theta }) = \sqrt{0.51} }$.
> 
> Så, $\cos\left( \sin^{-1}(0.7) \right) = \sqrt{0.51}$.


> [!abstract] 19
> Deriver funksjonen $y = \sin^{-1}\left( \frac{2x-1}{3} \right)$.

> [!note]+ Løsning
> [[Kapittel 3 - transendentale funksjoner/defogteo/Teo Derivasjon av inverse trigonometriske funksjoner|Derivasjonsregelen]] for ${\color{#e796f5} \sin^{-1}(u) }$ kombinert med [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] er 
> $$
> \frac{d}{dx} {\color{#e796f5} \sin^{-1}(u) } = {\color{#f46f22} \frac{1}{\sqrt{1 - u^2}} } \cdot {\color{#5ca6f4} \frac{du}{dx} }.
> $$
> 
> La ${\color{#3cc15c} u = \frac{2x-1}{3} }$. Da er ${\color{#5ca6f4} \frac{du}{dx} = \frac{2}{3} }$.
> 
> Den deriverte til $y = \sin^{-1}\left( \frac{2x-1}{3} \right)$ er da:
> 
> $$
> y' = {\color{#f46f22} \frac{1}{\sqrt{1 - \left( \frac{2x-1}{3} \right)^2}} } \cdot {\color{#5ca6f4} \frac{2}{3} }.
> $$


> [!abstract] 20
> Deriver funksjonen $y = \tan^{-1}\left( ax+b \right)$.

> [!note]+ Løsning
> [[Kapittel 3 - transendentale funksjoner/defogteo/Teo Derivasjon av inverse trigonometriske funksjoner|Derivasjonsregelen]] for ${\color{#e796f5} \tan^{-1}(u) }$ kombinert med [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] er $\frac{d}{dx} {\color{#e796f5} \tan^{-1}(u) } = {\color{#f46f22} \frac{1}{1 + u^2} } \cdot {\color{#5ca6f4} \frac{du}{dx} }$.
> 
> La ${\color{#3cc15c} u = ax + b }$. Da er ${\color{#5ca6f4} \frac{du}{dx} = a }$.
> 
> Den deriverte til $\tan^{-1}(ax+b)$ er da:
> $$
> y' ={\color{#f46f22}  \frac{1}{1 + ({\color{#3cc15c} ax + b })^2}  }\cdot {\color{#5ca6f4} a }.
> $$



> [!abstract] 21
> Deriver funksjonen $y = \cos^{-1}\left( \frac{x-b}{a} \right)$.


> [!note]+ Løsning
> [[Kapittel 3 - transendentale funksjoner/defogteo/Teo Derivasjon av inverse trigonometriske funksjoner|Derivasjonsregelen]] for  ${\color{#e796f5} \cos^{-1}(u) }$ kombinert med [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]]  er $\frac{d}{dx} {\color{#e796f5} \cos^{-1}(u)  }= {\color{#f46f22} \frac{-1}{\sqrt{1 - u^2}} } \cdot {\color{#5ca6f4} \frac{du}{dx} }$.
> 
> La ${\color{#3cc15c} u = \frac{x-b}{a} }$. Da er ${\color{#5ca6f4} \frac{du}{dx} = \frac{1}{a} }$.
> 
> Den deriverte av funksjonen blir da:
> $$
> y' = {\color{#f46f22} \frac{-1}{\sqrt{1 - \left({\color{#3cc15c}  \frac{x-b}{a}  }\right)^2}}  }\cdot {\color{#5ca6f4} \frac{1}{a} }.
> $$



> [!abstract] 22
> Deriver funksjonen $y =x \sin^{-1}\left(x\right)$.



> [!note]+ Løsning
> Vi bruker [[Kapittel 2 - derivasjon/defogteo/Teo Produktregelen|produktregelen]]: $\frac{d}{dx}({\color{#e796f5} u }{\color{#3cc15c} v }) = {\color{#f46f22} u' }{\color{#3cc15c} v } + {\color{#e796f5} u }{\color{#5ca6f4} v' }$.
> 
> La 
> 1. ${\color{#e796f5} u = x }$ og 
> 2. ${\color{#3cc15c} v = \sin^{-1}(x) }$. 
> 
> Da er
>  
> 3. ${\color{#f46f22} u' = 1 }$ og 
> 4. ${\color{#5ca6f4} v' = \frac{1}{\sqrt{1 - x^2}} }$.
> 
> Den deriverte blir da:
> $$
> y' = {\color{#f46f22} 1 } \cdot{\color{#3cc15c}  \sin^{-1}(x) } + {\color{#e796f5} x } \cdot {\color{#5ca6f4} \frac{1}{\sqrt{1 - x^2}} } = \sin^{-1}(x) + \frac{x}{\sqrt{1 - x^2}}.
> $$

## 4.1

> [!abstract] 1
> Avgjør endringsraten til arealet av et kvadrat med sidelengde $8$cm som øker med $2$cm/min.

> [!abstract] 5
> Arealet til et kvadrat minker med $2$cm${}^2$/s. Hvor fort endrer sidelengden seg når sidelengden er $8$cm. 

> [!abstract] 9
> Hvor for endrer overflatearealet til en kube når volumet av kuben er $64\text{cm}^3$ og den øker med $2\text{cm}^3/s$.

> [!abstract] 13
> Et punkt beveger seg langs kurven $y=x^2$. Hvor fort endrer punktet seg i $y$-retning når $x = -2$ og $x$ synker i en rate på $3$?

> [!abstract] 15 
> Punktet $P$ beveger seg slik at når $t = t$ er det i skjæringspunktet mellom kurvene $xy = t$ og $y = tx^2$. Hvor raskt endres avstanden fra $P$ til origo når $t = 2$?

> [!abstract] 16 (Radar-pistoler) 
> En politibetjent står nær en motorvei og bruker en radar-pistol for å ta fartssyndere. Han sikter mot en bil som akkurat har passert posisjonen hans, og når pistolen peker i en vinkel på $45^\circ$ til veiretningen, ser han at avstanden mellom bilen og radarpistolen øker med en hastighet på $100 \text{ km/t}$. Hvor raskt kjører bilen?

> [!abstract] 17 
> Hvis radar-pistolen i oppgave 16 er rettet mot en bil som kjører i $90 \text{ km/t}$ langs en rett vei, hva vil radarpistolens avlesning være når pistolen peker i en vinkel på $30^\circ$ i forhold til veien?

> [!abstract] 18 
> Stigen på $5 \text{ m}$ hviler mot en loddrett vegg. Hvis stigefoten beveger seg bort fra veggen med en hastighet på $1/3 \text{ m/s}$, hvor raskt glir toppen av stigen ned langs veggen når den er $3 \text{ m}$ over bakken?

> [!abstract] 19 
> En mann på $2 \text{ m}$ går mot en lyktestolpe på flat mark i en hastighet på $0,5 \text{ m/s}$. Hvis lykten er $5 \text{ m}$ høy, hvor raskt minker lengden av mannens skygge når han er $3 \text{ m}$ fra lykten? Hvor raskt beveger skyggen seg langs bakken på det tidspunktet?


> [!abstract] 20 
> En kvinne på $6 \text{ ft}$ går med en hastighet på $2 \text{ ft/s}$ langs en rett vei på flat mark. En lyktestolpe som er $5 \text{ ft}$ fra stien kaster kvinnens skygge på bakken. Hvis lykten er $15 \text{ ft}$ høy, hvor raskt endrer lengden av skyggen seg når kvinnen er $12 \text{ ft}$ fra punktet nærmest lykten?


> [!abstract] 22 (Avstand mellom skip) 
> Klokken $1:00 \text{ p.m.}$ er skip $A$ $25 \text{ km}$ nord for skip $B$. Hvis skip $A$ seiler vestover med en hastighet på $16 \text{ km/t}$ og skip $B$ seiler sørover med $20 \text{ km/t}$, hvor raskt endrer avstanden mellom skipene seg klokken $1:30 \text{ p.m.}$?

> [!abstract] 23 
> Når er første gang etter klokken $3:00 \text{ p.m.}$ at viserne på en klokke overlapper hverandre?






> [!abstract] 26 (Kjegleformet tank) 
> En vanntank er formet som en omvendt rett sirkulær kjegle med toppradius på $10 \text{ m}$ og dybde $8 \text{ m}$. Vann strømmer inn i en rate av $1/10 \text{ m}^3/\text{min}$. Hvor raskt øker dybden av vannet når vannstanden er $4 \text{ m}$ dyp?

 
## 4.2

I oppgavene her oppfordres du til å både øve deg på algebra ved å løse oppgavene manuelt, og øve deg på å løse oppgavene med programmering. 


> [!abstract] 7
> Finn $\sqrt{2}$ ved å løse likningen $x^2 - 2 = 0$ ved å Newtons metode.


> [!note]+ Løsning
> Vi løser likningen $x^2 - 2 = 0$ ved hjelp av Newtons metode. Vi starter med funksjonen $f(x) = x^2 - 2$, og vi vil finne røttene. Deriverer vi denne, får vi $f'(x) = 2x$.
>
> Bruk Newtons metode, som har formelen:
> $$
> x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} = x_n - \frac{x_n^2 - 2}{2x_n}.
> $$
> Vi gjetter først $x_0 = 1.5$. Deretter beregner vi de neste verdiene uten å runde av underveis (dersom vi avrunder tidlig har vi ikke samme kontroll på nøyaktigheten):
> 
> Vi finner nå $x_1$ slik:
> $$
> \begin{aligned} 
> x_1  & = 1.5 - \frac{1.5^2 - 2}{2 \cdot 1.5} = 1.5 - \frac{0.25}{3} = 1.5 - \frac{1}{12} \\ &= \frac{18}{12} - \frac{1}{12} = \frac{17}{12}.
> \end{aligned} 
> $$
> Nå kan vi finne $x_2$ på samme måte:
> $$
> \begin{aligned} 
> x_2 & = \frac{17}{12} - \frac{\left(\frac{17}{12}\right)^2 - 2}{2 \cdot \frac{17}{12}} = \frac{17}{12} - \frac{\frac{289}{144} - \frac{288}{144}}{\frac{34}{12}}  \\ & = \frac{17}{12} - \frac{\frac{1}{144}}{\frac{34}{12}} = \frac{17}{12} - \frac{1}{144} \cdot \frac{12}{34}\\ & = \frac{17}{12} - \frac{1}{408} = \frac{6944}{4896}.
> \end{aligned} 
> $$
> Vi trenger fortsatt et mer nøyaktig resultat, vi finner $x_3$:
>  $$
> \begin{aligned} 
> x_3 & = \frac{6944}{4896} - \frac{\left(\frac{6944}{4896}\right)^2 - 2}{2 \cdot \frac{6944}{4896}} = \frac{6944}{4896} - \frac{\frac{48219136}{23970816} - \frac{47941632}{23970816}}{\frac{2\cdot6944}{4896} }  \\ & = \frac{6944}{4896} - \frac{277504}{23970816}\cdot \frac{4896}{2 \cdot6944}  \approx 1.4142194512
> \end{aligned} 
> $$
> Vi vet at $\sqrt{2}\approx 1.4142135624$, så vi har en tilnærming på 5 desimalers nøyaktighet.



> [!abstract] 9
> Estimer roten av $x^3 + 2x - 1 = 0$ mellom $0$ og $1$ ved å bruke Newtons metode til å finne $x_2$.


> [!note]+ Løsning
> Bruk Newtons metode for å finne løsningen til $x^3 + 2x - 1 = 0$ i intervallet $(0, 1)$. La $f(x) = x^3 + 2x - 1$, og deriverer vi, får vi $f'(x) = 3x^2 + 2$.
>
> Bruk Newtons metode:
> $$
> x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} = x_n - \frac{x_n^3 + 2x_n - 1}{3x_n^2 + 2}.
> $$
> Vi starter med $x_0 = 0.5$.
>
> Vi kan nå finne $x_1$ slik :
> $$
> \begin{aligned} 
> x_1 & = 0.5 - \frac{0.5^3 + 2 \cdot 0.5 - 1}{3(0.5)^2 + 2} = 0.5 - \frac{\frac{1}{8} + 1 - 1}{\frac{3}{4} + 2} \\ & = 0.5 - \frac{\frac{1}{8}}{\frac{11}{4}} \\ &= 0.5 - \frac{1}{22} = \frac{11}{22} - \frac{1}{22} \\ &= \frac{10}{22}.
> \end{aligned} 
> $$
> Tilsvarene får vi at $x_2$ er:
> $$
> \begin{aligned} 
> x_2 & = \frac{10}{22} - \frac{\left(\frac{10}{22}\right)^3 + 2 \cdot \frac{10}{22} - 1}{3 \cdot \left(\frac{10}{22}\right)^2 + 2} \\ & = \frac{10}{22} - \frac{\frac{1000}{10648} + \frac{20}{22} - 1}{\frac{300}{10648} + 2}  \\ & = \ldots = \frac{4524}{10044}.
> \end{aligned} 
> $$
> Etter 2 iterasjoner finner vi løsningen $x \approx 0.45340$.



> [!abstract] 13
> Bruk Newtons metode til å løse $\sin(x) = 1 - x$. Gjør 2 iterasjoner.
> *Hint* En skisse kan hjelpe deg med å gjøre et godt gjett for $x_0$. Her må du også finne tilnærminger for de trigonometriske funksjonene underveis. 


> [!note]+ Løsning
> Vi bruker Newtons metode for å løse likningen $\sin(x) = 1 - x$. La $f(x) = \sin(x) - 1 + x$, og deriverer vi får vi $f'(x) = \cos(x) + 1$.
>
> Newtons metode gir oss:
> $$
> x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} = x_n - \frac{\sin(x_n) - 1 + x_n}{\cos(x_n) + 1}.
> $$
> Fra skissen kan vi gjette $x_0 = 0.5$ som startverdi.
>
> Vi finner nå $x_1$ slik:
> $$
> \begin{aligned} 
> x_1 & = 0.5 - \frac{\sin(0.5) - 1 + 0.5}{\cos(0.5) + 1} = 0.5 - \frac{0.47943 - 0.5}{0.87758 + 1}  \\ & = 0.5 - \frac{-0.02057}{1.87758} = 0.5 + 0.01096 \\ &  = \frac{22}{44} + \frac{1}{91} = \frac{2021}{4044}.
> \end{aligned} 
> $$
> Vi finner $x_2$ ved å iterere:
> $$
> \begin{aligned} 
> x_2 & = \frac{2021}{4044} - \frac{\sin\left(\frac{2021}{4044}\right) - 1 + \frac{2021}{4044}}{\cos\left(\frac{2021}{4044}\right) + 1} \\ & = \ldots \\ & = \frac{5098}{9998}.
> \end{aligned} 
> $$
> Etter 2 iterasjoner finner vi løsningen $x \approx 0.51009$.

