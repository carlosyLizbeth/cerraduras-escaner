import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

const MainSection = () => {
  const subtitle =
    "¡Usar Roomsite es realmente sencillo!. Sigue estos tips para que tu experiencia sea realmente sensacional.";
  const sm = useMediaQuery("min-width(600px)");

  return (
    <Container
      sx={{
        background: "none",
      }}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
        }}
        gridTemplateRows="auto"
        gridTemplateAreas={{
          xs: "'.' '.' 'title' 'subtitle' 'btn'",
          sm: "'. img' 'title img' 'subtitle img' 'btn img' '. img'",
        }}
        columnGap={{
          xs: 0,
          sm: 2,
        }}
        height={{
          xs: "92vh",
        }}
      >
        <Box
          textAlign={{
            xs: "center",
            sm: "left",
          }}
          gridArea={"subtitle"}
          alignSelf={{
            xs: "center",
          }}
        >
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
        <Box
          gridArea={"btn"}
          alignSelf={{
            xs: "start",
            sm: "start",
          }}
          display={"flex"}
          justifySelf={{
            xs: "center",
            sm: "left",
          }}
        >
          <Button variant="contained">SIGUIENTE</Button>
        </Box>

        <Box
          gridArea={"img"}
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
     <img src="https://media.gettyimages.com/id/1765124116/es/vector/icono-de-dise%C3%B1o-de-interiores-solid-style-elemento-de-dise%C3%B1o-de-icono-vectorial-para-p%C3%A1gina.jpg?s=612x612&w=0&k=20&c=7WmYxSP7Nb8jjqpq3ccv2uAV5GAJcvXSonRLYAUBf0w="   
     width="400"
     height="341" />      
 </Box>
    </Container>
  );
};

export default MainSection;
