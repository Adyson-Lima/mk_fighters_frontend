import {render,screen} from '@testing-library/react';
import Fighters from '../pages/Fighters';
import { BrowserRouter } from 'react-router-dom';

describe("Testes da tela Fighters", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Fighters/>
      </BrowserRouter>
    );
  });

  it ("Existe card em Fighters?", () =>{
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

  it ('Existe link novo em Fighters?', () =>{
    expect(screen.getByTestId('mylink')).toBeInTheDocument();
  });

  it ('Existe tabela em Fighters?', () => {
    expect(screen.getByTestId('mytable')).toBeInTheDocument();
  });

  it ('Existe botão editar em Fighters?', () => {
    expect(screen.getByTestId('mybtn1')).toBeInTheDocument();
  });

  it ('Existe botão excluir em Fighters?', () => {
    expect(screen.getByTestId('mybtn2')).toBeInTheDocument();
  });

});