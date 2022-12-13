import './Link.css';

function Link({ href, title, icon, width, backgroundColor }) {
    return (
        <div style={{ width: width , backgroundColor: backgroundColor}} className='Link-Container'>
            <a className='Link' href={href}>
                {title} {icon}
            </a>
        </div>
    );
}

export default Link;
