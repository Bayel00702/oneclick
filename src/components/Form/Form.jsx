import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {Link, useNavigate, useLocation} from "react-router-dom";
import InputMask from 'react-input-mask';
import {BiHomeSmile} from "react-icons/bi"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {logIn} from '../../features/user/user'

const Form = () => {



    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const {user} = useSelector(store => store.user);




    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"});

    const handleRegister = (data) => {
        axios.post('https://storedbs.onrender.com/register', data)
            .then((res) => {
                dispatch(logIn(res.data));
                localStorage.setItem('user', JSON.stringify(res.data));
                navigate('/')
            })
            .catch(error => console.log(error))
    };

    const loginUser = (data) => {
        axios.post('https://storedbs.onrender.com/login', data)
            .then((res) => {
                dispatch(logIn(res.data));
                localStorage.getItem('user');
                navigate('/')
            })
            .catch(error => console.log(error))
    };

    const submitForm = (data) => {
        let {...user} = data;

        if (location.pathname === '/login'){
            loginUser(user)
        } else {
            handleRegister(user)
        }
    };



    return (
        <div className="forms">
            <form
                onSubmit={handleSubmit(submitForm)}
                className="register__inside">
                {
                    location.pathname === '/register' ?
                        <h2 className="register__title">
                            Регистрация
                        </h2>
                        : <h2 className="register__title">
                            Вход
                        </h2>
                }

                <input
                    type="email"
                    placeholder="E-mail"
                    className="register__inside-field"
                    {...register('email')}
                />


                {
                    location.pathname === '/register' ?
                        <InputMask
                        mask={`+\\9\\96(999)99-99-99`} type='tel'
                        {...register('phone', {
                            required: {
                                value: true,
                                message: 'Это поле обязательное'
                            },
                            pattern: {
                                value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                message: 'Заполните номер телефона'
                            }
                        })} className="register__inside-field" placeholder='Номер телефона' />
                        : ''
                }

                {
                    location.pathname === '/register' ?
                        <input
                            type="text"
                            placeholder="Логин"
                            className="register__inside-field"
                            {...register('name')}
                        />
                        : ''
                }

                <input
                    type="password"
                    placeholder="Пароль"
                    className="register__inside-field"
                    {...register('password')}
                />

                {
                    location.pathname === '/register' ?
                        <button className="register__inside-btn">
                            Зарегистрироваться
                        </button>
                        :
                        <button className="register__inside-btn">
                             Войти
                        </button>
                }

                {
                    location.pathname === '/register' ?  <p className="register__inside-ques">
                        Уже есть профиль?
                        <Link className="register__inside-link" to={'/login'}>
                            Войти
                        </Link>
                    </p>
                        : <p className="register__inside-ques">
                            Нет профиля?
                            <Link className="register__inside-link" to={'/register'}>
                                Пройти регистрацию
                            </Link>
                        </p>
                }





                <div className="register__inside-ques">
                    <BiHomeSmile className="register__inside-icon"/>
                    <Link className="register__inside-link" to={'/'}>
                        Вернуться на главную страницу
                    </Link>
                </div>

            </form>
        </div>
    );
};

export default Form;