import styled from 'styled-components';

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SearchCard = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 15px 40px;
  border: 1px solid #ddd;
  padding: 20px 10px;
  border-radius: 10px;

  .image-wrapper {
    width: 100%;
    border-radius: 5px;
    height: 420px;
    overflow: hidden;
    border: 1px solid #ddd;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  h1 {
    margin: 10px 0;
    font-size: 21px;
  }

  p {
    margin: 0;
  }
`;

export const Star = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #ffc806;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;
