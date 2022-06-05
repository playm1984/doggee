import React, { FC, useState } from 'react';

import Input from '../../common/fields/inputs/input/input'
import Button from '../../common/buttons/button/button'

import './LoginPage.css'

const LoginPage: FC = () => {

    const [formValues, setFormValues] = useState({ username: '', password: '' });

    return (
        <div className='login_page'>
            <div className='login_page_container'>
                <div>Header</div>

                <div className='login_page_form_container'>
                    <div className='login_page_input_container'>
                        <Input
                            isError={true}
                            helperText='validation'
                            value={formValues.username}
                            placeholder='username'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormValues({ ...formValues, username: event.target.value })}
                        />
                    </div>
                    <div className='login_page_input_container'>
                        <Input
                            value={formValues.password}
                            placeholder='password'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFormValues({ ...formValues, password: event.target.value })}
                        />
                    </div>
                    <div>
                        <Button>12335</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;