import React from "react";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const SocialLinks = (props) => {
    return (
        <>
            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>
        </>
    );
};

export default SocialLinks;