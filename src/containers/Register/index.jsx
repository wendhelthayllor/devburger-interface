import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import { toast } from "react-toastify";
import * as yup from "yup";

import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link, } from './styles';
import Logo from '../../assets/logo.svg';


import { Button } from '../../components/Button';

export function Register() {
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup
      .string()
      .required('Nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup
      .string()
      .min(6, 'Senha deve conter no mínimo 6 caracteres')
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
      .required('Confirmar senha'),

  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  console.log(errors)

  const onSubmit = async (data) => {

    try {
      const { status } = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      },
        {
          validateStatus: () => true,
        },
      );
  
      if(status === 200 || status === 201){
        setTimeout(() => {
          navigate('/login')
        }, 2000);
        toast.success(' Conta criada com sucesso!')
      } else if(status === 400){
        toast.error('Usuário já existe, Faça login o para continuar')
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("😥 falha no Sistem! Tente novamente")
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>

      <RightContainer>
        <Title>Criar Conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" input {...register("name")}></input>
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Email</label>
            <input type="email" input {...register("email")}></input>
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" input {...register("password")}></input>
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" input {...register("confirmPassword")}></input>
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar Conta</Button>
        </Form>

        <p>Já possui conta? <Link to="/login">Clique aqui.</Link> </p>

      </RightContainer>

    </Container>
  )
}