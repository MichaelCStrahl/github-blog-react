import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18.5rem;
  position: relative;
  overflow: hidden;

  background: ${(props) => props.theme["base-profile"]};

  &::after {
    content: "";
    position: absolute;
    top: -3.25rem;
    right: -0.625rem;
    width: 9.68rem;
    height: 9.68rem;
    border-radius: 50%;
    background: ${(props) => props.theme["blue-700"]};
    filter: blur(368px);
  }

  &::before {
    content: "";
    position: absolute;
    top: -6rem;
    left: -8.125rem;
    width: 14.75rem;
    height: 14.75rem;
    border-radius: 50%;
    background: ${(props) => props.theme["blue-700"]};
    filter: blur(400px);
  }
`;

export const Effect = styled.img`
  object-fit: contain;
  height: fit-content;
  padding: 1.875rem 0;
`;

export const Logo = styled.img`
  align-self: baseline;
  margin-top: 4rem;
`;
