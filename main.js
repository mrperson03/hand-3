prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function capture() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = " '+data_uri+'"/>';
    });
}


console.log('ml5version:', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QuTYP2u10/model.json", modelLoaded);

function modelLoaded() {
    console.log('modelLoaded');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById('result_symbol_name_1').innerHTML = results[0].label;
        document.getElementById('result_symbol_name_2').innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "peace") {
            document.getElementById('update_symbol_1').innerHTML = "&#9996";
        }
        if(results[0].label == "thumbs up") {
            document.getElementById("update_symbol_1").innerHTML = "&#128077";
        }
        if(results[0].label == "thumbs down") {
            document.getElementById("update_symbol_1").innerHTML = "&#128078";
        }
        if(results[0].label == "crossed fingers") {
            document.getElementById("update_symbol_1").innerHTML = "&#129310";
        }
        if(results[1].label == "peace") {
            document.getElementById("update_symbol_2").innerHTML = "&#9996";
        }
        if(results[1].label == "thumbs up") {
            document.getElementById("update_symbol_2").innerHTML = "&#128077";
        }
        if(results[1].label == "thumbs down") {
            document.getElementById("update_symbol_2").innerHTML = "&#128078";
        }
        if(results[0].label == "crossed fingers") {
            document.getElementById("update_symbol_1").innerHTML = "&#129310";
        }
    }
}