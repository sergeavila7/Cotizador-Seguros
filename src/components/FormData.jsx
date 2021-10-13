import React, { useState } from 'react';
import { getDifferenceYear, calculateBrand, getPlan } from '../helper';
import { Form } from 'react-bootstrap';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const FormData = ({ saveResume, setLoading }) => {
  const [data, saveData] = useState({
    brand: '',
    year: '',
    plan: '',
  });
  const [error, setError] = useState(false);

  // Extraer los valores del state
  const { brand, year, plan } = data;

  // Leer los datos de formulario y colocarlos en el state
  const getData = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      setError(true);
      return;
    }
    setError(false);

    let result = 2000;
    // Obtener la diferencia de años
    const difference = getDifferenceYear(year);

    // Por cada año restar el 3%
    result -= (difference * 3 * result) / 100;

    // Americano 15%
    // Asiatico 5%
    // Europeo 30%
    result = calculateBrand(brand) * result;

    // Basico aumenta 20%
    // Completo 50%
    const incrementPlan = getPlan(plan);
    result = parseFloat(incrementPlan * result).toFixed(2);

    setLoading(true);

    setTimeout(() => {
      // Quitar Spinner
      setLoading(false);
      // Total+
      saveResume({
        cotizacion: Number(result),
        data,
      });
    }, 2000);
  };
  const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color 0.3s ease;
    margin-top: 2rem;
    &:hover {
      background-color: #26c6da;
      cursor: pointer;
    }
  `;

  const Error = styled.div`
    background-color: #ff495a;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 2rem;
  `;

  return (
    <Form onSubmit={handleSubmit}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Form.Group className='mb-3'>
        <Form.Label>Marca</Form.Label>
        <Form.Control as='select' name='brand' value={brand} onChange={getData}>
          <option value=''>Seleccione una opción</option>
          <option value='americano'>Americano</option>
          <option value='europeo'>Europeo</option>
          <option value='asiatico'>Asiatico</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Año</Form.Label>
        <Form.Control as='select' name='year' value={year} onChange={getData}>
          <option value=''>Seleccione una opción</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
          <option value='2016'>2016</option>
          <option value='2015'>2015</option>
          <option value='2014'>2014</option>
          <option value='2013'>2013</option>
          <option value='2012'>2012</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Check
          inline
          type='radio'
          label='Basico'
          value='basico'
          name='plan'
          checked={plan === 'basico'}
          onChange={getData}
        />

        <Form.Check
          inline
          type='radio'
          label='Completo'
          value='completo'
          name='plan'
          checked={plan === 'completo'}
          onChange={getData}
        />
      </Form.Group>
      <Button className='btn btn-primary' type='submit'>
        Enviar
      </Button>
    </Form>
  );
};

FormData.propTypes = {
  saveResume: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default FormData;
