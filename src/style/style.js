import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { colors } from "../config/colors";
import { Box, Button, TextField } from "@mui/material";

export const LinkBtn = styled(Link)`
    text-decoration: none;
    color: ${colors.primary};
`


export const CustomButton = styled(Button)({
  fontWeight: "700",
  fontSize: "20px",
  color: `${colors.primary}`,
  padding: "28px 39px 28px 39px",
  backgroundColor: `${colors.yellow}`,
  borderRadius: "16px",
});



export const SearchIn = styled(TextField)`
  width: 376px;
  border-radius: "36px";
  height: 66px;
`;

export const CustomBox = styled(Box)`
border-radius: 31px 34px 30px 30px;
padding: 46px 67px 60px 57px;
width: 613px;
box-shadow: 0 20px 35px 0 rgba(167, 167, 167, 0.25);
background-color: #fff;
position: absolute;
    bottom: -60px;
    left: 32px;
`

export const CustomInput = styled.input`
  border-radius: 16px;
  border: none;
  background-color: #fff;
  width: 349px;
font-weight: 400;
font-size: 18px;
color: #ababab;
padding-top: 28px;
padding-right: 24px;
padding-bottom: 31px;
padding-left: 24px;
`