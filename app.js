Vue.component('modal', {
  template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <header>
            <p>{{ title }}</p>
            <hr>
          </header>
          <section>
            <i class="fa fa-5 fa-check green-circle white" aria-hidden="true"></i>
          </section>
          <section class="pt-0">
            <p>Felicidades por completar</p>
            <strong><slot></slot></strong>
            <p>No olvides descargar tu certificado digital.  </p>
          </section>
          <footer>
            <button v-on:click="closeModal" class="btn-blue btn-100">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`,
  props: ['title'],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  },
})

new Vue({
  el: '#app',
  data: {
    cursos: [
      'Curso de Desarrollo Web',
      'Master en arquitectura de software',
      'Git y Github for humans'
    ],
    showModal: false,
  },
  computed: {
    randomCourse: function () {
      return this.cursos[Math.floor(Math.random() * this.cursos.length)]
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
})