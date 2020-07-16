let personas = document.querySelector('.cardPersona');
const verInfo = document.querySelector('#verInfo');

personas.addEventListener('click', (e) => {
   let botonValidacion = e.target;
   let infoPersona = e.target.parentElement;

   if (botonValidacion.nodeName === 'BUTTON') {
      let elemento = document.createElement('div');
      verInfo.innerHTML = ' ';
      elemento.innerHTML = `
         <div class="card position-fixed nuevo">
            <div class="card-body">
               <h5 class=" text-center card-title">Nombre de la persona: <i>${infoPersona.childNodes[1].childNodes[7].innerText}</i></h5>
               <p class="card-header"><strong>Cedula:</strong> ${infoPersona.childNodes[1].childNodes[9].innerText}</p>
               <p class="card-header"><strong>Tipo de reporte:</strong> ${infoPersona.childNodes[1].childNodes[1].innerText}</p>
                <p class="card-header"><strong>Correo:</strong> ${infoPersona.childNodes[1].childNodes[5].innerText}</p>
                <p class="card-header"><strong>Informacion provista:</strong> ${infoPersona.childNodes[1].childNodes[3].innerText}</p>
                <p class="card-header"><strong>Ubicacion del problema:</strong> ${infoPersona.childNodes[1].childNodes[11].innerText}</p>
            </div>
            <div class="form-inline">
               <button class="btn btn-success btn-block responder" data-target="#textarea" data-toggle="collapse"
                aria-expanded="false" aria-controls="textarea">Responder</button>
               <div class="collapse" id="textarea"></div>
               <button class="btn btn-danger btn-block denegar">Denegar</button>
            </div>
         </div>`;
      verInfo.appendChild(elemento);
   }

   let denegar = document.querySelector('.denegar');
   denegar.addEventListener('click', () => {
      if (confirm(`Estas seguro que quieres denegar el menensaje de ${infoPersona.childNodes[1].childNodes[1].innerText}`)) {
         infoPersona.remove();
         verInfo.innerHTML = '';
      }
   });

   let responder = document.querySelector('.responder');
   responder.addEventListener('click', () => {
      let TextArea = document.querySelector('#textarea');
      let divTextaArea = document.createElement('div');
      TextArea.innerHTML = '';
      divTextaArea.innerHTML = `
      <label class="font-weight-bold" for="Textarea">Responder a mensaje</label>
      <textarea class="form-control rounded-1 mx-auto" id="Textarea" rows="5" cols="92"></textarea>
      <button class="btn btn-outline-primary mb-3 btn-block mx-auto" id="enviar">Enviar</button>
         `;
      TextArea.appendChild(divTextaArea);
   });

   e.preventDefault();

});

// esto es trtando de hacer que funcione buscar

/* let filter = document.querySelector('#filter');
   filter.addEventListener('keyup', (e) => {
      let lista = personas.childNodes[0];
      let newSearch = e.target.value.toLowerCase();
      
      Array.from(lista).forEach( (item) => {
            let itemName = item.lista.childNodes[1].childNodes[1].innerText;
            console.log(typeof itemName);
            if(itemName.toLowerCase().indexOf(newSearch) != -1){
            item.lista.style.display = 'block';
            } else {
            item.lista.style.display = 'none';
            }
      });
   
   });
   */

