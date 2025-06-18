const modal = document.getElementById("modalFormulario");
const abrirModal = document.getElementById("abrirModal");
const cerrarModal = document.getElementById("cerrarModal");
const form = document.getElementById("formulario");

// Mostrar/Ocultar modal
abrirModal.onclick = () => {
  modal.style.display = "block";
};
cerrarModal.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// Validaciones
const fields = {
  nombre: {
    validator: (v) => v.length > 6 && v.includes(" "),
    errorMsg: "Debe tener más de 6 letras y al menos un espacio.",
  },
  email: {
    validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    errorMsg: "Formato de email inválido.",
  },
  password: {
    validator: (v) => /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(v),
    errorMsg: "Al menos 8 caracteres, letras y números.",
  },
  repeatPassword: {
    validator: (v) => v === document.getElementById("password").value,
    errorMsg: "Las contraseñas no coinciden.",
  },
  edad: {
    validator: (v) => Number.isInteger(+v) && +v >= 18,
    errorMsg: "Debe ser mayor o igual a 18 años.",
  },
  telefono: {
    validator: (v) => /^\d{7,}$/.test(v),
    errorMsg: "Solo números, mínimo 7 dígitos.",
  },
  direccion: {
    validator: (v) => /^[\w\d\s]{5,}$/.test(v) && v.includes(" "),
    errorMsg: "Debe tener al menos 5 caracteres y un espacio.",
  },
  ciudad: {
    validator: (v) => v.length >= 3,
    errorMsg: "Debe tener al menos 3 caracteres.",
  },
  codigoPostal: {
    validator: (v) => v.length >= 3,
    errorMsg: "Debe tener al menos 3 caracteres.",
  },
  dni: {
    validator: (v) => /^\d{7,8}$/.test(v),
    errorMsg: "Debe ser un número de 7 u 8 dígitos.",
  }
};

for (let field in fields) {
  const input = document.getElementById(field);
  const errorDiv = document.getElementById("error-" + field);

  input.addEventListener("blur", () => {
    const valid = fields[field].validator(input.value.trim());
    errorDiv.textContent = valid ? "" : fields[field].errorMsg;
  });

  input.addEventListener("focus", () => {
    errorDiv.textContent = "";
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let allValid = true;
  let data = "";

  for (let field in fields) {
    const input = document.getElementById(field);
    const errorDiv = document.getElementById("error-" + field);
    const value = input.value.trim();
    const valid = fields[field].validator(value);
    if (!valid) {
      errorDiv.textContent = fields[field].errorMsg;
      allValid = false;
    }
    data += `${field}: ${value}\n`;
  }

  if (allValid) {
    alert("Formulario enviado con éxito:\n\n" + data);
    modal.style.display = "none";
    form.reset();
  } else {
    alert("Hay errores en el formulario. Revisa los campos marcados.");
  }
});
