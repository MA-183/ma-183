> [!tip] Den deriverte til $\sin(x)$ 
>   $\frac{d}{dx} \sin(x) = \cos(x)$


> [!note]- Argument 
> 
> Fra [[Kapittel 2 - derivasjon/8 Spesielle trigonometriske grenser|teorem 8 og 8.5]] har vi at ${\color{#e796f5} \frac{\cos(h)-1 }{h } }$ går mot $0$ og ${\color{#f46f22} \frac{\sin(h) }{h } }$ går begge mot $1$ når $h \longrightarrow 0$. vi kan nå bruke definisjonen av den deriverte og få
> $$
> \begin{aligned} 
> \frac{d}{dx} \sin(x) 
> = &\lim_{ h \longrightarrow  0} \frac{\sin(x+h)-\sin(x) }{h } \\
> \overset{\text{1.} }{=  }& \lim_{h\longrightarrow 0 }\frac{\sin(x)\cos(h) + \cos(x)\sin(h)-\sin(x) }{ h} \\
> \overset{ \text{faktoriserer} }{=  } &\lim_{h \longrightarrow  0 }  \frac{\sin (x)(\cos(h)-1)+\cos(x)\sin(h) }{h } \\
> \overset{ 2. }{=  } & \lim_{h\longrightarrow  0 } \sin(x)\cdot \lim_{h \longrightarrow  0 }{\color{#e796f5} \frac{\cos(h)-1 }{h } }  + \lim_{h \longrightarrow  0 }\cos(x)\cdot\lim_{h \longrightarrow  0   }{\color{#f46f22} \frac{\sin(h) }{h } } \\
> = & \sin (x)\cdot 0 + \cos(x)\cdot1 = \cos(x)
> \end{aligned} 
> $$
> 
> Der 1. er [[Kapittel 0 - innledende kapittel/defogteo/Teo Addisjonsformlene|addisjonsformlene for trigonometriske funksjoner]] og 2. bruker [[Kapittel 1 - grenser og kontinuitet/defogteo/Teo Grenseverdiregler|punkt 3. i grenseverdireglene]].

