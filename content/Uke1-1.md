---
draft: "true"
---

# Funksjoner

Hva er en funksjon? Funksjoner er noe vi alle kjenner til, fra forskjellige kontekster.

Fra matematikken:
$$
\begin{align} 
  f(x) & = x -1 & \\
  g(x) & = x^2 \\
  y &= 3x^3 
\end{align} 
$$
Fra programmering:
```python
def f(x):
    return x-1
def g(x):
    return x*x
```

Fra situasjoner.
- Funksjonen $g$ beskriver (for positive verdier) arealet av et kvadrat med sidelengde $x$. Arealet er da $x\cdot x$.  

> **Definisjon**
>  En funksjon er en regel som tar noe inn og spytter noe ut (det som kommer ut må være entydig).
>
> Dersom vi har en funksjon $f$, 
> - sier vi at alt funksjonen kan ta inn skal kalles definisjonsmengden, og det noteres $D(f)$.
> - sier vi at alt funksjonen kan spytte ut skal kalles verdimengden, notert $V(f)$. Merk at boka bruker $R(f)$, rekkevidden til $f$.

> **Merk**
>  Definisjonsmengde er alltid størst mulig, om inne annet er sagt.
>  I kalkulus 1 jobber vi med reelle funksjoner, det vil si $D(f)$ er i $\mathbb R$ og $R(f)$ er i $\mathbb R$. 

## De fire regneartene

På samme måte som med tall, kan vi lage nye funksjoner. La $f$ og $g$ være to funksjoner. Da har vi at

> **Definisjon** (P.5.3)
>  1. $(f+g)(x) = f(x)+g(x)$.
>  2. $(f-g)(x) = f(x) - g(x)$
>  3. $(f\cdot g)(x) =f(x)\cdot g(x)$
>  4. $\left( \frac{f}{g} \right)(x)= \frac{f(x)}{g(x)}$, merk at $g(x)$ ikke kan være 0. Hvis $g(x) = 0$ så må vi gjøre noe med $D\left( \frac{f}{g} \right)$, det gjør vi enkelt ved å bare redusere definisjonsmengden til alle plasser der $g$ ikke er 0.
>

#### Eksempler

La $f(x) =x-1$ og $g(x) = x^2$. Merk at begge har samme definisjonsområde, altså at $D(f) = \mathbb{R} = D(g)$.

1. $(f+g)(x)=(x-1) + x^2 = x^2+x-1$.
2. $(f-g)(x) = (x-1)-x^2 = -x^2+x-1$.
3. $(f\cdot g)(x)=(x-1)x^2 =x^3-x^2$.
4. $\left( \frac{f}{g} \right)(x) =\frac{x-1}{x^2}$.

## Komposisjoner av funksjoner

Vi kan også lage en ny funksjon ved å sette de sammen.
$x \overset{-1}{\longrightarrow} x-1 \overset{(\ \ )^2}{\longrightarrow} (x-1)^2$

Hvis vi nå sier at $f(x) = x-1$ og $g(x) = x^2$, så gjør sammensettingen. 

$(g\ \circ \ f)( x) = g(f(x)) = g(x-1) =(x-1)^2$. 

> **Merk**
>  $f \ \circ \ g$ er ikke det samme som $g \ \circ \ f$.

$(g \ \circ \ f) (x) = (x-1)^2$
$(f \ \circ \ g)(x) = f(g(x)) = f(x^2) = x^2 - 1$. 

Ofte kan vi også tenke "baklengs" ved å dekomponere.

#### Eksempel

Hvis $h(x) = \sqrt{x+1}$. Kan tenke oss at vi "ser" to funksjoner. $f(x) = x+1, g(x) = \sqrt x$. Da ser vi at vi kan lese det som skjer slik

$$
x\overset{f}{\rightarrow} x+1 \overset{g}{\rightarrow} \sqrt{x+1}.
$$
Vi ser da at $h(x) = g(f(x)) = (g \ \circ \ f)(x)$.

Hvis $t(x) = \frac{1}{x-1} \longrightarrow F(x) = x-1, G(x) = \frac{1}{x}$. 
Da får vi 
$$
x\overset{F}{\rightarrow} x-1 \overset{G}{\rightarrow} \frac{1}{x-1}.
$$
Altså at $t(x) = G(F(x))$.
Hva er $D(h)$.? Vel $\sqrt x$, da har vi at $x$ må være større enn 0. For $\sqrt{x+1}$, så må $x+1\geq 0$. 
$$
\begin{align} 
  x+1 & \geq 0 \\
  x+1-1 & \geq 0 -1 \\
  x & \geq -1. 
\end{align} 
$$
Vi skriver $D(h) = [-1,\infty)$.

## Stykkvise funksjoner

Absoluttverdien til et tall er "den positive verdien" til tallet, eller tallets avstand fra $0$. 
$$
f(x) = |x| =\begin{cases}
x \quad \text{når } x\geq 0 \\ \\
x \quad \text{når } x <0 
\end{cases}
$$

Eks: 

<br><br> <br><br> <br><br> <br><br> <br><br> <br><br> <br> Eks: 
Fortegnsfunksjonen. Noen ganger trenger vi en funksjon som ser på et tall, og returnerer fortegnet til tallet, altså om det er positivt (+1) eller negativt (-1). Vi kaller denne funksjonen signum funksjonen. 
<br><br> <br><br> <br><br> <br><br> <br><br> 
$$
\text{sgn}(x) = \frac{x}{|x|} = \begin{cases}
1  &  & \text{ når}  &  x>0 \\ \\ -1  &  & \text{når}  &  x<0
\end{cases} 
$$
<br><br> <br><br>

## P6. Polynomer og rasjonale funksjoner

Polynomer kjenner vi til.
Eksempler er $x$, $x-1$, $x^2$, $x^3 + 5x$, $x^8+x^5+3x+7$ og så videre...
> **Definisjon** P.6.5
> Et polynom er en funksjon $P(x) = a_n x^n+a_{n-1}x^{n-1} + \ldots + a_{1} x^1 + a_0$, der $a_0, a_1, \ldots, a_n$ er koeffisienter til polynomet. Hvis $a_n \neq 0$, så har polynomet grad $n$. 
> 

Rasjonale funksjoner er brøker med polynomer som teller og nevner.

For eksempel
$f(x) = \frac{x+2}{x-5}$. $f$ er en rasjonal funksjon fordi $x+2$ og $x-5$ er polynomer. Vi ser nå at nullpunktet til $x-5$ er nå $x$ er 5. Dermed får vi at definisjonsmengden til funksjonen er $D(f) = \mathbb R \setminus \{5\}$. Helt konkret har vi

> **Definisjon**: P.6.6
> Hvis $P$ og $Q$ er polynomer, så kalles $\frac{P(x)}{Q(x)}$ en rasjonal funksjon. Definisjonsmengden, $D\left( \frac{P}{Q} \right)$ er alle tall der $Q(x)\neq 0$.

## Forenkling av rasjonale funksjoner

Se på $\displaystyle \frac{x^2-x}{x-1} = \frac{x(x-1)}{x-1} \overset{{\color{grey}{\text{når }}x\neq1}}{=}x$. 

Vi kan faktisk dele polynomer på hverandre hvis "grad opp" > "grad nede".

Eks: Frihånd.

### Generelt

> **Generelt**
>  La $A_n(x)$ være et polynom av grad m, 
>  $B_n(x)$ være et polynom av grad n, der $n < m$. 
>  Da er $\frac{A_m(x)}{B_n(x)} = Q_{m-n} + \frac{R_k(x)}{B_n(x)}$, der $k<n$ og $Q_{m-n}$ har grad $m-n$. 
>  **Merk** Vi sier at $B_n(x)$ er faktor i $A_m(x)$ hvis $R_k(x) = 0$. 

Hvis $A_m(r ) = 0$, da kaller vi $r$ en rot av $A_m$. For eksempel ser vi at $-1$ er en rot av $P(x) = x^2 - 1$ fordi $P(-1) = (-1)^2 -1 = 1-1 = 0$. 

> **Teorem** P.6.1
> La $P$ være et polynom, der graden til $P$ er $\geq 1$. Da er $r$ en rot av $P$ hvis og bare hvis $x-r$ er en faktor i $P$. 

> **Argument**
>  Siden $x-r$ har grad 1, så er $R_k(x)$ av grad $0$, som må bety at $R_k(x) = c$, alts et tall.
>
>Altså er 
> $$\begin{flalign} \frac{P(x)}{x-r} = Q_{n-1}(x) + \frac{c}{x-e,} \end{flalign}  $$
 > eller, hvis vi ganger gjennom med $x-r$, så får vi
> $$P(x) = Q_{n-1}(x)(x-r)+c$$
> Hvis $r$ er en rot, betyr det at $P(r) =0$, altså at $P(r) = Q_{n-1}(r)(r-r)+c = c = 0$.
> Med andre ord er $R_k(x)= 0$ når $r$ er en rot av $P(x)$. 

## Andregradspolynomer

Faktorer og røtter: Vi vet at andregradsfunksjoner ser slik ut, $ax^2+bx+c$, der $a\neq 0$. 
Kan vi nå finne rot til andregradsfunksjoner? 

La oss se på $x^2 - 5x + 6$. Vi ønsker å løse for $x$ slik at 
$$
\begin{flalign} 
  x^2 - 5x + 6 & = 0 && \\
  x^2 - \frac{2\cdot5}{2}x + \frac{5^2}{2^2}-\frac{5^2}{2^2} + 6 & = 0 && \\
  \left( x+\frac{5}{2} \right)^2 -\frac{5^2}{2^2}+6 & = 0 && | +\frac{5^2}{2^2}-6 \\
  \left( x+\frac{5}{2} \right)^2  &= {\color{grey} \frac{25}{4}-\frac{24}{4} = \frac{1}{4} } = \frac{1}{2^2} \\
  x+\frac{5}{2} & = \pm\frac{1}{2} \\
  x  &= -\frac{5}{2}\pm \frac{1}{2}.
\end{flalign} 
$$
Altså er røttene når $x_0 = -\frac{5}{2}+ \frac{1}{2} = -2$, og $x_1 = -\frac{5}{2}-\frac{1}{2} = -3$.  

Teknikken med å fullføre kvadratet kan vi gjøre generelt, for å finne en formel.
Det vil si, kan vi finne $r$ slik at 
$$
\begin{align} 
  a r^2 + br + c &= 0  &&\quad \quad |:a \\
 r^2 + \frac{b}{a}r + \frac{c}{a} & = 0 && \quad \quad \text{fullører kvadratet} \\
r^2 + 2 \frac{b}{2a} r + \frac{b^2}{4a^2} - \frac{b^2}{4a^2} + \frac{c}{a}  & = 0 \\
\left( r + \frac{b}{2a} \right)^2 - \frac{b^2}{4a^2} + \frac{c}{a} & = 0 && \quad \quad |+\frac{b^2}{4a^2}-\frac{c}{a} \\
\left( r + \frac{b}{2a} \right)^2 & =\frac{\left( b^2-{4ac} \right)}{4a^2} && \quad\quad \sqrt{} \\ 
r+\frac{b}{2a} &= \pm\frac{\sqrt{b^2-4ac}}{2a} \\
r  & = \frac{-b\pm \sqrt{b^2-4ac}.}{2a}
 \end{align} 
$$

> **Merk**
>  Vi ser at vi på et tidspunkt har $\left( r+\frac{b}{2a} \right)	^2 = \frac{b^2-4ac}{2a}$. Nå kan vi lese leddet $\frac{b}{2a}$ som er translasjon (forskyving) mot venstre langs $x-$aksen med $\frac{b}{2a}$. Videre kan vi også lese leddet $\frac{b^2-4ac}{2a}$ som en translasjon langs $y-$aksen.

TEGN HER
