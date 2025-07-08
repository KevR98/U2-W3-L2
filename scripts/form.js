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

// Selettori
const input = document.getElementById('input');
const salvaBtn = document.getElementById('save');
const resettaBtn = document.getElementById('reset');
const nameDiv = document.getElementById('name');

const LS_KEY = 'nomeUtente';

// Funzione per mostrare il nome salvato sopra l'input
function mostraNomeSalvato() {
  const nomeSalvato = localStorage.getItem(LS_KEY);
  if (nomeSalvato) {
    nameDiv.innerHTML = `
      <div class="alert alert-primary" role="alert">
        Nome salvato: <strong>${nomeSalvato}</strong>
      </div>
    `;
  } else {
    nameDiv.innerHTML = '';
  }
}

// Azione bottone SALVA
salvaBtn.addEventListener('click', () => {
  const nome = input.value.trim();
  if (nome) {
    localStorage.setItem(LS_KEY, nome);
    mostraNomeSalvato();
    input.value = '';
    input.focus();
  }
});

// Azione bottone RESETTA
resettaBtn.addEventListener('click', () => {
  localStorage.removeItem(LS_KEY);
  mostraNomeSalvato();
  input.value = '';
  input.focus();
});

// Mostra il valore salvato al caricamento della pagina
mostraNomeSalvato();
