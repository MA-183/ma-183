---
title: "💡Resultat: Summasjonsformler"
---
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
