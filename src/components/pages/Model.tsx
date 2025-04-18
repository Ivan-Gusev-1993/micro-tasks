import { useParams } from "react-router-dom";
import { adidasArr, AdidasItem } from "./Adidas";
import { pumaArr, PumaItem } from "./Puma";

// Define the interface for route parameters, compatible with useParams
interface ModelParams extends Record<string, string | undefined> {
    model: string;
    id: string;
}

// Define the CrossModels type
type CrossModels = {
    [key: string]: (AdidasItem[] | PumaItem[]);
};

const crossModels: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr,
};

export const Model = () => {
    // Use the ModelParams interface with useParams
    const { model, id } = useParams<ModelParams>();

    // Find the current model, ensuring type safety
    const currentModel = model && id && crossModels[model]
        ? crossModels[model].find((el) => el.id === Number(id))
        : null;

    return (
        <div style={{ textAlign: "center" }}>
            {currentModel ? (
                <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}
                        style={{ width: "600px", height: "auto", marginRight: "10px" }}
                    />
                </>
            ) : (
                <h2>Model is missing</h2>
            )}
        </div>
    );
};