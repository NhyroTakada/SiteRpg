
var valores = [];

function calcDef() {
    let def = parseInt(document.getElementById("a1").value)
    if (def < 1) {
        valores.splice(0, 1, 0);
    } else 
    if (def < 8) {
        valores.splice(0, 1, (1/4));
    } else 
    if (def >= 8 && def <= 9) {
        valores.splice(0, 1, (1/3));
    } else 
    if (def >= 10 && def <= 11) {
        valores.splice(0, 1, (1/2));
    } else 
    if (def >= 12 && def <= 13) {
        valores.splice(0, 1, 1);
    } else 
    if (def >= 14 && def <= 15) {
        valores.splice(0, 1, 2);
    } else 
    if (def >= 16 && def <= 17) {
        valores.splice(0, 1, 3);
    } else 
    if (def >= 18 && def <= 19) {
        valores.splice(0, 1, 4);
    } else 
    if (def >= 20 && def <= 21) {
        valores.splice(0, 1, 5);
    } else 
    if (def >= 22 && def <= 23) {
        valores.splice(0, 1, 6);
    } else 
    if (def >= 24 && def <= 25) {
        valores.splice(0, 1, 7);
    } else 
    if (def >= 26 && def <= 27) {
        valores.splice(0, 1, 8);
    } else 
    if (def >= 28 && def <= 29) {
        valores.splice(0, 1, 9);
    } else 
    if (def >= 30 && def <= 31) {
        valores.splice(0, 1, 10);
    } else 
    if (def >= 32 && def <= 33) {
        valores.splice(0, 1, 11);
    } else 
    if (def >= 34 && def <= 35) {
        valores.splice(0, 1, 12);
    } else 
    if (def >= 36 && def <= 37) {
        valores.splice(0, 1, 13);
    } else 
    if (def >= 38 && def <= 39) {
        valores.splice(0, 1, 14);
    } else 
    if (def >= 40 && def <= 41) {
        valores.splice(0, 1, 15);
    } else 
    if (def >= 42 && def <= 43) {
        valores.splice(0, 1, 16);
    } else 
    if (def >= 44 && def <= 45) {
        valores.splice(0, 1, 17);
    } else 
    if (def >= 46 && def <= 47) {
        valores.splice(0, 1, 18);
    } else 
    if (def >= 48 && def <= 49) {
        valores.splice(0, 1, 19);
    } else 
    if (def >= 50) {
        valores.splice(0, 1, 20);
    }
}
function calcRd() {
    let rd = parseInt(document.getElementById("a2").value)
    if (rd < 1) {
        valores.splice(1, 1, 0);
    } else 
    if (rd > 0 && rd < 4) {
        valores.splice(1, 1, (1/4));
    } else 
    if (rd == 4) {
        valores.splice(1, 1, (1/3));
    } else 
    if (rd == 5) {
        valores.splice(1, 1, (1/2));
    } else 
    if (rd >= 6 && rd <= 7) {
        valores.splice(1, 1, 1);
    } else 
    if (rd == 8) {
        valores.splice(1, 1, 2);
    } else 
    if (rd == 9) {
        valores.splice(1, 1, 3);
    } else 
    if (rd == 10) {
        valores.splice(1, 1, 4);
    } else 
    if (rd >= 11 && rd <= 12) {
        valores.splice(1, 1, 5);
    } else 
    if (rd == 13) {
        valores.splice(1, 1, 6);
    } else 
    if (rd == 14) {
        valores.splice(1, 1, 7);
    } else 
    if (rd == 15) {
        valores.splice(1, 1, 8);
    } else 
    if (rd >= 16 && rd <= 17) {
        valores.splice(1, 1, 9);
    } else 
    if (rd == 18) {
        valores.splice(1, 1, 10);
    } else 
    if (rd == 19) {
        valores.splice(1, 1, 11);
    } else 
    if (rd == 20) {
        valores.splice(1, 1, 12);
    } else 
    if (rd >= 21 && rd <= 22) {
        valores.splice(1, 1, 13);
    } else 
    if (rd == 23) {
        valores.splice(1, 1, 14);
    } else 
    if (rd == 24) {
        valores.splice(1, 1, 15);
    } else 
    if (rd == 25) {
        valores.splice(1, 1, 16);
    } else 
    if (rd >= 26 && rd <= 27) {
        valores.splice(1, 1, 17);
    } else 
    if (rd == 28) {
        valores.splice(1, 1, 18);
    } else 
    if (rd == 29) {
        valores.splice(1, 1, 19);
    } else 
    if (rd >= 30) {
        valores.splice(1, 1, 20);
    }
};
function calcPV() {
    let pv = parseInt(document.getElementById("a3").value)
    if (pv <= 0) {
        valores.splice(2, 1, 0);
    } else 
    if (pv > 0 && pv <= 9) {
        valores.splice(2, 1, (1/4));
    } else 
    if (pv >= 10 && pv <= 29) {
        valores.splice(2, 1, (1/3));
    } else 
    if (pv >= 30 && pv <= 59) {
        valores.splice(2, 1, (1/2));
    } else 
    if (pv >= 60 && pv <= 94) {
        valores.splice(2, 1, 1);
    } else 
    if (pv >= 95 && pv <= 129) {
        valores.splice(2, 1, 2);
    } else 
    if (pv >= 130 && pv <= 164) {
        valores.splice(2, 1, 3);
    } else 
    if (pv >= 165 && pv <= 199) {
        valores.splice(2, 1, 4);
    } else 
    if (pv >= 200 && pv <= 234) {
        valores.splice(2, 1, 5);
    } else 
    if (pv >= 235 && pv <= 269) {
        valores.splice(2, 1, 6);
    } else 
    if (pv >= 270 && pv <= 304) {
        valores.splice(2, 1, 7);
    } else 
    if (pv >= 305 && pv <= 339) {
        valores.splice(2, 1, 8);
    } else 
    if (pv >= 340 && pv <= 374) {
        valores.splice(2, 1, 9);
    } else 
    if (pv >= 375 && pv <= 409) {
        valores.splice(2, 1, 10);
    } else 
    if (pv >= 410 && pv <= 444) {
        valores.splice(2, 1, 11);
    } else 
    if (pv >= 445 && pv <= 479) {
        valores.splice(2, 1, 12);
    } else 
    if (pv >= 480 && pv <= 514) {
        valores.splice(2, 1, 13);
    } else 
    if (pv >= 515 && pv <= 549) {
        valores.splice(2, 1, 14);
    } else 
    if (pv >= 550 && pv <= 584) {
        valores.splice(2, 1, 15);
    } else 
    if (pv >= 585 && pv <= 619) {
        valores.splice(2, 1, 16);
    } else 
    if (pv >= 620 && pv <= 654) {
        valores.splice(2, 1, 17);
    } else 
    if (pv >= 655 && pv <= 689) {
        valores.splice(2, 1, 18);
    } else 
    if (pv >= 690 && pv <= 724) {
        valores.splice(2, 1, 19);
    } else 
    if (pv >= 725) {
        valores.splice(2, 1, 20);
    }
};
function calcAtk() {
    let atk = parseInt(document.getElementById("a4").value)
    if (atk <= 0) {
        valores.splice(3, 1, 0);
    } else 
    if (atk > 0 && atk < 6) {
        valores.splice(3, 1, (1/4));
    } else 
    if (atk >= 6 && atk <= 7) {
        valores.splice(3, 1, (1/3));
    } else 
    if (atk == 8) {
        valores.splice(3, 1, (1/2));
    } else 
    if (atk >= 9 && atk <= 10) {
        valores.splice(3, 1, 1);
    } else 
    if (atk == 11) {
        valores.splice(3, 1, 2);
    } else 
    if (atk >= 12 && atk <= 13) {
        valores.splice(3, 1, 3);
    } else 
    if (atk == 14) {
        valores.splice(3, 1, 4);
    } else 
    if (atk >= 15 && atk <= 17) {
        valores.splice(3, 1, 5);
    } else 
    if (atk == 18) {
        valores.splice(3, 1, 6);
    } else 
    if (atk >= 19 && atk <= 20) {
        valores.splice(3, 1, 7);
    } else 
    if (atk == 21) {
        valores.splice(3, 1, 8);
    } else 
    if (atk >= 22 && atk <= 24) {
        valores.splice(3, 1, 9);
    } else 
    if (atk == 25) {
        valores.splice(3, 1, 10);
    } else 
    if (atk >= 26 && atk <= 27) {
        valores.splice(3, 1, 11);
    } else 
    if (atk == 28) {
        valores.splice(3, 1, 12);
    } else 
    if (atk >= 29 && atk <= 31) {
        valores.splice(3, 1, 13);
    } else 
    if (atk == 32) {
        valores.splice(3, 1, 14);
    } else 
    if (atk >= 33 && atk <= 34) {
        valores.splice(3, 1, 15);
    } else 
    if (atk == 35) {
        valores.splice(3, 1, 16);
    } else 
    if (atk >= 36 && atk <= 38) {
        valores.splice(3, 1, 17);
    } else 
    if (atk == 39) {
        valores.splice(3, 1, 18);
    } else 
    if (atk >= 40 && atk <= 41) {
        valores.splice(3, 1, 19);
    } else 
    if (atk == 42) {
        valores.splice(3, 1, 20);
    }
};
function calcCd() {
    let cd = parseInt(document.getElementById("a5").value)

    if (cd <= 0) {
        valores.splice(4, 1, 0)
    } else 
    if (cd > 0 && cd < 8) {
        valores.splice(4, 1, (1/4))
    } else 
    if (cd >= 8 && cd <= 9) {
        valores.splice(4, 1, (1/3))
    } else 
    if (cd == 10) {
        valores.splice(4, 1, (1/2))
    } else 
    if (cd >= 11 && cd <= 12) {
        valores.splice(4, 1, 1)
    } else 
    if (cd == 13) {
        valores.splice(4, 1, 2)
    } else 
    if (cd >= 14 && cd <= 15) {
        valores.splice(4, 1, 3)
    } else 
    if (cd == 16) {
        valores.splice(4, 1, 4)
    } else 
    if (cd >= 17 && cd <= 18) {
        valores.splice(4, 1, 5)
    } else 
    if (cd == 19) {
        valores.splice(4, 1, 6)
    } else 
    if (cd >= 20 && cd <= 21) {
        valores.splice(4, 1, 7)
    } else 
    if (cd == 22) {
        valores.splice(4, 1, 8)
    } else 
    if (cd >= 23 && cd <= 24) {
        valores.splice(4, 1, 9)
    } else 
    if (cd == 25) {
        valores.splice(4, 1, 10)
    } else 
    if (cd >= 26 && cd <= 27) {
        valores.splice(4, 1, 11)
    } else 
    if (cd == 28) {
        valores.splice(4, 1, 12)
    } else 
    if (cd >= 29 && cd <= 30) {
        valores.splice(4, 1, 13)
    } else 
    if (cd == 31) {
        valores.splice(4, 1, 14)
    } else 
    if (cd >= 32 && cd <= 33) {
        valores.splice(4, 1, 15)
    } else 
    if (cd == 34) {
        valores.splice(4, 1, 16)
    } else 
    if (cd >= 35 && cd <= 36) {
        valores.splice(4, 1, 17)
    } else 
    if (cd == 37) {
        valores.splice(4, 1, 18)
    } else 
    if (cd >= 38 && cd <= 39) {
        valores.splice(4, 1, 19)
    } else 
    if (cd == 40) {
        valores.splice(4, 1, 20)
    }
}
function calcDano() {
    let dano = parseInt(document.getElementById('a6').value)
    
    if (dano < 1) {
        valores.splice(5, 1, 0)
    } else
    if (dano > 0 && dano < 5) {
        valores.splice(5, 1, (1/4))
    } else
    if (dano >= 5 && dano <= 8) {
        valores.splice(5, 1, (1/3))
    } else
    if (dano >= 9 && dano <= 12) {
        valores.splice(5, 1, (1/2))
    } else
    if (dano >= 13 && dano <= 17) {
        valores.splice(5, 1, 1)
    } else
    if (dano >= 18 && dano <= 22) {
        valores.splice(5, 1, 2)
    } else
    if (dano >= 23 && dano <= 27) {
        valores.splice(5, 1, 3)
    } else
    if (dano >= 28 && dano <= 32) {
        valores.splice(5, 1, 4)
    } else
    if (dano >= 33 && dano <= 37) {
        valores.splice(5, 1, 5)
    } else
    if (dano >= 38 && dano <= 42) {
        valores.splice(5, 1, 6)
    } else
    if (dano >= 43 && dano <= 47) {
        valores.splice(5, 1, 7)
    } else
    if (dano >= 48 && dano <= 52) {
        valores.splice(5, 1, 8)
    } else
    if (dano >= 53 && dano <= 57) {
        valores.splice(5, 1, 9)
    } else
    if (dano >= 58 && dano <= 62) {
        valores.splice(5, 1, 10)
    } else
    if (dano >= 63 && dano <= 67) {
        valores.splice(5, 1, 11)
    } else
    if (dano >= 68 && dano <= 72) {
        valores.splice(5, 1, 12)
    } else
    if (dano >= 73 && dano <= 77) {
        valores.splice(5, 1, 13)
    } else
    if (dano >= 78 && dano <= 82) {
        valores.splice(5, 1, 14)
    } else
    if (dano >= 83 && dano <= 87) {
        valores.splice(5, 1, 15)
    } else
    if (dano >= 88 && dano <= 92) {
        valores.splice(5, 1, 16)
    } else
    if (dano >= 93 && dano <= 97) {
        valores.splice(5, 1, 17)
    } else
    if (dano >= 98 && dano <= 102) {
        valores.splice(5, 1, 18)
    } else
    if (dano >= 103 && dano <= 107) {
        valores.splice(5, 1, 19)
    } else
    if (dano == 108) {
        valores.splice(5, 1, 20)
    }
}


function calc() {

    let nome = document.getElementById('c1').value;
    let divdir = document.getElementById('b1').value;





    
    




    if (document.getElementById("calcND_").checked == true) {  
        calcDef()
        calcRd()
        calcPV()
        calcAtk()
        calcCd()
        calcDano()

        var _ND_ = (valores[0] + valores[1] + valores[2] + valores[3] 
        + valores[4] + valores[5]) / divdir
        var XP_ = 0

        if (_ND_ >= 1) {
            _ND_ = Math.floor(_ND_);
            XP_ = (_ND_ * 300);
        } else {
            if (_ND_ >= (1/2)) {
                _ND_ = "(1/2)";
                XP_ = ((1/2) * 300);
            } else 
            if (_ND_ >= (1/3)) {
                _ND_ = "(1/3)";
                XP_ = ((1/3) * 300);
            } else 
            if (_ND_ >= (1/4)) {
                _ND_ = "(1/4)";
                XP_ = ((1/4) * 300);
            } else {
                _ND_ = "Muito Fraco";
                XP_ = "Nenhum";
            }
        }


        let res = document.createElement('p')
        document.getElementById('resultados').appendChild(res);
        res.style.textShadow = "blue 1px 1px 10px"
        res.textContent = nome + " [ Def " + document.getElementById("a1").value + " / Rd " 
        + document.getElementById("a2").value + " / PV " + document.getElementById("a3").value 
        + " / Atk " + document.getElementById("a4").value + " / CD " 
        + document.getElementById("a5").value + " / Dano " + document.getElementById("a6").value
        + "]"

        let res_ = document.createElement('p')
        document.getElementById('resultados').appendChild(res_);
        res_.style.textShadow = "yellow 1px 1px 10px"
        res_.textContent = nome + " [ND" + _ND_ + 
        "   ///   XP (" + XP_ + ")]"
    }

    if (document.getElementById("calcPV_").checked == true) {
        let d1 = parseInt(document.getElementById("d1").value)
        let d2 = parseInt(document.getElementById("d2").value)
        let d3 = parseInt(document.getElementById("d3").value)
        let d4 = parseInt(document.getElementById("d4").value) 
        var _PV_ = ((d1 + d2) * d3) + d4

        let res1 = document.createElement('p')
        document.getElementById('resultados').appendChild(res1);
        res1.style.textShadow = "red 1px 1px 10px"
        res1.textContent = nome + " [PV: " + _PV_ + "]" 
    }

    if (document.getElementById("calcPM_").checked == true) {
        let e1 = parseInt(document.getElementById("e1").value)
        let e2 = parseInt(document.getElementById("e2").value)
        let e3 = parseInt(document.getElementById("e3").value)
        var _PM_ = (e1 * e2) + e3

        let res2 = document.createElement('p')
        document.getElementById('resultados').appendChild(res2);
        res2.style.textShadow = "lightseagreen 1px 1px 10px"
        res2.textContent = nome + " [PM: " + _PM_ + "]" 
    }

    if (document.getElementById("calcMod_").checked == true) {
        let f1 = parseInt(document.getElementById("f1").value);
        let f2 = parseInt(document.getElementById("f2").value);
        let f3 = parseInt(document.getElementById("f3").value);
        let f4 = parseInt(document.getElementById("f4").value);
        let f5 = parseInt(document.getElementById("f5").value);
        let f6 = parseInt(document.getElementById("f6").value);
        var modFor = Math.floor((f1 - 10) / 2)
        var modDes = Math.floor((f2 - 10) / 2)
        var modCon = Math.floor((f3 - 10) / 2)
        var modInt = Math.floor((f4 - 10) / 2)
        var modSab = Math.floor((f5 - 10) / 2)
        var modCar = Math.floor((f6 - 10) / 2)

        let res3 = document.createElement('p')
        document.getElementById('resultados').appendChild(res3);
        res3.style.textShadow = "orange 1px 1px 10px"
        res3.textContent = nome + " [For(" + modFor + ") / Des(" + modDes
        + ") / Con(" + modCon + ") / Int(" + modInt + ") / Sab(" + modSab + 
        ") / Car(" + modCar + ")]" 
    }

    if (document.getElementById("calcBTest_").checked == true) {
        let g1 = document.getElementById("g1").value;
        let g2 = parseInt(document.getElementById("g2").value);
        let g3 = parseInt(document.getElementById("g3").value);
        let g4 = document.getElementById("g4").checked
        let g5 = parseInt(document.getElementById("g5").value);
        var treino_ = 0;
        if (g4 == true) {
            if (g3 < 7) {
                treino_ = 2;
            } else
            if (g3 < 15) {
                treino_ = 4;
            } else {
                treino_ = 6;
            }
        }
        var resCalcTestB = g2 + Math.floor(g3/2) + treino_ + g5;
        let d20__ = 1+Math.floor(20*Math.random())

        let res4 = document.createElement('p')
        document.getElementById('resultados').appendChild(res4);
        res4.style.textShadow = "green 1px 1px 10px"
        res4.textContent = nome + "[ " + g1 + " +" + resCalcTestB + " ]"

        let res4_ = document.createElement('p')
        document.getElementById('resultados').appendChild(res4_);

        if (d20__ == 1) {
            res4_.style.textShadow = "red 1px 1px 10px"
        } else 
        if (d20__ == 20) {
            res4_.style.textShadow = "lime 1px 1px 10px"
        } else {
            res4_.style.textShadow = "gray 1px 1px 10px"
        }

        res4_.textContent = nome + "[ " + g1 + " (1d20 :[" + d20__ + "] + " 
        + resCalcTestB + " | " + (d20__ + resCalcTestB) + ")]"
    }

    if (document.getElementById("calcCD_").checked == true) {
        let h1 = parseInt(document.getElementById("h1").value)
        let h2 = parseInt(document.getElementById("h2").value)
        let h3 = parseInt(document.getElementById("h3").value)
        var calcCD__ = (10 + h1 + Math.floor(h2/2) + h3)

        let res4 = document.createElement('p')
        document.getElementById('resultados').appendChild(res4);
        res4.style.textShadow = "darkorchid 1px 1px 10px"
        res4.textContent = nome + "[CD( " + calcCD__ + " )]"
    }

}




function loop() {
    if (document.getElementById('c1').value == "") {
        document.getElementById('titulo1').textContent= "Calcular ND"
        document.getElementById('titulo2').textContent= "Calcular Vida"
        document.getElementById('titulo3').textContent= "Calcular Mana"
        document.getElementById('titulo4').textContent= "Calcular Modificador"
        document.getElementById('titulo5').textContent= "Calcular Bônus de Teste"
        document.getElementById('titulo6').textContent= "Calcular CD"

    }  else 
    {
        document.getElementById('titulo1').textContent= "Calcular ND (" 
        + document.getElementById('c1').value + ")"
        document.getElementById('titulo2').textContent= "Calcular Vida (" 
        + document.getElementById('c1').value + ")"
        document.getElementById('titulo3').textContent= "Calcular Mana (" 
        + document.getElementById('c1').value + ")"
        document.getElementById('titulo4').textContent= "Calcular Modificador (" 
        + document.getElementById('c1').value + ")"
        document.getElementById('titulo5').textContent= "Calcular Bônus de Teste (" 
        + document.getElementById('c1').value + ")"
        document.getElementById('titulo6').textContent= "Calcular CD (" 
        + document.getElementById('c1').value + ")"
    }

    if (document.getElementById("g4").checked == true) {
        document.getElementById("__g4").style.background = "gold"
        document.getElementById("__g4").style.border = "black 2px solid"
    }
    else {
        document.getElementById("__g4").style.background = "black"
        document.getElementById("__g4").style.border = "gold 2px solid"
    }

    if (document.getElementById("calcND_").checked == true) {
        document.getElementById("aa1").style.display = "block"
        document.getElementById("ab1").style.background = "yellow"
        document.getElementById("ab1").style.border = "black 2px solid"
    } else {
        document.getElementById("aa1").style.display = "none"
        document.getElementById("ab1").style.background = "black"
        document.getElementById("ab1").style.border = "yellow 2px solid"
    }

    if (document.getElementById("calcPV_").checked == true) {
        document.getElementById("aa2").style.display = "block"
        document.getElementById("ab2").style.background = "red"
        document.getElementById("ab2").style.border = "black 2px solid"
    } else {
        document.getElementById("aa2").style.display = "none"
        document.getElementById("ab2").style.background = "black"
        document.getElementById("ab2").style.border = "red 2px solid"
    }

    if (document.getElementById("calcPM_").checked == true) {
        document.getElementById("aa3").style.display = "block"
        document.getElementById("ab3").style.background = "lightseagreen"
        document.getElementById("ab3").style.border = "black 2px solid"
    } else {
        document.getElementById("aa3").style.display = "none"
        document.getElementById("ab3").style.background = "black"
        document.getElementById("ab3").style.border = "lightseagreen 2px solid"
    }

    if (document.getElementById("calcMod_").checked == true) {
        document.getElementById("aa4").style.display = "block"
        document.getElementById("ab4").style.background = "orange"
        document.getElementById("ab4").style.border = "black 2px solid"
    } else {
        document.getElementById("aa4").style.display = "none"
        document.getElementById("ab4").style.background = "black"
        document.getElementById("ab4").style.border = "orange 2px solid"
    }

    if (document.getElementById("calcBTest_").checked == true) {
        document.getElementById("aa5").style.display = "block"
        document.getElementById("ab5").style.background = "green"
        document.getElementById("ab5").style.border = "black 2px solid"
    } else {
        document.getElementById("aa5").style.display = "none"
        document.getElementById("ab5").style.background = "black"
        document.getElementById("ab5").style.border = "green 2px solid"
    }

    if (document.getElementById("calcCD_").checked == true) {
        document.getElementById("aa6").style.display = "block"
        document.getElementById("ab6").style.background = "darkorchid"
        document.getElementById("ab6").style.border = "black 2px solid"
    } else {
        document.getElementById("aa6").style.display = "none"
        document.getElementById("ab6").style.background = "black"
        document.getElementById("ab6").style.border = "darkorchid 2px solid"
    }

    setTimeout(loop, 1000/30);
}

loop()