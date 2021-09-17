import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField } from '@mui/material';

interface IFormInputs {
    firstName: string;
    age: number;
}

const schema = yup.object().shape({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
});

export function Todo() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm<IFormInputs>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = (data: IFormInputs) => {
        console.log(data);
        reset({
            firstName: '',
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field, fieldState: { error, invalid } }) => (
                    <TextField
                        variant="standard"
                        label="First name"
                        margin={'dense'}
                        error={invalid}
                        helperText={error?.message}
                        {...field}
                    />
                )}
            />

            <input {...register('age')} />
            <p>{errors.age?.message}</p>

            <input type="submit" />
        </form>
    );
}
