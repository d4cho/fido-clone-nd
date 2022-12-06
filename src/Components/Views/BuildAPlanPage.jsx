import Title from "../Atoms/Title/Title";
import BreadCrumbsContent from "../Organisms/BreadCrumbsContent/BreadCrumbsContent";
import { MainContext } from "../../Context/MainContext";
import { useContext } from "react";
import { breadCrumbsLabels } from "../../Utils/NavbarLabel";

function BuildAPlanPage() {
      const { matches, filterToggleChange } = useContext(MainContext);
    return (
        <>
            <BreadCrumbsContent data={breadCrumbsLabels} />
            <Title
                title='BUILD YOUR PLAN'
                fontSize='2.4rem'
                fontWeight='900'
                textTransform='uppercase'
                marginTop='50px'
                marginLeft={!matches ? '20px' : null}
            />
        </>
    );
}

export default BuildAPlanPage;
