const afficherPointeSapin = (hauteur) => {
    for (let i = 0; i <= hauteur ; i++) {
        let line = ""
        if (i == 0) {
            for (let j = 0; j <= hauteur; j++) {
                if (j == hauteur) {
                    line += "+"
                } else {
                    line += " "
                }
            }
        } else {
            for (let j = 0; j < hauteur - i ; j++) {
                line += ' '
            }
            line += '/'
            for (let j = hauteur - i; j < hauteur - 1; j++) {
                line += '*'
            }
            line += '|'
            for (let j = 0; j < i -1; j++) {
                line += '*'
            }
            line += `\\`

        }
        console.log(line)
    }
}

const afficherEtage = (hauteur, pointe_offset, espacement) => {
    for (let i = 1; i <= hauteur ; i++) {
        let line = ""
        // if (i == 0) {
        //     for (let j = 0; j <= hauteur; j++) {
        //         if (j == hauteur) {
        //             line += "+"
        //         } else {
        //             line += " "
        //         }
        //     }
        // } else {
            for (let j = 0 - espacement; j < hauteur - i ; j++) {
                line += ' '
            }
            line += '/'
            for (let j = hauteur - i - pointe_offset; j < hauteur - 1; j++) {
                line += '*'
            }
            line += '|'
            for (let j = 0 - pointe_offset; j < i -1; j++) {
                line += '*'
            }
            line += `\\`

            console.log(line)
        }
    
 }


 const afficherSapin = (etages, hauteur_etage) => {
    
 }
// afficherPointeSapin(4)

afficherEtage(3, 0, 3)
afficherEtage(3, 1, 2)
afficherEtage(3, 2, 1)
afficherEtage(3, 3, 0)