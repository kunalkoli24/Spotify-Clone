import React, {useEffect, useRef, useState} from 'react'
import styled from "styled-components";
import Sidebar from './Sidebar';
import { useStateprovider } from "../utils/StateProvider";

import Body from './Body';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
export default function Spotify() {
    const [{ token }, dispatch] = useStateprovider();
    const bodyrRef= useRef();
    const [navBackground, setNavBackground] = useState(false);
    const [headerBackground, setHeaderBackground] = useState(false);
    const bodyScrolled = ()=>{
        bodyrRef.current.scrollTop >=30 
        ?setNavBackground(true) 
        :setNavBackground(false);
        bodyrRef.current.scrollTop >=268
        ?setHeaderBackground(true) 
        :setHeaderBackground(false);
    }

    useEffect(() =>{
        const getUserInfo = async ()=>{
            const {data} = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                  },
            });
            const userInfo = {
                userId: data.id,
                userName: data.display_name,
            };
            console.log(userInfo);
            dispatch({type:reducerCases.SET_USER,userInfo});
        };
        getUserInfo();
    }, [dispatch,token]);

  return <Container>
    <div className="spotifybody">
        <Sidebar />
        <div className="body" ref={bodyrRef} onScroll={bodyScrolled}>
            <NavBar navBackground={navBackground}/>
            <div className="bodycontents">
                <Body headerBackground={headerBackground}/>
            </div>
        </div>
    </div>
     <div className="spotifyFooter">
        <Footer />
     </div>
 </Container>
}

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;

    .spotifybody{
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32,87,100);

    .body{
    height: 100%;
    width: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    }

    }

`;