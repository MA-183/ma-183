
> [!tip] Teorem 7
> Funksjonen $\sin(\theta)$ og $\cos(\theta)$ er kontinuerlig i alle punkter $\theta$, spesielt har vi at
> $$\begin{aligned} \lim_{\theta \longrightarrow  0 } \sin(\theta) = 0 \text{ og } \lim_{\theta \longrightarrow 0 } \cos(\theta) = 1  \end{aligned}$$  

> [!tip] Teorem 8 
>   $\displaystyle \lim_{\theta \longrightarrow 0 }\frac{\sin(\theta) }{\theta } = 1$, der $\theta$ er i radianer. 

> [!note] Argument 
> 

La $0 <\theta < \frac{\pi}{2}$, og merk at sirkelsektoren som $\theta$ lager kan vises slik som vist på figuren under (blått + grønt areal). Vi kan nå sammenligne arealene og få.
![](Files/shapes%20at%2024-07-30%2012.09.00.svg)

Det er altså tydelig at
$$
\begin{aligned} 
  \sin (\theta) < \theta < \frac{\sin(\theta) }{\cos(\theta) }.
\end{aligned} 
$$
Deler vi på $\sin(\theta)$ får vi
$$
1 < \frac{\theta }{\sin(\theta) } < \frac{1}{\cos(\theta)}.
$$
Siden $1 < \frac{\theta}{\sin(\theta)}$ kan vi gange gjennom med $\frac{\sin(\theta)}{\theta}$ og få at $\frac{\sin(\theta)}{\theta}< 1$. Videre kan vi gange gjennom med $\frac{\cos(\theta)\sin(\theta)}{\theta}$ i ulikheten $\frac{\theta }{\sin(\theta) } < \frac{1}{\cos(\theta)}$ og få at $\cos(\theta)< \frac{\sin(\theta) }{\theta }$. Setter vi dette sammen igjen får vi at
$$
\cos(\theta) < \frac{\sin(\theta)}{\theta} < 1.
$$
Det kan være verdt å merke seg at det vi gjorde her var i praksis å bare snu brøkene og ulikhetstegnene, noe vi alltid bare kan gjøre. Men over er et argument for hvorfor det fungerer. 

Vi vet nå at $\cos(\theta) \longrightarrow 1$ når $\theta \longrightarrow 0+$. Dermed [skvises](Kapittel%201%20-%20grenser%20og%20kontinuitet/1.1%20Grenser/Skviseteoremet.md) $\frac{\sin(\theta)}{\theta}$ opp til $1$ når $\theta \longrightarrow 0+$. Nå gjenstår det bare å merke seg at dersom vi ser på grensen nedenfra, så får vi
$$
\begin{aligned} 
  \lim_{\theta \longrightarrow  0- }\frac{\sin(\theta) }{\theta } 
  & = \lim_{\theta \longrightarrow  0+ } \frac{\sin(-\theta) }{-\theta } \\
  & = \lim_{\theta \longrightarrow  0+ } \frac{-\sin (\theta) }{-\theta }  \\
  & =  \lim_{\theta \longrightarrow  0+ } \frac{\sin (\theta) }{\theta } =1. 
\end{aligned} 
$$
Dermed følger resultatet. 

> [!tip] Teorem 8.5
> $$\begin{aligned} \lim_{h \longrightarrow 0 } \frac{\cos(h) - 1 }{h } = 0  \end{aligned}$$  

> [!note] Argument 
> 

Fra [Halvvinkel formler](Kapittel%200%20-%20innledende%20kapittel/0.2%20Trigonometri/Halvvinkel%20formler.md) får vi

$$\begin{aligned} \lim_{h \longrightarrow  0  } \frac{\cos(h)-1 }{h }  &= \lim_{ h \longrightarrow  0 }  - \frac{2\sin^2\left( \frac{h}{2} \right) }{h } & \text{ la } \theta = \frac{h}{2} \\ &=- \lim_{\theta \longrightarrow  0 } \frac{\sin\theta }{\theta } \theta = -(1)\cdot 0 = 0. \end{aligned}$$ 