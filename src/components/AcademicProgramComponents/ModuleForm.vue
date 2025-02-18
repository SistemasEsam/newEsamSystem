<template>
    <div v-if="visible" class="dialog-overlay">
      <div class="dialog-content">
        <H1>Nuevo módulo</H1>
        <div class="dialog-body">
        <v-card>
            <v-card-title class="subtitle-program-form">Módulos</v-card-title>
            <v-card-subtitle
            >Nota: Llenar todos los datos del formulario.</v-card-subtitle>
            <br>
            <v-form>
              <v-label>Nombre del módulo</v-label>
                <v-text-field
                label="Nombre del Módulo">
                </v-text-field>
                <v-text-field
                label="Docente">
                </v-text-field>
                <v-text-field
                label="Facturación">
                </v-text-field>
                <v-text-field
                label="Monto a pagar">
                </v-text-field>
                <v-text-field
                label="Cronograma de clases">
                </v-text-field>
                <v-text-field
                label="Contenido mínimo">
                </v-text-field>
            </v-form>
        </v-card>
        <button @click="cerrarDialogo">Cerrar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DialogComponent',
    props: {
      visible: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      cerrarDialogo() {
        this.$emit('cerrar');
      }
    }
  };
  </script>
  
  <style scoped>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog-content {
    background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 40rem;
  width: 100%;
  max-height: 80vh; /* Altura máxima del diálogo */
  display: flex;
  flex-direction: column;
  }
  .dialog-body {
  overflow-y: auto; /* Habilita el scroll vertical */
  flex-grow: 1; /* Ocupa el espacio restante */
  margin-bottom: 20px; /* Espacio para el botón */
}
  </style>