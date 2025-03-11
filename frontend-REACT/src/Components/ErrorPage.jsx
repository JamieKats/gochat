import { Box, Text, Center, AbsoluteCenter } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom/dist";
import { Image } from "@chakra-ui/react";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Box position="relative" h="100px">
            <AbsoluteCenter axis="horizontal">
                <Center boxSize="sm" >
                    <Image 
                        src="https://media2.giphy.com/media/qxRMbqPKaXbUYB28Eu/giphy.gif?cid=6c09b952dc8j7g16lqadjbpfvoephxza6nsty222strwooka&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
                    ></Image>
                </Center>
                <Text fontSize="72px">Oops!</Text>
                <Text>Sorry, an unexpected error has occured.</Text>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </AbsoluteCenter>
        </Box>
    );
}