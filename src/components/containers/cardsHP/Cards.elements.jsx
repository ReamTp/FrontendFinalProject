import styled from "styled-components";

export const CardContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 25px;
`;

export const CardTitleContainer = styled.div`
    display: flex;
    width: 100%;
	max-width: 1160px;
	margin: 0 auto;
    margin-top: 20px;
	padding: 0 25px;
    justify-content: space-between;
    
    button{
        color: ${({theme}) => theme.successHover};
        font-size: 15px;
        border: none;
        background-color: ${({theme}) => theme.primaryColor};
        margin-left: 10px;
    }
`;

export const CardTSubitleContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
`;

export const Card = styled.div`
    width: 190px;
    height: 300px;
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.25s;
    background-color: ${({theme}) => theme.secondaryColor};
    &:hover{
        transform: translateY(-15px);
        box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
`;

export const CardImg = styled.img`
    padding-top: 40px;
    width: 175px;
    height: 180px;
    margin-bottom: 30px;
`;

export const CardH4 = styled.h4`
    font-weight: 600;
    color: ${({theme}) => theme.title};
`;

export const CardP = styled.p`
    padding: 0 1rem;
    font-size: 16px;
    font-weight: 300;
`;

export const CardA = styled.a`
    font-weight: 500;
    text-decoration: none;
    color: #3498db;
`;

