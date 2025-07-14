import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #E67E22 0%, #D35400 25%, #BF4F00 50%, #A04000 75%, #8B3500 100%);
  color: #ffffff;
  width: 100%;
  margin-top: auto;
  box-sizing: border-box;
`;

const BackToTopButton = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 13px;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const MainFooterContent = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 40px 0;
  backdrop-filter: blur(10px);
`;

const FooterLinksContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 13px;
  line-height: 1.4;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FFD700;
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 20px 0;
`;

const BottomFooterContent = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding: 30px 0;
  backdrop-filter: blur(10px);
`;

const BottomContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  h2 {
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  
  &:hover {
    color: #FFD700;
    background: rgba(255, 215, 0, 0.2);
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
`;

const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  
  span {
    margin-right: 10px;
  }
`;

const PaymentIcon = styled.span`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #333333;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

function Footer({
  companyName = "PAUL BOOKS",
  showBackToTop = true,
  footerLinks = {
    "Conheça-nos": [
      "Sobre a Paul Books",
      "Trabalhe conosco",
      "Imprensa",
      "Investidores",
      "Sustentabilidade"
    ],
    "Ganhe Dinheiro": [
      "Venda na Paul Books",
      "Programa de Afiliados",
      "Publique seus livros",
      "Seja um autor"
    ],
    "Formas de Pagamento": [
      "Cartão de crédito",
      "Cartão de débito",
      "PIX",
      "Boleto bancário",
      "Gift cards"
    ],
    "Precisa de Ajuda?": [
      "Central de atendimento",
      "Entrega e devoluções",
      "Política de privacidade",
      "Termos de uso",
      "FAQ"
    ]
  },
  socialLinks = [
    { icon: "📘", url: "#", name: "Facebook" },
    { icon: "📷", url: "#", name: "Instagram" },
    { icon: "🐦", url: "#", name: "Twitter" },
    { icon: "📺", url: "#", name: "YouTube" }
  ]
}) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      {showBackToTop && (
        <BackToTopButton onClick={scrollToTop}>
          Voltar ao topo
        </BackToTopButton>
      )}
      
      <MainFooterContent>
        <FooterLinksContainer>
          {Object.entries(footerLinks).map(([category, links]) => (
            <FooterColumn key={category}>
              <ColumnTitle>{category}</ColumnTitle>
              <LinksList>
                {links.map((link, index) => (
                  <li key={index}>
                    <FooterLink href="#">{link}</FooterLink>
                  </li>
                ))}
              </LinksList>
            </FooterColumn>
          ))}
        </FooterLinksContainer>
      </MainFooterContent>
      
      <BottomFooterContent>
        <BottomContainer>
          <LogoSection>
            <h2>{companyName}</h2>
          </LogoSection>
          
          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialIcon 
                key={index}
                href={social.url}
                title={social.name}
              >
                {social.icon}
              </SocialIcon>
            ))}
          </SocialLinks>
          
          <PaymentMethods>
            <span>Formas de pagamento:</span>
            <PaymentIcon>VISA</PaymentIcon>
            <PaymentIcon>MASTER</PaymentIcon>
            <PaymentIcon>PIX</PaymentIcon>
            <PaymentIcon>BOLETO</PaymentIcon>
          </PaymentMethods>
        </BottomContainer>
        
        <Copyright>
          <p>© 2025 {companyName}. Todos os direitos reservados.</p>
          <p>
            Este site é protegido por reCAPTCHA e as{' '}
            <FooterLink href="#">Políticas de Privacidade</FooterLink> e{' '}
            <FooterLink href="#">Termos de Serviço</FooterLink> do Google se aplicam.
          </p>
        </Copyright>
      </BottomFooterContent>
    </FooterContainer>
  );
}

export default Footer;
