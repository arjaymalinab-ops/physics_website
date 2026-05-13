function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

/* ELECTRIC CHARGE */
function calculateCharge() {
  let n = parseFloat(document.getElementById("n").value);

  let e = 1.6e-19;

  let Q = n * e;

  document.getElementById("chargeOutput").innerHTML = `
        <h3>Step-by-Step Solution</h3>

        <p>Formula: Q = ne</p>

        <p>Q = (${n}) (${e})</p>

        <p><strong>Answer: ${Q.toExponential(2)} C</strong></p>

        <hr>

        <p>
            The electric charge is calculated by multiplying the number of electrons by the charge of one electron.
        </p>
    `;
}

/* COULOMB */
function calculateCoulomb() {
  let q1 = parseFloat(document.getElementById("q1").value);
  let q2 = parseFloat(document.getElementById("q2").value);
  let r = parseFloat(document.getElementById("r").value);

  let k = 9e9;

  let F = (k * q1 * q2) / (r * r);

  document.getElementById("coulombOutput").innerHTML = `
        <h3>Step-by-Step Solution</h3>

        <p>Formula: F = kq₁q₂ / r²</p>

        <p>F = (${k} × ${q1} × ${q2}) / (${r}²)</p>

        <p><strong>Answer: ${F.toExponential(2)} N</strong></p>

        <hr>

        <p>
            Coulomb's Law calculates the electric force between two charges.
        </p>
    `;
}

/* ELECTRIC FIELD */
function calculateField() {
  let force = parseFloat(document.getElementById("force").value);
  let charge = parseFloat(document.getElementById("charge").value);

  let E = force / charge;

  document.getElementById("fieldOutput").innerHTML = `
        <h3>Step-by-Step Solution</h3>

        <p>Formula: E = F / q</p>

        <p>E = ${force} / ${charge}</p>

        <p><strong>Answer: ${E.toFixed(2)} N/C</strong></p>

        <hr>

        <p>
            Electric field is the force experienced per unit charge.
        </p>
    `;
}

/* OHM */
function calculateVoltage() {
  let current = parseFloat(document.getElementById("current").value);
  let resistance = parseFloat(document.getElementById("resistance").value);

  let V = current * resistance;

  document.getElementById("voltageOutput").innerHTML = `
        <h3>Step-by-Step Solution</h3>

        <p>Formula: V = IR</p>

        <p>V = ${current} × ${resistance}</p>

        <p><strong>Answer: ${V.toFixed(2)} Volts</strong></p>

        <hr>

        <p>
            Voltage is calculated by multiplying current and resistance.
        </p>
    `;
}

/* POWER */
function calculatePower() {
  let voltage = parseFloat(document.getElementById("voltagePower").value);
  let current = parseFloat(document.getElementById("currentPower").value);

  let P = voltage * current;

  document.getElementById("powerOutput").innerHTML = `
        <h3>Step-by-Step Solution</h3>

        <p>Formula: P = VI</p>

        <p>P = ${voltage} × ${current}</p>

        <p><strong>Answer: ${P.toFixed(2)} Watts</strong></p>

        <hr>

        <p>
            Electric power is calculated using voltage and current.
        </p>
    `;
}

/* RESISTANCE */
function calculateResistance() {
  let voltage = parseFloat(document.getElementById("voltageR").value);
  let current = parseFloat(document.getElementById("currentR").value);

  let R = voltage / current;

  document.getElementById("resistanceOutput").innerHTML = `
        <h3>Step-by-Step Solution</h3>

        <p>Formula: R = V / I</p>

        <p>R = ${voltage} / ${current}</p>

        <p><strong>Answer: ${R.toFixed(2)} Ω</strong></p>

        <hr>

        <p>
            Resistance is calculated by dividing voltage by current.
        </p>
    `;
}

/* MAGNETIC */
function calculateMagnetic() {
  let B = parseFloat(document.getElementById("B").value);
  let I = parseFloat(document.getElementById("I").value);
  let L = parseFloat(document.getElementById("L").value);
  let theta = parseFloat(document.getElementById("theta").value);

  let radians = theta * (Math.PI / 180);

  let F = B * I * L * Math.sin(radians);

  document.getElementById("magneticOutput").innerHTML = `
        <h3>Step-by-Step Solution</h3>

        <p>Formula: F = BIL sin θ</p>

        <p>F = ${B} × ${I} × ${L} × sin(${theta})</p>

        <p><strong>Answer: ${F.toFixed(2)} N</strong></p>

        <hr>

        <p>
            Magnetic force depends on magnetic field, current, conductor length, and angle.
        </p>
    `;
}

/* FILTER */
function filterProblems(category) {
  let cards = document.querySelectorAll(".problem-card");

  cards.forEach((card) => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      if (card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}
