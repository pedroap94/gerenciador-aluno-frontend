import Item from "./Item";
import style from "./Questionario.module.scss"

function retornaIndices() {

}

function Questionario() {
    const variaveis = ['nome', 'idade', 'cidade'];

    return (
        <div className={style.itens}>
            {variaveis.map(variavel =>
                <Item
                    gerador={variavel}
                />
            )}
        </div>
    )

}

export default Questionario;