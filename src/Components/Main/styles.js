import styled from "styled-components";

export const Container = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: space-around;
`;

export const Segment = styled.div`
  /* margin: 20px 10px 10px 10px; */
  height: 100px;
  width: 25%;
  background: #ffa618;
  color: white;
  font-size: 30px;
  font-weight: 300;
  font-family: Oswald;
  line-height: 1;
  text-align: center;
  strong {
    margin: 30px;
  }
  p {
    margin: 10px;
    font-size: 1.4rem;
  }
  h3 {
    margin: 10px;
  }
`;

export const Section = styled.div`
  margin-top: -500px;
  height: 60px;
`;
