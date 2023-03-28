import Header from "./Header"
import { motion } from "framer-motion"

export default function Resume() {
    return (
        <motion.div className="tabs" initial={{ y: "-100%" }}
            animate={{ y: "calc(60vh - 100%)" }}
            transition={{ type: "tween", stiffness: 80, duration: 0.5 }}

        >
            <div className="">
                <h1>Resume</h1>
            </div>

            <div>
                <h2>Front-End</h2>
                <p>HTML, CSS, Javascript, React</p>
                <h2>Back-End</h2>
                <p>Nodejs, Express, PWA, MVC</p>
                <h2>Database</h2>
                <p>MySQL, MongoDB, IndexDB</p>
                <h2>API</h2>
                <p>Rest, GraphQL</p>
            </div>
        </motion.div>
    )
}