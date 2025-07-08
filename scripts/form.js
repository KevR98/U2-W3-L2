/* const memoryKey = 'input-memory';
const generateName = function (nome) {
  const nameRow = document.getElementById('name');
  nameRow.innerHTML += `
  <p>${nome.input}<p>
  `;
};
let contactsArray;
if (localStorage.getItem(memoryKey)) {
  contactsArray = JSON.parse(localStorage.getItem(memoryKey));
} else {
  contactsArray = [];
}
console.log('contactsArray', contactsArray);

if (contactsArray.length > 0) {
  contactsArray.forEach((contatto) => {
    generateCard(contatto);
  });
}
// Recupero tutti i riferimenti
const barraInput = document.getElementById('input');
const saveButton = document.getElementById('save');
const resetButton = document.getElementById('reset');

// Creo uno "spazio" per i dati salvati

//  Creo la funzione

// Creo l'evento al click
saveButton.addEventListener('submit', function (e) {
  const barraInputContent = barraInput.value;
  localStorage.setItem(memoryKey, barraInputContent);
});

resetButton.addEventListener('click', function () {
  barraInput.value = '';
  localStorage.removeItem(memoryKey);
}); */

const LS_KEY = 'nomiUtenti';
const input = document.getElementById('input');
const saveBtn = document.getElementById('save');
const resetBtn = document.getElementById('reset');
const nameDiv = document.getElementById('name');

// Funzione per leggere l'array dei nomi da localStorage
function getNomiSalvati() {
  const dati = localStorage.getItem(LS_KEY);
  return dati ? JSON.parse(dati) : [];
}

// Funzione per salvare l'array di nomi in localStorage
function setNomiSalvati(nomiArray) {
  localStorage.setItem(LS_KEY, JSON.stringify(nomiArray));
}

// Mostra tutti i nomi salvati sopra l'input
function mostraNomiSalvati() {
  const nomi = getNomiSalvati();
  if (nomi.length > 0) {
    nameDiv.innerHTML = `
      <div class="alert alert-primary" role="alert">
        Nomi salvati:<br>
        <strong>${nomi
          .map((n) => `<span class="badge bg-info text-dark m-1">${n}</span>`)
          .join('')}</strong>
      </div>
    `;
  } else {
    nameDiv.innerHTML = '';
  }
}

// Salva il nome nell'array in localStorage
saveBtn.addEventListener('click', function () {
  const nome = input.value.trim();
  if (nome) {
    const nomi = getNomiSalvati();
    nomi.push(nome); // aggiungi il nome alla fine dell'array
    setNomiSalvati(nomi);
    mostraNomiSalvati();
    input.value = '';
    input.focus();
  }
});

// Reset: svuota tutto l'array
resetBtn.addEventListener('click', function () {
  localStorage.removeItem(LS_KEY);
  mostraNomiSalvati();
  input.value = '';
  input.focus();
});

// All'avvio mostra i nomi già salvati
mostraNomiSalvati();
