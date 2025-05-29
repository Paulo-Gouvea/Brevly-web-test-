interface InputProps {
    title: string;
    placeholder: string;
}

export function Input({title, placeholder}: InputProps){
    return (
        <>
            <label className="text-gray-500 text-Text-xs font-Text-xs" >{title}</label>
            <input type="text" className="w-[100%] h-[48px] rounded-md border-[1px] px-[16px] border-solid border-gray-300 text-Text-md font-Text-md" placeholder={placeholder} />
        </>
    )
}