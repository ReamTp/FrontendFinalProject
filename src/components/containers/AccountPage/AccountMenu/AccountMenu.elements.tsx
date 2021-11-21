import styled from "styled-components";

export const AccountMenuContainer = styled.div`
    /* width: 224px; */
    width: 18%;
    min-height: 250px;
    padding: 25px 30px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.secondaryColor};

    h2 {
        font-size: 1.875rem;
        color: ${({ theme }) => theme.title};
    }

    ul {
        width: 100%;
        margin-top: 15px;

        li {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;

            a {
                width: 100%;
                font-size: 1.125rem;
                color: ${({ theme }) => theme.text};
                transition: all 0.3s ease-in-out;

                &:hover {
                    color: ${({ theme }) => theme.textHover};
                    padding-left: 4px;
                }

                &#close-link {
                    color: ${({ theme }) => theme.danger};

                    &:hover {
                        color: ${({ theme }) => theme.dangerHover};
                    }
                }
            }
        }
    }
`;