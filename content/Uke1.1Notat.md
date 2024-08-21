---
draft: "true"
---
Husk NOA

- forklare hva en funksjon $f$ definert på en mengde $D_f$ er, samt forklare hva verdimengden $V_f$ er (Definisjon 1, s. 24).
- forklare konvensjonen om definisjonsmengder (s. 25).
- definere og bruke jevne og odde funksjoner (Definisjon 2, s. 28).
- bruke funksjoner satt sammen ved hjelp av addisjon, subtraksjon, multiplikasjon og divisjon (Definisjon 3, s. 33).
- bruke komposisjoner $f\circ g$ for funksjoner $f$ og $g$ (Definisjon 4, s. 35).
- bruke stykkevis definerte funksjoner (s. 36–38).
- bruke polynomfunksjoner og rasjonale funksjoner (Definisjon 5 og 6, s. 39–40).
- bruke divisjonsalgoritmen på polynomer (Teorem 1, s. 41).
- bruke og argumentere for $abc$-formelen for andregradslikninger

## Funksjoner

> [!question] Spørsmål 
> Hva er en funksjon?

Fra matematikken

- Funksjonsuttrykk
    - $f(x)=x-1$
    - $g(x) = x^2$
    - $y= 3+x^3$
    - $h(x) = \cos(x)$.
- Grafer:
 ![400](Files/shapes%20at%2024-08-13%2010.07.54.svg)
- Situasjoner
    - $x^2$ beskriver arealet av kvadrat.

Fra programmering

```python
def f(x):
    return x-1
def g(x):
    return x*x
```

Visualisere som regel.

![](Files/shapes%20at%2024-08-13%2010.16.11.svg)

> [!info] Funksjon, definisjon P.4.1 
>  En funksjon er en regel, på en mengde $D$, som tar noe inn og spytter noe ut (det som kommer ut må være entydig).
>  For $f$,
>  - er definisjonsmengden alt funksjonen kan ta inn,
>      - $D(f)$ (eller $D_f$).
>  - er verdimengden alt funksjonen kan spytte ut, 
>      - notert $V(f)$. Boka: $R(f)$, rekkevidden til $f$.


> [!info] Definisjon 1.5, konvensjon
> Definisjonsmengder er alltid størst mulig hvis ingenting annet er sagt. 
> I kalkulus 1 jobber vi med reelle funksjoner. Det vil si at $D(f)$ er alltid i $\mathbb{R}$ og $V(f)$ også er i $\mathbb{R}$.
> 


> [!question] Spørsmål 
> Hva er $D(f)$ og $V(f)$ hvis $f(x) = \frac{1}{1+x}$?
> 

Ser at $x$ ikke kan være $-1$, så $D(f) = \mathbb{R}\setminus\left\{ -1 \right\} = (-\infty,-1)\cup(-1,\infty).$

Ønsker å finne alle $a$ slik at det eksisterer en $x$ der $a=\frac{1 }{1+x }$.

$$
\begin{aligned} 
  a &= \frac{1 }{1+x } \\
  a(1+x) &= 1 \\
  1+x &= \frac{1}{a} \\
  x &= \frac{1}{a}-1.  
\end{aligned} 
$$
Ser at $a$ ikke kan være 0, men ellers finnes det en løsning på likningen, så $V(f) = \mathbb{R}\setminus\left\{ 0 \right\} = (-\infty,0)\cup(0,\infty).$

## De fire regneartene

> [!info] Definisjon P.5.3
> La $f$ og $g$ være to funksjoner.
> 1. $(f+g)(x) = f(x)+g(x)$.
> 2. $(f-g)(x) = f(x)-g(x)$.
> 3. $(f\cdot g)(x) = f(x)\cdot g(x)$.
> 4. $\left( \frac{f}{g} \right)(x) =\frac{f(x) }{g(x) }$, merk at $g(x)$ kan ikke være 0, så $D\left( \frac{f}{g} \right)$ reduseres til der $g$ ikke er 0.

> [!question] Spørsmål 
> La $f(x)=x-1$ og $g(x) = x^2$. Hva er
> 1. $(f+g)(x)$
> 2. $(f\cdot g)(x)$
> 3. $\left( \frac{f}{g} \right)(x)$.

> [!abstract]  1
> 

$(f+g)(x)=(x-1)+x^2 =x^2+x-1$.

> [!abstract]  2
> 

$(f\cdot g)(x) = (x-1)(x^2)=x^3-x^2$.

> [!abstract]  3
> 

$\frac{x-1 }{x^2 }$. Hvis $x=3$ så får vi $\frac{3-1 }{3^2 } = \frac{2}{9}$.


## Komposisjoner av funksjoner

![500](Files/shapes%20at%2024-08-13%2010.30.30.svg)


Sett sammen $f$ og $g$. Resultatet blir $g(f(x))$. 

> [!info] Eksempel 
>  
$f(x) = x-1$ og $g(x) = x^2$

Hvis $x = 5$ så er $f(5) = 5-1 = 4$, så $g(f(5))=g(4)=4^2$.

$x \overset{ -1 }{\longrightarrow  } x-1 \overset{ (\quad)^2 }{\longrightarrow  } (x-1)^2$.


Notasjon: $(g \circ f)(x) =g(f(x))$. 
Ser at $(g\circ f)(x) = g(f(x))=(x-1)^2$.

> [!warning] Merk 
> $f\circ g$ er ikke det samme som $g\circ f$.
> 

Fordi
$(f\circ g)(x) =f(g(x)) = f(x^2) = x^2-1 \neq (x-1)^2$.

> [!question] Spørsmål 
> Dekomponer $h(x) = \sqrt{x+1}$.


$x \overset{ +1 }{\longrightarrow  }x+1 \overset{ \sqrt{\quad} }{\longrightarrow  } \sqrt{x+1}$.

Vi ser at $h(x)$ er satt sammen av to funksjoner, $x+1$ og $\sqrt{x}$.

> [!question] Spørsmål 
> Hva er $D(h)$ og $V(h)$? 

 $\sqrt{x}$ tar positive verdier: $[0,\infty)$.

Derfor må
$$
\begin{aligned} 
  x+1 & \geq 0 \\
  x+1-1 & \geq 0-1 \\
  x & \geq -1,
\end{aligned} 
$$
det betyr at $D(h) = [0,\infty)$.

## Stykkvise funksjoner

Stykkvise funksjoner lappverk.

> [!info] Eksempel 
> $|x|$ absoluttverdifunksjonen.


![500](Files/shapes%20at%2024-08-13%2010.45.34.svg)


#### Generelt

Vi kan "klippe og lime" sammen funksjoner. De kalles *stykkvis definerte funksjoner*. 

Eks:

![500](Files/shapes%20at%2024-08-13%2010.52.48.svg)


## Polynomer og rasjonale funksjoner

### Polynomer

Eksempler på polynomer
$x$, $x^2$, $2x+3x^3$, $x^8 + x^3$ og så videre.

> [!info] Polynomer, P.6.5
> Et polynom:
> $P(x) = a_nx^n+a_{n-1}x^{n-1}+\ldots +a_2x^2+a_1 x^1+a_0$,
> der $a_0,\ldots, a_n$ er koeffisienter til polynomet (konstanter).
> Hvis $a_n\neq 0$, har $P(x)$ grad $n$. 

> [!question] Spørsmål 
> Hva er graden:
> 1.$x$,
> 2.  $1$, 
> 3. $x+3$,
> 4. $x^3+5x+7x^8$?

Ser at det må være 1, 0, 1 og 8. 

### Rasjonale funksjoner

Rasjonale funksjoner:
brøker, der teller og nevner er polynomer.

Eks:
$\frac{x+2 }{x-5 }$ er rasjonal, fordi $x+2$ (teller) og $x-5$ (nevner) er et polynom. 

> [!info] Rasjonale funksjoner, definisjon P.6.6
> $P$ og $Q$ er polynomer:
>  $\frac{P(x) }{Q(x) }$ kalles en rasjonal funksjon. 
  
### Faktorer, røtter og nullpunkter

> [!info] Eksempel 
> 

5 er en faktor i 20 fordi divisjonen $20:5$ går opp (=4). Det samme gjelder rasjonale funksjoner

$\frac{x^2-x }{x-1 } = \frac{x\cancel{ (x-1) } }{\cancel{ x-1  }} \overset{ \text{når } x\neq 1 }{=  }x$.

Polynomer kan også deles på hverandre: "utføre divisjonen for alle $x$ på en gang."

![500](Files/shapes%20at%2024-08-13%2013.33.36.svg)
> [!tip] Teorem, divisjonsalgoritmen
>   Hvis
>   $A(x)$:  polynom med grad $m$
>   $B(x)$:  polynom med grad $n$ der $n< m$. 
>   
>   Da er 
>   $$\frac{A(x) }{B(x) } =Q(x) + \frac{R(x) }{B(x) }.$$ 
>   $Q$ har grad $m-n$. 
>   $R(x)$ har grad $k$ der $k <n$.

> [!warning] Merk 
> 
>1. $B(x)$ er faktor i $A(x)$ hvis $R(x) = 0$  
>2. Hvis $A(r) = 0$ kaller vi $r$ en rot.

> [!info] Eksempel 
> 3 rot til $P(x)=x^3-6x^2+10x-3$,
>  fordi 
>  $$P(3) = 3^3-6\cdot3^2 +30 -3 =27-54+30-3 = 0.$$

> [!tip] Faktorteoremet, teorem P.6.1
> Hvis
>  $P$  polynom med grad > $1$. 
>  
>  Da er $r$ en rot av $P$, 
>  hvis og bare hvis 
>  $x-r$ er en faktor i $P$. 

Nyttig fordi: 

> [!question] Spørsmål 
> Finn røttene:  
$f(x) = x^3-4x^2+3$. 

$f(1) = 1-4+3 = 0$, så $x-1$ er faktor

Hvis vi utfører divisjonen får vi
$$
f(x) = Q(x)(x-1) = (x^2-3x-3)(x-1).
$$

> [!note] Argument
> 

Vi har
$$\frac{P(x)}{x-r} = Q(x)+\frac{R(x) }{x-r }.$$ $R(x)$ har grad 0, fordi $x-r$ har grad 1.

Det betyr at 
$$
\frac{P(x)}{x-r}= Q(x)+\frac{c}{x-r}.
$$
Gang gjennom med $x-r$:
$$
P(x) = Q(x)(x-r) + c.
$$

$x = r$ gir:
$$
P(r)=Q(r)(r-r)+c = Q(r)\cdot 0 + c =c.
$$

1. Hvis $P(r)  = 0 \longrightarrow P(r) = c = 0$ altså er resten 0 som betyr at $x-r$ er en faktor i $P(x)$. 
2. Hvis $x-r$ er en faktor, da har vi 0 i rest. Som betyr at $c = 0$ som gir at $P(r) = c = 0$, altså er $r$ en rot. 


### Andregradspolynomer

Andregradsfunksjoner: $ax^2+bx+c$. 

> [!tip] abc-formelen.
> Hvis
> $ax^2+bx+c$, der $a\neq 0$ 
> 
> Da er røttene gitt ved
> $$x = \frac{-b\pm \sqrt{b^2-4ac} }{ 2a}$$
>   


> [!note] Argument 
> 

![](Files/shapes%20at%2024-08-13%2014.01.37.svg)




## Forskyvning av grafer


> [!question] Spørsmål 

![](Files/shapes%20at%2024-08-13%2014.15.46%201.svg)
> [!tip] Translasjon av grafer
> 
> Hvis man skal forskyve grafen til en funksjon $f$ med $a \in \mathbb{R}$.
 >
 >Da vil 
 >- $f(x)+a$ forskyve grafen $a$ enheter oppover. 
 >- $f(x-a)$ vil forskyve grafen $a$ enheter mot høyre. 

  > [!question] Spørsmål 
> Tegn $|x-3|$.
> 

Ser at hvis $f(x) = |x|$, så er funksjonen over $f(x-3)$, altså en forskyvning 3 mot høyre på førsteaksen. 





