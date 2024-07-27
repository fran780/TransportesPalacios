import fotos from "./galeria";
import preguntas from "./preguntas";
import header from "./header";
import footer from "./footer";

const getPageContext = (page) =>{

    return {
        ...preguntas,
        ...fotos,
        ...header,
        ...footer
    };

}

export default getPageContext;