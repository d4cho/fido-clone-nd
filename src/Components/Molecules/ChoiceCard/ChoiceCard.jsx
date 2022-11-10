import './ChoiceCard.css';

function ChoiceCard() {
    return (
        <div className='card-container-outline'>
            <div />
            <div className='inner-card-container'>
                <p>ALREADY HAVE A PHONE?</p>
                <p>PLAN ONLY</p>
                <p>Talk & Text plans starting at $ 27 .00 /mo.</p>
                <p>
                    We’ve also got you covered with value-packed plans that give you all the data,
                    talk and text you need!
                </p>
                <button>View Plans</button>
            </div>
        </div>
    );
}

export default ChoiceCard;
