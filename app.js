import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Configurația Firebase ta:
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

const filterForm = document.getElementById("filter-form");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

const incomeList = document.getElementById("income-list");
const monthlyTotal = document.getElementById("monthly-total");

// Completează lunile (1-12)
for (let m = 1; m <= 12; m++) {
  const option = document.createElement("option");
  option.value = m;
  option.textContent = m;
  monthSelect.appendChild(option);
}

// Completează anii (2020 - anul curent + 1)
const currentYear = new Date().getFullYear();
for (let y = 2020; y <= currentYear + 1; y++) {
  const option = document.createElement("option");
  option.value = y;
  option.textContent = y;
  yearSelect.appendChild(option);
}

// Setează selecturile pe luna și anul curent implicit
monthSelect.value = new Date().getMonth() + 1;
yearSelect.value = currentYear;

// Actualizează totalul automat când se modifică valorile
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

  // După adăugare reîncarcă lista cu filtrul curent
  loadData(parseInt(monthSelect.value), parseInt(yearSelect.value));
});

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedMonth = parseInt(monthSelect.value);
  const selectedYear = parseInt(yearSelect.value);
  loadData(selectedMonth, selectedYear);
});

async function loadData(selectedMonth, selectedYear) {
  const snapshot = await getDocs(collection(db, "incasari"));
  incomeList.innerHTML = "";
  let total = 0;

  snapshot.forEach((doc) => {
    const data = doc.data();
    const entryDate = new Date(data.date);
    const entryMonth = entryDate.getMonth() + 1;
    const entryYear = entryDate.getFullYear();

    if (entryMonth === selectedMonth && entryYear === selectedYear) {
      const docTotal = parseFloat(data.total);
      total += isNaN(docTotal) ? 0 : docTotal;

      const div = document.createElement("div");
      div.className = "entry";
      div.textContent = `${data.date} - Maruntele: ${data.maruntele} lei, Mascate: ${data.mascate} lei, Card: ${data.card} lei, Total: ${data.total} lei`;
      incomeList.appendChild(div);
    }
  });

  monthlyTotal.textContent = `Total pentru ${selectedMonth}/${selectedYear}: ${total.toFixed(2)} lei`;
}

document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  loadData(now.getMonth() + 1, now.getFullYear());
  updateTotal();
});
