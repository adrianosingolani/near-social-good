import React, { useEffect, useState } from 'react';
import { utils } from "near-api-js";

import { getCauses, supportCause } from "../utils/methods"

import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

function Causes() {
  const [causes, setCauses] = useState([]);
  const account = window.walletConnection.account();

  useEffect(() => {
    getCauses()
      .then(res => {
        setCauses(res);
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const support = async (causeIndex) => {
    // console.log(causes[causeIndex]);

    const amount = document.getElementById(`amount-input-${causeIndex}`).value;
    // console.log(amount);

    supportCause({ causeIndex: causeIndex, amount: utils.format.parseNearAmount(amount + "") })
      .then(res => {
        getCauses()
      })
      .catch(err => {
        console.log(err)
      })
  };

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="lg">
        {
          causes.length > 0 ? (
            <Grid container spacing={4}>
              {
                causes.map((cause, i) => (
                  <Grid key={i} item xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="img"
                        image={cause.image}
                        alt=""
                        sx={{ maxHeight: '140px' }}
                      />
                      <CardContent sx={{ flexGrow: 1, paddingBottom: 1 }}>
                        <Typography variant="h6">
                          {cause.title}
                        </Typography>
                        <Typography variant="body2" paragraph>
                          {cause.description}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ flexDirection: 'column' }}>
                        <Typography variant="subtitle2">
                          Total received: <b>{utils.format.formatNearAmount(cause.amount)} NEAR</b>
                        </Typography>
                        <OutlinedInput
                          fullWidth
                          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                          id={`amount-input-${i}`}
                          defaultValue="1"
                          size="small"
                          endAdornment={<InputAdornment position="end">NEAR</InputAdornment>}
                          sx={{ marginBottom: 1 }}
                          type="number"
                          onChange={(e) => {
                            // console.log(e.target.value);
                            if (e.target.value < 1) e.target.value = 1;
                          }}
                        />
                        <Button
                          size="small"
                          fullWidth
                          variant='contained'
                          onClick={() => { support(i) }}
                          disabled={account.accountId === cause.beneficiary || !account.accountId ? true : false}
                        >
                          Support cause
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>
          ) : (
            <Container sx={{ py: 8 }} maxWidth="md">
              <Typography>No causes added yet</Typography>
            </Container>
          )
        }
      </Container>
    </>
  )
}

export default Causes;