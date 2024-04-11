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

function NameInput({ name, onSelectName }) {

    return (
        <Box>
            <Stack direction="row" spacing={7}>
                <Formik
                    initialValues={{ name:'' }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values));
                    }}
                >
                {(props) => (
                    <Form>
                        <Field name='name'>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <Input {...field} placeholder="name" />
                                    <FormErrorMessage>{forms.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Form>
                )}
                    <Button
                    size="lg"
                    leftIcon={<EditIcon />}
                    colorScheme="green"
                    variant="solid"
                    >
                        Select Name pls
                    </Button>
                </Formik>
            </Stack>
        </Box>
    )
}

export default NameInput;