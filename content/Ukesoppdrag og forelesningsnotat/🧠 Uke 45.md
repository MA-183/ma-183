## 2.10

> [!abstract] 1
> Finn det ubestemte integralet:
> $$
> \int 5 dx.
> $$

> [!note]- Løsning
> Integralet av en konstant $c$ er $cx$, så:
> $$
> \int 5 dx = 5x + C.
> $$

---

> [!abstract] 2
> Finn det ubestemte integralet:
> $$
> \int x^2 dx.
> $$

> [!note]- Løsning
> Vi bruker potensregelen for integrasjon:
> $$
> \int x^2 dx = \frac{x^3}{3} + C.
> $$

---

> [!abstract] 3
> Finn det ubestemte integralet:
> $$
> \int \sqrt{x} dx.
> $$

> [!note]- Løsning
> Skriv $\sqrt{x}$ som $x^{1/2}$ og bruk potensregelen:
> $$
> \int x^{1/2} dx = \frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2} + C.
> $$

---


> [!abstract] 4
> Finn det ubestemte integralet:
> $$
> \int x^{12} dx.
> $$

> [!note]- Løsning
> Vi bruker potensregelen:
> $$
> \int x^{12} dx = \frac{x^{13}}{13} + C.
> $$

---

> [!abstract] 5
> Finn det ubestemte integralet:
> $$
> \int x^3 dx.
> $$

> [!note]- Løsning
> Vi bruker potensregelen:
> $$
> \int x^3 dx = \frac{x^4}{4} + C.
> $$

---

> [!abstract] 6
> Finn det ubestemte integralet:
> $$
> \int (x + \cos (x)) dx.
> $$

> [!note]- Løsning
> Vi integrerer hver del separat:
> $$
> \int (x + \cos x) dx = \int x dx + \int \cos x dx = \frac{x^2}{2} + \sin x + C.
> $$

---

> [!abstract] 7
> Finn det ubestemte integralet:
> $$
> \int \tan (x) \cos (x) dx.
> $$

> [!note]- Løsning
> Vi skriver $\tan( x) \cos (x)$ om til $\sin (x)$ ved å bruke identiteten $\tan (x) = \frac{\sin (x)}{\cos (x)}$:
> $$
> \int \tan (x) \cos (x) dx = \int \sin (x) dx = -\cos (x )+ C.
> $$

---

> [!abstract] 8
> Finn det ubestemte integralet:
> $$
> \int \frac{1 + \cos^3( x)}{\cos^2 (x)} dx.
> $$

> [!note]- Løsning
> Vi deler opp brøken:
> $$
> \int \left( \frac{1}{\cos^2 (x)} + \frac{\cos^3 (x)}{\cos^2 (x)} \right) dx = \int \frac{1}{\cos^2(x)} dx + \int \cos (x) dx.
> $$
> Vi vet at $\int \frac{1}{\cos^2(x)}  dx = \tan (x)$ og $\int \cos(x) dx = \sin(x)$, så:
> $$
> \tan (x) + \sin (x) + C.
> $$

---


> [!abstract] 9
> Finn det ubestemte integralet:
> $$
> \int (a^2 - x^2) dx.
> $$

> [!note]- Løsning
> Vi bruker potensregelen for hvert ledd:
> $$
> \int (a^2 - x^2) dx = a^2 x - \frac{x^3}{3} + C.
> $$

---

> [!abstract] 10
> Finn det ubestemte integralet:
> $$
> \int (A + Bx + Cx^2) dx.
> $$

> [!note]- Løsning
> Vi integrerer hvert ledd separat:
> $$
> \int A dx + \int Bx dx + \int Cx^2 dx = Ax + \frac{Bx^2}{2} + \frac{Cx^3}{3} + C.
> $$

---

> [!abstract] 11
> Finn det ubestemte integralet:
> $$
> \int \left( 2x^{1/2} + 3x^{1/3} \right) dx.
> $$

> [!note]- Løsning
> Vi bruker potensregelen:
> $$
> \int 2x^{1/2} dx = \frac{2x^{3/2}}{3/2} = \frac{4x^{3/2}}{3}, \quad \int 3x^{1/3} dx = \frac{3x^{4/3}}{4/3} = \frac{9x^{4/3}}{4}.
> $$
> Så:
> $$
> \frac{4x^{3/2}}{3} + \frac{9x^{4/3}}{4} + C.
> $$

---

> [!abstract] 12
> Finn det ubestemte integralet:
> $$
> \int \frac{6(x - 1)}{x^{4/3}} dx.
> $$

> [!note]- Løsning
> Vi deler opp brøken:
> $$
> \int \frac{6x}{x^{4/3}} dx - \int \frac{6}{x^{4/3}} dx = 6 \int x^{-1/3} dx - 6 \int x^{-4/3} dx.
> $$
> Vi integrerer hvert ledd:
> $$
> 6 \cdot \frac{x^{2/3}}{2/3} - 6 \cdot \frac{x^{-1/3}}{-1/3} = 9x^{2/3} + 18x^{-1/3} + C.
> $$

---

> [!abstract] 13
> Finn det ubestemte integralet:
> $$
> \int \left( \frac{x^3}{3} - \frac{x^2}{2} + x - 1 \right) dx.
> $$

> [!note]- Løsning
> Vi integrerer hvert ledd separat:
> $$
> \int \frac{x^3}{3} dx = \frac{x^4}{12}, \quad \int \frac{x^2}{2} dx = \frac{x^3}{6}, \quad \int x dx = \frac{x^2}{2}, \quad \int -1 dx = -x.
> $$
> Så:
> $$
> \frac{x^4}{12} - \frac{x^3}{6} + \frac{x^2}{2} - x + C.
> $$

---

> [!abstract] 14
> Finn det ubestemte integralet:
> $$
> \int 105 (1 + t^2 + t^4 + t^6) dt.
> $$

> [!note]- Løsning
> Vi integrerer hvert ledd separat:
> $$
> \begin{aligned} 
> & 105 \left( \int dt + \int t^2 dt + \int t^4 dt + \int t^6 dt \right) \\ = & 105 \left( t + \frac{t^3}{3} + \frac{t^5}{5} + \frac{t^7}{7} \right) + C.
> \end{aligned} 
> $$


> [!abstract] 19
> Finn det ubestemte integralet:
> $$
> \int \sqrt{2x + 3} dx.
> $$

> [!note]- Løsning
> Siden $\sqrt{x}$ har en antiderivert som ligner på $x^{3/2}$, kan vi gjette at $\sqrt{2x + 3}$ har en antiderivert som ligner på $(2x + 3)^{3/2}$. 
> 
> La oss prøve $(2x + 3)^{3/2}$ som en antiderivert, og derivere for å sjekke:
> $$
> \frac{d}{dx} \left((2x + 3)^{3/2} \right) =  \frac{3}{2} (2x + 3)^{1/2} \cdot 2 = 3(2x + 3)^{1/2}.
> $$
> 
> Vi ser at det gir $6\sqrt{2x + 3}$, men vi trenger bare $\sqrt{2x + 3}$. Derfor må vi justere vår gjetning med en faktor $\frac{1}{3}$:
> $$
> \frac{1}{3} \cdot (2x + 3)^{3/2} = \frac{(2x + 3)^{3/2}}{3}.
> $$
> Antideriverten er dermed:
> $$
> \frac{(2x + 3)^{3/2}}{3} + C.
> $$

---

> [!abstract] 20
> Finn det ubestemte integralet:
> $$
> \int \frac{4}{\sqrt{x + 1}} dx.
> $$

> [!note]- Løsning
> Vi ser at $\frac{1}{\sqrt{x}}$ har en antiderivert som minner om $2\sqrt{x}$. Det får oss til å gjette at en antiderivert av $\frac{4}{\sqrt{x + 1}}$ kanskje har formen $8\sqrt{x + 1}$.
> 
> La oss sjekke:
> $$
> \frac{d}{dx} \left( 8\sqrt{x + 1} \right) = 8 \cdot \frac{1}{2} (x + 1)^{-1/2} = \frac{4}{\sqrt{x + 1}}.
> $$
> 
> Gjetningen stemmer, så vi kan skrive:
> $$
> \int \frac{4}{\sqrt{x + 1}} dx = 8\sqrt{x + 1} + C.
> $$

---

> [!abstract] 21
> Finn det ubestemte integralet:
> $$
> \int 2x \sin(x^2) dx.
> $$

> [!note]- Løsning
> Med litt erfaring fra derivasjon er det naturlig å tenke at hvis vi skal ende opp med $\sin(x^2)$ så må $\cos(x^2)$ være involvert i den antideriverte. 
> 
> La oss sjekke ved å derivere:
> $$
> \frac{d}{dx} \left( \cos(x^2) \right) = -\sin(x^2) \cdot 2x.
> $$
> 
> Det stemmer bare med motsatt fortegn, så:
> $$
> \int 2x \sin(x^2) dx = -\cos(x^2) + C.
> $$

---

> [!abstract] 22
> Finn det ubestemte integralet:
> $$
> \int \frac{2x}{\sqrt{x^2 + 1}} dx.
> $$

> [!note]- Løsning
> Vi gjetter at en antiderivert kan ha formen $2\sqrt{x^2 + 1}$, fordi $\sqrt{x^2 + 1}$ minner om $\sqrt{x}$ som vi vet har antiderivert $\frac{2x^{3/2}}{3}$.
> 
> La oss sjekke ved å derivere:
> $$
> \frac{d}{dx} \left( 2\sqrt{x^2 + 1} \right) = 2 \cdot \frac{1}{2} \cdot \frac{2x}{\sqrt{x^2 + 1}} = \frac{2x}{\sqrt{x^2 + 1}}.
> $$
> 
> Det stemmer perfekt, så vi kan skrive:
> $$
> \int \frac{2x}{\sqrt{x^2 + 1}} dx = 2\sqrt{x^2 + 1} + C.
> $$

> [!abstract] Middelverditeoremet
> Funksjonen $f(x) = \sqrt{x}$ oppfyller betingelsene i middelverditeoremet på intervallet $[0,b]$. Se på sekanten gjennom $(0,0)$ og $(b,\sqrt{b})$. Hvor, i intervallet $(0,b)$, er tangenten til grafen parallell med sekanten?


> [!abstract] Tenkeoppgave
> Hvor mange prosent øker volumet av en kule med dersom radiusen øker med $2\%$?


## 5.6


> [!abstract] 1
> Evaluer det ubestemte integralet:
> $$
> \int e^{5 - 2x} dx.
> $$

> [!note]- Løsning
> Vi ser at hvis vi lar ${\color{#e796f5} u = 5 - 2x}$, får vi at ${\color{#f46f22} du = -2 dx}$ eller ${\color{#f46f22} dx = -\frac{1}{2} du}$.
> 
> Integralene blir da:
> $$
> \int e^{5 - 2x} dx = \int e^{\color{#e796f5} u} \left(-\frac{1}{2} {\color{#f46f22} du}\right) = -\frac{1}{2} \int e^{\color{#e796f5} u} {\color{#f46f22} du}.
> $$
> 
> Vi får:
> $$
> -\frac{1}{2} e^{\color{#e796f5} u} + C = -\frac{1}{2} e^{5 - 2x} + C.
> $$

---

> [!abstract] 2
> Evaluer det ubestemte integralet:
> $$
> \int \cos(a x + b) dx.
> $$

> [!note]- Løsning
> La oss bruke substitusjonen ${\color{#e796f5} u = a x + b}$, som gir ${\color{#f46f22} du = a dx}$ eller ${\color{#f46f22} dx = \frac{1}{a} du}$.
> 
> Integralene blir:
> $$
> \int \cos({\color{#e796f5} u}) \cdot \frac{1}{a} {\color{#f46f22} du} = \frac{1}{a} \int \cos({\color{#e796f5} u}) {\color{#f46f22} du}.
> $$
> 
> Dette gir:
> $$
> \frac{1}{a} \sin({\color{#e796f5} u}) + C = \frac{1}{a} \sin(a x + b) + C.
> $$

---

> [!abstract] 3
> Evaluer det ubestemte integralet:
> $$
> \int \sqrt{3x + 4} dx.
> $$

> [!note]- Løsning
> La oss prøve substitusjonen ${\color{#e796f5} u = 3x + 4}$. Da får vi ${\color{#f46f22} du = 3 dx}$, eller ${\color{#f46f22} dx = \frac{1}{3} du}$.
> 
> Vi kan omskrive integralet som:
> $$
> \int \sqrt{\color{#e796f5} u} \cdot \frac{1}{3} {\color{#f46f22} du} = \frac{1}{3} \int u^{1/2} {\color{#f46f22} du}.
> $$
> 
> Vi integrerer:
> $$
> \frac{1}{3} \cdot \frac{u^{3/2}}{3/2} = \frac{2}{9} (3x + 4)^{3/2} + C.
> $$

---

> [!abstract] 4
> Evaluer det ubestemte integralet:
> $$
> \int e^{2x} \sin(e^{2x}) dx.
> $$

> [!note]- Løsning
> Vi kan prøve substitusjonen ${\color{#e796f5} u = e^{2x}}$, som gir ${\color{#f46f22} du = 2e^{2x} dx}$ eller ${\color{#f46f22} dx = \frac{1}{2e^{2x}} du}$.
> 
> Integralene kan skrives som:
> $$
> \int \sin({\color{#e796f5} u}) \cdot \frac{1}{2} {\color{#f46f22} du} = \frac{1}{2} \int \sin({\color{#e796f5} u}) {\color{#f46f22} du}.
> $$
> 
> Vi får:
> $$
> -\frac{1}{2} \cos({\color{#e796f5} u}) + C = -\frac{1}{2} \cos(e^{2x}) + C.
> $$


---

> [!abstract] 5
> Evaluer det ubestemte integralet:
> $$
> \int \frac{x dx}{(4x^2 + 1)^5}.
> $$

> [!note]- Løsning
> La ${\color{#e796f5} u = 4x^2 + 1}$. Da får vi ${\color{#f46f22} du = 8x dx}$, eller ${\color{#f46f22} \frac{1}{8} du = x dx}$.
> 
> Integralene blir:
> $$
> \int \frac{{\color{#f46f22} x dx }}{({\color{#e796f5} 4x^2 + 1 })^5} = \int \frac{ {\color{#f46f22}\frac{1}{8} du}}{\color{#e796f5} u^5} = \frac{1}{8} \int u^{-5} {\color{#f46f22} du}.
> $$
> 
> Vi integrerer:
> $$
> \frac{1}{8} \cdot \frac{u^{-4}}{-4} = -\frac{1}{32} (4x^2 + 1)^{-4} + C.
> $$

---

> [!abstract] 6
> Evaluer det ubestemte integralet:
> $$
> \int \frac{\sin (\sqrt{x})}{\sqrt{x}} dx.
> $$

> [!note]- Løsning
> Vi bruker substitusjonen ${\color{#e796f5} u = \sqrt{x}}$, som gir ${\color{#f46f22} du = \frac{1}{2\sqrt{x}} dx}$ eller ${\color{#f46f22} dx = 2u du}$.
> 
> Integralene blir:
> $$
> \int \frac{\sin {\color{#e796f5} \sqrt{x} }}{{\color{#e796f5} \sqrt{x} }} {\color{#f46f22} dx } = \int \frac{\sin{\color{#e796f5} u}}{\color{#e796f5}\cancel{  u }} \cdot {\color{#f46f22}2\cancel{ u }  du} = 2 \int \sin{\color{#e796f5} u} {\color{#f46f22} du}.
> $$
> 
> Vi integrerer:
> $$
> -2 \cos{\color{#e796f5} u} + C = -2 \cos{\sqrt{x}} + C.
> $$

---

> [!abstract] 7
> Evaluer det ubestemte integralet:
> $$
> \int x e^{x^2} dx.
> $$

> [!note]- Løsning
> La ${\color{#e796f5} u = x^2}$, som gir ${\color{#f46f22} du = 2x dx}$ eller ${\color{#f46f22} \frac{1}{2} du = x dx}$.
> 
> Integralene blir:
> $$
> \int {\color{#f46f22} x } e^{{\color{#e796f5} x^2 }} {\color{#f46f22} dx } = \frac{1}{2} \int e^{\color{#e796f5} u} {\color{#f46f22} du}.
> $$
> 
> Vi integrerer:
> $$
> \frac{1}{2} e^{\color{#e796f5} u} + C = \frac{1}{2} e^{x^2} + C.
> $$

---
> [!abstract] Integral med substitusjon
> Evaluer det ubestemte integralet:
> $$
> \int x^2 e^{x^3 + 1} dx.
> $$

> [!note]- Løsning
> Vi starter med substitusjonen ${\color{#e796f5} u = x^3 + 1}$. Da får vi at ${\color{#f46f22} du = 3x^2 dx}$, eller ${\color{#f46f22} \frac{1}{3} du = x^2 dx}$.
> 
> Nå kan vi skrive om integralet:
> $$
> \int x^2 e^{x^3 + 1} dx = \int e^{x^3 + 1} \cdot x^2 dx.
> $$
> Substitusjonen gir:
> $$
> \int x^{x^3 + 1} \cdot {\color{#f46f22} \frac{1}{3} du} = \frac{1}{3} \int e^{\color{#e796f5} u} {\color{#f46f22} du}.
> $$
> Vi kan nå integrere direkte:
> $$
> \frac{e^{\color{#e796f5} u}}{3} + C.
> $$
> Ved tilbake-substitusjon av ${\color{#e796f5} u = x^3 + 1}$ får vi:
> $$
> \frac{e^{x^3 + 1}}{3} + C.
> $$


> [!abstract] 9
> Evaluer det ubestemte integralet:
> $$
> \int \frac{\cos (x)}{4 + \sin^2 (x)} dx.
> $$

> [!note]- Løsning
> Vi kan bruke substitusjonen ${\color{#e796f5} u = \sin (x)}$, som gir ${\color{#f46f22} du = \cos (x)dx}$.
> 
> Dette gjør at integralet blir:
> $$
> \int \frac{{\color{#f46f22} \cos (x) }}{4 + {\color{#e796f5} \sin }^2{\color{#e796f5} (x) }}{\color{#f46f22}  dx } = \int \frac{\color{#f46f22} du}{4 + {\color{#e796f5} u^2}}.
> $$
> 
> Vi kjenner igjen dette som en standardform for integralet av en funksjon som gir arcustangens:
> $$
> \int \frac{1}{a^2 + u^2} du = \frac{1}{a} \tan^{-1} \left( \frac{u}{a} \right).
> $$
> Her er $a = 2$, så vi får:
> $$
> \frac{1}{2} \tan^{-1} \left( \frac{{\color{#e796f5} u}}{2} \right) + C.
> $$
> Ved å tilbake-substituere ${\color{#e796f5} u = \sin x}$, får vi:
> $$
> \frac{1}{2} \tan^{-1} \left( \frac{\sin x}{2} \right) + C.
> $$


> [!abstract] 12
> Evaluer det ubestemte integralet:
> $$
> \int \frac{\ln t}{t} dt.
> $$

> [!note]- Løsning
> La oss prøve substitusjonen ${\color{#e796f5} u = \ln t}$. Da får vi ${\color{#f46f22} du = \frac{1}{t} dt}$, som betyr at ${\color{#f46f22} t dt}$ erstattes av ${\color{#f46f22} du}$.
> 
> Integralene kan skrives som:
> $$
> \int {\color{#e796f5} u} {\color{#f46f22} du}.
> $$
> Dette er et enkelt polynomisk integral, og vi får:
> $$
> \frac{{\color{#e796f5} u}^2}{2} + C = \frac{(\ln t)^2}{2} + C.
> $$ 

---


> [!abstract] 46

## 5.7

## Løsningsforslag

> [!abstract] 1
> Finn arealet mellom kurvene:
> $$
> y = x, \quad y = x^2.
> $$

> [!note]- Løsning
> Vi finner skjæringspunktene ved å sette $x = x^2$:
> $$
> x^2 - x = 0 \Rightarrow x(x - 1) = 0.
> $$
> Dette gir oss $x = 0$ og $x = 1$. Vi integrerer fra $x = 0$ til $x = 1$:
> $$
> \text{Areal} = \int_0^1 (x - x^2) \, dx.
> $$
> Beregning av integralet:
> $$
> = \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}.
> $$
> Arealet mellom kurvene er $\frac{1}{6}$.

> [!abstract] 2
> Finn arealet mellom kurvene:
> $$
> y = \sqrt{x}, \quad y = x^2.
> $$


> [!note]- Løsning
> Vi vet at $\sqrt{x}$ er definert for $x\geq0$ og der er funksjonene like. De skjærer også hverandre i $x=1$. 
> 
> Det gir oss at vi må finne arealet mellom kurvene og $x = 0$ og $x = 1$. Vi integrerer fra $x = 0$ til $x = 1$:
> $$
> \text{Areal} = \int_0^1 (\sqrt{x} - x^2) \, dx.
> $$
> Beregning av integralet:
> $$
> = \int_0^1 (x^{1/2} - x^2) \, dx = \left[ \frac{2}{3}x^{3/2} - \frac{x^3}{3} \right]_0^1 = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}.
> $$
> Arealet mellom kurvene er $\frac{1}{3}$.

> [!abstract] 3
> Finn arealet mellom kurvene:
> $$
> y = x^2 - 5, \quad y = 3 - x^2.
> $$

> [!note]- Løsning
> Vi finner skjæringspunktene ved å sette $x^2 - 5 = 3 - x^2$:
> $$
> 2x^2 = 8 \Rightarrow x^2 = 4 \Rightarrow x = \pm 2.
> $$
> Vi integrerer fra $x = -2$ til $x = 2$:
> $$
> \text{Areal} = \int_{-2}^2 \left[(3 - x^2) - (x^2 - 5)\right] dx.
> $$
> Forenkler integranden:
> $$
> = \int_{-2}^2 (8 - 2x^2) \, dx = 2 \int_0^2 (8 - 2x^2) \, dx.
> $$
> Beregning av integralet:
> $$
> = 2 \left[ 8x - \frac{2x^3}{3} \right]_0^2 = 2 \left( 16 - \frac{16}{3} \right) = 2 \cdot \frac{32}{3} = \frac{64}{3}.
> $$
> Arealet mellom kurvene er $\frac{64}{3}$.

> [!abstract] 4
> Finn arealet mellom kurvene:
> $$
> y = x^2 - 2x, \quad y = 6x - x^2.
> $$


> [!note]- Løsning
> Vi finner skjæringspunktene ved å sette $x^2 - 2x = 6x - x^2$:
> $$
> 2x^2 - 8x = 0 \Rightarrow 2x(x - 4) = 0.
> $$
> Dette gir oss $x = 0$ og $x = 4$. Vi integrerer fra $x = 0$ til $x = 4$:
> $$
> \text{Areal} = \int_0^4 \left[(6x - x^2) - (x^2 - 2x)\right] dx.
> $$
> Forenkler integranden:
> $$
> = \int_0^4 (8x - 2x^2) \, dx.
> $$
> Beregning av integralet:
> $$
> = \left[ 4x^2 - \frac{2x^3}{3} \right]_0^4 = \left( 4 \cdot 16 - \frac{2 \cdot 64}{3} \right) = 64 - \frac{128}{3} = \frac{64}{3}.
> $$
> Arealet mellom kurvene er $\frac{64}{3}$.

## 6.1
> [!abstract] 1  
> Beregn integralet:
> $$
> \int x \cos (x) \, dx
> $$

> [!note]- Løsning  
> La $u = x$ og $dv = \cos x \, dx$.
> Da er $du = dx$ og $v = \sin x$.
> 
> Bruk formelen for delvis integrasjon:
> $$
> \int u \, dv = uv - \int v \, du.
> $$
> Vi får:
> $$
> \int x \cos x \, dx = x \sin x - \int \sin x \, dx.
> $$
> Dette gir:
> $$
> = x \sin x + \cos x + C.
> $$
> **Svar:** $\int x \cos x \, dx = {x \sin x + \cos x + C}$.


> [!abstract] 2 
> Beregn integralet:
> $$
> \int (x + 3)e^{2x} \, dx
> $$

> [!note]- Løsning  
> **Løsning ved delvis integrasjon:**
> Skriv integralet som:
> $$
> \int x e^{2x} \, dx + \int 3 e^{2x} \, dx.
> $$
> For $\int x e^{2x} \, dx$, la $u = x$ og $\frac{dv}{dx} = e^{2x}$, som gir $du = dx$ og $v = \frac{e^{2x}}{2}$.
> 
> Da får vi:
> $$
> \int x e^{2x} \, dx = \frac{x e^{2x}}{2} - \int \frac{e^{2x}}{2} \, dx.
> $$
> Dette gir:
> $$
> = \frac{x e^{2x}}{2} - \frac{e^{2x}}{4}.
> $$
> Nå kan vi løse $\int 3 e^{2x} \, dx$ direkte:
> $$
> = \frac{3 e^{2x}}{2}.
> $$
> Derfor er:
> $$
> \int (x + 3) e^{2x} \, dx = {\frac{x e^{2x}}{2} - \frac{e^{2x}}{4} + \frac{3 e^{2x}}{2} + C}.
> $$


> [!abstract] 3  
> 
> Beregn integralet:
> $$
> \int x^2 \cos (\pi x) \, dx
> $$

> [!note]- Løsning  
>


> [!abstract] 4  
> Beregn integralet:
> $$
> \int (x^2 - 2x)e^{kx} \, dx
> $$

> [!note]- Løsning  


> [!abstract] 5  
> Beregn integralet:
> $$
> \int x^3 \ln (x) \, dx
> $$

> [!note]- Løsning  


> [!abstract] 6  
> Beregn integralet:
> $$
> \int x (\ln (x))^3 \, dx
> $$

> [!note]- Løsning  
>



> [!abstract] 13

> [!abstract] 14

> [!abstract] 20


> [!abstract] 22

