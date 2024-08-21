HUSK NOA!

"Hele tavla" finnes her tinyurl.com/ma183-19-08

LM
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
    - $y= x+2$
    - $f(x) = x^2$
    - $\cos (x)$
- Grafer
![undefined](Files/shapes%20at%2024-08-20%2008.24.57.svg)

- Situasjoner
    - $x^2$ beskriver arealet av et kvadrat.

```python
def f(x):
    return x*x
```


> [!info] Funskjon, P.4.1
>  En funksjon er en regel, på en mengde $D$, som tar noe inn og spytter noe ut (det som kommer ut det må være entydig).
>  For $f$,
>  - er definsjonsmengden alt funksjonen kan ta inn, $D(f)$ (eller $D_f$)
>  - er verdimengen alt funksjonen kan spytte u, $V(f)$. Boka sier $R(f)$.
>  

> [!info] Konvensjon
> Definisjonemengder er alltid størst mulig hvis ingenting annet er sagt.
> 

> [!question] Spørsmål 
> La $f(x)=\frac{1}{1+x}$, hva er $D(f)$ og $V(f)$?
> 

Ser at $D(f)$ er alt utenom $-1$ fordi da får vi $\frac{1 }{0 }$. 

$D(f) = \mathbb{R}\setminus\left\{ -1 \right\} = (-\infty,-1)\cup(-1,\infty)$.

Ønsker å finne alle $a$ slik at $\frac{1}{1+x} = a$.
$$
\begin{aligned} 
  \frac{1}{1+x} &= a
\end{aligned} 
$$





![undefined](Files/shapes%20at%2024-08-20%2008.44.35%201.svg)

Ser at verdimengden er all tall bortsett fra 0, altså $V(f)= \mathbb{R}\setminus\left\{ 0 \right\} = (-\infty, 0)\cup(0,\infty)$.

## De fire regneartene

> [!info] Definisjon, P.5.3
> LA $f$ og $g$ være to funksjoner, da er
> 1. $(f+g)(x) = f(x)+g(x)$
> 2. $(f-g)(x)=f(x)-g(x)$
> 3. $(f\cdot g)(x) = f(x)\cdot g(x)$
> 4. $\left( \frac{f}{g} \right)(x) =\frac{f(x) }{g(x) }$
>  

> [!question] Spørsmål 
> La $f(x) =x-1$ og $g(x) = x^2$. Hva er
> 1. $(f+g)(x)$
> 2. $(f\cdot g)(x)$
> 3. $\left( \frac{f }{g } \right)(x)$?

> [!abstract]  1
> 

$(f+g)(x) =x-1+x^2$


> [!abstract]  2
> 

$(f\cdot g)(x)= (x-1)\cdot x^2=x^3-x^2$

> [!abstract]  3
> 

$\left( \frac{f}{g} \right)(x) =\frac{x-1 }{x^2 }$


## Komposisjoner av funksjoner


![undefined](Files/shapes%20at%2024-08-20%2008.56.32.svg)
Setter vi sammen $f$ og $g$ lir resultatet $g(f(x))$.

> [!question] Spørsmål 
> $f(x)=x-1$ og $g(x)=x^2$. Hva er $g(f(x))$?
> 

Hvis $x=5$, så er $f(5)=5-1=4$. $g(f(5))=g(4)=4^2$.

$g(f(x))=g(x-1)=(x-1)^2$.

> [!warning] Merk 
> $f(g(x))$ er ikke det samme som $g(f(x))$.
> 

Det ser vi enkelt ved å se at $f(g(x))=f(x^2)=x^2-1$.

Notasjon: $(g \circ f)(x) = g(f(x))$.


## Stykkvis definerte funksjoner

Vi kan lage nye funksjoner ved å "klippe og lime" de sammen

![undefined](Files/shapes%20at%2024-08-20%2009.24.57.svg)

## Polyonomer

> [!info] Eksempel 
> 

Eksempler på polynomer

$x^2$, $x-1$, $x^3+5x+x^8$, og $x^{12}-15$ osv.

> [!info] Polynomer, P.6.5
>  Et polynom:
>  
>  $P(x)= a_nx^n+a_{n-1}x^{n-1}+\ldots+ a_2 x^2+a_1 x^1 a_0$.
>  
>  Her er $a_0,\ldots,a_n$ konstanter (kaller de koeffisienter). Hvis $a_n \neq 0$ så har $P(x)$ grad $n$.


## Rasjonale funksjoner

Rasjonale funksjoner er rett og slett brøker, der teller og nevner er polynomer. 

> [!info] Eksempel 
> 

$\frac{x^2+1 }{x+1 }$ er en rasjonal funksjon fordi $x^2+1$ er et polynom og $x+1$ er et polynom. 

> [!info] Rasjonal funksjon, definsjon P.6.6
> Hvis $P$ og $Q$ er polynomer så er
>  
> $\frac{P(x) }{Q(x) }$ en rasjonal funksjon.  
>  


## Faktorer, røtter og nullpunkter

> [!info] Eksempel 
> 

5 er en faktor i $20$ fordi $5\cdot4 =20$, eller fordi $\frac{20}{5}$ går opp. 


![undefined](Files/shapes%20at%2024-08-20%2009.50.15.svg)
> [!tip] Teorem, divisjonalgoritmen
> Hvis
> $A(x)$: polynom med grad $m$,
> 
> $B(x)$: polynom med grad $n$, der $n<m$.
> 
> Da er 
> 
> $$\frac{A(x) }{B(x) } =Q(x) + \frac{R(x) }{B(x) }$$
> $Q$ har grad $m-n$. 
> 
> $R(x)$ har grad $k$ der $k<n$

> [!warning] Merk 
> 1. $B(x)$ er en faktor i $A(x)$ hvis $R(x)=0$.
> 2. $r$ er en rot til $A$ hvis $A(r)= 0$. 

> [!info] Eksempel 
> 3 rot til $P(x)=x^3-6x^2+10x-3$,
>  fordi 
>  
>  $$P(3) = 3^3-6\cdot3^2 +30 -3 =27-54+30-3 = 0.$$
>  
>  $x-3$ er faktor i $P(x)$ fordi
>  
>  $$\frac{x^3-6x^2+10-3 }{x-3 } = x^2-3x+1$$


> [!tip] Faktorteoremet, teorem P.6.1
> Hvis
> 
> $P$ er polynom med grad $>1$.
> 
> Da er $r$ en rot $P$ hvis og bare hvis
> $x-r$ er en faktor i $P$. 
> 
> 

Hvis $P(r)= 0$, så går divisjonen $\frac{P(x)}{x-r}$ opp.    











