import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import img_1 from "../../src/Frame 1000005497.png";
import img_2 from "../../src/Icon.png";
import img_3 from "../../src/Frame 1000008223.png";
import { Button, Input } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import MyCard, { Cardss } from "./ myCard";
import Img_3 from "../Group.png";
import Img_4 from "../Group (1).png";
import { log } from "console";

interface CArds {
  id: string;
  name: string;
  cardNumber: string;
  dates: string;
  city: string;
}

function Credit_cards() {
  const [pagiNations, setPaginations] = useState<boolean>(true);

  const clickCard = (pg: boolean) => {
    setPaginations(pg);
  };

  const [cardCredit, setCredits] = useState(Cardss);

  const [addCard, setAddCard] = useState({
    name: "",
    cardNumber: "",
    dates: "",
    city: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddCard((prev) => ({ ...prev, [name]: value }));
  };
  const addCards = () => {
    setCredits((p) => [...p, { ...addCard, id: uuidv4() }]);
    setAddCard({ name: "", cardNumber: "", dates: "", city: "" });
  };

  const Cancel = () => {
    setAddCard({ name: "", cardNumber: "", dates: "", city: "" });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ mb: "20px" }}>
            <img src={img_3} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            sx={{
              bgcolor: "#eed5f8",
              borderRadius: "10px",
              p: " 20px",
              border: "1px solid #69077a",
              cursor: "pointer",
              fontSize: "22px",
            }}
            onClick={() => clickCard(true)}
          >
            <img src={img_2} alt="" />
            <p>New Credit Card</p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            sx={{
              borderRadius: "10px",
              border: "1px solid #bcbcbc",
              p: " 20px",
              fontSize: "22px",
              cursor: "pointer",
            }}
            onClick={() => clickCard(false)}
          >
            <img src={img_2} alt="" />
            <p>My Cards</p>
          </Box>
        </Grid>
      </Grid>
      {pagiNations ? (
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ m: "15px" }}>
              <Box>
                <Box sx={{ fontSize: "35px" }}>
                  <p>Add New Card</p>
                </Box>
                <Box sx={{ fontSize: "22px", color: "grey" }}>
                  <p>
                    Do more with unlimited blocks, files, automations &
                    integrations.
                  </p>
                </Box>
              </Box>
              <Box sx={{ mt: "60px" }}>
                <Box sx={{ fontSize: "22px", color: "grey" }}>
                  <p>Who is</p>
                </Box>
                <Input
                  name="name"
                  sx={{ width: "100%", p: "5px", mb: "35px" }}
                  placeholder="Name"
                  value={addCard.name}
                  onChange={handleInput}
                />
              </Box>
              <Box>
                <Box sx={{ fontSize: "25px", color: "grey" }}>
                  <p>Payment Details</p>
                </Box>
                <Input
                  name="cardNumber"
                  sx={{ width: "100%", p: "5px", mb: "35px" }}
                  placeholder="Card Number"
                  value={addCard.cardNumber}
                  onChange={handleInput}
                />
                <Input
                  name="dates"
                  sx={{ width: "100%", p: "5px", mb: "35px" }}
                  placeholder="Date"
                  value={addCard.dates}
                  onChange={handleInput}
                />
                <Input
                  name="city"
                  sx={{ width: "100%", p: "5px", mb: "35px" }}
                  placeholder="City"
                  value={addCard.city}
                  onChange={handleInput}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mt: "20px" }}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: "50px",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ width: "100%", p: 2, color: "black", bgcolor: "white" }}
                  onClick={Cancel}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: "50px",
                }}
              >
                <Button
                  sx={{
                    width: "100%",
                    p: 2,
                    bgcolor: "#ab3beb",
                    color: "white",
                  }}
                  onClick={addCards}
                >
                  Add Card
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ mt: "40px" }}>
          <Grid container spacing={2}>
            {cardCredit.map((c) => (
              <Grid item xs={12} sm={6} md={4} key={c.id}>
                <Box
                  sx={{
                    bgcolor: "#c81ce7",
                    color: "white",
                    p: "23px",
                    borderRadius: "15px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <img src={Img_3} alt="" />
                    <Box>
                      {" "}
                      <img src={Img_4} alt="" />
                    </Box>
                  </Box>
                  <Box sx={{ fontSize: "30px", mt: "20px" }}>
                    {c.cardNumber}
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
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
      )}
    </Box>
  );
}

export default Credit_cards;
