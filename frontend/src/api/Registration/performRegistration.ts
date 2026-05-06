interface RegistrationData {
  fullName: string;
  username: string;
  password: string;
}

export const performRegistration = async (
  registrationData: RegistrationData,
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/user/register`,
      {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      },
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    console.log("Success:", result);

    return result;
  } catch (error) {
    console.error("Failed to post:", error);
  }
};
