import './ChoiceCardContent.css';
import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';
import Title from '../../Atoms/Title/Title';

function ChoiceCardContent() {
    return (
        <>
            <Title
                title='Plans'
                textAlign='center'
                fontSize='2.4rem'
                fontWeight='900'
                textTransform='uppercase'
            />
            <div className='card-container'>
                <ChoiceCard />
                <ChoiceCard />
            </div>
        </>
    );
}

export default ChoiceCardContent;
