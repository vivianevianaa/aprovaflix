import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const { handleChange, values, clearForm} = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const URL_TOP = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : 'https://aprovaflix.herokuapp.com/categorias';
        fetch(URL_TOP)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            })
        // setTimeout(() => {
        //     setCategorias([
        //         ...categorias,
        //         {
        //             id: 1,
        //             nome: 'História',
        //             descricao: 'História no ENEM',
        //             cor: '#8B4513'
        //         },
        //         {
        //             id: 2,
        //             nome: 'Geografia',
        //             descricao: 'Geografia no ENEM',
        //             cor: '#00C86F'
        //         },
        //     ]);
        // }, 4 * 1000);
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                clearForm();
            }}>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.titulo}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;