import {
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
  Button,
} from "@mui/material";
import { Content, FormWrapper, Wrapper } from "./signup.s";
import { Google, Facebook, LinkedIn, GitHub } from "@mui/icons-material";
import { useAuth } from "../../app/providers/auth-provider/context";
import { Field } from "../../lib/components";

export function SignUp() {
  const {
    state: {
      formStore: { control },
      isLoading,
    },
    actions: { handleSubmit },
  } = useAuth();

  return (
    <Wrapper>
      <Content>
        <FormWrapper>
          <Stack spacing={15}>
            <Stack>
              <Typography variant="h1">Welcome Back!</Typography>
              <Typography variant="h4">Please signup to continue</Typography>
              <Divider sx={{ mt: 2 }} />
            </Stack>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Stack spacing={1.5}>
                  <Field
                    disabled={isLoading}
                    control={control}
                    name="name"
                    rules={{
                      required: {
                        value: true,
                        message: "This is required field",
                      },
                    }}
                    label="Full name"
                  />
                  <Field
                    disabled={isLoading}
                    control={control}
                    name="email"
                    rules={{
                      required: {
                        value: true,
                        message: "This is required field",
                      },
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
                        message: "Email must be a valid email address",
                      },
                    }}
                    label="Email"
                  />
                  <FormControlLabel
                    label="Remember me"
                    control={<Checkbox />}
                  />
                </Stack>
                <Button
                  disabled={isLoading}
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Sign Up
                </Button>
                <Stack flexDirection="row" alignItems="center" gap="15px">
                  <Divider sx={{ flex: 1 }} />
                  <Typography> Or continue with </Typography>
                  <Divider sx={{ flex: 1 }} />
                </Stack>
                <Stack spacing={1}>
                  <Button
                    startIcon={<Google htmlColor="#D6372C" />}
                    data-variant="light"
                  >
                    Sign up with Google
                  </Button>
                  <Button
                    startIcon={<Facebook htmlColor="#3D5FA3" />}
                    data-variant="light"
                  >
                    Sign up with Facebook
                  </Button>
                  <Button
                    startIcon={<LinkedIn htmlColor="#0075AD" />}
                    data-variant="light"
                  >
                    Sign up with LinkedIn
                  </Button>
                  <Button startIcon={<GitHub />} data-variant="light">
                    Sign up with GitHub
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </FormWrapper>
      </Content>
    </Wrapper>
  );
}
