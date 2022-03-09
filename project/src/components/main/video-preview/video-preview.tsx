import { useEffect, useRef } from 'react';

export default function VideoPreview({src, poster, isActive}: VideoPreviewProps): JSX.Element{
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(()=>{
    if(videoRef.current === null) {
      return;
    }

    if(isActive){
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isActive]);
  return(
    <video className="player__video" src={src} poster={poster} ref={videoRef} muted/>
  );
}

type VideoPreviewProps = {
  src: string;
  poster: string;
  isActive: boolean;
}
