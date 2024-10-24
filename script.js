const drinkButtons = document.querySelectorAll('.iconBox');
const alertBox = document.getElementById('alert-box');


let cervezaClickCount = 0;
let vinoClickCount = 0;
let whiskyClickCount = 0;


const maxCervezaClicks = 6;
const maxVinoClicks = 4;
const maxWhiskyClicks = 5;

drinkButtons.forEach(button => {
  button.addEventListener('click', () => {
    const drinkName = button.closest('.card').querySelector('h3').textContent;

    let message = '';

    if (drinkName === 'Cerveza') {
      cervezaClickCount++;  

      if (cervezaClickCount <= maxCervezaClicks) {
        message = `¡Cuidado! Estás tomando ${cervezaClickCount} vaso(s) de cerveza. La cerveza puede contener un alto nivel de alcohol.`;
      } else {
        message = `¡Exceso de alcohol! Has tomado ${cervezaClickCount} vasos de cerveza. Ya no puedes tomar más.`;
        button.classList.add('disabled'); 
      }
    } else if (drinkName === 'Vino') {
      vinoClickCount++; 

      if (vinoClickCount <= maxVinoClicks) {
        message = `¡Atención! Estás tomando ${vinoClickCount} copa(s) de vino. El vino también puede ser alto en alcohol.`;
      } else {
        message = `¡Exceso de alcohol! Has tomado ${vinoClickCount} copas de vino. Ya no puedes tomar más.`;
        button.classList.add('disabled');  
      }
    } else if (drinkName === 'Whisky') {
      whiskyClickCount++;  

      if (whiskyClickCount <= maxWhiskyClicks) {
        message = `¡Alerta! Estás tomando ${whiskyClickCount} vaso(s) de whisky. El whisky tiene un contenido de alcohol muy elevado.`;
      } else {
        message = `¡Exceso de alcohol! Has tomado ${whiskyClickCount} vasos de whisky. Ya no puedes tomar más.`;
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
