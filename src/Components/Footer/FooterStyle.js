import styled from "styled-components";


export const StyledFooter = styled.div`
  background-color: black;
  z-index: 3;
  
  position: relative;
  margin: 0;
  color: #999;
  & .linkMenu {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  & .link {
    font-size: 15px;
    color:white
  }
  & .container {
    width: 72%;
    margin: auto;
    
}
  & .country {
    color: white;
    font-size: 13px;
    text-align:left
  }
  & .city {
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
  }
  & .city > span {
    margin: 5px 0;
    margin-right: 10px;
  }
  & .copyRightContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    
  }
  & img {
    width: 310px;
    height: 39px;
  }
  & span {
    position: relative;
    top: -12px;
    margin-left: 10px;
  }
  & .iconContainer > * {
    margin: 0px 10px;
   
  }
  & .cp{
    margin-top: 20px
  }
  & .iconContainer{
    display:"flex"
  }
`;
