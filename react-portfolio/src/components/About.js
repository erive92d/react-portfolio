
import { motion } from "framer-motion"


export default function About() {

    

    return (
        <motion.div
       
            className="tabs"
            initial={{ x: "100%" }}
            animate={{ x: "calc(100vw - 100%)" }}
            transition={{ type: "tween", duration: 0.5}}
        >
            <h1>About Me...</h1>
            <div className="details">
                <p>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, nesciunt necessitatibus quod in numquam aspernatur facilis earum beatae magni eveniet, provident cumque illum esse, velit recusandae doloremque. Est, architecto. Dolore.
                </p>
            </div>


        </motion.div >
    )
}