---
{}
---

Faktorer og røtter: Vi vet at andregradsfunksjoner ser slik ut, $ax^2 + bx+c$, der $a\neq 0$.

*Spørsmål*: Kan vi nå finne røttene til andregradsfunksjoner?

La oss først se på et konkret eksempel, $x^2 -5x +6$. 
![](/Files/shapes%20at%2024-07-17%2013.04.20.svg)

Altså er røttene $x_0 = \frac{5}{2}+\frac{1}{2}=3$, eller $x_1 = \frac{5}{2} -\frac{1}{2} = 2$.

Denne teknikken med å fullføre kvadratet kan vi enkelt gjøre generelt, for å finne formel.
Det vil si
$$
\begin{aligned} 
  ax^2 + bc + x &= 0\quad\quad\quad\quad  &&|:a  \\ x^2+\frac{b}{a}x + \frac{c}{a} & = 0 &&\text{Fullfør kvadrat} \\ \underbrace{ x^2+2\cdot \frac{b}{2a}x + \left( \frac{b}{2a} \right)^2  }_{ \text{fullstendig kvadrat*} }+\frac{c}{a} & = \left( \frac{b}{2a} \right)^2 \\ \left( x+\frac{b}{2a} \right)^2+\frac{c}{a} &=\frac{b^2}{4a^2} \\ \left( x+\frac{b}{2a} \right)^2 &= \frac{b^2}{4a^2}- \frac{c}{a} \\ {\left( x+\frac{b}{2a} \right)^2}  &= {\frac{b^2-4ac }{4a^2 } } &&\text{ Tar kvadratrot} \\ x+\frac{b}{2a} &= \pm\frac{\sqrt{b^2-4ac}}{2a} \\ x &= -\frac{b\pm\sqrt{b^2-4ac}}{2a}
\end{aligned} 
$$

\* Merk at vi her bruker at $\left( x+\frac{b}{2a} \right)^2 = x^2+2\cdot \frac{b}{2a}x + (\frac{b}{2a})^2$. Det er dette vi kaller å fullføre kvadratet, fordi vi har lagt til $\left( \frac{b}{2a} \right)^2$ for å få et fullstendig kvadrat. 



Det neste vi skal se på er [[Kapittel 0 - innledende kapittel/P.7.0 Trigonometri|trigonometriske funksjoner]]. Man burde også ha kontroll på [[Kapittel 0 - innledende kapittel/P.3.1 Forskyvning av grafer|forskyvning av grafer]].

