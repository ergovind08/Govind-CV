"use client";
import React, { useState, useEffect } from "react";
import { Divider } from "@nextui-org/react";
import ContainerAOS from "./../../commons/components/elements/ContainerAOS";
import Header from "./Header";
import Education from "./Education";
import Certificates from "./Certificates";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
const data = [
  {
    src: "https://www.youtube.com/embed/4NYYpUKZjaw",
    title:
      "Aesthete (A software that adjusts the brightness and magnification of the screen automatically)",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src: "https://www.youtube.com/embed/c4iQFFgC8GM",
    title:
      "Aesthete (A software that adjusts the brightness and magnification of the screen automatically)",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
];

function Media({ loading = true }) {
  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(2)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 410, marginRight: 7, my: 5 }}>
          {item ? (
            <iframe
              style={{ width: 310, height: 218 }}
              alt={item.title}
              src={item.src}
              allowTransparency
            />
          ) : (
            <Skeleton variant="rectangular" width={310} height={218} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
              >
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ContainerAOS>
      <div className="h-full">
        <Header />
        <Divider orientation="horizontal" className="my-4" />
        <Certificates />
        <Divider orientation="horizontal" className="mt-6 mb-4" />
        <Education />
        <Divider orientation="horizontal" className="mt-9 mb-4" />
        {/* <Box sx={{ overflow: "hidden" }}>
          <Media loading={loading} />
        </Box> */}
      </div>
    </ContainerAOS>
  );
}
