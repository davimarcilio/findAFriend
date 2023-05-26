import { Eye, EyeSlash } from 'phosphor-react'
import { InputHTMLAttributes, useState } from 'react'

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}
export function InputForm({
  label,
  type,
  placeholder,
  ...props
}: InputFormProps) {
  const [isPasswordShow, setIsPasswordShow] = useState(false)

  function handleChangePassword() {
    setIsPasswordShow((state) => !state)
  }
  return (
    <div className="flex flex-col gap-2 select-none">
      <label className="font-semibold" htmlFor={label}>
        {label}
      </label>
      {type === 'password' ? (
        <div className="w-full h-min relative">
          <input
            className="bg-blue-10 border border-blue-50 p-4 w-full rounded-xl placeholder:text-blue-900 text-lg font-semibold"
            type={type}
            placeholder={isPasswordShow ? placeholder : label}
          />
          {isPasswordShow ? (
            <EyeSlash
              className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
              size={24}
              onClick={handleChangePassword}
            />
          ) : (
            <Eye
              className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
              size={24}
              onClick={handleChangePassword}
            />
          )}
        </div>
      ) : (
        <input
          id={label}
          className="bg-blue-10 border border-blue-50 p-4 rounded-xl placeholder:text-blue-900 text-lg font-semibold"
          type={type}
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  )
}
