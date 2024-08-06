---
draft: "true"
---

## Funksjoner

Hva er en funksjon? Funksjoner er noe vi alle kjenner til, fra forskjellige kontekster.

Fra matematikken:

- Funksjonsuttrykk
    - $f(x) = x-1$
    - $g(x) = x^2$
    - $y = 3+x^3$
- Graf 

![400](Files/grafer%204.svg)

Fra programmering

```python {pre}
def f(x):
    return x-1
def g(x):
    return x*x
```

Fra situasjoner.
- Funksjonen $g$ beskriver (for positive verdier) arealet av et kvadrat med sidelengde $x$. Arealet er da $x\cdot x$. 

Det viktige vi skal ta ut fra eksemplene over er at funksjoner fungerer som en regel som vet hva den skal gjøre. Vi kan visualisere funksjoner som noe som sendes inn til en regel $f$, der $f$ sender noe entydig ut, $f(x)$. Det kan vi visualisere som figuren under.
 
![500](Files/funksjoner.svg)

> [!info] Funksjoner, definisjon 1
> En funksjon er en regel som tar noe inn og spytter noe ut (det som kommer ut må være entydig).
>
> Dersom vi har en funksjon $f$, 
> - sier vi at alt funksjonen kan ta inn skal kalles definisjonsmengden, og det noteres $D(f)$.
> - sier vi at alt funksjonen kan spytte ut skal kalles verdimengden, notert $V(f)$. Merk at boka bruker $R(f)$, rekkevidden til $f$.

En viktig konvensjon (noe vi har blitt matematikkmiljøet har blitt enige om) er den følgende konvensjonen.

> [!info] Definisjon 1.5
> Definisjonsmengde er alltid størst mulig hvis ingenting annet er sagt.
> I Kalkulus 1 jobber vi med reelle funksjoner. Det vil si $D(f)$ er alltid i $\mathbb{R}$, og $V(f)$ er i $\mathbb{R}$. 
>  

## De fire regneartene

På samme måte som med tall, kan vi lage nye funksjoner. La $f$ og $g$ være to funksjoner. Da har vi at

> [!info] Definisjon 3 (P.5.3)
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

Som vi ser på illustrasjonen under kan man tenke oss at vi kan sette sammen funksjoner ved å først bruke en funksjon $f$, og deretter sende resultatet fra første funksjon, $f(x)$, og sende den inn i en ny funksjon $g$. Resultatet blir at $g$ får inn verdien $f(x)$, vi får altså $g(f(x))$.
![Komposisjoner](Files/komposisjoner.svg)

Tenker vi for eksempel på funksjonen $f(x) = x-1$ og $g(x) = x^2$
$x \overset{ -1 }{\longrightarrow  } x-1 \overset{ (\quad )^2 }{\longrightarrow  } (x-1)^2$

Vi noterer ofte dette slik $(g\ \circ f)(x)$ og det er lik $g(f(x))$. Vi har sett over at $(g\ \circ f)(x) = g(f(x)) = g(x-1) = (x-1)^2$. 

> [!warning] Merk
> $f\ \circ g$ er ikke det samme som $g \ \circ f$. 

Det kan vi enkelt bekrefte ved å bare undersøke.
$(f\ \circ g)(x) = f(g(x)) = f(x^2) = x^2-1$.

#### Flere eksempler

Hvis $h(x) = \sqrt{x+1}$, så kan vi tenke oss at vi "ser" to funksjoner. Den ene er rotfunksjonen. La oss kalle den $g(x)=\sqrt x$. Den andre er den som legges til 1, altså $f(x) = x+1$. Vi får nå at 
$$
x \overset{ +1 }{\longrightarrow  } x+1 \overset{ \sqrt{\quad} }{\longrightarrow  } \sqrt{x+1}
$$
Vi kan altså skrive $h$ som en komposisjon av $f$ og $g$ slik
$$
h(x) = g(f(x))  = (g\ \circ f)(x).
$$

Kan vi nå si noe om definisjonsområdet til $t$? Jo, vi ser at $\sqrt x$ må få positive verdier, altså at $x\geq 0$. For $\sqrt{x+1}$ så må jo $x+1 \geq 0$, det gir
$$
\begin{aligned} 
  x+1& \geq 0 \\
  x+1-1 &\geq 0-1 \\
  x & \geq -1.
\end{aligned} 
$$
Definisjonsområdet blir da $D(h) = [-1,\infty).$

Hvis vi tar $t(x) = \frac{1}{x-1}$. Hvordan kan vi bryte ned denne funksjonen ned i en komposisjon av enklere funksjoner?

Jo, vi ser at
$$
x \longrightarrow x-1 \longrightarrow \frac{1}{x-1}
$$
så det første som skjer er at vi trekker fra 1. Deretter deler vi 1 på det vi har. Vi har at $t(x) = F(G(x))$, der $G(x)  = x-1$ og $F(x) = \frac{1}{x}$. 

## Stykkvise funksjoner

#### Absoluttverdifunksjonen

Stykkvise funksjoner er et slags lappverk av flere funksjoner. La oss begynne med å se på absoluttverdifunksjonen $|x|$(funksjonen som forteller oss et talls avstand fra 0).

![600](/Files/absoluttfunksjonen.svg)
> **Merk**
> $|x-3|$ er funksjonen som forteller tallet $x$ sin avstand fra $3$. For et tall $a$ forteller $|x-a|$ oss avstanden fra $x$ til $a$.

#### Fortegnsfunksjonen

Fortegnsfunksjonen er funksjonen som forteller oss om et tall er positivt eller negativt. For eksempel er $-3$ negativt, så funksjonen vil gi oss $-1$ tilbake. Er tallet positivt, for eksempel $\pi$, så vil funksjonen gi oss $1$ tilbake. Funksjonens graf ser derfor slik ut. 
![](/Files/fortegnsfunksjone.svg)
Vi kan nå ganske greit se at funksjonen er stykket opp i to biter, den ene der $x\leq 0$, da er funksjonen $-1$. Den andre der $x \geq 0$, da er funksjonen $1$. 
$$
sgn(x) = \begin{cases} 1 & \text{ når } x \geq 0 \\
-1 & \text{ når } x \leq 0 \\
\text{udefinert} & \text{ når } x = 0
\end{cases}
$$

### Generelt

Hvis vi ønsker at funksjonen vår skal oppføre seg forskjellig på forskjellige områder kan vi "klippe og lime" sammen funksjonen vår fra andre funksjoner for å oppnå dette. Vi kaller slike funksjoner for stykkvis definerte funksjoner.

Ta for eksempel funksjonene under

![](/Files/stykkvisefunk.svg)

## P6. Polynomer og rasjonale funksjoner

### Polynomer

Polynomer, det kjenner vi til.
Eksempler er $x$, $x+2$, $x^2$, $x^3 + 6x+3$, $x^8+x^3$ og så videre.

> **Definisjon** P.6.5
>  Et polynom er en funksjon
>  $P(x) = a_nx^n + a_{n-1}x^{n-1}+\ldots+a_2x^2+a_1x^1+a_0$, der $a_0,\ldots,a_n$ er koeffisienter til polynomet. Hvis $a_n \neq 0$, så sier vi at polynomet har grad $n$. 

Ser vi på eksemplene over er $x$ og $x+2$ av grad 1. $x^2$ er av grad 2. $x^8 +x^3$ er av grad 8.

### Rasjonale funksjoner

Rasjonale funksjoner er ganske enkelt brøker, der teller og nevner er polynomer. 

For eksempel $f(x) = \frac{x+2}{x-5}$, er en rasjonal funksjon, fordi $x+2$ (teller) og $x-5$ (nevner) er polynomer. Vi ser nå at nullpunktet til $x-5$ er $5$. Konvensjonen for definisjonsmengder gir oss nå er $D(f) = \mathbb{R}\setminus\{5\}$.

> **Definisjon** P.6.6
>  Hvis $P$ og $Q$ er polynomer, så kalles $\frac{P(x)}{Q(x)}$ en rasjonal funksjon. Definisjonsmengden, $D\left( \frac{P}{Q} \right)$ er alle tall der $Q(x) \neq 0$. 

### Faktorer, røtter og nullpunkt. 

Se på $\frac{x^2-x}{x-1} =\frac{x\cancel{ (x-1) }}{\cancel{ x-1 }} \overset{ {\color{grey} \text{når } x\neq0 } }{=  } x$.

Vi kan faktisk dele polynomer på hverandre hvis "grad oppe" > "grad nede".

![](/Files/polydivi.svg)

> **Generelt**
>  La $A_m(x)$ være et polynom av grad $m$, 
>  $B_n(x)$ være et polynom av grad $n$ der $n < m$.
>  Da er $\frac{A_m(x)}{B_n(x)} =Q_{m-n}(x) + \frac{R_k(x)}{B_n(x)}$, der $Q_{m-n}$ har grad $m-n$, og $R_k$ har grad $k<n$.
>      **Merk** Vi sier at $B_n(x)$ er en faktor i $A_m(x)$ hvis $R_k(x) = 0$ (altså at vi har 0 i rest etter divisjon).

Hvis vi har at $A_m(r) = 0$ for en verdi $r$, kaller vi $r$ en rot av $A_m$. For eksempel ser vi at $3$ er en rot av $P(x)= x^2-6x+9$ fordi $P(3) = 3^2-6\cdot3+9 = 9 -18+9 = 0$.

> **Teorem** P.6.1
> La $P$ være et polynom, der graden til $P$ er større enn $1$. Da er $r$ en rot av $P$, hvis og bare hvis $x-r$ er en faktor i $P$. 

> [!note] Argument 
> 

Siden $x-r$ er av grad $1$, så vil divisjonsalgoritmen gi at vi får en rest $R_k$ som har grad 0, altså bare et tall.

Så $\frac{P(x)}{x-r} = Q(x)+\frac{c}{x-r}$. Gang gjennom med $x-r$ på begge sider.

$P(x) = Q(x)(x-r)+ c$. 
Setter vi inn $r$ får vi

$P(r) = Q(r)(0) + c = c$. Altså at $P(r) = c$. 

Det må bety at $P(r) = 0$ nøyaktig når $c = 0$, altså når resten $R_k(x) = 0$.

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
