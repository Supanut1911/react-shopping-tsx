import React from 'react';
import styled from 'styled-components'
import { CartItemType } from '../App';

export const Warpper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction:column;
    width:100%;
    border: 1px solid lightblue;
    border-radius:20px;
    height:100%;

    button {
        border-radius: 0 0 20px 20px;
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius:20px 20px 0px 0px;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 0.5rem;
    }
`;

