const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
  }

const afficherDossier = (dossier) => {
    console.log(`📁 ${dossier.nom}`)
}

const afficherDossierIteratif = (dossier) => {
    const holder = [dossier]; 

    while (holder.length > 0) {
        const current = holder.pop(); 


        if (current.contenu) {
            console.log(`📁 ${current.nom}`); 
            for (let i = current.contenu.length - 1; i >= 0; i--) {
                holder.push(current.contenu[i]);
            }
        } else {
            console.log(`📄 ${current.nom}`);
        }

    }
};

const afficherDossierRecursif = (dossier) => {

    console.log(`📁 ${dossier.nom}`);

    dossier.contenu?.forEach((cont) => {
        if (cont.contenu) {
            afficherDossierRecursif(cont);
        } else {
            console.log(`📄 ${cont.nom}`);
        }
    });
};

afficherDossierIteratif(dossierPrincipal)
console.log('------------------------------------------------')
afficherDossierRecursif(dossierPrincipal)