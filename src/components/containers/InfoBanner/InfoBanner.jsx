import React from "react";
import {
  ContainerInfo,
  InfoSection,
  SubTitle,
  Image,
} from "./InfoBanner.elements";
import deliveryImg from "../../../resources/deliveryImg.png";
import Container from "../../common/Containers";

function InfoBanner() {
  return (
    <ContainerInfo>
      <Container>
        <InfoSection>
          <SubTitle>
            <div className="subtitle">
              <h2>Tu pedido a tiempo</h2>
              <p>Todo lo que pidas a la puerta de tu casa <b>¡No esperes más!</b></p>
            </div>
          </SubTitle>
          </InfoSection>
          <Image>
            <img src={deliveryImg} alt="DeliveryImge" />
          </Image>
      </Container>
    </ContainerInfo>
  );
}

export default InfoBanner;
