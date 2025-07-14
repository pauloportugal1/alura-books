import styled from 'styled-components';

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px'};
    text-align: center;
    margin: 0;
    font-weight: 700;
    
    @media (max-width: 768px) {
        font-size: calc(${props => props.tamanhoFonte || '18px'} * 0.8);
        padding: 20px 0;
    }
`;

export default Titulo;
