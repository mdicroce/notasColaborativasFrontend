import { useState } from "react"

export function useField ({type, defaultValue = ""}) {
    const [value, setValue] = useState(defaultValue)

    const onChange = event => {
        setValue(event.target.value)
    }
    const resetValue = () => {
        setValue("")
    }
    return {
        type,
        value,
        onChange,
        resetValue
    }
}