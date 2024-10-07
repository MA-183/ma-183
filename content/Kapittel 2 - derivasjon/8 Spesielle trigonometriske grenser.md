---
title: 📄 Spesielle trigonometriske grenser
---
Et resultat som mest sannsynlig virker åpenbart, er at de trigonometriske funksjonene er kontinuerlige.

![[Kapittel 2 - derivasjon/defogteo/Teo Sinus og cosinus er kontinuerlig|Teo Sinus og cosinus er kontinuerlig]]

Selv om det virker opplagt, er det også viktig at vi argumenterer for det. Hvordan vi skal gjøre det, er ikke like åpenbart som resultatet

Siden [[Kapittel 2 - derivasjon/3 Deriverbarhet impliserer kontinuitet|deriverbarhet impliserer kontinuitet]] kan vi vise at $\sin$ og $\cos$ er deriverbare og konkludere med resultatet over og på denne måten slå to fluer i en smekk. For å vise at de er deriverbare begynner vi med noen spesielle grenser. 

Først viser vi at $\cos$ er kontinuerlig i $0$.

![[Kapittel 2 - derivasjon/defogteo/Teo Sin og cos er kontinuerlig i 0|Teo Sin og cos er kontinuerlig i 0]]

Nå som vi har kontroll på hva som skjer rundt 0 skal vi se på en siste spesiell grense. Argumentet er nokså likt, men krever en litt annen vinkling. 

> [!tip] Teorem 8 
>   $\displaystyle \lim_{\theta \longrightarrow 0 }\frac{\sin(\theta) }{\theta } = 1$, der $\theta$ er i radianer. 

> [!note]- Argument 
> 
> La $0 <\theta < \frac{\pi}{2}$, og merk at sirkelsektoren som $\theta$ lager kan vises slik som vist på figuren under (blått + grønt areal). Vi kan nå sammenligne arealene og få.
> ![](Files/shapes%20at%2024-07-30%2012.09.00.svg)
> 
> Det er altså tydelig at
> $$
> \begin{aligned} 
>   \sin (\theta) < \theta < \frac{\sin(\theta) }{\cos(\theta) }.
> \end{aligned} 
> $$
> Deler vi på $\sin(\theta)$ får vi
> $$
> 1 < \frac{\theta }{\sin(\theta) } < \frac{1}{\cos(\theta)}.
> $$
> Siden $1 < \frac{\theta}{\sin(\theta)}$ kan vi gange gjennom med $\frac{\sin(\theta)}{\theta}$ og få at $\frac{\sin(\theta)}{\theta}< 1$. Videre kan vi gange gjennom med $\frac{\cos(\theta)\sin(\theta)}{\theta}$ i ulikheten $\frac{\theta }{\sin(\theta) } < \frac{1}{\cos(\theta)}$ og få at $\cos(\theta)< \frac{\sin(\theta) }{\theta }$. Setter vi dette sammen igjen får vi at
> $$
> \cos(\theta) < \frac{\sin(\theta)}{\theta} < 1.
> $$
> Det kan være verdt å merke seg at det vi gjorde her var i praksis å bare snu brøkene og ulikhetstegnene, noe vi alltid bare kan gjøre. Men over er argumentet for hvorfor det fungerer. 
> 
> Vi vet nå at $\cos(\theta) \longrightarrow 1$ når $\theta \longrightarrow 0+$. Dermed [skvises](Kapittel%201%20-%20grenser%20og%20kontinuitet/defogteo/Teo%20Skviseteoremet.md) $\frac{\sin(\theta)}{\theta}$ opp til $1$ når $\theta \longrightarrow 0+$. Nå gjenstår det bare å merke seg at dersom vi ser på grensen nedenfra, så får vi
> $$
> \begin{aligned} 
>  \lim_{\theta \longrightarrow  0- }\frac{\sin(\theta) }{\theta } 
> & = \lim_{\theta \longrightarrow  0+ } \frac{\sin(-\theta) }{-\theta } \\
> & = \lim_{\theta \longrightarrow  0+ } \frac{-\sin (\theta) }{-\theta }  \\
> & =  \lim_{\theta \longrightarrow  0+ } \frac{\sin (\theta) }{\theta } =1. 
> \end{aligned} 
> $$
> Dermed følger resultatet. 

Noe som faller rett ut av grensen over er følgende:

> [!tip] Teorem 8.5
> $$\begin{aligned} \lim_{h \longrightarrow 0 } \frac{\cos(h) - 1 }{h } = 0  \end{aligned}$$  

> [!note]- Argument 
>
>Vi [[Kapittel 0 - innledende kapittel/5.4 Viktige trigonometriske identiteter|bruker]] at $\cos^2(t)+\sin^2(t) = 1$ og utvider brøken med $\cos(h)+1$. Da omformes det slik som i neste ledd under: 
>
>$$
>\begin{aligned} \lim_{h \longrightarrow  0  } \frac{\cos(h)-1 }{h } &= \lim_{h \longrightarrow  0  } \frac{(\cos(h)-1 )}{h } \frac{(\cos(h)+1)}{(\cos(h)+1)} \\ & =\lim_{h\longrightarrow  0}\frac{\cos^2(h)-1}{h}\cdot \frac{1}{\cos(h)+1}\\ & = \lim_{h\longrightarrow  0} \frac{\sin^2(h)}{h} \\ &= \lim_{h\longrightarrow  0}{\color{#40c057}  \frac{\sin(h)}{h} } \cdot{\color{#e599f7}  \frac{\sin(h)}{\cos(h)+1}  } \\ &=   {\color{#40c057} 1 } \cdot {\color{#e599f7} \frac{0}{1+1}  =0}\end{aligned}
>$$
>
>Merk at når vi evaluerer grensen bruker vi at dette er et produkt av to grenser som eksisterer og fra [[Kapittel 1 - grenser og kontinuitet/defogteo/Teo Grenseverdiregler|punkt 3 her]] vet vi grensen er produktet av grensene. 

Nå som vi har alle våre spesielle grenser på plass kan vi gå løs på målet vårt, å vise at $\cos$ og $\sin$ er [[Kapittel 2 - derivasjon/9 Sinus og cosinus derivert|deriverbare]] og følgelig også kontinuerlige.