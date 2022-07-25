---
title: Video classification 
category: 1.Classification
order: 4
---

### Video Classification

* Video classification and image classification models both use images as inputs to predict the probabilities of those images belonging to predefined classes. However, a video classification model also processes the spatio-temporal relationships between adjacent frames to recognize the actions in a video.
* For each frame, pass the frame through the CNN, Classify each frame individually and independently of each other
* Action dataset are mostly use in video classification and video classification data can be use in image classification


[Video classification USAA dataset](http://www.eecs.qmul.ac.uk/~yf300/USAA/download/)
- Classes : 8
- Total videos : 100 (Each video is labeled by 69 attributes and 69 attributes can be broken down into five broad classes: actions, objects, scenes,sounds, and camera movement.)
- Type of videos : home videos of social occassions which feature activities of group of people



[UCF50](https://www.crcv.ucf.edu/data/UCF50.php)
- Classes : 50
- Type of videos: Baseball Pitch, Basketball Shooting, Bench Press, Biking, Biking, Billiards Shot,Breaststroke, Clean and Jerk, Diving, Drumming, 

Note : Extension of YouTube Action data set

[UCF 101](https://www.crcv.ucf.edu/data/UCF101.php)
- Classes(Actions) : 101
- Type of videos : Baseball Pitch, Basketball Shooting, Bench Press, Biking, Biking, Billiards Shot,Breaststroke, Clean and Jerk, Diving, Drumming, 

Note : Extension of UCF50