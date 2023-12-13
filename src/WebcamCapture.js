import React, {useRef} from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};

function WebcamCapture() {
    const WebcamRef = useRef(null);

    return (
         <div className="WebcamCapture">
        <Webcam
          audio={false}
          height={videoConstraints.height} 
          ref={WebcamRef} 
        ScreenShotFormat="image/jpeg"
        width={videoConstraints.width}
        VideoConstraints={videoConstraints}
        />
        </div>
    );
    }

export default WebcamCapture;