import styled from 'styled-components';

export const AppBg = styled.div`
    display: grid;
    grid-template-rows: 30vh 70vh;
    grid-template-columns: 100%;
    grid-template-areas:
        'top'
        'bottom';

    background: linear-gradient(to right,#343748, #2e3240);

    @media(max-width: 771px) {
        grid-template-rows: 27vh 70vh;
    }

`;
