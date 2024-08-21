import ContainerAOS from "../commons/components/elements/ContainerAOS";
import Index from "./components/index";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export const metadata = {
  title: "About Me",
  description: "A short story about Reza",
};

export default function About() {
  return (
    <ContainerAOS>
      <Index />
    </ContainerAOS>
  );
}
