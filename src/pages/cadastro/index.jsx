import { useNavigate } from "react-router-dom";
import { MdAccountCircle, MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header'; 
import { Input } from '../../components/Input';
//import { useState } from 'react';

import { mock } from '../../services/mock';
import { useForm } from "react-hook-form";
//import axios from 'axios';

import { Container, Title, Column, TitleCadastro, SubtitleCadastro, Wrapper, Form, Terms } from './styles';

const Cadastro = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors  } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  //const Cadastro = () => {
  //  const [name, setName] = useState('');
  //  const [email, setEmail] = useState('');
  //  const [senha, setSenha] = useState('');


  const onSubmit = async (formData) => {
    try {
      // Implement API call to register user with formData (e.g., name, email, password)
      // Upon successful registration, navigate to a confirmation page or redirect to login
      // Criando um mock adapter
      //const mock = new MockAdapter(axios);

      // Simulando uma requisição POST para criar um novo usuário
      mock.onPost('/users', { name: 'novoUsuario', email: 'novoUsuario@exemplo.com', senha: '123456' })
       .reply(201, {
          message: 'Usuário criado com sucesso',
          id: 123
        });


      // Fazendo a requisição POST axios
      //const response = await axios.post('/users', {
      //  name, // Passa o valor do estado para o campo name
      //  email, // Passa o valor do estado para o campo email
      //  senha // Passa o valor do estado para o campo senha
      //});
      
      //if(response == 201) {
      //  alert('Cadastro realizado com sucesso!');
      //  navigate('/login');
      //}
    
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Não foi possível realizar o cadastro. Tente novamente.');
    }
  };


  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Faça seu cadastro</TitleCadastro>
            <SubtitleCadastro>Preencha os dados para criar a sua conta.</SubtitleCadastro>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input placeholder="Nome Completo" 
                leftIcon={<MdAccountCircle />} 
                name="name" 
                control={control} 
                //value={name} // Adiciona o valor do estado ao input
                //onChange={(e) => setName(e.target.value)} // Atualiza o estado quando o valor muda
              />
              {errors.name && <span>Nome é obrigatório</span>}
              <Input placeholder="E-mail" 
                leftIcon={<MdEmail />} 
                name="email" 
                control={control}
                //value={email} // Adiciona o valor do estado ao input
                //onChange={(e) => setName(e.target.value)} // Atualiza o estado quando o valor muda
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input type="password" 
                placeholder="Senha" 
                leftIcon={<MdLock />} 
                name="senha" 
                control={control}
                //value={senha} // Adiciona o valor do estado ao input
                //onChange={(e) => setName(e.target.value)} // Atualiza o estado quando o valor muda
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Terms>
                <input type="checkbox" />
                <span>Li e concordo com os termos de uso e privacidade</span>
              </Terms>
              <Button title="Cadastrar" variant="secondary" type="submit" />
            </form>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro } ;
