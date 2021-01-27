import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 4px;
  overflow: hidden;
  background-color:#222C2C;
  
  ;

  h1,h2,h3{
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-top:1;
    text-align: center;
    color: white;
    font-family: 'Rubik', sans-serif;
  }

  p{
    font-size:14;
    font-weight:700;
    line-height:1;
    margin-bottom: 0;
  }
`;
Widget.Header = styled.header`
  display: flex;
  justify-content:flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  *{
    margin: 0;
  }

`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child{
    margin-top:0;
  }
  & > *::last-child{
    margin-bottom:0;
  }
  ul{
    list-style:none;
    padding:0;
  }
`;

export default Widget;