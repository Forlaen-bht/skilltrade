import { Box } from "./ui/box"
import { Text } from "./ui/text"

const Pill = ({text}: {text: string}) => {
    return  (
        <Box style={{borderColor: '#ddd', borderWidth: 1, borderRadius: 50, padding: 8, margin: 4}}>
            <Text size="sm">{text}</Text>
        </Box>
    );
}

export default Pill;
