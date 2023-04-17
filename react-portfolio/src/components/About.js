import { motion } from "framer-motion"
import family from "../utils/images/family.jpg"
export default function About() {
  const styles = {

    displayFlex: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      color: "white",
      height: "100%"

    },
    h1: {
      fontSize: '3.5rem',
      margin: "1rem"
    },
    p: {
      maxWidth: "30rem",
      textAlign: 'center'
    },
    image: {
      minWidth: '20rem',
      height: '20rem',
      borderRadius: "10px"
    },
    sub: {
      display: 'flex',
      flexWrap: 'wrap',
      width: "80vw",
      height: "100vh",
      justifyContent: 'space-around',
      marginTop: "2rem"
    }
  }


  return (
    <>
      <div
        style={styles.displayFlex}
      // animate={{ x: 100, opacity: 1 }}
      // transition={{ delay: 1 }}
      >
        <motion.h1 style={styles.h1}
          initial={{ x: "-5vw", opacity: 0 }}
          animate={{ x: "5vw", opacity: 100 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}>
          About Me
        </motion.h1>
        <div style={styles.sub}>

          <motion.p
            style={styles.p}
            initial={{ x: "-10vw", opacity: 0 }}
            animate={{ x: "1vw", opacity: 100 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            Hello! My name is Deorren, and I'm a Full-Stack Web Developer based in San Francisco, Bay Area. I have a passion for developing dynamic and engaging web applications using the latest technologies and tools.
            When I'm not coding, I enjoy staying active and spending time outdoors. I'm an avid basketball player and love to hit the court whenever I can. I also enjoy riding my mountain bike and exploring the beautiful trails in my area.
            But above all else, my family is the most important thing in my life. My wife and I have been married for 3 years, and we have a wonderful one-year-old son who keeps us on our toes.


          </motion.p>
          <motion.img
            initial={{ x: "5vw", opacity: 0 }}
            animate={{ x: '-1vw', opacity: 100 }}
            style={styles.image}
            transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
            src={family} />
        </div>

      </div>
    </>

  )

}