Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml version",ml5.version);
classifier=ml5.imageclassifier("https://teachablemachine.withgoogle.com/models/cfBbizTW6/model.json",modelLoaded);