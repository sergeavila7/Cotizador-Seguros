import React from 'react';
import styled from '@emotion/styled';
import { capitalLetter } from '../helper';
import PropTypes from 'prop-types';

const ContainerResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;
const Resume = ({ data }) => {
  const { brand, year, plan } = data;
  if (brand === '' || plan === '' || year === '') return null;
  return (
    <ContainerResume>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {capitalLetter(brand)}</li>
        <li>Año: {year}</li>
        <li>Plan: {capitalLetter(plan)}</li>
      </ul>
    </ContainerResume>
  );
};

Resume.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Resume;
