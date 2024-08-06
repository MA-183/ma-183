## Hva er komplekse tall

Introduksjon av $i^2 = -1$.

## Hvordan legger vi sammen komplekse tall?

### Algebraisk

$(a+bi)+(c+di) = (a+c)+(b+d)i$

### Geometrisk

## Hvor stort er et komplekst tall? 

$|a+bi|  = \sqrt{a^2+b^2}$ fra Pytagoras.

## Hvordan multipliserer vi komplekse tall?

### Algebraisk

### Geometrisk

- Roter med vinkelen til tallet.
- Skaler med størrelsen til tallet. 

### Geometrien fører til trigonometrisk sammenheng

Vi ser at hvis vi tar to tall med størrelse $1$, så skrives de som $z = \cos(s)+i\sin(s)$ og $w = \cos(t)+i\sin(t)$.

![[../Files/Excalidraw/Komplekse tall .md]]
Da må multiplikasjon med begge tallene gi rotasjon med $s+t$. Det må være det samme som å multiplisere med tallet $\cos(s+t)+i\sin(s+t)$. Med andre ord

$$
\begin{align} 
  \cos(s+t)+i\sin(s+t) = z\cdot w & = (\cos(s)+i\sin(s))(\cos(t)+i\sin(t)) && \\
  &= (\cos(s)\cos(t)-\sin(s)\sin(t))+i(\cos(s)\sin(t)+\cos(t)\sin(s)).
\end{align} 
$$

Hvis dette skal være sant må

> **[Addisjonsformlene](Kapittel%200%20-%20innledende%20kapittel/0.2%20Trigonometri/Trigonometri.md#Identiteter)**
> $\cos(s+t) = \cos(s)\cos(t)-\sin(s)\sin(t)$
> og
> $\sin(s+t) = \cos(s)\sin(t)+\cos (t)\sin(s)$.

Nå som vi vet at dette er sant, så følger også 

