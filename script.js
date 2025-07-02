import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configurația Firebase (completează după ce creezi proiectul Firebase)
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("income-form");
const dateInput = document.getElementById("date");
const amountInput = document.getElementById("amount");
const incomeList = document.getElementById("income-list");
const monthlyTotal = document.getElementById("monthly-total");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const date = dateInput.value;
  const amount = parseFloat(amountInput.value);

  if (!date || isNaN(amount)) return;

  await addDoc(collection(db, "incasari"), {
    date,
    amount
  });

  dateInput.value = "";
  amountInput.value = "";

  loadData();
});

async function loadData() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();
  const snapshot = await getDocs(collection(db, "incasari"));
  incomeList.innerHTML = "";
  let total = 0;

  snapshot.forEach(doc => {
    const data = doc.data();
    const entryDate = new Date(data.date);
    const entryMonth = entryDate.getMonth() + 1;
    const entryYear = entryDate.getFullYear();

    if (entryMonth === currentMonth && entryYear === currentYear) {
      total += data.amount;
      const div = document.createElement("div");
      div.className = "entry";
      div.textContent = `${data.date} - ${data.amount} lei`;
      incomeList.appendChild(div);
    }
  });

  monthlyTotal.textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", loadData);