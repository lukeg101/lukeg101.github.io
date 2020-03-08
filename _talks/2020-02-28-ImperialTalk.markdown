---
layout: post
title: Téléchat Testing Compiler Correctness with Memory Models@Imperial College London
date: 2020-02-28
description: Arm Applications of Computing in Industry Talk
---

I gave a talk at Imperial College London on how we can formally verify that compilers correctly translate concurrent code using memory consistency models.

The synopsis can be found [here](https://www.imperial.ac.uk/computing/industry/aci/2019-20/arm/)

with the abstract repeated here:

Open source compilers are broken, and that means your programs are broken too.

Compiler Correctness must account for the memory model in the source and target. This isn't simple however as we must account for interpretations of language standards, the effects of optimizations, and requirements of the architecture. We should not leave this work to interpretation, yet there is no tool that can automatically check correctness of C++ compilers with respect to memory models.

In this talk, we shall look at one way we test our compilers with respect to our formal memory models. We propose the Téléchat tool to check whether compiler translation preserves concurrent program semantics over the source and target memory models. On the way, you will learn about about the standards you should consider when writing code in either C, C++, or Arm assembly. You'll discover the kinds of behaviors you should expect from your concurrent C programs, and how that translates into Arm code.
