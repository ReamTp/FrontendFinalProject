import styled from 'styled-components'

const AccountContent = styled.div`
    width: 75%;
    min-height: 510px;
    background-color: ${({ theme }) => theme.secondaryColor};
    border-radius: 8px;
    padding: 25px;
    margin-bottom: 25px;
`;

export default AccountContent
