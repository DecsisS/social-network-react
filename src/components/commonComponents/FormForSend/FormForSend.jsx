import React from 'react';
import style from './formForSend.module.css';
import ButtonStyleWrapper from '../ButtonStyleWrapper/ButtonStyleWrapper';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/reducers/profile-reducer';
import { sendMessage } from '../../../redux/reducers/messages-reducer';


const FormForSend = (props) => {
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onSubmit',
    });

    const dispatch = useDispatch();

    const handler = (data) => {
        if (props.buttonName === "Add post") {
            dispatch(addPost(data.text));
            console.log(data);
            reset();
        } else if (props.buttonName === 'Send') {
            console.log(data);
            dispatch(sendMessage(data.text));
            reset();
        }
    };

    const maxLengthObjCreator = (value) => {
        return {
            value,
            message: `Maximum ${value} symbols`
        }
    };

    return (
        <form className={style.container} onSubmit={handleSubmit(handler)}>
            <div className={style.textareaContainer}>
                {errors?.text && <i>{errors.text.message}</i>}
                <textarea
                    placeholder={props.placeholder}
                    {...register('text', {
                        required: 'Write something...',
                        maxLength: maxLengthObjCreator(500),
                    })}>
                </textarea>
            </div>
            <ButtonStyleWrapper>
                <button>
                    {props.buttonName}
                </button>
            </ButtonStyleWrapper>
        </form>
    )
};

export default FormForSend;