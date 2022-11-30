import './CheckBox.css';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';

function CheckBox() {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        setIsChecked(!isChecked);
        if (e.target.checked) {
            console.log('hello');
        }
    };

    return (
        <>
            <label>
                <input type='checkbox' onChange={handleChange} />
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
