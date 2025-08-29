import styled from 'styled-components';

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    box-shadow: 0 0 8px 2px ${({ theme }) => theme.colors.primary};
    padding: 24px;
    margin: 16px 0;
    background: ${({ theme }) => theme.colors.background};
    width: 15%;
    min-width: 320px;
    gap: 12px;
`;

const AlbumName = styled.p`
    font-weight: bold;
    margin: 8px 0;
    `

    export { DetailContainer, AlbumName };