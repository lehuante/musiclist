import styled from "styled-components";


const MusicSlot = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${({ año, theme }) =>
            año >= 2020 && año <= 2022
                ? "red"
                : theme.colors.primary};
    border-radius: 8px;
    padding: 16px;
    margin: 12px 0;
    background: ${({ theme }) => theme.colors.background};
    width: 30%;
    gap: 16px;


`
const AlbumInfo = styled.div `
    flex: 1;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 1.1rem;
`
const AlbumYear = styled.div `
    flex: 0 0 100px;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
`
const StyledButton = styled.button`
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    padding: 8px 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
    &:hover {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.background};
    }
`
export { MusicSlot, AlbumInfo, AlbumYear, StyledButton };