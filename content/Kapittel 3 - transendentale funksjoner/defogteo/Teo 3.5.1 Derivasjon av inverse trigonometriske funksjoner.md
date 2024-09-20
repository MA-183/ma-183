> [!tip] Derivasjon av inverse trigonometriske funksjoner 
> 1. $\displaystyle\frac{d}{dx}\sin^{-1}(x) = \frac{d}{dx}\arcsin(x) = \frac{1 }{\sqrt{1-x^2} }.$
> 2. $\displaystyle \frac{d}{dx}\cos^{-1}(x)=- \frac{1 }{\sqrt{1-x^2} }$
> 3. $\frac{d}{dx}\tan^{-1}(x) = \frac{d}{dx}\arctan (x) = \frac{1 }{1+x^2 }$


> [!note]- Argument 
> 
> > [!abstract] 1
> > 
> > Vi vet hvordan vi skal [derivere inverse funksjoner](Kapittel%203%20-%20transendentale%20funksjoner/3.1.2%20Derivasjon%20av%20inverse%20funksjoner.md), noe som betyr at $\frac{d}{dx}\sin^{-1}(x) = \frac{1}{\cos(\sin^{-1}(x))}$. 
> > 
> > Det er derimot ikke helt åpenbart hva $\cos(\sin^{-1}(x))$ er ved første øyekast. Heldigvis har vi en sammenheng mellom $\cos(x)$ og $\sin(x)$, nemlig at $\cos^2(x)+\sin^2(x) = 1$, eller at $\cos(x) = \sqrt{1-\sin^2(x)}$. Nå ser vi at argumentet i uttrykket over er $\sin^{-1}(x)$ som gir at
> > $$
> > \frac{d}{dx}\sin^{-1}(x) = \frac{1}{\cos(\sin^{-1}(x))} = \frac{1 }{\sqrt{1-\sin^2(\sin^{-1}(x))}  } = \frac{1}{{\sqrt{1-x^2} } } 
> > $$
> 
> > [!abstract] 3
> > 
> > Vi at $\frac{d}{dx}\tan(x) = \frac{1}{\cos^2(x)}$ fra [slutten av dette notatet](Kapittel%202%20-%20derivasjon/2.5.3%20Derivasjon%20av%20andre%20trigonometriske%20funksjoner.md). Som i argumentet over får vi derfor at  
> > $$
> > \frac{d}{dx} \tan^{-1}(x) = \frac{1}{\frac{1}{\cos^2(\tan^{-1}(x))}}.
> > $$
> > Det kan virke naturlig å skrive dette som $\cos^2(\tan^{-1}(x))$, men vi må huske at vi ønsker å uttrykke $\cos (x)$ ved hjelp av $\tan (x)$ og vi gjør derfor følgende.
> > $$
> > \frac{1}{\frac{{\color{#f46f22} 1 }}{\cos^2(\tan^{-1}(x))}} = \frac{1 }{\frac{{\color{#f46f22} \cos^2(\tan^{-1}(x))+\sin^2(\tan^{-1}(x)) } }{\cos^2(\tan^{-1}(x)) }  }  = \frac{1 }{1+ \tan^2(\tan^{-1}(x))   } = \frac{1 }{1+x^2 }  
> > $$
> > og vi har resultatet vi ønsker. Merk at vi bruker [[Kapittel 0 - innledende kapittel/P.7.4 Viktige identiteter|sammenhengen]] $\cos^2(x)+\sin^2(x) =1$, markert i oransje.

