import { useRef, useState } from "react";

const Vedio = () => {
    const ref = useRef(null);
    const [isPlay ,setIsPlay] = useState(false);
  return (
    <div>
        <button onClick={()=>{
            const nextPlay = !isPlay
            setIsPlay(nextPlay);
            if(nextPlay){
                ref.current.play()
            }else{
                ref.current.pause()
            }

        }}>{isPlay ?'pause' :'play'}</button>
      <video 
        width={100}
        onPlay ={()=>setIsPlay(true)}
        onPause={()=>setIsPlay(false)}
        ref={ref}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Vedio;
