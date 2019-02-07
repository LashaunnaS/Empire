import styled from 'styled-components';

//SEARCH TOP
export const SearchTop = styled.div`
    grid-area: top;

    background: linear-gradient(160deg,#719dfe,#5c49e0, #5c49e0);
    box-shadow: 0px 0.1em 1em black;

    border-bottom-left-radius: 3em;
    border-bottom-right-radius: 3em;

    display: grid;
    grid-template-rows: 15vh 5vh 10vh;
    grid-template-areas:
        'topSec1'
        'topSec2'
        'topSec3';

    @media(max-width: 771px) {
        grid-template-rows: 15vh 5vh 7vh;
    }
`;


export const SearchHeader = styled.h1`
    grid-area: topSec1;

    display: flex;
    align-self: center;
    justify-self: center;

    letter-spacing: 1.2em;
    color: #fff;
    padding-left: 1em;
    font-size: 8vw;

    @media screen and (min-width: 1200px) {
     font-size: 6em;
     letter-spacing: 1em;
    }
`;

export const SearchSlogan = styled.h2`
    grid-area: topSec2;

    display: flex;
    align-self: center;
    justify-self: center;

    color: #c7c9d4;
    text-shadow: 0px 1px 2px #000;

    @media screen and (max-width: 771px) {
        text-align: center;
        font-size: 4vw;
    }
`;
