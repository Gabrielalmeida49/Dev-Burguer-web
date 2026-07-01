import { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import { Image } from '@phosphor-icons/react';
import * as yup from 'yup';

import { api } from '../../../services/api';
import {
  Container,
  Form,
  ImputGroup,
  Label,
  Input,
  LabelUpload,
  Select,
  SubmitButton,
  ErrorMessage,
  ContainerCheckbox,
} from './styles';

const schema = yup.object({
  name: yup.string().required('Digite o nome do produto'),
  price: yup
    .number()
    .positive()
    .required('Digite o preço do produto')
    .typeError('Digite o preço do produto'),
  category: yup.object().required('Escolha uma categoria'),
  offer: yup.bool(),
  file: yup
    .mixed()
    .test('required', 'Escolha um arquivo para continuar', (value) => {
      return value && value.length > 0;
    })
    .test('fileSize', 'Carregue arquivos ate 5mb', (value) => {
      return value && value.length > 0 && value[0].size <= 5000000;
    })
    .test('type', 'Carregue apenas imagens PNG ou JPEG', (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === 'image/png' || value[0].type === 'image/jpeg')
      );
    }),
});

export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append('name', data.name);
    productFormData.append('price', data.price * 100);
    productFormData.append('category_id', data.category.id);
    productFormData.append('file', data.file[0]);
    productFormData.append('offer', data.offer);

    await toast.promise(api.post('/products', productFormData), {
      pending: 'Adicionando o produto...',
      success: 'Produto criado com sucesso',
      error: 'Falha ao adicionar o produto, Tente novamente',
    });

    setTimeout(() => {
      navigate('/admin/produtos');
    }, 3000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ImputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors?.name?.message} </ErrorMessage>
        </ImputGroup>

        <ImputGroup>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors?.price?.message} </ErrorMessage>
        </ImputGroup>

        <ImputGroup>
          <LabelUpload>
            <Image />
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={(value) => {
                setFileName(value?.target?.files[0]?.name || null);
                register('file').onChange(value);
              }}
            />

            {fileName || 'Upload do Produto'}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message} </ErrorMessage>
        </ImputGroup>

        <ImputGroup>
          <Label>Categoria</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={categories}
                getOptionLabel={(category) => category.name}
                getOptionValue={(category) => category.id}
                placeholder="categorias"
                menuPortalTarget={document.body}
              />
            )}
          />

          <ErrorMessage>{errors?.category?.message} </ErrorMessage>
        </ImputGroup>

        <ImputGroup>
          <ContainerCheckbox>
            <input type="checkbox" {...register('offer')} />
            <Label> Produto em Oferta ?</Label>
          </ContainerCheckbox>
        </ImputGroup>

        <SubmitButton>Adicionar Produto </SubmitButton>
      </Form>
    </Container>
  );
}
