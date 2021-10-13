import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import Header from './components/Header';
import FormData from './components/FormData';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background: #fff;
  padding: 3rem;
`;

function App() {
  const [resume, saveResume] = useState({
    cotizacion: 0,
    data: {
      brand: '',
      year: '',
      plan: '',
    },
  });

  const [loading, setLoading] = useState(false);

  const { data, cotizacion } = resume;

  return (
    <Container>
      <Header title='Cotizador de Seguros' />
      <ContainerForm>
        <FormData saveResume={saveResume} setLoading={setLoading} />
        {loading ? <Spinner /> : null}
        {!loading ? <Resume data={data} /> : null}
        {!loading ? <Result cotizacion={cotizacion} /> : null}
      </ContainerForm>
    </Container>
  );
}

export default App;
