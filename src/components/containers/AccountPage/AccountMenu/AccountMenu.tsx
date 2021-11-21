import { Link } from 'react-router-dom';
import { AccountMenuContainer } from './AccountMenu.elements'
import { options } from './options.json';

const AccountMenu = ({url}: AccountMenuProps) => {
    return (
        <AccountMenuContainer>
            <h2>Opciones</h2>
            <ul>
                {options.map(option => (
                    <li key={option.id}>
                        <Link id={(option.id === options.length) ? "close-link" : ""} to={`${url}/${option.url}`}>{option.name}</Link>
                    </li>
                ))}
            </ul>
        </AccountMenuContainer>
    )
}

type AccountMenuProps = {
    url: string
}

export default AccountMenu
