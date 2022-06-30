import CardMovie from '@components/CardMovie/CardMovie';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface IPropsResults {
  movies: any[];
  query: string;
}

const Results = (props: IPropsResults) => {
  const { movies, query } = props;

  return (
    <>
      <Row>
        <Col>Resultados de: {query}</Col>
        <Col>Filtros repidos</Col>
      </Row>
      <Row>
        {movies.length ? (
          movies.map((movie, key) => {
            return (
              <Col xs={6} md={4} lg={2} style={{ margin: '10px 0px' }} key={key}>
                <CardMovie />
              </Col>
            );
          })
        ) : (
          <Col>No se encontraron resultados</Col>
        )}
      </Row>
    </>
  );
};

export default Results;