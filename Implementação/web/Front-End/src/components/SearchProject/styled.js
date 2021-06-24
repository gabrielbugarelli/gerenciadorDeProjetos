import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;
export const ContainerSearchProject = styled.button`
    width: 100%;
    height:7vh ;
    display: flex;
    border-radius: 15px;
    background-color:#999898 ;
    color: white ;
    border: none;
    outline: none;
    align-items: center;
    justify-content: center;
    padding-right: 30px;
    font-size: 25px;
`;

export const IconSearchProject = styled.i`
    font-size: 20px;
    margin-left: 15px;
`;

export const ContainerListProject = styled.div`
    width: 100%;
    height: auto;
    max-height: 20vh;
    position: absolute;
    border-radius: 15px;
    background-color: white;
    overflow-y: auto;
    ::-webkit-scrollbar{
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: rgba(0, 0, 0, 0.2);;
    }

`;