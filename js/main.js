document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('copyright-year');

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const modalProyecto = document.getElementById('modalProyecto');

  if (modalProyecto) {
    modalProyecto.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      document.getElementById('modalProyectoTitulo').textContent =
        trigger.dataset.proyecto || 'Detalle del proyecto';
      document.getElementById('modalProyectoDescripcion').textContent =
        trigger.dataset.descripcion || '';
      document.getElementById('modalProyectoTecnologias').textContent =
        trigger.dataset.tecnologias || '';
    });
  }

  const formulario = document.getElementById('formulario-contacto');
  const mensajeOk = document.getElementById('formulario-ok');

  if (formulario) {
    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (formulario.checkValidity()) {
        mensajeOk.classList.remove('d-none');
        formulario.classList.remove('was-validated');
      } else {
        mensajeOk.classList.add('d-none');
        formulario.classList.add('was-validated');
      }
    });
  }
});
