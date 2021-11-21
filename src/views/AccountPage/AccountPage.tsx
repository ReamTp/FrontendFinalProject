import { ViewContainer } from '../../components/common'
import { AccountClose, AccountConfig, AccountContent, AccountMenu, AccountOrders, AccountTitle } from '../../components/containers/AccountPage'
import { AccountContainer, AccountMainContentElements } from './AccountPage.elements';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

const AccountPage = () => {
    const {path, url} = useRouteMatch();

    return (
        <ViewContainer>
            <AccountContainer>
                <AccountTitle/>
                <AccountMainContentElements>
                    <AccountMenu url={url}/>
                    <AccountContent>
                        <Switch>
                            <Route path={`${path}/config`} component={AccountConfig}/>
                            <Route path={`${path}/myorders`} component={AccountOrders}/>
                            <Route path={`${path}/close-account`} component={AccountClose}/>
                            <Redirect from="" to={`${path}/config`}/>
                        </Switch>
                    </AccountContent>
                </AccountMainContentElements>
            </AccountContainer>
        </ViewContainer>
    )
}

export default AccountPage
