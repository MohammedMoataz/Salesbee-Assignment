import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'
import { Button, Container } from '@mui/material'

import { refreshTokenSetup } from '../refreshToken'
import { AppContext } from '../contextapi/context'

export const Login = () => {
    const navigate = useNavigate()
    const user = useContext(AppContext)
    const CLIENT_ID = "411796092313-s9hh8i871rsv9696lq3mni2s6v67s0eh.apps.googleusercontent.com"

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: CLIENT_ID,
                scope: 'profile'
            })
        }
        gapi.load('client:auth2', initClient)
    }, [])

    const onSuccess = (res) => {
        user.user = { user: res }
        refreshTokenSetup(res)
        navigate('/home')
    }

    const onFailure = (error) => console.error(error)

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "90%",
                margin: "10% auto",
                textAlign: "center",
                backgroundColor: "#F5F5F5",
                borderRadius: "20%",
                padding: "10%"
            }}
        >

            <Button
                variant="contained"
                startIcon={
                    <svg width="70" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M49.1715 24.2222C49.1715 10.8865 38.3608 0.0758324 25.0252 0.0758324C11.6895 0.0758324 0.878784 10.8865 0.878784 24.2222C0.878784 36.2743 9.70876 46.2638 21.2523 48.0752V31.202H15.1214V24.2222H21.2523V18.9025C21.2523 12.8508 24.8572 9.508 30.3727 9.508C33.0145 9.508 35.7778 9.97961 35.7778 9.97961V15.9219H32.733C29.7335 15.9219 28.798 17.7832 28.798 19.6927V24.2222H35.4949L34.4243 31.202H28.798V48.0752C40.3415 46.2638 49.1715 36.2743 49.1715 24.2222Z" fill="white" />
                    </svg>
                }
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    margin: "3%",
                    width: "90%",
                    padding: "4%",
                    backgroundColor: "#1877F2",
                    color: "#ffffff",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    boxShadow: "0px 38.4869px 71.4756px rgba(0, 0, 0, 0.07)",
                    "&:hover": { backgroundColor: "#1877F2" }
                }}
            >
                Continue with Facebook
            </Button>

            <GoogleLogin
                clientId={CLIENT_ID}
                render={renderProps => <Button
                    variant="contained"
                    startIcon={
                        <svg width="70" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M48.2058 25.0002C48.2058 23.288 48.0521 21.6417 47.7668 20.0612H25.0253V29.4015H38.0204C37.4606 32.4198 35.7594 34.9771 33.2021 36.6893V42.7478H41.0058C45.5716 38.5442 48.2058 32.3539 48.2058 25.0002Z" fill="#4285F4" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.025 48.5975C31.5445 48.5975 37.0103 46.4353 41.0055 42.7475L33.2018 36.6889C31.0396 38.1377 28.2738 38.9938 25.025 38.9938C18.7359 38.9938 13.4128 34.7463 11.514 29.0389H3.4469V35.295C7.42007 43.1865 15.5859 48.5975 25.025 48.5975Z" fill="#34A853" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.5143 29.0396C11.0314 27.5908 10.757 26.0433 10.757 24.4518C10.757 22.8603 11.0314 21.3128 11.5143 19.864V13.6079H3.4472C1.81183 16.8676 0.878906 20.5554 0.878906 24.4518C0.878906 28.3481 1.81183 32.0359 3.4472 35.2957L11.5143 29.0396Z" fill="#FBBC05" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.025 9.90884C28.5701 9.90884 31.753 11.1271 34.2555 13.5198L41.1811 6.59421C36.9994 2.69786 31.5335 0.305176 25.025 0.305176C15.5859 0.305176 7.42007 5.71616 3.4469 13.6076L11.514 19.8637C13.4128 14.1564 18.7359 9.90884 25.025 9.90884Z" fill="#EA4335" />
                        </svg>
                    }
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        margin: "3%",
                        width: "90%",
                        padding: "4%",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        boxShadow: "0px 38.4869px 71.4756px rgba(0, 0, 0, 0.07)",
                        "&:hover": { backgroundColor: "#ffffff" }
                    }}
                    onClick={renderProps.onClick}
                >
                    Continue with Google
                </Button>
                }
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />

            <Button
                variant="contained"
                startIcon={
                    <svg width="70" height="49" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.5115 38.3164C39.7812 40.0036 38.9167 41.5567 37.9151 42.9846C36.5499 44.9311 35.432 46.2785 34.5705 47.0267C33.2351 48.2549 31.8042 48.8839 30.272 48.9196C29.172 48.9196 27.8455 48.6066 26.3014 47.9717C24.7522 47.3397 23.3285 47.0267 22.0267 47.0267C20.6614 47.0267 19.1972 47.3397 17.631 47.9717C16.0625 48.6066 14.7988 48.9375 13.8327 48.9703C12.3634 49.0329 10.8989 48.3861 9.43701 47.0267C8.50397 46.2129 7.33694 44.8179 5.93887 42.8415C4.43887 40.731 3.20565 38.2836 2.23953 35.4935C1.20484 32.4798 0.686157 29.5614 0.686157 26.7361C0.686157 23.4997 1.38549 20.7083 2.78623 18.3692C3.88709 16.4903 5.35163 15.0082 7.18461 13.9201C9.01759 12.8321 10.9981 12.2776 13.131 12.2422C14.298 12.2422 15.8284 12.6031 17.7303 13.3126C19.6268 14.0245 20.8445 14.3854 21.3784 14.3854C21.7775 14.3854 23.1303 13.9633 25.4235 13.1218C27.5921 12.3414 29.4224 12.0183 30.9218 12.1456C34.9849 12.4735 38.0374 14.0751 40.0674 16.9607C36.4336 19.1624 34.6361 22.2462 34.6719 26.2022C34.7047 29.2836 35.8225 31.8478 38.0195 33.8838C39.0151 34.8287 40.127 35.5591 41.3641 36.0777C41.0958 36.8558 40.8126 37.601 40.5115 38.3164V38.3164ZM31.1931 1.64789C31.1931 4.06308 30.3108 6.31813 28.552 8.40538C26.4296 10.8867 23.8624 12.3206 21.0785 12.0943C21.043 11.8046 21.0224 11.4996 21.0224 11.1791C21.0224 8.86057 22.0318 6.37924 23.8242 4.35041C24.7191 3.32318 25.8572 2.46905 27.2374 1.7877C28.6146 1.11651 29.9173 0.745326 31.1424 0.681763C31.1782 1.00464 31.1931 1.32753 31.1931 1.64786V1.64789Z" fill="white" />
                    </svg>
                }
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    margin: "3%",
                    width: "90%",
                    padding: "4%",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    boxShadow: "0px 38.4869px 71.4756px rgba(0, 0, 0, 0.07)",
                    "&:hover": { backgroundColor: "#000000" }
                }}
            >
                Continue with Apple
            </Button>
        </Container>
    )
}