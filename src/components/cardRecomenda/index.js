import styled from 'styled-components';

const CardRecomendaContainer = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 40px auto 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
    
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        max-width: 90%;
        padding: 20px;
        margin: 30px auto 0 auto;
    }
`;

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #d48900;
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        margin-top: 15px;
        width: 100%;
    }
`;

const Descricao = styled.p`
    max-width: 300px;
    color: #333;
    margin: 0;
    
    @media (max-width: 768px) {
        max-width: 100%;
        margin-bottom: 15px;
    }
`;

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: 700;
    margin: 0 0 10px 0;
    
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Titulo = styled.h3`
    color: #EB9B00;
    font-size: 16px;
    font-weight: 700;
    margin: 0 0 15px 0;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const ImgLivro = styled.img`
    width: 150px;
    height: auto;
    
    @media (max-width: 768px) {
        width: 120px;
        margin-bottom: 15px;
    }
`;

const TextoContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
        align-items: center;
    }
`;

export const CardRecomenda = ({ titulo, subtitulo, descricao, img }) => {
    return (
        <CardRecomendaContainer>
            <TextoContainer>
                <Titulo>{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </TextoContainer>
            <div>
                <ImgLivro src={img} alt={subtitulo} />
                <Botao>Saiba mais</Botao>
            </div>
        </CardRecomendaContainer>
    );
};

export default CardRecomenda;
