import { Box, Typography } from "@mui/material";
import { BlogImageLayout } from "./BlogImageLayout/BlogImageLayout";


export const Blog = () => {
  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography
        sx={{ textAlign: "center", color: "#003569", fontSize: "16px" }}
      >
        OUR BLOG
      </Typography>
      <Typography
        sx={{ textAlign: "center", color: "#17414F", fontSize: "32px", marginBottom:4 }}
      >
        Latest news
      </Typography>
      <BlogImageLayout />
    </Box>
  );
};
