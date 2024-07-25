import preguntas from "./preguntas";


const getPageContext = (page) =>{

    return {
        ...preguntas,
    };
    
}

export default getPageContext;