# Trigonometri

Trigonon (trekanter) metric (måling), gir opphav til trigonometri, altså måling av trekanter. Selv om utgangspunktet for trigonometri er trekanter så finnes det også en side av trekanter som er fra et sirkelperspektiv. Det er nyttig å ha kontroll på *begge* perspektivene!

Spesielt vil man merke at rettvinklede trekanter dukker opp ofte når man er ute etter lengder (ofte på grunn av Pytagoras setning). På grunn av formlikhet får vi for eksempel at forholdene mellom sidene i trekantene er konstante.
<br><br> <br><br> <br><br> <br><br> 
Ved hjelp av Pytagoras får vi nå at $x^2 + \left( \frac{1}{2} \right)^2 = 1^2$, eller at $x^2 = 1- \frac{1}{4} = \frac{3}{4}$. Tar vi kvadratroten får vi at $x = \frac{\sqrt{ 3 }}{2}$. Vi kan jo også spørre oss om hvilken rettvinklet trekant dette er?
<br><br> <br><br> <br><br> <br><br> <br><br> <br><br> Speiler vi trekanter om seg selv får vi en likesidet trekant, altså en $60-60-60$ trekant, som også gir oss vinklene i den originale trekanten en $30-60-90$ trekant. 

Man kan altså legge merke til at, gitt et forhold mellom to sidelengder i en *rettvinklet* trekant, så vil vinklene være avgjort. Dette går også motsatt vei. Dersom vi vet *vinklene* i en rettvinklet trekant, så vil forholdet mellom sidene i trekanten være avgjort (dette er uavhengig på grunn av formlikhet). 
Det vil si at gitt en trekant og en vinkel $t$ i en trekant har vi at:

1. Forholdet $\frac{\text{motstående katet}}{\text{hypotenus}}$ avhenger kun av vinkelen $t$ og ikke størrelsen på trekanten
2. Forholdet $\frac{\text{hosliggende katet}}{\text{hypotenus}}$ avhenger kun av vinkelen $t$ og ikke størrelsen på trekanten
3. Forholdet $\frac{\text{motstående katet}}{\text{hosliggende katet}}$ avhenger kun av vinkelen $t$ og ikke størrelsen på trekanten.

Det betyr også rett og slett av disse forholdene er funksjoner av vinklene, og fordi vi bruker disse forholdene så ofte, har vi gitt de spesielle navn.

1. $\sin t  = \frac{\text{motstående katet}}{\text{hypotenus}}$
2. $\cos t = \frac{\text{hosliggende katet}}{\text{hypotenus}}$
3. $\tan t = \frac{\text{motstående katet}}{\text{hosliggende katet}}$ 

Vi har nå definer $\cos t, \sin t, \tan t$ for vinkler $t \in (0, 90^\circ)$. ${\color{grey} \text{Les dette som t i mengden 0 til 90} }$.

Merk at vi kan legge trekantene våre inn i en sirkel med radius 1, **enhetssirkelen**. 
<br><br> <br><br> <br><br> <br><br> <br><br> <br><br> Vi ser at når trekanten legges inn slik, der den hosliggende kateten legges langs $x-$aksen, så er skjæringspunktet mellom trekanten vår og enhetssirkelen faktisk $(\cos t, \sin t)$. 

> **Eksempel 1**
> 
> 1. Finn $\cos (45^\circ)$ og $\sin (45^\circ)$.
> 2. Finn $\cos (60^\circ)$ og $\sin(60^\circ)$.
> 3. Finn $\cos(-45^\circ)$ og $\sin(-45^\circ)$.

![[../Files/Excalidraw/Uke1-2.svg]]
%%[Uke1-2](../Files/Excalidraw/Uke1-2.md)%%

1. For $\cos 45^\circ$ og $\sin 45^\circ$ ser vi at de er like. Pytagoras gir oss $$\begin{aligned} x^2 + x^2 & = 1 \\ 2x ^2 &= 1 \\ x^2 & = \frac{1}{2} \\ x & = \sqrt{\frac{1}{2}} =  \frac{1}{\sqrt 2} = \frac{1}{\sqrt 2}\cdot \frac{\sqrt2}{\sqrt 2} = \frac{\sqrt2}{2}.  \end{aligned}$$
2. I eksempelet fra i stad, hadde vi en $30-60-90$ trekant. Nå har vi det samme, bare "speila". Vi vet likevel lengdene i trekanten. De er $1$, $\frac{1}{2}$ og $\frac{\sqrt3}{2}$, dermed er $\cos 60^\circ = \frac{1}{2}$ og $\sin 60^\circ = \frac{\sqrt3}{2}$. 
3. For den siste, så ser vi nå at lengdene det er snakk om, rett og slett er de samme som for $45^\circ,$ bare at $y-$verdien er negativ. Det vil si at $\sin(-45^\circ) = -\sin(45^\circ) = - (\frac{\sqrt2}{2})$, og at $\cos(-45^\circ) = \cos(45^\circ) = \frac{\sqrt2}{2}$.

## Radianer

Den vanlige måten å måle vinkler på er ved å dele inn sirkelen i 360 grader. I Kalkulus 1 kommer vi til å kun bruke radianer fremover. 

> **Radianer**
>  Vi definerer radianer som $\frac{\text{buelengde av en sirkel}}{\text{radius til sirkelen}}$. Ser vi på enhetssirkelen så er radiusen $1$, og dermed kan vi også tenke på radianer som en buelengde i en sirkel med radius 1.

Hvorfor vi bruker radianer kommer frem når vi skal lære om derivasjon (spoiler: $\sin(x)' = \cos(x)$).

Siden vi skal bruke radianer i dette kurset, må vi også kunne gjøre om mellom radianer og grader. Her er veien om $1$ ganske grei å bruke. Vi vet at en sirkel med radius $1$ har omkrets $2\pi$, og derfor får vi altså at $360^\circ = 2\pi$ radianer. 

1. Dele på $2\pi$ for å finne $1$ radian gir oss $1 \text{ radian} = \frac{360^\circ}{2\pi}$.
2. Dele på $360$ for å finne $1^\circ$ som gir oss $1^\circ = \frac{2\pi}{360}\text{ radianer}$.

Disse to identitetene kan vi enkelt komme frem til selv, men de gir oss også enkelt en måte å omgjøre mellom radianer og grader. 

> **Eksempler**
> 1. Gjør om $60^\circ$ til radianer
> 2. Gjør om $135^\circ$ til radianer
> 3. Gjør om $\frac{3\pi}{2}$ radianer til grader.

1. Vi vet at $1^\circ = \frac{2\pi}{360}$, gang gjennom med $60$ og få $60^\circ = \frac{2\pi}{6 } \text{ radianer}=\frac{\pi}{3} \text{ radianer}$.
2. $1^\circ \cdot 135 = \frac{3\pi\cdot135}{360} \text{ radianer} = \frac{3}{8}\pi \text{ radianer}$.
3. $1 \text{ radian} \cdot \frac{3\pi}{2} = \frac{360^\circ}{2\pi}\cdot \frac{3\pi}{2} = 270^\circ$

### Trigonometriske identiteter

Speiling om x-aksen gir fra figuren at $\cos (t) = \cos(-t)$ og $\sin(t) = - \sin(t)$.
![[../Files/Excalidraw/Uke1-2 .dark.svg]]

%%[[../Files/Excalidraw/Uke1-2 .md|🖋 Edit in Excalidraw]], and the [[../Files/Excalidraw/Uke1-2 .light.svg|light exported image]]%%

> Speiling om y-aksen gir fra figuren at $\cos (\pi-t) = -\cos(t)$ og $\sin(\pi-t) = \sin(t)$.
![[../Files/Excalidraw/Uke1-2 _0.dark.svg]]
%%[[../Files/Excalidraw/Uke1-2 _0.md|🖋 Edit in Excalidraw]], and the [[../Files/Excalidraw/Uke1-2 _0.light.svg|light exported image]]%%

> Speiling om linje $y=x$. $\cos\left( \frac{\pi}{2}-t \right) = \sin(t)$ og $\sin\left( \frac{\pi}{2}-t \right) = \cos(t)$.

| t        | $0$                  | $30^\circ$         | $45^\circ$         | $60^\circ$                     | $90^\circ$           |
| -------- | -------------------- | ------------------ | ------------------ | ------------------------------ | -------------------- |
| radianer | 0                    | $\frac{\pi}{6}$    | $\frac{\pi}{4}$    | $\frac{\pi}{3}$                | $\frac{\pi}{2}$      |
| cos(t)   | $1=\frac{\sqrt4}{2}$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac{1}{2}=\frac{\sqrt1}{2}$ | $0=\frac{\sqrt0}{2}$ |
| sin(t)   | $0$                  | $\frac{1}{2}$      | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$             | 1                    |

Trenger vi vinkler utover første kvadrant, så kan vi bruke identitetene vi har oppdaget over. Ta for eks FIXME

## Identiteter

Vi merker oss først denne identiteten som kommer direkte fra definisjonen av $\cos$ og $\sin$ og Pytagoras.

> Vi har at $\cos^2(t)+\sin^2(t) = 1$.

Denne identiteten kan vi nå bruke til å utlede addisjonsformlene.

> **Addisjonsformlene**
> For $\cos$ og $\sin$ har vi at 
> 1. $\cos(s+t)=\cos(s)\cos(t)-\sin(s)\sin(t)$  
> 2. $\sin(s+t)=2(\cos(t)\sin(s)+\cos(s)\sin(t))$.
>  

#### Argument

Vi argumenterer ved hjelp av rotasjon. Vinklene $s-t$ kan uttrykkes på to måter, slik som vist på figuren under. Begge vinklene spenner over samme sirkelbue, og derfor må lengdene være like. I figuren ser vi at vi har regnet ut begge vinklene ved hjelp av Pytagoras og satt de like (i hvit tekst).

![](../Files/shapes%20at%2024-07-15%2013.18.41.svg)

%% 
På begge bildene over ser vi at den røde streken er like lang, fordi den skjærer av like stor sirkelbue. Målet er nå å regne ut lengden på den røde linjen på to måter. Denne vil gi oss en sammenheng vi skal utnytte.

VS: Vi bruker Pytagoras for å finne rød linje og får at korteste katet er $1-\cos(s-t)$ og lengste katet er $\sin(s-t)$. Pytagoras gir oss nå at $(1-\cos(s-t))^2+\sin^2(s-t) = \text{rød linje}$.

HS: Samme ide gir oss her at $(\cos(t)-\cos(s))^2 +(\sin(t)-\sin(s))^2 = \text{rød linje}$. 
 %%
Vi setter disse nå lik hverandre og utnytter at $\cos^2 (t)+ \sin^2(t) = 1$, som gir

$$
\begin{aligned} 
  (1-\cos(s-t))^2+\sin^2(s-t)  &= (\cos(t)-\cos(s))^2 +(\sin(t)-\sin(s))^2   \\
  \phantom{} \\
  1^2 -2\cos(s-t)+{\color{red}\cos^2(s-t) + \sin^2(s-t)} & = {\color{green}\cos^2(t)} -2\cos(t)\cos(t)+{\color{blue}\cos^2(s)} +{\color{}\sin^2(t)}-2\sin(t)\sin(s) + {\color{blue}\sin^2(s)} \\
  \phantom{} \\
  1-2\cos(s-t) + {\color{red}1} &= {\color{green}   1} - 2(\cos(t)\cos(s)+\sin(t)\sin(s)) +{\color{blue} 1 } & |-2\\
  \phantom{} \\
  \cos(s-t) & = (\cos(s)\cos(t)+\sin(t)\sin(s))
\end{aligned} 
$$

Merk nå at $\cos(s+t) = \cos(s-(-t)) = \cos(s)\cos(-t)+\sin(s)\sin(-t) = \cos(t)\cos(s)-\sin(s)\sin(t)$. Og siden $\cos\left( \frac{\pi}{2}-t \right) = \sin(t)$ har vi at
$$
\begin{aligned} 
  \sin(s+t) & = \cos\left( \frac{\pi}{2}-(s+t) \right) \\
   & = \cos\left( \left( \frac{\pi}{2}-s \right)-t \right) \\
   & = \cos \left( \frac{\pi}{2}-s \right)\cos(t)+\sin\left( \frac{\pi}{2}-s \right)\sin(t) \\
   & = \sin(s)\cos(t)+\cos(s)\sin(t).
\end{aligned} 
$$

> **Dobbeltvinkel-formlene**
> Fra addisjonsformlene dukker det også opp to veldig nyttige formler.
> 1. $\sin(2t)= 2\sin (t)\cos(t)$
> 2. $\cos(2t) = \cos^2(t)-\sin^2(t)$.
> 

Merk at siden $\cos^2(t)+\sin^2(t) = 1$, så er $-\sin^2(t) = \cos^2(t)-1$, som gir at
$$
\cos(2t) = 2\cos^2(t)-1
$$
Løser vi opp for $\cos^2(t)$ får vi $\cos^2(t) =\frac{1+\cos(2t)}{2}$, en sammenheng som er nyttig å ha i bakhodet. 

## Trigonometriske grafer.

Tabellen vi lagde under, gir oss en enkel måte å skissere grafene til de trigonometriske funksjonene. 

| t        | $0$                  | $30^\circ$         | $45^\circ$         | $60^\circ$                     | $90^\circ$           |
| -------- | -------------------- | ------------------ | ------------------ | ------------------------------ | -------------------- |
| radianer | 0                    | $\frac{\pi}{6}$    | $\frac{\pi}{4}$    | $\frac{\pi}{3}$                | $\frac{\pi}{2}$      |
| cos(t)   | $1=\frac{\sqrt4}{2}$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac{1}{2}=\frac{\sqrt1}{2}$ | $0=\frac{\sqrt0}{2}$ |
| sin(t)   | $0$                  | $\frac{1}{2}$      | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$             | 1                    |

