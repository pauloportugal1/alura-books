import React, { useRef } from 'react';
import { books as livrosLocal } from './dadosUltimosLancamentos';
import { Titulo } from '../titulo';
import { CardRecomenda } from '../cardRecomenda';
import imagemLivro from '../../images/livro.png';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding: 40px 0 60px 0;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    
    @media (max-width: 768px) {
        padding: 30px 0 40px 0;
        margin-bottom: 30px;
    }
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    width: 100%;
    position: relative;
    
    @media (max-width: 768px) {
        margin-top: 25px;
    }
`

const CarrosselWrapper = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 60px;
    scroll-behavior: smooth;
    
    /* Esconder scrollbar no Webkit browsers */
    &::-webkit-scrollbar {
        height: 8px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }
    
    @media (max-width: 768px) {
        padding: 0 20px;
        
        /* Esconder scrollbar completamente no mobile */
        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`

const SetaNavegacao = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #333;
    z-index: 10;
    transition: all 0.3s ease;
    
    &:hover {
        background: white;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-50%) scale(1.1);
    }
    
    &:active {
        transform: translateY(-50%) scale(0.95);
    }
    
    ${props => props.left && `
        left: 10px;
    `}
    
    ${props => props.right && `
        right: 10px;
    `}
    
    @media (max-width: 768px) {
        display: none;
    }
`

const CarrosselContent = styled.div`
    display: flex;
    gap: 20px;
    min-width: max-content;
    padding-bottom: 10px;
    
    @media (max-width: 768px) {
        gap: 15px;
    }
`

const LivroCard = styled.div`
    flex-shrink: 0;
    width: 180px;
    background: white;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
    
    @media (max-width: 768px) {
        width: 150px;
        padding: 12px;
    }
`

const LivroImagem = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 12px;
    
    @media (max-width: 768px) {
        height: 150px;
        margin-bottom: 10px;
    }
`

const LivroTitulo = styled.h3`
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin: 0 0 8px 0;
    text-align: center;
    line-height: 1.3;
    min-height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
        font-size: 13px;
        min-height: 32px;
    }
`

const LivroAutor = styled.p`
    font-size: 12px;
    color: #666;
    margin: 0 0 8px 0;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 11px;
    }
`

const LivroPreco = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: #EB9B00;
    margin: 0;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 13px;
    }
`

const UltimosLancamentos = ({ onBookClick = () => {} }) => {
    const carrosselRef = useRef(null);

    const scrollLeft = () => {
        if (carrosselRef.current) {
            carrosselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carrosselRef.current) {
            carrosselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                <SetaNavegacao left onClick={scrollLeft}>
                    ←
                </SetaNavegacao>
                <CarrosselWrapper ref={carrosselRef}>
                    <CarrosselContent>
                        {livrosLocal.map(livro => (
                            <LivroCard 
                                key={livro.id}
                                onClick={() => onBookClick(livro)}
                            >
                                <LivroImagem 
                                    src={imagemLivro} 
                                    alt={livro.nome || 'Livro'} 
                                />
                                <LivroTitulo>{livro.nome}</LivroTitulo>
                                <LivroAutor>{livro.autor}</LivroAutor>
                                <LivroPreco>{livro.preco}</LivroPreco>
                            </LivroCard>
                        ))}
                    </CarrosselContent>
                </CarrosselWrapper>
                <SetaNavegacao right onClick={scrollRight}>
                    →
                </SetaNavegacao>
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    );
};

export default UltimosLancamentos;
