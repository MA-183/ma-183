---
title: "💡Resultat: Analysens fundamentalteorem"
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

> [!note]- Argument 
> **Del 1**
> Vi skal avgjøre hva $F'(x)$ er, gitt at $F(x)=\int_{a}^{x}f(t)dt$. Ved å bruke definisjonen av den [[Kapittel 2 - derivasjon/defogteo/Def Derivasjon i et punkt|deriverte]] får vi
> $$
> \begin{aligned} 
> F'(x) &= \lim_{h\longrightarrow  0} \frac{F(x+h)-F(x)}{h} \\ 
> &= \lim_{h\longrightarrow  0} \frac{1}{h}\left( \int_{a}^{x+h}f(t)dt-\int_{a}^{x} f(t)dt \right) \\ & = \lim_{h\longrightarrow  0} \frac{1}{h}\left(\cancel{ \int_{a}^{x}f(t)dt } + \int_{x}^{x+h}f(t)dt - \cancel{ \int_{a}^{x}f(t)dt }\right) \\ 
> & =  \lim_{h\longrightarrow  0}{\color{#e796f5} \frac{1}{h} }{\color{#3cc15c}\int_{x}^{x+h}f(t)dt }. 
> \end{aligned} 
> $$
> Ser vi på ${\color{#3cc15c}\int_{x}^{x+h}f(t)dt }$ kan vi se at hvis $l_h$ er minimumspunktet for $f$ på $[x,x+h]$ og $u_h$ er maksimumspunktet, så må
> ![[Files/shapes at 24-10-03 14.50.15.svg]]
> Deler vi på $h$ får vi 
> $$
> f(l_h) \leq{\color{#e796f5}  \frac{1}{h} }{\color{#3cc15c} \int_{x}^{x+h}f(t)dt } \leq f(u_h).
> $$
> Arealet skvises altså mellom disse to verdiene, og siden $x <l_h< x+h$ når så må $l_h\longrightarrow x$ når $h$ går mot $x$. Av kontinuitet må $f(l_h) \longrightarrow f(x)$ og tilsvarende må $f(u_u) \longrightarrow  f(x)$ når $h \longrightarrow 0$. Fra [[Kapittel 1 - grenser og kontinuitet/defogteo/Teo Skviseteoremet|skviseteoremet]] får vi derfor at 
> $$
> F'(x) = f(x).
> $$
> Merk at vi antok at $h$ var positiv i argumentet om $x < l_h < x+h$. Dersom $h$ er negativ får vi samme konklusjon hvis $h$ er negativ, bare at $x+h < l_h < x$.
> 
> **Del 2**
> Vi kan fort konkludere med at dette er sant fra ved å legge merke til at hvis $G(x)$ er en hvilken som helst antiderivert, altså at $G'(x) = f(x)$, så vil $\frac{d}{dx}(F(x)-G(x)) = 0$. Fra [[Kapittel 2 - derivasjon/defogteo/Teo Konstante funksjoner|teoremet om konstante funksjoner]] betyr det at $G(x)= F(x)+C$ for en konstant $C$. Dermed er 
> $$
> G(b)-G(a)=F(b)-C-(F(a)-C) = F(b)-F(a)=\int_{a}^{b}f(t)dt,
> $$
> og vi er i mål.

