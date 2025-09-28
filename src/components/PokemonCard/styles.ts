import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 12px;
  padding: 1.5rem 1rem;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }

  p {
    font-weight: bold;
    text-transform: capitalize;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 0.75rem;
    
    img {
      max-width: 80px;
      height: 80px;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
    
    img {
      max-width: 70px;
      height: 70px;
    }
    
    p {
      font-size: 0.8rem;
    }
  }
`;