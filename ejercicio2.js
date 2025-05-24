let letrasUnicas = "";
//const str = "zzzaaxxxbbddmmmmff".split('');
const str = "zzzaaxxxbbddmmmmff".split('').forEach(y => !letrasUnicas.includes(y) ? letrasUnicas += y : null);
//const arrayStr = str.split('');

//arrayStr.forEach((y) => { !letrasUnicas.includes(y) ? letrasUnicas += y : null; });

//arrayStr.forEach(y => !letrasUnicas.includes(y) ? letrasUnicas += y : null);
//str.forEach(y => !letrasUnicas.includes(y) ? letrasUnicas += y : null);
console.log(letrasUnicas);

for (const y of str) {
    !letrasUnicas.includes(y) ? letrasUnicas += y : null;
    /*if (!letrasUnicas.includes(y)) {
        letrasUnicas += y;
    } else {
        null;
    }*/
}
console.log(letrasUnicas);

// Con reduce
const st = "zzzaaxxxbbddmmmmff".split('');
const letrasUnicas2 = st.reduce((ac, vr) => !ac.includes(vr) ? ac + vr : ac);
console.log(letrasUnicas2);

const st2 = "zzzaaxxxbbddmmmmff".split('').reduce((ac, vr) => !ac.includes(vr) ? ac + vr : ac);
console.log(st2);