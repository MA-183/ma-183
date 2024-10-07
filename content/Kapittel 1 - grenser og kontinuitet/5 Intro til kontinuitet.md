---
title: 📄 Introduksjon til kontinuitet
---

> [!question] Spørsmål 
> Kan vi gjette nullpunkt til funksjonen under? Der $f(2)=7$ og $f(10)=-1$.
> 
> ![[Files/shapes at 24-08-25 13.10.09.svg]]

Siden $f$ skifter fortegn er et naturlig forslag å gjette midtpunktet mellom 2 og 10. Vi har uansett såpass lite informasjon å gå på at det er vill gjetting uansett.

Gjetter $x=6$ og får at $f$ spytter ut $7$. Ideen er den samme, gjett midtpunktet mellom 6 og 10.

Gjetter $8$ og får at $f$ spytter ut $4$. Fortsetter...

Gjetter $9$ og får $1.75$, gjetter 9.5 og får noe positivt....
Vi gjetter alltid midtpunktet mellom positiv og negativ verdi.

Ser at vi kunne fortsatt med dette, og brukt programmering til å gjøre dette så mange ganger at vi burde fått et veldig godt estimat for et nullpunkt.

Gjør vi det for eksempel $50$ ganger får vi et punkt $a$ der $f(a) = 0.0000000209472439$. Merk at det er et *approksimat*, så vi finner ikke nødvendigvis det faktiske nullpunktet.

> [!question] Spørsmål 
> Hva må til for at denne teknikken fungerer? Kunne $f$ hatt noen egenskaper som ødela algoritmen vår?

Jo, funksjonen bør jo være sammenhengende, altså at den ikke hopper eller har noen hull. Helt formelt må $f$ være kontinuerlig. For å definere en kontinuerlig funksjon begynner vi med å definere kontinuitet i et punkt.

![[Kapittel 1 - grenser og kontinuitet/defogteo/Def Kontinuitet i et punkt|Def Kontinuitet i et punkt]]

Nå er det enkelt å si hva en kontinuerlig funksjon skal bety, nemlig en som er kontinuerlig i alle punkter i sin definisjonsmengde.

![[Kapittel 1 - grenser og kontinuitet/defogteo/Def Kontinuitet på et intervall|Def Kontinuitet på et intervall]]

Så hva er de spesielle egenskapene som kontinuerlige funksjoner har? Jo, kontinuerlige funksjoner tar minimum og maksimumsverdier (på lukka intervaller)

![[Kapittel 1 - grenser og kontinuitet/defogteo/Teo Min-maks teoremet|Teo Min-maks teoremet]]


> [!question] Spørsmål 
> Hvis $f(x) = \frac{1}{x}$ så kan vi vise at denne funksjonen er kontinuerlig på $(0,1)$, men den tar ingen maksimumsverdi. Hvorfor er dette ikke i strid med min-maks teoremet?



I tillegg har kontinuerlige funksjoner ingen *hull*, det vil si at de tar alle verdier mellom to punkter på et intervall.

![[Kapittel 1 - grenser og kontinuitet/defogteo/Teo Skjæringssetningen|Teo Skjæringssetningen]]

> [!question] Spørsmål 
> Kan du skissere en graf som er definert på $[a,b]$ og kontinuerlig på $(a,b)$ der $f$ ikke tar alle verdier mellom $f(a)$ og $f(b)$? Hvorfor er dette ikke i strid med sjæringssetningen?
> 

I kurset skal vi se på noen spesielle kontinuerlige funksjoner, de [[Kapittel 2 - derivasjon/2 Den deriverte|deriverbare funksjonene]].