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
    const profitable = (M.bcr > 1) || (M.npv > 0);
    profitabilityElem.textContent = profitable ? "Profitable" : "Not Profitable";
    profitabilityElem.className = "card-value " + (profitable ? "profitable" : "not-profitable");


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
        Undiscounted Payback: ${M.payback} years
        Discounted Payback: ${M.discountedPayback} years

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

    const API_BASE = window.location.hostname.includes("localhost")
      ? "http://localhost:3000"
      : "https://smart-farming-mkqd.onrender.com";



    const res = await fetch(`${API_BASE}/api/openai/chat`, {
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
      <h1>Agri-Tech Investements Feasibility Report</h1>

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
        <thead><tr><th>ROI (%)</th><th>Undiscounted Payback (years)</th> <th>Discounted Payback (years)</th> <th>NPV</th><th>IRR (%)</th><th>BCR</th></tr></thead>
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
      info: { title: 'Agri-Tech Investment Feasibility Report', author: 'Smart Farming Calculator' },
      pageSize: 'A4',
      pageMargins: [48, 72, 48, 72],
      header: (currentPage) => ({
        margin: [48, 24, 48, 0],
        columns: [
          { text: currentPage === 1 ? '' : 'Agri-Tech Investment Feasibility Report', alignment: 'left',  fontSize: 9, color: '#356ac3' },
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
        { text: 'Agri-Tech Investment Feasibility Report', style: 'h1' },

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
                  {text:'NPV', style:'thRow'},
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





// For Formal Report (separate button)

    // Formal flow cache (same idea as currentNarratives/currentMetrics)
    let currentFormalNarratives = null;  // { overview, analysis[], chartExplanation, conclusion }
    let currentFormalMetrics    = null;  // snapshot used to produce the narratives


    async function fetchNarrativesFormalEnglish(M, chartPNG) {
      try {
        const yearlyLines = M.benefits.map((b, i) => {
          const label = (i === 0) ? "Initial Investment" : `Year ${i}`;
          return `${label}: Benefits ${money(b)}, Costs ${money(M.costs[i])}`;
        }).join('\n');

        const prompt = `
            Project Metrics:
            ROI: ${M.roi}%
            NPV: ${money(M.npv)}
            IRR: ${M.irr}%
            BCR: ${M.bcr}
            Undiscounted Payback: ${M.payback} years
            Discounted Payback: ${M.discountedPayback} years

            Yearly Details: ${yearlyLines}
        `;

        const body = {
          model: "gpt-5-mini",
          messages: [
            {
              role: "system",
              content: `You are a financial analyst. Write in formal US English for an executive audience.
              Use clear, objective, third-person prose. Always respond ONLY in valid JSON with this structure:
              {
                "overview": "one concise formal paragraph summarising the project and headline figures (ROI, Undiscounted Payback Period, Discounted Payback Period, NPV, IRR, BCR).",
                "analysis": [
                  "<strong class='metric-name' style='color:blue;'>ROI</strong> — <em class='explanation'>3–5 concise formal sentences interpreting the figure and implications</em>",
                  "<strong class='metric-name' style='color:blue;'>Undiscounted Payback Period</strong> — <em class='explanation'>…</em>",
                  "<strong class='metric-name' style='color:blue;'>Discounted Payback Period</strong> — <em class='explanation'>…</em>",
                  "<strong class='metric-name' style='color:blue;'>NPV</strong> — <em class='explanation'>…</em>",
                  "<strong class='metric-name' style='color:blue;'>IRR</strong> — <em class='explanation'>…</em>",
                  "<strong class='metric-name' style='color:blue;'>BCR</strong> — <em class='explanation'>…</em>"
                ],
                "chartExplanation": "a single formal paragraph explaining the chart (benefits, costs, cumulative line, and both paybacks).",
                "conclusion": "a short formal recommendation grounded in the metrics."
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

        const API_BASE = window.location.hostname.includes("localhost")
          ? "http://localhost:3000"
          : "https://smart-farming-mkqd.onrender.com";

        const res = await fetch(`${API_BASE}/api/openai/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.error?.message || "AI server error");
        }

        const { text } = await res.json();

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
          } catch {
            return { overview: text, analysis: [], chartExplanation: "", conclusion: "" };
          }
        }
        return { overview: text, analysis: [], chartExplanation: "", conclusion: "" };

      } catch (e) {
        console.error("AI fetch (formal) failed:", e);
        return {
          overview: "⚠️ Unable to generate formal narrative right now.",
          analysis: [],
          chartExplanation: "",
          conclusion: ""
        };
      }
    }


async function generateAndShowFormalReport() {
  const loadingEl = document.getElementById('loadingMessage');
  if (loadingEl) {
    loadingEl.textContent = 'Generating formal report...';
    loadingEl.style.display = 'block';
  }
  const btn = document.getElementById('btnFormalReport');
  if (btn) {
    btn.disabled = true;
    btn.dataset._oldText = btn.textContent;
    btn.textContent = 'Generating...';
  }

  try {
    // hide the formal PDF button until we finish
    const downloadFormalBtn = document.getElementById("downloadFormalPdfBtn");
    if (downloadFormalBtn) downloadFormalBtn.style.display = "none";

    const M = buildSeriesAndMetrics();
    const chartPNG = getChartPNG(2);

    const signature = JSON.stringify({
      upf: M.upfrontInvestment, life: M.projectLifetime, disc: M.discountRate,
      b: M.benefits, c: M.costs
    });

    if (!currentFormalMetrics || currentFormalMetrics.signature !== signature) {
      currentFormalNarratives = await fetchNarrativesFormalEnglish(M, chartPNG);
      currentFormalMetrics = { signature, ...M };
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
      <h1>Agri-Tech Investment – Formal Feasibility Report</h1>

      <h2>Project Overview</h2>
      <p>${currentFormalNarratives.overview || ''}</p>

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
        <thead><tr><th>ROI (%)</th><th>Undiscounted Payback (years)</th><th>Discounted Payback (years)</th><th>NPV</th><th>IRR (%)</th><th>BCR</th></tr></thead>
        <tbody>
          <tr>
            <td>${fmt2(M.roi)}</td>
            <td>${isFinite(M.payback)?fmt2(M.payback):'N/A'}</td>
            <td>${isFinite(M.discountedPayback)?fmt2(M.discountedPayback):'N/A'}</td>
            <td>${money(M.npv)}</td>
            <td>${M.irr===null?'N/A':fmt2(M.irr)}</td>
            <td>${fmt2(M.bcr)}</td>
          </tr>
        </tbody>
      </table>

      <h2>Analysis</h2>
      <ol>${(currentFormalNarratives.analysis || []).map(x => `<li>${cleanListItem(x)}</li>`).join('')}</ol>

      <h2>Conclusion</h2>
      <p>${currentFormalNarratives.conclusion || ''}</p>
    `;

    document.getElementById("reportSection").innerHTML = html;

    const chartNarrDiv = document.getElementById('chartNarrative');
    if (chartNarrDiv) {
      chartNarrDiv.innerHTML = currentFormalNarratives.chartExplanation
        ? `<p style="text-align:justify; font-weight:normal;">${currentFormalNarratives.chartExplanation}</p>`
        : "";
    }

    // show the Formal PDF button now (mirrors old behaviour)
    if (downloadFormalBtn) downloadFormalBtn.style.display = "inline-block";

  } catch (error) {
    document.getElementById("reportSection").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    const downloadFormalBtn = document.getElementById("downloadFormalPdfBtn");
    if (downloadFormalBtn) downloadFormalBtn.style.display = "none";
  } finally {
    if (loadingEl) loadingEl.style.display = 'none';
    if (btn) {
      btn.disabled = false;
      btn.textContent = btn.dataset._oldText || 'Formal Report (On-page)';
      delete btn.dataset._oldText;
    }
  }
}

    


async function downloadFormalPDF() {
  try {
    const M = buildSeriesAndMetrics();

    // NOTE: get chart image before using it
    const chartPNG = getChartPNG(2);

    const signature = JSON.stringify({ upf:M.upfrontInvestment, life:M.projectLifetime, disc:M.discountRate, b:M.benefits, c:M.costs });

    if (!currentFormalMetrics || currentFormalMetrics.signature !== signature || !currentFormalNarratives) {
      currentFormalNarratives = await fetchNarrativesFormalEnglish(M, chartPNG);
      currentFormalMetrics = { signature, ...M };
    }

    const yearlyRows = [
      [{text:'Year', style:'thRow'}, {text:'Benefits', style:'thRow'}, {text:'Costs', style:'thRow'}],
      ...M.benefits.map((b, i) => [
        (i===0 ? 'Initial Investment' : `Year ${i}`),
        money(b), money(M.costs[i])
      ])
    ];

    const totalBenefitsAll = M.benefits.reduce((a,v)=>a+(v||0),0);
    const totalCostsAll    = M.costs.reduce((a,v)=>a+(v||0),0);
    yearlyRows.push([
      { text:'Total', bold:true },
      { text: money(totalBenefitsAll), bold:true },
      { text: money(totalCostsAll), bold:true }
    ]);

    const pdfAnalysisItems = (currentFormalNarratives.analysis && currentFormalNarratives.analysis.length)
      ? currentFormalNarratives.analysis.map(analysisHtmlToPdfSpan)
      : [{ text: '—' }];

    const docDefinition = {
      info: { title: 'Agri-Tech Investment – Formal Feasibility Report', author: 'Agri-Tech Investment Feasibility Report' },
      pageSize: 'A4',
      pageMargins: [48, 72, 48, 72],
      header: (currentPage) => ({
        margin: [48, 24, 48, 0],
        columns: [
          { text: currentPage === 1 ? '' : 'Agri-Tech Investment – Formal Feasibility Report', alignment: 'left',  fontSize: 9, color: '#356ac3' },
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
        { text: 'Agri-Tech Investment – Formal Feasibility Report', style: 'h1' },

        keepTogether('Project Overview', { text: currentFormalNarratives.overview || '—', style: 'para' }),

        keepTogether('Financial Summary', {
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
        }),

        keepTogether('Yearly Benefits and Costs', {
          table: { widths: ['*','*','*'], headerRows: 1, body: yearlyRows },
          layout: {
            fillColor: (rowIdx, node)=> rowIdx===0 ? '#e9f2ff' :
                                      (rowIdx===node.table.body.length-1 ? '#f3f4f6' : (rowIdx%2===0 ? '#f8fafc' : null)),
            hLineColor:'#e5e7eb', vLineColor:'#e5e7eb'
          },
          margin: [0, 0, 0, 14]
        }),

        keepTogether('Financial Metrics', {
          table: {
            widths: ['*','*','*','*','*','*'],
            headerRows: 1,
            body: [
              [
                {text:'ROI (%)', style:'thRow'},
                {text:'Undiscounted Payback (years)', style:'thRow'},
                {text:'Discounted. Payback (years)', style:'thRow'},
                {text:'NPV', style:'thRow'},
                {text:'IRR (%)', style:'thRow'},
                {text:'BCR', style:'thRow'}
              ],
              [
                fmt2(M.roi),
                isFinite(M.payback)?fmt2(M.payback):'N/A',
                isFinite(M.discountedPayback)?fmt2(M.discountedPayback):'N/A',
                money(M.npv),
                (M.irr===null?'N/A':fmt2(M.irr)),
                fmt2(M.bcr)
              ]
            ]
          },
          layout: { fillColor:(r)=>r===0?'#e9f2ff':null, hLineColor:'#dbe3ef', vLineColor:'#dbe3ef' },
          margin: [0, 0, 0, 16]
        }),

        ...(chartPNG ? [{
          unbreakable: true,
          stack: [
            { text: 'Cash Flow Chart (Years 1..N)', style: 'h2' },
            { image: chartPNG, width: 500, margin: [0, 6, 0, 6] },
            { text: `Note: Initial investment of ${money(M.upfrontInvestment)} happens at Year 0 and is not shown in the bars above.`, style: 'note' }
          ],
          margin: [0, 0, 0, 8]
        }] : []),

        { text: currentFormalNarratives.chartExplanation || '—', style: 'para', alignment: 'justify', margin: [0, 6, 0, 0] },

        { text: 'Analysis', style: 'h2', alignment: 'justify' },
        { ol: pdfAnalysisItems, margin: [14, 0, 0, 14], alignment: 'justify' },

        keepTogether('Conclusion', { text: currentFormalNarratives.conclusion || '—', style: 'para' })
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

    pdfMake.createPdf(docDefinition).download('Formal_Executive_Report.pdf');
  } catch (err) {
    alert(err.message || err);
  }
}





let currentBengaliNarratives = null; // { overview, analysis[], chartExplanation, conclusion }
let currentBengaliMetrics    = null; // snapshot for cache key/signature


async function fetchNarrativesBengali(M, chartPNG) {
  try {
    const yearlyLines = M.benefits.map((b, i) => {
      const label = (i === 0) ? "প্রারম্ভিক বিনিয়োগ" : `Year ${i}`;
      return `${label}: সুবিধা ${money(b)}, খরচ ${money(M.costs[i])}`;
    }).join('\n');

    // ⬇️ REPLACE just the prompt string with this friendlier version
    const prompt = `
      আপনি সহজ ভাষায় ফাইন্যান্স বোঝাতে দক্ষ। কৃষক ও স্থানীয় কর্মকর্তা যেন বুঝতে পারে,
      তেমন **ব্যবহারবান্ধব বাংলা** রিপোর্ট লিখুন। আউটপুট **শুধু বৈধ JSON** হবে—নীচের
      কাঠামো ও কী-নাম (keys) অপরিবর্তিত রাখুন।

      ভাষার নিয়ম:
      - টোন: বন্ধুসুলভ, ব্যাখ্যামূলক, 'আপনি' সম্বোধন।
      - বাক্য ছোট রাখুন; জটিল শব্দ ও অতিরিক্ত আনুষ্ঠানিক ভঙ্গি পরিহার করুন।
      - জার্গন এড়িয়ে চলুন; লাগলে বন্ধনীর মধ্যে সংক্ষিপ্ত মানে দিন:
        ROI = বিনিয়োগে লাভের হার, NPV = বর্তমান মূল্যে মোট লাভ-ক্ষতি,
        IRR = যে হারে NPV শূন্য হয়, BCR = লাভ/খরচ অনুপাত,
        Payback = বিনিয়োগের টাকা ফেরত পেতে সময়।
      - সংখ্যাগুলো স্পষ্ট করে বলুন (কত টাকা, কত বছর/মাস) এবং বাস্তব টোনে পরামর্শ দিন।
      - ইমোজি নয়, কিন্তু উষ্ণ ও সহজ ভাষা ব্যবহার করুন।

      আউটপুট (JSON):
      {
        "overview": "৩–৪ লাইনে সহজ সারাংশ—প্রকল্প কী, মোটামুটি ফল কী দেখা যাচ্ছে, এবং আজকের সিদ্ধান্ত এক লাইনে (করা উচিত/আরও যাচাই দরকার)।",
        "analysis": [
          "ROI — ৩–৪টি ছোট বাক্যে কী বোঝায় ও এই ডেটা থেকে কী অনুমান করা যায়।",
          "Undiscounted Payback — ৩–৪টি ছোট বাক্যে, কত সময়ে টাকা ওঠে, মাস/বছরের ইঙ্গিত দিন।",
          "Discounted Payback — ৩–৪টি ছোট বাক্যে, সময়ের মূল্য ধরা হলে ফল কী বদলায়।",
          "NPV — ৩–৪টি ছোট বাক্যে, মোট লাভ-ক্ষতি বর্তমান দামে কী বোঝাচ্ছে।",
          "IRR — ৩–৪টি ছোট বাক্যে, ডিসকাউন্ট রেটের সাথে তুলনা করে অর্থ কী।",
          "BCR — ৩–৪টি ছোট বাক্যে, প্রতি ১ টাকা খরচে আনুমানিক কত টাকা সুবিধা।"
        ],
        "chartExplanation": "৩–৪টি বাক্যে চার্ট কী দেখাচ্ছে—বছরভিত্তিক সুবিধা/খরচ, ক্রমবর্ধমান নেট লাইনের দিক, এবং Year 0-এর প্রারম্ভিক খরচ কীভাবে ধরা হয়েছে।",
        "conclusion": "৩–৪টি বাক্যে স্পষ্ট পরামর্শ—করণীয়/সতর্কতা/কোন শর্তে এগোলে ভালো।"
      }

      প্রকল্পের সূচক (ডেটা):
      - ROI: ${M.roi}% 
      - NPV: ${money(M.npv)}
      - IRR: ${M.irr}%
      - BCR: ${M.bcr}
      - Undiscounted Payback: ${M.payback} বছর
      - Discounted Payback: ${M.discountedPayback} বছর

      সময়ভিত্তিক তথ্য:
      ${yearlyLines}
      `.trim();


    const body = {
      model: "gpt-5-mini",
      messages: [
        { role: "system", content: "Explain finance in simple Bengali for farmers and local officials. Keep tone friendly and practical. Respond ONLY with valid JSON" },
        { role: "user", content: prompt },
        ...(chartPNG ? [{
          role: "user",
          content: [
            { type: "text", text: "এটি ক্যাশ-ফ্লো চার্ট (PNG base64):" },
            { type: "image_url", image_url: { url: chartPNG } }
          ]
        }] : [])
      ]
    };

    const API_BASE = window.location.hostname.includes("localhost")
      ? "http://localhost:3000"
      : "https://smart-farming-mkqd.onrender.com";

    const res = await fetch(`${API_BASE}/api/openai/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || "AI server error");
    }

    const { text } = await res.json();

    // same safe JSON extraction you use
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
      } catch {
        return { overview: text, analysis: [], chartExplanation: "", conclusion: "" };
      }
    }
    return { overview: text, analysis: [], chartExplanation: "", conclusion: "" };

  } catch (e) {
    console.error("AI fetch (Bengali) failed:", e);
    return {
      overview: "⚠️ বাংলা রিপোর্ট এই মুহূর্তে তৈরি করা যাচ্ছে না। পরে আবার চেষ্টা করুন।",
      analysis: [],
      chartExplanation: "",
      conclusion: ""
    };
  }
}


async function generateAndShowBengaliReport() {
  const loadingEl = document.getElementById('loadingMessage');
  if (loadingEl) {
    loadingEl.textContent = 'বাংলা রিপোর্ট তৈরি হচ্ছে...';
    loadingEl.style.display = 'block';
  }
  const btn = document.getElementById('btnBengaliReport');
  if (btn) {
    btn.disabled = true;
    btn.dataset._oldText = btn.textContent;
    btn.textContent = 'Generating...';
  }

  try {
    // hide Bengali PDF button until ready
    const downloadBnBtn = document.getElementById("downloadBengaliPdfBtn");
    if (downloadBnBtn) downloadBnBtn.style.display = "none";

    const M = buildSeriesAndMetrics();
    const chartPNG = getChartPNG(2); // compute before PDF use

    const signature = JSON.stringify({
      upf: M.upfrontInvestment, life: M.projectLifetime, disc: M.discountRate,
      b: M.benefits, c: M.costs
    });

    if (!currentBengaliMetrics || currentBengaliMetrics.signature !== signature) {
      currentBengaliNarratives = await fetchNarrativesBengali(M, chartPNG);
      currentBengaliMetrics = { signature, ...M };
    }

    let rows = M.benefits.map((b,i)=>`
      <tr>
        <td>${i===0?'প্রারম্ভিক বিনিয়োগ':`Year ${i}`}</td>
        <td>${money(b)}</td>
        <td>${money(M.costs[i])}</td>
      </tr>
    `).join('');

    const totalB = M.benefits.reduce((a,v)=>a+(v||0),0);
    const totalC = M.costs.reduce((a,v)=>a+(v||0),0);
    rows += `
      <tr style="font-weight:700; background:#f3f4f6;">
        <td>মোট</td><td>${money(totalB)}</td><td>${money(totalC)}</td>
      </tr>
    `;

    const html = `
      <h1>স্মার্ট ফার্মিং বিনিয়োগ — বাংলা প্রতিবেদন</h1>

      <h2>প্রকল্পের সারসংক্ষেপ</h2>
      <p>${currentBengaliNarratives.overview || ''}</p>

      <h2>আর্থিক সংক্ষিপ্তসার</h2>
      <table>
        <thead><tr><th>প্রারম্ভিক বিনিয়োগ</th><th>প্রকল্পের স্থায়িত্ব</th><th>ডিসকাউন্ট রেট</th></tr></thead>
        <tbody><tr><td>${money(M.upfrontInvestment)}</td><td>${M.projectLifetime} বছর</td><td>${fmt2(M.discountRate)} %</td></tr></tbody>
      </table>

      <h2>বার্ষিক সুবিধা ও খরচ</h2>
      <table>
        <thead><tr><th>বছর</th><th>সুবিধা</th><th>খরচ</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>

      <h2>আর্থিক সূচক</h2>
      <table>
        <thead>
          <tr>
            <th>ROI (%)</th>
            <th>পেব্যাক (Undiscounted)</th>
            <th>পেব্যাক (Discounted)</th>
            <th>NPV (${currentCurrency.code})</th>
            <th>IRR (%)</th>
            <th>BCR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${fmt2(M.roi)}</td>
            <td>${isFinite(M.payback)?fmt2(M.payback):'N/A'}</td>
            <td>${isFinite(M.discountedPayback)?fmt2(M.discountedPayback):'N/A'}</td>
            <td>${money(M.npv)}</td>
            <td>${M.irr===null?'N/A':fmt2(M.irr)}</td>
            <td>${fmt2(M.bcr)}</td>
          </tr>
        </tbody>
      </table>

      <h2>বিশ্লেষণ</h2>
      <ol>${(currentBengaliNarratives.analysis || []).map(x => `<li>${cleanListItem(x)}</li>`).join('')}</ol>

      <h2>উপসংহার</h2>
      <p>${currentBengaliNarratives.conclusion || ''}</p>
    `;

    document.getElementById("reportSection").innerHTML = html;

    const chartNarrDiv = document.getElementById('chartNarrative');
    if (chartNarrDiv) {
      chartNarrDiv.innerHTML = currentBengaliNarratives.chartExplanation
        ? `<p style="text-align:justify; font-weight:normal;">${currentBengaliNarratives.chartExplanation}</p>`
        : "";
    }

    // show Bengali PDF button now (same pattern as your existing flows)
    if (downloadBnBtn) downloadBnBtn.style.display = "inline-block";

  } catch (err) {
    document.getElementById("reportSection").innerHTML = `<p style="color:red;">ত্রুটি: ${err.message}</p>`;
    const downloadBnBtn = document.getElementById("downloadBengaliPdfBtn");
    if (downloadBnBtn) downloadBnBtn.style.display = "none";
  } finally {
    if (loadingEl) loadingEl.style.display = 'none';
    if (btn) {
      btn.disabled = false;
      btn.textContent = btn.dataset._oldText || 'বাংলা রিপোর্ট (অন-পেজ)';
      delete btn.dataset._oldText;
    }
  }
}







// ===== Robust Bengali font loader for pdfmake (uses Hind Siliguri) =====
function _ab_to_b64(buf) {
  let out = "", u8 = new Uint8Array(buf), sz = 0x8000;
  for (let i = 0; i < u8.length; i += sz) out += String.fromCharCode.apply(null, u8.subarray(i, i + sz));
  return btoa(out);
}

async function ensureBengaliFont() {
  if (window.__bnFontReady) return;

  const base = 'libs/fonts/';                      // <- adjust ONLY if your files live elsewhere
  const regular = 'HindSiliguri-Regular.ttf';
  const bold    = 'HindSiliguri-Bold.ttf';

  // fetch TTFs (no-cache to avoid stale 404s during dev)
  const [rRes, bRes] = await Promise.all([
    fetch(base + regular, { cache: 'no-store' }),
    fetch(base + bold,    { cache: 'no-store' })
  ]);

  if (!rRes.ok || !bRes.ok) {
    throw new Error(`Bangla fonts not found.\nExpected:\n  ${base}${regular}\n  ${base}${bold}`);
  }

  // inject into pdfMake's virtual FS
  pdfMake.vfs = pdfMake.vfs || {};
  pdfMake.vfs[regular] = _ab_to_b64(await rRes.arrayBuffer());
  pdfMake.vfs[bold]    = _ab_to_b64(await bRes.arrayBuffer());

  // EXTEND (do not overwrite) font map and alias Roboto/roboto -> Bengali
  pdfMake.fonts = {
    ...(pdfMake.fonts || {}),
    bengali: { normal: regular, bold: bold, italics: regular, bolditalics: bold },
    Roboto:  { normal: regular, bold: bold, italics: regular, bolditalics: bold },
    roboto:  { normal: regular, bold: bold, italics: regular, bolditalics: bold }
  };

  window.__bnFontReady = true;
}









async function downloadBengaliPDF() {
  try {
    const M = buildSeriesAndMetrics();
    const chartPNG = getChartPNG(2); // ensure defined before use

    // make sure Bengali font is ready
    await ensureBengaliFont();

    const signature = JSON.stringify({ upf:M.upfrontInvestment, life:M.projectLifetime, disc:M.discountRate, b:M.benefits, c:M.costs });

    if (!currentBengaliMetrics || currentBengaliMetrics.signature !== signature || !currentBengaliNarratives) {
      currentBengaliNarratives = await fetchNarrativesBengali(M, chartPNG);
      currentBengaliMetrics = { signature, ...M };
    }

    const yearlyTable = [
      [{text:'বছর', style:'thRow'}, {text:'সুবিধা', style:'thRow'}, {text:'খরচ', style:'thRow'}],
      ...M.benefits.map((b,i) => [
        (i===0 ? 'প্রারম্ভিক বিনিয়োগ' : `Year ${i}`),
        money(b), money(M.costs[i])
      ])
    ];

    const totalB = M.benefits.reduce((a,v)=>a+(v||0),0);
    const totalC = M.costs.reduce((a,v)=>a+(v||0),0);
    yearlyTable.push([{ text:'মোট', bold:true }, { text: money(totalB), bold:true }, { text: money(totalC), bold:true }]);

    const pdfAnalysis = (currentBengaliNarratives.analysis && currentBengaliNarratives.analysis.length)
      ? currentBengaliNarratives.analysis.map(analysisHtmlToPdfSpan)
      : [{ text: '—' }];

    const dd = {
      info: { title: 'স্মার্ট ফার্মিং — বাংলা প্রতিবেদন', author: 'Smart Farming Calculator' },
      pageSize: 'A4',
      pageMargins: [48, 72, 48, 72],
      // ⬇️ ensure the Bengali font is used for all text in this PDF
      defaultStyle: { font: 'bengali', fontSize: 11, lineHeight: 1.35 },
      styles: {
        h1:  { font: 'bengali', fontSize: 20, bold: true, color: '#0d6efd', alignment: 'center', margin: [0,0,0,10] },
        h2:  { font: 'bengali', fontSize: 13, bold: true, color: '#0d6efd', margin: [0,16,0,8] },
        thRow: { font: 'bengali', bold: true, color: '#1f2937' },
        para: { font: 'bengali', fontSize: 11, lineHeight: 1.45, color: '#111827' },
        note: { font: 'bengali', italics: true, color: '#6b7280', margin: [0,4,0,12] }
      },
      header: (pg)=>({ margin:[48,24,48,0], columns:[
        { text: pg===1?'':'স্মার্ট ফার্মিং — বাংলা প্রতিবেদন', alignment:'left', fontSize:9, color:'#356ac3' },
        { text: pg===1?'':new Date().toLocaleDateString(), alignment:'right', fontSize:9, color:'#6b7280' }
      ]}),
      footer: (pg, pc)=>({ margin:[48,0,48,24], columns:[
        { text:'© 2025 - SARDER MD OBYDULLAH', alignment:'left', fontSize:9, color:'#6b7280' },
        { text:`পৃষ্ঠা ${pg} / ${pc}`, alignment:'right', fontSize:9, color:'#6b7280' }
      ]}),
      content: [
        { text: 'স্মার্ট ফার্মিং বিনিয়োগ — বাংলা প্রতিবেদন', style: 'h1' },

        keepTogether('প্রকল্পের সারসংক্ষেপ', { text: currentBengaliNarratives.overview || '—', style: 'para' }),

        keepTogether('আর্থিক সংক্ষিপ্তসার', {
          table: {
            widths: ['*','*','*'],
            headerRows: 1,
            body: [
              [{text:'প্রারম্ভিক বিনিয়োগ', style:'thRow'}, {text:'প্রকল্পের স্থায়িত্ব (বছর)', style:'thRow'}, {text:'ডিসকাউন্ট রেট (%)', style:'thRow'}],
              [money(M.upfrontInvestment), String(M.projectLifetime), fmt2(M.discountRate)]
            ]
          },
          layout: { fillColor:(r)=>r===0?'#e9f2ff':null, hLineColor:'#dbe3ef', vLineColor:'#dbe3ef' },
          margin: [0,0,0,14]
        }),

        keepTogether('বার্ষিক সুবিধা ও খরচ', {
          table: { widths: ['*','*','*'], headerRows: 1, body: yearlyTable },
          layout: {
            fillColor: (rowIdx, node)=> rowIdx===0 ? '#e9f2ff' :
                                      (rowIdx===node.table.body.length-1 ? '#f3f4f6' : (rowIdx%2===0 ? '#f8fafc' : null)),
            hLineColor:'#e5e7eb', vLineColor:'#e5e7eb'
          },
          margin: [0,0,0,14]
        }),

        keepTogether('আর্থিক সূচক', {
          table: {
            widths: ['*','*','*','*','*','*'],
            headerRows: 1,
            body: [
              [
                {text:'ROI (%)', style:'thRow'},
                {text:'পেব্যাক (Undisc.)', style:'thRow'},
                {text:'পেব্যাক (Disc.)', style:'thRow'},
                {text:`NPV (${currentCurrency.code})`, style:'thRow'},
                {text:'IRR (%)', style:'thRow'},
                {text:'BCR', style:'thRow'}
              ],
              [
                fmt2(M.roi),
                isFinite(M.payback)?fmt2(M.payback):'N/A',
                isFinite(M.discountedPayback)?fmt2(M.discountedPayback):'N/A',
                money(M.npv),
                (M.irr===null?'N/A':fmt2(M.irr)),
                fmt2(M.bcr)
              ]
            ]
          },
          layout: { fillColor:(r)=>r===0?'#e9f2ff':null, hLineColor:'#dbe3ef', vLineColor:'#dbe3ef' },
          margin: [0,0,0,16]
        }),

        ...(chartPNG ? [{
          unbreakable: true,
          stack: [
            { text: 'ক্যাশ-ফ্লো চার্ট (Years 1..N)', style: 'h2' },
            { image: chartPNG, width: 500, margin: [0,6,0,6] },
            { text: `বিঃদ্রঃ ${money(M.upfrontInvestment)} প্রারম্ভিক বিনিয়োগ Year 0-তে ঘটে, তাই বার চার্টে দেখানো হয়নি।`, style: 'note' }
          ],
          margin: [0,0,0,8]
        }] : []),

        { text: currentBengaliNarratives.chartExplanation || '—', style: 'para', alignment: 'justify', margin: [0,6,0,0] },

        { text: 'বিশ্লেষণ', style: 'h2' },
        { ol: pdfAnalysis, margin: [14,0,0,14], alignment: 'justify' },

        keepTogether('উপসংহার', { text: currentBengaliNarratives.conclusion || '—', style: 'para' })
      ],
      styles: {
        h1:  { fontSize: 20, bold: true, color: '#0d6efd', alignment: 'center', margin: [0,0,0,10] },
        h2:  { fontSize: 13, bold: true, color: '#0d6efd', margin: [0,16,0,8] },
        thRow: { bold: true, color: '#1f2937' },
        para: { fontSize: 11, lineHeight: 1.45, color: '#111827' },
        note: { italics: true, color: '#6b7280', margin: [0,4,0,12] }
      },
      defaultStyle: { fontSize: 11, lineHeight: 1.35 }
    };

    pdfMake.createPdf(dd).download('Smart_Farming_Report_Bengali.pdf');
  } catch (err) {
    alert(err.message || err);
  }
}







// Attach event listeners after the page loads
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculateBtn")
      .addEventListener("click", calculateAll);

    document.getElementById("generateReportBtn")
      .addEventListener("click", generateAndShowReport);

    document.getElementById("downloadPdfBtn")
      .addEventListener("click", downloadPDF);

    document.getElementById("formulasBtn")
      .addEventListener("click", () => {
        window.open("docs.html", "_blank");
      });

    document.getElementById('btnFormalReport')
      .addEventListener('click', generateAndShowFormalReport);

    document.getElementById('downloadFormalPdfBtn')
      .addEventListener('click', downloadFormalPDF);


    document.getElementById('btnBengaliReport')
      ?.addEventListener('click', generateAndShowBengaliReport);

    // Make sure you have a hidden button with this ID in the page header/footer area,
    // or dynamically create one like your other flows.
    document.getElementById('downloadBengaliPdfBtn')
      ?.addEventListener('click', downloadBengaliPDF);


  });