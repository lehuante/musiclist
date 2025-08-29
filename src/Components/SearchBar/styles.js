import styled from "styled-components";

const SearchForm = styled.form `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 8px 2px ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    background: ${({ theme }) => theme.colors.background};
    width: 25%;
    height: 1rem;
    min-width: 320px;
    gap: 16px;
`;

export { SearchForm };
