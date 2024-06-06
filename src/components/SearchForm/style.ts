import styled from "styled-components";

export const SearchFormContainer = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 4.5rem auto 3rem;
  padding: 0 1.5rem;
`;

export const SearchFormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
    line-height: 1.6;
  }
`;

export const SearchFormContent = styled.form`
  display: flex;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background-color: ${(props) => props.theme["base-input"]};
    padding: 1rem;
    margin-top: 0.75rem;

    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
      font-size: 1rem;
    }
  }
`;
