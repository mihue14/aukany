import Swal from "sweetalert2";

export const successAlert = () => {
  Swal.fire({
    icon: "success",
    title: "¡Su turno fue reservado!",
    showConfirmButton: true,
    timer: 5000,
  });
};

export const errorAlert = () => {
  Swal.fire({
    icon: "error",
    title: "ESTE HORARIO YA PASÓ",
    text: "Seleccione otro horario por favor.",
    showConfirmButton: true,
    timer: 5000,
  });
};
