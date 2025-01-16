import React from 'react'
import styled from "styled-components";
import Sidebar from './Sidebar';
import Body from './Body';
import NavBar from './NavBar';
import Footer from './Footer';
export default function Spotify() {
  return <Container>
    <div className="spotifybody">
        <Sidebar />
        <div className="body">
            <NavBar />
            <div className="bodycontents">
                <Body />
            </div>
        </div>
    </div>
     <div className="spotifyFooter">
        <Footer />
     </div>
 </Container>
}

const Container = styled.div`

`;
