---
draft: "true"
---

> [!tip] Derivasjon av inverse trigonometriske funksjoner 
> 1. $\displaystyle\frac{d}{dx}\sin^{-1}(x) = \frac{d}{dx}\arcsin(x) = \frac{1 }{\sqrt{1-x^2} }.$
> 2. $\displaystyle \frac{d}{dx}\cos^{-1}(x)=- \frac{1 }{\sqrt{1-x^2} }$
> 3. $\frac{d}{dx}\tan^{-1}(x) = \frac{d}{dx}\arctan (x) = \frac{1 }{1+x^2 }$

> [!note] Argument 
> 

> [!abstract]  1
> 

Vi vet hvordan vi skal [derivere inverse funksjoner](Kapittel%203%20-%20transendentale%20funksjoner/3.%20Spesielle%20funksjoner/Derivasjon%20av%20inverse%20funksjoner.md), noe som betyr at $\frac{d}{dx}\sin^{-1}(x) = \frac{1}{\cos(\sin^{-1}(x))}$. Det er derimot ikke helt åpenbart hva $\cos(\sin^{-1}(x))$ er ved første øyekast. Heldigvis har vi en sammenheng mellom $\cos(x)$ og $\sin(x)$, nemlig at $\cos^2(x)+\sin^2(x) = 1$, eller at $\cos(x) = \sqrt{1-\sin^2(x)}$. Nå ser vi at argumentet i uttrykket over er $\sin^{-1}(x)$ som gir at
$$
\frac{d}{dx}\sin^{-1}(x) = \frac{1}{\cos(\sin^{-1}(x))} = \frac{1 }{\sqrt{1-\sin^2(\sin^{-1}(x))}  } = \frac{1}{{\sqrt{1-x^2} } } 
$$

> [!abstract]  2
> 

Vi at $\frac{d}{dx}\tan(x) = \frac{1}{\cos^2(x)}$ fra [slutten av dette notatet](Kapittel%202%20-%20derivasjon/2.5.3%20Derivasjon%20av%20andre%20trigonometriske%20funksjoner.md). Som i argumentet over får vi derfor at  
$$
\frac{d}{dx} \tan^{-1}(x) = \frac{1}{\frac{1}{\cos^2(\tan^{-1}(x))}}.
$$
Det kan virke naturlig å skrive dette som $\cos^2(\tan^{-1}(x))$, men vi må huske at vi ønsker å uttrykke $\cos (x)$ ved hjelp av $\tan (x)$ og vi gjør derfor følgende.
$$ \frac{1}{\frac{1}{\cos^2(\tan^{-1}(x))}} = \frac{1 }{\frac{\cos^2(\tan^{-1}(x))+\sin^2(\tan^{-1}(x)) }{\cos^2(\tan^{-1}(x)) }  }  = \frac{1 }{1+ \tan^2(\tan^{-1}(x))   } = \frac{1 }{1+x^2 }  $$og vi har resultatet vi ønsker. Merk at vi bruker [sammenhengen](Kapittel%200%20-%20innledende%20kapittel/P.7.4%20Viktige%20identiteter.md) $\cos^2(x)+\sin^2(x) =1$ som dere  


> [!tip] Viktige antideriverte
> Nå som vi kan derivere de inverse trigonometriske funksjonene. Kan vi også finne noen viktige antideriverte.
> 1. $\int \frac{1 }{\sqrt{a^2-x^2} } \, dx = \sin^{-1} = \sin^{-1}\left( \frac{x}{a} \right) + C$.
> 2. $\int\frac{dx }{a^2+x^2 }\, dx = \frac{1}{a}\tan^{-1}\left( \frac{x}{a} \right)+ C$


> [!note] Argument 
> 

Vi kan enkelt argumentere for disse identitetene ved å bruke de deriverte sammen med kjerneregelen.

> [!abstract]  1

Vi deriverer og bruker [kjerneregelen](Kapittel%202%20-%20derivasjon/2.4.1%20Kjerneregelen.md) på $\sin^{-1}\left( \frac{x}{a} \right)$. Da får vi 
$$ \frac{d}{dx} \sin^{-1}\left( \frac{x}{a} \right)= \frac{1}{a}\cdot \frac{1}{\sqrt{1-\left( \frac{x}{a} \right)^2} } = \frac{1 }{\sqrt{a^2-a\cdot\left( \frac{x}{a} \right)^2}  }  = \frac{1 }{\sqrt{a^2-x^2}  }. $$


> [!abstract]  2
> 

Vi gjør det samme som i 1. og får
$$ \frac{d}{dx} \frac{1}{a} \tan^{-1}\left( \frac{x}{a} \right)=\frac{1}{a} \cdot\frac{1}{a}\cdot \frac{1}{1+\frac{x^2}{a^2}} = \frac{1}{a^2+x^2}. $$
 
