import { styled } from "@mui/system";

export const PercentageCircle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
  width: "40px",
  color: "white",
  backgroundColor: "black",
  borderRadius: "50px",
  border: "2px solid green",
  //   border: `${(avg) =>
  //     avg === 0 - 80 ? "2px solid green" : "2px solid yellow"}`,
  position: "absolute",
  fontSize: "10px",
  padding: "2px",
  top: "150px",
  left: "10px",
  fontWeight: "900",
});
