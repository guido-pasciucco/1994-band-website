/*import React from 'react';

const Contact = () => {
    return <><h3>ESTO ES EL CONTACT</h3>
    <i>Acá va un formulario de contacto y distintas razones por las que nos podrían contactar
        principalmente invitarnos a fechas, prensa, colaborar,
    </i>


    

    </>
}

export default Contact;

*/


import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBSelect,
    MDBRadio
}
    from 'mdb-react-ui-kit';

function Contact() {
    return (
        <MDBContainer fluid>
            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-4' style={{backgroundColor: "black"}}>
                        <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Nombre' size='lg' id='form1' type='text' />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Apellido' size='lg' id='form2' type='text' />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form3' type='text' />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Telefono' size='lg' id='form4' type='email' />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md='12'>
                                <MDBInput wrapperClass='mb-4' label='Mensaje' size='lg' id='form5' type='rel' />
                            </MDBCol>
                        </MDBRow>
                        <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </MDBContainer>
    );
}

export default Contact;