import React, { useEffect, useState } from 'react'

type Props = {
    className?: string;
    text?: string;
    formHookProps?: any;
    defaultValue?: string;
}

const InputImage: React.FC<Props> = ({className, text, formHookProps, defaultValue = ''}: Props) => {
    const [value, setValue] = useState("");

    useEffect(() => {
    setValue(defaultValue);
    }, []);

    const onChangeHandler = (e: any) => {
    setValue(URL.createObjectURL(e.target.value));
    };

    return (
        <div className={className}>
            <p className="font-semibold text-xs">{text}</p>
            <input type='file' onChange={onChangeHandler} className="bg-pink-500"/>
            <div className="mt-2 border-1 w-full h-20">

            </div>
        </div>
    )
}

export default InputImage