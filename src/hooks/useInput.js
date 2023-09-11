import {useEffect, useState} from 'react'

export default function useInput(validator) {
    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState(null)
    const [error, setError] = useState(null)

    function onChange(event) {
        setValue(event.target.value)
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (value.length === 0) {
                setIsValid(null)
                setError(null)
            } else {
                const error = validator(value)
                setError(error)
                setIsValid(error === null)
            }
        }, 500)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [
        value
    ])

    return {
        value,
        isValid,
        error,
        onChange,
    }
}
