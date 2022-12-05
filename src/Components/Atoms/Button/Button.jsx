import './Button.css';

function Button({ filterCounter, title, onClick, matches, filterIcon }) {
    return (
        <>
            {!matches ? (
                <button onClick={onClick} className='fido-button'>
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        {title} {filterCounter} {filterIcon}
                    </span>{' '}
                </button>
            ) : null}
        </>
    );
}

export default Button;
