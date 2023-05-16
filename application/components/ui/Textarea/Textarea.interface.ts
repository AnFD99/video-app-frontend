import { TextareaHTMLAttributes } from 'react'

import { IFieldProps } from '../Field/Field.interface'

type TypeTextareaPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
  IFieldProps

export interface ITextarea extends TypeTextareaPropsField {}
