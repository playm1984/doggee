import React, { FC, useState } from 'react';

import Input from '../../common/fields/inputs/input/input'
import Button from '../../common/buttons/button/button'

import styles from './LoginPage.module.css'

const validateUsername = (value: string) => {
    if (!value) return 'field required';
    return null
}

const validatePassword = (value: string) => {
    if (!value) return 'field required';
    return null
}

const loginFormValidateSchema = {
    username: validateUsername,
    password: validatePassword
}

const validateLoginForm = (name: keyof typeof loginFormValidateSchema, value: string) => {
    return loginFormValidateSchema[name](value)
}

interface IFormError {
    username: string | null;
    password: string | null;
}

const LoginPage: FC = () => {

    const [formValues, setFormValues] = useState({ username: '', password: '' });
    const [formError, setFormError] = useState<IFormError>({ username: null, password: null });

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header_container}>DOGGEE</div>

                <div className={styles.form_container}>
                    <div className={styles.input_container}>
                        <Input
                            value={formValues.username}
                            placeholder='username'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const username = event.target.value;
                                setFormValues({ ...formValues, username });

                                const error = validateLoginForm('username', username);
                                setFormError({ ...formError, username: error });
                            }}
                            {...(!!formError.username && {
                                isError: !!formError.username,
                                helperText: formError.username
                            })}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <Input
                            value={formValues.password}
                            placeholder='password'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const password = event.target.value;
                                setFormValues({ ...formValues, password });

                                const error = validateLoginForm('password', password);
                                setFormError({ ...formError, password: error });
                            }}
                            {...(!!formError.password && {
                                isError: !!formError.password,
                                helperText: formError.password
                            })}
                        />
                    </div>
                    <div>
                        <Button>Sign Up</Button>
                    </div>
                </div>

                <div className={styles.sign_up_container}>Create new accout</div>

            </div>
        </div>
    );
};

export default LoginPage;