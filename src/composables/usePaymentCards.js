
import {computed, ref } from 'vue'
import { database } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

import { useFirestore, useCollection } from "vuefire";

export default function usePaymentCards(){



    const db = useFirestore()
    const paymentCardsCollection = useCollection(collection(db, 'instructors'))

  // Áreas disponibles
  const areas = [
    "Ingenieria",
    "Financiera",
    "Administrativa",
    "Legal",
    "Educacion",
    "Diseño",
    "Tecnologia",
    "Salud",
    "Empresarial",
    "Social",
  ];

  // Estado de las áreas seleccionadas
  const paymentCardsSeleccionadas = ref([]);

  // Función para filtrar libros por áreas seleccionadas
  const paymentCardsFiltrados = computed(() => {
  const PaymentCards = paymentCardsCollection.value

    if (!PaymentCards || PaymentCards.length === 0 || paymentCardsSeleccionadas.value.length === 0) {
      return PaymentCards;
    }
  
    return PaymentCards.filter(PaymentCards => paymentCardsSeleccionadas.value.includes(PaymentCards.name));
  });

    return{  

        areas,
        paymentCardsSeleccionadas,
        paymentCardsFiltrados,
        paymentCardsCollection
    }
    
}