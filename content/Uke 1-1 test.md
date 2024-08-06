Hva er en funksjon? Funksjoner er noe vi alle kjenner til, fra forskjellige kontekster.

Fra matematikken

- Funksjonsuttrykk
    - $f(x)$
    - $g(x) = x^2$
    - $y = 3+x^3$

![800](Files/shapes%20at%2024-08-02%2012.24.08.svg)

Fra programmering:

```python
def f(x):
    return x-1
def g(x):
    return x*x
```

Fra situasjoner
- Funksjonen $g$ beskrever (hvertfall for positive verdier) arealet av et kvadrat med sidelengde $x$. Arealet er jo da $x\cdot x$. 

Det viktige vi skal ta ut av eksemplene er at funksjoner fungerer som en regel som ved hva den skal gjøre. Vi kan visualisere funksjoner som noe som sendes inn til en regel $f$, der $f$ sender ut noe entydig, $f(x)$. 
![600](Files/shapes%20at%2024-08-02%2012.28.34.svg)

> [!info] Funksjon, definisjon 1
> En funksjon er regel som tar noe inn og spytter noe ut (det som kommer ut må være entydig). 
> Dersom vi har en funksjon $f$,
> - sier vi at alt funksjonen kan ta inn skal kalles definisjonsmengden, og det notreres som $D(f)$.
> - sier at alt funksjonen kan spytte ut skal kalles verdimengden, notert $V(f)$. Merk at boka bruker $R(f)$, som står for rekkevidden til $f$.
>  

En viktig konvensjon er den følgende (en konvensjon er en anerkjent regel / retningslinje i matematikkmiljøet).

> [!info] Definisjon 1.5
> Definisjonsmengde er alltid størst mulig hvis ingenting annet er sagt. I Kalkulus 1 jobber vi med reelle funksjoner. Det vil si at $D(f)$ er i $\mathbb{R}$ og $V(f)$ er også i $\mathbb{R}$. Med andre ord jobber vi kun med funksjoner som tar inn reelle tall og spytter ut reelle tall.
> 

## De fire regneartene

På samme måte som med tall, kan vi lage nye funksjoner. La $f$ og $g$ være to funksjoner. da har vi at

> [!info] Definisjon P.5.3 
>  1. $(f+g)(x) = f(x) +g(x)$.
>  2. $(f-g)(x) = f(x)-g(x)$.
>  3. $(f\cdot g)(x) = f(x)\cdot g(x)$.
>  4. $\left( \frac{f}{g} \right)(x) = \frac{f(x) }{g(x) },$ merk at $g(x)$ ikke kan være $0$. Hvis $g(x)=0$ så må vi gjøre noe med definisjonsmengden til $\frac{f}{g}$. Det gjør vi enkelt ved å bare redusere definisjonsmengden til alle plasser der $g$ ikke er 0.

#### Eksempler

La $f(x) = x-1$ og $g(x) = x^2$. Merk at begge har samme definisjonsområde, altså at $D(f) = \mathbb{R} = D(g)$.

1. $(f+g)(x) = x-1+x^2$
2. $(f-g)(x)=x-1-x^2$
3. $(f\cdot g)(x) =(x-1)\cdot x^2 = x^3-x^2$
4. $\left( \frac{f }{g } \right)(x) =\frac{x-1 }{x^2 }$.

## Komposisjoner av funksjoner.

Som vi ser på illustrasjonen kan vi tenke oss at vi kan sette sammen funksjoner ved å først bruke en funksjon $f$ og deretter sende resultatet fra første funksjon $f(x)$, sende det inn i ny en ny funksjon $g$. Resultatet blir at $g$ får inn verdien $f(x)$ og vi får totalt $g(f(x))$.
![800](Files/shapes%20at%2024-08-02%2012.45.52.svg)

Tenker vi oss at funksjonen $f(x) = x-1$ og $g(x) = x^2$

$$
x \overset{ -1 }{\longrightarrow  } x-1 \overset{ (\quad)^2 }{\longrightarrow  } (x-1)^2 = g(f(x))= g(x-1) 
$$

Vi noterer ofte dette slik $(g \circ f)(x) =g(f(x))$. Vi så over at $(g\circ f)(x)=g(f(x))=g(x-1)=(x-1)^2$.

> [!warning] Merk
> $f\circ g$ er ikke det samme som $g\circ f$.
> 

Det kan vi enkelt bekrefte ved å undersøke

$$
x \overset{ ()^2 }{\longrightarrow   } x^2 \overset{ -1  }{\longrightarrow  } x^2-1
$$
med symboler
$$
(f\circ g)(x) = f(g(x)) = f(x^2)= x^2-1.
$$

#### Flere eksempler

Hvis $h(x) = \sqrt{x+1}$, så kan vi tenke oss at vi "ser" to funksjoner. Den ene er rotfunksjonen $\sqrt{}$, den kan vi kalle $g(x) = \sqrt{x}$. Den andre funksjonen er den som legger til $1$, altså $f(x) = x+1$. 
$$
x \overset{ +1 }{\longrightarrow  }  x+1\overset{ \sqrt{\quad} }{ \longrightarrow   } \sqrt{x+1}. 
$$

Vi kan skrive $h$ som en komposisjon av $f$ og $g$ slik
$$
h(x) = g(f(x)) = (g\circ f)(x).
$$

> [!question] Spørsmål 
> Kan vi si noe om definisjonsmengden til $h$?
> 

Funksjonen $g(x)=\sqrt{x}$ må få positive verdier, altså at $x\geq 0$. For $h(x)=\sqrt{x+1}$ må det bety at $x+1\geq 0$. 
$$
\begin{aligned} 
  x+1&\geq 0 & \text{ trekk fra } 1 \\
  x+1-1& \geq 0-1 \\
  x & \geq -1.
\end{aligned} 
$$

Definisjonsområdet til $D(h) = [-1, \infty)$.

La $t(x) = \frac{1 }{x-1 }$. Kan vi bryte ned $t(x)$ i en komposisjon av flere funksjoner?

$$
x \longrightarrow  x-1 \longrightarrow \frac{1 }{x-1 }, 
$$
Det første som skjer er at vi trekker fra 1, deretter deler vi 1 på det vi har. Så $t(x)$ er satt sammen av $F(x) = x-1$ og $G(x) = \frac{1}{x}$, med andre ord er $t(x) = G(F(x))=G(x-1) = \frac{1}{x-1}$.

## Stykkvis definerte funksjoner

#### Absoluttverdifunksjonen.

Stykkvise funksjoner er et slags lappverk av flere funksjoner. Vi ser først på absoluttverdifunksjonen som vi skriver slik $|x|$, funksjonen som måler et talls avstand fra 0.

![800](Files/shapes%20at%2024-08-02%2013.07.27.svg)

#### Fortegnsfunksjonen

Fortegnsfunksjonen er funksjonen som forteller oss om et tall er positivt eller negativt, ved å sende tilbake $1$ når $x$ er positiv og $-1$ når $x$ er negativ. 

$$
\text{fortegnsfunksjonen}(x)=\text{sgn}(x) = \begin{cases}
1 &\text{når } x\geq 0 \\ -1 & \text{når } x\leq 0 \\
\text{udefinert} & \text{når } x = 0.
\end{cases}
$$
Vi ser at definisjonsmengden til $\text{sgn}(x)$ er $\mathbb{R}\setminus\{0\}$ (les det som alle reelle tall bortsett fra 0).

![800](Files/shapes%20at%2024-08-02%2013.14.13.svg)

### Generelt

Hvis vi ønsker at en funksjon skal oppføre forskjellig på forskjellige områder kan vi *klippe og lime* sammen funksjoner fra andre funksjoner. Vi kaller slike funksjoner for stykkvis definerte funksjoner.

Ta for eksempel funksjonen under:

![800](Files/shapes%20at%2024-08-02%2013.21.29.svg)

## Polynomer og rasjonale funksjoner

### Polynomer

Polynomer, det kjenner vi til.
Eksempler er $x$, $x^2$, $x^3 +6x$, $x^7+x^4$ og så videre.

> [!info] Polynomer, definisjon 5 (P.6.5)
> Et polynom er en funksjon $P(x) = a_nx^n+a_{n-1}x^{n-1} + \ldots +a_2x^2+a_1x^1+a_0$, der $a_n,\ldots, a_2, a_1, a_0$ er koeffisienter til polynomer. Hvis $a_n \neq 0$ så sier vi at polynomet har grad $n$.
> 

Ser vi på $x$ er det et et polynom av grad $1$. $x^2$ er et polynom av grad $2$. $x^7+x^4$ så er den av grad $7$. 

### Rasjonale funksjoner

Rasjonale funksjoner er ganske enkelt brøker, der teller og nevner er polyomer. 

For eksempel er $f(x) = \frac{x+2 }{x-5 }$ en rasjonal funksjon, fordi $x+2$ (teller) og $x-5$ (nevner) er polynomer. Merk at nullpunktet til $x-5$ er $5$. Konvensjonen for definisjonsmengder sier nå at $D(f) = \mathbb{R} \setminus\{5\}$.

> [!info] Rasjonale funksjoner, definisjon P.6.6
> Hvis $P$ og $Q$ er polynomer, så kalles $\frac{P(x) }{Q(x) }$ en rasjonal funksjon. Definisjonsmengden $D\left( \frac{P }{G } \right)$ er alle tall der $Q(x)\neq 0$. 
> 

### Faktorer, røtter og nullpunkt

Se på
$$
\frac{x^2-x }{x-1 }  =\frac{x\cancel{ (x-1) } }{\cancel{ x-1 } } \overset{ \text{når } x \neq1 }{=  } x
$$

Vi kan faktisk dele polynomer på hverandre hvis "grad oppe" > "grad nede".

![](Files/shapes%20at%2024-08-02%2013.39.37.svg)

> [!tip] Divisjonsalgoritmen
> La $A_m(x)$ være et polynom av grad $m$ og $B_n(x)$ være et polynom av grad $n$ der $n<m$. Da er $\frac{A_m(x) }{B_(x) }= Q_{m-n}(x)+\frac{R_k(x) }{B_n(x) }$ der $Q_{m-n}$ har grad $m-n$ og $R_k$ har grad $k<n$.
> **Merk** Vi sier at $B_n(x)$ er en faktor i $A_m(x)$ hvis $R_k(x) = 0$ (altså at vi har 0 i rest etter divisjon).

Hvis vi har at $A_m(r) = 0$ for en verdi $r$, kaller vi $r$ en rot av $A_m$. For eksempel ser vi at $3$ er en rot av $P(x) = x^2-6x+9$ fordi at $P(3) =3^2-6\cdot3+9 =9-18+9 = 0$.

> [!tip] Teorem P.6.1
>  La $P$ være et polynom, der graden til $P$ er større enn $1$. Da er $r$ en rot av $P$, hvis og bare hvis $x-r$ er en faktor i $P$. 

> [!note] Argument 
> 

Siden $x-r$ er av grad $1$, så vil divisjonsalgoritmen gi at vi får en rest $R_k$ som har grad $0$, dersom vi tar $\frac{P(x)}{x-r}$. $R_k$ er altså bare et tall $c$.

$$
\frac{P(x) }{x-r } = Q(x)+\frac{c }{x-r } 
$$

Gang gjennom med $x-r$ på begge sider og få
$$
P(x) = Q(x)(x-r)+c.
$$

Setter vi inn $r$ får vi nå
$$
P(r) = Q(r)(r-r) + c = 0+c.
$$
Det må bety at $P(r) = 0$ nøyaktig når $c = 0$, altså når resten $R_k(x) = 0$. 

## Andregradspolynomer


Faktorer og røtter: Vi vet at andregradsfunksjoner ser slik ut $ax^2 + bx+c$, der $a\neq 0.$
Kan vi nå finne en rot til andregradsfunksjoner?

La oss se på $x^2-5x+6$. 

$$
\begin{aligned} 
  x^2-5x + 6  
  &= 0
  \\
  x^2-\frac{2\cdot5}{2} x +\frac{5^2}{2}-\frac{5^2}{2}+6
  &= 0
  \\
  \left( x+\frac{5}{2} \right)^2-\frac{5^2}{2}+6 &= 0 && | +\frac{5^2}{2}-6
  \\
   \left( x+\frac{5}{ 2}  \right)^2 &= 
\end{aligned} 
$$















