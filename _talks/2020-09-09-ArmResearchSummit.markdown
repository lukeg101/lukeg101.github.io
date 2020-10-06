---
layout: post
title:Testing Compiler Correctness with  Téléchat@Arm Research Summit 2020
date: 2020-02-28
description: Video Presentation and Poster
---

I prepared a video presentation and attended a poster session at the first [Virtual Arm Research Summit](https://community.arm.com/developer/research/b/articles/posts/what-you-missed-at-the-first-virtual-arm-research-summit?_ga=2.57313066.1227003164.1601997708-1536546198.1525900856). This poster and talk detail my work on the Téléchat translation validation tool that uses Memory Models to check compilers preserve relaxed memory and concurrency semantics from C11/C++11 to, for example Arm. 

A copy of the poster can be found [here](https://community.arm.com/developer/research/m/resources/991)

Please contact me if you would like a link to the video presentation - it is not hosted in a central place.

with the abstract repeated here:

Open source compilers are broken, and that means your programs are broken too. Compiler Correctness must account for the memory model in the source and target. This isn't simple however as we must account for interpretations of language standards, the effects of optimizations, and requirements of the architecture. We should not leave this work to interpretation, yet there is no tool that can automatically check correctness of C++ compilers with respect to memory models. We propose the Téléchat tool to check whether compiler translation preserves concurrent program semantics over the source and target memory models. On the way, you will learn about about the standards you should consider when writing code in either C, C++, or Arm assembly. You'll discover the kinds of behaviors you should expect from your concurrent C programs, and how that translates into Arm code.