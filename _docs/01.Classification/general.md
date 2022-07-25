---
title: General 
category: 1.Classification
order: 1
---

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


### References 
* [Kaggle Dataset](https://www.kaggle.com/datasets?search=image&tags=13302-Classification)
* [Tensorflow Dataset](https://www.tensorflow.org/datasets/catalog/overview)
* [PaperWithcode Dataset](https://paperswithcode.com/task/image-classification)