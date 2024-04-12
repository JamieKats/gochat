import {
  Box,
  Stack,
  Button,
  FormControl,
  Input,
  FormErrorMessage
} from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import { Formik, Form, Field } from "formik";

function NameInput({ onSelectName }) {

  return (
    <>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={() => onSelectName()}
      >
        {(props) => (
          <Form>
            <Stack direction="row" spacing={7}>
              <Field name='name'>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <Input placeholder="name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                size="lg"
                leftIcon={<EditIcon />}
                colorScheme="green"
                variant="solid"
                type="submit"
              >
                Set Name
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default NameInput;