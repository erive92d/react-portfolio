import Header from "./Header"
import { motion } from "framer-motion"
export default function Contact() {
    return (
        <motion.div className="tabs" 
        initial={{ x: "-100%" }}
        animate={{ x: "calc(100vw - 100%)" }}
        transition={{ type: "tween", duration: 0.5}}>
            <div className="details">
            <h1>This is Contact</h1>
            </div>
            
        </motion.div>
    )
}