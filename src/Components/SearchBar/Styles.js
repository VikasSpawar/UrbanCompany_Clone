import styled from "styled-components";



export const StyledInput = styled.div`
  display: flex !important;
  flex-wrap: wrap;
  & svg {
    position: absolute;
    color: gray;
    font-size: 30px;
    left: 10px;
    top: 12px;
  }
  & .arrow {
    left: 160px;
  }
  & .locationContainer {
    margin-left: 12%;
  }
  @media (max-width: 1680px) {
    .locationContainer {
      margin-left: 10%;
    }
  }
  @media (max-width: 1620px) {
    .locationContainer {
      margin-left: 6%;
    }
  }
  @media (max-width: 1550px) {
    .locationContainer {
      margin-left: 4%;
    }
  }
  @media (max-width: 1500px) {
    .locationContainer {
      margin-left: 1%;
    }
  }
  @media (max-width: 1500px) {
    .locationContainer {
      margin-left: 1%;
    }
    .searchInput {
      margin-top: 10px;
      margin-left: 1%;
    }
  }
  @media (max-width: 1120px) {
    .locationContainer {
      margin-left: 1%;
    }
    .searchInput {
      margin-top: 10px;
      margin-left: 1%;
      input {
        width: 400px;
      }
    }
  }
  @media (max-width: 775px) {
    .locationContainer {
      margin-left: 1%;
    }
    .searchInput {
      margin-top: 10px;
      input {
        width: 300px;
        margin-left: 0;
      }
    }
  }
`;



export const ShowLocation = styled.div`
  background-color: white;
  position: absolute;
  text-align: left;
  width: 280px;
  margin: 10px 0;
  padding: 20px;
  color: black;
  border-radius: 4px;
  & .head {
    display: flex;
    justify-content: space-between;
  }
  & .head > label {
    margin-left: 10px;
    margin-top: 1px;
    font-size: 14px;
  }
  & .head > * {
    margin: 0;
  }
  & svg {
    font-size: 18px;
    top: 22px;
  }
  & p {
    color: blue;
    cursor: pointer;
    margin: 8px 0 0 0;
    color: black;
    font-size: 15px;
    font-weight: 500;
  }
  & .blueText {
    color: blue;
  }
  & .clear {
    position: absolute;
    top: 5px;
    left: 295px;
    color: black;
    cursor: pointer;
  }
`;

export const SuggestionContainer = styled.div`
  background-color: white;
  border-radius: 3px;
  text-align: left;
  position: relative;
  top: -18px;
  & a {
    color: #555;
    text-decoration: none;
  }
  & div {
    padding: 10px 15px;
    border-radius: 3px;
    text-transform: capitalize;
  }
  & div:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;