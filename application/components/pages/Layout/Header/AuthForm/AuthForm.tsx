import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiUserCircle } from 'react-icons/bi';
import { useMutation } from 'react-query';



import Button from '@/components/ui/Button/Button';
import Field from '@/components/ui/Field/Field';



import { AuthService } from '@/services/auth/auth.service';



import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';



import stylesIcons from '../Icons/HeaderIcons.module.scss';



import { IAuthFields, validEmail } from './AuthForm.inteface';
import styles from './AuthForm.module.scss';


const AuthForm: FC = () => {
  const { ref, setIsShown, isShown } = useOutside(false)

  const [type, setType] = useState<'login' | 'register'>('login')

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IAuthFields>({
    mode: 'onChange'
  })

  const { setData } = useAuth()

  const { mutate: login } = useMutation(
    'login',
    (data: IAuthFields) => AuthService.login(data.email, data.password),
    {
      onSuccess(data) {
        if (setData) setData(data)
      }
    }
  )

  const { mutate: registration } = useMutation(
    'register',
    (data: IAuthFields) => AuthService.register(data.email, data.password),
    {
      onSuccess(data) {
        if (setData) setData(data)
      }
    }
  )

  const onSubmit: SubmitHandler<IAuthFields> = (data) => {
    if (type === 'login') {
      login(data)
    } else if (type === 'register') {
      registration(data)
    }
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={stylesIcons.button}
        onClick={() => setIsShown(!isShown)}
      >
        <BiUserCircle fill='#A4A4A4' />
      </button>
      {isShown && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Field
            placeholder='email'
            error={errors.email}
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
            type='password'
            error={errors.password}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Min length must be 6 characters'
              }
            })}
          />
          <div className={styles.formButtons}>
            <Button onClick={() => setType('login')}>Login</Button>
            <Button className='secondary' onClick={() => setType('register')}>
              Register
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}

export default AuthForm