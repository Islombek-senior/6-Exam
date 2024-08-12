import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Img_3 from "../Group.png";
import Img_4 from "../Group (1).png";

export const Cardss = [
  {
    id: "1",
    name: "Ali",
    cardNumber: "1234 5662 4546 2344",
    dates: "10 / 3",
    city: "N/Y city",
  },
  {
    id: "2",
    name: "Ali",
    cardNumber: "1234 5662 4546 2344",
    dates: "10 / 3",
    city: "N/Y city",
  },

  {
    id: "3",
    name: "Ali",
    cardNumber: "1234 5662 4546 2344",
    dates: "10 / 3",
    city: "N/Y city",
  },

  {
    id: "4",
    name: "Ali",
    cardNumber: "1234 5662 4546 2344",
    dates: "10 / 3",
    city: "N/Y city",
  },

  {
    id: "5",
    name: "Ali",
    cardNumber: "1234 5662 4546 2344",
    dates: "10 / 3",
    city: "N/Y city",
  },
  {
    id: "6",
    name: "Ali",
    cardNumber: "1234 5662 4546 2344",
    dates: "10 / 3",
    city: "N/Y city",
  },

  {
    id: "7",
    name: "Ali",
    cardNumber: "1234 5662 4546 2344",
    dates: "10 / 3",
    city: "N/Y city",
  },
];
function MyCard() {
  const [cardCredit, setCredits] = useState(Cardss);

  return (
    <Box>
      <Grid container spacing={2}>
        {cardCredit.map((c) => (
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: "#c81ce7",
                color: "white",
                p: "23px",
                borderRadius: "15px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src={Img_3} alt="" />
                <Box>
                  {" "}
                  <img src={Img_4} alt="" />
                </Box>
              </Box>
              <Box sx={{ fontSize: "30px", mt: "20px" }}>{c.cardNumber}</Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Box sx={{ fontSize: "14px", fontWeight: "light" }}>
                    <p>Card holder Name</p>
                  </Box>
                  <Box sx={{ fontSize: "20px" }}>
                    {" "}
                    <p>{c.name}</p>
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <p>Expiry date</p>
                    <Box sx={{ fontSize: "20px" }}>
                      {" "}
                      <p>{c.dates}</p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyCard;
