> [!warning] HUSK NOA - Tavla finnes her https://tinyurl.com/ma183-15-10


Matematisk kveld på onsdag!
[https://forms.office.com/e/93y8MFmYQA](https://forms.office.com/e/93y8MFmYQA)


## Læringsmål

Studenten skal kunne
-  $\Sigma$-*notasjon* for summer 
-  summasjonsformler
- Riemannsummer
- det bestemte integralet
- det ubestemte integralet
- gjennomsnittsverdien til en funksjon
- stykkvis kontinuerlige funksjoner
-  _analysens fundamentalteorem_ 

![[Files/Forelesning.15.10.24.png]]




![[Files/Forelesning.15.10.24-1.png]]



## Sigmanotasjon /summeringsnotasjon


![[Files/shapes at 24-10-15 14.36.34.svg]]


> [!info] Definisjon: Sigmanotasjon
> Hvis $m$ og $n$ er heltall $m\leq n$ og $f$ er en funksjon definert på alle $m$ $m+1$, $m+2$, ..., $n$.  Da skal
> $$
> \sum_{i=m}^{n} f(i)
> $$ 
> være notasjonen som står for summen
> $$
> f(m)+f(m+1)+f(m+2)+\ldots+f(n).
> $$
>


> [!abstract] Eksempel 
> Utvid
> 1. $$\sum_{i=1}^{7}i^2$$
> 3. $$\sum_{i=1}^{n}(i^2+2)$$
> 4. $$\sum_{i=-2}^{2}i$$

![[Files/shapes at 24-10-15 14.50.07.svg]]

Skriv med sigmanotasjon
$$
2+ 4 + 8 + \ldots + 32 
$$


$$
\sum_{i=1}^{5}2^i = 2^1+2^2+2^3+2^4+2^5 = 2+4+8+16+32.
$$

$$
\begin{aligned} 
\sum_{i=1}^{6}i(i-1)+2 & = (1\cdot0+2)+ (2\cdot1)+2 +(3\cdot2 + 2) + \ldots + 32 \\ &= 2+4+8+14+22+32 \neq 2+4+8+16+32
\end{aligned} 
$$


Trekanttallene:

$$
\sum_{i}^{n}i = 1+2+3+4+\ldots+n = S_n
$$
![[Files/shapes at 24-10-15 15.18.28.svg]]




Den geometriske rekka:

![[Files/shapes at 24-10-15 15.26.46.svg]]





## Ideen med å summere rektangler - Riemannsummer

Ideen er

1. Dele intervallet i *partisjoner*
2. Velge *høyde* til rektanglene
3. *Summere alt*

### 1 Partisjoner

La $P$ være en endelig mengde med punkter, sortert i stigende rekkefølge fra $a$ til $b$. Det vil si

$$
P = \{x_0, x_1, x_2,\ldots, x_{n-1}, x_n\}
$$
der $a = x_0 < x_1 < x_2< \ldots < x_n = b$. Da kaller vi $P$ en partisjon av $[a,b]$.

## 2. Velg høyde

> [!question] Spørsmål 
> Hvilken høyde kan vi velge?

1. Midtpunktet
2. Velge tilfeldig
3. **Velge minimumspunkt** 
4. **Velge maksimumspunkt**
5. Startpunkt
6. Sluttpunkt

Vi skal nå anta at $f$ er kontinuerlig. Fordi vi da får makspunkt og min-punkt. 


### 3. Summere alt

![[Files/shapes at 24-10-15 15.59.32.svg]]




## 17.10.24 

> [!warning] HUSK NOA - Tavla finnes her https://tinyurl.com/ma183-15-10

Generelle Riemannsummer, står om på side 305. 

Merk at vi kan ha "negativt areal" med måten vi definerer Riemansummer. 

![[Files/shapes at 24-10-17 08.25.22.svg]]




> [!info] Det bestemte integralet
> La $f$ være en funksjon. Anta at det finnes nøyaktig ETT tall $I$ slik at uansett partisjon $P$ på $[a,b]$ så har vi at 
> $$
> L(f,P) \leq I \leq U(f,P).
> $$ 
> Da sier vi at $f$ er *integrerbar* på $[a,b]$, og vi sier at $I$ er det bestemte integralet til $f$ på $[a,b]$. Det noterer vi slik
> $$
> \int_{a}^{b}f(x)dx
> $$
>

1. $\int$ er integraltegner. ligner på en S som i sum. $\Sigma$ er hakkete (endelig sum), $\int$ er glatt (grense av sum). 
2. $a$ er nedre grense, $b$ er øvre grense. 
3. $f$ kalles integrand, vi sier at vi integrer over $x$ når vi skriver $f(x)dx$
4. $dx$ er differensialen til $x$. Den erstatter $\Delta_x$ i Riemansummene.

> [!warning] Merk 
> Å endre $x$ med en annen variabel endrer ingenting i det bestemte integralet. Med andre ord er
> $$
> \int_{a}^{b}f(x)dx = \int_{a}^{b}f(t)dt.
> $$
> Det bestemte integralet er et tall, **ikke** en funksjon. 


> [!tip] Resultat
> Hvis $f$ er kontinuerlig, så er $f$ integrerbar.  


> [!tip] Analysens fundamentalteorem, AFT. 
> Anta at $f$ er kontinuerlig på et intervall $I$ som inneholder et punkt $a$. 
> **Del 1**
> La $F$ være definert på $I$ ved at
> $$
> F(x) = \int_{a}^{x}f(t)dt.
> $$  
> Da er $F$ deriverbar på $I$ og $F'(x) = f(x)$. Dermed er $F$ en antiderivert til $f$ på $I$. Det betyr
> $$
> F'(x) =\frac{d}{dx} \left( \int_{a}^{x}f(t)dt \right) = f(x). 
> $$
> **Del 2**
> Hvis $G(x)$ er *en hvilken som helst* antiderivert til $f$ på $I$, slik at $G'(x) = f(x)$ på $I$, da har vi at for alle $b$ i $I$ så er 
> $$
> \int_{a}^{b}f(x)dx = G(b)-G(a). 
> $$


![[Files/shapes at 24-10-17 08.53.15.svg]]

> [!warning] Oppgave 
>   Bruk AFT *del 2* til å beregne integralene
>    $$
> \int_{0}^{\pi}\cos(x)dx.
> $$
> og
> $$
> \int_{1}^{e} \frac{1}{t} dt
> $$
> og
> $$
> \int_{1}^{5}(x^3+1)dx.
> $$
  
![[Files/shapes at 24-10-17 09.01.30.svg]]

> [!warning] Oppgave 
> Brukt AFT del 1 til å finne $F'(x)$ når
> $F(x) = \int_{a}^{x}(t^2+3)dt$.
> og
> $F(x) = \int_{x}^{5} 3t \cos(t)dt$
> og
> $F(x) = \int_{1}^{x^2}\sin(t)dt$.
> 




![[Files/shapes at 24-10-17 13.34.12.svg]]




[Bevis for AFT](https://ma-183.github.io/MA-183/kapittel-5---integrasjon/defogteo/%F0%9F%92%A1-analysens-fundamentalteorem)
























 