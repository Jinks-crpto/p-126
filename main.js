song="";
leftwristx="";
leftwristy="";
rightwristx="";
rightwristy="";

function setup()
 { canvas = createCanvas(600, 500);
     canvas.center(); 
     video = createCapture(VIDEO); 
     video.hide(); 

     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose', gotPoses)
    }

    function modelLoaded(){
        console.log('PoseNet Is Initalized');
    }
    function gotPoses(results){
        if(results.length>0)
        {
            console.log(results);
            leftwristx=results[0].pose.leftWrist.x;
            leftwristy=results[0].pose.leftWrist.y;
            console.log("leftwristx = " + leftwristx +"leftwristy = " + leftwristy);
            
            rightwristx=results[0].pose.rightWrist.x;
            rightwristy=results[0].pose.rightWrist.y;
            console.log("rightwristx = " + rightwristx +"rightwristy = " + rightwristy);
        
        }
    }

     function draw(){
image(video,0,0,600,500);

fill("#ff0000");
stroke("#ff0000");

circle(leftwristx,leftwristy,25);
InNumberleftwristy=Number(leftwristy);
remove_decimals=floor(InNumberleftwristy);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="volume:"+volume;
song.setVolume(volume);



circle(rightwristx,rightwristy,25);
}
function preload(){
    song=loadSound("music.mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
