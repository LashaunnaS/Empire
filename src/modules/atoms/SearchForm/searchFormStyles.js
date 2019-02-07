import styled from 'styled-components';


export const Form = styled.form`
    grid-area: navSec2;

    align-self: center;

    border: none;
`;

export const SearchInput = styled.input`
    
    text-align: center;
    font-size: 1.6em;
    font-weight: 600;
    color: #2f3252;
    border: none;

    @media screen and (max-width: 1340px) and (min-width: 1012px) {
        width: 18vw;
    }

    @media screen and (max-width: 1011px) {
        width: 22vw;
    }

    @media screen and (max-width: 700px) {
        width: 28vw;
    }
    
`;

export const IconStyleDesc = styled.span`
    padding: 0px 0.5em;
    color: #fff;

    @media(max-width: 771px) {
        padding: 0;
    }
`;

export const IconStyle = styled.span`
    padding: 0px 0.5em;
    color: #6c89f7;
`;