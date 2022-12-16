import './Link.css';

function Link({ href, title, icon, width, backgroundColor, cursor, border, color, marginTop }) {
    return (
        <div
            style={{
                width: width,
                backgroundColor: backgroundColor,
                cursor: cursor,
                border: border,
                marginTop:marginTop
            }}
            className='Link-Container'
        >
            <a className='Link' style={{ color: color }} href={href}>
                {title} {icon}
            </a>
        </div>
    );
}

export default Link;
