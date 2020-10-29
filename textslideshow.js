function animateText(frameRate, duration, text, waitTime, textColor, backgroundColor) {
  var textDisplay = text;
  var canvas = document.getElementById("animationCanvas");
  canvas.width = screen.width;
  canvas.height = screen.height / 2;
  var context = canvas.getContext("2d");
  context.font = "bold 64px Arial";
  context.fillStyle = textColor;
  var text1 = "<";
  var text2 = "/>";
  var text1Width = context.measureText(text1).width;
  var text2Width = context.measureText(text2).width;
  var lessTextWidth = text1Width + text2Width;
  context.font = "bold 48px Arial";
  var displayTextWidth = context.measureText(textDisplay).width;
  var numOfFrames = duration * frameRate;
  var currentFrame = 0;
  var i = 0;
  context.fillStyle = textColor;
  context.font = "bold 64px Arial";
  context.fillText(text1, calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame), 60);
  context.font = "bold 48px Arial";
  context.fillText(textDisplay, calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame) + text1Width, 55);
  context.fillStyle = backgroundColor;
  context.fillRect(calcCordx2(calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame), text1Width, displayTextWidth, numOfFrames, currentFrame), 0, screen.width, 100);
  context.fillStyle = textColor;
  context.font = "bold 64px Arial";
  context.fillText(text2, calcCordx2(calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame), text1Width, displayTextWidth, numOfFrames, currentFrame), 60);
  var refresh = setInterval(function() {
    if (currentFrame == numOfFrames) {
      setTimeout(() => {
        currentFrame = numOfFrames;
        var refresh2 = setInterval(() => {
          if (currentFrame == 0) {
            clearInterval(refresh2);
          }
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = textColor;
          context.font = "bold 64px Arial";
          context.fillText(text1, calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame), 60);
          context.font = "bold 48px Arial";
          context.fillText(textDisplay, calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame) + text1Width, 55);
          context.fillStyle = backgroundColor;
          context.fillRect(calcCordx2(calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame), text1Width, displayTextWidth, numOfFrames, currentFrame), 0, screen.width, 100);
          context.fillStyle = textColor;
          context.font = "bold 64px Arial";
          context.fillText(text2, calcCordx2(calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame), text1Width, displayTextWidth, numOfFrames, currentFrame), 60);
          currentFrame--;
        }, 1000 / frameRate);
      }, waitTime * 1000);
      context.fillStyle = textColor;
      currentFrame++;
      clearInterval(refresh);
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = textColor;
    context.font = "bold 64px Arial";
    context.fillText(text1, calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame), 60);
    context.font = "bold 48px Arial";
    context.fillText(textDisplay, calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame) + text1Width, 55);
    context.fillStyle = backgroundColor;
    context.fillRect(calcCordx2(calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame), text1Width, displayTextWidth, numOfFrames, currentFrame), 0, screen.width, 100);
    context.fillStyle = textColor;
    context.font = "bold 64px Arial";
    context.fillText(text2, calcCordx2(calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame), text1Width, displayTextWidth, numOfFrames, currentFrame), 60);
    currentFrame++;
  }, 1000 / frameRate);
}


function calcCordx1(lessTextWidth, displayTextWidth, numOfFrames, currentFrame) {
  var returnValue = (screen.width - (lessTextWidth + ((displayTextWidth / numOfFrames) * currentFrame))) / 2;
  return returnValue;
}

function calcCordx2(calcCordx1Width, text1Width, textDisplayWidth, numOfFrames, currentFrame) {
  var returnValue = calcCordx1Width + text1Width + ((textDisplayWidth / numOfFrames) * currentFrame);
  return returnValue;
}

function textSlideshow(frameRate, duration, texts, waitTime, textColor, backgroundColor) {
  var currentText = 0;
  animateText(frameRate, duration, texts[currentText], waitTime, textColor, backgroundColor);
  currentText++;
  setInterval(() => {
    if (currentText == texts.length) {
      currentText = 0;
    }
    animateText(frameRate, duration, texts[currentText], waitTime, textColor, backgroundColor);
    currentText++;
  }, (duration * 2 + waitTime * 2) * 1000);
}


