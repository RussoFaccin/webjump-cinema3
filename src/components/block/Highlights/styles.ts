import styled from 'styled-components';
import { Breakpoints } from 'enums/style';

const Card = styled.div`
    border-radius: 10px;
    overflow: hidden;
`;

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 85vw auto;
    grid-gap: 10px;
    grid-template-areas: "latestMain latestMain"
                         "latestSecondaryFirst latestSecondaryLast";

    @media screen and (min-width: ${Breakpoints.TABLET}) {
        grid-template-columns: 1fr 274px;
        grid-template-rows: 156px 156px;
        grid-gap: 16px;
        grid-template-areas: "latestMain latestSecondaryFirst"
                              "latestMain latestSecondaryLast";
    }
`;

export const CardPicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const CardMain = styled(Card)`
    grid-area: latestMain;
`;

export const CardSecondary = styled(Card)`
    grid-area: latestSecondaryFirst;
    height: 35vw;

    @media screen and (min-width: ${Breakpoints.TABLET}){
        height: auto;
    }
`;

export const CardTertiary = styled(Card)`
    grid-area: latestSecondaryLast;
    height: 35vw;

    @media screen and (min-width: ${Breakpoints.TABLET}){
        height: auto;
    }
`;

export const Description = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 15px;
`;

export const Title = styled.h4`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;

    @media screen and (min-width: ${Breakpoints.TABLET}) {
        font-size: 1.7rem;
        line-height: 1.15;
    }
`;

export const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 300;

    @media screen and (min-width: ${Breakpoints.TABLET}) {
        font-size: 1.5rem;
    }
`;