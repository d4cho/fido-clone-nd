import './CheckBox.css';
import DoneIcon from '@mui/icons-material/Done';

function CheckBox({ Label, onChange, checked }) {
    const handleChange = () => {
        onChange(Label);
    };
    return (
        <>
            <label>
                <input
                    type='checkbox'
                    value={Label}
                    checked={checked}
                    onChange={handleChange}
                />
                <span
                    className={`checkbox ${checked ? 'checkbox--active' : ''}`}
                >
                    {checked ? <DoneIcon /> : null}
                </span>
            </label>
        </>
    );
}

export default CheckBox;
