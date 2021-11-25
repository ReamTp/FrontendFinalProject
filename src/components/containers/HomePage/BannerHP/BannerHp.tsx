import { FormEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi'
import { Button, Container, Input } from '../../../common';
import { ContainerBannerHP, ImageContent, InfoContent, SearchInputContent, TitleContent } from './BannerHP.elements'
import burgerImg from '../../../../resources/burgerImg.png';
import useSeeker from '../../../../hooks/useSeeker';

const BannerHp = () => {
    const [value, setValue] = useState<string>('');
    const [formSearch, onChangeSearch] = useSeeker();
    const [redirect, setRedirect] = useState(false);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setValue(formSearch.search);
        setRedirect(true);
    }

    return (
        <ContainerBannerHP>
            <Container>
                <InfoContent>
                    <TitleContent>
                        <div className="title">
                            <h2>Bienvenido a</h2>
                            <h2>La Consegna</h2>
                            <p>La mejor comida rápida en el mejor lugar <b>a un solo click.</b></p>
                        </div>
                    </TitleContent>
                    <SearchInputContent onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}>
                        <Input name="searchHeader" placeholder="Buscar..." value={formSearch.search} onChange={onChangeSearch}/>
                        <Button type="submit" warning>
                            <BiSearchAlt/>
                        </Button>
                    </SearchInputContent>
                </InfoContent>
                <ImageContent>
                    <img src={burgerImg} alt="BurgerImage"/>
                </ImageContent>
            </Container>
            {redirect && <Redirect to={`/products/search/${value}`} />}
        </ContainerBannerHP>
    )
}

export default BannerHp
