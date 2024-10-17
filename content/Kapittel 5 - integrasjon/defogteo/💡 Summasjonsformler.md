> [!tip] Summasjonsformler
> $$
> \begin{aligned} 
>   1. & \sum_{i=1}^{n} 1 = \underbrace{ 1+1+1+\ldots+1 }_{ n \text{ ledd}} = n  \\ 2. & \sum_{i=1}^{n} i = 1+ 2+ 3+ 4+ \ldots+ n = \frac{n(n+1)}{2} \\ 3. &\sum_{i = 1}^{n}i^2 = 1^2+2^2+3^2+\ldots + n^2 = \frac{n(n+1)(2n+1)}{6}.    \\    4. & \sum_{i=1}^{n} r^{1-i} = 1 + r + r^2 + r^3 + \ldots + r^{n-1} = \frac{r^n-1}{r-1} \quad \text{ når } r \neq 1. \end{aligned} 
>  $$




> [!note]- Argument 
> 
> > [!abstract]  1
> > Denne er triviell og kan leses direkte av definisjonen.
> 
> > [!abstract]  2
> > La $S = 1+2+3+\ldots + n$, da kan vi skrive $S$ på to måter og utnytte at vi kan legge summene sammen ledd for ledd.
> > $$
> > \begin{aligned} 
> >   S & = \phantom{(n+}1\phantom{)\ \ } + \phantom{(n-)}2\phantom{) }  +\phantom{(n-)}3\phantom{\ \ }  +\ldots + (n-2)+(n-1) + n \\
> >     S & = \phantom{(}n\phantom{+1)\ \ } + (n-1)+(n-2)+ \ldots + \phantom{(n- )}3\phantom{) } +\phantom{(n-)} 2\phantom{)} + \phantom{(n-)}1 \\
> >       \hline{} 2S &=(n+1)+(n+1)+(n+1)+\ldots+(n+1)+(n+1)+(n+1) \\
> >         2S & = n(n+1) \\
> >  S & = \frac{n(n+1) }{2 } 
> >  \end{aligned} 
> > $$
> 
> > [!abstract] 3
> > Vi gjør dette med induksjon. Når $k=1$ er $\sum_{i=1}^{1}i^3=1^3 = 1 =\frac{1\cdot2\cdot3}{6}$. Anta nå at dette stemmer for en vilkårlig $k$. Det vil si at
> > $$
> > {\color{#e796f5} \sum_{i=1}^{k}i^2=\frac{k(k+1)(2k+1)}{6} }.
> > $$
> > Da har vi at
> > $$
> > \sum_{i=1}^{k+1}i^2 = \left( {\color{#e796f5} \sum_{i=1}^{k}i^2 } \right)+(k+1)^2.
> > $$
> > Fra antagelsen får vi at dette er 
> > $$
> > {\color{#e796f5} \frac{k(k+1)(2k+1)}{6} }+ (k+1)^2 
> > $$
> > Vi setter på felles nevner og faktoriserer ut en $k+1$ og får
> > $$
> > {\color{#e796f5} \frac{k(k+1)(2k+1)}{6} } + (k+1)^2 = (k+1)\frac{k(2k+1)+6(k+1)}{6}. 
> > $$
> > Vi ganger ut og får
> > $$
> >  (k+1)\frac{2k^2+k+6k+6}{6} = (k+1)\frac{2k^2+7k+6}{6} =  (k+1)\frac{(k+2)2k+3(k+2)}{6} . 
> > $$
> > Faktoriserer vi ut $k+2$ får vi til slutt at
> > $$
> > \sum_{i=1}^{k+1}i^2 = \frac{(k+1)(k+2)(2k+3)}{6} = \frac{(k+1)(k+2)(2(k+1)+1)}{6},
> > $$
> > og vi er i mål med induksjonsbeviset vårt.
> 
> > [!abstract] 4
> > Her skal vi bruke et triks. Skriv $1+r+r^2+\ldots+r^n = S_n$. Se nå at $S_n+r^{n+1}$ kan skrives slik
> > $$
> > S_n+r^{n+1} = 1+r+r^2+\ldots+r^n+r^{n+1} = 1+r(1+r+r^2+\ldots+r^n) = 1+rS_n.
> > $$
> > Likningen forteller oss at
> > $$
> > \begin{aligned} 
> > S_n + r^{n+1} &= 1+rS_n &&\bigg| - rS_n-r^{n+1} \\ 
> > S_n-rS_n &= 1 - r^{n+1} && \bigg|\text{faktoriser } S_n\\
> > S_n(1-r) &= 1-r^{n+1} && \bigg|:(1-r)\\
> > S_n & = \frac{1-r^{n+1}}{1-r}.
> > \end{aligned} 
> > $$
> > 
