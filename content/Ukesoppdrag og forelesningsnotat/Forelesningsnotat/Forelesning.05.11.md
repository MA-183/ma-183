Husk NoA - Tavle her tinyurl.com/ma-183-05-11 \

Studenten skal kunne

- definere den _antideriverte_ 
- definere det _ubestemte integralet_ 
- finne det ubestemte integralet til kjente funksjoner
- kjenne til og bruke elementære integraler 
- gjengi og bruke teknikken _substitusjon_ 
- finne arealet begrenset av to kurver
- gjengi og bruke teknikken _delvis integrasjon_ 


AFT fortalte oss to ting

1. Hvordan finne derivert til en arealfunksjon.
2. Hvordan finne areal ved hjelp av antideriverte

![[Files/shapes at 24-11-05 14.24.40.svg]]

Hvor stort er arealet i grønt, mellom $f$ og $g$? Jo, det er differansen mellom $f$ og $g$. 

![[Files/shapes at 24-11-05 14.29.43.svg]]

![[Files/shapes at 24-11-05 14.32.55.svg]]

Arealet mellom to grafer $f$ og $g$ er alltid
$$
\int_a^b |f(x)-g(x)|dx
$$

I praksis når vi løser arealproblemer mellom grafer, løser vi de ofte slik
1. Finn skjæringspunktene.
2. Avgjøre hvor $f$ er størst og hvor $g$ er størst.
3. Splitt integralet i de bitene vi fant over. 


> [!question] Spørsmål 
> Hva er arealet av området mellom $y=x^2-2x$ og $y = 4-x^2$. 

![[Files/shapes at 24-11-05 14.58.46.svg]]



## Teknikker

AFT del 2 forteller oss at det er lurt å kunne gå baklengs i derivasjon. 

Vi har noen teknikker, kjerneregel, produktregel, kvotientregel. 

> [!question] Spørsmål 
> Hvordan kan vi bruke derivasjonsteorien vår til å hjelpe oss med integrasjon?

Vi begynner med noen definisjoner.

> [!info] Antiderivert
> En antiderivert til en funksjon $f$ på et intervall $I$ er en funksjon $F$ som oppfyller
> $$
> F'(x)=f(x)
> $$ 
> for alle $x$ i $I$. 

På side 152 så står det en del elementære antideriverte som vi bør kunne. (Det er ikke alle der vi MÅ kunne).

Hvor mange antideriverte finnes det egentlig til en funksjon $f$?

Teorem 13 i kapittel 2 gir oss følgende svar

> [!tip] Antideriverte funksjoner
> Hvis $f$ er en funksjon og $F$ er en antiderivert til $f$, da er *alle* antideriverte til $f$ på formen
> $$
> F(x)+C,
> $$ 
> der $C$ er en vilkårlig konstant. 

> [!info] Ubestemte integralet
> Det ubestemte integralet av en funksjon $f$ representerer samlingen av alle mulige antideriverte til $f$. Så, hvis $F$ er en antiderivert til $f$, så skriver vi det ubestemte integralet slik
> $$
> \int f(x)dx,
> $$ 
> og det er lik $F(x)+C$. 
>

## Substitusjon - rygging i kjerneregelen

Husk at kjerneregelen sier
$$
f(g(x))' = f'(g(x)) \cdot g'(x).
$$

For eksempel  hvis jeg har 
$$
f(g(x)) = \cos(e^x),
$$
der $g(x)= e^x$ og $f(x) = \cos(x)$.

Da sier kjerneregleen at

$$
f(g(x))' = -\sin(e^x) \cdot e^x
$$

Kan vi, når jeg sier at kjerneregelen er brukt, gjette noen antideriverte?

![[Files/shapes at 24-11-05 15.32.12.svg]]
![[Files/shapes at 24-11-05 15.41.49.svg]]


![[Files/shapes at 24-11-06 12.19.22.svg]]


## Fortsettelse fra tirsdag

Husk NoA - Tavle her tinyurl.com/ma-183-05-11 \

Studenten skal kunne

- definere den _antideriverte_ 
- definere det _ubestemte integralet_ 
- finne det ubestemte integralet til kjente funksjoner
- kjenne til og bruke elementære integraler 
- gjengi og bruke teknikken _substitusjon_ 
- finne arealet begrenset av to kurver
- gjengi og bruke teknikken _delvis integrasjon_ 



Mangler denne fra tirsdag:

$$
\int \frac{1}{\sqrt{e^{2x}-1}}dx
 $$

![[Files/shapes at 24-11-07 08.38.19.svg]]


Prøv å løse

$$
\int \tan(x) dx = \int \frac{\sin(x)}{\cos(x)}dx
$$
med substitusjonen $u=\cos(x)$ og $v = \sin(x)$.

## Delvis integrasjon - Bruke produktregelen "baklengs"

Vet at
$$
(u\cdot v)' =u'\cdot v + u\cdot v'.
$$
Hvis vi integrerer begge sider må det være likt:
$$
{\color{#5ca6f4} (u\cdot v)(x)=\int(u\cdot v)'(x) dx } = \int (u'\cdot v)(x)dx + \int (u\cdot v')(x) dx
$$
Hvis vi stokker om så får vi

$$
\int (u'\cdot v)(x) dx = (u\cdot v)(x) - \int (u \cdot v')(x)dx
$$

$$
\int {\color{#f46f22} u'(x) }\cdot{\color{#3cc15c}  v(x)  }dx = {\color{#e796f5} u(x) }{\color{#3cc15c}  v(x) } -  \int{\color{#e796f5}  u(x) } {\color{#5ca6f4} v'(x) }dx
$$
> [!abstract] Eksempel 
> Finn 
> $$
> \int x e^x dx
> $$


![[Files/shapes at 24-11-07 08.53.32.svg]]

> [!question] Spørsmål 
> dere IKKE regne nå. Vi vet nå at
> $$
> \int {\color{#f46f22} u'(x) }\cdot{\color{#3cc15c}  v(x)  }dx = {\color{#e796f5} u(x) }{\color{#3cc15c}  v(x) } -  \int{\color{#e796f5}  u(x) } {\color{#5ca6f4} v'(x) }dx.
> $$
> Hva er naturlige valg for $u'(x)$ og $v(x)$ hvis

1.
$$
\int x^2 e^x dx
$$
2.
$$
\int x^2 \sin(x)dx
$$
3.
$$
\int \ln(x)dx
$$
4.
$$
\int x \tan^{-1}(x)dx.
$$

PS: $\frac{d}{dx}\tan^{-1}(x)= \frac{1}{1+x^2}$

![[Files/shapes at 24-11-07 09.01.07.svg]]
![[Files/shapes at 24-11-07 09.19.51.svg]]
![[Files/shapes at 24-11-07 09.54.38.svg]]


![[Files/shapes at 24-11-07 09.41.55.svg]]


##  Delvis integrasjon der integranden gjentar seg

$$
\int \sin(x)e^x dx
$$
![[Files/shapes at 24-11-07 09.52.06.svg]]
Prøv selv på

$$
\int x \sin(x) e^x dx.
$$