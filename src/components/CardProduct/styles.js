import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffff;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

    div {
        width: 100%;
        height: 80px;
        display: flex;
        gap: 5px;
        flex-direction: column;
        justify-content: space-between;

        p {
            font-size: 18px;
            color: #ff8c05; 
            line-height: 20px;
            font-weight: 700;
            margin-top: 40px;
        }

        strong {
            font-size: 22;
            color: #363636;
            font-weight: 800;
            line-height: 20px;
        }
    }
`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
`;