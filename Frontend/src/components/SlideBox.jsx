import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
} from "@chakra-ui/react";

export const SlideBox = ({ chargeRatio }) => {
  const labelStyles = {
    mt: "5",
    ml: "-2.5",
    fontSize: "15px",
    color: "white",
  };

  return (
    <Box pt={6} pb={2}>
      <Slider
        aria-label="slider-ex-6"
        onChange={() => chargeRatio}
        sx={{ height: 10, borderRadius: "10px" }}
        value={chargeRatio}
        isReadOnly={true}
      >
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
        </SliderMark>
        <SliderMark
          value={chargeRatio}
          textAlign="center"
          // bg="blue.500"
          color="white"
          // fontWeight={100}
          fontSize="20px"
          mt="-50"
          ml="-5"
          w="12"
        >
          {chargeRatio} %
        </SliderMark>
        <SliderTrack sx={{ borderRadius: "30px", height: "20px" }}>
          <SliderFilledTrack
            sx={{ borderRadius: "10px" }}
            // bg="blue.500"
            h="8"
            borderRadius="full"
            style={{
              textDecoration: "none",
              position: "relative",
              border: "none",
              fontSize: "16px",
              fontFamily: "inherit",
              color: "#fff",
              width: "9em",
              height: "3em",
              lineHeight: "2em",
              textAlign: "center",
              background:
                "linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4)",
              backgroundSize: "300%",
              borderRadius: "30px",
              zIndex: "1",
            }}
          />
        </SliderTrack>
        <SliderThumb
          sx={{ width: "30px", height: "30px", borderRadius: "100%" }}
        />
      </Slider>
    </Box>
  );
};
