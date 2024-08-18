function TextInput({label,type='text',value,onChange}){

    return (

        <label className="block">
            {/* shortCircuiting logic */}
            {label && <span className="text-gray-600"> {label}</span>} 
            <input className="px-4 py-2 border border-gray-500 rounded-md w-full" 
            onChange={onChange}
            placeholder={label}
            type={type}
            value={value}

            />
        </label>
    )


}

export default TextInput