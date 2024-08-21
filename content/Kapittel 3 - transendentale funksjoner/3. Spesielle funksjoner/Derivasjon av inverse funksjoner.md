---
{}
---
Anta at $f$ er deriverbar i et åpent interval $(a,b)$ og at enten $f'(x) > 0$ for $x$ i $(a,b)$ (slik at $f$ er [stigende](Kapittel%202%20-%20derivasjon/2.8.1%20Stigende%20og%20synkende%20funksjoner.md)). Eller, motsatt, at $f'(x) < 0$ for $x$ i $(a,b)$ (slik at $f$ er [synkende](Kapittel%202%20-%20derivasjon/2.8.1%20Stigende%20og%20synkende%20funksjoner.md)). I begge tilfellene er $f$ [en-til-en](Kapittel%203%20-%20transendentale%20funksjoner/3.%20Spesielle%20funksjoner/En-til-en%20funksjoner.md) fra [Teorem 12](Kapittel%202%20-%20derivasjon/2.8.1%20Stigende%20og%20synkende%20funksjoner.md), og har en invers $f^{-1}$. Vi kan derfor bruke [kjerneregelen](Kapittel%202%20-%20derivasjon/2.4.1%20Kjerneregelen.md) på [identiteten](Kapittel%203%20-%20transendentale%20funksjoner/3.%20Spesielle%20funksjoner/Inverse%20funksjoner.md) 
$$
f(f^{-1}(x)) = x
$$
Da får vi på venstre side at
$$\begin{aligned} \frac{d}{dx} ( f(f^{-1}(x))) & =  f'(f^{-1}(x)) \frac{d}{dx} f^{-1}(x)\end{aligned}$$
og på høyre side er $\frac{d}{dx} x= 1$. Det må bety at de deriverte er like, eller at
$$\begin{aligned} f'(f^{-1}(x)) \frac{d}{dx} f^{-1}(x) = 1  \end{aligned}$$
Løser vi for $\frac{d}{dx}f^{-1}(x)$ får vi

> [!tip] Derivasjon av en invers funksjon
> $$\begin{aligned} \frac{d}{dx} f^{-1}(x) = \frac{1 }{f'(f^{-1}(x)) }   \end{aligned}$$  

> [!info] Eksempel 
> La $f(x) = x^3+5$.
> 1. Vis at $f$ er inverterbar
> 2. Finn $f^{-1}(x)$ 
> 3. Finn $\frac{d}{dx}f^{-1}(x) = (f^{-1})'(x)$ ved å bruke egenskapene om derivasjon av inverse funksjoner over.  

> [!abstract] 1
> 

Vi må vise at hvis $x_1 \neq x_2$, så er ikke funksjonsverdiene like. Dette ser vi enkelt fordi at hvis vi $x_1 < x_2$ så må også $x_1^3 < x_2^3$. Tilsvarende kan vi legge til 5 på begge sider og få $f(x_1) = x_1^3+5 < x_2^3+5 = f(x_2)$.

> [!abstract] 2
> 
 
Dersom vi lar $y = x^3+5$ ønsker vi å løse for $x$. Det gir

$$\begin{aligned} y  &= x^3 +5 \\  y-5 & = x^3 \\ (y-5)^{1/3} &= x.  \end{aligned}$$

> [!abstract] 3
> 

 Vi vet at $f'(x) = 3x^2$, så 
 
 $$f'(f^{-1}(x)) = 3(f^{-1}(x))^2 = 3((x-5)^{1/3})^2 = 3(x-5)^{2/3}.$$
 
  Bruker vi nå 
  
 $$\begin{aligned} \frac{d}{dx} f^{-1}(x) = \frac{1 }{f'(f^{-1}(x)) }   \end{aligned}$$
   
 får vi
 
 $$\begin{aligned} \frac{d}{dx} f^{-1}(x) = \frac{1 }{3(x-5)^{2/3} }=\frac{1}{3}(x-5)^{-2/3},   \end{aligned}$$ 
 noe vi også kan bekrefte ved å derivere på normalt vis. 

Vi skal se at identiteten vi har funnet, blir mye mer nyttig når det ikke lenger er åpenbart hvordan vi kan derivere en inversfunksjon direkte. For eksempel [Derivasjon av inverse trigonometriske funksjoner](Kapittel%203%20-%20transendentale%20funksjoner/3.%20Spesielle%20funksjoner/Derivasjon%20av%20inverse%20trigonometriske%20funksjoner.md).