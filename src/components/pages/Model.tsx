import {adidasArr, AdidasItem} from "./Adidas";
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./Puma";
import {filaArr, type FilaItem} from "./Fila.tsx";

type CrossModels = {
  [key: string]: (AdidasItem[] | PumaItem[] | FilaItem[]);
}

const crossModels: CrossModels = {
  adidas: adidasArr,
  puma: pumaArr,
  fila: filaArr,
}

export const Model = () => {
  // const params=useParams()
  const {model, id} = useParams();
  console.log(model)
  //const currentModel=adidasArr.find(el=>el.id===Number(id))
  const currentModel = model
    ? crossModels[model].find((el) => el.id === Number(id))
    : null;

  return (
    <div style={{textAlign: 'center'}}>
      {currentModel
        ? <>
          <h2>{currentModel?.model}</h2>
          <h4>{currentModel?.collection}</h4>
          <h3>{currentModel?.price}</h3>
          <img
            src={currentModel?.picture}
            alt={currentModel?.model}
            style={{width: '600px', height: 'auto', marginRight: '10px'}}
          />
        </>
        : <h2>Модель отсутствует</h2>
      }
    </div>
  );
};
