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
    textAlign,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    marginLeft,
}) {
    return (
        <>
            {!matches ? (
                <button
                    style={{
                        width: width,
                        position: position,
                        top: top,
                        border: border,
                        textAlign: textAlign,
                        display: display,
                        flexDirection: flexDirection,
                        justifyContent: justifyContent,
                        alignItems: alignItems,
                        marginLeft: marginLeft
                    }}
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
