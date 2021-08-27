import './App.css';

import React from 'react';
import {
MDBNavbar,
MDBNavbarNav,
MDBNavbarItem,
MDBNavbarToggler,
MDBNavbarLink,
MDBContainer,
MDBIcon } from 'mdb-react-ui-kit';
import Image from "./images/apiary.jpg"

export default function App() {
  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        id='intro-example'
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${Image})` , backgroundSize:'auto' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>ApiaryBee Best Apiary App</h1>
              <h5 className='mb-4'>Best &amp; Functional App for Apiary</h5>
              <a
                className='btn btn-outline-light btn-lg m-2'
                href='#'
                role='button'
                rel='nofollow'
                target='_blank'
              >
                Start ApiaryBee tutorial 
              </a>
              <a
                className='btn btn-outline-light btn-lg m-2'
                href='#'
                target='_blank'
                role='button'
              >
                Download ApiaryBee
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}