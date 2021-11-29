import styled from "styled-components";

export const CardsHPContainer = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.secondaryColor};
    min-height: 400px;
    display: flex;
    align-items: center;
`;

export const CardContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    width: 100%;
	max-width: 1200px;
	margin: 0 auto;
`;

export const CardTitleContainer = styled.div`
    display: flex;
    width: 100%;
	margin: 10px auto;
    justify-content: space-between;
`;

export const CardTSubitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        margin-right: 15px;
    }

    a {
        color: ${({theme}) => theme.success};
        font-size: 15px;
        line-height: 50%;
        border: none;
        background-color: transparent;

        &:hover{
            cursor: pointer;
            color: ${({theme}) => theme.successHover};
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
`;


export const Card = styled.div`
    width: 190px;
    height: 300px;
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.25s;
    background-color: ${({theme}) => theme.primaryColor};

    &:hover{
        cursor: pointer;
        transform: translateY(-15px);
        box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const CardImg = styled.div`
    width: 100%;
    height: 180px;
    margin-bottom: 30px;
    background-image: url(${props => props.img && props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export const CardInfo = styled.div`
    h4 {
        font-weight: 600;
        color: ${({theme}) => theme.title};
        margin-bottom: 10px;
    }
`;

export const CardA = styled.a`
    font-weight: 500;
    text-decoration: none;
    color: #3498db;
`;