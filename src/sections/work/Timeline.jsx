import React, {useEffect} from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import './timeline.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Timeline() {
   useEffect(()=>{
    AOS.init({duration:1000});
  }, [])
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center"> 
    <MDBContainer fluid className="py-5" >
      <div className="main-timeline-2">
        <div className="timeline-2 left-2">
          <MDBCard data-aos="fade-up" data-aos-anchor-placement="top-center">

            <MDBCardBody className="p-4">
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" />Sep 2023
              </p>
              <p className="mb-0">
                Google Developer Student Club - JMI Graphics Lead
                <br />
                <br />
                <br />
                <br />
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard data-aos="fade-up" data-aos-anchor-placement="top-center">
            
            <MDBCardBody className="p-4">
    
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> Jul 2023-Aug 2023
              </p>
              <p className="mb-0">
                Web Development Intern at NullClass
                <br />
                <br />
                <br />
                <br />
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard data-aos="fade-up" data-aos-anchor-placement="top-center">
            
            <MDBCardBody className="p-4">
        
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> Jun 2023-Jul 2023
              </p>
              <p className="mb-0">
                Web Development Intern at NoQs Digital Pvt. Ltd.
                <br />
                <br />
                <br />
                <br />
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 right-2">
          <MDBCard data-aos="fade-up" data-aos-anchor-placement="top-center">
            
            <MDBCardBody className="p-4">
    
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> Mar 2023
              </p>
              <p className="mb-0">
                IEEE JMI Technical team Member
                <br />
                <br />
                <br />
                <br />
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="timeline-2 left-2">
          <MDBCard data-aos="fade-up" data-aos-anchor-placement="top-center">
            
            <MDBCardBody className="p-4">
             
              <p className="text-muted mb-4">
                <MDBIcon far icon="clock" /> Nov 2021
              </p>
              <p className="mb-0">
                Joined Jamia Millia Islamia
                <br />
                <br />
                <br />
                <br />
              </p>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </MDBContainer>
    </div>
  );
}