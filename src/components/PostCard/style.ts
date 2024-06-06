import styled from "styled-components";

export const PostCardGridContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 10rem;
`;

export const PostCardContent = styled.a`
  display: flex;
  flex-direction: column;
  height: 16.25rem;

  padding: 2rem;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;

  p {
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;
    margin-top: 1.25rem;
    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme["base-label"]};
    transition: border 0.5s;
  }
`;

export const PostCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    flex: 1;
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: 700;
  }

  span {
    width: max-content;
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${(props) => props.theme["base-span"]};
    margin-top: 0.3rem;
  }
`;
