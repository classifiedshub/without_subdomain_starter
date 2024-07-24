import toast from "react-hot-toast";

export async function RequestAPI(
  setLoading,
  method,
  endpoint,
  data,
  successToast,
  errorToast,
  handleNavigate
) {
  try {
    setLoading(true);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_APP_URL;
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast.success(successToast, {
        position: "top-center",
        style: {
          background: "white",
          color: "black",
        },
      });
      handleNavigate();
    } else {
      toast.error(errorToast, {
        position: "top-center",
        style: {
          background: "white",
          color: "black",
        },
      });
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
    console.error(error);
    toast.error("Something went wrong", {
      position: "top-center",
      style: {
        background: "red",
        color: "white",
      },
    });
  }
}
