import styled from "styled-components";
import { PLProductProps } from "../../../../types/components/containers";
import { Container } from "../../../common";

export const ProductsListContainer = styled.div`
    overflow: hidden;
    margin-top: 30px;
    margin-bottom: 50px;

    ${Container} {
        display: flex;
        justify-content: space-between;
    }
`;

export const PLCategoriesContainerMain = styled.div`
    width: 20%;
    height: 600px;
    background-color: ${({ theme }) => theme.secondaryColor};
    border-radius: 8px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 8px;

        &-thumb {
            border-radius: 20px;
            background-color: ${({theme}) => theme.appName};
        }
    }
`;

export const PLCategoriesTitle = styled.h4`
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    padding: 20px 25px;
`;

export const PLCategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 25px;

    > a {
        width: 100%;
        color: ${({ theme }) => theme.text};
        padding: 20px 0;
        font-size: 1.125rem;
        transition: all 0.4s ease;

        &:hover {
            padding-left: 8px;
            color: ${({ theme }) => theme.textHover};
        }

        &:active {
            transform: scale(0.95);
            color: ${({ theme }) => theme.appName};
        }
    }
`;

export const PLProductsContainer = styled.div`
    width: 78%;
    min-height: 600px;
    padding: 25px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.secondaryColor};

    h4 {
        font-size: 1.5rem;
        margin-bottom: 25px;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export const PLProductContainer = styled.div`
    width: 200px;
    height: 290px;
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 8px;
    transition: all 0.4s ease;
    margin-bottom: 15px;
    padding: 12px;

    img {
        width: 100%;
        height: 75%;
        margin-bottom: 5px;
    }

    div {
        width: 100%;
        display: flex;
        flex-direction: column;

        h5 {
            font-size: 1rem;
            color: ${({ theme }) => theme.title};
        }
    }

    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const PLProduct = (props: PLProductProps) => {
    const openProductModal = () => {
        props.openModal();
        props.setId(props.product.id);
    }

    return(
        <PLProductContainer onClick={() => openProductModal()}>
            <img src={props.img} alt="product"/>
            <div>
                <h5>{props.product.name}</h5>
                <p>S/ {props.product.price.toFixed(2).toString()}</p>
            </div>
        </PLProductContainer>
    )
}