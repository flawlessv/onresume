import styled from 'styled-components'

export const Paywrapper = styled.div`
  .card {
    width: 490px;
    height: 350px;
    padding: 0.8em;
    background: #f5f5f5;
    position: relative;
    overflow: visible;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .card-img {
    height: 55%;
    width: 100%;
    border-radius: 0.5rem;
    transition: 0.3s ease;
    img {
      /* width: 100%; */
      height: 100%;
    }
  }

  .card-info {
    /* padding-top: 10%; */
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .card-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;
  }

  /*Text*/
  .text-title {
    font-weight: 900;
    font-size: 1.2em;
    line-height: 1.5;
  }

  .text-body {
    font-size: 0.9em;
    padding-bottom: 10px;
  }

  /*Button*/
  .card-button {
    display: flex;
    padding: 0.3em;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.3s ease-in-out;
  }

  /*Hover*/
  .card-img:hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,
      rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
  }
`