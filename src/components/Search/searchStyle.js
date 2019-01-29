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
        'h'
        's'
        'f';

    @media(max-width: 771px) {
        grid-template-rows: 15vh 5vh 7vh;
    }
`;


export const SearchHeader = styled.h1`
    grid-area: h;

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
    grid-area: s;

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

export const Form = styled.form`
    grid-area: f;

    display: flex;
    align-self: flex-end;
    justify-self: center;

    margin-bottom: -1.5em;
`;

export const SearchInput = styled.input`
    padding: 1.3em 10em;
    text-align: center;
    border-radius: 2em;
    border: 1px solid #6f94fb;
`;

// SEARCH BOTTOM
export const SearchBottom = styled.div`
    grid-area: bottom;

    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr ;
    grid-template-rows: 1fr 2fr;
    grid-template-areas:
        '. . .'
        'r r r';

    background: linear-gradient(to right,#343748, #2e3240);
    margin-top: 3em;
`;


export const SearchResults = styled.div`
    grid-area: r;

    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;

    background: linear-gradient(to right,#343748, #2e3240);
`;

export const Restaurant = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 0.5fr 1fr 1fr;
    grid-template-areas:
        'descName pic'
        'descDet pic'
        'callBtn pic';

    border-radius: 1em;
    box-shadow: 0px 7px 9px #0f0d0c;
    margin: 2em auto;
    padding: 2em 3em;
    width: 54vw;

    background: linear-gradient(to right,#606481,#383a4f);

    @media(max-width: 771px) {
        width: 77vw;
        padding: 2em 1em;
    }

    @media(max-width: 700px) {
        width: 80vw;
        grid-template-rows: 0.5fr 1fr 0.3fr;
    }
`;

export const RestaurantName = styled.h2`
    grid-area: descName;

    margin: 0;
    color: #fff;

    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
`;

export const RestaurantDesc = styled.p`
    grid-area: descDet;

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

export const ReserveTable = styled.span`
    grid-area: callBtn;

    display: flex;
    align-self: center;

    padding-bottom: 1em;

    @media(max-width: 771px) {
        align-self: flex-start;
    }
`;


export const RestaurantPic = styled.div`
    grid-area: pic;

    background-image: url('${props => props.picture}');
    background-repeat: no-repeat, repeat;

`;