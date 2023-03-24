import Header from "./Header"
import { motion } from "framer-motion"
export default function Projects () {



    return (
        <motion.div  
        initial={{ y: "100%" }}
        animate={{ y: "calc(90vh - 100%)" }}
        transition={{ type: "tween", stiffness: 80, duration: 0.5 }}
      
          

        
        >
            <div className="tabs">
            <div className="details">
            <h1>This is Project</h1>
            </div>
        </div>
        </motion.div>
        
    )
}