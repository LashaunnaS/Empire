import styled from 'styled-components';

export const Navigation = styled.div`
    grid-area: topSec3;

    display: flex;
    align-self: flex-end;
    justify-self: center;

    width: 28vw;
    height: 6vh;
    margin-bottom: -1.5em;

    border-radius: 2em;
    border: 1px solid #6f94fb;
    background-color: #fff;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        '. navSec2 .';

    @media screen and (max-width: 1011px) {
        width: 35vw;
    }

    @media screen and (max-width: 700px) {
        width: 60vw;
    }
`;

