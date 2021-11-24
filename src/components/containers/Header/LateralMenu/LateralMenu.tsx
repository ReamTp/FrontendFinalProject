import React, { useRef, useState } from 'react';
import { ActionsHeaderProps } from '../../../../types/components/containers';
import { BackgroundActionsHeader } from '../Header.elements';
import { LateralMenuCategories, LateralMenuCategoryName, LateralMenuContainer, LateralMenuFooter, LateralMenuHeader, LateralMenuSubTitle } from './LateralMenu.elements';
import { FiPackage } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';
import { Button } from '../../../common';
import useElementHeight from '../../../../hooks/useElementHeight';
import useCategory from '../../../../hooks/useCategories';

const LateralMenu = (props: ActionsHeaderProps) => {
    const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const footerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const size = useElementHeight(headerRef, footerRef);
    const categories = useCategory();
    const [showAll, setShowAll] = useState(false);

    return (
        <>
            <BackgroundActionsHeader className={`lm ${props.open && 'open'}`} onClick={() => props.isOpen()}/>
            <LateralMenuContainer className={props.open ? 'open': ''}>
                <LateralMenuHeader ref={headerRef}>
                    <Button transparent onClick={() => props.isOpen()}>
                        <FiPackage/>
                    </Button>
                    <RiCloseLine onClick={() => props.isOpen()}/>
                </LateralMenuHeader>
                <LateralMenuCategories height={size}>
                    <LateralMenuSubTitle>Categorias</LateralMenuSubTitle>

                    {categories.map((category, i) =>(i >= 9 && !showAll) ? '' : (
                        <LateralMenuCategoryName key={category.id} to={`/products/category/${category.id}-${category.name}`} onClick={() => props.isOpen()}>{category.name}</LateralMenuCategoryName>
                    ))}

                    {!showAll ? (
                        <Button onClick={() => setShowAll(true)} transparent>Ver más</Button>
                    ) : (
                        <Button onClick={() => setShowAll(false)} transparent>Ver menos</Button>
                    )}
                </LateralMenuCategories>
                <LateralMenuFooter ref={footerRef}>
                    <p>Todos los derechos reservados &copy;</p>
                </LateralMenuFooter>
            </LateralMenuContainer>
        </>
    )
}

export default LateralMenu
