---
title: 📄 Eksempler
---
## Produktregelen


Under kommer noen eksempler der vi deriverer ved hjelp av produktregelen.
![[Kapittel 2 - derivasjon/defogteo/Teo Produktregelen|Teo Produktregelen]]


> [!abstract] Eksempel 
> Finn den deriverte til $\sin(x)\cdot x^2$.

> [!note]- Løsning 
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

> [!note]- Løsning 
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
> 
> *Kort versjon*
> 
> Bruker produktregelen, der første faktor sin derivert er ${\color{#e796f5} -\sin(x) }$ og andre faktor sin derivert er ${\color{#3cc15c} \cos(x) }$ og får
> $$
> \begin{aligned} 
> \frac{d}{dx} \cos(x)\sin(x) & = {\color{#e796f5} -\sin(x) }\sin(x) + \cos(x) {\color{#3cc15c} \cos(x) } \\ &= \cos^2(x)-\sin^2(x).
> \end{aligned} 
> $$



## Kvotientregelen


Under kommer noen eksempler der vi deriverer ved hjelp av kjerneregelen.
![[Kapittel 2 - derivasjon/defogteo/Teo Kvotientregelen|Teo Kvotientregelen]]

> [!abstract] Eksempel 
> Finn den deriverte til $\tan(x) = \frac{\sin(x)}{\cos(x)}$.


> [!note]- Løsning 
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

> [!note]- Løsning 
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
> \frac{d}{dx} \left( \frac{\sin(x)}{x^2} \right) = \frac{{\color{#f46f22} \cos(x) }{\color{#3cc15c} x^2 }-{\color{#e796f5} \sin(x) }  {\color{#5ca6f4} 2x }}{{ (x^4) }}
> $$
> 

## Kjerneregelen

^6f125b

Under kommer noen eksempler der vi deriverer ved hjelp av kjerneregelen.
![[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|Teo Kjerneregelen]] 



> [!abstract] Eksempel 1:  $\sin(\cos(x))$.
> Finn den deriverte til $\sin(\cos(x))$.


> [!note]- Løsning 
> Kjerneregelen sier at $({\color{#e796f5} f (}{\color{#3cc15c} g (x)}{\color{#e796f5} ) })' = {\color{#f46f22} g'(x) }\cdot {\color{#5ca6f4} f' }({\color{#3cc15c} g(x) })$
> 
> Ser at 
> 
> 1. ${\color{#3cc15c} g(x) = \cos(x) }$ er indre funksjon
> 2. ${\color{#f46f22} \frac{dg}{dx} = g'(x) = -\sin(x) }$
> 3. ${\color{#e796f5} f({\color{#3cc15c} g })= \sin({\color{#3cc15c} g }) }$ er ytre funksjon.  Deriverer vi $f$ med hensyn på $g$ får vi
> 4. ${\color{#5ca6f4} \frac{df}{d{\color{#3cc15c} g }} = f'({\color{#3cc15c} g }) = \cos({\color{#3cc15c} g }) }$
> 
> Kjerneregelen sier nå
> $$
> \begin{aligned} 
> (  {\color{#e796f5} \sin }({\color{#3cc15c} \cos(x) }))'  &= {\color{#5ca6f4} \frac{d}{dg}\sin({\color{#3cc15c} g }) } \cdot {\color{#f46f22} \frac{dg}{dx} } \\ &= {\color{#5ca6f4} \cos({\color{#3cc15c} g }) } {\color{#f46f22} (-\sin(x)) } \\ &= {\color{#f46f22} - }{\color{#5ca6f4} \cos }\big({\color{#40c057} \cos(x) }\big)\cdot {\color{#f46f22} \sin(x) }.
> \end{aligned} 
> $$
> 
> *Kort versjon:*
> Må bruke kjerneregel. Indre funksjon derivert er ${\color{#e796f5} -\sin(x) }$, ytre funksjon sin derivert er ${\color{#3cc15c} \cos(x) }$. Kjerneregelen gir da 
> $$
> \frac{d}{dx} \sin(\cos(x)) = {\color{#e796f5} -\sin(x) } \cdot {\color{#3cc15c} \cos }(\cos(x)).
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
> Ser at $g(x) = \cos(x^2)$. En sammensatt funksjoner $\longrightarrow$ [[Kapittel 2 - derivasjon/defogteo/Teo Kjerneregelen|kjerneregelen]]. 
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
> Fra [[#Kjerneregelen|eksemplene rundt kjernereglene]] har vi ${\color{#f46f22} f'(x) = -\cos(\cos(x))\cdot \sin(x) }$.
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










