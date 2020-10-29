# TextAnimation-v1.1

Hello, on the following link, you can see a preview of the result: https://gdani05.github.io/TextAnimation-v1.1/
This document will show you, how to insert this animation to your web project.
!Important! Actually, you can use only one animation per webpage.

## Creating the canvas
First, you have to create a canvas, where your animation can be shown up. Place it somewhere on your webpage (eg. on the websites header). Create a canvas on the following way:
```html
<canvas id="animationCanvas"></canvas>
```
Do not change the ID, because the program won't find the canvas. You don't have to set the width and height, the program will do it, based on the screen's parameters. You can place your canvas vertically with CSS (you can see a good example in the files of this reposity).

## Adding the JavaScript to your website
First you have to create an empty JS file and name it (I will use ```textslideshow.js``` here). Than copy the whole text from the textslideshow.js file, what you can find in this reposity. Than add the following text to the bottom of your HTML document:
```javascript
<script src="textSlideshow.js" type="text/javascript"></script>
<script type="text/javascript">
  var texts = ["HelloWorld", "Animation", "Websites"];
  textSlideshow(60, 1, texts, 1, "white", "black");
</script>
```
Be sure to use the same name in the first line as the file name.
To the array, called ```texts``` write the texts you want to see in the animation. Take care to the commas and the quotation marks.
In the next line you will call a function which will do the animation. You have the following attributes:
#### frameRate(int)
This will set the frame per second rate (fps) to the animation. The recommended value is 60, but you can set any value which is at least 30 and not more than 240. 
#### duration(int)
This is the length of the opening part of the animation (in seconds). You can set it to any value.
#### texts(array)
Here, you have to write the name of the array where you typed the words you want to see in your animation
#### waitTime(int)
The time (in seconds) what the program waits after an open or close
#### textColor(string)
The color of the texts. It should be a HEX color, like ```"#FF0000"```
#### backgroundColor(string)
The background's color. You should set it as the same of the websites background.

## Contact
If you find a bug or you have an idea how to improve this little project, please write me a message on instagram (username: @gdani___)
