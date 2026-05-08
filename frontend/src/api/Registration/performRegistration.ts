interface RegistrationData {
  fullName: string;
  username: string;
  password: string;
}

export const performRegistration = async (
  registrationData: RegistrationData,
) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  try {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to post:", error);
  }
};
