"use client";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import CachedIcon from "@mui/icons-material/Cached";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import BasicCard from "./basicCard";

export default function Header() {
  return (
    <Grid container sx={{ px: 2, mb: 2 }}>
      {/* Header */}
      <Grid item xs={12} className="txt-light">
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item md={1}>
            <Image src={"logo.png"} width={100} height={100} alt="logo" />
          </Grid>
          <Grid item md={1}>
            <Image
              src={"vidya_bharti.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </Grid>

          {/* title & subtitle */}
          <Grid
            item
            xs={12}
            md={10}
            className="txt-reponsive-align"
            sx={{ mt: 2 }}
          >
            <Typography variant="h6">
              श्री रामलीला महोत्सव समिति एवं विद्या भारती देवगिरी प्रांत शिक्षा
              संस्थान
            </Typography>
            <Typography className="txt-warning" variant="subtitle1">
              स्वर्णिम भारत प्रश्नोत्तरी स्पर्धा{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* cards for buttons */}
      <Grid item xs={12} md={12} sx={{ mt: 4 }}>
        <Grid container rowGap={2} alignItems={"center"}>
          <Grid item md={4} xs={12} sx={{ px: 1 }}>
            <BasicCard title="Conductor">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<OfflineBoltIcon />}
                fullWidth
                href="https://forms.gle/BEca3fG4ZETiN3dr8"
                sx={{ mb: 2 }}
              >
                पाठशाला से संपर्क
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<OfflineBoltIcon />}
                fullWidth
                href="https://docs.google.com/forms/d/e/1FAIpQLSePI465lXyDNJQuuN4sSQPfiV55Er_APjG9fXU5BAt55fcepg/viewform"
                sx={{ mb: 2 }}
              >
                पेपर भेजीये
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<OfflineBoltIcon />}
                fullWidth
                href="https://forms.gle/NeVBzgFMUXUV23Rc6"
                sx={{ mb: 2 }}
              >
                परीक्षा संपन्न उत्तर पत्रिका जमा
              </Button>
            </BasicCard>
          </Grid>
          <Grid item md={4} xs={12} sx={{ px: 1 }}>
            <BasicCard title="Distributor">
              <Button
                variant="outlined"
                color="info"
                startIcon={<AddCircleIcon />}
                fullWidth
                href="https://forms.gle/AKUeZuGVaabSbaic6"
                sx={{ mb: 2 }}
              >
                प्रश्नपत्रिका वितरित कि गयी
              </Button>
            </BasicCard>
          </Grid>
          <Grid item md={4} xs={12} sx={{ px: 1 }}>
            <BasicCard title="Collector">
              <Button
                variant="outlined"
                color="error"
                fullWidth
                href="https://docs.google.com/forms/d/e/1FAIpQLSdVQk6NxPOxuvwThR5L_rNGBdn8d75BKICDrE5hxdG_Kid0Xg/viewform"
                startIcon={<InfoIcon />}
                sx={{ mb: 2 }}
              >
                उत्तर पत्रिका जमा
              </Button>
            </BasicCard>
          </Grid>
          <Grid item md={4} xs={12} sx={{ px: 1 }}>
            <BasicCard title="Data controller">
              <Button
                variant="outlined"
                color="success"
                fullWidth
                href="https://forms.gle/x53z6uRU4LF1CkZo8"
                startIcon={<CheckCircleIcon />}
                sx={{ mb: 2 }}
              >
                पंजीकरण पूर्ण
              </Button>
            </BasicCard>
          </Grid>
          <Grid item md={4} xs={12} sx={{ px: 1 }}>
            <BasicCard title="Answer Checker">
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                href="https://forms.gle/hWYDf2876XMBuPbeA"
                startIcon={<CachedIcon />}
                sx={{ mb: 2 }}
              >
                उत्तर पत्रिका जांच कि गयी
              </Button>
            </BasicCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
