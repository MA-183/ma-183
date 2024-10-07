## 3.5

> [!abstract] 1
> Avgjør verdien til $\sin^{-1}\left( \frac{\sqrt{3}}{2} \right)$.


> [!note]- Løsning
> Vi vet at $\sin^{-1}(x)$ gir vinkelen der sinus av vinkelen er lik $x$. For $\sin^{-1}\left( \frac{\sqrt{3}}{2} \right)$, ser vi at vinkelen er $\frac{\pi}{3}$, siden $\sin\left( \frac{\pi}{3} \right) = \frac{\sqrt{3}}{2}$.
> 
> Derfor er $\sin^{-1}\left( \frac{\sqrt{3}}{2} \right) = \frac{\pi}{3}$.



> [!abstract] 2
> Avgjør verdien til $\cos^{-1}\left( \frac{-1}{2} \right)$.


> [!note]- Løsning
> Siden $\cos^{-1}(x)$ gir vinkelen der cosinus av vinkelen er lik $x$. For $\cos^{-1}\left( \frac{-1}{2} \right)$, er vinkelen $\frac{2\pi}{3}$, siden $\cos\left( \frac{2\pi}{3} \right) = \frac{-1}{2}$.
> 
> Derfor er $\cos^{-1}\left( \frac{-1}{2} \right) = \frac{2\pi}{3}$.


> [!abstract] 3
> Avgjør verdien til $\tan^{-1}\left( -1 \right)$.


> [!note]- Løsning
> Siden $\tan^{-1}(x)$ gir vinkelen der tangens av vinkelen er lik $x$. For $\tan^{-1}(-1)$, er vinkelen $\frac{-\pi}{4}$, siden $\tan\left( \frac{-\pi}{4} \right) = -1$.
> 
> Derfor er $\tan^{-1}\left( -1 \right) = \frac{-\pi}{4}$.


> [!abstract] 5
> Avgjør verdien til $\sin\left( \sin^{-1}\left( 0.7 \right) \right)$.


> [!note]- Løsning
> Siden $\sin^{-1}(x)$ gir vinkelen der sinus av vinkelen er lik $x$. Derfor er $\sin\left( \sin^{-1}(0.7) \right) = 0.7$.


> [!abstract] 6
> Avgjør verdien til $\cos\left( \sin^{-1}\left( 0.7 \right) \right)$.


> [!note]- Løsning
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

> [!note]- Løsning
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

> [!note]- Løsning
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


> [!note]- Løsning
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



> [!note]- Løsning
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


> [!note]- Løsning
> Arealet av et kvadrat er gitt ved $A = s^2$, der $s$ er sidelengden. For å finne endringsraten til arealet, der sidelengden endrer seg med ${\color{#f46f22} ds/dt = 2\text{cm/min} }$, bruker vi [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]]:
> 
> $$
> \frac{dA}{dt} = {\color{#e796f5} 2s } {\color{#f46f22} \frac{ds}{dt}. }
> $$
> 
> Når $s = 8$ cm:
> 
> $$
> \frac{dA}{dt} = {\color{#e796f5} 2 \cdot 8 \text{cm} } \cdot {\color{#f46f22} 2\text{cm/min} } = 32 \text{ cm}^2/\text{min}.
> $$


> [!abstract] 2
> Arealet til et kvadrat minker med $2$cm${}^2$/s. Hvor fort endrer sidelengden seg når sidelengden er $8$cm. 

> [!note]- Løsning
> Arealet av et kvadrat er gitt ved $A = s^2$. Deriverer med [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] for å finne endringsraten til sidelengden:
> 
> $$
> {\color{#5ca6f4} \frac{dA}{dt}  }= {\color{#e796f5} 2s } {\color{#f46f22} \frac{ds}{dt} }.
> $$
> 
> Når ${\color{#e796f5} s = 8\text{cm} }$ cm og ${\color{#5ca6f4} \frac{dA}{dt} = -2\text{cm}^2/s }$:
> 
> $$
> {\color{#5ca6f4} -2 } = {\color{#e796f5} 2 \cdot 8 } \cdot {\color{#f46f22} \frac{ds}{dt} } \quad \Rightarrow \quad \frac{ds}{dt} = \frac{-2}{16} = -\frac{1}{8} \text{ cm/s}.
> $$


> [!abstract] 9
> Hvor fort endrer overflatearealet til en kube når volumet av kuben er $64\text{cm}^3$ og den øker med $2\text{cm}^3/s$.


> [!note]- Løsning
> Volumet til en kube er $V = s^3$, der $s$ er sidelengden. Overflatearealet er $A = 6s^2$. Først finner vi $s$ ved:
> 
> $$
> s^3 = 64 \quad \Rightarrow \quad s = 4 \text{ cm}.
> $$
> 
> Deriverer vi volumet med [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] får vi:
> 
> $$
> {\color{#e796f5} \frac{dV}{dt} } = {\color{#f46f22} 3s^2 } {\color{#5ca6f4} \frac{ds}{dt}. }
> $$
> 
> Når ${\color{#e796f5} \frac{dV}{dt} = 2 \text{cm}^3/\text{s} }$ og ${\color{#f46f22} s = 4 }$ cm:
> 
> $$
> {\color{#e796f5} 2 } = {\color{#f46f22} 3 \cdot 4^2 } \cdot {\color{#5ca6f4} \frac{ds}{dt}  }\quad \Rightarrow \quad {\color{#5ca6f4} \frac{ds}{dt}  }= \frac{{\color{#e796f5} 2 }}{{\color{#f46f22} 48 }} = \frac{1}{24} \text{ cm/s}.
> $$
> 
> Deriver overflatearealet:
> 
> $$
> \frac{dA}{dt} = {\color{#3cc15c} 12s } {\color{#5ca6f4} \frac{ds}{dt} }.
> $$
> 
> Når ${\color{#3cc15c} s = 4 }$ cm og ${\color{#5ca6f4} \frac{ds}{dt} = \frac{1}{24} }$ cm/s:
> 
> $$
> \frac{dA}{dt} = {\color{#3cc15c} 12 \cdot 4  }\cdot{\color{#5ca6f4}  \frac{1}{24}  }= 2 \text{ cm}^2/\text{s}.
> $$

> [!abstract] 13
> Et punkt beveger seg langs kurven $y=x^2$. Hvor fort endrer punktet seg i $y$-retning når $x = -2$ og $x$ synker i en rate på $3$?



> [!note]- Løsning
> For $y = x^2$, deriverer vi begge sider med hensyn til tid for å finne $\frac{dy}{dt}$ kan vi bruke [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]] og få:
> 
> $$
> {\color{#e796f5} \frac{dy}{dt} } = {\color{#3cc15c} 2 }x {\color{#f46f22} \frac{dx}{dt} }.
> $$
> 
> Når ${\color{#5ca6f4} x = -2 }$ og ${\color{#f46f22} \frac{dx}{dt} = -3 }$:
> 
> $$
> {\color{#e796f5} \frac{dy}{dt} } = {{\color{#3cc15c}  2 } } \cdot {\color{#5ca6f4} (-2) } \cdot{\color{#f46f22}  (-3) } = 12.
> $$

> [!abstract] 16 (Radar-pistoler) 
> En politibetjent står nær en motorvei og bruker en radar-pistol for å ta fartssyndere. Han sikter mot en bil som akkurat har passert posisjonen hans, og når pistolen peker i en vinkel på $45^\circ$ til veiretningen, ser han at avstanden mellom bilen og radarpistolen øker med en hastighet på $100 \text{ km/t}$. Hvor raskt kjører bilen?


> [!note]- Løsning
> La $s$ være avstanden mellom radarpistolen og bilen. Vi får vite at ${\color{#5ca6f4} \frac{ds}{dt} = 100 \text{ km/t} }$ er radarpistolens avlesning. Bilens hastighet $\frac{dx}{dt}$ kan vi finne ved å utnytte at vi får en likebeint trekant slik som figuren under viser. 
> 
> ![[Files/shapes at 24-09-24 14.03.02.svg]]
> 
> Når bilen danner en 45 graders vinkel med veiretningen ser vi at sammenhengen mellom avstanden til bilen $s$ og avstanden til veien er $2x^2 = s^2$, eller at ${ x = \frac{\sqrt{2}}{2}s }$
> Deriverer vi med hensyn på $t$ får vi
> $$
> \frac{dx}{dt} = \frac{{\sqrt{2}}}{2} {\color{#5ca6f4} \frac{ds}{dt} } = \frac{\sqrt{2}}{2}{\color{#5ca6f4} 100\text{ km/t} } \approx 141 \text{ km/t}.
> $$

> [!abstract] 17 
> Hvis radar-pistolen i oppgave 16 er rettet mot en bil som kjører i $90 \text{ km/t}$ langs en rett vei, hva vil radarpistolens avlesning være når pistolen peker i en vinkel på $30^\circ$ i forhold til veien?

> [!note]- Løsning
> La $s$ være avstanden mellom radarpistolen og bilen. Vi får vite at ${\color{#5ca6f4} \frac{ds}{dt} = 90 \text{ km/t} }$ er radarpistolens avlesning. Bilens hastighet $\frac{dx}{dt}$ kan vi finne ved å utnytte at vi får en likebeint trekant slik som figuren under viser. 
> 
> ![[Files/shapes at 24-09-24 14.02.54.svg]]
> 
> Når bilen danner en 30 graders vinkel med veiretningen får vi sammenhengen $x^2 = s^2-\left( \frac{1}{2}s \right)^2 = \frac{3s^2}{4}$ eller at $x =\frac{\sqrt{3}}{2} s$. Deriverer vi med hensyn på $t$ får vi
> $$
> \frac{dx}{dt} = \frac{\sqrt{3}}{2}{\color{#5ca6f4} \frac{ds}{dt} } = \frac{\sqrt{3}}{2} {\color{#5ca6f4} 90 \text{ km/t}}.
> $$
> Det tilsvarer omrent $79\text{ km/t}$.
> 


> [!abstract] 18 
> En stige på $5 \text{ m}$ hviler mot en loddrett vegg. Hvis stigefoten beveger seg bort fra veggen med en hastighet på $1/3 \text{ m/s}$, hvor raskt glir toppen av stigen ned langs veggen når den er $3 \text{ m}$ over bakken?


> [!note]- Løsning
> Bruk Pythagoras’ setning: $x^2 + y^2 = 5^2$. Deriver begge sider med hensyn til tid:
> 
> $$
> 2{\color{#e796f5} x } {\color{#3cc15c} \frac{dx}{dt} } + 2{\color{#f46f22} y } {\color{#5ca6f4} \frac{dy}{dt} } = 0.
> $$
> 
> Når ${\color{#f46f22} y = 3 }$ m, gir Pythagoras ${\color{#e796f5} x = 4 }$ m. Vi har ${\color{#3cc15c} \frac{dx}{dt} = \frac{1}{3} }$ m/s, så:
> 
> $$
> {\color{#e796f5} 2 \cdot 4 } \cdot {\color{#3cc15c} \frac{1}{3} } + {\color{#f46f22} 2 \cdot 3 } \cdot {\color{#5ca6f4} \frac{dy}{dt} } = 0 \quad \Rightarrow \quad {\color{#5ca6f4} \frac{dy}{dt} } = -\frac{4}{9} \text{ m/s}.
> $$

> [!abstract] 26 (Kjegleformet tank) 
> En vanntank er formet som en omvendt rett sirkulær kjegle med toppradius på $10 \text{ m}$ og dybde $8 \text{ m}$. Vann strømmer inn i en rate av $1/10 \text{ m}^3/\text{min}$. Hvor raskt øker dybden av vannet når vannstanden er $4 \text{ m}$ dyp?

> [!note]- Løsning
> Volumet til en kjegle er gitt ved $V = \frac{1}{3} \pi r^2 h$. Forholdet mellom radius $r$ og høyde $h$ er konstant siden tanken er en kjegle, se figur FIXMEFIGUR. Vi kan derfor bruke informasjonen om høyde og toppradius slik
> 
> $$
> \frac{r}{h} = \frac{10}{8} = \frac{5}{4} \implies r = \frac{5}{4}h.
> $$
> 
> Vi setter inn $\frac{5}{4}h$ for $r$ i volumformelen:
> 
> $$
> V = \frac{1}{3} \pi \left( \frac{5}{4}h \right)^2 h = \frac{25\pi}{48} h^3.
> $$
> 
> Deriverer vi med hensyn til tid $t$ får vi:
> 
> $$
> {\color{#5ca6f4} \frac{dV}{dt} } = \frac{25\pi}{16} {\color{#3cc15c} h^2 } {\color{#f46f22} \frac{dh}{dt} }.
> $$
> 
> Når ${\color{#3cc15c} h = 4 \text{ m} }$ og ${\color{#5ca6f4} \frac{dV}{dt} = \frac{1}{10} \text{ m}^3/\text{min} }$, kan vi løse for ${\color{#f46f22} \frac{dh}{dt} }$:
> 
> $$
> {\color{#5ca6f4} \frac{1}{10} } = \frac{25\pi}{16} \cdot{\color{#3cc15c}  16 } \cdot {\color{#f46f22} \frac{dh}{dt} } \quad \Rightarrow \quad {\color{#f46f22} \frac{dh}{dt} } = \frac{1}{250\pi} \approx 0,00127 \text{ m/min}.
> $$

## 4.2

I oppgavene her oppfordres du til å både øve deg på algebra ved å løse oppgavene manuelt, og øve deg på å løse oppgavene med programmering. 


> [!abstract] 7
> Finn $\sqrt{2}$ ved å løse likningen $x^2 - 2 = 0$ ved å Newtons metode.


> [!note]- Løsning
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


> [!note]- Løsning
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


> [!note]- Løsning
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

