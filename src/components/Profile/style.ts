import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  position: relative;
  z-index: 999;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  margin-top: -5rem;
`;

export const ProfileContent = styled.div`
  display: flex;
  background: ${(props) => props.theme["base-background"]};
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  filter: drop-shadow(0 2px 28px #00000033);

  gap: 2rem;
`;

export const ProfileImageContent = styled.div`
  display: flex;
  min-width: fit-content;
  border-radius: 8px;
  overflow: hidden;
`;

export const ProfileBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
    line-height: 1.3;
  }
`;

export const ProfileHeaderLink = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  color: ${(props) => props.theme["blue-400"]};
  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  gap: 0.5rem;

  &:hover {
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme["blue-400"]};
      bottom: 0;
      left: 0;
    }
  }
`;

export const ProfileText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const ProfileInfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: auto;
`;

export const ProfileInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    line-height: 1.6;
  }

  svg {
    color: ${(props) => props.theme["base-label"]};
    font-size: 1rem;
  }
`;

export const TitleArticle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${(props) => props.theme["base-title"]};
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
`;
