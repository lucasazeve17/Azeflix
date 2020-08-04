import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroVideo(props) {
    return (
        <PageDefault >
            <h1>Cadastro de video</h1>

            <Link to='/cadastro/categoria'>
                Cadatrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo