"use client";
import { useNotification } from "./useNotification";

export const usePostData = () => {
  const { NotificationHandler } = useNotification();

  const postData = async (url, bodyData) => {
    const user = "s_kumar4@me.iitr";
    if (!user) {
      console.log("Error!");
      return;
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          AuthToken: user,
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (err) {
      console.log(err);
      NotificationHandler("Error", "Check your connection!", "Error");
      const data = {
        error: "Server Error!",
      };
      return data;
    }
  };

  return { postData };
};
