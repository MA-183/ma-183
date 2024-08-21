---
{}
---
> [!info] Sigma-notasjon, definisjon 5.1.1
> Hvis $m$ og $n$ er heltall der $m\leq n$, og hvis $f$ er en funksjon definert for tallene $m, m+1, m+2, \ldots, n$. Da skal symbolet $\sum_{i=m}^n f(i)$ representere summen av verdiene til $f$ på de heltallene. Med andre ord er
> $$\sum_{i=m}^n = f(m)+f(m+1)+\ldots+f(n).$$ 
>  Den eksplisitte summen som vi ser på høyre siden av likheten over kaller vi *utvidelsen* av summen som er representert med sigma-notasjon på venstre side. 

Det er noen summer vi bør kjenne til fordi de dukker opp ganske ofte.

> [!tip] Summasjonsformler, teorem 5.1.1
> 1. $$\begin{aligned} \sum_{i=1}^n 1 = \underbrace{ 1+1+1+\ldots+1}_{ n \text{ ledd} } = n.  \end{aligned}$$  
> 2. $$\begin{aligned} \sum_{i=1 }^{n } 1+2+3+\ldots+n = \frac{n(n+1) }{2 }.   \end{aligned}$$ 
> 3. $$\begin{aligned} \sum_{i=1 }^{n } i^2 = 1^2+2^2+3^2+\ldots+ n^2 = \frac{n(n+1)(2n+1) }{6 } .  \end{aligned}$$ 
> 4. $$\begin{aligned} \sum_{i=1 }^{n } r^{i-1} = 1 + r + r^2+r^3+\ldots+ r^{n-1} = \frac{r^n-1 }{r-1}   \end{aligned}$$ hvis $r\neq 1$. 


> [!note] Argument 
> 

> [!abstract]  1
> 

Denne er triviell og kan leses direkte av definisjonen.

> [!abstract]  2
> 

La $S = 1+2+3+\ldots + n$, da kan vi skrive $S$ på to måter og utnytte at vi kan legge summene sammen ledd for ledd.
$$
\begin{aligned} 
  S & = \phantom{(n+}1\phantom{)\ \ } + \phantom{(n-)}2\phantom{) }  +\phantom{(n-)}3\phantom{\ \ }  +\ldots + (n-2)+(n-1) + n \\
  S & = \phantom{(}n\phantom{+1)\ \ } + (n-1)+(n-2)+ \ldots + \phantom{(n- )}3\phantom{) } +\phantom{(n-)} 2\phantom{)} + \phantom{(n-)}1 \\
  \hline{} 2S &=(n+1)+(n+1)+(n+1)+\ldots+(n+1)+(n+1)+(n+1) \\
  2S & = n(n+1) \\
  S & = \frac{n(n+1) }{2 } 
\end{aligned} 
$$
