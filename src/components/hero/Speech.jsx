import { TypeAnimation } from 'react-type-animation';
import {motion} from "motion/react";

const Speech = () => {
  return (
    <motion.div className='bubbleContainer' animate={{opacity:[0,1]}} transition={{ duration: 1}}>
      <div className="bubble"><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, 
        "okay we are here doing something",
        1000,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    /></div>
      <img src="/man.png" alt=""/>
    </motion.div>
  )
}

export default Speech