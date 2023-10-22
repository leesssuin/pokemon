import styled from "styled-components";

export const DetailContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;

  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    .name {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .img-wrap {
      width: 70%;

      img {
        width: 100%;
      }
    }

    .title {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .info {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .info-wrap {
      margin: 1.5rem 0;

      .ability {
        margin: 1rem;
        padding: 0.5rem;
        border-radius: 10px;
        background-color: #a7ce97;
        font-weight: 600;
      }

      .type-name {
        margin: 1rem;
        padding: 0.5rem;
        border: 3px solid #f05e5e;
        border-radius: 10px;
        font-weight: 600;

        &:last-child {
          border: 3px solid #b05ef0;
        }
      }
    }
  }
`;
