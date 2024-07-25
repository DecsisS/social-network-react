import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPage, getUsersThunk } from '../../../../redux/reducers/people-reducer.js';
import UsersPage from './UsersPage.jsx';
import Preloader from '../../../commonComponents/Preloader/Preloader.jsx';

const UsersContainer = () => {
    const dispatch = useDispatch();
    const pageData = useSelector((state) => state.peoplePage);

    const sortPagesArray = () => {
        const selectedPage = Number(pageData.selectedPage);
        const parametrs = {
            left: 5,
            right: 4,
        };
        const firstPages = ((selectedPage - parametrs.left) < 0) ? 0 : (selectedPage - parametrs.left);
        const lastPage = Number(pageData.pagesArray.slice(-1));
        const lastPages = (selectedPage + parametrs.right) > lastPage ? -1 : (selectedPage + parametrs.right);

        const slicedArray = pageData.pagesArray.slice(firstPages, lastPages);
        const filtredArray = [...slicedArray];
        !slicedArray.includes(1) && filtredArray.unshift(1, '...');
        !slicedArray.includes(lastPage) && filtredArray.push('...', lastPage);

        return filtredArray;
    };
    
    useEffect(() => {
        dispatch(getUsersThunk({
            selectedPage: pageData.selectedPage,
            pageSize: pageData.pageSize,
        }));
    }, [pageData.selectedPage]);

    const buttonHandler = () => {
        if ((Number(pageData.selectedPage) + 1) > Number(pageData.pagesArray.slice(-1))) {
            return;
        }
        dispatch(setSelectedPage((Number(pageData.selectedPage) + 1)))
    };

    const pageHandler = (event) => {
        if (event.target.outerText === '...') {
            return;
        }
        dispatch(setSelectedPage(event.target.outerText));
    };

    const arrowHandler = (event) => {
        let crement;
        switch (event.target.innerText) {
            case '<':
                crement = -1;
                break;
            case '>':
                crement = 1;
                break;
        }
        dispatch(setSelectedPage(Number(pageData.selectedPage) + crement));
    }

    return (
        <Preloader isFetching={pageData.isFetching}>
            <UsersPage pages={sortPagesArray()}
                    pageHandler={pageHandler}
                    selectedPage={pageData.selectedPage}
                    buttonHandler={buttonHandler}
                    arrowHandler={arrowHandler}/>
        </Preloader>
    );
};

export default UsersContainer;