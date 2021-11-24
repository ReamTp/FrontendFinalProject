import React, { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { AppName, Button, Container } from '../common'
import { HeaderContainer } from './Header/Header.elements'

const HeaderOnlyName = () => {
    const [redirect, setRedirect] = useState(false)
    const history = useHistory();

    redirect && history.goBack();

    return (
        <HeaderContainer>
            <Container>
                <HeaderOnlyNameReturn>
                    <Button onClick={() => setRedirect(true)} transparent>
                        <AiOutlineArrowLeft/> Volver
                    </Button>
                </HeaderOnlyNameReturn>
                <div>
                    <AppName/>
                </div>
            </Container>
        </HeaderContainer>
    )
}

const HeaderOnlyNameReturn = styled.div`
    ${Button} {
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        svg {
            width: 22px;
            height: 22px;
        }
    }
`;

export default HeaderOnlyName
