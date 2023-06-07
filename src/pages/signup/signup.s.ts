import { alpha, styled } from "@mui/material";
import bgImg from "../../assets/img/doodle.jpg";

export const Wrapper = styled("div")({
  background: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

export const Content = styled("div")({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backdropFilter: "blur(15px)",
});

export const FormWrapper = styled("div")(({ theme }) => ({
  padding: "40px",
  width: 500,
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
    width: "100%",
    minHeight: "100vh",
    verticalAlign: "center",
    borderRadius: 0,
    background: alpha(theme.palette.background.paper, 0.7),
  },
}));
