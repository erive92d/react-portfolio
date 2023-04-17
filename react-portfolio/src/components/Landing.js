import { motion } from "framer-motion"
import wolf from "../utils/images/space.webp"
export default function Landing() {
    const styles = {
        landingImage: {
            height: '20vh',
            width: '100%',
            position: "relative",
            // zIndex: '-2'
        },
        landingPage: {
            display: 'flex',
            color: "white",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50vw',
            height: '80vh',

        }
    }





    return (
        <>
            <motion.div className="landing-page"
                style={styles.landingPage}
                initial={{ x: "-20vw", opacity: 0 }}
                animate={{ x: "10vw", opacity: 100 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >

                <h1>I Build Web Apps with MERN Stack</h1>
                <br></br>
                <p>As a full stack web developer, I specialize in building web applications using MongoDB, Express.js, React, and Node.js (MERN stack). I can help you turn your ideas into reality by creating fast, scalable, and responsive web apps that meet your business needs.</p>
            </motion.div>

            <motion.img
                className="landingImage"
                initial={{ y: "50vw", opacity: 0 }}
                animate={{ y: "-12vh", opacity: 1 }}
                style={styles.landingImage}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                src={wolf}
                alt=""
            />

        </>


    )
}