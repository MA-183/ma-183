---
{}
---
Ser vi på figuren under, ser vi at Pytagoras setning forteller oss at et komplekst tall $z = a+bi$ har en avstand $\sqrt{a^2+b^2}$ fra origo. 

![](Files/shapes%20at%2024-08-12%2014.13.06.svg)

> [!info] Absoluttverdien til et komplekst tall (modulus), definisjon A.3
> Avstanden fra origo til et punkt $(a,b)$ som korresponderer med det komplekse tallet $z = a+bi$ kalles absoluttverdien (modulus) til $z$ og noteres $|z| = |a+bi|$ og er størrelsen
> $|z| =  |a+bi| = \sqrt{a^2+b^2}$. 

Kikker vi nærmere på et tall i det komplekse planer ser vi nå at det opplagt må finnes flere komplekse tall med samme absoluttverdi. 

Noen opplagte eksempler er $1+0i$ og $0+1i$ eller $0-i$ fordi alle disse har avstand $1$ fra origo. Faktisk kan vi konkludere med at alle komplekse tall som ligger på en sirkel med sentrum i origo har samme absoluttverdi. Den eneste forskjellen er at de stråler ut fra origo i forskjellige vinkler. Det betyr at vi kan representere komplekse tall på en unik måte, ved å gi deres lengde og hvilken vinkel de skaper med origo, slik som vi ser på figuren under.

![](Files/shapes%20at%2024-08-12%2014.57.36.svg)
> [!warning] Merk 
> Vi kaller vinkelen som et tall $z = a+bi$ danner med førsteaksen for argumentet til $z$ og noterer det slik $\text{arg}(z)$. I bildet over er $\theta$ argumentet til tallet $z$.
> 

Vi ser også at [det vi kan om trigonometri](Kapittel%200%20-%20innledende%20kapittel/P.7.1%20Vinkelmål.md) gir oss at vi kan veksle mellom den [kartesiske formen](Kapittel%200%20-%20innledende%20kapittel/P.A.1%20Komplekse%20tall.md) $z=a+bi$ og det vi kaller komplekse tall på formen $z = r\cos(\theta)+i\sin(\theta)$ for komplekse tall på *polar form*. 

> [!info] Eksempel 
> 1. Gjør om tallet $z = 1+\sqrt 3 i$ til polar form,
> 2. Gjør om tallet $w = 2-2i$ til polar form.

> [!abstract] 1

Vi begynner med å skisse i det kartesiske planet. 

![](Files/shapes%20at%2024-08-12%2015.11.07.svg)

Vi ser at hvis $z = 1+\sqrt{3}i$ så er $|z| = \sqrt{1+\sqrt{3}^2}=\sqrt{4} = 2$. Vi mangler nå vinkelen for å skrive tallet på polar form. Vi vet for eksempel at hvis $\theta$ er vinkelen vi er ute etter, så kan vi se på figuren at $\cos(\theta) = \frac{1}{2}$. Akkurat hvilken vinkel som gir opphav til dette forholdet kjenner vi til. Det er enten $\frac{\pi}{6}$ eller $-\frac{\pi}{6}$, men siden vi vet at den imaginære delen er positiv vet vi at det er $\frac{\pi}{6}$ som er vinkelen. Det betyr at 

$$1+\sqrt{3}i = 2\cos\left( \frac{\pi}{6} \right)+2i\sin\left( \frac{\pi}{6} \right).$$
> [!abstract] 2

Tallet $z$ har størrelse $|z| = \sqrt{2^2+(-2)^2}=\sqrt{8} = 2\sqrt{2}$. Det gir at vi kan skrive $z = 2\sqrt{2}\left( \frac{2}{2\sqrt{2}} - i \frac{2}{2\sqrt{2}}  \right) = 2\sqrt{2}\left( \frac{\sqrt{2}}{2}-i \frac{\sqrt{2}}{2} \right)$. Tegner vi dette opp i planet kan vi enkelt se at
$$
z = 2\sqrt{2}\left( \cos\left( \frac{3\pi}{4} \right)+i\sin\left( \frac{3\pi}{4} \right) \right).
$$

Det neste vi skal se på er [[Kapittel 0 - innledende kapittel/P.A.3 Regning med komplekse tall|regning med komplekse tall]].