import styled from "styled-components";
import { ImageCircleProps, ImageCircleStyleProps } from "../../types/components/common";

const ImageCircleStyle = styled.div`
    width: ${(props: ImageCircleStyleProps) => props.size ? props.size : 30}px;
    height: ${(props: ImageCircleStyleProps) => props.size ? props.size : 30}px;
    background-color: ${({theme}) => theme.text};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${(props: ImageCircleStyleProps) => props.noHover ? '' : ({theme}) => theme.textHover};
    }

    svg {
        fill: ${({theme}) => theme.primaryColor};

        &, image {
            width: ${(props: ImageCircleStyleProps) => props.size ? props.size*0.53 : 30*0.53}px;
            height: ${(props: ImageCircleStyleProps) => props.size ? props.size*0.53 : 30*0.53}px;
        }
    }
`;

const ImageCircle = ({ image, size, noHover }: ImageCircleProps) => {
    const Image = image;

    return(
        <>
            {noHover ?
                <ImageCircleStyle noHover size={size}>
                    {typeof Image === 'function' ? <Image/> : typeof Image === 'string' && <img src={Image} alt='imageInCircle'/>}
                </ImageCircleStyle>
            :
                <ImageCircleStyle size={size}>
                    {typeof Image === 'function' ? <Image/> : typeof Image === 'string' && <img src={Image} alt='imageInCircle'/>}
                </ImageCircleStyle>
            }
        </>
    )
}

export default ImageCircle;