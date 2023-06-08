/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonBase, alpha, styled } from "@mui/material";

export const BookCardWrapper = styled(ButtonBase)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: theme.shape.borderRadius,
  gap: 10,
  position: "relative",
}));

export const BookCardImage = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  height: 250,
  flexShrink: 0,
  flexGrow: 0,
  borderRadius: theme.shape.borderRadius,
  pointerEvents: "none",
  [theme.breakpoints.down("md")]: {
    height: 200,
  },
}));

export const BookCardTitle = styled("h4")(({ theme }) => ({
  margin: 0,
  textAlign: "left",
  fontFamily: "Inter Variable",
  fontSize: 16,
  lineHeight: "20px",
  fontWeight: "600",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    lineHeight: "16px",
  },
}));

export const BookCardAuthor = styled("p")(({ theme }) => ({
  textAlign: "left",
  fontWeight: "500",
  fontFamily: "Inter Variable",
  fontSize: 12,
  color: theme.palette.grey[500],
}));

export const BookCardMeta = styled("span")(() => ({
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
