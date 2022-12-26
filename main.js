function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HS3WJQPEO/model.json', modelLoaded);
  }
  function modelLoaded(){
    console.log('Model Loaded!');
  }
  function draw(){
    image(video,0,0,300,300);
    classifier.classify(video, gotResults);
  }
  function gotResults(){
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_object_name").innerHTML=result[0].label;
      document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
      
    }
  }