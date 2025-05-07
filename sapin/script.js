// const afficherPointeSapin = (hauteur) => {
//     for (let i = 0; i <= hauteur ; i++) {
//         let line = ""
//         if (i == 0) {
//             for (let j = 0; j <= hauteur; j++) {
//                 if (j == hauteur) {
//                     line += "+"
//                 } else {
//                     line += " "
//                 }
//             }
//         } else {
//             for (let j = 0; j < hauteur - i ; j++) {
//                 line += ' '
//             }
//             line += '/'
//             for (let j = hauteur - i; j < hauteur - 1; j++) {
//                 line += '*'
//             }
//             line += '|'
//             for (let j = 0; j < i -1; j++) {
//                 line += '*'
//             }
//             line += `\\`


//         }
//         console.log(line)
//     }
// }

const decoration = () => {
    let x = Math.random()
    if (x > 0.3) {
        return ('*')
    } else if (x > 0.15) {
        return ('+')
    } else {
        return ('o')
    }
}

const afficherEtage = (hauteur, pointe_offset, espacement) => {
    let line = ""
    for (let i = 1; i <= hauteur; i++) {
        let deco = false
        for (let j = 1 - espacement; j < hauteur - i; j++) {
            line += ' '
        }
        line += '/'
        for (let j = hauteur - i - pointe_offset; j < hauteur - 1; j++) {
            if (j != hauteur - i - pointe_offset && j != hauteur - 2 && deco == false) {
                line += decoration()
                deco = true
            } else {
                line += '*'
                deco = false
            }
        }
        line += '|'
        for (let j = 0 - pointe_offset; j < i - 1; j++) {
            if (j != 0 - pointe_offset && j != i - 2 && deco == false) {
                line += decoration()
                deco = true
            } else {
                line += '*'
                deco = false
            }
        }
        line += `\\ \n`

    }
    return line

}

const afficherEtoile = (etages, hauteur_etage) => {
    let line = ""
    for (let j = 1; j <= etages + hauteur_etage; j++) {
        if (j == etages + hauteur_etage) {
            line += "+"
        } else {
            line += " "
        }
    }
    line += '\n'
    return line
}

const afficherTronc = (etages, hauteur_etage) => {
    let trunkSize = (hauteur_etage) % 2 == 0 ? hauteur_etage - 1 : hauteur_etage;
    let offset = etages + hauteur_etage - Math.ceil(trunkSize / 2);
    let line = "";
    for (let i = 1; i <= etages; i++ ) {
        for (let j = 0; j < offset; j++) {
            line += " "
        }
        for (let j = 0; j < trunkSize; j++) {
            line += "#"
        }
        line += '\n'
    }
    return(line)
}


const afficherSapin = (etages, hauteur_etage) => {
    let result = ""
    result += afficherEtoile(etages, hauteur_etage)
    for (let i = 0; i < etages; i++) {
         result += afficherEtage(hauteur_etage, i, etages - i)
    }
    result += afficherTronc(etages, hauteur_etage)
    console.log(result)
}

afficherSapin(6, 3)