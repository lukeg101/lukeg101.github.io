---
layout: post
title: Logic Wars
description: A 2D Space Invaders clone, with a twist
date: 2014-02-1
git: https://github.com/lukeg101/G51FSE-Pygame-Project
tech: [Python, Pygame]
imgpath: img/projects/LogicWars
---

In this first year project we develop a 2D space shooter game. We were given the following synopsis:

> You are tasked to find a partner and to create a 2D Arcade game. You will have a choice over what game you wish to make and a choice of implementation language. Through this process, in your pairs you are to develop the game from its initial specification, through design, protytping, refinement, implementation, testing, and evaluation stages. You are required to deliver a demo for a prototype, a completed game and a portfolio.

Logic Wars implements many features of classic side­scrolling shoot ‘em up games taking heavy influence from titles such as the successful arcade game ‘1942’ from Capcom in 1984. The player controls a spaceship and fires upon enemies that descend towards the player, who are also returning fire. The primary aim is to earn a high score by destroying enemy ships and avoiding enemy fire. The player loses the game once all their lives have been depleted. A life is lost when the players health is reduced to 0 from enemy fire and/or collision with enemy ships. Various power ups have a chance to be spawned after enemy ships are destroyed to provide a temporary or lasting advantage. The game is stylised such that the ships are shaped like logic gates; and that the enemies are shaped like the negated equivalents (NOR logic gates) thus adding a satirical twist to the typical arcade game.

<div class="img_col">
	<center>
	<img class="two" src="{{ site.baseurl }}/{{ page.imgpath }}/logicwars.png" alt="Overview of the game screen, taken from our project" title="Overview of the game screen, taken from our project"/>
	</center>
</div>
<div class="col three caption">
	Overview of the game screen, taken from our project
</div>

This game combines these two areas in order to create a top-down shoot 'em up game using Python and Pygame. We were studying systems engineering at the time and chose to make a computer science themed game. In detail the player ships are shaped like logic gates with the enemies as their negated counterparts. We chose to observe and implement a software engineering process whilst working as a team (we used agile XTreme with pairs programming for the implementation stages but used the iterative spiral methodology for structuring of the whole project).

<div class="img_col">
	<center>
	<img class="two" src="{{ site.baseurl }}/{{ page.imgpath }}/umlDiagram.png" alt="We followed the software engineering life cycle, including stages for requirements elicitation, system design, implementation, testing and review" title="We followed the software engineering life cycle, including stages for requirements elicitation, system design, implementation, testing and review"/>
	</center>
</div>
<div class="col three caption">
	We followed the software engineering life cycle, including stages for requirements elicitation, system design, implementation, testing and review
</div>

The report for this code can be found here [_here_](https://github.com/lukeg101/G51FSE-Pygame-Project/blob/master/DesignPortfolioLogicWars.pdf) and the code [_here_](https://github.com/lukeg101/G51FSE-Pygame-Project).
