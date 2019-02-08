import styled from 'styled-components';

export const SearchBottom = styled.div`
    grid-area: bottom;

    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr ;
    grid-template-rows: 1fr 2fr;
    grid-template-areas:
        '. . .'
        'results results results';

    background: linear-gradient(to right,#343748, #2e3240);
    margin-top: 3em;
`;


export const SearchResults = styled.div`
    grid-area: results;

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

export const RestaurantDetails = styled.p`
    grid-area: descDet;

`;

export const RestaurantDesc = styled.span`
    padding: 0px 0.5em;
    color: #fff;

    @media(max-width: 771px) {
        padding: 0;
    }
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


export const ConnectText = styled.h3`
    color: #fff;

    @media(max-width: 500px) {
        display: none;
    }
`;


export const ConnectLink = styled.a`
    padding-left: 0.5em;
    display: flex;
    align-self: center; 
`;

export const RestaurantPic = styled.div`
    grid-area: pic;

    background-image: url('${props => props.picture}');
    background-repeat: no-repeat, repeat;

`;
