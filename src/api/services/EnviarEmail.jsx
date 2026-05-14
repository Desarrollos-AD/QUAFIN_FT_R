import React from "react";

const EnviarEmail = async (formData) => {
  try {
    const response = await fetch("/api/EnviarEmail.php.php", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);

    alert("Error al enviar formulario");
  }
};

export default EnviarEmail;
