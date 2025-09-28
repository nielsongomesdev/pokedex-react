import { Link } from "react-router-dom"
import styled from "styled-components"

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PokemonInfoCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const MainInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    text-transform: capitalize;
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text};
  }

  img {
    width: 150px;
    height: 150px;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    
    img {
      width: 120px;
      height: 120px;
    }
  }
  
  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const InfoSection = styled.div`
  margin-top: 1.5rem;

  h2 {
    color: ${props => props.theme.colors.text};
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  li {
    background-color: ${props => props.theme.colors.secondary};
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

export const MovesList = styled.ul`
  column-count: 3;
  column-gap: 20px;
  
  @media (max-width: 768px) {
    column-count: 2;
    column-gap: 15px;
  }
  
  @media (max-width: 480px) {
    column-count: 1;
  }
`;

export const BackLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 2rem;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;