import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Fab,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SearchWidget } from "./components/SearchWidget";
import { useHome } from "../../app/providers/home-provider/context";
import { EmptyImage } from "./home.s";
import { AddBookDialog } from "./components/AddBookDialog";
import { BookCard } from "../../lib/components";
export function Home() {
  const {
    state: { data, isFetching },
  } = useHome();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    actions: { setAddOpen },
    state: { addOpen },
  } = useHome();

  return (
    <Box>
      <Container fixed maxWidth="md">
        <Stack pb="100px" spacing="10px">
          <Stack
            py={1.5}
            flexDirection="row"
            spacing={0}
            gap={1.5}
            position="sticky"
            top={0}
            zIndex={1}
            bgcolor={theme.palette.background.default}
          >
            <SearchWidget />
            {!isMobile && (
              <Button
                onClick={() => setAddOpen(true)}
                variant="contained"
                startIcon={<Add />}
              >
                Add a book
              </Button>
            )}
          </Stack>
          <Stack spacing={2} py={2}>
            <Stack spacing={1.5}>
              <Typography textTransform="uppercase" variant="h4">
                Your books
              </Typography>
              <Divider />
            </Stack>
            {isFetching ? (
              <Stack py={10} alignItems="center">
                <CircularProgress />
              </Stack>
            ) : data?.data ? (
              <Stack
                sx={(theme) => ({
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: "20px",
                  [theme.breakpoints.down("md")]: {
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "16px",
                  },
                  [theme.breakpoints.down("sm")]: {
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                  },
                })}
              >
                {data.data.map((item) => (
                  <BookCard {...item} key={item.book.id} />
                ))}
              </Stack>
            ) : (
              <Stack spacing={2} py={5} alignItems="center">
                <EmptyImage src="/images/empty.png" alt="Empty result" />
                <Typography textAlign="center">
                  You have no books yet. <br /> As soon as you add some books
                  they will appear here.
                </Typography>
              </Stack>
            )}
          </Stack>
          {isMobile && (
            <Fab
              onClick={() => setAddOpen(true)}
              variant="extended"
              color="primary"
              size="large"
              sx={{ position: "fixed", bottom: 16, right: 16 }}
            >
              <Add />
              Add a book
            </Fab>
          )}
        </Stack>
        <AddBookDialog open={addOpen} onClose={() => setAddOpen(false)} />
      </Container>
    </Box>
  );
}
