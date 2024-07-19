import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 860px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 70px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 50px;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-gap: 0;
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  align-items: center;
  grid-area: col1;
`;

export const TextWrap = styled.div`
  margin: auto;
  max-width: 400px;
`;

export const Column2 = styled.div`
  align-items: center;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 400px;
`;
