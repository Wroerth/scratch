const drinkButtons = document.querySelectorAll('.iconBox');
const alertBox = document.getElementById('alert-box');

let cervezaClickCount = 0;
let vinoClickCount = 0;
let whiskyClickCount = 0;

const maxCervezaClicks = 6;
const maxVinoClicks = 4;
const maxWhiskyClicks = 5;


const alcoholPorCerveza = 16.5;  
const alcoholPorVino = 18;      
const alcoholPorWhisky = 20;    

drinkButtons.forEach(button => {
  button.addEventListener('click', () => {
    const drinkName = button.closest('.card').querySelector('h3').textContent;

    let message = '';
    let totalAlcohol = 0;  

    if (drinkName === 'Cerveza') {
      if (cervezaClickCount < maxCervezaClicks) {
        cervezaClickCount++;  
        totalAlcohol = cervezaClickCount * alcoholPorCerveza;
        message = `¡Cuidado! Estás tomando ${cervezaClickCount} vaso(s) de cerveza, lo que equivale a un total de ${totalAlcohol.toFixed(1)} ml de alcohol puro.`;
      } else {
        message = `¡Exceso de alcohol! Has tomado ${cervezaClickCount} vasos de cerveza, lo que equivale a ${totalAlcohol.toFixed(1)} ml de alcohol. Ya no puedes tomar más.`;
        button.classList.add('disabled'); 
      }
    } else if (drinkName === 'Vino') {
      if (vinoClickCount < maxVinoClicks) {
        vinoClickCount++; 
        totalAlcohol = vinoClickCount * alcoholPorVino;
        message = `¡Atención! Estás tomando ${vinoClickCount} copa(s) de vino, lo que equivale a un total de ${totalAlcohol.toFixed(1)} ml de alcohol puro.`;
      } else {
        message = `¡Exceso de alcohol! Has tomado ${vinoClickCount} copas de vino, lo que equivale a ${totalAlcohol.toFixed(1)} ml de alcohol. Ya no puedes tomar más.`;
        button.classList.add('disabled');  
      }
    } else if (drinkName === 'Whisky') {
      if (whiskyClickCount < maxWhiskyClicks) {
        whiskyClickCount++;  
        totalAlcohol = whiskyClickCount * alcoholPorWhisky;
        message = `¡Alerta! Estás tomando ${whiskyClickCount} vaso(s) de whisky, lo que equivale a un total de ${totalAlcohol.toFixed(1)} ml de alcohol puro.`;
      } else {
        message = `¡Exceso de alcohol! Has tomado ${whiskyClickCount} vasos de whisky, lo que equivale a ${totalAlcohol.toFixed(1)} ml de alcohol. Ya no puedes tomar más.`;
        button.classList.add('disabled');  
      }
    } else {
      message = 'Bebida no reconocida.';
    }

    showAlert(message);  
  });
});

function showAlert(message) {
  alertBox.textContent = message;
  alertBox.classList.add('show');

  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 3000); 
}
