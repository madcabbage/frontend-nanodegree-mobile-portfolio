---  Website Performance Optimization portfolio project

------------------
-- Instructions --
------------------

Open the index.html file for the main page
Open the views/pizza.html file for the pizza page


-----------------
-- Things done --
-----------------

 | index.html
 |- Used Grunt to compress and optimise images (compression @50%)
 |- Used Sublime Minify to create minified versions of html, css, js files
 |- Added the whole of main css file into index.html (all are above the fold styles) to prevent render blocking css, keeping print separate
 |- Added jquery to pizza.html
 |- Only got the dx and newWidth values once, as no point in getting each for each individual pizza element
 |- Resizing pizzas with jquery instead of going through a loop, resizing each one individually

 | pizza.html
 |- added jquery
 |- changes form action="#anchor" to jquery animate with scrolling to point. Looks better and improves speed

 | main.js
 |- moved phases and index out of updatePositions so they're not getting calculated for each pizza position. Instead, it finds the positions and stores them once, then AFTER moving pizza positions, updates the phases array. Therefore, relcalculate styles after the animation has taken place
 |- added function to scroll to an element in the page
 |- reduced number of pizzas in background so that they're based on the screen height instead of being 200

 | pizza style.css
 |- Added will-transform to mover and pizza elements
 |- added transition

--------------
-- Problems --
--------------

 Couldn't get http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/ to work - possibly China GFW problem :(


----------
-- TODO --
----------

 Figure out why updatePositions doesn't work with step property in jquery animate function