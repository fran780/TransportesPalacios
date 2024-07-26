import fotos from "./galeria";
import preguntas from "./preguntas";
import header from "./header";
import cards from "./cards";


const getPageContext = (page) =>{

    return {
        ...preguntas,
        ...fotos,
        ...header,
        ...cards
    };

}

export default getPageContext;