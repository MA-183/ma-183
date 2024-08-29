---
{}
---
Hva er en funksjon? Funksjoner er noe vi alle kjenner til, fra forskjellige kontekster.

Fra matematikken:

- Funksjonsuttrykk
    - $f(x) = x-1$
    - $g(x) = x^2$
    - $y = 3+x^3$
- Graf 

![400](Files/grafer%204.svg)

Fra programmering

```python {pre}
def f(x):
    return x-1
def g(x):
    return x*x
```

Fra situasjoner.
- Funksjonen $g$ beskriver (for positive verdier) arealet av et kvadrat med sidelengde $x$. Arealet er da $x\cdot x$. 

Det viktige vi skal ta ut fra eksemplene over er at funksjoner fungerer som en regel som vet hva den skal gjøre. Vi kan visualisere funksjoner som noe som sendes inn til en regel $f$, der $f$ sender noe entydig ut, $f(x)$. Det kan vi visualisere som figuren under.
 
![500](Files/funksjoner.svg)
![[Definisjoner og teoremer/P-kapitlene/Def P.4.1 Funksjon|Def P.4.1 Funksjon]]

En viktig konvensjon er den følgende konvensjonen (en konvensjon er en anerkjent *regel / retningslinje* i matematikkmiljøet).

> [!info] Definisjon 1.5
> Definisjonsmengde er alltid størst mulig hvis ingenting annet er sagt.
> I Kalkulus 1 jobber vi med reelle funksjoner. Det vil si $D(f)$ er alltid i $\mathbb{R}$, og $V(f)$ er i $\mathbb{R}$. 
>  

Nå som vi har definert funksjoner kan vi se på hvordan vi kan lage nye funksjoner ved hjelp av [[Kapittel 0 - innledende kapittel/P.5.1 De fire regneartene|P.5.1 De fire regneartene]].