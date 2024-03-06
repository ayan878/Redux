import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

function Notification({ type, message }) {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  function handleClose() {
    dispatch(uiActions.showNotification({ open: false }));
  }

  return (
    <>
      {notification.open && (
        <Alert severity={type} onClose={handleClose}>
          {message}
        </Alert>
      )}
    </>
  );
}

export default Notification;
