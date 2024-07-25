import React from 'react';
import UsersBlock from './RenderUsers/UsersBlock';
import ButtonStyleWrapper from '../../../commonComponents/ButtonStyleWrapper/ButtonStyleWrapper';
import axios from 'axios';
import { setUsers } from '../../../../redux/reducers/people-reducer';
import style from './usersContainer.module.css';
import { useDispatch } from 'react-redux';

class UsersClass extends React.Component {
    constructor(props) {
        super(props);
    };
    getResponse = () => {
        return async () => {
            const response = await axios.get('https://social-network.samuraijs.com/api/1.0/users');
            dispatch(setUsers(response.data.items));
        }
    };
    componentDidMount() {
        dispatch(this.getResponse());
    };
    clickHandler = () => {
        dispatch(setUsers(
            [{
                id: 6,
                name: 'Olivia',
                photos: {
                    large: 'https://img.goodfon.ru/original/2000x1485/5/80/doutzen-kroes-dautcen-krez-2332.jpg', 
                },
                status: 'Beatiful weather!',
                location: {city: 'Rome', country: 'Italia'},
                followed: false,
            },
            {
                id: 7,
                name: 'Max',
                photos: {
                    large: 'https://wp-s.ru/wallpapers/4/17/534046085280636/dzhosh-xartnett-poziruet-u-zerkala.jpg',
                },
                status: 'Mechanic is very cool movie',
                location: {city: 'Paris', country: 'France'},
                followed: false,
            }, {
                id: 8,
                name: 'Goodwin',
                photos: {
                    large: 'https://www.funnyart.club/uploads/posts/2022-12/1671159610_www-funnyart-club-p-volshebniki-kartinki-krasivo-26.jpg',
                },
                status: 'Magic is real!!!',
                location: {city: 'London', country: 'United Kingdom'},
                followed: false,
            },
            {
                id: 9,
                name: 'Melany',
                photos: {
                    large: 'https://demotivation.ru/wp-content/uploads/2020/05/devushka-krasivaya-lico-golubye-1536x1024.jpg', 
                },
                status: 'I like boys..',
                location: {city: 'Pitsburg', country: 'Germany'},
                followed: true,
            }, 
            {
                id: 10,
                name: 'Penelopa',
                photos: {
                    large: 'https://wallbox.ru/wallpapers/main/201546/81d100688e90f2d.jpg',
                },
                status: 'Pretty chick',
                location: {city: 'Kaliningrad', country: 'Russia'},
                followed: true,
            },]
        ))
    };
    render() {
        return (
            <div className={style.usersContainer}>
                <UsersBlock />
                <ButtonStyleWrapper>
                    <button onClick={this.clickHandler} className={style.button}>Show more</button>
                </ButtonStyleWrapper>
            </div>
        );
    };
}

export default UsersClass;