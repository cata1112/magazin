import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDYP2Eg05JnvqaLC86_RwuGGdylZAqHvM",
  authDomain: "incasari-magazin.firebaseapp.com",
  projectId: "incasari-magazin",
  storageBucket: "incasari-magazin.firebasestorage.app",
  messagingSenderId: "606693874235",
  appId: "1:606693874235:web:f6919ba5313b333791da1e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("income-form");
const dateInput = document.getElementById("date");
const marunteleInput = document.getElementById("maruntele");
const mascateInput = document.getElementById("mascate");
const cardInput = document.getElementById("card");
const totalInput = document.getElementById("total");
const incomeList = document.getElementById("income-list");
const monthlyTotal = document.getElementById("monthly-total");

function updateTotal() {
  const maruntele = parseFloat(marunteleInput.value) || 0;
  const mascate = parseFloat(mascateInput.value) || 0;
  const card = parseFloat(cardInput.value) || 0;
  const total = maruntele + mascate + card;
  totalInput.value = total.toFixed(2);
}

marunteleInput.addEventListener("input", updateTotal);
mascateInput.addEventListener("input", updateTotal);
cardInput.addEventListener("input", updateTotal);

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const date = dateInput.value;
  const maruntele = parseFloat(marunteleInput.value) || 0;
  const mascate = parseFloat(mascateInput.value) || 0;
  const card = parseFloat(cardInput.value) || 0;
  const total = maruntele + mascate + card;

  if (!date || total <= 0) {
    alert("Completează data și cel puțin o sumă validă.");
    return;
  }

  try {
    await addDoc(collection(db, "incasari"), {
      date,
      maruntele,
      mascate,
      card,
      total
    });
    console.log("Document adăugat cu succes");
  } catch (error) {
    console.error("Eroare la adăugarea documentului:", error);
    alert("Eroare la salvarea datelor. Vezi consola.");
  }

  form.reset();
  totalInput.value = "0.00";

  loadData();
});

async function loadData() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  const snapshot = await getDocs(collection(db, "incasari"));
  incomeList.innerHTML = "";
  let total = 0;

  snapshot.forEach((doc) => {
    const data = doc.data();
    console.log("Date doc:", data); // aici vezi datele din fiecare document
    const entryDate = new Date(data.date);
    const entryMonth = entryDate.getMonth() + 1;
    const entryYear = entryDate.getFullYear();

    if (entryMonth === currentMonth && entryYear === currentYear) {
      const docTotal = parseFloat(data.total);
      if (isNaN(docTotal)) {
        console.warn("Total invalid la doc:", doc.id, data.total);
      }
      total += isNaN(docTotal) ? 0 : docTotal;

      const div = document.createElement("div");
      div.className = "entry";
      div.textContent = `${data.date} - Maruntele: ${data.maruntele} lei, Mascate: ${data.mascate} lei, Card: ${data.card} lei, Total: ${data.total} lei`;
      incomeList.appendChild(div);
    }
  });

  monthlyTotal.textContent = `Total lună: ${total.toFixed(2)} lei`;
}

document.addEventListener("DOMContentLoaded", loadData);
