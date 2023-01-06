import { useContext, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { Button, Container } from "@mui/material"

import { AppContext } from "../contextapi/context"

export const Home = () => {
    const { user } = useContext(AppContext)

    useEffect(() => {
        emailjs.init("78yLpG9Svc85QfjMc")
    }, [])

    const sendMail = async (email) => {
        var templateParams = {
            to_email: email,
            from_name: user.user.profileObj.name,
            from_email: user.user.profileObj.email
        }

        emailjs.send('service_biehxx9', 'template_2eeuqxz', templateParams)
            .then((response) => console.log('SUCCESS!', response.status, response.text))
            .catch((error) => console.log('FAILED...', error))
    }

    const handleChange = (e) => {
        const fileReader = new FileReader()
        let file = e.target.files[0]

        file && file.type.endsWith("csv")
            ? fileReader.readAsText(file)
            : alert("File type must be .csv")

        fileReader.onload = (event) => {
            let emails = event.target.result.split("\r\n")

            emails = emails.filter(email => email !== "")
            emails.map(email => sendMail(email))

            alert("Emails sent Successfully.")
        }
    }

    return (
        <Container
            sx={{
                display: "flex",
                width: "90%",
                margin: "10% auto",
                padding: "10%"
            }}
        >
            <Button
                variant="contained"
                component="label"
                sx={{
                    margin: "10% auto",
                    width: "50%",
                    padding: "5%",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    borderRadius: "10px",
                }}
            >
                Import contacts
                <input
                    type={"file"}
                    accept={".csv"}
                    hidden
                    onChange={handleChange}
                />
            </Button>
        </Container>
    )
}