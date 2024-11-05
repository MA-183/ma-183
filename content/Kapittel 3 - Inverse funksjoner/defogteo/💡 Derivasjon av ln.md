> [!tip] Derivasjon av $\ln(x)$
> Hvis $x > 0$, da er
> $$
> \frac{d}{dx} \ln(x) = \frac{1}{x}.
> $$ 

> [!note]- Argument 
> Vi skal undersøke hva som skjer med grensen til 
> $$
> \frac{ln(x)-\ln(x+h)}{h}
> $$
> når $h\longrightarrow 0$. 
> 
> Hvis $h>0$ kan vi se at arealet er begrenset ovenfra av $\frac{1}{x}$ og nedenfra av $\frac{1}{x+h}$, slik bildet under viser. 
> ![[Files/shapes at 24-10-24 09.25.50.svg]]
> Vi kan skrive det slik
> $$
> \frac{h}{x+h} < \ln(x)-\ln(x+h) < \frac{h}{x}.
> $$
> Deler vi på $h$ får vi
> $$
> \frac{1}{x+h} < \frac{\ln(x)-\ln(x+h)}{h} < \frac{1}{x}.
> $$
> Det er nå tydelig at hvis $h \longrightarrow 0$ så skvises uttrykket vårt mellom $\frac{1}{x}$ og $\frac{1}{x+h}$ og siden $\frac{1}{x+h}\longrightarrow \frac{1}{x}$ må $\lim_{h\longrightarrow 0+}\frac{\ln(x)-\ln(x)}{h} = \frac{1}{x}$. 
> Det gjenstår bare å se på $\lim_{h\longrightarrow 0-}\frac{\ln(x)-\ln(x)}{h}$, men argumentet er nesten identisk.




