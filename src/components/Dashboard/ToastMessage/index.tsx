import toast from "react-hot-toast";

export default function ToastMessage(message: string, type: string) {
  if (type === "success") {
    return toast.success(message, {
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });
  } else {
    return toast.error(message, {
      style: {
        backgroundColor: "#f10000",
        color: "#fff",
      },
    });
  }
}
