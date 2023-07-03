import { Box } from "@chakra-ui/react";
const DetailBox = () => {
    return (
        <Box className="bg-gray-100 w-96 h-96 flex flex-col justify-between items-center">
            {/* <img className="w-96 h-96" /> */}
            <Box className="bg-gray-700 text-gray-50 w-96 py-4">선물 이름</Box>
        </Box>
    );
};

export default DetailBox;
