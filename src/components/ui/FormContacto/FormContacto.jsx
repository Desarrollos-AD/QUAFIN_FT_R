import React, { useRef, useState } from "react";
import "./FormContacto.scss";

const INITIAL_STATE = {
  nombre: "",
  email: "",
  telefono: "",
  servicio: "",
  mensaje: "",
};

const SERVICIOS = [
  { value: "credito_nomina", label: "Crédito de nómina" },
  { value: "credito_simple", label: "Crédito simple" },
  { value: "otro", label: "Otro / No estoy seguro" },
];

const validate = (fields) => {
  const errors = {};
  if (!fields.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
  if (!fields.email.trim()) {
    errors.email = "El correo es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Ingresa un correo válido.";
  }
  if (!fields.telefono.trim()) {
    errors.telefono = "El teléfono es obligatorio.";
  } else if (!/^\+?[\d\s\-()]{7,15}$/.test(fields.telefono)) {
    errors.telefono = "Ingresa un número de teléfono válido.";
  }
  if (!fields.servicio) errors.servicio = "Selecciona un servicio.";
  if (!fields.mensaje.trim()) {
    errors.mensaje = "Por favor escribe tu mensaje.";
  } else if (fields.mensaje.trim().length < 20) {
    errors.mensaje = "El mensaje debe tener al menos 20 caracteres.";
  }
  return errors;
};

const FormContacto = () => {
  const formRef = useRef(null);
  const [fields, setFields] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    const fieldKey =
      Object.keys({
        from_name: "nombre",
        from_email: "email",
        phone: "telefono",
        service: "servicio",
        message: "mensaje",
      }).find((k) => k === name) || name;
    const stateKey =
      {
        from_name: "nombre",
        from_email: "email",
        phone: "telefono",
        service: "servicio",
        message: "mensaje",
      }[name] || name;
    setFields((prev) => ({ ...prev, [stateKey]: value }));
    if (touched[stateKey]) {
      const newErrors = validate({ ...fields, [stateKey]: value });
      setErrors((prev) => ({ ...prev, [stateKey]: newErrors[stateKey] }));
    }
  };

  const handleBlur = (e) => {
    const stateKey =
      {
        from_name: "nombre",
        from_email: "email",
        phone: "telefono",
        service: "servicio",
        message: "mensaje",
      }[e.target.name] || e.target.name;
    setTouched((prev) => ({ ...prev, [stateKey]: true }));
    const newErrors = validate(fields);
    setErrors((prev) => ({ ...prev, [stateKey]: newErrors[stateKey] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = {
      nombre: true,
      email: true,
      telefono: true,
      servicio: true,
      mensaje: true,
    };
    setTouched(allTouched);
    const validationErrors = validate(fields);
    setErrors(validationErrors);
    if (Object.values(validationErrors).some(Boolean)) return;

    setStatus("sending");

    const response = await fetch("https://quafin.com/api/enviar.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.ok) {
      alert("Mensaje enviado");
    }
  };

  if (status === "success") {
    return (
      <div className="form-feedback form-feedback--success">
        <div className="form-feedback__icon">✓</div>
        <h3>¡Mensaje enviado con éxito!</h3>
        <p>Nos pondremos en contacto contigo pronto.</p>
        <button className="btn__primario" onClick={handleReset}>
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="form-feedback form-feedback--error">
        <div className="form-feedback__icon">✗</div>
        <h3>Ocurrió un error</h3>
        <p>
          No pudimos enviar tu mensaje. Intenta de nuevo o llámanos al{" "}
          <strong>+44 45 7200 8200</strong>.
        </p>
        <button className="btn__primario" onClick={handleReset}>
          Intentar de nuevo
        </button>
      </div>
    );
  }

  const handleReset = () => {
    setStatus("idle");
    setFields(INITIAL_STATE);
    setErrors({});
    setTouched({});
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="form" noValidate>
      <div
        className={`form__campo ${errors.nombre && touched.nombre ? "form__campo--error" : ""}`}
      >
        <label htmlFor="nombre">
          Nombre completo <span className="form__requerido">*</span>
        </label>
        <input
          id="nombre"
          name="from_name"
          className="form__campo--input"
          type="text"
          placeholder="Ingresa tu nombre con apellidos"
          value={fields.nombre}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="name"
        />
        {errors.nombre && touched.nombre && (
          <span className="form__error">{errors.nombre}</span>
        )}
      </div>

      <div
        className={`form__campo ${errors.email && touched.email ? "form__campo--error" : ""}`}
      >
        <label htmlFor="email">
          Correo electrónico <span className="form__requerido">*</span>
        </label>
        <input
          id="email"
          name="from_email"
          className="form__campo--input"
          type="email"
          placeholder="ejemplo@empresa.com"
          value={fields.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="email"
        />
        {errors.email && touched.email && (
          <span className="form__error">{errors.email}</span>
        )}
      </div>

      <div
        className={`form__campo ${errors.telefono && touched.telefono ? "form__campo--error" : ""}`}
      >
        <label htmlFor="telefono">
          Teléfono de contacto <span className="form__requerido">*</span>
        </label>
        <input
          id="telefono"
          name="phone"
          className="form__campo--input"
          type="tel"
          placeholder="229 000 0000"
          value={fields.telefono}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete="tel"
        />
        {errors.telefono && touched.telefono && (
          <span className="form__error">{errors.telefono}</span>
        )}
      </div>

      <div
        className={`form__campo ${errors.servicio && touched.servicio ? "form__campo--error" : ""}`}
      >
        <label htmlFor="servicio">
          ¿Qué servicio necesitas? <span className="form__requerido">*</span>
        </label>
        <select
          id="servicio"
          name="service"
          className="form__campo--input"
          value={fields.servicio}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value="" disabled>
            -- Seleccionar --
          </option>
          {SERVICIOS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        {errors.servicio && touched.servicio && (
          <span className="form__error">{errors.servicio}</span>
        )}
      </div>

      <div
        className={`form__campo ${errors.mensaje && touched.mensaje ? "form__campo--error" : ""}`}
      >
        <label htmlFor="mensaje">
          ¿Cómo podemos ayudarte? <span className="form__requerido">*</span>
        </label>
        <textarea
          id="mensaje"
          name="message"
          className="form__campo--input"
          placeholder="Describe tu necesidad o duda con el mayor detalle posible..."
          rows={5}
          value={fields.mensaje}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span className="form__contador">
          {fields.mensaje.length} caracteres
        </span>
        {errors.mensaje && touched.mensaje && (
          <span className="form__error">{errors.mensaje}</span>
        )}
      </div>

      <div className="form__btn">
        <button
          type="submit"
          className="btn__primario"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar Correo"}
        </button>
      </div>
    </form>
  );
};

export default FormContacto;
