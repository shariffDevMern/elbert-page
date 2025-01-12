"use client";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { v4 as uuidV4 } from "uuid";
import { Ingredients } from "./Ingredients";
import { Blog } from "./Blog";
import { Footer } from "./Footer";

const cardData = [
  {
    id: uuidV4(),
    icon: "/assets/a.item-icon-e (1).png",
    title: "Clinically Studied",
    desc: "All products that we offer have undergone lab and safety tests",
  },
  {
    id: uuidV4(),
    icon: "/assets/a.item-icon-e (2).png",
    title: "Vegetarian Friendly",
    desc: "We have a wide selection of vegetarian products to meet your needs",
  },
  {
    id: uuidV4(),
    icon: "/assets/a.item-icon-e (3).png",
    title: "Made in India",
    desc: "Shop local and explore health products made right here in India",
  },
  {
    id: uuidV4(),
    icon: "/assets/a.item-icon-e.png",
    title: "Free shipping",
    desc: "We deliver to your door with no shipping costs on your orders",
  },
  {
    id: uuidV4(),
    icon: "/assets/a.item-icon-e (5).png",
    title: "No Risk",
    desc: "We ensure that all products are safe and within their use-by date",
  },
  {
    id: uuidV4(),
    icon: "/assets/a.item-icon-e(6).png",
    title: "GMO free",
    desc: "Natural, no modified products and derivatives for those who need it",
  },
];

export const HeroSection = () => {
  const medStart = useMediaQuery("(min-width:600px)");
  const medEnd = useMediaQuery("(max-width:900px)");
  return (
    <>
      <img
        style={{ marginTop: 10, marginBottom: 10, padding: 10, width: 150 }}
        alt="elbert-logo"
        src="https://s3-alpha-sig.figma.com/img/8be1/c27b/24873ffb8a3345a8dedea9b0d8f9e7ba?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GG2iTwwFWXLLRha5qIH68jC4goFDiylKxfHytuR1FcMrJO6saFw2KdIFD7vQE1cq~1TxDxx5~Ipaa8q~9axEcvuOa2PDz9w~fhBQRjEp~edpSPrrvo3NMAqI3OKglbfC17EwtqXbDhesfazJ9qwr5M4zMoegPbqqf7ecwHYtUV-RfwcN3EOmAFB0Dez8Tc62pSTbR-fKcMf254XsHZzr0hJXspXpS82q-e8w~x7aGtEBGQKyvEgAc~qn--yVhhioHOaXvw1G6nnbxgrxQAV-2T9R5Mi1WMc1oosoKOGyMG3mMc-rFJas1JctNJX-oIlbtN3wkAOv8PEV1LrFXvMzBw__"
      />
      <Box
        sx={{
          backgroundColor: "#E2F5FB",
          paddingTop: 5,
        }}
      >
        <Typography
          variant="h2"
          component={"h1"}
          sx={{
            textAlign: "center",
            color: "#003569",
            fontWeight: "bold",
            fontSize: { xs: 42, sm: 68 },
          }}
        >
          Essential Vitamins
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 10 },
            alignItems: "center",
            justifyContent: "center",
            marginTop: 3,
          }}
        >
          <Box
            sx={{
              order: { xs: "1", md: "0" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="body2" sx={{ color: "#727272" }}>
              Online Medical Supplies
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#17414F", width: "140px", marginY: 1 }}
            >
              Get Your Vitamins & Minerals
            </Typography>
            <Button
              sx={{
                backgroundColor: "#17414F",
                color: "white",
                borderRadius: "50px",
                paddingX: 3,
              }}
            >
              Explore
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "#FFE9B5",
              height: "250px",
              width: "250px",
              borderTopLeftRadius: "80px",
              borderBottomRightRadius: "80px",
              order: { xs: "0", md: "1" },
              position: "relative", // Make Box the reference point for absolute positioning
            }}
          >
            <img
              style={{
                position: "absolute", // Allow positioning outside the Box
                top: "-55px", // Move image up by 50px (half of its height)
                left: "0",
                width: "250px",
              }}
              alt="capsule-box"
              src="https://s3-alpha-sig.figma.com/img/6dd8/7f0a/f73aa0189cad884f47381dd92205b7c0?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKBdYNzz-0WLMCzHVMjmF5wp1EE1NxCDwywcgev4cWWVYR35QiFVoQsnlw2Wn6XVn1N~0xdMIDAJb6pvSn7L-UT4P33Iz489kgRRp6PcdH7O9JeBytqwDfbwpyfsI2fmF2ORbEuRmdVCJ7SZIFqRSnGfGa42tRILeel5KF6FFK~OEiR5IAgAbkvOVqZHyeQLy-4dx~O2zKIABgB1u51rEIvQYIdr5wRX16ToVoVS8fGP7k1FqGVGIquR650wXv6AiY0mDKfdnpeopo6G-9kgGilMdcZFr8MZFClfzMEK2lPrJdGu~g9gVMs8u7GE1o7H1P1mxd--l66ksdCMJAxhKg__"
            />
          </Box>

          <Box
            sx={{
              order: { xs: "0", md: "1" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 1,
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Avatar
                sx={{ width: 60, height: 60 }}
                src="https://s3-alpha-sig.figma.com/img/1d76/fc2a/470ec862c44115964979f90b5cb3a94e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Th4rZL6UW0PSe1myw5I2XSQNdiIva-4mr35orARFhmQ-CJcWSNgwc35tmpA5l40mlubFgehTSLb~vcPGCpceWLWUqZ99UTwIQoZ2o~29VM0cdLGZ3BVH38EXc19kTtd4KQ34s-NQaDl~nUTu72KyZQzDIqGR8uhlkTVMKxJPMMjd3DZeX3hqpkVwlI1-E5aWG1vs9J~vH2bMRQimw36fnShXO3yl5m0cB197QZYOHcMWPrfU4LhsaXm4fNf055dyUO~X~GLlZxSoWOaiMxwBMWNsVDcl7wMVccf~MueLxbVJDfgX-f5BuLmzcUz5JpjaaQlYxaB~M~YQaDINRlB54g__"
                alt="vitamins"
              />
              <Box sx={{ width: "140px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#17414F",
                    fontSize: "16px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Vitamins
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#727272",
                    fontSize: "12px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Increased Vitamins and minerals in your diet
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 1,
                alignItems: "center",
                marginY: 2,
              }}
            >
              <Avatar
                sx={{ width: 60, height: 60 }}
                src="https://s3-alpha-sig.figma.com/img/c0ae/6abf/9917c0af12dcc49a9c0130d3e68e04b1?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hh0dnaq~vggZXRyPdNVZ5gDBwrbUn7ndiPhy3yqYh7-QNdqDNKfrzMdTRiFpUkJ6cWNusghP4RlAZx43hQQp2kwvSijVVqB5z4hEash7Sqg~IOFqfdSAYfO1TfLWlqmITqU9Cu8XDFQMgipyKdAJrFrRacLR6AYsUvrzVgec6FfYO5bCMjn6vzabXvmPSX-QEjizIARdhbdx8VeY16aOjTBlRUnZkbn6h-lNI3lzfRkc6s7hpLDteDeNZyhvr70CebFwVSi6cPlsSdSkh2pY5Jo47CyvFpUMbEFAVcOCMiWVfFW3jQEDhzc-nYeI095og8BxhHzRdJZhlFnofcGoDA__"
                alt="weight loss"
              />
              <Box sx={{ width: "140px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#17414F",
                    fontSize: "16px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Weight Loss
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#727272",
                    fontSize: "12px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Weight Loss Find scientifically proven solutions
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 1,
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Avatar
                sx={{ width: 60, height: 60 }}
                src="https://s3-alpha-sig.figma.com/img/ad6c/6ad1/2116d12f8d75befd05e66d41425cb402?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FqQ58ybVFSOmJfLJwlG42ci~pW1aOYBM4QzwveypXInYuWwR5YgtwZ-nKzJAhac9n-bqpfDZMa4RS~qn53O8URzpW-u5b5xR1fHnamtSyuf6OWy~doyBkbYyreNwjvFnfhHRwXE7U6IykzfJkPOWy5oB-cTfZN~hTT~ZIfCJMbZTYBGVr~q7CztlviaJRD4Dicr~6N4ROGgIfrce7mND9uNOOv8UMClpWrRba8CnSQrwRmguJsMqGiYoAW2jx~g8XEdG2ESiDaq~PCe3ci9FGKoZqlppNCWQh1ihJoEArxw6EpuuzNMLidIl-QkXb7h02O1vyad~aNnUfVhdgwuNLQ__"
                alt="foods"
              />
              <Box sx={{ width: "140px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#17414F",
                    fontSize: "16px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Functional Foods
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#727272",
                    fontSize: "12px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Functional Foods From protein powers to baby formula
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#E2F5FB", height: "200px" }}>
        <Container
          sx={{
            width: "90%",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, paddingTop: 7 }}>
            <Box
              sx={{
                height: "20px",
                width: "20px",
                backgroundColor: "lightgray",
                borderRadius: "100%",
                marginBottom: 2,
              }}
            ></Box>
            <Box
              sx={{
                height: "20px",
                width: "20px",
                backgroundColor: "lightgray",
                borderRadius: "100%",
              }}
            ></Box>
          </Box>
          <Box //parentcontainer
            sx={{
              backgroundColor: "#17414F",
              borderRadius: "50px",
              height: {
                xs: "1250px",
                sm: medStart && medEnd ? "620px" : "1000px",
                md: "380px",
              },
              position: "relative",
              width: "100%",
            }}
          >
            <Grid //child container
              container
              sx={{
                position: "absolute",
                top: "-60px",
                gap: { xs: 2, sm: 0 },
              }}
            >
              {cardData.map((data) => (
                <Grid
                  key={data.id}
                  xs={12}
                  sm={6}
                  md={4}
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    paddingY: 3,
                  }}
                >
                  <img
                    style={{ width: "75px" }}
                    alt={data.title}
                    src={data.icon}
                  />
                  <Typography
                    marginY={1}
                    variant="body2"
                    color="white"
                    sx={{ fontSize: 16 }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "12px", width: "225px" }}
                    color="#D9D9D9"
                  >
                    {data.desc}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Ingredients />
        </Container>
        <Blog />
        <Footer />
      </Box>
    </>
  );
};
