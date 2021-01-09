Webcam.set({
width: 310,
heigth:300,
image_format:"jpeg",
jpeg_quality:90,
 constraints:{
facingMode:"environment"
 }
});
camera = document.getElementById("webcam_view");
Webcam.attach(camera);

function take_snapshot (){
  Webcam.snap(function(data_uri){
      document.getElementById("result_view").innerHTML="<img src='"+data_uri+"' id='captured_image'></img>"
  })  
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('MobileNet' , modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function check(){
    image=document.getElementById("captured_image");
    classifier.classify(image, gotResult);

}
function gotResult(error, results){
if (error){
    console.error(error);
}
else {
    console.log(results);
    document.getElementById("object").innerHTML=results[0].label;
}
}

