import './CheckBox.css';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';

function CheckBox({ Label, onChange, increase, decrease }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        if (e.target.checked) {
            setIsChecked(true);
            increase()
        } else {
            setIsChecked(false);
            decrease()
        }
        onChange(Label)
    };


    return (
        <>
            <label>
                <input type='checkbox' value={Label} onChange={handleChange} />
                {isChecked ? (
                    <span className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}>
                        <DoneIcon />
                    </span>
                ) : (
                    <span className={`checkbox ${isChecked ? 'checkbox--active' : ''}`}></span>
                )}
            </label>
        </>
    );
}

export default CheckBox;
