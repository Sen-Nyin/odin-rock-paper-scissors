# Rock, Paper, Scissors Game

A challenge from The Odin Project

##Introduction

This is the first challenge from The Odin Project's Foundations Javascript section.

The task was to be completed in 2 stages:

- Create a console based game only.
- Add a user interface to the game and utilise event listerners to take user input.

As a complete JavaScript newbie at the time, I thought this would have been more difficult than it was - a testiment to the quality of materials provided by TOP. As the first challenge, I took the opportunity to use as many of the concepts I'd learned as possible to help with embedding that knowledge.

##Technologies Used

- HTML5
- CSS3 using Sass
- JavaScript

##Issues Faced

The first issue was trying to plan how I wanted to set up my CSS classes considering I want to have them DRY whilst at the same time wanting unique classes I can target with my JavaScript.

The second issue was what I believe now is a bug with the Safari browser. I had originally set my body to Flex, with my `<main>` element set to Flex: 1; (to take up the white space, and push my header and footer to the vertical edges of my screen) and have itself set as a grid with `place-items: center;`. Well, Safari didn't like that and instead aligned my game at the bottom of the page. Setting it's height to 100% also posed the same problem, but setting `margin-block: auto;` fixed it.
