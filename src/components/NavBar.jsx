import React from 'react';
import { useStateprovider } from "../utils/StateProvider";

import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
export default function NavBar({navBackground}) {
      const [{ userInfo } ] = useStateprovider();
  
  return (
    <Container navBackground={navBackground}>
      <div className="searchBar">
        <FaSearch />
        <input type="text" placeholder='Arestists, Songs, or Pdcasts' />
      </div>
      <div className="avatar">
        <a href="#"> 
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </Container>
  )
}

const Container=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 15vh;
padding:2rem ;
position: sticky;
top: 0;
transition: 0.3s ease-in-out;
background-color: ${({navBackground}) =>navBackground ? "rgba(0,0,0,0.7)" : "none"};

  .searchBar{
    background-color:white;
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
      input{
        border: none;
        height: 2rem;
        width: 100%;
        &:focus{
        outline:none
        }
      }
  }  
      .avatar{
        background-color: black;
        padding: 0.3rem 0.4rem;
        padding-right: 1rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

          a{
            display:flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: white;
            font-weight: bold;

              svg{
                font-size: 1.3rem;
                background-color: #282828;
                padding: 0.2rem;
                border-radius: 1rem;
                color: #c7c5c5;
              }
          }
      }
`