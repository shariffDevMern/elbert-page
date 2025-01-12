import { Box, Button,Typography } from "@mui/material";
import { v4 as uuidV4 } from "uuid";

const ingredientsData = [
  {
    id: uuidV4(),
    title: "Vitamin C",
    desc: "Vitamin C as ascorbic acid",
    bg: "/assets/h2-b1.jpg.png",
  },
  {
    id: uuidV4(),
    title: "Vitamin B3",
    desc: "Niacin for healthy gut and skin",
    bg: "/assets/bn2-2.jpg.png",
  },
  {
    id: uuidV4(),
    title: "Magnesium",
    desc: "Boost energy and support muscle function",
    bg: "/assets/bn2-3.jpg.png",
  },
  {
    id: uuidV4(),
    title: "Hyaluronic Acid",
    desc: "For smooth, supple and soft skin!",
    bg: "/assets/bn2-4.jpg.png",
  },
  {
    id: uuidV4(),
    title: "Lactobacillus",
    desc: "Invigorate your gut microbiome",
    bg: "/assets/bn2-5.jpg.png",
  },
];

export const Ingredients = () => (
  <Box
    gap={2}
    sx={{
      marginTop: 10,
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      flexWrap: "wrap",
    }}
  >
    <Box sx={{ width: { xs: "100%", md: 250 } }} flexGrow={2}>
      <Typography sx={{ color: "#003569", fontSize: "16px" }}>
        INGREDIENTS
      </Typography>
      <Typography
        sx={{ color: "#17414F", fontSize: "38px", fontWeight: "bold",lineHeight:1.2 }}
      >
        Better Ingredients
      </Typography>
      <Typography sx={{ color: "#727272", fontSize: "16px" }}>
        Only the best when you choose products offered on our platform -
        high-quality ingredients for high quality products!
      </Typography>
    </Box>
    {ingredientsData.map((data) => (
      <Box
        height={200}
        minWidth={200}
        flexGrow={1}
        key={data.id}
        padding={2}
        borderRadius={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${data.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography sx={{ color: "#2D3F59", fontSize: "18px" }}>
          {data.title}
        </Typography>
        <Typography sx={{ color: "#727272", fontSize: "14px", marginTop: 1 }}>
          {data.desc}
        </Typography>
        <Button
          sx={{
            textAlign: "left",
            marginTop: "auto",
            alignSelf: "flex-start",
            backgroundColor: "transparent",
            borderStyle: "solid",
            textDecoration: "underline",
            color: "#003569",
            fontSize: "12px",
            fontWeight: "bold",
            textUnderlineOffset: "5px",
          }}
        >
          See More
        </Button>
      </Box>
    ))}
    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <img
        style={{ width: "100%", height: "200px" }}
        alt="side"
        src="https://s3-alpha-sig.figma.com/img/481a/5bc5/e968343e02ead9caa7924ddcbe67f484?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mm4-RRjjwKoeAZ1p7LukqWlgvjiWGGqsqvnbQPEnwxwb2u5A~0TLS-D~3qEc2bTro5GY00MnKCda1zF1682fb9cExduns9SaMGCtRAIeSlH5xvcaY~aX4Skm-YXCvY3qk6Bw4rc7KG7pL6gd9h4WNqce0zTbXiSSrM8yxX3xgSh6~boSS8Z0nRURBxWNSL5nyHjoT2tDAx~cEZD40KrX~FoB2z7mPCiv4mZAfPBDXECr5f9jEi-s8LtciYPEE9E7iqvU~CqNo1tGc3P-~~yn~90On12Lcnac4ew3meOHlwNto0NSIWWXynJGEOq-fGMet9mS3qVV0DF09nMIoUnH2g__"
      />
    </Box>
  </Box>
);
