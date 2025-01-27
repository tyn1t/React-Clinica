import "./styles.css"


export const Form = () => {
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
                <span className="center-button">
                    <button type="submit">Enviar</button>
                </span>
            </form>
        </div>
    )
}