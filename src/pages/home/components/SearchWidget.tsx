/* eslint-disable @typescript-eslint/no-explicit-any */
import { Search } from "@mui/icons-material";
import {
  SearchButton,
  SearchIcon,
  SearchInput,
  StyledPopover,
} from "../home.s";
import { useRef, useState, useEffect } from "react";
import { List, Stack, useMediaQuery, useTheme } from "@mui/material";

export function SearchWidget() {
  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>();
  const [width, setWidth] = useState(100);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (buttonRef.current) {
      setWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  return (
    <>
      <SearchButton
        ref={buttonRef as any}
        onClick={(e) => setAnchor(e.currentTarget)}
      >
        <Search htmlColor="#aaa" />
        Search...
      </SearchButton>
      <StyledPopover
        open={!!anchor}
        onClose={() => setAnchor(null)}
        anchorEl={anchor}
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      >
        <Stack>
          <Stack
            sx={{
              width: isMobile ? `100vw` : width,
              position: "relative",
            }}
          >
            <SearchIcon>
              <Search htmlColor="#aaa" fontSize="inherit" />
            </SearchIcon>
            <SearchInput placeholder="Search..." autoFocus />
          </Stack>
          <List />
        </Stack>
      </StyledPopover>
    </>
  );
}
