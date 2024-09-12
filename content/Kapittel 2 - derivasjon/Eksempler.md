## Produktregelen


Under kommer noen eksempler der vi deriverer ved hjelp av produktregelen.
![[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.4 Produktregelen#^a3c973|Teo 2.3.4 Produktregelen]]


> [!abstract] Eksempel 
> Finn den deriverte til $\sin(x)\cdot x^2$.

> [!note]+ Løsning 
> Produktregelen sier at 
> $$
> ({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' = {\color{#f46f22} f' }{\color{#3cc15c} g }+{\color{#e796f5} f }{\color{#5ca6f4} g' }.
> $$
> Her er 
> 
> 1. ${\color{#e796f5} f(x) = \sin(x) }$, så
> 2. ${\color{#f46f22} f'(x) = \cos(x) }$ og
> 3. ${\color{#3cc15c} g(x) = x^2 }$ så
> 4. ${\color{#5ca6f4} g'(x) = 2x }$.
> 
> Setter vi alt sammen får vi
> $$
> \begin{aligned} 
> ({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' &= {\color{#f46f22} \cos(x) }\cdot{\color{#3cc15c}  x^2  }+{\color{#e796f5}  \sin(x) }\cdot {\color{#5ca6f4} 2x }.
> \end{aligned} 
> $$



> [!abstract] Eksempel 
> Finn den deriverte til $\cos(x)\cdot \sin(x)$.

> [!note]+ Løsning 
> Produktregelen sier at 
> $$
> ({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' = {\color{#f46f22} f' }{\color{#3cc15c} g }+{\color{#e796f5} f }{\color{#5ca6f4} g' }.
> $$
> Her er 
> 
> 1. ${\color{#e796f5} f(x) = \cos(x) }$, så
> 2. ${\color{#f46f22} f'(x) = -\sin(x) }$ og
> 3. ${\color{#3cc15c} g(x) = \sin(x) }$ så
> 4. ${\color{#5ca6f4} g'(x) = \cos(x) }$.
>
> Setter vi sammen får vi
> $$
> \begin{aligned} 
> \frac{d}{dx} {\color{#e796f5} \cos(x) }{\color{#f46f22} \sin(x) } & = {\color{#e796f5} -\sin(x) }\cdot {\color{#3cc15c} \sin(x) } + {\color{#e796f5} \cos(x) }\cdot{\color{#f46f22} \cos(x) } \\ &= \cos^2(x) -\sin^2(x).
> \end{aligned} 
> $$



## Kvotientregelen


Under kommer noen eksempler der vi deriverer ved hjelp av kjerneregelen.
![[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.3.5 Kvotientregelen#^c86ab1|Teo 2.3.5 Kvotientregelen]]

> [!abstract] Eksempel 
> Finn den deriverte til $\tan(x) = \frac{\sin(x)}{\cos(x)}$.


> [!note]+ Løsning 
> 
> Vi bruker at $\tan (x)$ er $\frac{{\color{#e796f5} \sin(x) }}{{\color{#3cc15c} \cos(x) }}$. 
> Kvotientregelen sier 
> 
> $$
> \left( \frac{{\color{#e796f5} f }}{{\color{#3cc15c} g }} \right)' =\frac{{\color{#f46f22} f' }{\color{#3cc15c} g }-{\color{#e796f5} f }{\color{#5ca6f4} g' }}{{\color{#3cc15c} g }^2}.
> $$ 
> 
> Her er 
> 
> 1. ${\color{#e796f5} f(x) = \sin(x) }$
> 2. ${\color{#f46f22} f'(x) = \cos(x) }$
> 3. ${\color{#3cc15c} g(x) = \cos(x) }$
> 4. ${\color{#5ca6f4} g'(x) = -\sin(x) }$
> 
> Setter vi alt sammen får vi
> $$
> \begin{aligned} \frac{d}{dx} \tan (x) & = \frac{{\color{#f46f22} \cos(x) }\cdot{\color{#3cc15c} \cos(x) }- {\color{#e796f5} \sin(x) }\cdot {\color{#5ca6f4} (-\sin(x)) }}{{\color{#3cc15c} \cos^2(x) }}  \\ &= \frac{\cos^2(x)+\sin^2(x)}{\cos^2(x)}  = 1 + \left( \frac{\sin(x)}{\cos(x)} \right)^2 = 1+\tan^2(x) \\ &= {\color{grey} \frac{1}{\cos^2(x)} }\end{aligned}.
> $$ 
> Merk at den siste likheten får vi ved å bruke at $\sin^2(x)+\cos^2(x) = 1$. Både $1+\tan^2(x)$ og $\frac{1}{\cos^2(x)}$ er måter å skrive den deriverte til $\tan(x)$.



> [!abstract] Eksempel 
> Finn den deriverte til $\frac{\sin(x)}{x^2}$.

> [!note]+ Løsning 
> 
> Kvotientregelen sier 
> 
> $$
> \left( \frac{{\color{#e796f5} f }}{{\color{#3cc15c} g }} \right)' =\frac{{\color{#f46f22} f' }{\color{#3cc15c} g }-{\color{#e796f5} f }{\color{#5ca6f4} g' }}{{\color{#3cc15c} g }^2}.
> $$ 
> 
> Her er 
> 
> 1. ${\color{#e796f5} f(x) = \sin(x) }$ og 
> 2. ${\color{#3cc15c} g(x) = x^2 }$. 
>  
> Det gir at
> 
> 3.  ${\color{#f46f22} f'(x) = \cos(x) }$ og
> 4. ${\color{#5ca6f4} g'(x) = 2x }$. 
> 
> Sett alt sammen og få
> $$
> \frac{d}{dx} \left( \frac{\sin(x)}{x^2} \right) = \frac{{\color{#f46f22} \cos(x) }{\color{#3cc15c} x^2 }-{\color{#e796f5} \sin(x) }  {\color{#5ca6f4} 2x }}{{\color{#3cc15c} (x^2) }^2}
> $$
> med litt forenkling får vi
> $$
> \frac{d}{dx} \left( \frac{\sin(x)}{x^2} \right) = \frac{{\color{#f46f22} \cos(x) }{\color{#3cc15c} x^2 }-{\color{#e796f5} \sin(x) }  {\color{#5ca6f4} 2x }}{{\color{} (x^4) }}
> $$
> 

## Kjerneregelen

Under kommer noen eksempler der vi deriverer ved hjelp av kjerneregelen.
![[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.4.6 Kjerneregelen#^ad9861|Teo 2.4.6 Kjerneregelen]]



> [!abstract] Eksempel  $\sin(\cos(x))$.
> Finn den deriverte til $\sin(\cos(x))$.

^714a02

> [!note]+ Løsning 
> Kjerneregelen sier at $({\color{#e796f5} f (}{\color{#3cc15c} g (x)}{\color{#e796f5} ) })' = {\color{#f46f22} g'(x) }\cdot {\color{#5ca6f4} f' }({\color{#3cc15c} g(x) })$
> 
> Ser at 
> 
> 1. ${\color{#3cc15c} g(x) = \cos(x) }$ er indre funksjon
> 2. ${\color{#f46f22} g'(x) = -\sin(x) }$
> 3. ${\color{#e796f5} f(g)= \sin(g) }$ er ytre funksjon.  Deriverer vi $f$ med hensyn på $g$ får vi
> 4. $f'(g) = \cos(g)$
>  
> 
> 
> Vi lar $u = \cos(x) \longrightarrow  {\color{#f46f22} \frac{du}{dx} = -\sin(x) }$
> 
> Nå kan vi derivere ytre funksjon $\sin(u)$ med hensyn på $u$. Det gir
> 
> $$
> {\color{#5ca6f4} \frac{d}{du}\sin(u) = \cos(u) }
> $$
> 
> Kjerneregelen sier nå
> $$
> \begin{aligned} 
> (  \sin(\cos(x)))'  &= {\color{#5ca6f4} \frac{d}{du}\sin(u) } \cdot {\color{#f46f22} \frac{du}{dx} } \\ &= {\color{#5ca6f4} \cos(u) } {\color{#f46f22} (-\sin(x)) } \\ &= -\cos\big(\cos(x)\big)\cdot \sin(x).
> \end{aligned} 
> $$


## Kombinasjoner

Under kommer noen eksempler som kombinerer derivasjonsreglene for å komme derivere. 

> [!abstract] Eksempel 
> Finn den deriverte til $\sin(x)\cdot \cos(x^2)$

> [!note]- Løsning 
> 
> Produktregel sier $({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' = {\color{#f46f22} f' }{\color{#3cc15c} g } + {\color{#e796f5} f }{\color{#5ca6f4} g' }$
> 
> Her er 
> 1. ${\color{#e796f5} f(x) = \sin(x) }$   og dermed ${\color{#f46f22} f'(x) = \cos(x) }$ og
> 2. ${\color{#3cc15c} g(x) = \cos(x^2) }$. 
> 
> Ser at $g(x) = \cos(x^2)$. En sammensatt funksjoner $\longrightarrow$ [[Kapittel 2 - derivasjon/Definisjoner og teoremer/Teo 2.4.6 Kjerneregelen|kjerneregelen]]. 
> 
> La $u = x^2$ og $\frac{du}{dx} = 2x$, da står det $g(u) = \cos(u)$ så
> $$
> \frac{d}{dx} g = \frac{dg}{du} \cdot \frac{du}{dx}
> $$
> da får vi
> $$
> {\color{#5ca6f4} \frac{d}{dx} g = -\sin(u) \cdot 2x =-2x\sin(x^2) }.
> $$
> Setter vi alt sammen får vi nå
> $$
> \frac{d}{dx} \sin(x) \cos(x^2) = {\color{#f46f22} \cos(x) } {\color{#3cc15c} \cos(x^2) } + {\color{#e796f5} \sin(x) } \cdot{\color{#5ca6f4}  (-2x\sin(x^2)) }.
> $$



> [!abstract] Eksempel 
> Finn $\sin(\cos(x)) \cdot \cos(x^3)$.

> [!note]- Løsning 
> 
> Hvis ${\color{#e796f5} f(x) =\sin(\cos(x)) }$ og ${\color{#3cc15c} g(x) =\cos(x^3) }$ sier produktregelen at
> 
> $$
> ({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' = {\color{#f46f22} f' }{\color{#3cc15c} g } + {\color{#e796f5} f }{\color{#5ca6f4} g' }.
> $$
> 
> Fra [[#^714a02|et av de tidligere eksemplene om kjerneregelen]] er ${\color{#f46f22} f'(x) = -\cos(\cos(x))\cdot \sin(x) }$.
> 
> Bruker vi kjerneregel på $\cos(x^3)$ ser vi at kjernen derivert er $3x^2$, og $\cos(x)$ derivert er $-\sin(x)$ så vi får
> $$
> {\color{#5ca6f4} g'(x) = 3x^2(-\sin(x^3)) =-3x^2\sin(x^3)}.
> $$
> 
> Nå setter vi alt sammen og får
> $$
> \begin{aligned} 
>   ({\color{#e796f5} f }\cdot {\color{#3cc15c} g })' & = {\color{#f46f22} f' }{\color{#3cc15c} g } + {\color{#e796f5} f }{\color{#5ca6f4} g' } \\  &= {\color{#f46f22}  -\cos(\cos(x))\cdot \sin(x) } {\color{#3cc15c} \cos(x^3) } + {\color{#e796f5} \sin(\cos(x)) }\cdot{\color{#5ca6f4} (-3x^2\sin(x^3)) }
>   \end{aligned} 
>   $$










