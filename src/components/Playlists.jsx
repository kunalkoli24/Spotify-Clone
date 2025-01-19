
import React, { useEffect } from "react";
import { useStateprovider } from "../utils/stateprovider";
import axios from "axios";
import styled from "styled-components";
import { reducerCases } from "../utils/Constants";

export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateprovider();

  useEffect(() => {
    if (!token) {
      console.error("Token is not available!");
      return;
    }

    const getPlaylistData = async () => {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Ensure the response structure is valid and handle it
        if (response.data?.items) {
          const playlists = response.data.items.map(({ name, id }) => ({ name, id }));
          dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching playlists:", error.response?.data || error.message);
      }
    };

    getPlaylistData();
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <Container>
      <ul>
        {/* Check if playlists exist and render accordingly */}
        {playlists?.length > 0 ? (
          playlists.map(({ name, id }) => (
            <li key={id} onClick={() => changeCurrentPlaylist(id)}>
              {name}
            </li>
            
          ))
          
        ) : (
          <p>No playlists available. Ensure the token is valid and has proper scopes.</p>
        )}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  color: #b3b3b3;
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;
