import { ChangeEvent, FC } from 'react'
interface InputProps {
    type: 'text' | 'number' | 'email' | 'password'
    id: string
    value: string | number
    name: string
    placeholder: string
    error: boolean
    disabled?: boolean
    errorMessage: String,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function getValidInput(check: boolean) {
    if (check) {
        return "input-item-error"
    } else {
        return "input-item-valid"
    }
}

const InputWrapper: FC<InputProps> = ({
    type,
    id,
    value,
    name,
    placeholder,
    error,
    disabled,
    errorMessage,
    onChange,
}) => {
    return (
        <div className="input-wrapper">
            <input
                type={type}
                id={id}
                name={name}
                className={"input-item " + getValidInput(error)}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled} />
            <div className="error-box">{error && <span className="error-message" >{errorMessage}</span>}</div>
        </div>
    )
}

export default InputWrapper;