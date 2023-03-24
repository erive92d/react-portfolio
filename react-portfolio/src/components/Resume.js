import Header from "./Header"
import { motion } from "framer-motion"

export default function Resume() {
    return (
        <motion.div className="tabs"   initial={{ y: "-100%" }}
        animate={{ y: "calc(90vh - 100%)" }}
        transition={{ type: "tween", stiffness: 80, duration: 0.5 }}
      
        >
<div className="details">
            <h1>This is Resume</h1>
            </div>
        </motion.div>
    )
}