import fotos from "./galeria";
import preguntas from "./preguntas";


const getPageContext = (page) =>{

    return {
        ...preguntas,
        ...fotos
    };

}

export default getPageContext;