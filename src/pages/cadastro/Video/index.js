import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'
import videosRepository from '../../../repositories/videos'

function CadastroVideo() {
    const history = useHistory();
    const { handleChange, values } = useForm({
        titulo: 'Vídeo padrão',
        url: 'https://www.youtube.com/watch?v=hka7ay9F1kk',
        categoria: 'Dev',
    });

    return (
        <PageDefault>
            <h1>Cadastro de vídeo</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                //alert('Vídeo cadastrado com sucesso!');
                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 1,
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
                    label="Categoria do Vídeo"
                    name="url"
                    value={values.categoria}
                    onChange={handleChange}
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