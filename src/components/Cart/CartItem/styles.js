import { makeStyles } from "@material-ui/core/styles";

// export default makeStyles(() => ({
//   media: {
//     height: 260,
//   },
//   cardContent: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   cardActions: {
//     justifyContent: "space-between",
//   },
//   buttons: {
//     display: "flex",
//     alignItems: "center",
//   },
// }));

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(1),
    margin: "auto",
    maxWidth: "100%",
  },
  imageContainer: {
    width: 175,
    height: 175,
    display: "flex",
    alignItems: "center",
  },
  img: {
    margin: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  itemName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  remove: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  removeBtn: {
    minWidth: "140px",
  },
  buttons: {
    margin: "20px",
  },
}));
