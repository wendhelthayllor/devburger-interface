import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from '../../services/api';
import { toast } from "react-toastify";
import { useUser } from "../../hooks/UserContext";
import * as yup from "yup";

import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link, } from './styles';
import Logo from '../../assets/logo.svg';


import { Button } from '../../components/Button';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup.object({
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().min(6, 'Senha deve conter no mínimo 6 caracteres').required(),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando dados',
        success: {
          render() {
            setTimeout(() => {
              navigate('/');
            }, 2000);
            return `Dados confirmados`;
          },
        },
        error: 'Email ou Senha Incorretos',
      },
    );
    putUserData(userData);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>

      <RightContainer>
        <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span> <br />
          Acesse com seu <span> Login e senha.</span></Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit">Entrar</Button>
        </Form>

        <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link> </p>

      </RightContainer>

    </Container>
  )
}