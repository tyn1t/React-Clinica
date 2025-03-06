import "./styles.css"
import {Button} from "../button"


export const Form = () => {

    // const getApi  =  () {
    //     const response = fetch()
    // }
                
    return (
        <div className="form">
            <span className="name-title">
                Consulta
            </span> 
            <form action="" method="post" className="form-consulta">
                <span>
                    <label htmlFor="">Nome</label><input type="text"/>
                </span>
                <span>
                    <label htmlFor="">Idade</label><input type="text"/>
                </span>
                <span>
                    <label htmlFor="">Peso</label><input type="text"/>
                </span>
                <span>
                    <label htmlFor="">Altura</label><input type="text"/>
                </span>
                <span>
                    <label htmlFor="">Data</label><input type="date"/>
                </span>
                <span className="center-button">
                    <Button name="confirma" type="primery"/>
                </span>
            </form>
        </div>
    )
}