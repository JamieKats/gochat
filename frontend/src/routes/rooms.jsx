import { Box, Text } from "@chakra-ui/react"
// import { Children } from "react"

export default function Rooms({roomsInfo}) {
    // const arrayRoomsInfo = Children.toArray(roomsInfo)
    return (
        // <Text>List of rooms coming soon...</Text>
        <Box>
            {roomsInfo.map((roomInfo) => (
                <Text>{roomInfo.roomId}</Text>
            ))}
        </Box>
    )
}