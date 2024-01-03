import React, {useRef} from 'react'

const Wave = () => {


    const waveRef1 = useRef()
    const waveRef2 = useRef()
    const waveRef3 = useRef()
    const waveRef4 = useRef()
    const waveRef5 = useRef()
    const waveRef6 = useRef()
  
    let random1=123, random2=30, random3=60, random4=90, random5=77;
  
    // let random1 = Math.floor(Math.random() * 100) ;
    // let random2 = Math.floor(Math.random() * 100) ;
    // let random3 = Math.floor(Math.random() * 100) ;
    // let random4 = Math.floor(Math.random() * 100) ;
    // let random5 = Math.floor(Math.random() * 100) ;
      
    var oldScrollY = window.scrollY;
    let sign=[0,0,0,0,0];
    window.onscroll = function () {
      // console.log(random1, random2, random3, random4, random5 ,sign)
  
      if(random1 < 10 || random1 >200){
        if(sign[0]===1){
          sign[0]=0
        }
        else{
          sign[0]=1
        }
      }
      if(random2 < 10 || random2 >200){
        if(sign[1]===1){
          sign[1]=0
        }
        else{
          sign[1]=1
        }
      }
      if(random3 < 10 || random3 >200){
        if(sign[2]===1){
          sign[2]=0
        }
        else{
          sign[2]=1
        }
      }
      if(random4 < 10 || random4 >200){
        if(sign[3]===1){
          sign[3]=0
        }
        else{
          sign[3]=1
        }
      }
      if(random5 < 10 || random5 >200){
        if(sign[4]===1){
          sign[4]=0
        }
        else{
          sign[4]=1
        }
      }
  
      waveRef1.current.setAttribute(
        "d",
        `M 0 0 C 158.5 0 158.5 ${random1} 317 ${random1} L 317 ${random1} L 317 0 L 0 0 Z`
      );
      waveRef2.current.setAttribute(
        "d",
        `M 316 ${random1} C 442.5 ${random1} 442.5 ${random2} 569 ${random2} L 569 ${random2} L 569 0 L 316 0 Z`
      );
      waveRef3.current.setAttribute(
        "d",
        `M 568 ${random2} C 706 ${random2} 706 ${random3} 844 ${random3} L 844 ${random3} L 844 0 L 568 0 Z`
      );
      waveRef4.current.setAttribute(
        "d",
        `M 843 ${random3} C 980.5 ${random3} 980.5 ${random4} 1118 ${random4} L 1118 ${random4} L 1118 0 L 843 0 Z`
      );
      waveRef5.current.setAttribute(
        "d",
        `M 1117 ${random4} C 1240.5 ${random4} 1240.5 ${random5} 1364 ${random5} L 1364 ${random5} L 1364 0 L 1117 0 Z`
      );
      waveRef6.current.setAttribute(
        "d",
        `M 1363 ${random5} C 1441 ${random5} 1441 0 1519 0 L 1519 0 L 1519 0 L 1363 0 Z`
      );
  
      if (oldScrollY < window.scrollY) {
        if(sign[0]==1){
          random1+=2;
        }
        else{
          random1-=2;
        }
        if(sign[1]==1){
          random2-=2;
        }
        else{
          random2+=2;
        }
        if(sign[2]==1){
          random3+=2;
        }
        else{
          random3-=2;
        }
        if(sign[3]==1){
          random4-=2;
        }
        else{
          random4+=2;
        }
        if(sign[4]==1){
          random5+=2;
        }
        else{
          random5-=2;
        }   

      } else {

        if(sign[0]==1){
          random1-=2;
        }
        else{
          random1+=2;
        }
        if(sign[1]==1){
          random2+=2;
        }
        else{
          random2-=2;
        }
        if(sign[2]==1){
          random3-=2;
        }
        else{
          random3+=2;
        }
        if(sign[3]==1){
          random4+=2;
        }
        else{
          random4-=2;
        }
        if(sign[4]==1){
          random5-=2;
        }
        else{
          random5+=2;
        }
      }
      oldScrollY = window.scrollY;
    }
  

  return (
    <svg id="svgwave" viewBox="0 0 1519 256" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <path ref={waveRef1} fill="rgba(47, 73, 94, 1)" d="M 0 0 C 158.5 0 158.5 131 317 131 L 317 131 L 317 0 L 0 0 Z" stroke-width="0"></path>
    <path ref={waveRef2} fill="rgba(47, 73, 94, 1)" d="M 316 131 C 442.5 131 442.5 35 569 35 L 569 35 L 569 0 L 316 0 Z" stroke-width="0"></path>
    <path ref={waveRef3} fill="rgba(47, 73, 94, 1)" d="M 568 35 C 706 35 706 176 844 176 L 844 176 L 844 0 L 568 0 Z" stroke-width="0"></path>
    <path ref={waveRef4} fill="rgba(47, 73, 94, 1)" d="M 843 176 C 980.5 176 980.5 64 1118 64 L 1118 64 L 1118 0 L 843 0 Z" stroke-width="0"></path>
    <path ref={waveRef5} fill="rgba(47, 73, 94, 1)" d="M 1117 64 C 1240.5 64 1240.5 143 1364 143 L 1364 143 L 1364 0 L 1117 0 Z" stroke-width="0"></path>
    <path ref={waveRef6} fill="rgba(47, 73, 94, 1)" d="M 1363 143 C 1441 143 1441 0 1519 0 L 1519 0 L 1519 0 L 1363 0 Z" stroke-width="0"></path>
  </svg>
  )
}

export default Wave