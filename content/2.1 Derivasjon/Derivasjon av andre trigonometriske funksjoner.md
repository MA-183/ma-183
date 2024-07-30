Mange av de andre trigonometriske funksjonene vi møter på, kan defineres ved hjelp av $\cos (x)$ og $\sin (x)$. Dermed kan vi nå derivere andre trigonometriske funksjoner. 

> [!info] Eksempel 
> 1. $\frac{d}{dx}\tan (x) = \frac{1}{\cos^2 (x)}$
> 2. $\frac{d}{dx}\frac{1}{\cos (x)} = \frac{\sin (x) }{\cos^2(x) }$

> [!check] 1

Vi skriver om $\tan (x)=\sin (x)\cdot(\cos (x))^{-1}$. Vi får nå

$$\begin{aligned} \frac{d}{dx} \tan (x) & = \sin (x)\cdot(-1)\cdot(-\sin (x))(-\cos (x))^{-2}+\cos (x)(\cos (x))^{-1}  \\ &= \frac{\sin^2(x)}{\cos^2(x)}+\frac{\cos^2(x) }{\cos^2(x) } \\ &= \frac{\sin^2(x)+\cos^2(x) }{\cos^2(x) } = \frac{1}{\cos^2(x)}. \end{aligned}$$ 

> [!check] 2

$$\begin{aligned}   \frac{d}{dx} \frac{1}{\cos (x)}   & = \frac{d}{dx} (\cos (x))^{-1} \\   &= -1\cdot(-\sin (x))(\cos (x))^{-2} \\   & = \frac{\sin (x) }{\cos^2(x) } \end{aligned} $$