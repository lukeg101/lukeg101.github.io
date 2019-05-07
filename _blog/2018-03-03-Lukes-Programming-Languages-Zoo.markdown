---
layout: post
title: Luke's Programming Languages Zoo
author: Luke Geeson
date: 2018-03-03
description: Fine-grain (Small Step) implementations of common lambda calculi in Haskell.
published: true
imgpath: img/blogs/lambdafish
---

In this blog I'll talk about how to implement and understand the foundations of semantics, type theory, and computation. I've implemented over 12 lambda calculi including their AST, parser, (basic), and [Repls](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) for each. This means you can take whiteboard examples of these calculi and run them. The functionality is also tested using [QuickCheck](http://hackage.haskell.org/package/QuickCheck).

The code can be found [_here_](https://github.com/lukeg101/lplzoo/) with instructions to build and run them. 

## Motivation

I've been studying the Foundations of Programming Languages, Semantics, and Type Theory. I decided to implement some of the common Lambda Calculi to solidify my understanding. 

The naming of this repo was inspired in part by Andrej Bauer's [plzoo](https://github.com/andrejbauer/plzoo).

One aim of the repo is to implement popular (functional) languages and extensions to portray how the theory translates into practice. 

The languages are written in Haskell and are intentionally simple. That is, they do not use advanced features of Haskell but rather minimal use of [type constructors](https://en.wikipedia.org/wiki/Algebraic_data_type), [recursion](https://www.google.co.uk/search?ei=MbCyWrPmOeWWgAbLr4TwCg&q=recursion&oq=recursion&gs_l=psy-ab.3..35i39k1l2j0i67k1l8.6142.7685.0.7949.10.7.0.0.0.0.543.543.5-1.1.0....0...1c.1.64.psy-ab..9.1.541.0...0.9MwCQCbDFwA), and [functional programming](https://learnxinyminutes.com/docs/haskell/). 

The intention here is to maximise your understanding of language design whilst minimising the need to understand Haskell. Of course it helps if you know it!

## Languages

1. [_ULC_](ULC/): Alonzo Church's [Untyped Lambda Calculus](https://en.wikipedia.org/wiki/Lambda_calculus) (Church Style)
2. [_SKI_](SKI/): Moses Schonfinkel's [SKI Combinator Calculus](https://en.wikipedia.org/wiki/SKI_combinator_calculus). In essence an (untyped) combinator calculus equivalent in [computational power](https://en.wikipedia.org/wiki/Turing_completeness) to ULC, but without abstraction.
3. [_STLC_](STLC/): Alonzo Church's [Simply-Typed Lambda Calculus](https://en.wikipedia.org/wiki/Simply_typed_lambda_calculus) (Church) with one base type and function types
4. [_SystemT_](SystemT/): Kurt Godel's [System T](https://en.wikipedia.org/wiki/Dialectica_interpretation). In essence the STLC with [Nat](https://wiki.haskell.org/Peano_numbers) swapped out for the base type and [primitive recursion](https://www.quora.com/What-is-primitive-recursion) on Nats.
5. [_PCF_](PCF/): Gordon Plotkin's [Programming Computable Functions](http://www.cs.bham.ac.uk/~axj/pub/papers/Jung-2014-Teaching-denotational-semantics.pdf). In essence it's System T but using the [Y combinator](https://en.wikipedia.org/wiki/Fixed-point_combinator#Fixed_point_combinators_in_lambda_calculus) for general recursion instead of primitive.
6. [_Mu_](Mu/): Michel Parigot's [Lambda-Mu](https://www.cs.ru.nl/~freek/courses/tt-2011/papers/parigot.pdf). In essence it's STLC with [continuations](https://en.wikipedia.org/wiki/Continuation) that don't rely on the reduction strategy used.
7. [_SystemF_](SystemF/): John Reynolds' [System F](https://en.wikipedia.org/wiki/System_F). In essence it's STLC with [parametric polymorphism](https://en.wikipedia.org/wiki/Parametric_polymorphism) built in.
8. [_SOL_](SOL/): John Mitchell and Gordon Plotkin's SOL. In essence it's System F but with [existential types](https://medium.com/@stephenebly/an-introduction-to-existential-types-25c130ba61a4) made explicit.
8. [_Cata_](Cata/): In essence it's STLC with [inductive types](https://en.wikipedia.org/wiki/Inductive_type). 
9. [_Ana_](Ana/): In essence it's STLC with [coinductive types](https://en.wikipedia.org/wiki/Coinduction).
10. [_Sub_](Sub/): Benjamin Pierce's Lambda Calculus with Subtypes. In essence it's STLC with generalised records and [subtype polymorphism](https://en.wikipedia.org/wiki/Subtyping).
11. [_Omega_](Omega/): Renardel de Lavalette's [L(or λω)](https://core.ac.uk/download/pdf/82628447.pdf). In essence it's STLC with kinding and [type-operators](https://en.wikipedia.org/wiki/Type_constructor).
12. [_FOmega_](FOmega/): Jean Yves-Girard's [FOmega](https://en.wikipedia.org/wiki/Lambda_cube). In essence it's SystemF + Omega which enables higher-order polymorphism.

See each [repo](https://github.com/lukeg101/lplzoo/) for details on installation/use.

## Contributions
Submit a PR if there's something you want to add or fix! Bearing in mind a few things:
1. Compile your code with `-W`, This catches any warnings. There shouldn't be any warnings 
2. Use [hlint](http://hackage.haskell.org/package/hlint), to handle code linting and suggestions. Like wall, there should be no suggesstions for file `Foo.hs` when running `hlint Foo.hs`.
3. Ensure code has 100% [Haddock](https://www.haskell.org/haddock/) coverage. This helps to document things if ever we want to.
4. Keep in mind the motivations above, this code is not meant to be advanced Haskell, but rather simple (for demonstration) so try not to use advanced technologies if you can.

This is a work in progress so coverage of features may vary!

## Technologies

1. Each language is designed using [_abstract data types_](https://stackoverflow.com/questions/10267084/what-is-adt-abstract-data-type) in Haskell. This is a natural fit for higher-order and recursive terms in functional languages. The AST for each file contains any equivalence, typing, reduction and substitution rules needed.
2. The parser for each instance is based around [_monadic parser combinators_](https://en.wikipedia.org/wiki/Parser_combinator). The idea behind this is that we may compose parsers for several terms into a parser for all of them. The relationship between the left parser and the non-ambiguous grammars is thus a direct one.
3. The Repl for each language is a simple recursive function that carries an environment with terms (and maybe types). Future work would replace these with [_Haskeline_](http://hackage.haskell.org/package/haskeline) so that history and tab completion are available.
4. The languages are tested using [_Quickcheck_](http://hackage.haskell.org/package/QuickCheck). We can randomly generate terms and parse them to ensure their show instance can be parsed into the equivalent term. Future work would see typing relations and reductions tested via type guided generation.

