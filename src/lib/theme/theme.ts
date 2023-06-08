/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    background: {
      paper: "#ffffff",
      default: "#eeeeee",
    },
    primary: {
      main: "#000000",
      light: "#efefefef",
      "50": "#f5f5f5",
      "100": "#e9e9e9",
      "200": "#d9d9d9",
      "300": "#c4c4c4",
      "400": "#9d9d9d",
      "500": "#7b7b7b",
      "600": "#555555",
      "700": "#434343",
      "800": "#262626",
      "900": "#000000",
    },
  },
  shape: {
    borderRadius: 15,
  },
  typography: {
    allVariants: {
      fontFamily: `"Inter Variable", sans-serif`,
    },
    h1: {
      fontSize: 32,
      fontWeight: "700",
    },
    h4: {
      fontSize: 18,
      fontWeight: "550",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          transition: ".2s",
          fontWeight: "600",
          paddingLeft: 20,
          paddingRight: 20,
          textTransform: "none",
          "&:hover": {
            boxShadow: "none",
          },
          "&:active": {
            filter: "brightness(120%)",
          },
        },
        sizeLarge: {
          height: 50,
        },
      },
      defaultProps: {
        disableRipple: true,
      },
      variants: [
        {
          props: { ["data-variant" as any]: "light", color: "primary" },
          style: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
            color: theme.palette.primary.main,
            "&:hover": {
              boxShadow: "none",
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              filter: "brightness(95%)",
            },
            "&:active": {
              filter: "brightness(105%)",
            },
          }),
        },
        {
          props: { ["data-variant" as any]: "light", color: "error" },
          style: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.error.light, 0.2),
            color: theme.palette.error.main,
            "&:hover": {
              boxShadow: "none",
              backgroundColor: alpha(theme.palette.error.light, 0.2),
              filter: "brightness(95%)",
            },
            "&:active": {
              filter: "brightness(105%)",
            },
          }),
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          "& .MuiFilledInput-root": {
            border: `1px solid ${
              ownerState.error ? theme.palette.error.main : "#e2e2e2"
            } `,
            borderRadius: theme.shape.borderRadius,
            height: 50,
            overflow: "hidden",
            fontWeight: "600",
            color: ownerState.error ? theme.palette.error.main : "#000000",
            backgroundColor:
              theme.palette.mode === "light" ? "#f5f5f5" : "#2b2b2b",
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "light" ? "#f5f5f5" : "#2b2b2b",
              borderColor: theme.palette.primary.main,
            },
            "&.Mui-focused": {
              backgroundColor:
                theme.palette.mode === "light" ? "#f5f5f5" : "#2b2b2b",
              borderColor: theme.palette.primary.main,
            },
          },
          label: {
            fontWeight: "500",
            transform: "translate(12px, 14px)",
            "&.MuiInputLabel-shrink": {
              transform: "translate(12px, 7px) scale(0.75)",
            },
          },
        }),
      },
      defaultProps: {
        InputProps: {
          disableUnderline: true,
        },
        variant: "filled",
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          marginRight: 8,
          borderRadius: 15,
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontWeight: "600",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: "500",
        },
      },
    },
  },
});
