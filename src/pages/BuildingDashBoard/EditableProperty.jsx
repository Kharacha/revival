import React, {useEffect, useRef, useState} from "react";

const EditableProperty = ({ label, placeholder, value, onChange }) => {
    const [editableValue, setEditableValue] = useState(value);
    const textareaRef = useRef(null);

    const handleInputChange = (e) => {
        setEditableValue(e.target.value);
    };

    const handleBlur = () => {
        onChange(editableValue);
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            if (textareaRef.current.value.trim() === '') {
                textareaRef.current.style.height = '20px';
            }
        }
    }, [editableValue, placeholder]);

    return (
        <div className="grid grid-cols-1 gap-1 p-2 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
            <dt className="font-bold text-2xl text-gray-900">{label}</dt>
            <dd className="text-gray-800 text-xl font-medium sm:col-span-2">
                <textarea
                    className="w-full sm:w-40 md:w-60 lg:w-80 sm:h-20 md:h-20 lg:h-20 resize-none"
                    value={editableValue}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    style={{ minHeight: "20px" }}
                    ref={textareaRef}
                    placeholder={placeholder}
                />
            </dd>
        </div>
    );
};
export default EditableProperty