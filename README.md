# computer vision dataset

Search Computer vision data

For fast search follow this website [https://madanbaduwal.github.io/cv-datasets/](https://madanbaduwal.github.io/cv-datasets/)


<img src="/images/demo.gif" alt="Demo gif" />


A curated list of awesome computer vision datasets.

## Contributing and Collaborating
Please feel free to send me pull requests or email (madanbaduwal100@gmail.com) to add links.

## Object recognition (also called object classification)

* The classes are completely mutually exclusive. There is no overlap between automobiles and trucks.

### Image Classification


[MNIST](http://yann.lecun.com/exdb/mnist/)

- Classes: 10 (0-9)
- Training: 60,000
- Test : 10,000
- Image type: handwritten digits
-  It is a subset of a larger set available from [NIST](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology). 

[CIFAR-10 and CIFAR-100](https://www.cs.toronto.edu/~kriz/cifar.html)

CIFAR-10
- Classes: 10 (airplan,automobile,bird,cat,deer,dog,frog,horse,ship,truck)
- Training: 50000 (5000 images per class)
- Test: 10000 (1000 per class)
- Image type: airplan,automobile,bird ...
- It is a subset of a larger set available from [80 million tiny images](http://groups.csail.mit.edu/vision/TinyImages/). 


CIFAR-100
- Classes: 100 (airplan,automobile,bird,cat,deer,dog,frog,horse,ship,truck...)
- Training: 50000 (500 images per class)
- Test: 10000 (100 per class)
- Image type: airplan,automobile,bird ...
- It is a subset of a larger set available from [80 million tiny images](http://groups.csail.mit.edu/vision/TinyImages/). 


Note: The classes are completely mutually exclusive. There is no overlap between automobiles and trucks. "Automobile" includes sedans, SUVs, things of that sort. "Truck" includes only big trucks. Neither includes pickup trucks.


[STL-10](https://cs.stanford.edu/~acoates/stl10/)

- Classes : 10 (airplane, bird, car, cat, deer, dog, horse, monkey, ship, truck)
- Training : 500 training images (10 pre-defined folds)
- Test : 800 test images per class
- Image : airplane, bird, car ... 
- 100000 unlabeled images for unsupervised learning.
-  Images were acquired from labeled examples on [ImageNet](https://image-net.org/).

Note : It is inspired by the CIFAR-10 dataset but with some modifications. In particular, each class has fewer labeled training examples than in CIFAR-10, but a very large set of unlabeled examples is provided to learn image models prior to supervised training. The primary challenge is to make use of the unlabeled data (which comes from a similar but different distribution from the labeled data) to build a useful prior. 

[ The Street View House Numbers (SVHN) Dataset](http://ufldl.stanford.edu/housenumbers/)
- Classes : 10 classes, 1 for each digit. Digit '1' has label 1, '9' has label 9 and '0' has label 10
- Training : 73257 digits for training 
- Testing : 26032 digits for testing, 
- Image type : hous number digits
- Additional : 531131 additional, somewhat less difficult samples, to use as extra training data

Note : It can be seen as similar in flavor to MNIST (e.g., the images are of small cropped digits), but incorporates an order of magnitude more labeled data (over 600,000 digit images) and comes from a significantly harder, unsolved, real world problem (recognizing digits and numbers in natural scene images). SVHN is obtained from house numbers in Google Street View images.


[ILSVRC2012 task 1](https://image-net.org/challenges/LSVRC/2012/index.php)
- Classes : 1000 
-  With tens of thousands of training, validation and testing images.
- Image type : airplane, bird, car .... 
-  he training data, the subset of [ImageNet](https://www.image-net.org/update-mar-11-2021.php) containing the 1000 categories and 1.2 million images,

Note : The 1000 object categories contain both internal nodes and leaf nodes of ImageNet, but do not overlap with each other.

[PASCAL VOC 2009 dataset]()

- Classes : 20 ( persons, animals(bird, cat, cow, dog, horse, sheep),Vehicle(aeroplane, bicycle, boat, bus, car, motorbike, train),Indoor(bottle, chair, dining table, potted plant, sofa, tv/monitor))
- Image type : airplane, bird, car...

Note : Pascal contain Classification/Detection Competitions, Segmentation Competition, Person Layout Taster Competition datasets


[Caltech 101](https://data.caltech.edu/records/20086)
- Classes : 101 categories (About 40 to 800 images per category. Most categories have about 50 images.)(e.g., “helicopter”, “elephant” and “chair” etc.)
- totalling around 9k images.
- Image type : “helicopter”, “elephant” and “chair” etc.



[Caltech 256](https://data.caltech.edu/records/20087)
- Classes : Pictures of objects belonging to 256 categories
- Total 30,607 real-world images,
- Image type : “helicopter”, “elephant” and “chair” etc.

[Flower classification data sets](https://www.robots.ox.ac.uk/~vgg/data/flowers/)

17 Flower Category Dataset
- Classes : 17 (80 images for each class)(common flowers in the UK.)
- Image type : flowers

102 category dataset
- Classes : 102 (Each class consists of between 40 and 258 images.)(common flowers in the UK.)
- Image type : flowers

[Animals with attributes 2](https://cvml.ist.ac.at/AwA/)
- Classes : 50 (animal classes)
- Total 30475 images
- Image type : animals


[Stanford Dogs Dataset](http://vision.stanford.edu/aditya86/ImageNetDogs/)
- Classes : 120
- Number of images: 20,580
- Image type : dogs

[McGill Real-World Face Video Database](https://sites.google.com/site/meltemdemirkus/mcgill-unconstrained-face-video-database)
- Classes : undefined (this dataset particularly focus on head pose ground truth and estimate facial attributes but we can also use in image classification)
- This database contains 18000 video frames of 640x480 resolution from 60 video sequences, each of which recorded from a different subject (31 female and 29 male).
- Image type : face / face expression


[mage Classification: People & Food](https://data.world/crowdflower/image-classification-people-an)
- Classes: unknown (people eating fruits, cakes, and other foodstuffs.)
- Image types : people eating fruits, cakes, and other foodstuffs.

[Images of Crack in Concrete for Classification](https://imerit.net/blog/top-13-machine-learning-image-classification-datasets-all-pbm/)
- Classes : 2 (negative and positive crack images)
- Total data points : 40,000 images of concrete
- Image type : Concrete Crack Images


[Architectural Heritage Elements ](https://old.datahub.io/dataset/architectural-heritage-elements-image-dataset)
- Classes : 10 categories: Altar: 829 images; Apse: 514 images; Bell tower: 1059 images; Column: 1919 images; Dome (inner): 616 images; Dome (outer): 1177 images; Flying buttress: 407 images; Gargoyle (and Chimera): 1571 images; Stained glass: 1033 images; Vault: 1110 images.
- Total datapoints : 10235 images
- Image type : Architectural Heritage Elements


[Fruits 360](https://www.kaggle.com/datasets/moltean/fruits)

- classes: 131 (fruits and vegetables).
- Training set size: 67692 images (one fruit or vegetable per image).
- Test set size: 22688 images (one fruit or vegetable per image).
- The total number of images: 90483.
- Image type : fruit or vegetable



#### Medical Images

[TensorFlow patch_camelyon Medical Images ](https://www.tensorflow.org/datasets/catalog/patch_camelyon)
- Classes : 2(binary)
- Containing over 327,000 color images
- Image type : Histopathologic Cancer Detection. Identify metastatic tissue in histopathologic scans of lymph node sections.

[Recursion Cellular Image Classification ](https://www.kaggle.com/c/recursion-cellular-image-classification/overview/timeline)
- Classes : Your entry will classify images of cells under one of 1,108 different genetic perturbations. 
- Image type: Cellular Images

[Blood cell images](https://www.kaggle.com/datasets/paultimothymooney/blood-cells)
- Classes : 4 (The cell types are Eosinophil, Lymphocyte, Monocyte, and Neutrophil.)
- Total images :  12,500 augmented images(3,000 images for each of 4 different cell types)
- Image type : The cell types are Eosinophil, Lymphocyte, Monocyte, and Neutrophil.

[ChestX-ray8](https://nihcc.app.box.com/v/ChestXray-NIHCC)
- Classes : 8 (eight common disease labels)
- Total : 108,948 frontal-view X-ray images of 32,717 unique patients collected between 1992 and 2015.
- Image type : Chest X-ray


#### Agriculture and Scene

[Indoor Scenes Images](https://www.kaggle.com/datasets/itsahmad/indoor-scenes-cvpr-2019)
- Classes : 67 separate categories(kitchen,operating_room,restaurant_kitchen...)
- Total : 15,000+ images
- Image type : kitchen,operating_room,restaurant_kitchen...

[Images for Weather Recognition](https://data.mendeley.com/datasets/4drtyfjtfy/1)
- Classes : 4 separate categories based on sunrise, cloudy, rainy, and sunshine.
- Total images : 
- Image types : sunrise, cloudy, rainy, and sunshine

[Intel Image Classification](https://www.kaggle.com/datasets/puneet6060/intel-image-classification)
- Classes :  6 categories(buildings,forest,glacier,mountain,sea,street)
- Total datapoints : 25,000 
- Type of image : buildings,forest,glacier,mountain,sea,street

[TensorFlow Sun397 Image Classification Dataset](https://www.tensorflow.org/datasets/catalog/sun397)
- Classes : 397 (house,outdore,station,playground...)
- Total datapoints :  108,000 (The number of images varies across categories, but there are at least 100 images per category.)
- Type of image : house,outdore,station,playground




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


### Automobile and ADAS Related Datasets

[German Traffic Sign Classification Dataset](https://benchmark.ini.rub.de/)




### References 
* https://www.kaggle.com/datasets?search=image&tags=13302-Classification
* https://www.tensorflow.org/datasets/catalog/overview
* https://paperswithcode.com/task/image-classification

##  Detection(object detection,Edge detection)/ Multi-view Object Detection / Segmentation(Image Segmentation) / Saliency(salient) Detection / Semantic labeling


[e-Lab Video Data Set](https://engineering.purdue.edu/elab/eVDS/)
- Classes : 35 (plant,shoes... objects in our environment)
- Total videos : 2050 videos of roughly 10 seconds each.


### Detection 

[COCO](https://cocodataset.org/#home)

- 330K images (>200K labeled),1.5 million object instances,80 object categories,91 stuff categories,5 captions per image

[KITTI](http://www.cvlibs.net/datasets/kitti/eval_object.php)

- The object detection and object orientation estimation benchmark consists of 7481 training images and 7518 test images, comprising a total of 80.256 labeled objects. 


[ImageNet](https://image-net.org/)
- 14,197,122 images and 1,000 categories

[BDD100K](https://www.bdd100k.com/)
- largest open driving video dataset as part of the CVPR

[DOTA](https://www.v7labs.com/open-datasets/dota)
- Dataset for Object deTection in Aerial Images , 11268 Items ,18 Classes , 

[MaskedFaceNet](https://github.com/cabani/MaskedFace-Net)
- MaskedFace-Net is a dataset of human faces with a correctly or incorrectly worn mask (133,783 images) based on the dataset [Flickr-Faces-HQ (FFHQ)](https://github.com/NVlabs/ffhq-dataset).

[CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html)
-The CIFAR-10 dataset consists of 60000 32x32 colour images in 10 classes, with 6000 images per class. There are 50000 training images and 10000 test images.

[LISA Traffic Sign Detection Dataset](https://cvrr.ucsd.edu/LISA/lisa-traffic-sign-dataset.html)
- The LISA Traffic Sign Dataset is a set of videos and annotated frames containing US traffic signs.

[Exclusively Dark (ExDark) Image Dataset](https://github.com/cs-chan/Exclusively-Dark-Image-Dataset)
- 12 class , 7363 Labels

[The 20BN-SOMETHING-SOMETHING Dataset V2](https://developer.qualcomm.com/software/ai-datasets/something-something)
- Total number of videos	220,847/ Training Set	168,913,Validation Set	24,777 / Test/ Set (w/o labels)	27,157 / Labels	174 / Quality	100px / FPS	12


[PASCAL VOC 2007,2009,2010,2011 dataset](http://pascallin.ecs.soton.ac.uk/challenges/VOC/voc2009/index.html)
- Classification/Detection Competitions, Segmentation Competition, Person Layout Taster Competition datasets

[LabelMe dataset](http://labelme.csail.mit.edu/Release3.0/browserTools/php/dataset.php)
- LabelMe is a web-based image annotation tool that allows researchers to label images and share the annotations with the rest of the community. If you use the database, we only ask that you contribute to it, from time to time, by using the labeling tool.

[CMU/VASC & PIE Face dataset](https://www.cs.cmu.edu/afs/cs/project/PIE/MultiPie/Multi-Pie/Home.html)
- The CMU Multi-PIE face database contains more than 750,000 images of 337 people recorded

[Yale Face dataset](http://vision.ucsd.edu/content/yale-face-database)
- The Yale Face Database (size 6.4MB) contains 165 grayscale images in GIF format of 15 individuals.

[Caltech](http://www.vision.caltech.edu/html-files/archive.html)
- Cars, Motorcycles, Airplanes, Faces, Leaves, Backgrounds

[Caltech 101](http://www.vision.caltech.edu/Image_Datasets/Caltech101/Caltech101.html)
- Pictures of objects belonging to 101 categories


[Caltech 256](http://www.vision.caltech.edu/Image_Datasets/Caltech256/)
- Pictures of objects belonging to 256 categories

[Daimler Pedestrian Detection Benchmark](http://www.gavrila.net/Datasets/Daimler_Pedestrian_Benchmark_D/daimler_pedestrian_benchmark_d.html)
- 15,560 pedestrian and non-pedestrian samples (image cut-outs) and 6744 additional full images not containing pedestrians for bootstrapping. The test set contains more than 21,790 images with 56,492 pedestrian labels (fully visible or partially occluded), captured from a vehicle in urban traffic.

[MIT Pedestrian dataset](http://cbcl.mit.edu/software-datasets/PedestrianData.html)
- CVC Pedestrian Datasets

[CVC Pedestrian Datasets](http://adas.cvc.uab.es/elektra/datasets/pedestrian-detection/)
- CBCL Pedestrian Database

[MIT Face dataset](http://cbcl.mit.edu/software-datasets/FaceData2.html)
- CBCL Face Database

[MIT Street dataset](http://cbcl.mit.edu/software-datasets/streetscenes/)
- CBCL Street Database

[INRIA Person Data Set](http://pascal.inrialpes.fr/data/human/)
- A large set of marked up images of standing or walking people

[INRIA car dataset](http://lear.inrialpes.fr/data)
- A set of car and non-car images taken in a parking lot nearby INRIA


[INRIA horse dataset](http://lear.inrialpes.fr/data)
- A set of horse and non-horse images

[H3D Dataset](https://people.eecs.berkeley.edu/~lbourdev/h3d/)
- 3D skeletons and segmented regions for 1000 people in images

[HRI RoadTraffic dataset](http://www.gepperth.net/alexander/interests.html#carbenchmark)
- A large-scale vehicle detection dataset

[BelgaLogos](http://www-sop.inria.fr/members/Alexis.Joly/BelgaLogos/BelgaLogos.html)
- 10000 images of natural scenes, with 37 different logos, and 2695 logos instances, annotated with a bounding box.

[FlickrBelgaLogos](http://www-sop.inria.fr/members/Alexis.Joly/BelgaLogos/FlickrBelgaLogos.html)
- 10000 images of natural scenes grabbed on Flickr, with 2695 logos instances cut and pasted from the BelgaLogos dataset.

[FlickrLogos-32](https://www.uni-augsburg.de/de/fakultaet/fai/informatik/prof/mmc/flickrlogos/)
- The dataset FlickrLogos-32 contains photos depicting logos and is meant for the evaluation of multi-class logo detection/recognition as well as logo retrieval methods on real-world images. It consists of 8240 images downloaded from Flickr.


[TME Motorway Dataset](http://cmp.felk.cvut.cz/data/motorway/)
- 30000+ frames with vehicle rear annotation and classification (car and trucks) on motorway/highway sequences. Annotation semi-automatically generated using laser-scanner data. Distance estimation and consistent target ID over time available.

[PHOS (Color Image Database for illumination invariant feature selection)](https://robotics.pme.duth.gr/research/)
- Phos is a color image database of 15 scenes captured under different illumination conditions. More particularly, every scene of the database contains 15 different images: 9 images captured under various strengths of uniform illumination, and 6 images under different degrees of non-uniform illumination. The images contain objects of different shape, color and texture and can be used for illumination invariant feature detection and selection.

[CaliforniaND: An Annotated Dataset For Near-Duplicate Detection In Personal Photo Collections](http://vintage.winklerbros.net/californiaND.html)
- California-ND contains 701 photos taken directly from a real user's personal photo collection, including many challenging non-identical near-duplicate cases, without the use of artificial image transformations. The dataset is annotated by 10 different subjects, including the photographer, regarding near duplicates.

[USPTO Algorithm Challenge, Detecting Figures and Part Labels in Patents](http://archive.ics.uci.edu/ml/datasets/USPTO+Algorithm+Challenge%2C+run+by+NASA-Harvard+Tournament+Lab+and+TopCoder++++Problem%3A+Pat)
- Contains drawing pages from US patents with manually labeled figure and part labels.

[Abnormal Objects Dataset](https://mldta.com/dataset/abnormal-objects-dataset/)
- Contains 6 object categories similar to object categories in Pascal VOC that are suitable for studying the abnormalities stemming from objects.

[Human detection and tracking using RGB-D camera](https://cv.fudan.edu.cn/humandetection.psp)
- Collected in a clothing store. Captured with Kinect (640*480, about 30fps)

[Multi-Task Facial Landmark (MTFL) dataset](http://mmlab.ie.cuhk.edu.hk/projects/TCDCN.html)
- This dataset contains 12,995 face images collected from the Internet. The images are annotated with (1) five facial landmarks, (2) attributes of gender, smiling, wearing glasses, and head pose.

[WIDER FACE: A Face Detection Benchmark](http://shuoyang1213.me/WIDERFACE/)
- WIDER FACE dataset is a face detection benchmark dataset with images selected from the publicly available WIDER dataset. It contains 32,203 images and 393,703 face annotations.

[PIROPO Database: People in Indoor ROoms with Perspective and Omnidirectional cameras](https://sites.google.com/site/piropodatabase/)
- Multiple sequences recorded in two different indoor rooms, using both omnidirectional and perspective cameras, containing people in a variety of situations (people walking, standing, and sitting). Both annotated and non-annotated sequences are provided, where ground truth is point-based. In total, more than 100,000 annotated frames are available.


[The Boxy vehicle detection dataset](https://boxy-dataset.com/boxy/)
- A vehicle detection dataset with 1.99 million annotated vehicles in 200,000 images. It contains AABB and keypoint labels.

[The Bosch Small Traffic Lights Dataset](https://hci.iwr.uni-heidelberg.de/content/bosch-small-traffic-lights-dataset)
- A dataset for traffic light detection, tracking, and classification.

[DriveU Traffic Light Dataset (DTLD)](https://www.uni-ulm.de/in/iui-drive-u/projekte/driveu-traffic-light-dataset/)
- It contains more than 40.000 images and 230 000 annotated traffic lights and is the largest database for traffic light detection so far containing bounding box labels, track identities and furthermore the following attributes: phase, pictogram, relevancy, occlusion, number of light units and orientation.


[ETH (ETH Pedestrian)](https://data.vision.ee.ethz.ch/cvl/aess/)
- ETH is a dataset for pedestrian detection. The testing set contains 1,804 images in three video clips. The dataset is captured from a stereo rig mounted on car, with a resolution of 640 x 480 (bayered), and a framerate of 13--14 FPS.


[TUD-Brussels Pedestrian](https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/publications)

- In this experiment, we only use 288 images which contain pedestrians . TUD-Brussels test set contains 508 images containing 1498 annotated pedestrians.

[The 2D Shape Structure Dataset](http://2dshapesstructure.github.io/index.html)
- The 2D Shape Structure database is a public, user-generated dataset of 2D shape decompositions into a hierarchy of shape parts with geometric relationships reta...


[ICS-FORTH + Modelling of 2D Shapes with Ellipses](https://sites.google.com/site/costaspanagiotakis/research/EFA)
- The dataset contains more than 4,536 2D shapes included in standard as well as in home-build datasets. Our goal is to represent a given 2D shape with an au...

[Mobile Phone and Webcam Hand Images for Personal Authentication and Identification](https://www.mutah.edu.jo/biometrix/contacts.html)

- This work attempts to provide two Hand Images Databases for hand biometrics: one is created using a mobile phone camera of modest quality, which we called mob...


[Detail 2D Projection DataSet](https://drive.google.com/file/d/0B4xQNTZ70fpPMENrMU9tZndSaEU/view?usp=sharing)
- Detail 2D Projection DataSet is a database of 2d projections of mechanical details with holes. The dataset consists of 13 shape categories where each category i...

[3DVis](https://www.upf.edu/web/cmtech/3dvisdatabase)
- The 3DVis dataset includes a set of 12 heterogeneous scenes for testing 3D scene registration and analysis methods. Models include homogeneous shapes, repetitiv...

[PASCAL Context](https://cs.stanford.edu/~roozbeh/pascal-context/)
- We would like to announce the release of PASCAL-Context dataset. We augmented PASCAL VOC 2010 dataset with annotations for 400+ additional categories. In the cu...

[SHOT 3D shape description](http://vision.deis.unibo.it/research/80-shot)
- The 3D shape description dataset consists of multiple sub-datasets Descriptor Matching - Dataset 1 & 2 (Stanford) These datasets, created from some of the m...

[THUR15000](http://mmcheng.net/gsal/)
- We introduce a labeled dataset of categorized images for evaluating sketch based image retrieval. Using Flickr, we downloaded about 3000 images for each of the ...

[RGB-D Person Re-identification](https://www.iit.it/en/datasets/rgbdid.html)
- The RGB-D Person Re-identification dataset is for person re-identification using depth information. The main motivation is that the standard techniques (such as...

[TUD Shapes 1+2](https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/publications)
- This material is supplementary to Michael Stark, Bernt Schiele. How Good are Local Features for Classes of Geometric Objects. Eleventh IEEE International C...

[EITZ Sketch Quality](http://cybertron.cg.tu-berlin.de/eitz/projects/classifysketch/)
- Humans have used sketching to depict our visual world since prehistoric times. Even today, sketching is possibly the only rendering technique readily available ...

[EITZ Sketch-Based Image Retrieval](http://cybertron.cg.tu-berlin.de/eitz/tvcg_benchmark/index.html)
- We introduce a benchmark for evaluating the performance of large scale sketch-based image retrieval systems. The necessary data is acquired in a controlled user...

[ICG Sketch Retrieval]()

- The ICG Sketch Retrieval dataset consists of XXX hand-drawn sketches for five categories. It is used for content-based image retrieval using shape features for ...

[Simpsons 40 years]()
- Simpsons Homer 40 years is a dataset showing Homer Simpson over the course of 40 years. It is used for video segmentation and shape matching between frames....

[Leaves]()
-The Leaves dataset from X contains X images of leaves. Leaves dataset taken by Markus Weber. California Institute of Technology PhD student under Pietro Per...


[ETHZ Shape](https://people.ee.ethz.ch/~calvin/datasets.html)
- The ETHZ Shape classes dataset from Vittorio Ferrari [?] consists of five object classes and a total of 255 images. All classes contain significant intra-class ...


[Weizmann Horses](https://jamie.shotton.org/work/data.html)
- The multi-scale Weizmann horses (originally from Eran Borenstein, adapted by Jamie Shotton) consists of 656 images which is split into 50+50training, 50+50 vali...


[ETHZ Extended Shape](https://vision.ee.ethz.ch/datasets/index.en.html)
- The ETHZ Extended Shape classes dataset from Konrad Schindler is larger dataset of shape categories, created by merging ETHZ shape classes with Konrad Schindler...


[Tools2D](http://tosca.cs.technion.ac.il/data/)
- The Tools 2D dataset from Bronstein, Bronstein, Bruckstein, and Kimmel [?] for partial similarity experiments and consists of 15 shapes: 5 humans, 5 horses and ...


[Mythological Creatures](http://tosca.cs.technion.ac.il/data/)
-The Mythological Creatures consists of articulated shapes (silhouettes) for partial similarity experiments and contains 15 shapes: 5 humans, 5 horses and 5 cent...


[SIID](http://www.lems.brown.edu/vision/researchAreas/SIID/)
- The SIID silhouette dataset contains... and is from the Shape Indexing of Image Database (SIID). Download SIID silhouette dataset http://www.lems.brown.edu/...

[KIMA216](http://www.lems.brown.edu/vision/researchAreas/SIID/)
- The Kimia 216 has 18 classes each consisting of 12 images. It contains shapes silhouettes for birds, bones, brick, camels, car, children, classic cards, elephan...

[KIMA99](http://www.lems.brown.edu/vision/researchAreas/SIID/)
- The Kimia 99 has 9 classes each consisting of each 11 images. They are part of the Shape Indexing of Image Database (SIID) project, which also contains the SIID...

[KIMIA25](http://www.lems.brown.edu/vision/researchAreas/SIID/)
- The Kimia 25 consists of 6 classes and 25 images. They are part of the Shape Indexing of Image Database (SIID) project, which also contains the SIID silhouette ...

[MPEG-7 Core Experiment CE-Shape-1]()
- MPEG-7 Core Experiment CE-Shape-1 [?] is a popular database for shape matching evaluation consisting of 70 shape categories, where each category is represented ...


[Labeled and Annotated Sequences for Integral Evaluation of SegmenTation Algorithms](https://datasets.bifrost.ai/info/798)

[ChangeDetection.net](https://ieeexplore.ieee.org/document/6238919)


### Multi-view Object Detection

[3D Object Dataset](https://cvgl.stanford.edu/resources.html)

[EPFL Car Dataset](https://www.epfl.ch/labs/cvlab/projects/pose-refinement-energy-ascent/)

[KTTI Dection Dataset](http://www.cvlibs.net/datasets/kitti/eval_object.php)

[SUN 3D Dataset](http://sun3d.cs.princeton.edu/)

[PASCAL 3D+](https://cvgl.stanford.edu/projects/pascal3d.html)

[NYU Car Dataset](http://nyc3d.cs.cornell.edu/)

### Saliency Detection

[Salient Object Detection benchmark](http://mmcheng.net/salobjbenchmark/)
- This benchmark aggregates results from 36 methods over five datasets (MSRA10K, ECSSD, THUR15K, JuddDB, and DUTOMRON).

[AIM](http://www-sop.inria.fr/members/Neil.Bruce/#SOURCECODE)
- 120 Images / 20 Observers (Neil D. B. Bruce and John K. Tsotsos 2005).

[LeMeur](http://people.irisa.fr/Olivier.Le_Meur/visualAttention/)
- 27 Images / 40 Observers (O. Le Meur, P. Le Callet, D. Barba and D. Thoreau 2006).

[Kootstra](https://www.csc.kth.se/~kootstra/index.php?item=215&menu=200)
- 100 Images / 31 Observers (Kootstra, G., Nederveen, A. and de Boer, B. 2008).

[DOVES](http://live.ece.utexas.edu/research/doves/)
- 101 Images / 29 Observers (van der Linde, I., Rajashekar, U., Bovik, A.C., Cormack, L.K. 2009).

[Ehinger](http://cvcl.mit.edu/searchmodels/)
- 912 Images / 14 Observers (Krista A. Ehinger, Barbara Hidalgo-Sotelo, Antonio Torralba and Aude Oliva 2009).

[NUSEF](http://mmas.comp.nus.edu.sg/NUSEF.html)
- 758 Images / 75 Observers (R. Subramanian, H. Katti, N. Sebe1, M. Kankanhalli and T-S. Chua 2010).

[JianLi](http://www.cim.mcgill.ca/~lijian/database.htm)
235 Images / 19 Observers (Jian Li, Martin D. Levine, Xiangjing An and Hangen He 2011).

[Extended Complex Scene Saliency Dataset (ECSSD)](http://www.cse.cuhk.edu.hk/leojia/projects/hsaliency/dataset.html)
- ECSSD contains 1000 natural images with complex foreground or background. For each image, the ground truth mask of salient object(s) is provided.


### Pedestrian Detection
[Caltech Pedestrian Detection Benchmark](http://www.vision.caltech.edu/Image_Datasets/CaltechPedestrians/)

[ETHZ Pedestrian Detection](https://data.vision.ee.ethz.ch/cvl/aess/dataset/)


### Segmentation / video segmentaion 

[DAVIS: Densely Annotated VIdeo Segmentation](https://davischallenge.org/)

[SegTrack v2](https://web.engr.oregonstate.edu/~lif/SegTrack2/dataset.html)


[Image Segmentation with A Bounding Box Prior dataset](https://www.microsoft.com/en-us/research/?from=https%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fcambridge%2Fprojects%2Fvisionimagevideoediting%2Fsegmentation%2Fgrabcut.htm)
- Ground truth database of 50 images with: Data, Segmentation, Labelling - Lasso, Labelling - Rectangle

[PASCAL VOC 2009 dataset](http://pascallin.ecs.soton.ac.uk/challenges/VOC/voc2009/index.html)
- Classification/Detection Competitions, Segmentation Competition, Person Layout Taster Competition datasets

[Motion Segmentation and OBJCUT data](https://www.robots.ox.ac.uk/~vgg/data6.html)
- Cows for object segmentation, Five video sequences for motion segmentation

[Geometric Context Dataset](https://cs.illinois.edu/~dhoiem/projects/data)
- Geometric Context Dataset: pixel labels for seven geometric classes for 300 images

[Crowd Segmentation Dataset](http://server.cs.ucf.edu/~vision/projects/sali/CrowdSegmentation/UCF_CrowdsDataset.zip)
- This dataset contains videos of crowds and other high density moving objects. The videos are collected mainly from the BBC Motion Gallery and Getty Images website. The videos are shared only for the research purposes. Please consult the terms and conditions of use of these videos from the respective websites.

[CMU-Cornell iCoseg Dataset](http://chenlab.ece.cornell.edu/projects/touch-coseg/)
Contains hand-labelled pixel annotations for 38 groups of images, each group containing a common foreground. Approximately 17 images per group, 643 images total.

[Segmentation evaluation database](https://www.wisdom.weizmann.ac.il/~vision/Seg_Evaluation_DB/index.html)
200 gray level images along with ground truth segmentations

[The Berkeley Segmentation Dataset and Benchmark](https://www.wisdom.weizmann.ac.il/~vision/Seg_Evaluation_DB/index.html)
- Image segmentation and boundary detection. Grayscale and color segmentations for 300 images, the images are divided into a training set of 200 images, and a test set of 100 images.

[Weizmann horses](https://www.msri.org/people/members/eranb/)
- 328 side-view color images of horses that were manually segmented. The images were randomly collected from the WWW.

[Saliency-based video segmentation with sequentially updated priors](http://www.kecl.ntt.co.jp/people/kimura.akisato/saliency3.html)
- 10 videos as inputs, and segmented image sequences as ground-truth

[Daimler Urban Segmentation Dataset](http://ww1.6d-vision.com/)
- The dataset consists of video sequences recorded in urban traffic. The dataset consists of 5000 rectified stereo image pairs. 500 frames come with pixel-level semantic class annotations into 5 classes: ground, building, vehicle, pedestrian, sky. Dense disparity maps are provided as a reference.

[DAVIS: Densely Annotated VIdeo Segmentation 2016](https://davischallenge.org/)
- A Benchmark Dataset and Evaluation Methodology for Video Object Segmentation.

[DAVIS: Densely Annotated VIdeo Segmentation 2017](https://davischallenge.org/)
- The 2017 DAVIS Challenge on Video Object Segmentation.

[CO-SKEL](https://drive.google.com/file/d/1cdqnLGpC9ypaOEPag2954BHSQpJgYhBJ/view)
- Object Co-Skeletonization With Co-Segmentation.

[CITY-OSM: Learning Aerial Image Segmentation From Online Maps](https://zenodo.org/record/1154821#.YtwsD9JBx9D)
- +20GB of aerial images obtained from Google Maps (including the groundtruth from OSM).

[Mut1ny Face/Headsegmentation dataset](https://www.mut1ny.com/face-headsegmentation-dataset)
- Head/face segmentation dataset contains over 16k labeled images.

[The Unsupervised LLAMAS dataset](https://unsupervised-llamas.com/llamas/)
- A lane marker detection and segmentation dataset of 100,000 images with 3d lines, pixel level dashed markers, and curves for individual lines.



### Semantic labeling

[Stanford background dataset](http://dags.stanford.edu/projects/scenedataset.html)

[CamVid](http://mi.eng.cam.ac.uk/research/projects/VideoRec/CamVid/)

[Barcelona Dataset](http://www.cs.unc.edu/~jtighe/Papers/ECCV10/)

[SIFT Flow Dataset](http://www.cs.unc.edu/~jtighe/Papers/ECCV10/siftflow/SiftFlowDataset.zip)


### References
* https://pub.towardsai.net/50-object-detection-datasets-from-different-industry-domains-1a53342ae13d

## Recognition / Facial recognition / Identification / Material Recognition / Scene Recognition / Fine-grained Visual Recognition



[Face and Gesture Recognition Working Group FGnet](http://www-prima.inrialpes.fr/FGnet/)
- Face and Gesture Recognition Working Group FGnet

[Feret](http://www.itl.nist.gov/iad/humanid/feret/feret_master.html)
- Face and Gesture Recognition Working Group FGnet

[PUT face](https://biometrics.cie.put.poznan.pl/)
- 9971 images of 100 people

[Labeled Faces in the Wild](http://vis-www.cs.umass.edu/lfw/)
- A database of face photographs designed for studying the problem of unconstrained 
face recognition

[Urban scene recognition](http://www.lara.prd.fr/benchmarks/trafficlightsrecognition)
- Traffic Lights Recognition, Lara's public benchmarks.

[PubFig: Public Figures Face Database](https://www.cs.columbia.edu/CAVE/databases/pubfig/)
- The PubFig database is a large, real-world face dataset consisting of 58,797 images of 200 people collected from the internet. Unlike most other existing face datasets, these images are taken in completely uncontrolled situations with non-cooperative subjects.

[YouTube Faces](http://www.cs.tau.ac.il/~wolf/ytfaces/)
- The data set contains 3,425 videos of 1,595 different people. The shortest clip duration is 48 frames, the longest clip is 6,070 frames, and the average length of a video clip is 181.3 frames.

[MSRC-12: Kinect gesture data set](https://www.microsoft.com/en-us/download/details.aspx?id=52283&from=http%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fcambridge%2Fprojects%2Fmsrc12%2F)
- The Microsoft Research Cambridge-12 Kinect gesture data set consists of sequences of human movements, represented as body-part locations, and the associated gesture to be recognized by the system.

[QMUL underGround Re-IDentification (GRID) Dataset](http://www.eecs.qmul.ac.uk/~ccloy/downloads_qmul_underground_reid.html)
- This dataset contains 250 pedestrian image pairs + 775 additional images captured in a busy underground station for the research on person re-identification.

[Person identification in TV series](https://cvhci.anthropomatik.kit.edu/~baeuml/publications/semi-supervised-learning-with-constraints-for-person-identification-in-multimedia-data/)
- Face tracks, features and shot boundaries from our latest CVPR 2013 paper. It is obtained from 6 episodes of Buffy the Vampire Slayer and 6 episodes of Big Bang Theory.

[ChokePoint Dataset](http://itee.uq.edu.au/~uqywong6/chokepoint.html)
- ChokePoint is a video dataset designed for experiments in person identification/verification under real-world surveillance conditions. The dataset consists of 25 subjects (19 male and 6 female) in portal 1 and 29 subjects (23 male and 6 female) in portal 2.

[Hieroglyph Dataset](https://staff.fnwi.uva.nl/j.c.vangemert/pub/EgyptianHieroglyphDataset.tar.gz)
- Ancient Egyptian Hieroglyph Dataset.

[Rijksmuseum Challenge Dataset: Visual Recognition for Art Dataset](https://staff.fnwi.uva.nl/t.e.j.mensink/rijks/)
- Over 110,000 photographic reproductions of the artworks exhibited in the Rijksmuseum (Amsterdam, the Netherlands). Offers four automatic visual recognition challenges consisting of predicting the artist, type, material and creation year. Includes a set of baseline features, and offer a baseline based on state-of-the-art image features encoded with the Fisher vector.

[The OU-ISIR Gait Database, Treadmill Dataset](http://www.am.sanken.osaka-u.ac.jp/BiometricDB/GaitTM.html)
- Treadmill gait datasets composed of 34 subjects with 9 speed variations, 68 subjects with 68 subjects, and 185 subjects with various degrees of gait fluctuations.

[The OU-ISIR Gait Database, Large Population Dataset](http://www.am.sanken.osaka-u.ac.jp/BiometricDB/GaitLP.html)
- Large population gait datasets composed of 4,016 subjects.

[Pedestrian Attribute Recognition At Far Distance](http://mmlab.ie.cuhk.edu.hk/projects/PETA.html)
- Large-scale PEdesTrian Attribute (PETA) dataset, covering more than 60 attributes (e.g. gender, age range, hair style, casual/formal) on 19000 images.

[FaceScrub Face Dataset](http://vintage.winklerbros.net/facescrub.html)
- The FaceScrub dataset is a real-world face dataset comprising 107,818 face images of 530 male and female celebrities detected in images retrieved from the Internet. The images are taken under real-world situations (uncontrolled conditions). Name and gender annotations of the faces are included.

[Depth-Based Person Identification](https://www.albert.cm/projects/ram_person_id/)
- Depth-Based Person Identification from Top View Dataset.

[IMDb-Face: A large-scale noise-controlled face recognition dataset](https://github.com/fwang91/IMDb-Face)
- IMDb-Face is a new large-scale noise-controlled dataset for face recognition research. The dataset contains about 1.7 million faces, 59k identities.

[Open MIC dataset for Domain Adaptation and Few-shot Learning](http://users.cecs.anu.edu.au/~koniusz/openmic-dataset/)
- ECCV 2018: Open Museum Identification Challenge dataset, photos of exhibits captured in 10 distinct exhibition spaces of several museums which showcase paintings, timepieces, sculptures, glassware, relics, science exhibits, natural history pieces, ceramics, pottery, tools and indigenous crafts.


### Material Recognition

[OpenSurface](http://opensurfaces.cs.cornell.edu/)

[Flickr Material Database](http://people.csail.mit.edu/celiu/CVPR2010/)

[Materials in Context Dataset](http://opensurfaces.cs.cornell.edu/publications/minc/)


### Scene Recognition

[SUN Database](http://places2.csail.mit.edu/)

[Place Dataset](http://places.csail.mit.edu/)

### Fine-grained Visual Recognition

[Fine-grained Classification Challenge](https://sites.google.com/site/fgcomp2013/)

[Caltech-UCSD Birds 200](http://www.vision.caltech.edu/visipedia/CUB-200.html)

## Content-based image retrieval

CIFAR-10 
2009 
- classes: 10 
- Training: 50,000 
- Test : 10,000 
- Image type: Object Category Images

NUS-WIDE 
2009 
- classes: 21 
- Training : 97,214 
- Test: 65,075 
- Image type: Scene Images

MNIST 
1998 

- classes : 10 
- Training: 60,000 
- Test : 10,000 
- Image type: Handwritten Digit Images

SVHN
2011 

- classes: 10 
- Training: 73,257 
- Test: 26,032 
- Image Type: House Number Images


SUN397 
2010 

- classes: 397 
- Training: 100,754 
- Test: 8,000 
- Image type: Scene Images


UT-ZAP50K
2014 
- classes: 4 
- Training: 42,025 
- Test: 8,000 
- Image type: Shoes Images


Yahoo-1M 
2015 

- classes: 116 
- Training: 1,011,723 
- Test: 112,363 
- Image type: Clothing Images


ILSVRC2012 
2012 
- classes: 1,000 
- Training: ∼1.2 M 
- Test: 50,000 
- Image type: Object Category Images


MS COCO 
2015 

- classes: 80 
- Training: 82,783 
- Test: 40,504 
- Image type: Common Object Images


MIRFlicker-1M 
2010 
- -
- Training : 1 M 
- - 
- Image type: Scene Images


Google Landmarks
2017 
- classes: 15 K 
- Training: ∼1 M 
- - 
- Image type: Landmark Images


Google Landmarks
v2 
2020 
- classes : 200 K 
- Training: 5 M 
- - 
- Image type: Landmark Images


Clickture 
2013 
- Classes: 73.6 M 
- Training: 40 M 
- - 
- Image type: Search Log


## Action(Action Classification in Video)/ Pose estimation / Human pose / Expression 

### Action (Action Classification in Video)

[UCF Sports Action Dataset](http://server.cs.ucf.edu/~vision/projects/action_mach/ucf_sports_actions.zip)
- This dataset consists of a set of actions collected from various sports which are typically featured on broadcast television channels such as the BBC and ESPN. The video sequences were obtained from a wide range of stock footage websites including BBC Motion gallery, and GettyImages.

[UCF Aerial Action Dataset](http://server.cs.ucf.edu/~vision/aerial/index.html)
- This dataset features video sequences that were obtained using a R/C-controlled blimp equipped with an HD camera mounted on a gimbal.The collection represents a diverse pool of actions featured at different heights and aerial viewpoints. Multiple instances of each action were recorded at different flying altitudes which ranged from 400-450 feet and were performed by different actors.

[UCF YouTube Action Dataset](http://server.cs.ucf.edu/~vision/projects/liujg/YouTube_Action_dataset.html)
- It contains 11 action categories collected from YouTube.

[Weizmann action recognition](https://www.wisdom.weizmann.ac.il/~vision/SpaceTimeActions.html)
- Walk, Run, Jump, Gallop sideways, Bend, One-hand wave, Two-hands wave, Jump in place, Jumping Jack, Skip.

[UCF50](http://server.cs.ucf.edu/~vision/data/UCF50.rar)
- UCF50 is an action recognition dataset with 50 action categories, consisting of realistic videos taken from YouTube.

[ASLAN](http://www.openu.ac.il/home/hassner/data/ASLAN/)
- The Action Similarity Labeling (ASLAN) Challenge.

[MSR Action Recognition Datasets](https://www.microsoft.com/en-us/research/people/zliu/?from=https%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fpeople%2Fzliu%2Factionrecorsrc%2Fdefault.htm)
- The dataset was captured by a Kinect device. There are 12 dynamic American Sign Language (ASL) gestures, and 10 people. Each person performs each gesture 2-3 times.

[KTH Recognition of human actions](https://www.nada.kth.se/cvap/actions/)
- Contains six types of human actions (walking, jogging, running, boxing, hand waving and hand clapping) performed several times by 25 subjects in four different scenarios: outdoors, outdoors with scale variation, outdoors with different clothes and indoors.

[Hollywood-2 Human Actions and Scenes dataset](https://www.di.ens.fr/~laptev/download.html)
- Hollywood-2 datset contains 12 classes of human actions and 10 classes of scenes distributed over 3669 video clips and approximately 20.1 hours of video in total.

[Collective Activity Dataset](http://www.eecs.umich.edu/vision/activity-dataset.html)
- This dataset contains 5 different collective activities : crossing, walking, waiting, talking, and queueing and 44 short video sequences some of which were recorded by consumer hand-held digital camera with varying view point.

[Olympic Sports Dataset](http://vision.stanford.edu/Datasets/OlympicSports/)
- The Olympic Sports Dataset contains YouTube videos of athletes practicing different sports.

[SDHA 2010](http://cvrc.ece.utexas.edu/SDHA2010/)
- Surveillance-type videos

[VIRAT Video Dataset](https://viratdata.org/)
- The dataset is designed to be realistic, natural and challenging for video surveillance domains in terms of its resolution, background clutter, diversity in scenes, and human activity/event categories than existing action recognition datasets.

[HMDB: A Large Video Database for Human Motion Recognition](https://serre-lab.clps.brown.edu/resource/hmdb-a-large-human-motion-database/)
- Collected from various sources, mostly from movies, and a small proportion from public databases, YouTube and Google videos. The dataset contains 6849 clips divided into 51 action categories, each containing a minimum of 101 clips.

[Stanford 40 Actions Dataset](http://vision.stanford.edu/Datasets/40actions.html)
- Dataset of 9,532 images of humans performing 40 different actions, annotated with bounding-boxes.

[50Salads dataset](https://cvip.computing.dundee.ac.uk/datasets/foodpreparation/50salads/)
- Fully annotated dataset of RGB-D video data and data from accelerometers attached to kitchen objects capturing 25 people preparing two mixed salads each (4.5h of annotated data). Annotated activities correspond to steps in the recipe and include phase (pre-/ core-/ post) and the ingredient acted upon.

[Penn Sports Action](https://www.seas.upenn.edu/~menglong/acteme.html#dataset)
The dataset contains 2326 video sequences of 15 different sport actions and human body joint annotations for all sequences.


[CVRR-HANDS 3D](https://cvrr.ucsd.edu/LISA/hand.html)
- A Kinect dataset for hand detection in naturalistic driving settings as well as a challenging 19 dynamic hand gesture recognition dataset for human machine interfaces.

[TUM Kitchen Data Set](https://ias.in.tum.de/software/kitchen-activity-data)
- Observations of several subjects setting a table in different ways. Contains videos, motion capture data, RFID tag readings,...

[TUM Breakfast Actions Dataset](https://serre-lab.clps.brown.edu/resource/breakfast-actions-dataset/)
- This dataset comprises of 10 actions related to breakfast preparation, performed by 52 different individuals in 18 different kitchens.

[MPII Cooking Activities Dataset](https://www.mpi-inf.mpg.de/departments/computer-vision-and-machine-learning/research/human-activity-recognition/mpii-cooking-activities-dataset/)
- Cooking Activities dataset.

[GTEA Gaze+ Dataset](https://www.cc.gatech.edu/grads/a/afathi3/GTEA_Gaze_Website/GTEA_Gaze+.html)
- This dataset consists of seven meal-preparation activities, each performed by 10 subjects. Subjects perform the activities based on the given cooking recipes.

[UTD-MHAD: multimodal human action recogniton dataset](http://www.utdallas.edu/~kehtar/UTD-MHAD.html)
- The dataset consists of four temporally synchronized data modalities. These modalities include RGB videos, depth videos, skeleton positions, and inertial signals (3-axis acceleration and 3-axis angular velocity) from a Kinect RGB-D camera and a wearable inertial sensor for a comprehensive set of 27 human actions.

[Action Recognition Datasets: "NTU RGB+D" Dataset and "NTU RGB+D 120" Dataset](https://rose1.ntu.edu.sg/datasets/actionrecognition.asp)
- "NTU RGB+D" contains 60 action classes and 56,880 video samples. "NTU RGB+D 120" extends "NTU RGB+D" by adding another 60 classes and another 57,600 video samples, i.e., "NTU RGB+D 120" has 120 classes and 114,480 samples in total. These two datasets both contain RGB videos, depth map sequences, 3D skeletal data, and infrared (IR) videos for each sample. Each dataset is captured by three Kinect V2 cameras concurrently.

### Pose estimation / Human pose / Expression 
* Pose Estimation is a computer vision technique to predict and track the location of a person or object.
* This is typically done by identifying, locating, and tracking a number of keypoints on a given object or person. 

[Leeds Sport Poses](https://docs.activeloop.ai/datasets/lsp-dataset#:~:text=What%20is%20LSP%20Dataset%3F,%22%2C%20and%20%22athletics%22.)
- The LSP dataset contains 10,000 images gathered from Flickr searches for the tags "parkour", "gymnastics", and "athletics".

[AFEW (Acted Facial Expressions In The Wild)/SFEW (Static Facial Expressions In The Wild)](https://cs.anu.edu.au/few/)
- Dynamic temporal facial expressions data corpus consisting of close to real world environment extracted from movies.

[Expression in-the-Wild (ExpW) Dataset](http://mmlab.ie.cuhk.edu.hk/projects/socialrelation/index.html)
- Contains 91,793 faces manually labeled with expressions. Each of the face images was manually annotated as one of the seven basic expression categories: â€œangryâ€, â€œdisgustâ€, â€œfearâ€, â€œhappyâ€, â€œsadâ€, â€œsurpriseâ€, or â€œneutralâ€.

[ETHZ CALVIN Dataset](https://people.ee.ethz.ch/~calvin/datasets.html)
- CALVIN research group datasets

[HandNet (annotated depth images of articulating hands)](http://www.cs.technion.ac.il/~twerd/HandNet/)
- This dataset includes 214971 annotated depth images of hands captured by a RealSense RGBD sensor of hand poses. Annotations: per pixel classes, 6D fingertip pose, heatmap. Images -> Train: 202198, Test: 10000, Validation: 2773. Recorded at GIP Lab, Technion.

[3D Human Pose Estimation](http://albert.cm/projects/viewpoint_3d_pose/)
- Depth videos + ground truth human poses from 2 viewpoints to improve 3D human pose estimation.

[Dynamic Faust](https://dfaust.is.tue.mpg.de/)
- More than 40.000 scans of people very accurately registered. Scans contain texture so synthetic videos/images are easy to generate. See also Dyna: A Model of Dynamic Human Shape in Motio.

[BUFF dataset](https://buff.is.tue.mpg.de/)
- About 10.000 scans of people in clothing and the estimated body shape of people underneath. Scans contain texture so synthetic videos/images are easy to generate.

[TNT 15 dataset](https://www.tnt.uni-hannover.de/project/TNT15/)
- Several sequences of video synchronised by 10 Inertial Sensors (IMU) worn at the extremities.

[Extended Chictopia dataset](https://files.is.tuebingen.mpg.de/classner/gp/)
- Chictopia dataset with additional processed annotations (face) and SMPL body model fits to the images. The copyright of the images belongs to the original authors of Chictopia.


[Professional Portrait Dataset](https://sites.psu.edu/farshidfarhat/2017/07/02/intelligent-portrait-composition-assistance-integrating-deep-learned-models-and-photography-idea-retrieval/)
- Over 320,000 highly-rated portrait images crawled from 500px website.


## Optical character recognition (OCR)

[Text OCR](https://textvqa.org/textocr/)
- 28,134 natural images from TextVQA
- 903,069 annotated scene-text words
- 32 words per image on average

[NIST Database](https://www.nist.gov/services-resources/software/public-domain-ocr)
- The US National Institute of Science publishes handwriting from 3600 writers, including more than 800,000 character images.

[FUNSD](https://guillaumejaume.github.io/FUNSD/)
- Form Understanding in Noisy Scanned Documents (FUNSD) comprises 199 real, fully annotated, scanned forms. 

[ICDAR 2003](http://www.imglab.org/db/index.html)
- The ICDAR2003 dataset is a dataset for scene text recognition. It contains 507 natural scene images (including 258 training images and 249 test images) in total.

[ST-VQA](https://rrc.cvc.uab.es/?ch=11)
- ST-VQA aims to highlight the importance of exploiting high-level semantic information present in images as textual cues in the VQA process.


[Devangri Characters](http://www.iapr-tc11.org/mediawiki/index.php?title=Devanagari_Character_Dataset)
- A dataset of handwritten Devangari characters, composed of 1800 samples from 36 character classes obtained by 25 native writers.


[Mathematics Expressions](http://www.iapr-tc11.org/mediawiki/index.php?title=CROHME:_Competition_on_Recognition_of_Online_Handwritten_Mathematical_Expressions)
- More than 10,000 expressions, including more than 101 mathematical symbols.


[Chinese Characters](http://www.iapr-tc11.org/mediawiki/index.php?title=Harbin_Institute_of_Technology_Opening_Recognition_Corpus_for_Chinese_Characters_(HIT-OR3C))
- A dataset of handwritten Chinese characters containing 909,818 images that corresponds to about 10 news articles.

[Arabic Printed Text](https://diuf.unifr.ch/diva/APTI/)
- Contains a lexicon of 113,284 words, and uses 10 Arabic fonts.

[Document database](http://www.iapr-tc11.org/mediawiki/index.php?title=IAM_Online_Document_Database_(IAMonDo-database))
- Contains 941 online handwritten documents by 189 writers, and covers lists, tables, formulas, diagrams and drawings.

[Iam On-line Handwriting](https://fki.tic.heia-fr.ch/databases/iam-on-line-handwriting-database)
- Contains forms of handwritten English text acquired on a whiteboard, and includes more than 1700 entries.

[Street View Text](http://www.iapr-tc11.org/mediawiki/index.php?title=The_Street_View_Text_Dataset)
- The Street View Text dataset was harvested from Google Street View, and mostly deals with outdoor street level signs and boards.

[Street View House Numbers](http://www.iapr-tc11.org/mediawiki/index.php?title=The_Street_View_House_Numbers_(SVHN)_Dataset)
- Contains 73257 digits of house street numbers, taken from Google Street View.

[Natural Environment OCR](http://www.iapr-tc11.org/mediawiki/index.php?title=NEOCR:_Natural_Environment_OCR_Dataset)
- A dataset that contains 659 real world images with 5238 annotations of text.

[Scene Text](http://www.iapr-tc11.org/mediawiki/index.php?title=KAIST_Scene_Text_Database)
- Contains 3000 images captured in different environments, including outdoors and indoors scenes under different lighting conditions (clear day, night, strong artificial lights, etc).

[Text Detection](http://www.iapr-tc11.org/mediawiki/index.php?title=MSRA_Text_Detection_500_Database_(MSRA-TD500))
- Contains 500 natural images, which are taken using a pocket camera. The indoor images are mainly signs, doorplates and caution plates while the outdoor images are mostly guide boards and billboards.

[Stanford OCR](http://ai.stanford.edu/~btaskar/ocr/)
- Contains handwritten words dataset collected by MIT Spoken Language Systems Group, published by Stanford.

[Chars74K Data](http://www.ee.surrey.ac.uk/CVSSP/demos/chars74k/)
- This has 74K images of both English and Kannada digits.

## 2D code reading

 * 2D code reading – reading of 2D codes such as data matrix and QR codes.


[QR-DN1.0 dataset](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8627996/)
- The QR-DN1.0 dataset includes 5 categories of QR codes that will cover low to high density levels. Each group has 15 QR codes: 5 images for testing and 10 images for training. 


[Dynamosoft](https://www.dynamsoft.com/codepool/data-matrix-reading-benchmark-and-comparison.html)
- The data set has 57 valid images with 112 Data Matrix codes. The images are put into three categories: synthetic, Internet and industrial.


## Shape Recognition Technology (SRT)

[SHAPES](https://paperswithcode.com/dataset/shapes-1)
- There are 244 questions and 15,616 images in total, with all questions having a yes and no answer (and corresponding supporting image). Each image is a 30×30 RGB image depicting a 3×3 grid of objects. Each object is characterized by shape (circle, square, triangle), colour (red, green, blue) and size (small, big).

## Egomotion

* Egomotion refers to estimating a camera's motion relative to a rigid scene.

[Stereo Ego-Motion Dataset](https://lmb.informatik.uni-freiburg.de/resources/datasets/StereoEgomotion/)
- This dataset contains 494 full-HD videos across 4 categories - car, cat, chair, dog. 

[Paired Egocentric Video (PEV) Dataset (CVPR’16)](https://www.ut-vision.org/datasets/)
- ...

## video tracking/ object tracking

[BIWI Walking Pedestrians dataset](https://vision.ee.ethz.ch/datasets/)
- Walking pedestrians in busy scenarios from a bird eye view

["Central" Pedestrian Crossing Sequences](https://vision.ee.ethz.ch/datasets/)
- Three pedestrian crossing sequences

[Pedestrian Mobile Scene Analysis](https://vision.ee.ethz.ch/datasets/)
- The set was recorded in Zurich, using a pair of cameras mounted on a mobile platform. It contains 12'298 annotated pedestrians in roughly 2'000 frames.


[Head tracking](http://www.clemson.edu/cecas/)
- BMP image sequences.

[KIT AIS Dataset](https://www.ipf.kit.edu/downloads.php)
- Data sets for tracking vehicles and people in aerial image sequences.

[MIT Traffic Data Set](http://www.ee.cuhk.edu.hk/~xgwang/MITtraffic.html)
- MIT traffic data set is for research on activity analysis and crowded scenes. It includes a traffic video sequence of 90 minutes long. It is recorded by a stationary camera.

[Shinpuhkan 2014 dataset: Multi-Camera Pedestrian Dataset for Tracking People across Multiple Cameras](http://www.mm.media.kyoto-u.ac.jp/en/datasets/shinpuhkan)
- This dataset consists of more than 22,000 images of 24 people which are captured by 16 cameras installed in a shopping mall "Shinpuh-kan". All images are manually cropped and resized to 48x128 pixels, grouped into tracklets and added annotation.

[ATC shopping center dataaset](https://dil.atr.jp/crest2010_HRI/ATC_dataset/)
- The tracking environment consists of multiple 3D range sensors, covering an area of about 900 m2, in the "ATC" shopping center in Osaka, Japan.

[Human detection and tracking using RGB-D camera](http://www.cv.fudan.edu.cn/humandetection.htm)
- Collected in a clothing store. Captured with Kinect (640*480, about 30fps)

[Multiple Camera Tracking](http://www.santhoshsunderrajan.com/datasets.html#hfh_tracking)
- Hallway Corridor - Multiple Camera Tracking: An indoor camera network dataset with 6 cameras (contains ground plane homography).

[Multiple Object Tracking Benchmark](https://motchallenge.net/)
- A centralized benchmark for multi-object tracking.

[Stanford Drone Dataset](https://cvgl.stanford.edu/projects/uav_data/)
- The dataset consists of eight unique scenes in crowded spaces such as a university campus or the sidewalks of a busy street.

[Moving cameras monitoring the same scenes](https://web.stanford.edu/~alahi/FixMobdata.htm)
- Low-resolution RGB videos + ground truth trajectories from multiple fixed and moving cameras monitoring the same scenes (indoor and outdoor) to improve object tracking and matching.

Visual Tracking

[Visual Tracker Benchmark](https://sites.google.com/site/trackerbenchmark/benchmarks/v10)

[Visual Tracker Benchmark v1.1](https://sites.google.com/site/benchmarkpami/)

[VOT Challenge](https://www.votchallenge.net/)

[Princeton Tracking Benchmark](http://tracking.cs.princeton.edu/)

[Tracking Manipulation Tasks (TMT)](http://webdocs.cs.ualberta.ca/~vis/trackDB/)

## Optical flow

* To determine, for each point in the image, how that point is moving relative to the image plane, i.e., its apparent motion. This motion is a result both of how the corresponding 3D point is moving in the scene and how the camera is moving relative to the scene.

[Middlebury Optical Flow Evaluation](https://vision.middlebury.edu/flow/)

[MPI-Sintel Optical Flow Dataset and Evaluation](http://sintel.is.tue.mpg.de/)

[The KITTI Vision Benchmark Suite](http://www.cvlibs.net/datasets/kitti/eval_stereo_flow.php?benchmark=flow)

[HCI Challenge](http://hci.iwr.uni-heidelberg.de/Benchmarks/document/Challenging_Data_for_Stereo_and_Optical_Flow/)


## Scene reconstruction / multiview(multiview reconstruction) / 3D Face Animation


[3D scene data](https://qianyi.info/scenedata.html)

[Stanford 3D Scene Data](https://drive.google.com/drive/folders/0B6qjzcYetERgaW5zRWtZc2FuRDg?resourcekey=0-f4ggKkXE226MOngzvCvJ8w)

[Multi-View Stereo Reconstruction](https://vision.middlebury.edu/mview/)

[RetrievalFuse](https://nihalsid.github.io/retrieval-fuse/)

[3D Photography Dataset](http://www-cvr.ai.uiuc.edu/ponce_grp/data/mview/)
- Multiview stereo data sets: a set of images

[Multi-view Visual Geometry group's data set](https://www.robots.ox.ac.uk/~vgg/data1.html)
- Dinosaur, Model House, Corridor, Aerial views, Valbonne Church, Raglan Castle, Kapel sequence

[Oxford reconstruction data set (building reconstruction)](https://www.robots.ox.ac.uk/~vgg/data2.html)
- Oxford colleges

[Multi-View Stereo dataset (Vision Middlebury)](https://vision.middlebury.edu/mview/data/)
- Temple, Dino

[Multi-View Stereo for Community Photo Collections](http://grail.cs.washington.edu/projects/mvscpc/)
- Venus de Milo, Duomo in Pisa, Notre Dame de Paris


[IS-3D Data](http://cmp.felk.cvut.cz/projects/is3d/Data.html)
- Dataset provided by Center for Machine Perception

[CVLab dataset](https://www.epfl.ch/labs/cvlab/~strecha/multiview/denseMVS.html)
- CVLab dense multi-view stereo image database

[3D Objects on Turntable](http://www.vision.caltech.edu/pmoreels/Datasets/TurntableObjects/)
- Objects viewed from 144 calibrated viewpoints under 3 different lighting conditions

[Object Recognition in Probabilistic 3D Scenes](https://vision.lems.brown.edu/project_desc/Object-Recognition-in-Probabilistic-3D-Scenes)
- Images from 19 sites collected from a helicopter flying around Providence, RI. USA. The imagery contains approximately a full circle around each site.

[Multiple cameras fall dataset](http://www.iro.umontreal.ca/~labimage/Dataset/)
- 24 scenarios recorded with 8 IP video cameras. The first 22 first scenarios contain a fall and confounding events, the last 2 ones contain only confounding events.

[CMP Extreme View Dataset](http://cmp.felk.cvut.cz/wbs/)
- 15 wide baseline stereo image pairs with large viewpoint change, provided ground truth homographies.

[KTH Multiview Football Dataset II](https://www.csc.kth.se/cvap/cvg/?page=footballdataset2)
- This dataset consists of 8000+ images of professional footballers during a match of the Allsvenskan league. It consists of two parts: one with ground truth pose in 2D and one with ground truth pose in both 2D and 3D.

[Disney Research light field datasets](https://www.disneyresearch.com/project/lightfields/)
- This dataset includes: camera calibration information, raw input images we have captured, radially undistorted, rectified, and cropped images, depth maps resulting from our reconstruction and propagation algorithm, depth maps computed at each available view by the reconstruction algorithm without the propagation applied.

[CMU Panoptic Studio Dataset](http://domedb.perception.cs.cmu.edu/)
- Multiple people social interaction dataset captured by 500+ synchronized video cameras, with 3D full body skeletons and calibration data.

[4D Light Field Dataset](https://lightfield-analysis.uni-konstanz.de/)
- 24 synthetic scenes. Available data per scene: 9x9 input images (512x512x3) , ground truth (disparity and depth), camera parameters, disparity ranges, evaluation masks.

### 3D Face Animation


## Image Generation/Image restoration / De-noising / Super-Resolution


### Super-Resolution

[Single-Image Super-Resolution: A Benchmark](https://directory.ucmerced.edu/)


### Image Deblurring

[Sun dataset](http://cs.brown.edu/~lbsun/deblur2013/deblur2013iccp.html)

[Levin dataset](http://www.wisdom.weizmann.ac.il/~levina/papers/LevinEtalCVPR09Data.rar)

## Stereo Vision
* Is the process of extracting 3D information from digital images taken by two cameras displaced horizontally from one another to obtain two different views of the same scene.

[Middlebury Stereo Vision](https://vision.middlebury.edu/stereo/)

[The KITTI Vision Benchmark Suite](http://www.cvlibs.net/datasets/kitti/eval_stereo_flow.php?benchmark=stero)

[LIBELAS: Library for Efficient Large-scale Stereo Matching](http://www.cvlibs.net/software/libelas/)

[Ground Truth Stixel Dataset](http://ww1.6d-vision.com/)


## Intrinsic Images

[Ground-truth dataset and baseline evaluations for intrinsic image algorithms](http://www.mit.edu/~kimo/publications/intrinsic/)

[Intrinsic Images in the Wild](http://opensurfaces.cs.cornell.edu/intrinsic/)

[Intrinsic Image Evaluation on Synthetic Complex Scenes](http://www.cic.uab.cat/Datasets/synthetic_intrinsic_image_dataset/)


## Visual Surveillance

[VIRAT](https://viratdata.org/)

[CAM2](https://cam2.ecn.purdue.edu/)


[CAVIAR](https://homepages.inf.ed.ac.uk/rbf/CAVIARDATA1/)
- For the CAVIAR project a number of video clips were recorded acting out the different scenarios of interest. These include people walking alone, meeting with others, window shopping, entering and exitting shops, fighting and passing out and last, but not least, leaving a package in a public place.

[ViSOR](https://aimagelab.ing.unimore.it/visor/)
- ViSOR contains a large set of multimedia data and the corresponding annotations.

[CUHK Crowd Dataset](http://www.ee.cuhk.edu.hk/en-gb/~jshao/CUHKcrowd_files/cuhk_crowd_dataset.htm)
- 474 video clips from 215 crowded scenes, with ground truth on group detection and video classes.?

[TImes Square Intersection (TISI) Dataset](http://personal.ie.cuhk.edu.hk/~ccloy/downloads_qmul_TISI_dataset.html)
- A busy outdoor dataset for research on visual surveillance.

[Educational Resource Centre (ERCe) Dataset](http://personal.ie.cuhk.edu.hk/~ccloy/downloads_qmul_ERCe_dataset.html)
- An indoor dataset collected from a university campus for physical event understanding of long video streams.

[PIROPO Database: People in Indoor ROoms with Perspective and Omnidirectional cameras](https://www.gti.ssr.upm.es/research/gti-data/databases)
- Multiple sequences recorded in two different indoor rooms, using both omnidirectional and perspective cameras, containing people in a variety of situations (people walking, standing, and sitting). Both annotated and non-annotated sequences are provided, where ground truth is point-based. In total, more than 100,000 annotated frames are available.

[UNICITY: A depth maps database for people detection in security airlocks](https://zenodo.org/record/2556679#.Ytw-INJBx9C)
- UNICITY consists of 58k images collected from 65 recorded sequences with one or two people performing different behaviors including attacks and trickeries. It also provides full annotation of people such as the location of head and shoulders.


## Image Captioning

[Flickr 8K](http://nlp.cs.illinois.edu/HockenmaierGroup/Framing_Image_Description/KCCA.html)

[Flickr 30K](http://shannon.cs.illinois.edu/DenotationGraph/)

[Microsoft COCO](http://mscoco.org/)


## Foreground/Background

[Wallflower Dataset](https://www.microsoft.com/en-us/research/people/jckrumm/?from=https%3A%2F%2Fresearch.microsoft.com%2Fen-us%2Fum%2Fpeople%2Fjckrumm%2FWallFlower%2FTestImages.htm)
- For evaluating background modelling algorithms

[Foreground/Background Microsoft Cambridge Dataset](https://www.microsoft.com/en-us/download/details.aspx?id=52644)
- Foreground/Background segmentation and Stereo dataset from Microsoft Cambridge

[Stuttgart Artificial Background Subtraction Dataset](https://www.vis.uni-stuttgart.de/forschung/informationsvisualisierung-und-visual-analytics/visuelle-analyse-videostroeme/sabs.html)
- The SABS (Stuttgart Artificial Background Subtraction) dataset is an artificial dataset for pixel-wise evaluation of background models.

[Image Alpha Matting Dataset](http://alphamatting.com/datasets.php)
- Image Alpha Matting Dataset.

[LASIESTA: Labeled and Annotated Sequences for Integral Evaluation of SegmenTation Algorithms](http://www.gti.ssr.upm.es/data/LASIESTA)
- LASIESTA is composed by many real indoor and outdoor sequences organized in diferent categories, each of one covering a specific challenge in moving object detection strategies.


## Image stitching

[IPM Vision Group Image Stitching datasets](http://math.ipm.ac.ir/vision/VDownloads.html)
- Images and parameters for registeration


## Medical

[VIP Laparoscopic / Endoscopic Dataset](http://vip.doc.ic.ac.uk/vision/)
- Collection of endoscopic and laparoscopic (mono/stereo) videos and images

[Mouse Embryo Tracking Database](http://celltracking.bio.nyu.edu/)
- DB Contains 100 examples with the uncompressed frames, up to the 10th frame after the appearance of the 8th cell; a text file with the trajectories of all the cells, from appearance to division; a movie file showing the trajectories of the cells.

[FIRE Fundus Image Registration Dataset](https://projects.ics.forth.gr/cvrl/fire/)
- 134 retinal image pairs and ground truth for registration.

## References

* https://github.com/jbhuang0604/awesome-computer-vision#datasets
* http://www.cvpapers.com/datasets.html
* http://rodrigob.github.io/are_we_there_yet/build/
* http://yacvid.hayko.at/
* https://computervisiononline.com/
* https://homepages.inf.ed.ac.uk/cgi/rbf/CVONLINE/entries.pl?TAG363
* http://clickdamage.com/sourcecode/cv_datasets.php
* http://datasets.visionbib.com/info-index.html
* https://visualdata.io/discovery
* https://www.tensorflow.org/datasets/catalog/overview
* https://www.kaggle.com/datasets?search=image
* https://paperswithcode.com/datasets
