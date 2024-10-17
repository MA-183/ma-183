---
draft: "true"
---
> [!tip] Analysens fundamentalteorem, AFT
> Anta at funksjonen $f$ er kontinuerlig på et interval $I$ som inneholder punktet $a$.
>  
> **Del 1**
> La funksjonen $F$ være definert på $I$ ved at
> $$\begin{aligned} F(x) = \int_{a }^{x } f(t)dt.  \end{aligned}$$
> Da er $F$ deriverbar på $I$ og $F'(x) = f(x)$. Dermed er $F$ en antiderivert til $f$ på $I$:
> $$\begin{aligned} \frac{d}{dx} \int_{a }^{x } f(t)dt = f(x) . \end{aligned}$$ 
> 
> **Del 2**
> Hvis $G(x)$ er en *hvilken som helst* antiderivert til $f(x)$ på $I$, slik at $G'(x) = f(x)$ på $I$, da har vi for alle $b$ i $I$ at
> $$\begin{aligned} \int_{a }^{b } f(x)dx = G(b)-G(a) . \end{aligned}$$ 

> [!note]+ Argument 
> **Del 1**
> Vi skal avgjøre hva $F'(x)$ er, gitt at $F(x)=\int_{a}^{x}f(t)dt$. Ved å bruke definisjonen av den [[Kapittel 2 - derivasjon/defogteo/✍️ Derivasjon i et punkt|deriverte]] får vi
> $$
> \begin{aligned} 
> F'(x) &= \lim_{h\longrightarrow  0} \frac{F(x+h)-F(x)}{h} \\ 
> &= \lim_{h\longrightarrow  0} \frac{1}{h}\left( \int_{a}^{x+h}f(t)dt-\int_{a}^{x} f(t)dt \right) \\ & = \lim_{h\longrightarrow  0} \frac{1}{h}\left(\cancel{ \int_{a}^{x}f(t)dt } + \int_{x}^{x+h}f(t)dt - \cancel{ \int_{a}^{x}f(t)dt }\right) \\ 
> & = {\color{#e796f5} \lim_{h\longrightarrow  0}\frac{1}{h}\int_{x}^{x+h}f(t)dt } \\ &= {\color{#f46f22} \lim_{h}f(c_h) }  \\
> &= f(x). 
> \end{aligned} 
> $$
> Merk at ${\color{#e796f5} \frac{1}{h}\int_{x}^{x+h}f(t)dt }$ er gjennomsnittsverdien til $f$ på $[x,x+h]$. Vi vet at for hver $h$ finnes en $c_h$ der ${\color{#f46f22} f(c_h) }$ er lik [[Kapittel 5 - integrasjon/defogteo/Teo Gjennomsnittsverdien til en funksjon|gjennomsnittsverdien]]. Siden $h$ går mot $x$ og $c_h$ alltid er nærmere $x$ en $h$ er, så må $c_h$ også gå mot $x$ som gir oss den siste likheten.
> **Del 2**
> Vi kan fort konkludere med at dette er sant fra ved å legge merke til at hvis $G(x)$ er en hvilken som helst antiderivert, altså at $G'(x) = f(x)$, så vil $\frac{d}{dx}(F(x)-G(x)) = 0$. Fra [[Kapittel 2 - derivasjon/defogteo/💡 Konstante funksjoner|teoremet om konstante funksjoner]] betyr det at $G(x)= F(x)+C$ for en konstant $C$. Dermed er 
> $$
> G(b)-G(a)=F(b)-C-(F(a)-C) = F(b)-F(a)=\int_{a}^{b}f(t)dt,
> $$
> og vi er i mål.

