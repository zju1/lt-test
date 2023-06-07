/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  Stack,
} from "@mui/material";
import { Field } from "../../../lib/components";
import { useHome } from "../../../app/providers/home-provider/context";
import { Add } from "@mui/icons-material";

export function AddBookDialog(props: DialogProps) {
  const {
    state: { formStore, isLoading },
    actions: { handleSubmit },
  } = useHome();

  return (
    <Dialog {...props} fullWidth>
      <DialogTitle>Add a book</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Field
              autoFocus
              disabled={isLoading}
              control={formStore.control}
              name="isbn"
              label="ISBN"
              rules={{
                required: {
                  value: true,
                  message: "ISBN is required field",
                },
              }}
            />
            <Stack flexDirection="row" gap={2} justifyContent="flex-end">
              <Button
                disabled={isLoading}
                onClick={() => (props as any).onClose()}
                data-variant="light"
                size="medium"
              >
                Cancel
              </Button>
              <Button
                disabled={isLoading}
                type="submit"
                sx={{ height: 40 }}
                size="medium"
                startIcon={<Add />}
                variant="contained"
              >
                Add
              </Button>
            </Stack>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}
