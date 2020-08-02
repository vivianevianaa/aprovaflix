import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({ titulo }) => titulo);
    const { handleChange, values } = useForm({
        titulo: '',
        url: '',
        categoria: '',
    });

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            })

    }, []);
    return (
        <PageDefault>
            <h1>Cadastro de vídeo</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                //alert('Vídeo cadastrado com sucesso!');

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                });

                console.log('categoriaEscolhida', categoriaEscolhida)

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        console.log('Cadastrado com sucesso! :)')
                        history.push('/');
                    })

            }}
            >
                <FormField
                    label="Título do vídeo"
                    name="titulo"
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label="URL do Vídeo"
                    name="url"
                    value={values.url}
                    onChange={handleChange}
                />
                <FormField
                    label="Categoria"
                    name="categoria"
                    value={values.categoria}
                    onChange={handleChange}
                    suggestions={categoryTitles}
                />

                <Button type="submit">
                    Cadastrar
                </Button>

            </form>

            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;