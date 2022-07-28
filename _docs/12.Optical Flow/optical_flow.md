---
title: Optcal Flow 
category: 12.Optical Flow
order: 1
---
## Optical flow

* To determine, for each point in the image, how that point is moving relative to the image plane, i.e., its apparent motion. This motion is a result both of how the corresponding 3D point is moving in the scene and how the camera is moving relative to the scene.

* In optical flow : These two images are places into 6-channel tensor, where the first three channels belong to the first image, the three remaining channels belong to the second image. 


[MPI-Sintel Optical Flow Dataset and Evaluation](http://sintel.is.tue.mpg.de/downloads)


- The dataset has 23 different scenes.
- Contains the 23 training sequences (plus ground truth optical flow), the 12 testing sequences, the Bundler application, and example code to read/write .flo files.


<img class="zoom" src="https://production-media.paperswithcode.com/datasets/Screen_Shot_2021-01-29_at_12.28.38_PM.png" >


[Middlebury Optical Flow Evaluation](https://vision.middlebury.edu/flow/data/)

- Classes : 




[The KITTI Vision Benchmark Suite](http://www.cvlibs.net/datasets/kitti/eval_stereo_flow.php?benchmark=flow)

[HCI Challenge](http://hci.iwr.uni-heidelberg.de/Benchmarks/document/Challenging_Data_for_Stereo_and_Optical_Flow/)



# Reference
* [aufaitai](https://www.aufaitai.com/data/synthetic-datasets-optical-flow/)