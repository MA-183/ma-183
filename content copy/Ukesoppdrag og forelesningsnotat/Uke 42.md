## 5.1

> [!abstract] 1
> Regn ut summen 
> $$
> \sum_{i=1}^{4}i^3
> $$

> [!note]+ Løsning 
> Vi kan bare skrive ut og se at
> $$
> \sum_{i=1}^{4}i^3 = 1^3+2^3+3^3+4^3 = 1+8+27+64 = 100
> $$

> [!abstract] 3
> Utvid summen
> $$
> \sum_{i=1}^{n}3^i.
> $$

> [!note]+ Løsning 
> Skriver vi dette på utvidet form får vi
> $$
> \sum_{i=1}^{n}3^i= 3^1+3^2 + 3^3 + \ldots + 3^{n-1}+ 3^n.
> $$

> [!abstract] 4
> Utvid summen
> $$
> \sum_{i=0}^{n-1} \frac{(-1)^i}{i+1}.
> $$

> [!note]+ Løsning 
>Skriver vi dette på utvidet form får vi
>$$
> \sum_{i=0}^{n-1} \frac{(-1)^i}{i+1} = \frac{(-1)^0}{0+1}+\frac{(-1)^1}{1+1}+\frac{(-1)^2}{2+1}+\ldots + \frac{(-1)^{n-1}}{n-1+1}.
> $$



## 5.3

> [!abstract] 2
> La $f(x) = x^2$ være definert på $[0,4]$. Ved å lage en partisjon $P_n$ av $[0,4]$ i $n$ like store deler avgjør hva nedre og øvre Riemannsumm $L(f,P_n)$ og $U(f,P_n)$


> [!note]+ Løsning
> La $P_n$ være en partisjon av $[0,4]$ i $n$ like store intervaller. Hvert intervall vil ha bredde $\Delta x = \frac{4}{n}$. Funksjonen $f(x) = x^2$ er voksende, så den nedre Riemannsummen vil bruke funksjonsverdiene i starten av hvert delintervall, mens den øvre Riemannsummen vil bruke funksjonsverdiene i slutten av hvert delintervall.
> 
> Nedre Riemannsummen er:
> $$
> L(f,P_n) = \sum_{i=1}^{n} f\left( x_{i-1} \right) \Delta x = \sum_{i=1}^{n} \left( \frac{4(i-1)}{n} \right)^2 \cdot \frac{4}{n}.
> $$
> 
> Øvre Riemannsummen er:
> $$
> U(f,P_n) = \sum_{i=1}^{n} f\left( x_i \right) \Delta x = \sum_{i=1}^{n} \left( \frac{4i}{n} \right)^2 \cdot \frac{4}{n}.
> $$
> 
> Etter å ha regnet ut summene, finner vi at begge summene konvergerer mot integralet:
> $$
> \int_0^4 x^2 dx = \left[ \frac{x^3}{3} \right]_0^4 = \frac{64}{3}.
> $$

## 5.4

> [!abstract] 1
> Forenkle 
> $$
> \int_{a}^{b} f(x)dx+\int_{b}^{c}f(x)dx+\int_{c}^{a}f(x)dx.
> $$

> [!note]+ Løsning 
> Vi kan forenkle dette til
> $$
> \begin{aligned} 
> & {\color{#e796f5} \int_{a}^{b} f(x)dx+\int_{b}^{c}f(x)dx }+{\color{#f46f22} \int_{c}^{a}f(x)dx } \\ = & {\color{#e796f5} \int_{a}^{c}f(x)dx } {\color{#f46f22} - \int_{a}^{c}f(x)dx } = 0
> \end{aligned} 
> $$


> [!abstract] 2
> Forenkle uttrykket
> $$
> \int_{0}^{2}3f(x)dx+\int_{1}^{3}3f(x)dx-\int_{0}^{3}2f(x)dx-\int_{1}^{2}3f(x)dx.
> $$

> [!note]+ Løsning
> Bruk additivitet og konstantfaktorregelen for integraler:
> $$
> 3\left( \int_0^2 f(x) dx + {\color{#e796f5} \int_1^3 f(x) dx - \int_1^2 f(x) dx  }\right) - 2 \int_0^3 f(x) dx.
> $$
> Ved å kombinere grensene og forenkle, får vi:
> $$
> \begin{aligned} 
>  & 3\left( \int_0^2 f(x) dx + {\color{#e796f5} \int_2^3 f(x) dx}\right) - 2 \int_0^3 f(x) dx \\ & 
> 3\int_0^3 f(x) dx - 2\int_0^3 f(x) dx = \int_0^3 f(x) dx.
> \end{aligned} 
> $$


> [!abstract] 27
> Finn gjennomsnittsverdien til $f(x)=x+2$ på intervallet $[0,4]$.


> [!note]+ Løsning
> Gjennomsnittsverdien av en funksjon på et intervall $[a, b]$ er gitt ved formelen:
> $$
> \frac{1}{b-a} \int_a^b f(x) dx.
> $$
> For $f(x) = x + 2$ på intervallet $[0, 4]$, har vi:
> $$
> \frac{1}{4-0} \int_0^4 (x + 2) dx = \frac{1}{4} \left( \frac{x^2}{2} + 2x \right) \bigg|_0^4 = \frac{1}{4} \left( \frac{16}{2} + 8 \right) = \frac{12}{4} = 3.
> $$

> [!abstract] 28
> Finn gjennomsnittsverdien til $h(x)=x+2$ på intervallet $[a,b]$.

> [!note]+ Løsning
> Gjennomsnittsverdien av $h(x)$ på intervallet $[a,b]$ er:
> $$
> \frac{1}{b-a} \int_a^b (x+2) dx = \frac{1}{b-a} \left( \frac{x^2}{2} + 2x \right) \bigg|_a^b.
> $$
> Dette gir:
> $$
> \frac{1}{b-a} \left( \frac{b^2}{2} + 2b - \frac{a^2}{2} - 2a \right).
> $$

> [!abstract] 29
> Finn gjennomsnittsverdien til $g(x)=1+\sin(x)$ på intervallet $[-\pi,\pi]$.

> [!note]+ Løsning
> Gjennomsnittsverdien av $g(x) = 1 + \sin(x)$ på intervallet $[-\pi, \pi]$ er:
> $$
> \frac{1}{\pi - (-\pi)} \int_{-\pi}^{\pi} \left( 1 + \sin(x) \right) dx = \frac{1}{2\pi} \left( \int_{-\pi}^{\pi} 1 dx + \int_{-\pi}^{\pi} \sin(x) dx \right).
> $$
> 
> Siden $\int_{-\pi}^{\pi} \sin(x) dx = 0$, forenkles uttrykket til:
> $$
> \frac{1}{2\pi} \left( \int_{-\pi}^{\pi} 1 dx \right) = \frac{1}{2\pi} \cdot 2\pi = 1.
> $$
> Gjennomsnittsverdien er $1$.

## 5.5

> [!abstract] 1
> Evaluer det bestemte integralet:
> $$
> \int_0^2 x^3 dx.
> $$

> [!note]+ Løsning
> Vi integrerer funksjonen $x^3$:
> $$
> \int x^3 dx = \frac{x^4}{4}.
> $$
> Evaluerer ved grensene $0$ og $2$:
> $$
> \left[ \frac{x^4}{4} \right]_0^2 = \frac{2^4}{4} - \frac{0^4}{4} = \frac{16}{4} = 4.
> $$



> [!abstract] 2
> Evaluer det bestemte integralet:
> $$
> \int_0^4 \sqrt{x} dx.
> $$

> [!note]+ Løsning
> Vi omskriver $\sqrt{x}$ som en potens av $x$: $\sqrt{x} = x^{1/2}$. Deretter integrerer vi:
> $$
> \int x^{1/2} dx = \frac{2}{3}x^{3/2}.
> $$
> Evaluerer ved grensene $0$ og $4$:
> $$
> \left[ \frac{2}{3}x^{3/2} \right]_0^4 = \frac{2}{3}(4^{3/2}) - \frac{2}{3}(0^{3/2}) = \frac{2}{3} \cdot 8 = \frac{16}{3}.
> $$


> [!abstract] 3
> Evaluer det bestemte integralet:
> $$
> \int_{1/2}^{1} \frac{1}{x^2} dx.
> $$

> [!note]+ Løsning
> Vi integrerer $\frac{1}{x^2}$:
> $$
> \int \frac{1}{x^2} dx = -\frac{1}{x}.
> $$
> Evaluerer ved grensene $\frac{1}{2}$ og $1$:
> $$
> \left[ -\frac{1}{x} \right]_{\frac{1}{2}}^1 = -\frac{1}{1} + \frac{1}{\frac{1}{2}} = -1 + 2 = 1.
> $$


> [!abstract] 4
> Evaluer det bestemte integralet:
> $$
> \int_{-2}^{-1} \left( \frac{1}{x^2} - \frac{1}{x^3} \right) dx.
> $$

> [!note]+ Løsning
> Vi integrerer funksjonen term for term:
> $$
> \int \left( \frac{1}{x^2} - \frac{1}{x^3} \right) dx = -\frac{1}{x} + \frac{1}{2x^2}.
> $$
> Evaluerer ved grensene $-2$ og $-1$:
> $$
> \left[ -\frac{1}{x} + \frac{1}{2x^2} \right]_{-2}^{-1} = \left( -(-1) + \frac{1}{2} \right) - \left( -\frac{1}{2} + \frac{1}{8} \right) = \frac{7}{8}.
> $$


> [!abstract] 5
> Evaluer det bestemte integralet:
> $$
> \int_{-1}^{2} \left( 3x^2 - 4x + 2 \right) dx.
> $$

> [!note]+ Løsning
> Vi integrerer funksjonen:
> $$
> \int \left( 3x^2 - 4x + 2 \right) dx = x^3 - 2x^2 + 2x.
> $$
> Evaluerer ved grensene $-1$ og $2$:
> $$
> \left[ x^3 - 2x^2 + 2x \right]_{-1}^{2} = \left( 8 - 8 + 4 \right) - \left( -1 - 2 - 2 \right) = 4 + 5 = 9.
> $$

> [!abstract] 6
> Evaluer det bestemte integralet:
> $$
> \int_{1}^{2} \left( \frac{2}{x^3} - \frac{x^3}{2} \right) dx.
> $$

> [!note]+ Løsning
> Vi integrerer funksjonen term for term:
> $$
> \int \left( \frac{2}{x^3} - \frac{x^3}{2} \right) dx = -\frac{1}{x^2} - \frac{x^4}{8}.
> $$
> Evaluerer ved grensene $1$ og $2$:
> $$
> \left[ -\frac{1}{x^2} - \frac{x^4}{8} \right]_1^2 = \left( -\frac{1}{4} - \frac{16}{8} \right) - \left( -1 - \frac{1}{8} \right) = -\frac{9}{8}.
> $$


> [!abstract] 7
> Evaluer det bestemte integralet:
> $$
> \int_{-2}^{2} \left( x^2 + 3 \right)^2 dx.
> $$

> [!note]+ Løsning
> Utvid $(x^2 + 3)^2$:
> $$
> (x^2 + 3)^2 = x^4 + 6x^2 + 9.
> $$
> Deretter integrerer vi term for term:
> $$
> \int \left( x^4 + 6x^2 + 9 \right) dx = \frac{x^5}{5} + 2x^3 + 9x.
> $$
> Evaluerer ved grensene $-2$ og $2$:
> $$
> \left[ \frac{x^5}{5} + 2x^3 + 9x \right]_{-2}^{2} = \left( \frac{32}{5} + 16 + 18 \right) - \left( \frac{-32}{5} - 16 - 18 \right) = \frac{404}{5}.
> $$


> [!abstract] 8
> Evaluer det bestemte integralet:
> $$
> \int_{4}^{9} \left( \sqrt{x} - \frac{1}{\sqrt{x}} \right) dx.
> $$

> [!note]+ Løsning
> Omskriv $\sqrt{x}$ som $x^{1/2}$ og $\frac{1}{\sqrt{x}}$ som $x^{-1/2}$. Deretter integrerer vi:
> $$
> \int \left( x^{1/2} - x^{-1/2} \right) dx = \frac{2}{3}x^{3/2} - 2x^{1/2}.
> $$
> Evaluerer ved grensene $4$ og $9$:
> $$
> \left[ \frac{2}{3}x^{3/2} - 2x^{1/2} \right]_4^9 = \left( \frac{2}{3} \cdot 27 - 6 \right) - \left( \frac{2}{3} \cdot 8 - 4 \right) = \frac{32}{3}.
> $$


> [!abstract] 9
> Evaluer det bestemte integralet:
> $$
> \int_{-\pi/4}^{-\pi/6} \cos(x) dx.
> $$

> [!note]+ Løsning
> Vi integrerer funksjonen $\cos(x)$:
> $$
> \int \cos(x) dx = \sin(x).
> $$
> Evaluerer ved grensene $-\frac{\pi}{4}$ og $-\frac{\pi}{6}$:
> $$
>  \sin(x) \bigg|_{-\frac{\pi}{4}}^{-\frac{\pi}{6}} = \sin\left(- \frac{\pi}{6} \right) - \sin\left( -\frac{\pi}{4} \right) = -\frac{1}{2} - \left( -\frac{\sqrt{2}}{2} \right) = -\frac{1}{2} + \frac{\sqrt{2}}{2}.
> $$



> [!abstract] 10
> Evaluer det bestemte integralet:
> $$
> \int_0^{\pi/3} \sec^2(\theta) d\theta.
> $$

> [!note]+ Løsning
> Vi vet at den deriverte av $\tan(\theta)$ er $\sec^2(\theta)$, så:
> $$
> \int \sec^2(\theta) d\theta = \tan(\theta).
> $$
> Evaluerer ved grensene $0$ og $\frac{\pi}{3}$:
> $$
>  \tan(\theta) \bigg|_0^{\frac{\pi}{3}} = \tan\left( \frac{\pi}{3} \right) - \tan(0) = \sqrt{3} - 0 = \sqrt{3}.
> $$



> [!abstract] 11
> Evaluer det bestemte integralet:
> $$
> \int_{\pi/4}^{\pi/3} \sin(\theta) d\theta.
> $$

> [!note]+ Løsning
> Vi integrerer funksjonen $\sin(\theta)$:
> $$
> \int \sin(\theta) d\theta = -\cos(\theta).
> $$
> Evaluerer ved grensene $\frac{\pi}{4}$ og $\frac{\pi}{3}$:
> $$
>  -\cos(\theta) \bigg|_{\frac{\pi}{4}}^{\frac{\pi}{3}} = -\cos\left( \frac{\pi}{3} \right) + \cos\left( \frac{\pi}{4} \right) = -\frac{1}{2} + \frac{\sqrt{2}}{2}.
> $$





> [!abstract] 12
> Evaluer det bestemte integralet:
> $$
> \int_0^{2\pi} (1 + \sin(u)) du.
> $$

> [!note]+ Løsning
> Vi integrerer funksjonen $1 + \sin(u)$:
> $$
> \int (1 + \sin(u)) du = u - \cos(u).
> $$
> Evaluerer ved grensene $0$ og $2\pi$:
> $$
>  (u - \cos(u) )\bigg|_0^{2\pi} = \left( 2\pi - \cos(2\pi) \right) - \left( 0 - \cos(0) \right) = 2\pi - 1 + 1 = 2\pi.
> $$



> [!abstract] 13
> Evaluer det bestemte integralet:
> $$
> \int_{-\pi}^{\pi} e^x dx.
> $$

> [!note]+ Løsning
> Vi integrerer funksjonen $e^x$:
> $$
> \int e^x dx = e^x.
> $$
> Evaluerer ved grensene $-\pi$ og $\pi$:
> $$
>  e^x \bigg|_{-\pi}^{\pi} = e^{\pi} - e^{-\pi} = e^{\pi} - \frac{1}{e^{\pi}}.
> $$



> [!abstract] 14
> Evaluer det bestemte integralet:
> $$
> \int_{-2}^{2} \left( e^x - e^{-x} \right) dx.
> $$

> [!note]+ Løsning
> Vi integrerer funksjonene $e^x$ og $e^{-x}$:
> $$
> \int e^x dx = e^x, \quad \int e^{-x} dx = -e^{-x}.
> $$
> Evaluerer ved grensene $-2$ og $2$:
> $$
> \left( e^x - (-e^{-x}) \right)\bigg|_{-2}^{2} = \left( e^2 + e^{-2} \right) - \left( e^{-2} + e^2 \right) = 0.
> $$




> [!abstract] 15
> Evaluer det bestemte integralet:
> $$
> \int_0^e a^x dx \quad (a > 0).
> $$

> [!note]+ Løsning
> Vi integrerer funksjonen $a^x$. Husk at den deriverte av $a^x$ er $\frac{a^x}{\ln(a)}$:
> $$
> \int a^x dx = \frac{a^x}{\ln(a)}.
> $$
> Evaluerer ved grensene $0$ og $e$:
> $$
> \left[ \frac{a^x}{\ln(a)} \right]_0^e = \frac{a^e}{\ln(a)} - \frac{a^0}{\ln(a)} = \frac{a^e - 1}{\ln(a)}.
> $$


> [!abstract] 16
> Evaluer det bestemte integralet:
> $$
> \int_{-1}^{1} 2^x dx.
> $$

> [!note]+ Løsning
> Vi integrerer funksjonen $2^x$:
> $$
> \int 2^x dx = \frac{2^x}{\ln(2)}.
> $$
> Evaluerer ved grensene $-1$ og $1$:
> $$
> \left[ \frac{2^x}{\ln(2)} \right]_{-1}^{1} = \frac{2^1}{\ln(2)} - \frac{2^{-1}}{\ln(2)} = \frac{2}{\ln(2)} - \frac{1}{2\ln(2)} = \frac{3}{2\ln(2)}.
> $$



> [!abstract] 17
> Evaluer det bestemte integralet:
> $$
> \int_{-1}^{1} \frac{dx}{1 + x^2}.
> $$

> [!note]+ Løsning
> Dette er et kjent integral som gir arcus tangens:
> $$
> \int \frac{dx}{1 + x^2} = \tan^{-1}(x).
> $$
> Evaluerer ved grensene $-1$ og $1$:
> $$
> \left[ \tan^{-1}(x) \right]_{-1}^{1} = \tan^{-1}(1) - \tan^{-1}(-1) = \frac{\pi}{4} - \left( -\frac{\pi}{4} \right) = \frac{\pi}{2}.
> $$



> [!abstract] 18
> Evaluer det bestemte integralet:
> $$
> \int_0^{1/2} \frac{dx}{\sqrt{1 - x^2}}.
> $$

> [!note]+ Løsning
> Dette er et kjent integral som gir arcus sinus:
> $$
> \int \frac{dx}{\sqrt{1 - x^2}} = \sin^{-1}(x).
> $$
> Evaluerer ved grensene $0$ og $\frac{1}{2}$:
> $$
> \left[ \sin^{-1}(x) \right]_0^{1/2} = \sin^{-1}\left( \frac{1}{2} \right) - \sin^{-1}(0) = \frac{\pi}{6}.
> $$