import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiUserCircle } from 'react-icons/bi'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'

import stylesIcons from '../Icons/HeaderIcons.module.scss'

import { IAuthFields, validEmail } from './AuthForm.inteface'
import styles from './AuthForm.module.scss'

const AuthForm: FC = () => {
  const [type, setType] = useState<'login' | 'register'>('login')

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IAuthFields>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IAuthFields> = (data) => {
    if (type === 'login') {
      console.log('login', data.email)
    } else if (type === 'register') {
      console.log('register', data.email)
    }
  }

  return (
    <div className={styles.wrapper}>
      <button className={stylesIcons.button}>
        <BiUserCircle fill='#A4A4A4' />
      </button>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Field
          placeholder='email'
          //  error={errors.email}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: validEmail,
              message: 'Invalid email'
            }
          })}
        />
        <Field
          placeholder='password'
          //  error={errors.password}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Min length must be 6 characters'
            }
          })}
        />
        <Button onClick={() => setType('login')}>
          Login
        </Button>
        <button className={'text-sm'} onClick={() => setType('register')}>
          Register
        </button>
      </form>
    </div>
  )
}

export default AuthForm
