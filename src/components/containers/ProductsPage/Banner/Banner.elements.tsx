import styled from "styled-components";
import { ImgBannerProductsProps } from "../../../../types/components/containers";
import { Container } from "../../../common";

export const BannerContainer = styled.div`
    width: 100%;
    height: 240px;
    background-color: ${({theme}) => theme.yellow};
    overflow: hidden;
    position: relative;

    ${Container} {
        height: 100%;
        display: flex;
        align-items: center;

        h2 {
            font-size: 3rem;
            color: ${({theme}) => theme.titleSecondary};
        }
    }
`;

export const BannerImg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-image: url(${(props: ImgBannerProductsProps) => props.src});
    background-repeat: no-repeat;
    background-position: right top;
`;