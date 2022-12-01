import './CheckBox.css';
import DoneIcon from '@mui/icons-material/Done';
import { useState, useEffect } from 'react';

function CheckBox({ Label, onChange }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e) => {
        if (e.target.checked) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
        onChange(Label)
    };
    // const handleChange = (e) => {
    //     if (e.target.checked) {
    //         const filteredData = data.data?.filter(
    //             (item) => item.vendor === Label
    //         );
    //         console.log(filteredData);
    //         setFilteredPhones(filteredData);
    //     } else if (!e.target.checked) {
    //         setFilteredPhones(data.data);
    //     }
    //     setIsChecked(!isChecked);
    // };

    // useEffect(() => {
    //     setFilteredPhones(data.data);
    // }, [setFilteredPhones, data.data]);

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
