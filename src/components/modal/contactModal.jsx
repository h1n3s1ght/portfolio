import React, { useRef } from 'react'
import styled from 'styled-components';
import { theme } from '../../theme';
import emailjs from 'emailjs-com';


const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${theme.secondary_dimmed};
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1005;
`;

const ModalContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 15px;
    border: 1px solid ${theme.primary};
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    display: flex;
    flex-direction: column;
    padding: 25px;
`;

const CloseBtn = styled.button`
    background-color: rgba(255,114,118, .9) !important;
    font-family: 'League Spartan', sans-serif;
    width: 8%;
    height: 40%;
    margin: 10px;
    padding: 1%;
    border: none;
    color: white;
    border-radius: 6px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        background-color: rgba(255,114,118, .8) !important;
    }
`;

const ModalTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10px;
`;

const ModalTitleH2 = styled.h2`
    width: 84%;
    margin-left: 8%;
    color: ${theme.secondary_dimmed};
`;

const ModalBody = styled.div`
    flex: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1rem;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border: 1px solid ${theme.secondary_trans};
    border-radius: 15px;
`;

const ModalForm = styled.form`
    width: 100%;
    padding: 12px;
    margin: 2% 5%;
    resize: vertical;
    display: flex;
    flex-direction: column;

    input, textarea {
        font-family: 'League Spartan', sans-serif;
        font-weight: 600;
        color: ${theme.secondary};
        font-size: 1em;
        width: 90%;
        margin: 1% 1% 1% 0%;
        border: 1px solid ${theme.secondary_trans};
        border-radius: 5px;
        line-height: 1.75em;
        padding: 3%;
    }

    textarea {
        width: 100%;
    }
`;

// const ModalLabel = styled.label`
// `;

const ModalFooter = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 150px;
        height: 45px;
        margin: 10px;
        border: none;
        background-color: ${theme.secondary_dimmed};
        color: white;
        border-radius: 8px;
        font-size: 20px;
        cursor: pointer;

        &:hover {
        background-color: ${theme.secondary_light};
    }
    }
`;

const CancelBtn = styled.button`
    background-color: rgba(255,114,118, .9) !important;

    &:hover {
        background-color: rgba(255,114,118, .8) !important;
    }
`;


function ContactModal({closeModal}) {

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pecnuzp','template_4ceo3ya', form.current, '5z6yEPaXQNjl9Qlhc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
};

const closeOnSubmit = () => {
    closeModal(false);
    alert('Message Sent! I look forward to connecting.')
}

  return (
    <ModalBackground>
        <ModalContainer>
            <ModalTitle>
                <ModalTitleH2> I am ecstatic to meet you!</ModalTitleH2>
                <CloseBtn onClick={() => {
            closeModal(false);}}> 
                X 
            </CloseBtn>
            </ModalTitle>
            <ModalBody>
                <ModalForm id="contactMeForm" ref={form} onSubmit={sendEmail}>
                    <input id='formName' placeholder='Name' name="user_name" />
                    <input type='email' id='formEmail' placeholder='Email address' name="user_email"/>
                    <textarea rows='4' id='formMess' max-length='1000' placeholder='Message'
                    name="message" />
                </ModalForm>
            </ModalBody>

            <ModalFooter>
                <CancelBtn onClick={() => {
                closeModal(false);
                }}>
                    Cancel
                </CancelBtn>

                <button type="submit" 
                value="Send"
                form='contactMeForm'
                onClick={closeOnSubmit}>
                    Send Message
                </button>
            </ModalFooter>
        </ModalContainer>
    </ModalBackground>
  )
}

export default ContactModal;


//Put this back in form submit when it goes back to main screen.
//===============================
// value="Send"