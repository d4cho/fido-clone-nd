import './Link.css';

function Link({ href, title, icon, width }) {
    return (
        <div style={{width:width}} className='Link-Container'>
            <a className='Link' href={href}>
                {title} {icon}
            </a>
        </div>
    );
}

export default Link;
