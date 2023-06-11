import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Field from '@/components/ui/Field/Field'
import FileField from '@/components/ui/FileField/FileField'
import Textarea from '@/components/ui/Textarea/Textarea'

import { IVideoDetails } from '@/types/video.interface'

import FormFooter from './FormFooter/FormFooter'
import TogglePublic from './TogglePublic/TogglePublic'
import styles from './UploadVideoForm.module.scss'
import VideoInfo from './VideoInfo/VideoInfo'

const UploadVideoForm: FC = ({}) => {
  const {
    register,
    formState: { errors },
    watch,
    control,
    handleSubmit
  } = useForm<IVideoDetails>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IVideoDetails> = (data) => {
    console.log(data)
  }

  const videoPath = watch('videoPath')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {!!videoPath ? (
        <>
          <div className={styles.form__left}>
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
                  isEnabled={field.value || false}
                />
              )}
            />
          </div>
          <div className={styles.form__right}>
            <VideoInfo />
          </div>
          <FormFooter />
        </>
      ) : (
        <div className={styles.upload__container}>
          <FileField title='First step: upload video' />
        </div>
      )}
    </form>
  )
}

export default UploadVideoForm
