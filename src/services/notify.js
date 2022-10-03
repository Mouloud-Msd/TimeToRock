import { toast } from "react-toastify";

export const NotifyMe = (type, msg) => {
  console.log("toast");
  switch (type) {
    case "SUCCESS":
      toast.success(msg, { position: toast.POSITION.BOTTOM_RIGHT });
      break;
    case "ERROR":
      toast.error(msg, { position: toast.POSITION.BOTTOM_RIGHT });
      break;
    default:
      return {};
  }
};
