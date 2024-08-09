---
draft: "true"
---

# Komplekse tall

```python {pre}
import pandas as pd
import math as math
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# Create a figure and an axis
fig, ax = plt.subplots(figsize=(6,6))

# Set the x and y axis limits to show all four quadrants
ax.set_xlim(-5, 5)
ax.set_ylim(-5, 5)

# Draw the x and y axis lines
ax.axhline(0, color='black', linewidth=0.5)
ax.axvline(0, color='black', linewidth=0.5)


# Set labels for the axes
ax.set_xlabel('x-axis')
ax.set_ylabel('y-axis')

major_ticks = np.arange(-6,6,1)
ax.set_xticks(major_ticks)
ax.set_yticks(major_ticks)
# Add grid for better visualization
ax.grid(True, which='both')

ax.grid(which='major', alpha = 0.2)

```

De første tallene vi blir kjent med er de naturlige tallene, også kjent som telle-tallene.

$\mathbb{N} = \{1,2,3,4,5,6,\ldots\}$.

Etterhvert blir vi kjent med de hele tallene, som inkluderer 0 og de negative tallene. De hjelper oss å løse noen problemer vi ikke tidligere kunne. For eksempel $x + 6 = 3$. 

$\mathbb{Z} = \{\ldots, -3,-2,-1,0,1,2,3,\ldots\}$.

Det tar ikke lang tid før vi begynner å forstå andre størrelser, en halv, en fire-del og så videre. Vi får en kjennskap til de rasjonale tallene, eller brøker. Disse hjelper oss å løse enda flere problemer. For eksempel $3\cdot x = 1$.

$\mathbb{Q} =\{\frac{n}{m} : m, n\in \mathbb{Z}\}$
Les denne mengden som mengden av tall, n delt på m, der n og m er hele tall. Når vi skriver disse tallene som desimaltall, så har alle disse tallene en periodisk desimalutvikling (desimalene følger et mønster).

Når vi begynner å studere nye problemer dukker det opp mangler ved de rasjonale tallene også. For eksempel så har vi fra Pytagoras at et kvadrat med sidelengder 1 har en diagonal, $d$, der $d^2 =1^2+1^2 = 2$. Vi vet at løsningen på denne likningen er $d = \sqrt 2$, men $\sqrt 2$ er ikke et rasjonalt tall (kan ikke skrives som brøk). Dette gir opphav til de reelle tallene, de reelle tallene kan tenkes på som resten av desimaltallene som *ikke* har noe mønster i sin desimalutvikling. Vi noterer mengden av de reelle tallene slik $\mathbb{R}$. 

For de aller fleste, virker de reelle tallene til å løse alle våre problemer. Men, vi har vel faktisk alle møtt noen likninger vi ikke kan løse allerede. Hva med likningen $x^2 = -1$. De fleste har vel hørt at man kan ikke ta roten av et negativt tall, og derfor sier vi at likningen ikke har noen løsning. Mer presist blir det å si at løsningen har ingen løsning blant de reelle tallene. Vi tenker oss nå at de finnes et tall som er løsningen på likningen over. Vi sier at tallet $i$ er tallet slik at $i^2 = -1$, altså et tall som løser $x^2 = -1$. 

> [!info] Komplekse tall, definisjon A.1 
>  
>  Et *komplekst* tall er et tall på formen
>  $a+bi$ eller $a + ib$
>  der $a$ og $b$ er *reelle* tall og $i$ er den imaginære enheten.
>  Ofte skriver vi $z = a+bi$.

Siden vi vil at komplekse tall skal være en utvidelse av de reelle tallene, bør de også oppfylle regnereglene vi kjenner. 

$(2+6i) + (3-2i) = 2+3+(6-2)i = 5+4i$.

Helt konkret må vi ha at 

$(a+bi) +(c+di) = (a+c)+(b+d)i$.

Ofte er det nyttig og snakke om komplekse tall i to deler. For  $z=a+bi$, kaller vi $a$ den reelle delen og $b$ for den imaginære delen. Boka bruker $\text{Re}(z)=\text{Re}(x+yi)=x$ og $\text{Im}(z)=\text{Im}(x+yi)=y$.

Vi har nå sett at addisjon (og tilsvarende subtraksjon) er enkelt for komplekse tall. Vi vil også at multiplikasjon skal fungere slik som de gjør for de reelle tallene. Blant annet bør den distributive lov $(a+b)c =ac+bc$ og $a(b+c)=ab+ac$ holde. Hvis det er tilfellet må vi få at

$$
\begin{align} 
  (2+3i)(4+5i)  &= 2(4+5i) + 3i(4+5i) \\
  &= 8+10i + 12i+15i^2 \\
  &= 8+22i+15(-1) \\
  & = -7+22i 
\end{align} 
$$

Kan vi finne noe geometrisk intuisjon for hvordan denne multiplikasjonen fungerer? La oss undersøke noen tilfeller.

Eks: Begynn med $2+i$

```run-python

ax.plot(2,1, 'ro')
plt.show()
```

Vi kan nå ta å gange inn $2+i$ med $i$ for å se hva som skjer. Da får vi

$$
(2+i)i = 2i+ i^2 = -1+2i.
$$

Visuelt blir det slik. 

```run-python

plt.plot([0,2],[0,1], '-ro')
plt.plot([0,-1],[0,2], '-o')
plt.show()
```

Nå som vi vet hvordan vi regner, kan vi la Python stå for resten

```run-python

x =complex(2,1)

plt.plot([0,x.real], [0,x.imag], '-o')
for i in range(4):
    x = x*complex(0,1)
    plt.plot([0, x.real], [0,x.imag], '-o')

plt.show()

```

Det ser fryktelig ut som at å gange med $i$, bare roterer med $\frac{\pi}{2}$ ($90^\circ$). 

La oss teste noen flere eksempler

```run-python
x =complex(1,0)

plt.plot([0,x.real], [0,x.imag], '-o')
for i in range(5):
    x = x*complex(1,1)
    plt.plot([0, x.real], [0,x.imag], '-o')

plt.show()
```

Ser ut som det roterer med fast størrelse, men blir lengere og lengere.

Ser vi på $0.5+ i$, så ser det slik ut

Vi kan regne ut hvor langt dette tallet er fra origo ved å bruke Pytagoras

```handdrawn-ink
{
	"versionAtEmbed": "0.2.4",
	"filepath": "Files/Ink/Drawing/2024.7.12 - 18.25pm.drawing"
}
```
