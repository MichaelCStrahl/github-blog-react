import styled from "styled-components";

export const IssueContainer = styled.section`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  > p {
    margin: 2.5rem 2rem;

    h1, h2, h3, h4, h5, h6 {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    p {
      line-height: 1.6;
      margin-bottom: 10px;
    }

    ul, ol {
      padding: 0 1.1rem;
      margin-left: 20px;
      margin-bottom: 10px;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  }
`;
