import styled from 'styled-components'

export const Layer2 = styled.div.attrs({
    className:'Layer2'
})`

`;

export const Layer1 = styled.div.attrs({
    className:'Layer1'
})`
    :hover{
        box-shadow: 0 25px 60px rgba(0,0,0,.8);
    }

    :hover~ .Layer2{
        filter: blur(10px);
    }
`;

export const ButtonWrapper = styled.div.attrs({
    className: "ButtonWrapper"
})`
    position: relative;
`;

export const Button = styled.div.attrs({
    className: "Button"
})`
    
`;

export const ButtonArea = styled.button`
    background-color: #f7843d; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    font-size: 20px;
    font-family: "montserrat";
    text-decoration: none;
    margin: 20px 10px;
    text-transform: uppercase;
    cursor: pointer;
`;

export const Smenu = styled.ul.attrs({
    className: "Smenu"
})`
    position:absolute;
    padding-inline-start: 10px;
    top:60px;
    z-index:10;
`;


export const SmenuA = styled.li.attrs({
    className: "Smenu"
})`
    width:80px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 60px;
    overflow:hidden;
    transition: max-height 0.3s;
    list-style:none;
    cursor: pointer;
    border: 2px solid #f7843d;
    background: #f7843d;
    font-size: 20px;
    font-family: "montserrat";
    color: white;

        :hover{
            background: rgba(0, 0, 0, 0.5);
            color: #f7843d;
        }
`;

export const Value = styled.div.attrs({
    className: "Value"
})`
    display:flex;
    justify-content: center;
    font-family: "montserrat";
    color: #f4e6dc;
    font-size: 20px;
`;

export const Range = styled.input.attrs({
    className: "Value",
    type:"range",
})`
    margin-left: 20px;
    width: 180px;
`;