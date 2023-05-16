import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'
import Textarea from '@/components/ui/Textarea/Textarea'

import { IVideoDetails } from '@/types/video.interface'

import TogglePublic from './TogglePublic/TogglePublic'
import styles from './UploadVideoForm.module.scss'

const UploadVideoForm: FC = ({}) => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit
  } = useForm<IVideoDetails>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IVideoDetails> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        placeholder='Video name'
        type='text'
        autoComplete='none'
        error={errors.name}
        {...register('name', {
          required: 'Video name is required'
        })}
      />
      <Textarea
        placeholder='Description'
        error={errors.description}
        {...register('description', {
          required: 'Description is required'
        })}
      />
      <Controller
        control={control}
        name='isPublic'
        render={({ field }) => (
          <TogglePublic
            clickHandler={() => {
              field.onChange(!field.value)
            }}
            isEnabled={field.value}
          />
        )}
      />
      <Button>Save</Button>
    </form>
  )
}

export default UploadVideoForm
