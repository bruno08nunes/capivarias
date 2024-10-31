import { useState } from "react"

const useFormProps = (id, initialValue = "") =>  {
    const [value, setValue] = useState(initialValue);
    const handleInput = (e) => {
        setValue(e.target.value);
    }
    const inputProps = {
        value,
        onInput: handleInput,
        id,
        name: id
    }
    return inputProps;
}

export default useFormProps;