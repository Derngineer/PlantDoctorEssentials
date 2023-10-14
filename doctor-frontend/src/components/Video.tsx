import { Fragment } from "react";
import { motion } from "framer-motion"

const Video =()=>{

    return(
        <Fragment>
        <div>
        <motion.div whileHover={{scale: 1.0}} whileTap={{scale: 1}}>
        <video src="/Screen Recording 2023-09-03 at 6.47.18 AM.mp4" autoPlay
        muted
        controls
        loop  style={{height:"100%",width:"100%", objectFit:"cover"}} />
        </motion.div>
        </div>
        </Fragment>
    )

};
export default Video;