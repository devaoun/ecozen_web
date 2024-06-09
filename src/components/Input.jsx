import { useEffect, useRef } from "react"

export default function Input({
    type = 'text',
    ref,
    placeholder,
    value,
    onChange,
    name,
    error
}) {
    const inputRef = useRef(null)
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])
    return (
        <>
            <input
                type={type}
                ref={inputRef}
                placeholder={placeholder}
                className={`mt-[40px] p-[20px] w-[520px] border-[1px] border-gray-500 rounded-[10px] text-[30px] font-normal'${error
                    ? 'border-red-500 focus:ring-red-300'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300'}`}
                value={value}
                onChange={onChange}
                name={name}
            />

            {error ? <small className="text-red-500 w-full text-base px-2 mt-2">{error}</small> : null}

        </>
    )
}
