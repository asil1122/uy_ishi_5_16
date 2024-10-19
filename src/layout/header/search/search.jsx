import React from "react";
import { SearchIn } from "../../../style/style";
import { SearchIcon } from "../../../assets/icons/search";
import { colors } from "../../../config/colors";
import { Box, Stack, InputAdornment, Typography, IconButton } from "@mui/material";
import { Korzinka } from "../../../assets/icons/korzinka";

export const Search = () => {
  return (
    <>
      <Stack direction={"row"} gap={"18px"}>
        <SearchIn
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "36px",
              padding: "5px 6px 5px 0",
              backgroundColor: `${colors.white}`,
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />
        <Stack
          sx={{ cursor: "pointer" }}
          padding={"5px 23px 5px 6px"}
          border={"1px solid #BFBFBF"}
          borderRadius={"33px"}
          direction={"row"}
          alignItems={"center"}
          width={"165px"}
          gap={"12px"}
        >
          <IconButton sx={{ padding: "0" }}>
                <Korzinka />
        </IconButton>  
          <Typography fontWeight={"600"} fontSize={"18px"} variant="body2">
            Cart (0)
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
