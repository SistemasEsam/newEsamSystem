<script>

import { createRouter, createWebHistory } from 'vue-router'
import PaymentCardsView from '@/views/PaymentCardsView.vue'

import { database } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const routes = [
{
  path:'/payment-cards',
  name: 'payment-cards',
  component: PaymentCardsView
},
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default {
  data() {
    return {
      paymentCards: [],

      //Componentes de la tabla 

      dialog: false,
      dialogDelete: false,
      headers: [
        {
          title: 'Codigo carta',
          align: 'start',
          sortable: false,
          key: 'idPaymentCards',
        },
        { title: 'Nombre del docente', key: 'nameInstructors' },
        { title: 'Programa', key: 'programName' },
        { title: 'Banco', key: 'bank' },
        { title: 'Remuneración', key: 'teacherPay' },
        { title: 'Acciones', key: 'actions', sortable: false },
      ],
      //------------------------------------------------
    };
  },
  async mounted() {
    const paymentCardsCollectionRef = collection(database, "paymentCards");
    const paymentCardsSnapshot = await getDocs(paymentCardsCollectionRef);
    this.paymentCards = paymentCardsSnapshot.docs.map((doc) => doc.data());
  },

  computed: {

      //Componentes de la tabla 

      formTitle () {
        return this.editedIndex === -1 ? 'Nueva carta' : 'Editar carta'
      },
      //------------------------------------------------

  },


        //Componentes de la tabla 

  watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
    created () {
      this.initialize()
    },

      //------------------------------------------------


  methods: {
        //Componentes de la tabla 

        initialize () {
       
      },
      showDetails(item) {
        this.$router.push({ name: 'payment-cards-pdf', params: { id: item.idPaymentCards } });

    console.log("detalle codigo,",item.idPaymentCards)
  },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    
      //------------------------------------------------

  },
  router
};
</script>

 
    <template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Lista de cartas</h2>

  <v-data-table
    :headers="headers"
    :items="paymentCards"
    :sort-by="[{ key: 'idPaymentCards', order: 'asc' }]"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>
          Lista de cartas
        </v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      
        <router-link to="/payment-cards">
          <v-btn color="primary" dark class="mb-2">
            Nueva Carta
          </v-btn>
        </router-link>
 
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      
      <v-icon
        size="small"
        @click="showDetails(item)"
      >
        mdi-eye
      </v-icon>
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
      
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
      Reiniciar
      </v-btn>
    </template>
  </v-data-table>
</template>