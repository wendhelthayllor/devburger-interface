import styled from "styled-components";

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #f0f0f0;
    border-radius: 4px;
    border: none;
    background-color: #9758a6;
    transition: all 0.4s;

    &:hover {
      background-color: #6f357c;
    }
  }
`;

export const TotalPrice = styled.p`
  font-weight: bold;
`;

export const TrashImage = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;