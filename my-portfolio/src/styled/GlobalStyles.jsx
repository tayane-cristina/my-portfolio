import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    color: #000000;
    margin-top: 10vh;
    text-align: center;
`

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    h2 {
        margin-left: 5rem;
        font-size: 30px;
    }

    nav {
        width: 50vw;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    a {
        font-size: 18px;
        color: black;
        transition: 0.3s;
        

        &:hover {
            color: orange;
        }
    }
`

export const MidleImage = styled.img`
    
`