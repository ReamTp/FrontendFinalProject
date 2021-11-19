import styled from "styled-components";
import restaurantImg from "../../../resources/restaurantImage.jpg";

export const LoginBanner = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${restaurantImg});
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
`;
export default LoginBanner;
