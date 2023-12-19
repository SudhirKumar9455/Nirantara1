import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";

const VehicleForm = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear - index);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ width: "70%", padding:'10px'}}>
        <Header />
        <Container component="main" maxWidth="100%">
          <Paper elevation={3} style={{ padding: "20px", marginTop: "10px" }}>
            <Typography component="h1" variant="h5">
              Vehicle Information Form
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <label htmlFor="col1">Vehicle ID</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="col1"
                    name="col1"
                    placeholder="1122"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col2">Vehicle Number</label>
                  <TextField
                    variant="outlined"
                    placeholder="2244"
                    fullWidth
                    id="col2"
                    name="col2"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <label htmlFor="col2">Vehicle Number</label>
                    <Select label="Type" fullWidth id="col3" name="col3">
                      <MenuItem value="HCV">HCV</MenuItem>
                      <MenuItem value="LCV">LCV</MenuItem>
                      <MenuItem value="MCV">MCV</MenuItem>
                      <MenuItem value="SCV">SCV</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col4">Make</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="102"
                    id="col4"
                    name="col4"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col5">Model</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="2233"
                    id="col5"
                    name="col5"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                  <label htmlFor="col2">Year</label>
                    <Select label="Year" fullWidth id="col6" name="col6">
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col7">Last Service</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="col7"
                    name="col7"
                    placeholder="DD-MM-YY"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col8">Fuel Type</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="col8"
                    name="col8"
                    placeholder="2244"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col9">Pue Date</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="col9"
                    name="col9"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col9">Fuel Frequency km/lit</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="1210"
                    id="col9"
                    name="col9"
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col9">Load Capacity(ton)</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="1021"
                    id="col9"
                    name="col9"
                  />
                </Grid>
              </Grid>
              <div style={{display:'flex', justifyContent:'center'}}>
              <Button
                type="submit"
                width="50%"
                style={{backgroundColor:'black'}}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <b>Submit</b>
              </Button>
              </div>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default VehicleForm;
