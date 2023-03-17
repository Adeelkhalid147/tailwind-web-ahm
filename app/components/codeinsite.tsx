"use client"
import Typewriter from "typewriter-effect";
/* npm i typewriter-effect */
<Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('CERTIFIED WEB3.0 AND METAVERSE PROGRAM')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            // .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />


    