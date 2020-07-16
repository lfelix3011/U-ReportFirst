let prueba = document.querySelector('#prueba');
const divReportes = document.querySelector('#divReportes');

function Ajax() {
   const url = 'https://api-reportes.herokuapp.com/api/getReports'

   fetch(url)
      .then(function (response) {
         return response.json();
      })
      .then(function (reports) {

         const r = reports.reports;
         let div = document.createElement('div');

         r.forEach(function (reporte) {
            console.log(reporte);
            div.innerHTML += `
                      <div class="card shadow-card mb-3 align-content-center">
                         <div class="card-body">
                            <h5 class="card-title">${reporte.report_type}</h5>
                            <p class="card-text">${reporte.description}</p>
                            <p class="card-text escondido">${reporte.reporter_data.correo}</p>
                            <p class="card-text escondido">${reporte.reporter_data.nombre}</p>
                            <p class="card-text escondido">${reporte.reporter_data.cedula}</p>
                            <p class="card-text escondido">${reporte.address}</p>
                         </div>
                         <button class="btn btn-pgn text-white btn-block">Ver</button>
                      </div>
                      `;
         });
         divReportes.appendChild(div);


      }).catch(function (err) {
         console.log(err);
      });
};

Ajax();


//falta linkear con el boton que lo llamara