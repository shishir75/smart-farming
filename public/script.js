/*******************************
 * Currency Data (ISO 4217 sample – extendable)
 *******************************/
const currencies = [
  { country: "Afghanistan", name: "Afghani", code: "AFN", symbol: "؋" },
  { country: "Albania", name: "Lek", code: "ALL", symbol: "L" },
  { country: "Algeria", name: "Dinar", code: "DZD", symbol: "دج" },
  { country: "Andorra", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Angola", name: "Kwanza", code: "AOA", symbol: "Kz" },
  { country: "Argentina", name: "Peso", code: "ARS", symbol: "$" },
  { country: "Armenia", name: "Dram", code: "AMD", symbol: "֏" },
  { country: "Australia", name: "Dollar", code: "AUD", symbol: "A$" },
  { country: "Austria", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Azerbaijan", name: "Manat", code: "AZN", symbol: "₼" },
  { country: "Bahamas", name: "Dollar", code: "BSD", symbol: "B$" },
  { country: "Bahrain", name: "Dinar", code: "BHD", symbol: ".د.ب" },
  { country: "Bangladesh", name: "Taka", code: "BDT", symbol: "Tk" },
  { country: "Barbados", name: "Dollar", code: "BBD", symbol: "Bds$" },
  { country: "Belarus", name: "Ruble", code: "BYN", symbol: "Br" },
  { country: "Belgium", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Belize", name: "Dollar", code: "BZD", symbol: "BZ$" },
  { country: "Benin", name: "West African CFA franc", code: "XOF", symbol: "CFA" },
  { country: "Bhutan", name: "Ngultrum", code: "BTN", symbol: "Nu." },
  { country: "Bolivia", name: "Boliviano", code: "BOB", symbol: "Bs." },
  { country: "Bosnia and Herzegovina", name: "Convertible Mark", code: "BAM", symbol: "KM" },
  { country: "Botswana", name: "Pula", code: "BWP", symbol: "P" },
  { country: "Brazil", name: "Real", code: "BRL", symbol: "R$" },
  { country: "Brunei", name: "Dollar", code: "BND", symbol: "B$" },
  { country: "Bulgaria", name: "Lev", code: "BGN", symbol: "лв" },
  { country: "Burundi", name: "Franc", code: "BIF", symbol: "FBu" },
  { country: "Cambodia", name: "Riel", code: "KHR", symbol: "៛" },
  { country: "Cameroon", name: "Central African CFA franc", code: "XAF", symbol: "FCFA" },
  { country: "Canada", name: "Dollar", code: "CAD", symbol: "C$" },
  { country: "Chile", name: "Peso", code: "CLP", symbol: "$" },
  { country: "China", name: "Yuan Renminbi", code: "CNY", symbol: "¥" },
  { country: "Colombia", name: "Peso", code: "COP", symbol: "$" },
  { country: "Comoros", name: "Franc", code: "KMF", symbol: "CF" },
  { country: "Congo (DRC)", name: "Congolese Franc", code: "CDF", symbol: "FC" },
  { country: "Costa Rica", name: "Colón", code: "CRC", symbol: "₡" },
  { country: "Croatia", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Cuba", name: "Peso", code: "CUP", symbol: "₱" },
  { country: "Czech Republic", name: "Koruna", code: "CZK", symbol: "Kč" },
  { country: "Denmark", name: "Krone", code: "DKK", symbol: "kr" },
  { country: "Dominican Republic", name: "Peso", code: "DOP", symbol: "RD$" },
  { country: "Egypt", name: "Pound", code: "EGP", symbol: "£" },
  { country: "Ethiopia", name: "Birr", code: "ETB", symbol: "Br" },
  { country: "European Union", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Fiji", name: "Dollar", code: "FJD", symbol: "FJ$" },
  { country: "Gambia", name: "Dalasi", code: "GMD", symbol: "D" },
  { country: "Georgia", name: "Lari", code: "GEL", symbol: "₾" },
  { country: "Ghana", name: "Cedi", code: "GHS", symbol: "₵" },
  { country: "Guatemala", name: "Quetzal", code: "GTQ", symbol: "Q" },
  { country: "Haiti", name: "Gourde", code: "HTG", symbol: "G" },
  { country: "Honduras", name: "Lempira", code: "HNL", symbol: "L" },
  { country: "Hong Kong", name: "Dollar", code: "HKD", symbol: "HK$" },
  { country: "Hungary", name: "Forint", code: "HUF", symbol: "Ft" },
  { country: "Iceland", name: "Krona", code: "ISK", symbol: "kr" },
  { country: "India", name: "Rupee", code: "INR", symbol: "₹" },
  { country: "Indonesia", name: "Rupiah", code: "IDR", symbol: "Rp" },
  { country: "Iran", name: "Rial", code: "IRR", symbol: "﷼" },
  { country: "Iraq", name: "Dinar", code: "IQD", symbol: "ع.د" },
  { country: "Israel", name: "Shekel", code: "ILS", symbol: "₪" },
  { country: "Italy", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Jamaica", name: "Dollar", code: "JMD", symbol: "J$" },
  { country: "Japan", name: "Yen", code: "JPY", symbol: "¥" },
  { country: "Jordan", name: "Dinar", code: "JOD", symbol: "JD" },
  { country: "Kazakhstan", name: "Tenge", code: "KZT", symbol: "₸" },
  { country: "Kenya", name: "Shilling", code: "KES", symbol: "KSh" },
  { country: "Korea (South)", name: "Won", code: "KRW", symbol: "₩" },
  { country: "Korea (North)", name: "Won", code: "KPW", symbol: "₩" },
  { country: "Kuwait", name: "Dinar", code: "KWD", symbol: "KD" },
  { country: "Kyrgyzstan", name: "Som", code: "KGS", symbol: "лв" },
  { country: "Laos", name: "Kip", code: "LAK", symbol: "₭" },
  { country: "Latvia", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Lebanon", name: "Pound", code: "LBP", symbol: "ل.ل" },
  { country: "Lesotho", name: "Loti", code: "LSL", symbol: "L" },
  { country: "Liberia", name: "Dollar", code: "LRD", symbol: "L$" },
  { country: "Libya", name: "Dinar", code: "LYD", symbol: "ل.د" },
  { country: "Lithuania", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Luxembourg", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Madagascar", name: "Ariary", code: "MGA", symbol: "Ar" },
  { country: "Malawi", name: "Kwacha", code: "MWK", symbol: "MK" },
  { country: "Malaysia", name: "Ringgit", code: "MYR", symbol: "RM" },
  { country: "Maldives", name: "Rufiyaa", code: "MVR", symbol: "Rf" },
  { country: "Mali", name: "West African CFA franc", code: "XOF", symbol: "CFA" },
  { country: "Mauritius", name: "Rupee", code: "MUR", symbol: "Rs" },
  { country: "Mexico", name: "Peso", code: "MXN", symbol: "Mex$" },
  { country: "Moldova", name: "Leu", code: "MDL", symbol: "L" },
  { country: "Mongolia", name: "Tugrik", code: "MNT", symbol: "₮" },
  { country: "Morocco", name: "Dirham", code: "MAD", symbol: "DH" },
  { country: "Mozambique", name: "Metical", code: "MZN", symbol: "MT" },
  { country: "Myanmar", name: "Kyat", code: "MMK", symbol: "K" },
  { country: "Namibia", name: "Dollar", code: "NAD", symbol: "N$" },
  { country: "Nepal", name: "Rupee", code: "NPR", symbol: "Rs" },
  { country: "Netherlands", name: "Euro", code: "EUR", symbol: "€" },
  { country: "New Zealand", name: "Dollar", code: "NZD", symbol: "NZ$" },
  { country: "Nigeria", name: "Naira", code: "NGN", symbol: "₦" },
  { country: "Norway", name: "Krone", code: "NOK", symbol: "kr" },
  { country: "Oman", name: "Rial", code: "OMR", symbol: "﷼" },
  { country: "Pakistan", name: "Rupee", code: "PKR", symbol: "Rs" },
  { country: "Panama", name: "Balboa", code: "PAB", symbol: "B/." },
  { country: "Papua New Guinea", name: "Kina", code: "PGK", symbol: "K" },
  { country: "Paraguay", name: "Guarani", code: "PYG", symbol: "₲" },
  { country: "Peru", name: "Sol", code: "PEN", symbol: "S/." },
  { country: "Philippines", name: "Peso", code: "PHP", symbol: "₱" },
  { country: "Poland", name: "Zloty", code: "PLN", symbol: "zł" },
  { country: "Portugal", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Qatar", name: "Rial", code: "QAR", symbol: "﷼" },
  { country: "Romania", name: "Leu", code: "RON", symbol: "lei" },
  { country: "Russia", name: "Ruble", code: "RUB", symbol: "₽" },
  { country: "Rwanda", name: "Franc", code: "RWF", symbol: "FRw" },
  { country: "Saudi Arabia", name: "Riyal", code: "SAR", symbol: "﷼" },
  { country: "Serbia", name: "Dinar", code: "RSD", symbol: "din" },
  { country: "Seychelles", name: "Rupee", code: "SCR", symbol: "₨" },
  { country: "Singapore", name: "Dollar", code: "SGD", symbol: "S$" },
  { country: "Slovakia", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Slovenia", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Somalia", name: "Shilling", code: "SOS", symbol: "Sh.So." },
  { country: "South Africa", name: "Rand", code: "ZAR", symbol: "R" },
  { country: "Spain", name: "Euro", code: "EUR", symbol: "€" },
  { country: "Sri Lanka", name: "Rupee", code: "LKR", symbol: "Rs" },
  { country: "Sudan", name: "Pound", code: "SDG", symbol: "ج.س." },
  { country: "Sweden", name: "Krona", code: "SEK", symbol: "kr" },
  { country: "Switzerland", name: "Franc", code: "CHF", symbol: "CHF" },
  { country: "Syria", name: "Pound", code: "SYP", symbol: "£S" },
  { country: "Taiwan", name: "Dollar", code: "TWD", symbol: "NT$" },
  { country: "Tanzania", name: "Shilling", code: "TZS", symbol: "TSh" },
  { country: "Thailand", name: "Baht", code: "THB", symbol: "฿" },
  { country: "Tunisia", name: "Dinar", code: "TND", symbol: "د.ت" },
  { country: "Turkey", name: "Lira", code: "TRY", symbol: "₺" },
  { country: "Uganda", name: "Shilling", code: "UGX", symbol: "USh" },
  { country: "Ukraine", name: "Hryvnia", code: "UAH", symbol: "₴" },
  { country: "United Arab Emirates", name: "Dirham", code: "AED", symbol: "د.إ" },
  { country: "United Kingdom", name: "Pound Sterling", code: "GBP", symbol: "£" },
  { country: "United States", name: "Dollar", code: "USD", symbol: "$" },
  { country: "Uruguay", name: "Peso", code: "UYU", symbol: "$U" },
  { country: "Uzbekistan", name: "Som", code: "UZS", symbol: "лв" },
  { country: "Venezuela", name: "Bolívar", code: "VES", symbol: "Bs.S" },
  { country: "Vietnam", name: "Dong", code: "VND", symbol: "₫" },
  { country: "Yemen", name: "Rial", code: "YER", symbol: "﷼" },
  { country: "Zambia", name: "Kwacha", code: "ZMW", symbol: "ZK" },
  { country: "Zimbabwe", name: "Dollar", code: "ZWL", symbol: "Z$" }
];


// Global state for selected currency
let currentCurrency = { code: "USD", symbol: "$" };

// Populate dropdown on page load
window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("currencySelect");
  currencies
    .sort((a, b) => a.country.localeCompare(b.country))
    .forEach(cur => {
      const option = document.createElement("option");
      option.value = cur.code;
      option.textContent = `${cur.country} – ${cur.name} (${cur.code})`;
      if (cur.code === "USD") option.selected = true;
      select.appendChild(option);
    });
  select.addEventListener("change", (e) => {
    const selected = currencies.find(c => c.code === e.target.value);
    currentCurrency = selected || { code: "USD", symbol: "$" };
    updateTotals(); // refresh totals with new currency
  });
});






/*******************************
 * Labels & DOM handles
 *******************************/
const benefitLabels = [
  "Extra Income from Increased Crop Yields",
  "Savings from Fertilizer, Water, Labour, etc.",
  "Subsidies, Grants, or Financial Support",
  "Other financial gains"
];

const costLabels = [
  "Purchase or Maintenance of equipment/sensors",
  "Labour or Management Costs",
  "Electricity or Internet Costs",
  "Other Costs"
];

const lifetimeInput = document.getElementById("projectLifetime");
const yearlyInputsDiv = document.getElementById("yearlyInputs");
const totalBenefitsSpan = document.getElementById("totalBenefits");
const totalCostsSpan = document.getElementById("totalCosts");
const downloadPdfBtn = document.getElementById("downloadPdfBtn");

// Chart instance holder
let cashflowChart = null;

// Shared cache so Report and PDF use the exact same AI text
let currentNarratives = null; // { overview, analysis[], conclusion }
let currentMetrics = null;    // snapshot of inputs+metrics used to create the narratives

/*******************************
 * Utils (formatters)
 *******************************/
const fmt2  = n => (isFinite(n) ? Number(n).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2}) : String(n));
const money = n => `${currentCurrency.code} ${fmt2(n)}`;
const pct   = n => `${fmt2(n)} %`;
function cleanListItem(text) {
  // Remove any leading numbers and dots, e.g. "1. " or "2. "
  return text.replace(/^\s*\d+\.\s*/, "");
}


// Register Chart.js annotation plugin if available
(function registerChartPlugins() {
  try {
    if (window.Chart && window["chartjs-plugin-annotation"]) {
      Chart.register(window["chartjs-plugin-annotation"]);
    }
  } catch (_) {}
})();

/*********************************
 * Dynamic yearly input rendering
 *********************************/
lifetimeInput.addEventListener("input", function () {
  const years = parseInt(lifetimeInput.value);
  yearlyInputsDiv.innerHTML = "";
  totalBenefitsSpan.textContent = "0";
  totalCostsSpan.textContent = "0";

  if (!isNaN(years) && years > 0) {
    for (let y = 1; y <= years; y++) {
      const yearDiv = document.createElement("div");
      yearDiv.className = "year-section";

      const rowDiv = document.createElement("div");
      rowDiv.className = "row";

      const benefitsCol = document.createElement("div");
      benefitsCol.className = "column";
      benefitsCol.innerHTML = `<div class="section-title">Benefits (Cash Inflows) - Year ${y}</div>`;
      benefitLabels.forEach((label, idx) => {
        benefitsCol.innerHTML += `
          <div class="input-group-inner">
            <label for="benefit_${y}_${idx}">${label}</label>
            <input type="number" id="benefit_${y}_${idx}" min="0" step="any" data-year="${y}" data-type="benefit" required />
          </div>`;
      });

      const costsCol = document.createElement("div");
      costsCol.className = "column";
      costsCol.innerHTML = `<div class="section-title">Costs (Cash Outflows) - Year ${y}</div>`;
      costLabels.forEach((label, idx) => {
        costsCol.innerHTML += `
          <div class="input-group-inner">
            <label for="cost_${y}_${idx}">${label}</label>
            <input type="number" id="cost_${y}_${idx}" min="0" step="any" data-year="${y}" data-type="cost" required />
          </div>`;
      });

      rowDiv.appendChild(benefitsCol);
      rowDiv.appendChild(costsCol);
      yearDiv.appendChild(rowDiv);
      yearlyInputsDiv.appendChild(yearDiv);
    }
    addBenefitCostListeners();
  }
});

function addBenefitCostListeners() {
  const inputs = yearlyInputsDiv.querySelectorAll('input[data-type="benefit"], input[data-type="cost"]');
  inputs.forEach(input => input.addEventListener("input", updateTotals));
}

function updateTotals() {
  let totalBenefits = 0;
  let totalCosts = 0;

  const inputs = yearlyInputsDiv.querySelectorAll('input[data-type="benefit"], input[data-type="cost"]');
  inputs.forEach(input => {
    const val = parseFloat(input.value);
    if (!isNaN(val)) {
      if (input.dataset.type === "benefit") totalBenefits += val;
      else if (input.dataset.type === "cost") totalCosts += val;
    }
  });

  const upfront = parseFloat(document.getElementById("upfrontInvestment").value) || 0;

  totalBenefitsSpan.textContent = money(totalBenefits);
  totalCostsSpan.textContent = money(totalCosts + upfront);


}

/*******************************
 * Financial metric calculators
 *******************************/
function calculateROI(totalNetReturn, upfrontInvestment) {
  if (upfrontInvestment === 0) return 0;
  return (totalNetReturn / upfrontInvestment) * 100;
}

// NPV/BCR with time-0 upfront and end-of-year flows (t = 0..N)
function calculateNPV(benefits, costs, discountRate) {
  const r = discountRate / 100;
  let npv = 0;
  for (let t = 0; t < benefits.length; t++) {
    npv += (benefits[t] - costs[t]) / Math.pow(1 + r, t);
  }
  return npv;
}

function calculateBCR(benefits, costs, discountRate) {
  const r = discountRate / 100;
  let pvBenefits = 0;
  let pvCosts = 0;
  for (let t = 0; t < benefits.length; t++) {
    pvBenefits += benefits[t] / Math.pow(1 + r, t);
    pvCosts += costs[t] / Math.pow(1 + r, t);
  }
  if (pvCosts === 0) return Infinity;
  return pvBenefits / pvCosts;
}

// IRR with time-0 upfront and end-of-year flows
function calculateIRRNewton(benefits, costs, initialGuess = 0.1, tolerance = 1e-10, maxIterations = 1000) {
  let r = initialGuess;
  function npv(rate) {
    let total = 0;
    for (let t = 0; t < benefits.length; t++) {
      total += (benefits[t] - costs[t]) / Math.pow(1 + rate, t);
    }
    return total;
  }
  function dnpv(rate) {
    let total = 0;
    for (let t = 0; t < benefits.length; t++) {
      total += -t * (benefits[t] - costs[t]) / Math.pow(1 + rate, t + 1);
    }
    return total;
  }
  for (let i = 0; i < maxIterations; i++) {
    const value = npv(r);
    const deriv = dnpv(r);
    if (deriv === 0) break;
    const newR = r - value / deriv;
    if (Math.abs(newR - r) < tolerance) return newR * 100;
    r = newR;
    if (r <= -1) break;
  }
  return null;
}

function calculateIRRBisection(benefits, costs, low = -0.9999, high = 10, tolerance = 1e-7, maxIterations = 1000) {
  function npv(rate) {
    let total = 0;
    for (let t = 0; t < benefits.length; t++) {
      total += (benefits[t] - costs[t]) / Math.pow(1 + rate, t);
    }
    return total;
  }
  let npvLow = npv(low);
  let npvHigh = npv(high);
  if (npvLow * npvHigh > 0) return null;
  for (let i = 0; i < maxIterations; i++) {
    const mid = (low + high) / 2;
    const npvMid = npv(mid);
    if (Math.abs(npvMid) < tolerance) return mid * 100;
    if (npvLow * npvMid < 0) {
      high = mid;
      npvHigh = npvMid;
    } else {
      low = mid;
      npvLow = npvMid;
    }
  }
  return null;
}

function calculateIRR(benefits, costs) {
  const guesses = [0.01, 0.05, 0.1, 0.2, 0.3, 0.5];
  for (const g of guesses) {
    const irr = calculateIRRNewton(benefits, costs, g);
    if (irr !== null) return irr;
  }
  const alt = calculateIRRBisection(benefits, costs);
  return alt !== null ? alt : null;
}

/**********************
 * Payback & cumulative
 **********************/
function computeCumulative(benefits, costs) {
  const cum = [];
  for (let t = 0; t < benefits.length; t++) {
    const net = benefits[t] - costs[t];
    cum[t] = (t === 0) ? net : cum[t - 1] + net;
  }
  return cum;
}

/* Fractional year where cumulative crosses >= 0 (t=0..N, Year 0 exists) */
function estimatePaybackT(cumulative, benefits, costs) {
  for (let t = 1; t < cumulative.length; t++) {
    if (cumulative[t - 1] < 0 && cumulative[t] >= 0) {
      const prev = cumulative[t - 1];
      const flow = (benefits[t] - costs[t]);
      if (flow === 0) return t;
      const fraction = (-prev) / flow;
      return (t - 1) + fraction; // measured from time 0
    }
  }
  return null;
}

/* Unified payback (years from today, time 0). */
function calculatePaybackFromSeries(benefits, costs) {
  const cumulative = computeCumulative(benefits, costs);
  const t = estimatePaybackT(cumulative, benefits, costs);
  return t === null ? Infinity : t;
}


// --- NEW: Discounted Payback Period (uses discountRate %) ---
function calculateDiscountedPayback(benefits, costs, discountRatePct) {
  const r = discountRatePct / 100;
  let cum = 0;

  // t = 0..N (Year 0 exists; only t>=1 has end-of-year operating flows)
  for (let t = 0; t < benefits.length; t++) {
    const netDisc = (benefits[t] - costs[t]) / Math.pow(1 + r, t);
    const prevCum = cum;
    cum += netDisc;

    // crossing from negative to >= 0 occurs within year t
    if (t >= 1 && prevCum < 0 && cum >= 0) {
      // fraction of year needed within year t
      const flow = netDisc;
      if (flow === 0) return t; // degenerate
      const fraction = (-prevCum) / flow;
      return (t - 1) + fraction; // measured from time 0
    }
  }
  return Infinity; // never pays back within the horizon
}





/********************
 * Chart rendering (starts at Year 1; Year 0 hidden visually)
 ********************/
function renderCashflowChart(benefits, costs, discountRate) {
  if (!window.Chart) return;

  const labels = benefits.slice(1).map((_, i) => `Year ${i + 1}`);
  const benefitsPlot = benefits.slice(1);
  const costsPlot = costs.slice(1);

  const cumulativeFull = computeCumulative(benefits, costs);
  const cumulativePlot = cumulativeFull.slice(1);

  const paybackT = calculatePaybackFromSeries(benefits, costs);
  let paybackX = null;
  if (isFinite(paybackT)) paybackX = Math.max(0, paybackT - 1);


  // NEW: Discounted payback (needs the function you added earlier)
  const dpbT = calculateDiscountedPayback(benefits, costs, discountRate);
  let dpbX = null;
  if (isFinite(dpbT)) dpbX = Math.max(0, dpbT - 1)


  const canvasEl = document.getElementById('cashflowChart');
  if (!canvasEl) return;

  const ctx = canvasEl.getContext('2d');
  if (cashflowChart) cashflowChart.destroy();

  const annotation =
      window["chartjs-plugin-annotation"]
        ? {
            annotations: {
              // Undiscounted payback
              ...(paybackX !== null
                ? {
                    paybackLine: {
                      type: 'line',
                      xMin: paybackX,
                      xMax: paybackX,
                      borderWidth: 2,
                      borderDash: [6, 6],
                      borderColor: 'rgba(0,0,0,0.6)',
                      label: {
                        display: true,
                        content: `Undiscounted Payback ≈ ${paybackT.toFixed(2)} yrs`,
                        position: 'start',
                        yAdjust: -30,   // move label up a bit
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        color: '#111',
                        padding: 4
                      }
                    }
                  }
                : {}),
              // Discounted payback
              ...(dpbX !== null
                ? {
                    dpbLine: {
                      type: 'line',
                      xMin: dpbX,
                      xMax: dpbX,
                      borderWidth: 2,
                      borderDash: [8, 6],
                      borderColor: 'rgba(16,185,129,0.9)', // teal/green
                      label: {
                        display: true,
                        content: `Discounted Payback ≈ ${dpbT.toFixed(2)} yrs`,
                        position: 'start',
                        yAdjust: -200,   // move label up a huge bit
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        color: '#065f46',
                        padding: 4
                      }
                    }
                  }
                : {})
            }
          }
        : {};

  cashflowChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          type: 'bar',
          label: 'Benefits (Inflows)',
          data: benefitsPlot,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          type: 'bar',
          label: 'Costs (Outflows)',
          data: costsPlot,
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        },
        {
          type: 'line',
          label: 'Cumulative Net Cash Flow',
          data: cumulativePlot,
          yAxisID: 'y1',
          tension: 0.25,
          borderColor: 'rgba(255, 159, 64, 1)',
          backgroundColor: 'rgba(255, 159, 64, 0.4)',
          pointRadius: 3,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 350 },
      interaction: { mode: 'index', intersect: false },
      plugins: {
        title: { display: true, text: 'Year‑wise Benefits, Costs & Payback (Undiscounted & Discounted)' },
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label(ctx) {
              const val = Number(ctx.raw);
              const name = ctx.dataset.label || '';
              return `${name}: ${money(val)}`;
            }
          }
        },
        annotation
      },
      scales: {
        y: {
          title: { display: true, text: `Yearly Amount (${currentCurrency.code})` },
        beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' }
        },
        y1: {
          position: 'right',
          title: { display: true, text: `Cumulative (${currentCurrency.code})` },
          grid: { drawOnChartArea: false },
          beginAtZero: true
        },
        x: { grid: { display: false } }
      }
    }
  });
}

/********************
 * Build series + metrics (single source of truth)
 ********************/
function buildSeriesAndMetrics() {
  const upfrontInvestment = parseFloat(document.getElementById("upfrontInvestment").value);
  const projectLifetime   = parseInt(document.getElementById("projectLifetime").value);
  const discountRate      = parseFloat(document.getElementById("discountRate").value);

  if (isNaN(upfrontInvestment) || isNaN(projectLifetime) || isNaN(discountRate)) {
    throw new Error("Please fill in all main inputs correctly.");
  }

  const chartNote = document.getElementById("chartNote");
  if (chartNote) {
    chartNote.textContent = `Note: Initial investment of ${money(upfrontInvestment)} occurs at year 0 and is not shown in the bars below.`;
  }

  const benefits = Array(projectLifetime + 1).fill(0);
  const costs    = Array(projectLifetime + 1).fill(0);
  costs[0] = upfrontInvestment; // time 0

  for (let y = 1; y <= projectLifetime; y++) {
    let b = 0, c = 0;
    for (let i = 0; i < benefitLabels.length; i++) {
      b += parseFloat(document.getElementById(`benefit_${y}_${i}`)?.value) || 0;
    }
    for (let i = 0; i < costLabels.length; i++) {
      c += parseFloat(document.getElementById(`cost_${y}_${i}`)?.value) || 0;
    }
    benefits[y] = b; costs[y] = c;
  }


  // Totals for header (Years 1..N + upfront cost for total costs)
  let sumBenefits = 0, sumCosts = costs[0];  // start with upfront
  for (let i = 1; i <= projectLifetime; i++) {
    sumBenefits += benefits[i];
    sumCosts += costs[i];
  }
  totalBenefitsSpan.textContent = money(sumBenefits);
  totalCostsSpan.textContent    = money(sumCosts);


  // Metrics (Years 1..N totals; include Year 0 in discounted series)
  const totalNetReturn = benefits.slice(1).reduce((a,b,i)=>a+(b - costs[i+1]), 0);
  const roi     = calculateROI(totalNetReturn, upfrontInvestment);
  const payback = calculatePaybackFromSeries(benefits, costs);
  const discountedPayback = calculateDiscountedPayback(benefits, costs, discountRate); // --- NEW ---
  const npv     = calculateNPV(benefits, costs, discountRate);
  const irr     = calculateIRR(benefits, costs);
  const bcr     = calculateBCR(benefits, costs, discountRate);

  return {
    upfrontInvestment, projectLifetime, discountRate,
    benefits, costs,
    roi, payback, 
    discountedPayback, // --- NEW ---
    npv, irr, bcr
  };
}

/********************
 * Main calculation + render cards + chart
 ********************/
function calculateAll() {
  try {
    downloadPdfBtn.style.display = "none";

    const M = buildSeriesAndMetrics();

    // UI cards
    document.getElementById("roiResult").textContent     = fmt2(M.roi) + " %";
    document.getElementById("paybackResult").textContent = (isFinite(M.payback) ? fmt2(M.payback) : "No payback") + " Years";
    
    // --- NEW: Discounted payback card, if present ---
    const dpbEl = document.getElementById("dpbResult");
    if (dpbEl) {
      dpbEl.textContent = (isFinite(M.discountedPayback) ? fmt2(M.discountedPayback) : "No payback") + " Years";
    }

    document.getElementById("npvResult").textContent     = money(M.npv);
    document.getElementById("irrResult").textContent     = M.irr !== null ? fmt2(M.irr) + " %" : "IRR calculation did not converge";
    document.getElementById("bcrResult").textContent     = fmt2(M.bcr);

    const profitabilityElem = document.getElementById("profitabilityResult");
    if (M.bcr > 1) {
      profitabilityElem.textContent = "Profitable";
      profitabilityElem.className = "card-value profitable";
    } else {
      profitabilityElem.textContent = "Not Profitable";
      profitabilityElem.className = "card-value not-profitable";
    }

    document.getElementById("results").style.display = "flex";

    // Draw chart (Years 1..N)
    renderCashflowChart(M.benefits, M.costs, M.discountRate);

    // Invalidate old narratives when inputs changed
    currentNarratives = null;
    currentMetrics = null;

  } catch (err) {
    alert(err.message || err);
  }
}

/*******************************
 * OpenAI — Easy-English narratives (single source)
 *******************************/

// API Key was here

async function fetchNarrativesEasyEnglish(M, chartPNG) {
  try {
    // Build the yearly breakdown from benefits & costs
    const yearlyLines = M.benefits.map((b, i) => {
      const label = (i === 0) ? "Initial Investment" : `Year ${i}`;
      return `${label}: Benefits ${money(b)}, Costs ${money(M.costs[i])}`;
    }).join('\n');

    // Prompt for GPT-5-mini
    const prompt = `
        Project Metrics:
        ROI: ${M.roi}%
        NPV: ${money(M.npv)}
        IRR: ${M.irr}%
        BCR: ${M.bcr}
        Undiscounted Payback: ${M.paybackUndiscounted} years
        Discounted Payback: ${M.paybackDiscounted} years

        Yearly Details: ${yearlyLines}
    `;

    const body = {
      model: "gpt-5-mini",
      messages: [
        {
          role: "system",
          content: `You are a financial analyst. Write in VERY EASY English for farmers. Use friendly, short sentences and simple words. Always respond ONLY in valid JSON with this structure:
            {
              "overview": "short easy sentences, include a short summary of the numbers (Return on Investemnt (ROI), Undiscounted Payback Period, Discounted Payback Period, Net Present Value (NPV), Internal Rate of Return (IRR), Benefit-Cost Ratio (BCR)) in simple words in a descriptive way in 5-6 simple sentences.",
              "analysis": [
                "<strong class='metric-name' style='color:blue;'>ROI</strong> — <em class='explanation'>4–5 short sentences in easy English. Explain what the number means, why it matters for the farm, and any caution if needed</em>",
                "<strong class='metric-name' style='color:blue;'>Undiscounted Payback Period</strong> — <em class='explanation'>4–5 short sentences in easy English. Explain what the number means, why it matters for the farm, and any caution if needed</em>",
                "<strong class='metric-name' style='color:blue;'>Discounted Payback Period</strong> — <em class='explanation'>4–5 short sentences in easy English. Explain what the number means, why it matters for the farm, and any caution if needed</em>",
                "<strong class='metric-name' style='color:blue;'>NPV</strong> — <em class='explanation'>4–5 short sentences in easy English. Explain what the number means, why it matters for the farm, and any caution if needed</em>",
                "<strong class='metric-name' style='color:blue;'>IRR</strong> — <em class='explanation'>4–5 short sentences in easy English. Explain what the number means, why it matters for the farm, and any caution if needed</em>",
                "<strong class='metric-name' style='color:blue;'>BCR</strong> — <em class='explanation'>4–5 short sentences in easy English. Explain what the number means, why it matters for the farm, and any caution if needed</em>"
              ],
              "chartExplanation": "one friendly paragraph in 5-6 farmers friendly easy sentences that explains the attached chart including benefits, costs bars, cumulative line, undiscounted payback and discounted payback.",
              "conclusion": "short conclusion making a conclusion like dicision support system for the investemnt in easy English"
            }`
        },
        { role: "user", content: prompt },
        ...(chartPNG ? [{
          role: "user",
          content: [
            { type: "text", text: "Here is the Cash Flow Chart image to describe:" },
            { type: "image_url", image_url: { url: chartPNG } }
          ]
        }] : [])
      ],
    };

    // Call your backend (no API key here!)
    const res = await fetch("http://localhost:3000/api/openai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || "AI server error");
    }

    const { text } = await res.json();

    // Try to parse JSON safely
    let jsonStart = text.indexOf("{");
    let jsonEnd = text.lastIndexOf("}");
    if (jsonStart !== -1 && jsonEnd !== -1) {
      try {
        const obj = JSON.parse(text.slice(jsonStart, jsonEnd + 1));
        return {
          overview: String(obj.overview || ""),
          analysis: Array.isArray(obj.analysis) ? obj.analysis.map(String) : [],
          chartExplanation: String(obj.chartExplanation || ""),
          conclusion: String(obj.conclusion || "")
        };
      } catch (e) {
        console.warn("JSON parse failed, returning raw text");
        return {
          overview: text,
          analysis: [],
          chartExplanation: "",
          conclusion: ""
        };
      }
    } else {
      console.warn("No JSON found, returning raw text");
      return {
        overview: text,
        analysis: [],
        chartExplanation: "",
        conclusion: ""
      };
    }

  } catch (e) {
    console.error("AI fetch failed:", e);
    return {
      overview: "⚠️ Unable to generate narrative analysis right now.",
      analysis: [],
      chartExplanation: "",
      conclusion: ""
    };
  }
}


/*******************************
 * On‑page HTML Report (uses SAME AI text)
 *******************************/

async function generateAndShowReport() {
  // SHOW loading message + (optional) disable the Generate button
  const loadingEl = document.getElementById('loadingMessage');
  if (loadingEl) {
    loadingEl.textContent = 'Generating report...';
    loadingEl.style.display = 'block';
  }
  const btn = document.getElementById('generateReportBtn'); // only if your button has this id
  if (btn) {
    btn.disabled = true;
    btn.dataset._oldText = btn.textContent;
    btn.textContent = 'Generating...';
  }

  try {
    downloadPdfBtn.style.display = "none";

    // ----- your existing code stays the same from here -----
    const M = buildSeriesAndMetrics();
    const chartPNG = getChartPNG(2); // canvas -> data URL

    const signature = JSON.stringify({
      upf: M.upfrontInvestment, life: M.projectLifetime, disc: M.discountRate,
      b: M.benefits, c: M.costs
    });

    if (!currentMetrics || currentMetrics.signature !== signature) {
      currentNarratives = await fetchNarrativesEasyEnglish(M, chartPNG);
      currentMetrics = { signature, ...M };
    }

    let yearlyRows = M.benefits.map((b,i)=>`
      <tr>
        <td>${i===0?'Initial Investement':`Year ${i}`}</td>
        <td>${money(b)}</td>
        <td>${money(M.costs[i])}</td>
      </tr>
    `).join('');

    const totalBenefitsAll = M.benefits.reduce((a,v)=>a+(v||0),0);
    const totalCostsAll    = M.costs.reduce((a,v)=>a+(v||0),0);

    yearlyRows += `
      <tr style="font-weight:700; background:#f3f4f6;">
        <td>Total</td>
        <td>${money(totalBenefitsAll)}</td>
        <td>${money(totalCostsAll)}</td>
      </tr>
    `;

    const html = `
      <h1>Smart Farming Investment Feasibility Report</h1>

      <h2>Project Overview</h2>
      <p>${currentNarratives.overview || ''}</p>

      <h2>Financial Summary</h2>
      <table>
        <thead><tr><th>Initial Investement</th><th>Project Lifetime</th><th>Discount Rate</th></tr></thead>
        <tbody><tr><td>${money(M.upfrontInvestment)}</td><td>${M.projectLifetime} years</td><td>${fmt2(M.discountRate)} %</td></tr></tbody>
      </table>

      <h2>Yearly Benefits and Costs</h2>
      <table>
        <thead><tr><th>Year</th><th>Benefits</th><th>Costs</th></tr></thead>
        <tbody>${yearlyRows}</tbody>
      </table>

      <h2>Financial Metrics</h2>
      <table>
        <thead><tr><th>ROI (%)</th><th>Undiscounted Payback (years)</th> <th>Discounted Payback (years)</th> <th>NPV ($)</th><th>IRR (%)</th><th>BCR</th></tr></thead>
        <tbody>
          <tr>
            <td>${fmt2(M.roi)}</td>
            <td>${isFinite(M.payback)?fmt2(M.payback):'N/A'}</td>
            <td>${isFinite(M.discountedPayback)?fmt2(M.discountedPayback):'N/A'}</td>  <!-- NEW -->
            <td>${money(M.npv)}</td>
            <td>${M.irr===null?'N/A':fmt2(M.irr)}</td>
            <td>${fmt2(M.bcr)}</td>
          </tr>
        </tbody>
      </table>

      <h2>Analysis</h2>
      <ol>${(currentNarratives.analysis || [])
        .map(x => `<li>${cleanListItem(x)}</li>`)
        .join('')}
      </ol>


      <h2>Conclusion</h2>
      <p>${currentNarratives.conclusion || ''}</p>
    `;

    document.getElementById("reportSection").innerHTML = html;
    downloadPdfBtn.style.display = "inline-block";
    // ----- your existing code ends here -----

    const chartNarrDiv = document.getElementById('chartNarrative');
    if (chartNarrDiv) {
      chartNarrDiv.innerHTML = currentNarratives.chartExplanation
        ? `<p style="text-align:justify; font-weight:normal;">${currentNarratives.chartExplanation}</p>`
        : "";
    }

  } catch (error) {
    document.getElementById("reportSection").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    downloadPdfBtn.style.display = "none";
  } finally {
    // HIDE loading message + (optional) restore the button
    if (loadingEl) loadingEl.style.display = 'none';
    if (btn) {
      btn.disabled = false;
      btn.textContent = btn.dataset._oldText || 'Generate Report';
      delete btn.dataset._oldText;
    }
  }
}


/*********************************
 * PDF (text-based) with chart using pdfmake
 *********************************/

// Convert an analysis HTML bullet into pdfmake rich text spans
function analysisHtmlToPdfSpan(item) {
  if (!item || typeof item !== 'string') return { text: String(item || '') };
  const m = item.match(/<strong[^>]*>(.*?)<\/strong>.*?<em[^>]*>([\s\S]*?)<\/em>/i);
  if (m) {
    const metric = m[1].replace(/<[^>]+>/g, '').trim();
    const expl   = m[2].replace(/<[^>]+>/g, '').trim();
    return {
      text: [
        { text: metric, bold: true, color: '#0d6efd' },
        { text: ' — ' },
        { text: expl, italics: true }
      ]
    };
  }
  const plain = item.replace(/<[^>]+>/g, '');
  return { text: plain };
}




// Get a crisp PNG from the existing chart canvas
function getChartPNG(scale = 2) {
  const canvas = document.getElementById('cashflowChart');
  if (!canvas) return null;
  const off = document.createElement('canvas');
  off.width  = canvas.width  * scale;
  off.height = canvas.height * scale;
  const ctx = off.getContext('2d');
  ctx.scale(scale, scale);
  ctx.drawImage(canvas, 0, 0);
  return off.toDataURL('image/png');
}


function keepTogether(titleText, ...bodyNodes) {
  return {
    unbreakable: true,                  // <-- keeps the whole block together
    stack: [{ text: titleText, style: 'h2' }, ...bodyNodes],
    margin: [0, 0, 0, 8],
    alignment: 'justify'
  };
}




async function downloadPDF() {
  try {

    // Build metrics
    const M = buildSeriesAndMetrics();
    const signature = JSON.stringify({ upf:M.upfrontInvestment, life:M.projectLifetime, disc:M.discountRate, b:M.benefits, c:M.costs });

    if (!currentMetrics || currentMetrics.signature !== signature || !currentNarratives) {
      currentNarratives = await fetchNarrativesEasyEnglish(M, chartPNG);
      currentMetrics = { signature, ...M };
    }

    // Yearly table rows (PDF)
    const yearlyRows = [
      [{text:'Year', style:'thRow'}, {text:'Benefits', style:'thRow'}, {text:'Costs', style:'thRow'}],
      ...M.benefits.map((b, i) => [
        (i===0 ? 'Initial Investment' : `Year ${i}`),
        money(b), money(M.costs[i])
      ])
    ];

    // Totals including Year 0 in PDF
    const totalBenefitsAll = M.benefits.reduce((a,v)=>a+(v||0),0);
    const totalCostsAll    = M.costs.reduce((a,v)=>a+(v||0),0);
    yearlyRows.push([
      { text:'Total', bold:true },
      { text: money(totalBenefitsAll), bold:true },
      { text: money(totalCostsAll), bold:true }
    ]);

    // Convert HTML analysis bullets to pdfmake spans
    const pdfAnalysisItems = (currentNarratives.analysis && currentNarratives.analysis.length)
      ? currentNarratives.analysis.map(analysisHtmlToPdfSpan)
      : [{ text: '—' }];

    // Chart image
    const chartPNG = getChartPNG(2);

    // pdfmake doc (chart block is unbreakable so heading + chart stay together)
    const docDefinition = {
      info: { title: 'Smart Farming Investment Feasibility Report', author: 'Smart Farming Calculator' },
      pageSize: 'A4',
      pageMargins: [48, 72, 48, 72],
      header: (currentPage) => ({
        margin: [48, 24, 48, 0],
        columns: [
          { text: currentPage === 1 ? '' : 'Smart Farming Investment Feasibility Report', alignment: 'left',  fontSize: 9, color: '#356ac3' },
          { text: currentPage === 1 ? '' : new Date().toLocaleDateString(),          alignment: 'right', fontSize: 9, color: '#6b7280' }
        ]
      }),
      footer: (currentPage, pageCount) => ({
        margin: [48, 0, 48, 24],
        columns: [
          { text: '© 2025 - SARDER MD OBYDULLAH', alignment: 'left', fontSize: 9, color: '#6b7280' },
          { text: `Page ${currentPage} of ${pageCount}`, alignment: 'right', fontSize: 9, color: '#6b7280' }
        ]
      }),
      content: [
        { text: 'Smart Farming Investment Feasibility Report', style: 'h1' },

        // Project Overview
        keepTogether('Project Overview',
          { text: currentNarratives.overview || '—', style: 'para' }
        ),

        // Financial Summary
        keepTogether('Financial Summary',
          {
            table: {
              widths: ['*','*','*'],
              headerRows: 1,
              body: [
                [{text:'Initial Investment', style:'thRow'}, {text:'Project Lifetime (years)', style:'thRow'}, {text:'Discount Rate (%)', style:'thRow'}],
                [money(M.upfrontInvestment), String(M.projectLifetime), fmt2(M.discountRate)]
              ]
            },
            layout: { fillColor: (rowIdx)=> rowIdx===0?'#e9f2ff':null, hLineColor:'#dbe3ef', vLineColor:'#dbe3ef' },
            margin: [0, 0, 0, 14]
          }
        ),

        // Yearly Benefits and Costs
        keepTogether('Yearly Benefits and Costs',
          {
            table: { widths: ['*','*','*'], headerRows: 1, body: yearlyRows },
            layout: {
              fillColor: (rowIdx, node)=> rowIdx===0 ? '#e9f2ff' :
                                        (rowIdx===node.table.body.length-1 ? '#f3f4f6' : (rowIdx%2===0 ? '#f8fafc' : null)),
              hLineColor:'#e5e7eb', vLineColor:'#e5e7eb'
            },
            margin: [0, 0, 0, 14]
          }
        ),

        // Financial Metrics
        keepTogether('Financial Metrics',
          {
            table: {
              widths: ['*','*','*','*','*','*'],   // 6 columns now
              headerRows: 1,
              body: [
                [
                  {text:'ROI (%)', style:'thRow'},
                  {text:'Undiscounted Payback (years)', style:'thRow'},
                  {text:'Discounted. Payback (years)', style:'thRow'},   // NEW
                  {text:'NPV ($)', style:'thRow'},
                  {text:'IRR (%)', style:'thRow'},
                  {text:'BCR', style:'thRow'}
                ],
                [
                  fmt2(M.roi), 
                  isFinite(M.payback)?fmt2(M.payback):'N/A', 
                  isFinite(M.discountedPayback)?fmt2(M.discountedPayback):'N/A',   // NEW
                  money(M.npv), 
                  (M.irr===null?'N/A':fmt2(M.irr)), 
                  fmt2(M.bcr)]
              ]
            },
            layout: { fillColor:(r)=>r===0?'#e9f2ff':null, hLineColor:'#dbe3ef', vLineColor:'#dbe3ef' },
            margin: [0, 0, 0, 16]
          }
        ),

        // Chart block (already unbreakable, keep as is)
        ...(chartPNG ? [{
          unbreakable: true,
          stack: [
            { text: 'Cash Flow Chart (Years 1..N)', style: 'h2' },
            { image: chartPNG, width: 500, margin: [0, 6, 0, 6] },
            { text: `Note: Initial investment of ${money(M.upfrontInvestment)} happens at Year 0 and is not shown in the bars above.`, style: 'note' }
          ],
          margin: [0, 0, 0, 8]
        }] : []),


        // NEW — AI paragraph that explains the chart
        { text: currentNarratives.chartExplanation || '—', style: 'para', alignment: 'justify', margin: [0, 6, 0, 0] },

        // Analysis  (numbered list), Breakable
        {
          text: 'Analysis',
          style: 'h2',
          alignment: 'justify'
        },
        {
          ol: pdfAnalysisItems,
          margin: [14, 0, 0, 14],
          alignment: 'justify'
        },

        // Conclusion
        keepTogether('Conclusion',
          { text: currentNarratives.conclusion || '—', style: 'para' }
        )
      ],
      styles: {
        h1:  { fontSize: 20, bold: true, color: '#0d6efd', alignment: 'center', margin: [0, 0, 0, 10] },
        h2:  { fontSize: 13, bold: true, color: '#0d6efd', margin: [0, 16, 0, 8] },
        thRow: { bold: true, color: '#1f2937' },
        para: { fontSize: 11, lineHeight: 1.45, color: '#111827' },
        note: { italics: true, color: '#6b7280', margin: [0, 4, 0, 12] }
      },
      defaultStyle: { fontSize: 11, lineHeight: 1.35 }
    };

    pdfMake.createPdf(docDefinition).download('Investment_Feasibility_Report.pdf');
  } catch (err) {
    alert(err.message || err);
  }
}
