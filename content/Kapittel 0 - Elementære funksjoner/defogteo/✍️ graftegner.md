---
title: Kartesisk graftegner
---
<iframe src="Files\kartesiskgraftegner_animasjonmal.html" width="700" height="550" style="border:none;"></iframe>


### Syntax:

- `f(x) = Math.sin(x)`
    - Dette tilsvarer $\sin(x)$.
- `f(x) = Math.cos(x) + Math.sin(x)`
    - Dette tilsvarer $\cos(x) + \sin(x)$.
- `f(x) = Math.tan(x) + 2 * Math.cos(x)`
    - Dette tilsvarer $\tan(x) + 2\cos(x)$.
- `f(x) = Math.PI * x`
    - Dette tilsvarer $\pi\cdot x$.
- `f(x) = Math.E * Math.pow(x, 2)`
    - Dette tilsvarer $e \cdot x^2$
- `f(x) = Math.sin(x) / Math.PI`
    - Dette tilsvarer $\sin(x) \cdot \pi$
- `f(x) = Math.E * Math.sin(Math.PI * x)`
    - Dette tilsvarer $e \cdot \sin(\pi\cdot x)$.

### Dårlig Syntax:

- `f(x) = sin(x)` 
    - Dette prøver å være $\sin(x)$, men det bør stå `f(x) = Math.sin(x)`
- `f(x) = cos(x) * pi` 
    - Burde være `f(x) = Math.cos(x) * pi`
- `f(x) = e^x` 
    - Burde være `f(x) = Math.exp(x)`
- `f(x) = Math.tan + x`
    - Math.tan må ha input. Burde for eksempel være `f(x) = Math.tan(x) + x`
- `f(x) = Math.sin` 
    - Samme problem her. Må ha input, `f(x) = Math.sin(x)`.

