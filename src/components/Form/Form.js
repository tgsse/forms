import Input from '../Input/Input'
import useInput from '../../hooks/useInput'

const validators = {
    email(value) {
        return value.includes('@') ? null : 'Please enter a valid email address.'
    },
    password(value) {
        return value.length >= 6 ? null : 'Password needs to be at least 6 characters.'
    },
}

const Form = (props) => {

    const {
        value: email,
        isValid: isEmailValid,
        error: emailError,
        onChange: onEmailChanged,
    } = useInput(validators.email)

    const {
        value: password,
        isValid: isPasswordValid,
        error: passwordError,
        onChange: onPasswordChanged,
    } = useInput(validators.password)

    const isFormValid = isEmailValid === true && isPasswordValid === true

    function onSubmit(event) {
        event.preventDefault()
        if (!isFormValid) {
            return
        }
        console.log('form submitted', {event})
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='control-group'>
                <Input
                    label={'Email'}
                    id={'email'}
                    type={'email'}
                    value={email}
                    isValid={isEmailValid}
                    error={emailError}
                    onChange={onEmailChanged}
                />
                <Input
                    label={'Password'}
                    id={'password'}
                    type={'password'}
                    value={password}
                    isValid={isPasswordValid}
                    error={passwordError}
                    onChange={onPasswordChanged}
                />
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form
