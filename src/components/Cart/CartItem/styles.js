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
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "100%",
  },
  imageBtn: {
    width: 175,
    height: 175,
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
  buttons: {
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
    minWidth: "150px",
  },
}));
