import { FormControl, FormErrorMessage, Input} from "@chakra-ui/react"
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    urlInput: yup.string()
        .url('Invalid link').required('Please enter a link')
})

interface UrlFormProps {
    onSubmitHandler: (input: FormValues) => void
}

type FormValues = {
    urlInput: string
}

const UrlForm = (props : UrlFormProps) => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({
    resolver: yupResolver(schema)
  })
  const {onSubmitHandler} = props

  return (
    <form className='form-container' onSubmit={handleSubmit(onSubmitHandler)}>
        <div className='form'>
            <FormControl className='form-control' height='100%' display='flex' flexDirection='column' justifyContent='center' isInvalid={!!errors?.urlInput?.message}>
                <Input {...register('urlInput')} backgroundColor='white' size='lg' placeholder='Shorten a link here...'></Input>
                <FormErrorMessage className='err-msg' position='absolute' bottom='-6' left='2'>
                    {errors?.urlInput?.message}
                </FormErrorMessage>
            </FormControl>
        </div>
        <button type='submit' className='form-btn'>Shorten It!</button>
    </form>
  )
}

export default UrlForm