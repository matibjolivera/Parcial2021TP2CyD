/**
 * En el siguiente array de objetos (beers) se requiere actualizar el repositorio donde se encuentra almacenadas
 * los archivos de las etiquetas (label). Dicha actualizacion debe mantener la carpeta.
 * 
 * El nuevo repositorio se encuentra en SharePoint Online, en un sitio de Tecnoshare, por tanto la url de la etiqueta quedará de la siguiente forma:
 * https://tecnoshare.sharepoint.com/sites/beer/[carpeta]/[nombre_archivo]
 * 
 * Ademas se requiere que el nombre del archivo sea reemplazado por el nombre de la cerveza por ejemplo para Darkness sera:
 * https://tecnoshare.sharepoint.com/sites/beer/lnxbIV/darkness.png
 * 
 
 /*
  Beers
*/
const beers = [
    { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
    { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
    { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
    { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
    { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
];

const urlToReplace = 'https://s3.amazonaws.com/brewerydbapi';
const newUrl = 'https://tecnoshare.sharepoint.com/sites';

const beersReplaced = beers.map(b => {
    b.label = b.label.replace(urlToReplace, newUrl);
    const newFileName = b.name.toLowerCase().replace(/\s/g, "_");
    const oldFileName = b.label.split("/").pop();
    const extension = b.label.split(".").pop();
    b.label = b.label.replace(oldFileName, newFileName + '.' + extension);
    return b;
});

console.log(beersReplaced);
