import React from 'react'
import { ViewContainer } from '../../components/common'
import { BannerHP, CardsHP, InfoBannerHP, AboutHP } from '../../components/containers/HomePage'

const HomePage = () => {
    return (
        <ViewContainer>
            <BannerHP/>
            <CardsHP/>
            <InfoBannerHP/>
            <AboutHP/>
        </ViewContainer>
    )
}

export default HomePage
