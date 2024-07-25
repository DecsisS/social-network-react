import React from 'react';
import style from './loginForm.module.css';
import ButtonStyleWrapper from '../../../commonComponents/ButtonStyleWrapper/ButtonStyleWrapper.jsx';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInThunk } from '../../../../redux/reducers/auth-reducer.js';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
        setError,
        clearErrors,
    } = useForm({
        mode: "onBlur",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        const response = await dispatch(logInThunk({ data }));
        (response.payload.resultCode === 0) && navigate('/profile');
    };

    return (
        <form className={style.formContainer} onSubmit={handleSubmit(submitHandler)}>
            <label>
                Login
                <input type="text" placeholder="Your login"
                    {...register('login', {
                        required: 'This field is required!',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Please enter the valid email',
                        }
                    })} />
                {errors?.login && <i>{errors.login.message}</i>}
            </label>
            <label>
                Password
                <input type="password" placeholder="Your password"
                    {...register('password', {
                        required: 'This field is required!',
                        minLength: {
                            value: 4,
                            message: `Minimal 4 simbols`,
                        }
                    })} />
                    {errors?.password && <i>{errors.password.message}</i>}
            </label>
            <div className={style.checkbox}>
                <input type="checkbox" {...register('rememberMe')}/> Remember me
            </div>
            {props.serverError && <i>{props.serverError}</i>}
            {props.captcha
                && <span>
                    <img src={props.captcha} alt="captcha" />
                    <input type="text" placeholder="Enter captcha"
                        {...register('captcha')} />
                </span>}
            <ButtonStyleWrapper>
                <button>Join</button>
            </ButtonStyleWrapper>
        </form>
    )
};

export default LoginForm;