import { useState } from "react";
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form'
import { motion } from "framer-motion";
export default function Contact() {
    const [to, setTo] = useState("erive92d@gmail.com");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    return (
        <div className="contact-form">
            <motion.h1
                initial={{ x: "0vw", opacity: 0 }}
                animate={{ x: "0vw", opacity: 100 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }}
                style={{ lineHeight: "5rem" }}>Let connect!
            </motion.h1>
            <motion.Form
                initial={{ x: "0vw", opacity: 0 }}
                animate={{ x: "0vw", opacity: 100 }}
                transition={{ duration: 0.4, delay: 0.9, ease: "easeInOut" }}
                onSubmit={handleSubmit} style={{ width: "50%" }}>
                <Form.Group className="mb-1" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="subject" />
                </Form.Group>
                <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" rows={3} id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                </Form.Group>
                <Button type="submit" >Send</Button>
            </motion.Form>
        </div>

    );
}
