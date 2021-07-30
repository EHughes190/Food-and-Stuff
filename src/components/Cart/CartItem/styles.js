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
    height: 175,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
  removeBtn: {
    minWidth: "140px",
    margin: "10px",
  },
  buttons: {
    margin: "20px",
  },
}));
