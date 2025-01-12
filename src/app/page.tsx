import { Container } from "@mui/material";
import { HeroSection } from "./ components/HeroSection";

export default function Home() {
  return (
    <Container sx={{ backgroundColor: "white" }}>
      <HeroSection />
    </Container>
  );
}
