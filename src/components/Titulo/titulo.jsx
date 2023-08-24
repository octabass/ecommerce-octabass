import './titulo.css'

const Titulo = (props) => {
    console.log(props)
    return <div className='titulo'>
                <h2 className='estilo'>
                    {props.titulo}
                </h2>
            </div>
}

export default Titulo