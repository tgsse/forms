import Input from '../Input/Input'
import {useEffect, useState} from 'react'

const Form = (props) => {
    const [email, setEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(undefined)

    const [password, setPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(undefined)

    const isFormValid = isEmailValid === true && isPasswordValid === true

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsEmailValid(email.includes('@'))
            setIsPasswordValid(password.trim().length >= 6)
        }, 500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [
        email,
        password,
    ])

    return (
        <form>
            <div className='control-group'>
                <Input
                    label={'Email'}
                    id={'email'}
                    type={'email'}
                    value={email}
                    isValid={isEmailValid}
                    onChange={({currentTarget}) => setEmail(currentTarget.value)}
                />
                <Input
                    label={'Password'}
                    id={'password'}
                    type={'password'}
                    value={password}
                    isValid={isPasswordValid}
                    onChange={({currentTarget}) => setPassword(currentTarget.value)}
                />
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form
