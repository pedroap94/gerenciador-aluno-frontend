import style from './Item.module.scss'

interface Props {
    gerador: string
}

function idGenerator(texto: string) {
    return `item-` + texto
}

function gerarIndiceInput(palavra: string) {
    return( palavra[0].toUpperCase() + palavra.substring(1) + ':' )
}

export default function Item({ gerador }: Props) {
    return (
        <>
            <label className={style.escrita}>{gerarIndiceInput(gerador)}</label>
            <br></br>
            <input type="text" className={style.caixa} id={idGenerator(gerador)} />
            <br></br>
        </>

    )
}