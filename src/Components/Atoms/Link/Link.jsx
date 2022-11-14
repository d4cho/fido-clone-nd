import './Link.css';

function Link({ href, title, icon }) {
    return (
        <div className='Link-Container'>
            <a className='Link' href={href}>
                {title} {icon}
            </a>
        </div>
    );
}

export default Link;
