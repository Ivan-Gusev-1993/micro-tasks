import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";

export const Model = () => {
    const {id} = useParams();

    const currentModel = adidasArr.find(el => el.id === Number(id))

    return (
        <div style={{textAlign: 'center'}}>
            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}
                        style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </>
                : <h2>Model is missing</h2>
            }
        </div>
    );
};