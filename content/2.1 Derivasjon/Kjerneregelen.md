> [!tip] Kjerneregelen, Teorem 6
> Dersom $f(u)$ er deriverbar i $u=g(x)$ og $g(x)$ er deriverbar i $x$, da er den sammensatte funksjonen $f\circ g (x) = f(g(x))$ deriverbar i $x$ og
> $$\begin{aligned} \frac{d}{dx} f(g(x)) = (f\circ g)'(x) = f'(g(x))g'(x).  \end{aligned}$$  

En alt for forenklet (men enkel måte å huske kjerneregelen) er å tenke på den slik. 
$$\begin{aligned}  \frac{df}{dx} = \frac{df}{dg} \frac{dg}{dx}. \end{aligned}$$ 
Kjerneregelen er på en måte en av de mest intuitive derivasjonsreglene vi har. Beviset for kjerneregelen kommer lenger ned.

Tenk deg at du ser på to funksjoner $f(x) =x^2$ og $f(3x)= (3x)^2$.

Ser vi på deres grafer ser vi at $f(3x)$ ser ut til å være *krympet* inn. Altså at man har krympet x-aksen.

<iframe src="https://www.desmos.com/calculator/qne2wt5lot?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

Dette kan vi tenke på som at når vi kjører gjennom $x$ verdiene vil $f(3x)$ kjøre gjennom tre ganger så raskt. Det må jo også bety at siden *farten* til $x$ går tre ganger så fort, må stigningen til grafen også være tre ganger så stort i hvert punkt.

Vi må holde tunga rett i munnen her. Merk stigningen til grafen $f(3x)$ når $x=1$ er ikke lik stigningen til grafen $f(x)$ når $x=3$, selv om funksjonsverdien er den samme. Stigningen er **tre ganger** raskere.

Nå kommer det et lite hopp som vi må tenke gjennom. Hva skjer hvis vi endrer $3x$ med en funksjon $g(x)$? Jo, mengden som $f(g(x))$ vil strekkes eller krympes i forhold til $f(x)$ avhenger av hvordan $g(x)$ oppfører seg. Dersom $g(x)$ har stigning $3$ i et punkt, vil $g(x)$ oppføre seg som den lineære funksjonen $3x$ i det punktet, og da bør $f$ ha tre ganger så stor stigning. Dersom $g(x)$ var $\frac{1}{2}$ så ville $f(g(x))$ bremses ned i punktet og stigningen måtte bli halvparten så stor.Se for eksempel $\sin (x)$ og $\sin(x^2)$ under.

<iframe src="https://www.desmos.com/calculator/2pli9h4g3s?embed" width="500" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

Det må bety at stigningen til $f(g(x))$, som bare er $\frac{d}{dx}f(g(x))$, involverer å finne stigningen til $f$ i tilhørende punkt $g(x)$ og multiplisere dette med stigningen til $g(x)$ i punktet $x$. Med andre ord
$$\begin{aligned} (f(g(x)))'(x)=g'(x)f'(g(x)).  \end{aligned}$$ 

> [!note] Bevis for kjerneregelen

Anta at $f$ er deriverbar i et punkt $u = g(x)$ og at $g$ er deriverbar i $x$. La $E(k)$ være definert ved 
$$\begin{aligned} & E(0) = 0  \\ & E(k) = \frac{f(u+k)-f(u) }{k } -f'(u) && \text{hvis } k\neq 0.\end{aligned}$$

Fra definisjonen av den deriverte er $\lim_{k \longrightarrow 0 } E(k) = f'(u)-f'(u) = 0 = E(0)$, så $E(k)$ er kontinuerlig i $k = 0$. I tillegg har vi at 
$$\begin{aligned} f(u+k)-f(u) = (f'(u)+E(k))k  \end{aligned}$$ 
Set nå $u = g(x)$ og $k = g(x+h)-g(x)$, slik at $u+k = g(x+h)$ og merk at vi får
$$\begin{aligned} f(g(x+h)) - f(g(x))  \end{aligned}$$ 
