import './Button.css';

function Button({
    filterCounter,
    title,
    onClick,
    matches,
    filterIcon,
    width,
    position,
    top,
    border,
}) {
    return (
        <>
            {!matches ? (
                <button
                    style={{ width: width, position: position, top: top , border: border}}
                    onClick={onClick}
                    className='fido-button'
                >
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
