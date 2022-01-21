import { FormEvent, useState, ChangeEvent, Dispatch, SetStateAction } from "react"
import useDebounce from "../../../helpers/Debounce/Debounce"

interface SeachProps {
    value: string,
    onChange: Dispatch<SetStateAction<string>>
}

export default function Seach ({value, onChange}:SeachProps){
    const deboucedChange = useDebounce(onChange, 700)
    const [displayValue, setDisplayValue] = useState(value)

    const handleChange = (e: FormEvent<HTMLInputElement>)=>{
        setDisplayValue(e.currentTarget.value)
        deboucedChange(e.currentTarget.value)
    }


    return(
        <input
            type='text'
            value={displayValue}
            onChange={handleChange}
            placeholder='Pequise no site'
        />
    )
}