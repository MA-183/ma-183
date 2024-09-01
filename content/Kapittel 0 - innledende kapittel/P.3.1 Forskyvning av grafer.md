---
{}
---
Vi kjenner godt til ganske mange funksjoner og deres grafer. Noen *må* vi bare ha kontroll på.

For eksempel må vi kjenne til $y = x$, $y = x^2$ og grafen som kommer fra likningen $x^2 + y^2 = 1$.

> [!question] Spørsmål  
> 
> På bildene nedenfor ser du grafen til $f(x)=x^2$, bare forskjøvet. Dette er gjort ved å kombinere $f(x)$ med én eller flere av funksjonene $g(x)=1$ og $h(x)=x-1$. Ta deg tid til å tenke gjennom hvordan du kan oppnå dette.  
> ![](/Files/andregradsgrafer.svg)

> [!abstract] Blå  

 
Vi ser at den blå funksjonen er bare $x^2$ løftet med $1$. Dette kan vi oppnå ved å lage grafen $x^2 +1$.  

> [!abstract] Grønn  
> 

 Den grønne grafen er bare forskjøvet én enhet mot høyre. Grafen er derfor en funksjon $F(x)$ som alltid spytter ut "forrige" verdi av $f(x)$. Det vil si at:  

|               | $x$       | 0                    | 1                    | 2                   | 3                   | 4   |
| ------------- | --------- | -------------------- | -------------------- | ------------------- | ------------------- | --- |
|               |           |                      |                      |                     |                     |     |
| $f(x)$        | $f(0)=0$  | ${\color{green} 1 }$ | ${\color{red} 4 }$   | ${\color{cyan} 9 }$ | 16                  |     |
| $F(x)=f(x-1)$ | $f(-1)=1$ | 0                    | ${\color{green} 1 }$ | ${\color{red} 4 }$  | ${\color{cyan} 9 }$ |     |

 Dette kan vi oppnå ved å lage $F(x)$, som er en komposisjon av $f(x)$ og $h(x)$, nemlig funksjonen $F(x) = f(h(x)) = f(x-1) = (x-1)^2$.  

> [!abstract] Rød  


Vi ser nå at den røde grafen først er forskjøvet på samme måte som den grønne grafen, altså $(x-1)^2$. Etter denne forskyvningen må vi flytte grafen oppover på samme måte som den blå. Dette gjør vi enkelt ved å legge til én. Vi får derfor at den røde grafen er $(x-1)^2+1$, som også kan skrives som $f(h(x)) + g(x)$.  

> [!tip] Translasjon av grafer  
> Hvis man skal forskyve grafen til en funksjon $f$ med $a\in \mathbb{R}$, vil  
> - $f(x)+a$ forskyve grafen $a$ enheter oppover,  
> - $f(x-a)$ vil forskyve grafen $a$ enheter mot høyre.  
