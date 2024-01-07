import React, { useState } from "react";
import {
  Typography,
  Paper,
  IconButton,
  TextField,
  Button,
  Grid,
  Avatar,
  Container,
} from "@mui/material";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import DescriptionIcon from "@mui/icons-material/Description";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import AvatrImg from "../../utils/Random.png";
import vectorimage from "../../utils/Vector.png";
import "./SupportPage.css";

const SupportPage = () => {
  const goBack = () => {
    // Add logic to navigate back to the previous page
    window.history.back();
  };
  const [expanded, setExpanded] = useState(false);
  const [gridColor, setGridColor] = useState("#ffffff");
  const [activeButtonClicked, setActiveButtonClicked] = useState(false);
  const [closedButtonClicked, setClosedButtonClicked] = useState(false);

  const handleActiveButtonClick = () => {
    setActiveButtonClicked(true);
    setClosedButtonClicked(false);
  };

  const handleClosedButtonClick = () => {
    setActiveButtonClicked(false);
    setClosedButtonClicked(true);
  };

  const handleExpandToggle = () => {
    setExpanded(!expanded);
  };
  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "20%",
  };

  const PageStyle = {
    width: "70%",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log("Form submitted!");
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={sidebarStyle}>
          <Sidebar />
        </div>
        <div style={PageStyle}>
          <Header />
          <div>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Lora",
                fontWeight: "600",
                fontSize: "36px",
                lineHeight: "44px",
              }}
            >
              Support Tickets
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#fff",
              flexDirection: "column",

              // border:'1px solid black'
            }}
          >
            {/* This is the whole page container  */}

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // border: "1px solid black",
                justifyContent: "space-evenly",
                height: "650px",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "472px",
                  marginTop: "-3%",
                  // border: "1px solid black",
                  justifyContent: "space-evenly",
                  marginLeft: "10px",
                  // border:'1px solid grey'
                }}
              >
                {/* Left Side of the Page where I am getting the 4 coloumns of the Page */}

                <Grid sx={{ border: "1px solid black" }}>
                  <Grid>
                    <Grid
                      sx={{
                        // marginTop: "-15%",
                        // justifyContent: "space-evenly",
                        // border:'1px solid black',
                        marginLeft: "-2%",
                      }}
                    >
                      <Button
                        sx={{
                          fontFamily: "Lora",
                          fontWeight: "600",
                          fontSize: "18px",
                          lineHeight: "28px",
                          textTransform: "none",
                          color: activeButtonClicked ? "black" : "#4F8BFF",
                        }}
                        onClick={handleActiveButtonClick}
                      >
                        Active
                      </Button>
                      <Button
                        sx={{
                          fontFamily: "Lora",
                          fontWeight: "600",
                          fontSize: "18px",
                          lineHeight: "28px",
                          textTransform: "none",
                          color: closedButtonClicked ? "black" : "#4F8BFF",
                        }}
                        onClick={handleClosedButtonClick}
                      >
                        Closed
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="titleticket">
                        <b>Title Ticket</b>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row",  justifyContent:"space-evenly", padding:'0px 8px 0px 8px'}} >
                        <div >
                          <DescriptionIcon
                            sx={{
                              width: "31px",
                              height: "31px",
                              backgroundColor: "#DFEDD1",
                            }}
                          />
                        </div>
                        <div >
                          <ExpandCircleDownIcon
                            sx={{  height: "31px", width:'31px' }}
                          />
                        </div>
                      </div>
                    </Grid>
                    <div className="categoryheading">Category</div>
                    <Grid className="categorysection">
                      <div>
                        Lörem ipsum hypopabande sagigong sapott kontraskapet.
                        <br />
                        Lörem ipsumhypopabande sagigong....See more{" "}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sx={{ border: "1px solid black" }}>
                  <Grid>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="titleticket">
                        <b>Title Ticket</b>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row",  justifyContent:"space-evenly", padding:'0px 8px 0px 8px'}} >
                        <div >
                          <DescriptionIcon
                            sx={{
                              width: "31px",
                              height: "31px",
                              backgroundColor: "#DFEDD1",
                            }}
                          />
                        </div>
                        <div >
                          <ExpandCircleDownIcon
                            sx={{  height: "31px", width:'31px' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="categoryheading">Category</div>
                    <Grid className="categorysection">
                      <div>
                        Lörem ipsum hypopabande sagigong sapott kontraskapet.
                        <br />
                        Lörem ipsumhypopabande sagigong....See more{" "}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sx={{ border: "1px solid black" }}>
                  <Grid>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="titleticket">
                        <b>Title Ticket</b>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row",  justifyContent:"space-evenly", padding:'0px 8px 0px 8px'}} >
                        <div >
                          <DescriptionIcon
                            sx={{
                              width: "31px",
                              height: "31px",
                              backgroundColor: "#DFEDD1",
                            }}
                          />
                        </div>
                        <div >
                          <ExpandCircleDownIcon
                            sx={{  height: "31px", width:'31px' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="categoryheading">Category</div>
                    <Grid className="categorysection">
                      <div>
                        Lörem ipsum hypopabande sagigong sapott kontraskapet.
                        <br />
                        Lörem ipsumhypopabande sagigong....See more{" "}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sx={{ border: "1px solid black" }}>
                  <Grid>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="titleticket">
                        <b>Title Ticket</b>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row",  justifyContent:"space-evenly", padding:'0px 8px 0px 8px'}} >
                        <div >
                          <DescriptionIcon
                            sx={{
                              width: "31px",
                              height: "31px",
                              backgroundColor: "#DFEDD1",
                            }}
                          />
                        </div>
                        <div >
                          <ExpandCircleDownIcon
                            sx={{  height: "31px", width:'31px' }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="categoryheading">Category</div>
                    <Grid className="categorysection">
                      <div>
                        Lörem ipsum hypopabande sagigong sapott kontraskapet.
                        <br />
                        Lörem ipsumhypopabande sagigong....See more{" "}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* This is for the Ticket Form */}
              <Grid>
                <Container
                  maxWidth="mds"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5%",
                    padding: "none",
                  }}
                >
                  <Grid
                    // elevation={1}
                    style={{
                      padding: 20,
                      marginTop: 10,
                      width: "450px",
                      height: "552px",
                    }}
                  >
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div className="Form-content">
                              <Grid
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  marginBottom: 5,
                                }}
                              >
                                <div>
                                  <Avatar src={AvatrImg} />
                                </div>
                                <div
                                  style={{ marginTop: "2%", marginLeft: "2%" }}
                                >
                                  <b>Raise a Ticket</b>
                                </div>
                              </Grid>
                              <Grid
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  // border: "1px solid black",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginRight: 20,
                                    // border: "1px solid black",
                                  }}
                                >
                                  <div>
                                    <label>Ticket Title</label>
                                  </div>
                                  <div>
                                    <TextField
                                      // label="Number"
                                      fullWidth
                                      margin="normal"
                                      variant="outlined"
                                    />
                                  </div>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginRight: 20,
                                  }}
                                >
                                  <div>
                                    <label>Category</label>
                                  </div>
                                  <div>
                                    <TextField
                                      // label="Other"
                                      fullWidth
                                      margin="normal"
                                      variant="outlined"
                                    />
                                  </div>
                                </div>
                              </Grid>
                              <Grid
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  marginBottom: 20,
                                  marginTop: 10,
                                }}
                              >
                                <div>
                                  <label>Description</label>
                                </div>
                                <div>
                                  <TextField
                                    // label="Type Here..."
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                  />
                                </div>
                              </Grid>
                              <div>
                                <label>Upload</label>
                                <TextField
                                  label="Upload"
                                  fullWidth
                                  margin="dense"
                                  multiline
                                  // style={{ border: "2px dotted black" }}
                                  rows={4}
                                  variant="outlined"
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  marginTop: 20,
                                }}
                              >
                                <Button
                                  type="submit"
                                  style={{
                                    color: "#fff",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Submit
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Container>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
