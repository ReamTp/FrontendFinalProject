import styled from "styled-components";
import { ImageCircleProps } from "../../types/components/common";

const ImageCircleStyle = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${({theme}) => theme.text};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${({theme}) => theme.textHover}
    }

    svg {
        fill: ${({theme}) => theme.primaryColor};

        &, image {
            width: 1rem;
            height: 1rem;
        }
    }
`;

const ImageCircle = ({ image }: ImageCircleProps) => {
    console.log(typeof image)
    const Image = image;

    return(
        <ImageCircleStyle>
            {typeof Image === 'function' ? <Image/> : typeof Image === 'string' && <img src={Image} alt='imageInCircle'/>}
        </ImageCircleStyle>
    )
}

export default ImageCircle;