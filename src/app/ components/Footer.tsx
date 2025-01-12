import { Box, Typography, Container } from "@mui/material";
import { v4 as uuidV4 } from "uuid";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const contactData = [
  {
    id: uuidV4(),
    title: "Phone Number",
    details: "+974 3118 1843",
    image: "assets/Component-2.svg.png",
  },
  {
    id: uuidV4(),
    title: "Email Address",
    details: "Elbrithcqhr@gmail.com",
    image: "assets/Component-2-1.svg.png",
  },
  {
    id: uuidV4(),
    title: "Office Location",
    details: "Ambassador Street, Zone 61,",
    image: "assets/Component-2-2.svg.png",
  },
];

export const Footer = () => (
  <Box
    sx={{
      backgroundColor: "#17414F",
      width: "100%",
      paddingY: 2,
      marginTop: 4,
    }}
  >
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {contactData.map((data) => (
            <Box
              key={data.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                alignItems: "center",
                padding: "10px",
                backgroundColor: "#215D72",
                borderRadius: 5,
                width: "100%",
                maxWidth: "250px",
              }}
            >
              <img
                style={{ width: "35px" }}
                alt={data.title}
                src={data.image}
              />
              <Box>
                <Typography color="white" fontSize={"12px"} variant="body2">
                  {data.title}
                </Typography>
                <Typography color="white" fontSize={"12px"} variant="body2">
                  {data.details}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 3,
            marginTop: 3,
          }}
        >
          <img
            style={{ width: "150px" }}
            alt="footer logo"
            src="assets/elbrit-contact.png"
          />
          <Typography
            sx={{
              color: "white",
              fontSize: "12px",
              width: "100%",
              maxWidth: "300px",
            }}
          >
            Your health, physical and emotional well-being is important to us.
            We are always by your side and have made it even easier for you to
            find the necessary vitamins.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            color: "white",
            marginTop: 3,
          }}
        >
          <LocationOnIcon />
          <Typography color="white" fontSize={"10px"} variant="body2">
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
);
