import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from 'react-bootstrap'

const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
}

const inputStyle = {
    width: '50%',
    backgroundColor: 'rgb(41, 41, 41)',
    border: "1px solid white",
    color: 'white',
    padding: '10px'
}

const inputStyleDark = {
    width: '50%',
    backgroundColor: 'linear-gradient(345deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 100%)',
    border: "1px solid black",
    color: 'black',
    padding: '10px'
}

const h5Styles = {
    color: "#dad8d8",
    fontSize: "10pt",
    letterSpacing: "1pt"
}

const h5StylesDark = {
    color: 'black',
    fontSize: "10pt",
    letterSpacing: "1pt"
}

const pStyles = {
    color: "#ffffff",
    fontSize: "10pt",
    letterSpacing: "1pt",
    marginTop: '50px',
}

const pStylesDark = {
    color: "black",
    fontSize: "12pt",
    letterSpacing: "1pt",
    marginTop: '50px',
}

const btnStyle = {
    marginTop: '30px',
    marginLeft: '45%',
    marginRight: '45%',
}

const emailDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '33%',
}

const messageDiv = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '30px',
    marginLeft: '33%',
}

const ContactForm = (theme) => {
    const [state, handleSubmit] = useForm("xayabykq");
    if (state.succeeded) {
        return <p style={theme.theme === 'light' ? pStyles : pStylesDark}>Thanks for joining!</p>;
    }
    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <div style={emailDiv}>
                <h5 style={theme.theme === 'light' ? h5Styles : h5StylesDark}>Email:</h5>
                <input style={theme.theme === 'light' ? inputStyle : inputStyleDark} id="email" type="email" name="email" />
                <ValidationError prefix="Email" field="email"
                    errors={state.errors}
                />
            </div>
            <div style={messageDiv}>
                <h5 style={theme.theme === 'light' ? h5Styles : h5StylesDark}>Message:</h5>
                <textarea style={theme.theme === 'light' ? inputStyle : inputStyleDark} id="message" name="message" />
                <ValidationError prefix="Message" field="message"
                    errors={state.errors}
                />
            </div>
            <Button style={btnStyle} variant={theme.theme === 'light' ? 'light' : 'dark'} type="submit" disabled={state.submitting}>
                Submit
            </Button>
        </form>
    );
}

const App = (props) => {
    const { theme } = props;
    return (
        <ContactForm theme={theme} />
    );
}
export default App;