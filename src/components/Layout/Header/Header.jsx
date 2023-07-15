import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineStar, AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai'
import {useSelector} from "react-redux";

const Header = () => {

    const {user} = useSelector((store) => store.user);

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to={'/'}>
                        <h1 className="header__title">
                            oneclick
                        </h1>
                    </Link>
                    <div className="header__menu">
                        <Link to={'/catalog'} className="header__link">
                            Каталог
                        </Link>
                        <Link to={'/'} className="header__link">
                           Доставка
                        </Link>
                        <Link to={'/'} className="header__link">
                            Условия
                        </Link>
                        <Link to={'/'} className="header__link">
                            Контакты
                        </Link>
                    </div>
                    <div className="header__profile">
                        <Link to={'/favorites'} className="header__profile-link">
                            <AiOutlineStar/>
                        </Link>
                        <Link to={'/cart'} className="header__profile-link">
                            <AiOutlineShoppingCart/>
                        </Link>
                        <Link to={user.email.length ? '/room' :'/login'} className="header__profile-link">
                            <AiOutlineUser/>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;