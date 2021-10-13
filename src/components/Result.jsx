import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;
`;

const Result = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Message>Llena los campos para obtener una cotización</Message>
  ) : (
    <ResultCotizacion>
      <TransitionGroup component='span' className='result'>
        <CSSTransition
          classNames='result'
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextCotizacion>
            El total es: $<span>{cotizacion}</span>
          </TextCotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultCotizacion>
  );
};

Result.propTypes = {
  cotizacion: PropTypes.number.isRequired,
};

export default Result;
