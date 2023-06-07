import { ButtonBase, Popover, alpha, styled } from "@mui/material";

export const SearchButton = styled(ButtonBase)(({ theme }) => ({
  flex: 1,
  textAlign: "left",
  justifyContent: "flex-start",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  fontSize: 18,
  fontWeight: "500",
  fontFamily: "Inter Variable",
  background: "#dfdfdf",
  color: "#aaa",
  gap: 15,
  alignItems: "center",
}));

export const SearchInput = styled("input")(({ theme }) => ({
  padding: theme.spacing(2),
  paddingLeft: 50,
  outline: "none",
  border: "none",
  fontSize: 18,
  fontWeight: "500",
  fontFamily: "Inter Variable",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const SearchIcon = styled("span")({
  position: "absolute",
  top: "50%",
  left: 15,
  transform: "translateY(-50%)",
  height: 24,
  fontSize: 24,
});

export const StyledPopover = styled(Popover)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.dark, 0.8),
  backdropFilter: "blur(3px)",
  "& .MuiPaper-root": {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    transform: "none !important",
  },
}));

export const EmptyImage = styled("img")({
  maxWidth: 300,
});
