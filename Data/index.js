import fotos from "./galeria";
import preguntas from "./preguntas";
import header from "./header";


const getPageContext = (page) =>{

    return {
        ...preguntas,
        ...fotos,
        ...header
    };

}

export default getPageContext;