/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useHome } from "../../../app/providers/home-provider/context";
import { Delete, Save } from "@mui/icons-material";

export function EditBookDialog(props: DialogProps) {
  const {
    state: { isLoading, currentBook },
    actions: { handleSubmit, setCurrentBook, handleDelete },
  } = useHome();

  return (
    <Dialog {...props} fullWidth>
      {currentBook && (
        <>
          <DialogTitle> {currentBook.book.title} </DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Status
                  </FormLabel>
                  <RadioGroup
                    defaultValue={currentBook.status}
                    value={currentBook.status}
                    onChange={(_event, value) => {
                      setCurrentBook({
                        ...currentBook,
                        status: parseInt(value),
                      });
                    }}
                  >
                    <FormControlLabel
                      value={0}
                      control={<Radio />}
                      label="New"
                    />
                    <FormControlLabel
                      value={1}
                      control={<Radio />}
                      label="Reading"
                    />
                    <FormControlLabel
                      value={2}
                      control={<Radio />}
                      label="Finished"
                    />
                  </RadioGroup>
                </FormControl>
                <Stack gap={1}>
                  <Button
                    disabled={isLoading}
                    type="submit"
                    sx={{ height: 40 }}
                    size="medium"
                    startIcon={<Save />}
                    variant="contained"
                  >
                    Save
                  </Button>
                  <Button
                    sx={{ height: 40 }}
                    disabled={isLoading}
                    onClick={() => (props as any).onClose()}
                    data-variant="light"
                    size="medium"
                  >
                    Cancel
                  </Button>
                  <Button
                    sx={{ height: 40 }}
                    disabled={isLoading}
                    startIcon={<Delete />}
                    onClick={handleDelete}
                    data-variant="light"
                    size="medium"
                    color="error"
                  >
                    Delete
                  </Button>
                </Stack>
              </Stack>
            </form>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}
