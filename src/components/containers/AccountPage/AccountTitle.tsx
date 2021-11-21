import React from 'react'
import styled from 'styled-components'

const AccountTitle = () => {
    return (
        <AccountTitleContainer>
            <h1>Mi Cuenta</h1>
        </AccountTitleContainer>
    )
}

const AccountTitleContainer = styled.div`
    text-align: center;
    padding: 1.5rem 0 0.875rem 0;
`;

export default AccountTitle
