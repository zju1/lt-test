/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonBase, alpha, styled } from "@mui/material";

export const BookCardWrapper = styled(ButtonBase)(({ theme }) => ({
  display: "grid",
  borderRadius: theme.shape.borderRadius,
  gap: 10,
  position: "relative",
}));

export const BookCardImage = styled("img")(({ theme }) => ({
  objectFit: "cover",
  objectPosition: "center",
  width: "100%",
  height: 230,
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down("md")]: {
    height: 200,
  },
}));

export const BookCardTitle = styled("h4")(({ theme }) => ({
  margin: 0,
  textAlign: "left",
  fontFamily: "Inter Variable",
  fontSize: 18,
  lineHeight: "20px",
  fontWeight: "600",
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const BookCardAuthor = styled("p")(({ theme }) => ({
  margin: 0,
  textAlign: "left",
  fontFamily: "Inter Variable",
  fontSize: 12,
  lineHeight: "14px",
  color: theme.palette.grey[500],
}));

export const BookCardMeta = styled("span")((theme) => ({
  margin: 0,
  textAlign: "left",
  fontFamily: "Inter Variable",
}));

export const BookStatus = styled("span")((props) => ({
  backgroundColor: alpha(
    ["#da005c", "#3450e3", "#43e568"][(props as any)["data-status"]],
    1
  ),
  color: ["#ffffff", "#ffffff", "#000000"][(props as any)["data-status"]],
  position: "absolute",
  top: 5,
  left: 5,
  padding: "3px 15px",
  borderRadius: props.theme.shape.borderRadius,
  fontFamily: "Inter Variable",
  fontWeight: "600",
  boxShadow: props.theme.shadows[1],
}));
