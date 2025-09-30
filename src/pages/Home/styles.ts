import styled from "styled-components"

export const HomeContainer = styled.main`
  padding: 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 3px solid #ffcb05;
  padding-bottom: 1rem;
  gap: 1rem;
  
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #ffcb05;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    letter-spacing: 2px;
  }
  
  div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    h1 {
      font-size: 2.5rem;
    }
  }
  
  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    
    div {
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }
  }
`;

export const PokemonList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 0.75rem;
  }
`;

export const BaseButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export const ThemeButton = styled(BaseButton)`
  background: transparent;
  color: ${props => props.theme.colors.text};
  border: 2px solid #ffcb05;
  
  @media (max-width: 480px) {
    transform: translateX(-8px);
  }
`;

export const LoadMoreButton = styled(BaseButton)`
  display: block;
  margin: 2rem auto 0;
  background: linear-gradient(45deg, #ffcb05, #ffd54f);
  color: #1a1a1a;
  border: 2px solid #3d7dca;
  font-weight: bold;
`;

export const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 2px solid #ffcb05;
  border-radius: 8px;
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: bold;

  &:focus {
    outline: none;
    border-color: #3d7dca;
    box-shadow: 0 0 8px rgba(61, 125, 202, 0.3);
  }
  
  option {
    background-color: ${props => props.theme.colors.cardBackground};
    color: ${props => props.theme.colors.text};
    padding: 0.5rem;
  }
`;