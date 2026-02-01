// BYD Battery Box Visualization v0.0.6
// Fully refactored for memory leak prevention and performance optimization
// Preserves all functionality, UI layout, and data history tracking

// ============================================================================
// CONSTANTS - Central Configuration
// ============================================================================
const BYD_CONFIG = {
  VERSION: '0.0.6',
  POWER_SAMPLE_WINDOW_MS: 5 * 60 * 1000, // 5 minutes
  POWER_SAMPLE_MAX_COUNT: 3600, // 1 hour at 1 sample/sec
  RENDER_DEBOUNCE_MS: 32, // ~30 FPS
  CHART_DEFAULTS: {
    vMin: 3100,
    vMax: 3700,
    tMin: 0,
    tMax: 60,
  },
  CELL_DEFAULTS: {
    minCount: 1,
    maxCount: 10,
  },
  GRID_LINES: 5,
  SOC_THRESHOLDS: {
    low: 20,
    mid: 80,
  },
};

try {
  (globalThis || window).__BYD_CSS_TEXT =
    ":host{box-sizing:border-box;font-family:var(--ha-card-header-font-family,Roboto,system-ui,Arial)}*{box-sizing:border-box}.battery-tower{display:flex;flex-direction:column;gap:4px;min-width:220px;width:100%;max-width:none;margin:0 auto}.header{position:relative;display:flex;flex-direction:column;gap:6px;background:linear-gradient(180deg,#585858, #383838);border-radius:10px;padding:8px 12px;color:#fff;box-shadow:inset 0 1px 2px rgba(255,255,255,.08), inset 0 -1px 2px rgba(0,0,0,.45)}.header .row.top{display:flex;align-items:center;gap:10px}.header .logo{position:relative;border:2px solid #ff3b3b;color:#ff3b3b;border-radius:999px;font-weight:700;padding:2px 8px;font-size:12px;width:90px}.header .logo.nobrandInformation{width:auto}.header .logo .brandname{color:#ff3b3b;float:left;margin-right:4px}.header .capacity{font-size:8px;line-height:1.2;color:#e0e0e0;margin-left:auto}.header .productname{font-size:8px;font-weight:bold;line-height:1.2;color:#e0e0e0;margin-left:auto}.header .soc-row{display:flex}.header .soc{position:relative;flex:1;height:14px;border-radius:8px;background:rgba(0,0,0,.35);overflow:hidden}.header .soc .fill{position:absolute;left:0;top:0;bottom:0;background:#2e7d32;min-width:0;border-radius:8px}.header .soc .label{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-weight:700;font-size:12px;text-shadow:0 1px 2px rgba(0,0,0,.6)}.header .chip{cursor:pointer;background:#2f6df3;color:#fff;border-radius:16px;padding:3px 6px;font-weight:600;user-select:none;font-size:10px}.header .chip.secondary{background:#4b4b4b}.header .versions{font-size:8px;line-height:1.2;color:#e0e0e0;cursor:pointer}.header .power{position:absolute;right:15px;min-width:100px;text-align:right;display:flex;flex-direction:column;line-height:1.1}.header .power .p-label{font-weight:600;font-size:11px;opacity:.9}.header .power .p-value{font-weight:700;font-size:12px}.header .power .p-eta{font-weight:600;font-size:10px;opacity:.85}.modules{display:grid;grid-template-columns:1fr;gap:4px;width:100%}.battery-module{position:relative;background:#fff;border-radius:10px;padding:12px 10px 10px 60px;color:#222;border:1px solid #dcdcdc;box-shadow:inset 0 1px 0 rgba(255,255,255,.6);width:100%;aspect-ratio:5 / 2;max-height:180px}.battery-module.minimal{aspect-ratio:5/1;max-height:90px;padding-left:10px}.battery-module .mini{position:absolute;left:10px;right:8px;top:8px;bottom:8px;display:flex;flex-direction:column;gap:6px}.battery-module .mini-row{display:flex;align-items:center;gap:8px}.battery-module .mini-label{width:80px;font-size:10px;opacity:.8}.battery-module .mini-stat{font-size:11px;font-weight:700}.battery-module .hbar{flex:1;position:relative;height:10px;border-radius:6px;background:#fff;border:1px solid #e0e0e0;overflow:hidden}.battery-module.minimal .hbar{height:20px}.battery-module .hseg{position:absolute;top:0;bottom:0}.battery-module .hseg.cur{background:linear-gradient(to left, #000000 0%,#2e7d32 1px,#2e7d32 30%,#3b9440 70%,rgba(46,125,50,.25) 100%)}.battery-module .hseg.cur.bal{background:linear-gradient(to left, #000000 0%,#1e88e5 1px,#1e88e5 30%,#3396e8 70%,rgba(30,136,229,.25) 100%)}.battery-module .hseg.max{background:rgba(0,0,0,.08)}.battery-module .hseg.greencap{background:rgba(46,125,50,.25)}.battery-module .hseg.bluecap{background:rgba(30,136,229,.25)}.battery-module .hnum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:10px;font-weight:700;color:#111;text-shadow:0 1px 1px rgba(255,255,255,.7)}.battery-module.minimal .hnum{color:#fff;text-shadow:0 1px 1px rgba(0,0,0,.6)}.battery-module.nodata{height:56px;max-height:none;aspect-ratio:auto;padding:8px 10px}.battery-module.no-axis{padding-left:10px}.battery-module.no-axis .chart{left:8px}.module-name{position:absolute;right:8px;bottom:6px;font-size:11px;background:rgba(255,255,255,.65);color:#333;padding:2px 6px;border-radius:6px;z-index:4}.axis{position:absolute;left:8px;top:8px;bottom:8px;width:48px;z-index:1}.axis .tick{display:none}.axis .label{position:absolute;left:0;transform:translateY(-50%);font-size:11px;color:#222}.chart{position:absolute;left:56px;right:8px;top:8px;bottom:8px;overflow:hidden}.grid-lines{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none;z-index:3}.grid-lines .line{position:absolute;left:0;right:0;border-top:1px dashed rgba(0,0,0,.2)}.cells{position:absolute;left:0;right:0;bottom:0;top:0;display:flex;align-items:flex-end;gap:2px;padding:0 6px;z-index:2}.cell{flex:1;min-width:4px;background:#fff;position:relative;border-radius:2px;overflow:hidden;height:100%}.bar.cur{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(to bottom, #000000 0%,#2e7d32 2%,#2e7d32 30%,#3b9440 70%,rgba(46,125,50,.25) 100%);transition:height .6s ease, bottom .6s ease}.bar.max{position:absolute;left:0;right:0;bottom:0;background:rgba(0,0,0,.08)}.bar.darkcap{position:absolute;left:0;right:0;bottom:0;background:rgba(0,0,0,.2)}.bar.greencap{position:absolute;left:0;right:0;bottom:0;background:rgba(46,125,50,.25)}.bar.bluecap{position:absolute;left:0;right:0;bottom:0;background:rgba(30,136,229,.25)}.cell.balancing .bar.cur{background:linear-gradient(to bottom, #000000 0%,#1e88e5 2%,#1e88e5 30%,#3396e8 70%,rgba(30,136,229,.25) 100%)}.cell.rise .bar.cur{animation:rise 0.6s ease-out}.cell.fall .bar.cur{animation:fall 0.6s ease-out}@keyframes rise{0%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(4%)}100%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(0)}}@keyframes fall{0%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(-4%)}100%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(0)}}.tooltip{position:absolute;left:0;top:0;transform:none;background:rgba(0,0,0,.85);color:#fff;font-size:11px;padding:4px 6px;border-radius:4px;white-space:nowrap;pointer-events:none;z-index:5}.soc-low .soc .fill{background:#d32f2f}.soc-mid .soc .fill{background:#1976d2}.soc-high .soc .fill{background:#2e7d32}.header.charge .soc .fill{background-size:30px 220px;background-image:repeating-linear-gradient(135deg, rgba(255,255,255,.15) 0 10px, transparent 10px 20px);animation:moveRight 8s linear infinite}.header.discharge .soc .fill{background-size:30px 220px;background-image:repeating-linear-gradient(225deg, rgba(255,255,255,.15) 0 10px, transparent 10px 20px);animation:moveLeft 8s linear infinite}@keyframes moveRight{from{background-position: 0 0;} to{background-position-x:200px}}@keyframes moveLeft{from{background-position: 0 0;} to{background-position-x:-200px}}.battery-stand{position:relative;height:22px;background:#2b2b2b;border-radius:4px;box-shadow:inset 0 1px 1px rgba(255,255,255,.08);margin-top:2px}.battery-stand .foot{position:absolute;bottom:-6px;width:22px;height:12px;background:#1e1e1e;border-radius:10px 10px 10px 10px/8px 8px 8px 8px;box-shadow:0 2px 0 rgba(0,0,0,.3)}.battery-stand .foot.left{left:10%}.battery-stand .foot.right{right:10%}@media (max-width:300px){.cells{gap:1px;padding:0 4px}.cell{min-width:2px}.axis .label{font-size:10px}}@media (max-width:256px){.cells{gap:0;padding:0 2px}.cell{min-width:0}.axis .label{font-size:9px}}";
} catch (_) {}
// ============================================================================
// UTILITY FUNCTIONS - Helper for Performance & Security
// ============================================================================

/**
 * Efficient array trimming using splice instead of slice
 * FIX: Prevents new array allocations by avoiding slice operations
 * @param {Array} arr - Array to clean up
 * @param {number} removeCount - Number of elements to remove
 */
function efficientArrayTrim(arr, removeCount) {
  if (removeCount > 0 && arr.length > removeCount) {
    arr.splice(0, removeCount);
  }
}

/**
 * Validates and filters numeric values
 * FIX: Cached filtering instead of multiple iterations
 * @param {Array} arr - Array to filter
 * @returns {Array} Filtered numeric values
 */
function getValidNumbers(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter(d => Number.isFinite(Number(d))).map(Number);
}

/**
 * Safe access to element properties
 * FIX: Prevents null-reference errors through exception handling
 * @param {ShadowRoot} shadowRoot - Shadow DOM Root
 * @param {string} id - Element ID
 * @returns {Element|null} Element or null
 */
function safeGetElement(shadowRoot, id) {
  try {
    return shadowRoot?.getElementById(id) || null;
  } catch {
    return null;
  }
}

/**
 * Formats numbers with locale support
 * @param {number} value - Value to format
 * @param {number} decimals - Decimal places
 * @returns {string} Formatted number
 */
function formatNumber(value, decimals = 1) {
  return Number(value).toLocaleString(void 0, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Calculates median of an array
 * FIX: Used for minimal view statistics calculation
 * @param {Array} arr - Input array
 * @returns {number} Median value
 */
function getMedian(arr) {
  if (!arr.length) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
// ============================================================================
// BYD BATTERY HEADER COMPONENT - OPTIMIZED
// ============================================================================

var BYDHeaderComponent = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    // State Properties
    this._soc = 0;
    this._soh = 0;
    this._bmuPower = 0;
    this._bmuVersion = "";
    this._bmsVersion = "";
    this._uiMeta = "";
    this._view = "voltage";
    this._displayUnit = "mV";
    this._towerCapacityWh = 0;
    this._etaText = "";
    this._productName = "";
    
    // UI Flags
    this._showVTToggle = true;
    this._showViewToggle = false;
    this._moduleView = "detailed";
    this._showPower = true;
    this._showETA = true;
    this._showProductCapacity = true;
    
    // Header Info Configuration
    this._headerInfo = {
      default: "versions",
      show: { versions: true, ui: true, energy: true, efficiency: true },
      payload: { versionsText: "", uiText: "", energyText: "", effText: "" },
    };
    this._headerInfoIndex = 0;
    
    // Event Listeners & Lifecycle
    this._boundListeners = {};
    this._ro = null;
    this._renderScheduled = false;
    this._renderFrame = null;
    this._renderTimeout = null;
    
    // FIX: Cache für DOM-Elemente zur Performance
    this._cachedElements = {};
  }

  connectedCallback() {
    this._render();
    this._adoptCss();
    this._setupResizeObserver();
  }

  disconnectedCallback() {
    // FIX: Umfassende Cleanup-Routine gegen Memory Leaks
    if (this._renderFrame) {
      cancelAnimationFrame(this._renderFrame);
      this._renderFrame = null;
    }
    if (this._renderTimeout) {
      clearTimeout(this._renderTimeout);
      this._renderTimeout = null;
    }
    this._renderScheduled = false;
    this._cleanupResizeObserver();
    this._removeAllListeners();
    this._cachedElements = {};
  }
};
// ============================================================================
// BYD BATTERY HEADER - CSS & DATA SETTERS
// ============================================================================

 // Continue from BYDHeaderComponent class

BYDHeaderComponent.prototype._adoptCss = function() {
  try {
    let e = typeof globalThis < "u" ? globalThis : 
            typeof window < "u" ? window : void 0;
    if (this._sheet || !this.shadowRoot) return;
    
    let t = () => {
      let a = e && e.__BYD_CSS_SHEET;
      if (a && this.shadowRoot) {
        this.shadowRoot.adoptedStyleSheets = [a];
        this._sheet = a;
      }
    };
    
    if (e && e.__BYD_CSS_SHEET) {
      t();
      return;
    }
    
    let i = () => {
      window.removeEventListener("byd-css-ready", i);
      t();
    };
    window.addEventListener("byd-css-ready", i);
  } catch (_) {}
};

BYDHeaderComponent.prototype.setBMUPower = function(e) {
  let t = this._bmuPower;
  this._bmuPower = Number(e) || 0;
  if (t !== this._bmuPower) {
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.setBMUVersion = function(e) {
  let t = this._bmuVersion;
  this._bmuVersion = e ?? "";
  if (t !== this._bmuVersion) {
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.setBMSVersion = function(e) {
  let t = this._bmsVersion;
  this._bmsVersion = e ?? "";
  if (t !== this._bmsVersion) {
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.setUIMeta = function(e) {
  let t = this._uiMeta;
  this._uiMeta = e ?? "";
  if (t !== this._uiMeta) {
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.setStateOfCharge = function(e) {
  let t = this._soc;
  this._soc = Number(e) || 0;
  if (t !== this._soc) {
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.setStateOfHealth = function(e) {
  let t = this._soh;
  this._soh = Number(e) || 0;
  if (t !== this._soh) {
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.setTowerCapacityWh = function(e) {
  this._towerCapacityWh = Number(e) || 0;
  this._updateCapacity();
  this._applyResponsive();
};

BYDHeaderComponent.prototype.setEstimate = function(e) {
  this._etaText = e || "";
  this._updateETA();
};

BYDHeaderComponent.prototype.setProductName = function(e) {
  this._productName = e || "";
  this._updateProductName();
};

BYDHeaderComponent.prototype.setView = function(e) {
  let t = e === "temperature" ? "temperature" : "voltage";
  if (this._view !== t) {
    this._view = t;
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.setDisplayUnit = function(e) {
  let t = e === "V" ? "V" : "mV";
  if (this._displayUnit !== t) {
    this._displayUnit = t;
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.showVoltage = function() {
  this.setView("voltage");
  this.dispatchEvent(
    new CustomEvent("toggle-view", { detail: { view: "voltage" } })
  );
};

BYDHeaderComponent.prototype.showTemperature = function() {
  this.setView("temperature");
  this.dispatchEvent(
    new CustomEvent("toggle-view", { detail: { view: "temperature" } })
  );
};
// ============================================================================
// BYD BATTERY HEADER - RENDER LOGIC
// ============================================================================

BYDHeaderComponent.prototype._render = function() {
  let e = this.shadowRoot;
  if (!e) return;

  // Calculate SOC class based on constants
  let socClass = this._soc <= BYD_CONFIG.SOC_THRESHOLDS.low ? "soc-low" :
                 this._soc <= BYD_CONFIG.SOC_THRESHOLDS.mid ? "soc-mid" : "soc-high";

  let powerClass = this._bmuPower < 0 ? "charge" :
                   this._bmuPower > 0 ? "discharge" : "";

  let tempChipClass = this._view === "temperature" ? "chip" : "chip secondary";
  let unitChipClass = this._view === "voltage" ? "chip" : "chip secondary";

  let headerText = this._getCurrentHeaderInfoText();
  let powerValue = Number(this._bmuPower) || 0;
  let powerLabel = powerValue < 0 ? "Charging" :
                   powerValue > 0 ? "Discharging" : "Idle";
  let powerDisplay = `${Math.abs(Math.round(powerValue))} W`;

  let towerEl = e.querySelector(".battery-tower");

  if (towerEl) {
    // OPT: Update instead of complete rebuild
    towerEl.className = `battery-tower ${socClass}`;

    let headerEl = e.querySelector(".header");
    if (headerEl) {
      headerEl.classList.toggle("charge", this._bmuPower < 0);
      headerEl.classList.toggle("discharge", this._bmuPower > 0);
    }

    // OPT: Cached element references with safeGetElement
    let unitEl = safeGetElement(e, "unit");
    let tempEl = safeGetElement(e, "temp");
    let viewmodeEl = safeGetElement(e, "viewmode");

    if (unitEl) {
      unitEl.className = unitChipClass;
      unitEl.style.display = this._showVTToggle ? "" : "none";
    }

    if (tempEl) {
      tempEl.className = tempChipClass;
      tempEl.style.display = this._showVTToggle ? "" : "none";
    }

    if (viewmodeEl) {
      viewmodeEl.style.display = this._showViewToggle ? "" : "none";
    }

    let headerInfoEl = safeGetElement(e, "header_information");
    if (headerInfoEl) {
      headerInfoEl.innerHTML = headerText;
      headerInfoEl.style.display = this._enabledHeaderInfoKeys().length ? "" : "none";
      headerInfoEl.style.cursor =
        this._enabledHeaderInfoKeys().length > 1 ? "pointer" : "default";
    }

    let powerEl = e.querySelector(".power");
    if (powerEl) {
      powerEl.style.display =
        this._showPower || (this._showETA && this._etaText) ? "" : "none";
    }

    let powerLabelEl = e.querySelector(".power .p-label");
    if (powerLabelEl) {
      powerLabelEl.textContent = powerLabel;
      powerLabelEl.style.display = this._showPower ? "" : "none";
    }

    let powerValueEl = e.querySelector(".power .p-value");
    if (powerValueEl) {
      powerValueEl.textContent = powerDisplay;
      powerValueEl.style.display = this._showPower ? "" : "none";
    }

    let powerEtaEl = e.querySelector(".power .p-eta");
    if (powerEtaEl) {
      powerEtaEl.style.display = this._showETA && this._etaText ? "" : "none";
    }

    let socFillEl = e.querySelector(".soc .fill");
    if (socFillEl) {
      socFillEl.style.width = `${Math.max(0, Math.min(100, this._soc))}%`;
    }

    let socLabelEl = e.querySelector(".soc .label");
    if (socLabelEl) {
      socLabelEl.textContent = formatNumber(this._soc, 1) + "%";
    }

    let capacityEl = safeGetElement(e, "capacity");
    if (capacityEl) {
      capacityEl.style.display = this._showProductCapacity ? "" : "none";
    }

    let logoEl = e.querySelector(".logo");
    if (logoEl) {
      logoEl.classList.toggle("nobrandInformation", !this._showProductCapacity);
    }

    let productNameEl = safeGetElement(e, "productname");
    if (productNameEl) {
      productNameEl.style.display = this._showProductCapacity ? "" : "none";
    }

    let unitDisplayEl = safeGetElement(e, "unit");
    if (unitDisplayEl) {
      unitDisplayEl.textContent = this._displayUnit;
    }

    let viewmodeDisplayEl = safeGetElement(e, "viewmode");
    if (viewmodeDisplayEl) {
      viewmodeDisplayEl.textContent =
        this._moduleView === "minimal" ? "Minimal" :
        this._moduleView === "none" ? "No Data" : "Detailed";
    }

    this._updateETA();
    this._applyResponsive();
    this._updateProductName();
    return;
  }

  // Initialization: Create DOM
  this._initializeDom(e, socClass, powerClass, tempChipClass, unitChipClass,
                      headerText, powerLabel, powerDisplay);
};

BYDHeaderComponent.prototype._initializeDom = function(e, socClass, powerClass, tempChipClass,
                                      unitChipClass, headerText, powerLabel, powerDisplay) {
  e.innerHTML = `
    <div class="battery-tower ${socClass}">
      <div class="header ${powerClass}">
        <div class="row top">
          <div class="logo">
            <div class="brandname">BYD</div>
            <div class="productname" id="productname"></div>
            <div class="capacity" id="capacity"></div>
          </div>
          <div class="${unitChipClass}" id="unit" style="${this._showVTToggle ? "" : "display:none"}">${this._displayUnit}</div>
          <div class="${tempChipClass}" id="temp" style="${this._showVTToggle ? "" : "display:none"}">°C</div>
          <div class="chip secondary" id="viewmode" style="${this._showViewToggle ? "" : "display:none"}">${this._moduleView === "minimal" ? "Minimal" : this._moduleView === "none" ? "No Data" : "Detailed"}</div>
          <div class="versions" id="header_information">${headerText}</div>
          <div class="power">
            <div class="p-label">${powerLabel}</div>
            <div class="p-value">${powerDisplay}</div>
            <div class="p-eta" id="eta"></div>
          </div>
        </div>
        <div class="row soc-row">
          <div class="soc">
            <div class="fill" style="width:${Math.max(0, Math.min(100, this._soc))}%"></div>
            <div class="label">${formatNumber(this._soc, 1)}%</div>
          </div>
        </div>
      </div>
    </div>`;

  this._removeAllListeners();
  this._attachEventListeners(e);
  this._updateCapacity();
  this._updateETA();
  this._applyResponsive();
  this._updateProductName();
};
// ============================================================================
// BYD BATTERY HEADER - EVENT LISTENERS
// ============================================================================

BYDHeaderComponent.prototype._attachEventListeners = function(e) {
  let unitEl = safeGetElement(e, "unit");
  let tempEl = safeGetElement(e, "temp");
  let viewmodeEl = safeGetElement(e, "viewmode");
  let headerInfoEl = safeGetElement(e, "header_information");

  // FIX: Listener functions defined and stored
  this._boundListeners.unit = (r) => {
    r.preventDefault();
    r.stopPropagation();
    this.showVoltage();
  };

  this._boundListeners.temp = (r) => {
    r.preventDefault();
    r.stopPropagation();
    this.showTemperature();
  };

  this._boundListeners.viewmode = (r) => {
    r.preventDefault();
    r.stopPropagation();
    if (this._showViewToggle) {
      this._moduleView = this._moduleView === "minimal" ? "detailed" : "minimal";
      this.dispatchEvent(
        new CustomEvent("toggle-module-view", {
          detail: { mode: this._moduleView },
        })
      );
      this._render();
    }
  };

  this._boundListeners.headerinfo = (r) => {
    r.preventDefault();
    r.stopPropagation();
    let M = this._enabledHeaderInfoKeys();
    if (M.length <= 1) return;
    this._headerInfoIndex = (this._headerInfoIndex + 1) % M.length;
    let l = safeGetElement(e, "header_information");
    if (l) {
      l.innerHTML = this._getCurrentHeaderInfoText();
    }
  };

  // FIX: Event Listeners attached
  unitEl?.addEventListener("pointerdown", this._boundListeners.unit);
  tempEl?.addEventListener("pointerdown", this._boundListeners.temp);
  viewmodeEl?.addEventListener("pointerdown", this._boundListeners.viewmode);
  headerInfoEl?.addEventListener("pointerdown", this._boundListeners.headerinfo);
};

BYDHeaderComponent.prototype._removeAllListeners = function() {
  let e = this.shadowRoot;
  if (!e) return;

  let unitEl = safeGetElement(e, "unit");
  let tempEl = safeGetElement(e, "temp");
  let viewmodeEl = safeGetElement(e, "viewmode");
  let headerInfoEl = safeGetElement(e, "header_information");

  // FIX: Remove all listeners
  unitEl?.removeEventListener("pointerdown", this._boundListeners.unit);
  tempEl?.removeEventListener("pointerdown", this._boundListeners.temp);
  viewmodeEl?.removeEventListener("pointerdown", this._boundListeners.viewmode);
  headerInfoEl?.removeEventListener("pointerdown", this._boundListeners.headerinfo);

  // FIX: Clear listener object (prevents memory leaks)
  this._boundListeners = {};
};
// ============================================================================
// BYD BATTERY HEADER - RESIZE OBSERVER & RENDER SCHEDULING
// ============================================================================

BYDHeaderComponent.prototype._setupResizeObserver = function() {
  if (this._ro) return;

  if (typeof ResizeObserver < "u") {
    this._ro = new ResizeObserver(() => this._applyResponsive());
    this._ro.observe(this);
  } else {
    window.addEventListener("resize", () => this._applyResponsive());
  }
};

BYDHeaderComponent.prototype._cleanupResizeObserver = function() {
  if (this._ro) {
    this._ro.disconnect();
    this._ro = null;
  }
};

BYDHeaderComponent.prototype._applyResponsive = function() {
  let e = this.shadowRoot;
  if (!e) return;

  let headerInfoEl = safeGetElement(e, "header_information");
  let width = this.getBoundingClientRect().width || 0;

  if (headerInfoEl) {
    headerInfoEl.style.display =
      width < 300 || this._enabledHeaderInfoKeys().length === 0 ? "none" : "";
  }
};

BYDHeaderComponent.prototype._scheduleRender = function() {
  // FIX: Render debouncing - prevents excessive renders
  if (this._renderScheduled && this._renderFrame) {
    cancelAnimationFrame(this._renderFrame);
  }

  this._renderScheduled = true;
  this._renderFrame = requestAnimationFrame(() => {
    this._render();
    this._renderScheduled = false;
    this._renderFrame = null;
  });
};
// ============================================================================
// BYD BATTERY HEADER - HEADER INFORMATION & UI TOGGLES
// ============================================================================

BYDHeaderComponent.prototype._enabledHeaderInfoKeys = function() {
  let show = this._headerInfo?.show || {};
  let keys = ["versions", "ui", "energy", "efficiency"].filter(
    (i) => show[i] !== false
  );
  return keys.length ? keys : ["versions", "ui", "energy", "efficiency"];
};

BYDHeaderComponent.prototype._currentHeaderKey = function() {
  let keys = this._enabledHeaderInfoKeys();
  if (keys.length === 0) return "";

  let defaultKey = this._headerInfo?.default || "versions";
  let index = (Math.max(0, keys.indexOf(defaultKey)) +
               (this._headerInfoIndex || 0)) % keys.length;
  return keys[index];
};

BYDHeaderComponent.prototype._getCurrentHeaderInfoText = function() {
  let payload = this._headerInfo?.payload || {};
  let keys = this._enabledHeaderInfoKeys();

  if (keys.length === 0) return "";

  let defaultKey = this._headerInfo?.default || "versions";
  let defaultIndex = keys.indexOf(defaultKey);
  let index = defaultIndex >= 0 ? defaultIndex : 0;

  let currentIndex = (index + this._headerInfoIndex) % keys.length;
  let currentKey = keys[currentIndex];

  if (currentKey === "versions") {
    return payload.versionsText ||
           `BMU ${this._bmuVersion || ""}<br>BMS ${this._bmsVersion || ""}`;
  } else if (currentKey === "ui") {
    return payload.uiText || this._uiMeta || "";
  } else if (currentKey === "energy") {
    return payload.energyText || "";
  } else if (currentKey === "efficiency") {
    return payload.effText || "";
  }
  return "";
};

BYDHeaderComponent.prototype.setShowVTToggle = function(e) {
  let t = this._showVTToggle;
  this._showVTToggle = e !== false;
  if (t !== this._showVTToggle) {
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.setShowViewToggle = function(e) {
  let t = this._showViewToggle;
  this._showViewToggle = !!e;
  if (t !== this._showViewToggle) {
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.setModuleView = function(e) {
  let t = this._moduleView;
  this._moduleView =
    e === "minimal" ? "minimal" : e === "none" ? "none" : "detailed";
  if (t !== this._moduleView) {
    this._scheduleRender();
  }
};

BYDHeaderComponent.prototype.setHeaderInformation = function(e) {
  if (e && typeof e == "object") {
    let currentKey = this._currentHeaderKey();
    this._headerInfo = {
      default: e.default || "versions",
      show: e.show || this._headerInfo.show,
      payload: e.payload || this._headerInfo.payload,
    };

    let newKeys = this._enabledHeaderInfoKeys();
    let newDefaultKey = this._headerInfo.default || "versions";
    let newDefaultIndex = Math.max(0, newKeys.indexOf(newDefaultKey));

    if (currentKey && newKeys.includes(currentKey)) {
      let offset = (newKeys.indexOf(currentKey) - newDefaultIndex + newKeys.length) % newKeys.length;
      this._headerInfoIndex = offset;
    } else {
      this._headerInfoIndex = 0;
    }

    this._render();
  }
};

BYDHeaderComponent.prototype.setHeaderDisplayOptions = function(e) {
  if (e && typeof e == "object") {
    if (e.showPower !== void 0) {
      this._showPower = !!e.showPower;
    }
    if (e.showETA !== void 0) {
      this._showETA = !!e.showETA;
    }
    if (e.showProductCapacity !== void 0) {
      this._showProductCapacity = !!e.showProductCapacity;
    }
    this._render();
  }
};
// ============================================================================
// BYD BATTERY HEADER - UPDATE HELPER METHODS
// ============================================================================

BYDHeaderComponent.prototype._updateCapacity = function() {
  let e = this.shadowRoot;
  if (!e) return;

  let capacityEl = safeGetElement(e, "capacity");
  if (!capacityEl) return;

  let capacity = Number(this._towerCapacityWh) || 0;
  if (capacity > 0) {
    let kWh = capacity / 1000;
    capacityEl.textContent = `${kWh.toFixed(1)} kWh`;
  } else {
    capacityEl.textContent = "";
  }
};

BYDHeaderComponent.prototype._updateETA = function() {
  let e = this.shadowRoot;
  if (!e) return;

  let etaEl = safeGetElement(e, "eta");
  if (etaEl) {
    etaEl.textContent = this._etaText || "";
    etaEl.style.display = this._showETA && this._etaText ? "" : "none";
  }
};

BYDHeaderComponent.prototype._updateProductName = function() {
  let e = this.shadowRoot;
  if (!e) return;

  let productNameEl = safeGetElement(e, "productname");
  if (productNameEl) {
    productNameEl.textContent = this._productName || "";
  }
};

// Registriere Custom Element
customElements.get("byd-battery-header") ||
  customElements.define("byd-battery-header", BYDHeaderComponent);
// ============================================================================
// BYD BATTERY MODULE COMPONENT - OPTIMIZED
// ============================================================================

var BYDModuleComponent = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    // Configuration
    this._name = "BMS";
    this._view = "voltage";
    this._yAxis = true;
    
    // Data Arrays
    this._voltage = [];
    this._histMax = [];
    this._histMin = [];
    this._temp = [];
    this._balancing = [];
    
    // Chart Configuration
    this._chart = {
      vMin: BYD_CONFIG.CHART_DEFAULTS.vMin,
      vMax: BYD_CONFIG.CHART_DEFAULTS.vMax,
      tMin: BYD_CONFIG.CHART_DEFAULTS.tMin,
      tMax: BYD_CONFIG.CHART_DEFAULTS.tMax,
    };
    
    // Last Values für Animationen
    this._last = { voltage: [], temp: [], histMin: [], histMax: [] };
    
    // Tooltip State
    this._tip = { showUntil: 0, x: 0, y: 0, text: "" };
    
    // UI Flags
    this._showGrayCaps = true;
    this._displayUnit = "mV";
    this._moduleView = "detailed";
    
    // Event Listeners & Lifecycle
    this._cellListeners = [];
    this._tooltipTimeout = null;
    this._renderScheduled = false;
    this._renderFrame = null;
  }

  connectedCallback() {
    this._render();
    this._adoptCss();
  }

  disconnectedCallback() {
    // FIX: Umfassende Cleanup-Routine
    if (this._renderFrame) {
      cancelAnimationFrame(this._renderFrame);
      this._renderFrame = null;
    }
    this._renderScheduled = false;
    this._cleanupListeners();
    this._cleanupTooltip();
    
    // FIX: Speicher freigeben
    this._voltage = [];
    this._histMax = [];
    this._histMin = [];
    this._temp = [];
    this._balancing = [];
    this._last = { voltage: [], temp: [], histMin: [], histMax: [] };
  }
};
// ============================================================================
// BYD BATTERY MODULE - CSS & DATA SETTERS
// ============================================================================

BYDModuleComponent.prototype._adoptCss = function() {
  try {
    if (this._sheet || !this.shadowRoot) return;

    let e = typeof globalThis < "u" ? globalThis :
            typeof window < "u" ? window : void 0;

    let t = () => {
      let a = e && e.__BYD_CSS_SHEET;
      if (a) {
        this.shadowRoot.adoptedStyleSheets = [a];
        this._sheet = a;
      }
    };

    if (e && e.__BYD_CSS_SHEET) {
      t();
      return;
    }

    let i = () => {
      window.removeEventListener("byd-css-ready", i);
      t();
    };
    window.addEventListener("byd-css-ready", i);
  } catch {}
};

BYDModuleComponent.prototype._cleanupListeners = function() {
  // FIX: Alle Event Listener vollständig entfernen
  this._cellListeners.forEach((listener) => {
    if (listener.element) {
      listener.element.removeEventListener("pointerenter", listener.enter);
      listener.element.removeEventListener("pointermove", listener.move);
      listener.element.removeEventListener("pointerleave", listener.leave);
      listener.element.removeEventListener("pointerdown", listener.down);
    }
  });
  this._cellListeners = [];
};

BYDModuleComponent.prototype._cleanupTooltip = function() {
  if (this._tooltipTimeout) {
    clearTimeout(this._tooltipTimeout);
    this._tooltipTimeout = null;
  }
};

BYDModuleComponent.prototype._scheduleRender = function() {
  // FIX: Render Debouncing
  if (this._renderScheduled && this._renderFrame) {
    cancelAnimationFrame(this._renderFrame);
  }

  this._renderScheduled = true;
  this._renderFrame = requestAnimationFrame(() => {
    this._render();
    this._renderScheduled = false;
    this._renderFrame = null;
  });
};

BYDModuleComponent.prototype.setVoltage = function(e) {
  this._setArray("voltage", e);
  this._scheduleRender();
};

BYDModuleComponent.prototype.setHistoryMaxVoltage = function(e) {
  this._setArray("histMax", e);
  this._scheduleRender();
};

BYDModuleComponent.prototype.setHistoryMinVoltage = function(e) {
  this._setArray("histMin", e);
  this._scheduleRender();
};

BYDModuleComponent.prototype.setChartMaxVoltage = function(e) {
  let t = this._chart.vMax;
  this._chart.vMax = Number(e) || this._chart.vMax;
  if (t !== this._chart.vMax) {
    this._scheduleRender();
  }
};

BYDModuleComponent.prototype.setChartMinVoltage = function(e) {
  let t = this._chart.vMin;
  this._chart.vMin = Number(e) || this._chart.vMin;
  if (t !== this._chart.vMin) {
    this._scheduleRender();
  }
};

BYDModuleComponent.prototype.setTemperature = function(e) {
  this._setArray("temp", e);
  this._scheduleRender();
};

BYDModuleComponent.prototype.setChartMaxTemperature = function(e) {
  let t = this._chart.tMax;
  this._chart.tMax = Number(e) || this._chart.tMax;
  if (t !== this._chart.tMax) {
    this._scheduleRender();
  }
};

BYDModuleComponent.prototype.setChartMinTemperature = function(e) {
  let t = this._chart.tMin;
  this._chart.tMin = Number(e) || this._chart.tMin;
  if (t !== this._chart.tMin) {
    this._scheduleRender();
  }
};

BYDModuleComponent.prototype.setCellBallancing = function(e) {
  this._balancing = Array.isArray(e) ? e : [];
  this._scheduleRender();
};

BYDModuleComponent.prototype.setShowGrayCaps = function(e) {
  let t = this._showGrayCaps;
  this._showGrayCaps = e !== false;
  if (t !== this._showGrayCaps) {
    this._scheduleRender();
  }
};

BYDModuleComponent.prototype.setDisplayUnit = function(e) {
  let t = this._displayUnit;
  this._displayUnit = e === "V" ? "V" : "mV";
  if (t !== this._displayUnit) {
    this._scheduleRender();
  }
};

BYDModuleComponent.prototype.setModuleView = function(e) {
  let t = this._moduleView;
  this._moduleView = 
    e === "minimal" ? "minimal" : e === "none" ? "none" : "detailed";
  if (t !== this._moduleView) {
    this._scheduleRender();
  }
};
// ============================================================================
// BYD BATTERY MODULE - VIEW & ARRAY OPERATIONS
// ============================================================================

BYDModuleComponent.prototype.setStateOfCharge = function() {};
BYDModuleComponent.prototype.setStateOfHealth = function() {};
BYDModuleComponent.prototype.setEfficiency = function() {};
BYDModuleComponent.prototype.setBMUPower = function() {};
BYDModuleComponent.prototype.setBMUVersion = function() {};
BYDModuleComponent.prototype.setBMSVersion = function() {};

BYDModuleComponent.prototype.showVoltage = function() {
  this._view = "voltage";
  this._scheduleRender();
};

BYDModuleComponent.prototype.showTemperature = function() {
  this._view = "temperature";
  this._scheduleRender();
};

BYDModuleComponent.prototype.showYAxisValues = function() {
  this._yAxis = true;
  this._scheduleRender();
};

BYDModuleComponent.prototype.hideYAxisValues = function() {
  this._yAxis = false;
  this._scheduleRender();
};

Object.defineProperty(BYDModuleComponent.prototype, "name", {
  set: function(e) {
    this._name = e;
    this._render();
  },
  get: function() {
    return this._name;
  }
});

BYDModuleComponent.prototype._setArray = function(e, t) {
  // FIX: Effiziente Array-Verwaltung
  let i = e === "voltage" ? "voltage" :
          e === "histMax" ? "histMax" :
          e === "histMin" ? "histMin" : e;

  if (!Array.isArray(t)) return;

  // Speichere alte Werte für Animationen
  if (i === "voltage") {
    this._last.voltage = this._voltage;
  } else if (i === "temp") {
    this._last.temp = this._temp;
  } else if (i === "histMin") {
    this._last.histMin = this._histMin;
  } else if (i === "histMax") {
    this._last.histMax = this._histMax;
  }

  // Setze neue Werte
  this["_" + i] = t;
};

BYDModuleComponent.prototype._getAxis = function() {
  if (this._view === "temperature") {
    return {
      min: this._chart.tMin,
      max: this._chart.tMax,
      unit: "°C"
    };
  }

  // FIX: Effiziente Min/Max Berechnung mit getValidNumbers
  let validMin = getValidNumbers(this._histMin);
  let validVoltage = getValidNumbers(this._voltage);
  let validMax = getValidNumbers(this._histMax);

  let min = this._chart.vMin ??
            (validMin.length ? Math.min(...validMin) :
             validVoltage.length ? Math.min(...validVoltage) : 3100);

  let max = this._chart.vMax ??
            (validMax.length ? Math.max(...validMax) :
             validVoltage.length ? Math.max(...validVoltage) : 3700);

  let unit = this._displayUnit === "V" ? "V" : "mV";

  return { min, max, unit };
};
// ============================================================================
// BYD BATTERY MODULE - RENDER MINIMAL VIEW
// ============================================================================

// ============================================================================
// BYD BATTERY MODULE - MAIN RENDER LOGIC
// ============================================================================

BYDModuleComponent.prototype._render = function() {
  let e = this.shadowRoot;
  if (!e) return;
  
  // FIX: Cleanup vor neuem Render
  this._cleanupListeners();
  this._cleanupTooltip();
  
  let axis = this._getAxis();
  let isTemperature = this._view === "temperature";
  
  // Minimal View
  if (this._moduleView === "minimal") {
    this._renderMinimalView(e);
    return;
  }
  
  // No Data View
  if (this._moduleView === "none") {
    e.innerHTML = `
      <div class="battery-module nodata no-axis">
        <div class="module-name">${this._name || ""}</div>
      </div>`;
    return;
  }
  
  // Detailed View - Initial HTML
  e.innerHTML = `
    <div class="battery-module ${this._yAxis ? "" : "no-axis"}">
      <div class="axis" style="display:${this._yAxis ? "block" : "none"}"></div>
      <div class="chart"></div>
      <div class="module-name">${this._name || ""}</div>
    </div>`;
  
  let axisEl = e.querySelector(".axis");
  if (this._yAxis && axisEl) {
    this._renderAxis(axisEl, axis);
  }
  
  let chartEl = e.querySelector(".chart");
  if (!chartEl) return;
  
  // Tooltip Element
  let tooltipEl = document.createElement("div");
  tooltipEl.className = "tooltip";
  tooltipEl.style.display = "none";
  chartEl.appendChild(tooltipEl);
  
  let hideTooltip = () => {
    if (!tooltipEl._sticky) {
      tooltipEl.style.display = "none";
    }
  };
  
  // Grid Lines
  if (this._yAxis) {
    let gridEl = document.createElement("div");
    gridEl.className = "grid-lines";
    
    for (let i = 0; i <= BYD_CONFIG.GRID_LINES; i++) {
      let ratio = i / BYD_CONFIG.GRID_LINES;
      let lineEl = document.createElement("div");
      lineEl.className = "line";
      lineEl.style.top = `${(1 - ratio) * 100}%`;
      gridEl.appendChild(lineEl);
    }
    chartEl.appendChild(gridEl);
  }
  
  // Cells Container
  let cellsEl = document.createElement("div");
  cellsEl.className = "cells";
  
  let data = isTemperature ? this._temp : this._voltage;
  let cellCount = data.length;
  let maxValue = axis.max;
  let minValue = axis.min;
  
  let normalizeValue = (r) => {
    return r == null || isNaN(r) || maxValue === minValue
      ? 0
      : ((Math.min(maxValue, Math.max(minValue, Number(r))) - minValue) / 
         (maxValue - minValue)) * 100;
  };
  
  let formatDisplayValue = (r) => {
    if (isTemperature) {
      return `${formatNumber(r, 1)} °C`;
    }
    return this._displayUnit === "V"
      ? `${(Number(r) / 1000).toLocaleString(void 0, { 
          minimumFractionDigits: 3, 
          maximumFractionDigits: 3 
        })} V`
      : `${Math.round(Number(r))} mV`;
  };
  
  // Berechne Voltage Offset für Nicht-Temperatur-View
  let voltageOffset = 0;
  if (!isTemperature) {
    let offsets = [];
    for (let i = 0; i < cellCount; i++) {
      let v = Number(this._voltage[i]);
      let histMin = Number(this._histMin[i]);
      if (Number.isFinite(v) && Number.isFinite(histMin)) {
        offsets.push(Math.max(0, v - histMin));
      }
    }
    if (offsets.length > 0) {
      let avgOffset = offsets.reduce((a, b) => a + b, 0) / offsets.length;
      if (avgOffset < 20) {
        voltageOffset = 150;
      }
    }
  }
  
  // Render Cells
  for (let i = 0; i < cellCount; i++) {
    let cellValue = Number(data[i]);
    let cellEl = document.createElement("div");
    cellEl.className = "cell";
    
    let cellMin = minValue;
    let cellMax = maxValue;
    
    if (!isTemperature) {
      let histMin = Number(this._histMin[i]);
      let histMax = Number(this._histMax[i]);
      
      if (Number.isFinite(histMin)) cellMin = histMin;
      if (Number.isFinite(histMax)) cellMax = histMax;
      
      // Render Min Cap (Grün oder Blau)
      if (Number.isFinite(cellMin) && cellMin > minValue) {
        let isBalancing = this._balancing && 
                         (this._balancing[i] === true || this._balancing[i] === 1);
        let capEl = document.createElement("div");
        capEl.className = "bar " + (isBalancing ? "bluecap" : "greencap");
        capEl.style.height = normalizeValue(cellMin) + "%";
        cellEl.appendChild(capEl);
      }
      
      // Render Max Cap (Grau)
      let cellPercent = normalizeValue(cellValue);
      if (this._showGrayCaps && Number.isFinite(cellMax)) {
        let maxPercent = normalizeValue(cellMax);
        let maxCapHeight = Math.max(0, maxPercent - cellPercent);
        if (maxCapHeight > 0) {
          let maxCapEl = document.createElement("div");
          maxCapEl.className = "bar max";
          maxCapEl.style.bottom = cellPercent + "%";
          maxCapEl.style.height = maxCapHeight + "%";
          cellEl.appendChild(maxCapEl);
        }
      }
    }
    
    // Render Current Value Bar
    let barEl = document.createElement("div");
    barEl.className = "bar cur";
    
    let cellMinNorm = normalizeValue(cellMin - voltageOffset);
    let cellValuePercent = normalizeValue(cellValue);
    let barHeight = Math.max(0, cellValuePercent - cellMinNorm);
    
    // Animation für Wertänderung
    let lastValue = isTemperature ? this._last.temp[i] : this._last.voltage[i];
    if (lastValue !== void 0 && !Number.isNaN(Number(lastValue))) {
      let lastMin = cellMin;
      if (!isTemperature) {
        let lastHistMin = Number(this._last.histMin[i]);
        if (Number.isFinite(lastHistMin)) lastMin = lastHistMin;
      }
      
      let lastMinNorm = normalizeValue(lastMin - voltageOffset);
      let lastValueNorm = normalizeValue(Number(lastValue));
      let lastHeight = Math.max(0, lastValueNorm - lastMinNorm);
      
      barEl.style.transition = "none";
      barEl.style.bottom = lastMinNorm + "%";
      barEl.style.height = lastHeight + "%";
      
      requestAnimationFrame(() => {
        barEl.style.transition = "height .6s ease, bottom .6s ease";
        barEl.style.bottom = cellMinNorm + "%";
        barEl.style.height = barHeight + "%";
      });
    } else {
      barEl.style.bottom = cellMinNorm + "%";
      barEl.style.height = barHeight + "%";
    }
    
    // Balancing Klasse
    if (!isTemperature && this._balancing && 
        (this._balancing[i] === true || this._balancing[i] === 1)) {
      cellEl.classList.add("balancing");
    }
    
    cellEl.appendChild(barEl);
    
    // Event Listener für Tooltip
    this._attachCellListeners(cellEl, chartEl, tooltipEl, cellValue, 
                             formatDisplayValue, hideTooltip, i);
    
    cellsEl.appendChild(cellEl);
  }
  
  chartEl.appendChild(cellsEl);
  
  // Restore Tooltip wenn noch aktiv
  if (this._tip?.showUntil && Date.now() < this._tip.showUntil) {
    this._restoreTooltip(tooltipEl, chartEl);
  }
  
  // Chart-level Mouse Events
  if (cellCount > 0) {
    this._attachChartListeners(chartEl, tooltipEl, data, axis, 
                              formatDisplayValue, hideTooltip);
  }
};

BYDModuleComponent.prototype._attachCellListeners = function(cellEl, chartEl, tooltipEl,
                                           cellValue, formatDisplayValue,
                                           hideTooltip, index) {
  let showTooltip = (evt) => {
    let chartRect = chartEl.getBoundingClientRect();
    tooltipEl.style.display = "block";
    tooltipEl.textContent = formatDisplayValue(cellValue);
    
    let tooltipWidth = tooltipEl.offsetWidth || 50;
    let tooltipHeight = tooltipEl.offsetHeight || 20;
    
    let hasValidCoords = evt && typeof evt.clientX === "number" && 
                        typeof evt.clientY === "number" && 
                        (evt.clientX !== 0 || evt.clientY !== 0);
    
    let x, y;
    if (hasValidCoords) {
      x = evt.clientX - chartRect.left + 10;
      y = evt.clientY - chartRect.top - 10 - tooltipHeight;
    } else {
      let cellRect = cellEl.getBoundingClientRect();
      x = cellRect.left - chartRect.left + cellRect.width / 2 + 8;
      y = cellRect.top - chartRect.top - tooltipHeight - 8;
    }
    
    x = Math.max(6, Math.min(x, chartRect.width - tooltipWidth - 6));
    y = Math.max(6, Math.min(y, chartRect.height - tooltipHeight - 6));
    
    tooltipEl.style.left = `${x}px`;
    tooltipEl.style.top = `${y}px`;
    
    this._tip.x = x;
    this._tip.y = y;
    this._tip.text = formatDisplayValue(cellValue);
  };
  
  let onEnter = (evt) => showTooltip(evt);
  let onMove = (evt) => showTooltip(evt);
  let onLeave = () => hideTooltip();
  let onDown = (evt) => {
    showTooltip(evt);
    tooltipEl.style.display = "block";
    tooltipEl._sticky = true;
    
    let now = Date.now();
    this._tip.showUntil = now + 3000;
    
    this._cleanupTooltip();
    this._tooltipTimeout = setTimeout(() => {
      tooltipEl._sticky = false;
      this._tip.showUntil = 0;
      hideTooltip();
    }, 3000);
  };
  
  cellEl.addEventListener("pointerenter", onEnter);
  cellEl.addEventListener("pointermove", onMove);
  cellEl.addEventListener("pointerleave", onLeave);
  cellEl.addEventListener("pointerdown", onDown);
  
  this._cellListeners.push({
    element: cellEl,
    enter: onEnter,
    move: onMove,
    leave: onLeave,
    down: onDown,
  });
};

BYDModuleComponent.prototype._restoreTooltip = function(tooltipEl, chartEl) {
  let chartRect = chartEl.getBoundingClientRect();
  let tooltipWidth = tooltipEl.offsetWidth || 50;
  let tooltipHeight = tooltipEl.offsetHeight || 20;
  
  let x = this._tip.x;
  let y = this._tip.y;
  
  x = Math.max(6, Math.min(x, chartRect.width - tooltipWidth - 6));
  y = Math.max(6, Math.min(y, chartRect.height - tooltipHeight - 6));
  
  tooltipEl.style.display = "block";
  tooltipEl.textContent = this._tip.text || "";
  tooltipEl.style.left = `${x}px`;
  tooltipEl.style.top = `${y}px`;
  tooltipEl._sticky = true;
  
  this._cleanupTooltip();
  let remaining = Math.max(0, this._tip.showUntil - Date.now());
  this._tooltipTimeout = setTimeout(() => {
    tooltipEl._sticky = false;
    this._tip.showUntil = 0;
    tooltipEl.style.display = "none";
  }, remaining);
};

BYDModuleComponent.prototype._attachChartListeners = function(chartEl, tooltipEl, data, axis,
                                            formatDisplayValue, hideTooltip) {
  let clamp = (val, min, max) => Math.max(min, Math.min(max, val));
  
  let updateTooltipForIndex = (evt, index) => {
    let chartRect = chartEl.getBoundingClientRect();
    let value = data[index];
    
    tooltipEl.style.display = "block";
    tooltipEl.textContent = formatDisplayValue(value);
    
    let tooltipWidth = tooltipEl.offsetWidth || 50;
    let tooltipHeight = tooltipEl.offsetHeight || 20;
    
    let x = (evt?.clientX ?? chartRect.left + chartRect.width / 2) - chartRect.left + 10;
    let y = (evt?.clientY ?? chartRect.top + chartRect.height / 2) - chartRect.top - 10 - tooltipHeight;
    
    x = clamp(x, 6, chartRect.width - tooltipWidth - 6);
    y = clamp(y, 6, chartRect.height - tooltipHeight - 6);
    
    tooltipEl.style.left = `${x}px`;
    tooltipEl.style.top = `${y}px`;
    
    this._tip.x = x;
    this._tip.y = y;
    this._tip.text = `${value} ${axis.unit}`;
  };
  
  chartEl.addEventListener("pointermove", (evt) => {
    let chartRect = chartEl.getBoundingClientRect();
    let chartWidth = chartRect.width - 12;
    let ratio = clamp((evt.clientX - chartRect.left - 6) / (chartWidth || 1), 0, 1);
    let cellIndex = clamp(Math.floor(ratio * data.length), 0, data.length - 1);
    
    updateTooltipForIndex(evt, cellIndex);
  });
  
  chartEl.addEventListener("pointerleave", hideTooltip);
};
// ============================================================================
// BYD BATTERY MODULE - AXIS RENDERING
// ============================================================================

BYDModuleComponent.prototype._renderAxis = function(axisEl, axis) {
  if (!axisEl) return;
  
  axisEl.innerHTML = "";
  
  for (let i = 0; i <= BYD_CONFIG.GRID_LINES; i++) {
    let ratio = i / BYD_CONFIG.GRID_LINES;
    
    let tickEl = document.createElement("div");
    tickEl.className = "tick";
    tickEl.style.top = `${(1 - ratio) * 100}%`;
    
    let labelEl = document.createElement("div");
    labelEl.className = "label";
    
    let value = axis.min + (axis.max - axis.min) * ratio;
    let labelText;
    
    if (axis.unit === "°C") {
      labelText = `${formatNumber(value, 1)} ${axis.unit}`;
    } else if (axis.unit === "V") {
      labelText = `${(Number(value) / 1000).toLocaleString(void 0, { 
        minimumFractionDigits: 3, 
        maximumFractionDigits: 3 
      })} V`;
    } else {
      labelText = `${Math.round(Number(value))} mV`;
    }
    
    labelEl.textContent = labelText;
    labelEl.style.top = `${(1 - ratio) * 100}%`;
    
    axisEl.appendChild(tickEl);
    axisEl.appendChild(labelEl);
  }
};

// Register Custom Element
customElements.get("byd-battery-module") ||
  customElements.define("byd-battery-module", BYDModuleComponent);
// ============================================================================
// BYD BATTERY STAND COMPONENT
// ============================================================================

var K = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._render();
    this._adoptCss();
  }

  _adoptCss() {
    try {
      let e = typeof globalThis < "u" ? globalThis : 
              typeof window < "u" ? window : void 0;
      if (this._sheet || !this.shadowRoot) return;
      
      let t = () => {
        let a = e && e.__BYD_CSS_SHEET;
        if (a) {
          this.shadowRoot.adoptedStyleSheets = [a];
          this._sheet = a;
        }
      };
      
      if (e && e.__BYD_CSS_SHEET) {
        t();
        return;
      }
      
      let i = () => {
        window.removeEventListener("byd-css-ready", i);
        t();
      };
      window.addEventListener("byd-css-ready", i);
    } catch {}
  }

  _render() {
    this.shadowRoot.innerHTML =
      '<div class="battery-stand"><div class="foot left"></div><div class="foot right"></div></div>';
  }
};

customElements.get("byd-battery-stand") ||
  customElements.define("byd-battery-stand", K);
// ============================================================================
// BYD BATTERY TOWER COMPONENT - OPTIMIZED
// ============================================================================

var BYDTowerComponent = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    this._index = Number(this.getAttribute("index")) || 1;
    this._modules = 2;
    this._header = null;
    this._moduleEls = [];
    
    this._chartV = {
      min: BYD_CONFIG.CHART_DEFAULTS.vMin,
      max: BYD_CONFIG.CHART_DEFAULTS.vMax,
    };
    
    this._chartT = {
      min: BYD_CONFIG.CHART_DEFAULTS.tMin,
      max: BYD_CONFIG.CHART_DEFAULTS.tMax,
    };
    
    this._view = "voltage";
    this._displayUnit = "mV";
    this._moduleView = "detailed";
  }

  connectedCallback() {
    this._render();
    this._adoptCss();
  }

  disconnectedCallback() {
    // FIX: Cleanup Module-Referenzen
    if (this._moduleEls) {
      this._moduleEls.forEach((el) => {
        el?.disconnectedCallback?.();
      });
      this._moduleEls = [];
    }
    this._header = null;
  }

  _adoptCss() {
    try {
      if (this._sheet || !this.shadowRoot) return;
      
      let e = typeof globalThis < "u" ? globalThis : 
              typeof window < "u" ? window : void 0;
      
      let t = () => {
        let a = e && e.__BYD_CSS_SHEET;
        if (a) {
          this.shadowRoot.adoptedStyleSheets = [a];
          this._sheet = a;
        }
      };
      
      if (e && e.__BYD_CSS_SHEET) {
        t();
        return;
      }
      
      let i = () => {
        window.removeEventListener("byd-css-ready", i);
        t();
      };
      window.addEventListener("byd-css-ready", i);
    } catch {}
  }

  setModules(e) {
    this._modules = Math.max(
      BYD_CONFIG.CELL_DEFAULTS.minCount,
      Math.min(BYD_CONFIG.CELL_DEFAULTS.maxCount, Number(e) || 2)
    );
    this._render();
  }

  getModulesCount() {
    return this._modules;
  }
};
// ============================================================================
// BYD BATTERY TOWER - DATA SETTERS
// ============================================================================

BYDTowerComponent.prototype.setVoltage = function(e) {
  this._eachModuleData(e, (t, i) => t.setVoltage(i));
};

BYDTowerComponent.prototype.setHistoryMaxVoltage = function(e) {
  this._eachModuleData(e, (t, i) => t.setHistoryMaxVoltage(i));
};

BYDTowerComponent.prototype.setHistoryMinVoltage = function(e) {
  this._eachModuleData(e, (t, i) => t.setHistoryMinVoltage(i));
};

BYDTowerComponent.prototype.setChartMaxVoltage = function(e) {
  this._chartV.max = Number(e) || this._chartV.max;
  this._moduleEls.forEach((t) => t.setChartMaxVoltage(this._chartV.max));
};

BYDTowerComponent.prototype.setChartMinVoltage = function(e) {
  this._chartV.min = Number(e) || this._chartV.min;
  this._moduleEls.forEach((t) => t.setChartMinVoltage(this._chartV.min));
};

BYDTowerComponent.prototype.setTemperature = function(e) {
  this._eachModuleData(e, (t, i) => t.setTemperature(i));
};

BYDTowerComponent.prototype.setChartMaxTemperature = function(e) {
  this._chartT.max = Number(e) || this._chartT.max;
  this._moduleEls.forEach((t) => t.setChartMaxTemperature(this._chartT.max));
};

BYDTowerComponent.prototype.setChartMinTemperature = function(e) {
  this._chartT.min = Number(e) || this._chartT.min;
  this._moduleEls.forEach((t) => t.setChartMinTemperature(this._chartT.min));
};

BYDTowerComponent.prototype.setCellBallancing = function(e) {
  this._eachModuleData(e, (t, i) => t.setCellBallancing(i));
};

BYDTowerComponent.prototype.setStateOfCharge = function(e) {
  this._header?.setStateOfCharge(e);
};

BYDTowerComponent.prototype.setStateOfHealth = function(e) {
  this._header?.setStateOfHealth(e);
};

BYDTowerComponent.prototype.setEfficiency = function(e) {};

BYDTowerComponent.prototype.setBMUPower = function(e) {
  this._header?.setBMUPower(e);
};

BYDTowerComponent.prototype.setBMUVersion = function(e) {
  this._header?.setBMUVersion(e);
};

BYDTowerComponent.prototype.setBMSVersion = function(e) {
  this._header?.setBMSVersion(e);
};

BYDTowerComponent.prototype.setUIMeta = function(e) {
  this._header?.setUIMeta?.(e);
};

BYDTowerComponent.prototype.setTowerCapacityWh = function(e) {
  this._header?.setTowerCapacityWh?.(e);
};

BYDTowerComponent.prototype.setEstimate = function(e) {
  this._header?.setEstimate?.(e);
};

BYDTowerComponent.prototype.setProductName = function(e) {
  this._header?.setProductName?.(e);
};

BYDTowerComponent.prototype.setDisplayUnit = function(e) {
  this._displayUnit = e === "V" ? "V" : "mV";
  this._header?.setDisplayUnit?.(this._displayUnit);
  this._moduleEls.forEach((t) => t.setDisplayUnit?.(this._displayUnit));
};

BYDTowerComponent.prototype.setModuleView = function(e) {
  this._moduleView = 
    e === "minimal" ? "minimal" : e === "none" ? "none" : "detailed";
  this._header?.setModuleView?.(this._moduleView);
  this._moduleEls.forEach((t) => t.setModuleView?.(this._moduleView));
};

BYDTowerComponent.prototype.getModuleView = function() {
  return this._moduleView;
};

BYDTowerComponent.prototype.setHeaderInformation = function(e) {
  this._header?.setHeaderInformation?.(e);
};

BYDTowerComponent.prototype.setShowVTToggle = function(e) {
  this._header?.setShowVTToggle?.(e);
};

BYDTowerComponent.prototype.setShowViewToggle = function(e) {
  this._header?.setShowViewToggle?.(e);
};

BYDTowerComponent.prototype.showVoltage = function() {
  this._view = "voltage";
  this._header?.setView?.("voltage");
  this._moduleEls.forEach((e) => e.showVoltage());
};

BYDTowerComponent.prototype.showTemperature = function() {
  this._view = "temperature";
  this._header?.setView?.("temperature");
  this._moduleEls.forEach((e) => e.showTemperature());
};

BYDTowerComponent.prototype.getView = function() {
  return this._view;
};

BYDTowerComponent.prototype.showYAxisValues = function() {
  this._moduleEls.forEach((e) => e.showYAxisValues());
};

BYDTowerComponent.prototype.hideYAxisValues = function() {
  this._moduleEls.forEach((e) => e.hideYAxisValues());
};

BYDTowerComponent.prototype.setShowGrayCaps = function(e) {
  this._moduleEls.forEach((t) => t.setShowGrayCaps?.(e));
};

BYDTowerComponent.prototype.setHeaderDisplayOptions = function(e) {
  this._header?.setHeaderDisplayOptions?.(e);
};
// ============================================================================
// BYD BATTERY TOWER - HELPER & RENDER
// ============================================================================

BYDTowerComponent.prototype._eachModuleData = function(e, t) {
  if (e && Array.isArray(e)) {
    if (e.length && typeof e[0] == "object" && !Array.isArray(e[0])) {
      // Array of objects with module indices
      for (let i of e) {
        let moduleIndex = (i.m || i.module || 1) - 1;
        let moduleEl = this._moduleEls[moduleIndex];
        if (moduleEl) {
          t(moduleEl, i.v || i.t || i.b || []);
        }
      }
    } else {
      // Simple array - map to modules sequentially
      for (let i = 0; i < Math.min(this._moduleEls.length, e.length); i++) {
        t(this._moduleEls[i], e[i] || []);
      }
    }
  }
};

BYDTowerComponent.prototype._render = function() {
  let e = this.shadowRoot;
  if (!e) return;
  
  e.innerHTML = `
    <div class="battery-tower">
      <byd-battery-header></byd-battery-header>
      <div class="modules"></div>
      <byd-battery-stand></byd-battery-stand>
    </div>`;
  
  this._header = e.querySelector("byd-battery-header");
  
  if (this._header) {
    this._header.addEventListener("toggle-view", (evt) => {
      if (evt.detail.view === "temperature") {
        this.showTemperature();
      } else {
        this.showVoltage();
      }
    });
    
    this._header.addEventListener("toggle-unit", (evt) => {
      this.setDisplayUnit(evt.detail?.unit);
    });
    
    this._header.addEventListener("toggle-module-view", (evt) => {
      this.setModuleView(evt.detail?.mode);
    });
  }
  
  let modulesContainer = e.querySelector(".modules");
  modulesContainer.innerHTML = "";
  this._moduleEls = [];
  
  for (let i = 0; i < this._modules; i++) {
    let moduleEl = document.createElement("byd-battery-module");
    moduleEl.name = `BMS ${this._index}.${i + 1}`;
    moduleEl.setChartMinVoltage(this._chartV.min);
    moduleEl.setChartMaxVoltage(this._chartV.max);
    moduleEl.setChartMinTemperature(this._chartT.min);
    moduleEl.setChartMaxTemperature(this._chartT.max);
    moduleEl.setDisplayUnit?.(this._displayUnit);
    moduleEl.setModuleView?.(this._moduleView);
    
    modulesContainer.appendChild(moduleEl);
    this._moduleEls.push(moduleEl);
  }
};

customElements.get("byd-battery-tower") ||
  customElements.define("byd-battery-tower", BYDTowerComponent);
// ============================================================================
// BYD BATTERY SYSTEM COMPONENT
// ============================================================================
// BYD BATTERY SYSTEM COMPONENT - OPTIMIZED
// ============================================================================

var BYDSystemComponent = class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    
    this._towers = 1;
    this._towerEls = [];
    this._sheet = null;
  }

  connectedCallback() {
    this._render();
    this._ensureCss();
  }

  disconnectedCallback() {
    // FIX: Cleanup Tower-Referenzen
    if (this._towerEls) {
      this._towerEls.forEach((el) => {
        el?.disconnectedCallback?.();
      });
      this._towerEls = [];
    }
  }

  async _ensureCss() {
    if (!this._sheet) {
      try {
        let e = typeof globalThis < "u" ? globalThis : 
                typeof window < "u" ? window : void 0;
        let t = e && e.__BYD_CSS_SHEET;
        
        if (!t) {
          let i = e && e.__BYD_CSS_TEXT
            ? e.__BYD_CSS_TEXT
            : await fetch(ae).then((a) => a.text());
          
          t = new CSSStyleSheet();
          await t.replace(i);
          
          if (e) {
            e.__BYD_CSS_SHEET = t;
          }
        }
        
        if (this.shadowRoot) {
          this.shadowRoot.adoptedStyleSheets = [t];
          this._sheet = t;
        }
        
        try {
          window.dispatchEvent(new Event("byd-css-ready"));
        } catch {}
      } catch {}
    }
  }

  setTowers(e) {
    this._towers = Math.max(1, Math.min(3, Number(e) || 1));
    this._render();
  }

  getTower(e) {
    return this._towerEls[e - 1];
  }

  setStateOfCharge(e) {
    this._towerEls.forEach((t) => t?.setStateOfCharge(e));
  }

  setStateOfHealth(e) {
    this._towerEls.forEach((t) => t?.setStateOfHealth(e));
  }

  setBMUPower(e) {
    this._towerEls.forEach((t) => t?.setBMUPower(e));
  }

  setBMUVersion(e) {
    this._towerEls.forEach((t) => t?.setBMUVersion(e));
  }

  _render() {
    let e = this.shadowRoot;
    if (!e) return;
    
    let container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "1fr";
    container.style.gap = "14px";
    container.style.width = "100%";
    
    e.innerHTML = "";
    e.appendChild(container);
    
    this._towerEls = [];
    
    for (let i = 0; i < this._towers; i++) {
      let towerEl = document.createElement("byd-battery-tower");
      towerEl.setAttribute("index", String(i + 1));
      container.appendChild(towerEl);
      this._towerEls.push(towerEl);
    }
  }
};

customElements.get("byd-battery-system") ||
  customElements.define("byd-battery-system", BYDSystemComponent);
// ============================================================================
// BYD BATTERY BOX VISUALIZATION CARD - MAIN COMPONENT
// ============================================================================

var Z = BYD_CONFIG.VERSION;

var BYDBatteryCard = class extends HTMLElement {
  static getConfigElement() {
    return document.createElement("byd-battery-box-visualization-editor");
  }

  static getStubConfig() {
    return {
      voltage_auto: true,
      temp_min: 10,
      temp_max: 45,
      show_y_axis: true,
      show_gray_caps: true,
      unit: "mV",
      default_view: "voltage",
      module_view: "detailed",
      show_vt_toggle: true,
      show_view_toggle: false,
      show_power: true,
      show_eta: true,
      show_product_capacity: true,
      header_information_default: "versions",
      show_header_versions: true,
      show_header_ui: true,
      show_header_energy: true,
      show_header_efficiency: true,
    };
  }

  constructor() {
    super();
    this._config = {};
    this._hass = null;
    this._el = null;
    this._powerSamples = [];
    this._entities = null;
    this._devices = null;
    this._lastModules = [];
    this._lastTowerCount = 0;
    this._currentView = "voltage";
    this._currentModuleView = "detailed";
    this._appliedInitialView = false;
    this._appliedInitialModuleView = false;
    this._lastAppliedView = null;
    this._lastAppliedModuleView = null;
    this._renderTimeout = null;
  }

  setConfig(e) {
    this._config = e || {};
  }

  disconnectedCallback() {
    // FIX: Umfassende Cleanup-Routine
    this._el?.system?.disconnectedCallback?.();
    
    // Clear arrays
    this._powerSamples = [];
    this._lastModules = [];
    
    // Clear element references
    if (this._el) {
      this._el.card = null;
      this._el.container = null;
      this._el.system = null;
      this._el = null;
    }
    
    // Clear cached data
    this._entities = null;
    this._devices = null;
    
    // Clear timeout
    if (this._renderTimeout) {
      clearTimeout(this._renderTimeout);
      this._renderTimeout = null;
    }
  }

  set hass(e) {
    this._hass = e;
    
    // FIX: Render Debouncing - verhindert zu viele Renders
    if (this._renderTimeout) {
      clearTimeout(this._renderTimeout);
    }
    this._renderTimeout = setTimeout(() => {
      this._render();
      this._renderTimeout = null;
    }, BYD_CONFIG.RENDER_DEBOUNCE_MS);
  }

  getCardSize() {
    return 8;
  }
};
// ============================================================================
// BYD BATTERY BOX CARD - POWER SAMPLING (OPTIMIERT)
// ============================================================================

BYDBatteryCard.prototype._pushPowerSample = function(e) {
  if (!this._powerSamples) {
    this._powerSamples = [];
  }
  
  const now = Date.now();
  this._powerSamples.push({ t: now, p: Number(e) || 0 });
  
  // FIX: Effiziente Bereinigung mit Index statt Slice
  const fiveMinutesAgo = now - BYD_CONFIG.POWER_SAMPLE_WINDOW_MS;
  let removeCount = 0;
  
  for (let i = 0; i < this._powerSamples.length; i++) {
    if (this._powerSamples[i].t >= fiveMinutesAgo) {
      removeCount = i;
      break;
    }
  }
  
  // FIX: Splice statt Slice - keine neue Array-Allokation
  if (removeCount > 0) {
    this._powerSamples.splice(0, removeCount);
  }
  
  // Hard limit - verhindert unbegrenztes Wachstum
  if (this._powerSamples.length > BYD_CONFIG.POWER_SAMPLE_MAX_COUNT) {
    this._powerSamples.splice(
      0, 
      this._powerSamples.length - BYD_CONFIG.POWER_SAMPLE_MAX_COUNT
    );
  }
};

BYDBatteryCard.prototype._avgPowerW = function() {
  let e = this._powerSamples || [];
  if (e.length === 0) return 0;
  
  let now = Date.now();
  let totalPowerTime = 0;
  let totalTime = 0;
  
  for (let i = 0; i < e.length; i++) {
    let current = e[i];
    let next = e[i + 1] || { t: now, p: current.p };
    let timeInterval = Math.max(0, next.t - current.t);
    
    if (timeInterval > 0) {
      totalPowerTime += current.p * timeInterval;
      totalTime += timeInterval;
    }
  }
  
  return totalTime > 0 ? totalPowerTime / totalTime : e[e.length - 1].p;
};
// ============================================================================
// BYD BATTERY BOX CARD - RENDER LOGIC
// ============================================================================

BYDBatteryCard.prototype._render = function() {
  if (!this._hass) return;
  
  let config = this._config || {};
  let shadowRoot = this.shadowRoot || this.attachShadow({ mode: "open" });
  
  // FIX: Erstelle Container nur einmal
  if (!this._el) {
    let card = document.createElement("ha-card");
    let container = document.createElement("div");
    container.style.padding = "10px";
    
    let system = document.createElement("byd-battery-system");
    
    container.appendChild(system);
    card.appendChild(container);
    
    shadowRoot.innerHTML = "";
    shadowRoot.appendChild(card);
    
    this._el = { card, container, system };
    this._lastTowerCount = 0;
    this._lastModules = [];
  }
  
  // Discover Towers
  let towers = this._discoverTowers();
  let towerCount = towers.length || 1;
  
  if (this._lastTowerCount !== towerCount) {
    this._el.system.setTowers(towerCount);
    this._lastTowerCount = towerCount;
    this._lastModules = new Array(towerCount).fill(void 0);
  }
  
  // Discover BMU
  let bmu = this._discoverBMU();
  this._pushPowerSample(bmu.power ?? 0);
  
  let avgPower = this._avgPowerW();
  
  // Helper für Nummer-Konvertierung
  let toNumber = (c) => {
    let h = Number(c);
    return Number.isFinite(h) ? h : void 0;
  };
  
  // Chart Voltage Configuration
  let voltageAuto = config.voltage_auto !== false;
  let voltageMinManual = voltageAuto ? void 0 : toNumber(config.voltage_min);
  let voltageMaxManual = voltageAuto ? void 0 : toNumber(config.voltage_max);
  
  // Chart Temperature Configuration
  let tempMin = toNumber(config.temp_min);
  let tempMax = toNumber(config.temp_max);
  
  // Auto-Voltage Discovery
  let autoVoltageMin = towers.length
    ? Math.min(...towers.map((c) => c?.chart?.vMin ?? 99999))
    : BYD_CONFIG.CHART_DEFAULTS.vMin;
  
  let autoVoltageMax = towers.length
    ? Math.max(...towers.map((c) => c?.chart?.vMax ?? -99999))
    : BYD_CONFIG.CHART_DEFAULTS.vMax;
  
  let finalVoltageMin = voltageMinManual !== void 0 ? voltageMinManual : autoVoltageMin;
  let finalVoltageMax = voltageMaxManual !== void 0 ? voltageMaxManual : autoVoltageMax;
  
  // Cell Max Voltage Override
  if (voltageMaxManual === void 0) {
    let cellMaxV = Number(this._discoverBMU().cellMaxV || 0);
    let maxVoltageOverride = Math.max(
      BYD_CONFIG.CHART_DEFAULTS.vMax,
      cellMaxV > 3.5 ? Math.round(cellMaxV * 1000) : 0
    );
    if (maxVoltageOverride > 0) {
      finalVoltageMax = Math.min(finalVoltageMax, maxVoltageOverride);
    }
  }
  
  let finalTempMin = tempMin !== void 0 ? tempMin : BYD_CONFIG.CHART_DEFAULTS.tMin;
  let finalTempMax = tempMax !== void 0 ? tempMax : BYD_CONFIG.CHART_DEFAULTS.tMax;
  
  // Tower Capacity
  let towerCapacityWh = bmu.totalCapacityWh && towerCount 
    ? bmu.totalCapacityWh / towerCount 
    : 0;
  
  // Format ETA Time
  let formatEtaTime = (seconds) => {
    if (!Number.isFinite(seconds) || seconds <= 0) return "";
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.round((seconds % 3600) / 60);
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };
  
  // Unit Configuration
  let displayUnit = (config.unit || "mV") === "V" ? "V" : "mV";
  
  // Initialize View if needed
  if (this._appliedInitialView !== true) {
    let defaultView = config.default_view === "temperature" ? "temperature" : "voltage";
    this._currentView = defaultView;
    this._appliedInitialView = true;
  }
  
  // Initialize Module View if needed
  if (this._appliedInitialModuleView !== true) {
    let moduleViewConfig = config.module_view;
    this._currentModuleView = 
      moduleViewConfig === "minimalistic" || moduleViewConfig === "minimal"
        ? "minimal"
        : moduleViewConfig === "no-data" || moduleViewConfig === "none"
          ? "none"
          : "detailed";
    this._appliedInitialModuleView = true;
  }
  
  // Render each Tower
  for (let i = 0; i < towerCount; i++) {
    let tower = towers[i];
    let towerEl = this._el.system.getTower(i + 1);
    
    if (!towerEl || !tower) continue;
    
    // Get current view from first tower
    if (i === 0 && typeof towerEl.getView === "function" && 
        this._lastAppliedView !== void 0) {
      let currentView = towerEl.getView();
      if (currentView === "temperature" || currentView === "voltage") {
        this._currentView = currentView;
      }
    }
    
    // Apply Module View
    if (this._lastAppliedModuleView === void 0) {
      if (typeof towerEl.setModuleView === "function") {
        towerEl.setModuleView(this._currentModuleView);
        this._lastAppliedModuleView = this._currentModuleView;
      }
    }
    
    // Update Module Count
    let currentModuleCount = typeof towerEl.getModulesCount === "function"
      ? Number(towerEl.getModulesCount())
      : (this._lastModules[i] ?? 0);
    
    if (currentModuleCount !== tower.modules) {
      towerEl.setModules(tower.modules);
      this._lastModules[i] = tower.modules;
      
      if (typeof towerEl.setModuleView === "function") {
        towerEl.setModuleView(this._currentModuleView);
      }
    }
    
    // Set Chart Ranges
    towerEl.setChartMinVoltage(finalVoltageMin);
    towerEl.setChartMaxVoltage(finalVoltageMax);
    towerEl.setChartMinTemperature(finalTempMin);
    towerEl.setChartMaxTemperature(finalTempMax);
    
    // Set Y-Axis Visibility
    if (config.show_y_axis === false) {
      towerEl.hideYAxisValues();
    } else {
      towerEl.showYAxisValues();
    }
    
    // Set Gray Caps
    if (typeof towerEl.setShowGrayCaps === "function") {
      towerEl.setShowGrayCaps(config.show_gray_caps !== false);
    }
    
    // Set Unit
    towerEl.setDisplayUnit?.(displayUnit);
    
    // Apply View
    if (this._lastAppliedView !== this._currentView) {
      if (this._currentView === "temperature") {
        towerEl.showTemperature();
      } else {
        towerEl.showVoltage();
      }
    }
    
    // Set BMU Data
    towerEl.setBMUPower(bmu.power ?? 0);
    towerEl.setBMUVersion(bmu.version || "");
    towerEl.setBMSVersion(tower.bmsVersion || "");
    towerEl.setUIMeta?.(`UI ${Z}<br>modules:${tower.modules}`);
    towerEl.setStateOfCharge(tower.soc ?? bmu.soc ?? 0);
    towerEl.setStateOfHealth(tower.soh ?? 0);
    
    // Get Energy Data
    let states = this._hass.states || {};
    let chargeEntity = states[`sensor.bms_${tower.id}_charge_total_energy`];
    let dischargeEntity = states[`sensor.bms_${tower.id}_discharge_total_energy`];
    let efficiencyEntity = states[`sensor.bms_${tower.id}_efficiency`];
    
    let formatEnergyValue = (entity) => {
      if (!entity) return { txt: "--", unit: "" };
      let value = Number(entity.state);
      let unit = (entity.attributes?.unit_of_measurement || "").toString();
      
      if (!Number.isFinite(value)) {
        return { txt: "--", unit: "" };
      }
      
      if (/kwh/i.test(unit)) {
        return {
          txt: Math.round(value).toLocaleString(void 0, { maximumFractionDigits: 0 }),
          unit: "kWh",
        };
      } else if (/wh/i.test(unit)) {
        return {
          txt: Math.round(value).toLocaleString(void 0, { maximumFractionDigits: 0 }),
          unit: "Wh",
        };
      }
      return { txt: Math.round(value).toString(), unit };
    };
    
    let chargedEnergy = formatEnergyValue(chargeEntity);
    let dischargedEnergy = formatEnergyValue(dischargeEntity);
    let energyText = chargeEntity || dischargeEntity
      ? `Charged: ${chargedEnergy.txt} ${chargedEnergy.unit}<br>Discharged: ${dischargedEnergy.txt} ${dischargedEnergy.unit}`
      : "";
    
    let efficiencyValue = Number(efficiencyEntity?.state);
    let efficiencyText = `Efficiency: ${Number.isFinite(efficiencyValue) ? Math.round(efficiencyValue) : "--"}%<br>State of Health: ${Number.isFinite(Number(tower.soh)) ? Math.round(Number(tower.soh)) : 0}%`;
    
    let versionsText = `BMU ${bmu.version || ""}<br>BMS ${tower.bmsVersion || ""}`;
    let uiText = `UI ${Z}<br>modules:${tower.modules}`;
    
    // Set Header Information
    if (typeof towerEl.setHeaderInformation === "function") {
      towerEl.setHeaderInformation({
        default: config.header_information_default || "versions",
        show: {
          versions: config.show_header_versions !== false,
          ui: config.show_header_ui !== false,
          energy: config.show_header_energy !== false,
          efficiency: config.show_header_efficiency !== false,
        },
        payload: {
          versionsText,
          uiText,
          energyText,
          effText: efficiencyText,
        },
      });
    }
    
    // Set Capacity
    if (typeof towerEl.setTowerCapacityWh === "function") {
      towerEl.setTowerCapacityWh(towerCapacityWh);
    }
    
    // Calculate ETA
    let etaText = "";
    let soc = Number(tower.soc ?? bmu.soc ?? 0);
    let powerThreshold = 20;
    let powerPerTower = (bmu.power ?? 0) / (towerCount || 1);
    
    if (towerCapacityWh > 0 && soc >= 0 && Math.abs(powerPerTower) > powerThreshold) {
      let avgPowerPerTower = avgPower / (towerCount || 1);
      
      if (avgPower === 0 || avgPower > 0 != powerPerTower > 0) {
        avgPowerPerTower = powerPerTower;
      }
      
      if (avgPowerPerTower < 0) {
        // Charging
        let secondsToFull = ((towerCapacityWh * Math.max(0, 1 - soc / 100)) / 
                            Math.abs(avgPowerPerTower)) * 3600;
        let etaFormatted = formatEtaTime(secondsToFull);
        etaText = etaFormatted ? `Full in ${etaFormatted}` : "";
      } else if (avgPowerPerTower > 0) {
        // Discharging
        let secondsToEmpty = ((towerCapacityWh * Math.max(0, soc / 100)) / 
                             avgPowerPerTower) * 3600;
        let etaFormatted = formatEtaTime(secondsToEmpty);
        etaText = etaFormatted ? `Remaining ${etaFormatted}` : "";
      }
    }
    
    if (typeof towerEl.setEstimate === "function") {
      towerEl.setEstimate(etaText);
    }
    
    // Set UI Toggles
    if (typeof towerEl.setShowVTToggle === "function") {
      towerEl.setShowVTToggle(config.show_vt_toggle !== false);
    }
    
    if (typeof towerEl.setShowViewToggle === "function") {
      towerEl.setShowViewToggle(config.show_view_toggle === true);
    }
    
    // Set Header Display Options
    if (typeof towerEl.setHeaderDisplayOptions === "function") {
      towerEl.setHeaderDisplayOptions({
        showPower: config.show_power !== false,
        showETA: config.show_eta !== false,
        showProductCapacity: config.show_product_capacity !== false,
      });
    }
    
    // Set Cell Data
    towerEl.setVoltage(tower.voltage);
    towerEl.setHistoryMaxVoltage(tower.histMax);
    towerEl.setHistoryMinVoltage(tower.histMin);
    towerEl.setCellBallancing(tower.balancing);
    towerEl.setTemperature(tower.temps);
  }
  
  // Update tracking
  this._lastAppliedView = this._currentView;
  
  // Apply Product Names async
  this._applyProductNames(towers, towerCount).catch(() => {});
};
// ============================================================================
// BYD BATTERY BOX CARD - DISCOVERY METHODS (FORTSETZUNG)
// ============================================================================

BYDBatteryCard.prototype._discoverBMU = function() {
  let states = this._hass.states;
  let stateKeys = Object.keys(states);
  
  let findEntityByPattern = (pattern) => {
    let key = stateKeys.find((k) => pattern.test(k));
    return key ? states[key] : void 0;
  };
  
  let power = Number(findEntityByPattern(/^sensor\.bmu_power/)?.state) || 0;
  
  let version = findEntityByPattern(/^sensor\.bmu_version$/)?.state ||
                findEntityByPattern(/^sensor\.bmu_version_a$/)?.state ||
                "";
  
  let totalCapacityEntity = findEntityByPattern(/^sensor\.total_capacity$/);
  let totalCapacityWh;
  
  if (totalCapacityEntity) {
    let value = Number(totalCapacityEntity.state);
    let unit = totalCapacityEntity.attributes?.unit_of_measurement || "";
    if (Number.isFinite(value)) {
      totalCapacityWh = /kwh/i.test(unit) ? value * 1000 : value;
    }
  }
  
  let cellMaxVEntity = findEntityByPattern(/^sensor\.bmu_cell_voltage_max/);
  let cellMaxV;
  
  if (cellMaxVEntity) {
    let value = Number(cellMaxVEntity.state);
    let unit = (cellMaxVEntity.attributes?.unit_of_measurement || "").toString();
    if (Number.isFinite(value)) {
      cellMaxV = /mv/i.test(unit) ? value / 1000 : value;
    }
  }
  
  return { power, version, totalCapacityWh, cellMaxV };
};

BYDBatteryCard.prototype._discoverTowers = function() {
  let result = [];
  let states = this._hass.states;
  let stateKeys = Object.keys(states);
  
  // Finde alle BMS IDs
  let bmsIds = [
    ...new Set(
      stateKeys
        .map((s) => {
          let match = /^sensor\.bms_(\d+)_cells_average_voltage$/.exec(s);
          return match ? Number(match[1]) : null;
        })
        .filter(Boolean)
    ),
  ]
    .sort((a, b) => a - b)
    .slice(0, 3);
  
  // Berechne Modul-Count
  let getModuleCount = (data) => {
    if (!Array.isArray(data) || data.length === 0) return 0;
    if (data.length && typeof data[0] == "object" && !Array.isArray(data[0])) {
      return data.reduce((max, item) => {
        let moduleNum = Number(item?.m ?? item?.module);
        return Number.isFinite(moduleNum) ? Math.max(max, moduleNum) : max;
      }, 0);
    }
    return data.length;
  };
  
  // Konvertiere Array in Modul-Format
  let toModuleArray = (data, key, moduleCount) => {
    let result = Array.from({ length: moduleCount }, () => []);
    if (!Array.isArray(data)) return result;
    
    if (data.length && typeof data[0] == "object" && !Array.isArray(data[0])) {
      for (let item of data) {
        let moduleIndex = (Number(item?.m ?? item?.module) || 1) - 1;
        if (moduleIndex >= 0 && moduleIndex < moduleCount) {
          let value = item?.[key];
          result[moduleIndex] = Array.isArray(value) ? value : [];
        }
      }
    } else {
      for (let i = 0; i < Math.min(moduleCount, data.length); i++) {
        result[i] = Array.isArray(data[i]) ? data[i] : [];
      }
    }
    return result;
  };
  
  // Für jeden BMS
  for (let bmsId of bmsIds) {
    let voltageEntity = states[`sensor.bms_${bmsId}_cells_average_voltage`];
    let maxHistEntity = states[`sensor.bms_${bmsId}_max_history_cell_voltage`];
    let minHistEntity = states[`sensor.bms_${bmsId}_min_history_cell_voltage`];
    let balancingEntity = states[`sensor.bms_${bmsId}_cells_balancing`];
    let tempEntity = states[`sensor.bms_${bmsId}_cells_average_temperature`];
    let socEntity = states[`sensor.bms_${bmsId}_state_of_charge`];
    let sohEntity = states[`sensor.bms_${bmsId}_state_of_health`];
    let bmsVersionEntity = states["sensor.bms_version"];
    
    let voltage = voltageEntity?.attributes?.cell_voltages || [];
    let histMax = maxHistEntity?.attributes?.cell_voltages || [];
    let histMin = minHistEntity?.attributes?.cell_voltages || [];
    let balancing = balancingEntity?.attributes?.cell_balancing || [];
    let temps = tempEntity?.attributes?.cell_temps || [];
    
    let moduleCount = Math.max(
      getModuleCount(voltage),
      getModuleCount(histMax),
      getModuleCount(histMin),
      getModuleCount(balancing),
      getModuleCount(temps)
    );
    
    moduleCount = Math.min(Math.max(moduleCount || 1, 1), 10);
    
    let voltageByModule = toModuleArray(voltage, "v", moduleCount);
    let histMaxByModule = toModuleArray(histMax, "v", moduleCount);
    let histMinByModule = toModuleArray(histMin, "v", moduleCount);
    let balancingByModule = toModuleArray(balancing, "b", moduleCount);
    let tempsbyModule = toModuleArray(temps, "t", moduleCount);
    
    let minHistValues = histMinByModule.flat().filter((d) => Number.isFinite(d));
    let maxHistValues = histMaxByModule.flat().filter((d) => Number.isFinite(d));
    
    let chartConfig = {
      vMin: minHistValues.length ? Math.min(...minHistValues) : BYD_CONFIG.CHART_DEFAULTS.vMin,
      vMax: maxHistValues.length ? Math.max(...maxHistValues) : BYD_CONFIG.CHART_DEFAULTS.vMax,
    };
    
    result.push({
      id: bmsId,
      modules: moduleCount,
      voltage: voltageByModule,
      histMax: histMaxByModule,
      histMin: histMinByModule,
      balancing: balancingByModule,
      temps: tempsbyModule,
      chart: chartConfig,
      soc: Number(socEntity?.state),
      soh: Number(sohEntity?.state),
      bmsVersion: bmsVersionEntity?.state || "",
    });
  }
  
  return result.length === 0 ? [this._demoTower(1)] : result;
};

BYDBatteryCard.prototype._demoTower = function(e) {
  let voltage = Array.from({ length: 3 }, () =>
    Array.from(
      { length: 32 },
      () => 3300 + Math.round(Math.random() * 80)
    )
  );
  
  let histMax = voltage.map((b) =>
    b.map((g) => g + 50)
  );
  
  let histMin = voltage.map((b) =>
    b.map((g) => g - 80)
  );
  
  let temps = Array.from({ length: 3 }, () =>
    Array.from(
      { length: 16 },
      () => 20 + Math.round(Math.random() * 15)
    )
  );
  
  let balancing = voltage.map((b) =>
    b.map(() => (Math.random() < 0.05 ? 1 : 0))
  );
  
  return {
    id: e,
    modules: 3,
    voltage,
    histMax,
    histMin,
    balancing,
    temps,
    chart: { vMin: 3200, vMax: 3500 },
    soc: 75,
    soh: 98,
    bmsVersion: "demo",
  };
};
// ============================================================================
// BYD BATTERY BOX CARD - REGISTRY & PRODUCT NAMES
// ============================================================================

BYDBatteryCard.prototype._ensureRegistries = async function() {
  if (!(this._entities && this._devices)) {
    try {
      this._entities = await this._hass.callWS({
        type: "config/entity_registry/list",
      });
      
      this._devices = await this._hass.callWS({
        type: "config/device_registry/list",
      });
    } catch {}
  }
};

BYDBatteryCard.prototype._getModelForEntityId = function(entityId) {
  if (!entityId || !Array.isArray(this._entities) || !Array.isArray(this._devices)) {
    return "";
  }
  
  let entity = this._entities.find((a) => a?.entity_id === entityId);
  if (!entity) return "";
  
  let device = this._devices.find((a) => a?.id === entity.device_id);
  return device?.model || device?.model_id || "";
};

BYDBatteryCard.prototype._applyProductNames = async function(towers, towerCount) {
  try {
    await this._ensureRegistries();
    
    let bmuPowerEntity = Object.keys(this._hass.states || {}).find((n) =>
      /^sensor\.bmu_power/.test(n)
    );
    
    let bmuModel = this._getModelForEntityId(bmuPowerEntity);
    
    for (let i = 0; i < towerCount; i++) {
      let tower = towers[i];
      if (!tower) continue;
      
      let towerEl = this._el?.system?.getTower(i + 1);
      if (!towerEl) continue;
      
      let bmsVoltageEntity = `sensor.bms_${tower.id}_cells_average_voltage`;
      let bmsModel = this._getModelForEntityId(bmsVoltageEntity) || bmuModel || "";
      
      if (typeof towerEl.setProductName === "function") {
        towerEl.setProductName(bmsModel);
      }
    }
  } catch {}
};

// Register Custom Element for Main Card
customElements.get("byd-battery-box-visualization") ||
  customElements.define("byd-battery-box-visualization", BYDBatteryCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "byd-battery-box-visualization",
  name: "BYD Battery Box Visualization",
  description:
    "BYD Battery Box visualization with separated components and auto-configuration for byd_battery_box.",
  preview: true,
  preview_image:
    "https://raw.githubusercontent.com/TimWeyand/byd_battery_box_visualization/main/images/preview.png",
});
// ============================================================================
// BYD BATTERY CARD VISUALIZATION EDITOR - OPTIMIZED
// ============================================================================

var BYDBatteryCardEditor = class extends HTMLElement {
  constructor() {
    super();
    this._config = {};
    this._hass = null;
    this._form = null;
    this._debounceT = null;
    this._isEditing = false;
    this._lastSchemaKey = null;
  }

  setConfig(e) {
    if (this._config === e) return;
    
    this._config = e || {};
    
    if (this._debounceT) {
      clearTimeout(this._debounceT);
      this._debounceT = null;
    }
    
    if (this._form && customElements.get("ha-form")) {
      let t = this._config || {};
      let schemaKey = t.voltage_auto === false ? "manualV" : "autoV";
      
      if (this._lastSchemaKey !== schemaKey) {
        this._lastSchemaKey = schemaKey;
        this._form.remove();
        this._form = null;
        this._render();
        return;
      }
      
      if (!this._isEditing) {
        this._form.data = {
          unit: t.unit || "mV",
          voltage_auto: t.voltage_auto !== false,
          voltage_min: t.voltage_min,
          voltage_max: t.voltage_max,
          temp_min: t.temp_min,
          temp_max: t.temp_max,
          show_y_axis: t.show_y_axis !== false,
          show_gray_caps: t.show_gray_caps !== false,
          show_vt_toggle: t.show_vt_toggle !== false,
          show_view_toggle: t.show_view_toggle === true,
          show_power: t.show_power !== false,
          show_eta: t.show_eta !== false,
          show_product_capacity: t.show_product_capacity !== false,
          header_information_default: t.header_information_default || "versions",
          show_header_versions: t.show_header_versions !== false,
          show_header_ui: t.show_header_ui !== false,
          show_header_energy: t.show_header_energy !== false,
          show_header_efficiency: t.show_header_efficiency !== false,
          module_view: t.module_view || "detailed",
        };
      }
      return;
    }
    
    this._render();
  }

  set hass(e) {
    this._hass = e;
    if (this._form) {
      this._form.hass = e;
    }
  }

  connectedCallback() {
    this._render();
  }

  disconnectedCallback() {
    if (this._debounceT) {
      clearTimeout(this._debounceT);
      this._debounceT = null;
    }
    if (this._form) {
      this._form.remove();
      this._form = null;
    }
  }
};
// ============================================================================
// BYD BATTERY BOX VISUALIZATION EDITOR - RENDER WITH HA-FORM
// ============================================================================

BYDBatteryCardEditor.prototype._render = function() {
  this.innerHTML = "";
  
  let configEditor = this;
  let config = this._config || {};
  
  if (customElements.get("ha-form")) {
    let form = document.createElement("ha-form");
    form.hass = this._hass;
    
    let voltageAuto = config.voltage_auto !== false;
    
    let baseSchema = [
      {
        name: "voltage_auto",
        label: "Voltage auto",
        helper: "Default: active",
        selector: { boolean: {} },
      },
      ...(voltageAuto
        ? []
        : [
            {
              name: "voltage_min",
              label: "Voltage min (mV)",
              helper: "Shown when Voltage auto is disabled",
              selector: { number: { mode: "box", min: 0, step: 1 } },
            },
            {
              name: "voltage_max",
              label: "Voltage max (mV)",
              helper: "Shown when Voltage auto is disabled",
              selector: { number: { mode: "box", min: 0, step: 1 } },
            },
          ]),
      {
        name: "temp_min",
        label: "Temperature min (°C)",
        helper: "Default: 0",
        selector: { number: { mode: "box", min: -40, max: 120, step: 1 } },
      },
      {
        name: "temp_max",
        label: "Temperature max (°C)",
        helper: "Default: 60",
        selector: { number: { mode: "box", min: -40, max: 120, step: 1 } },
      },
      {
        name: "show_gray_caps",
        label: "Show gray caps (voltage)",
        helper: "Default: active",
        selector: { boolean: {} },
      },
    ];
    
    let fullSchema = [
      {
        type: "expandable",
        title: "Battery Tower",
        schema: [
          {
            name: "unit",
            label: "Unit",
            helper: "Voltage unit for charts (not temperature). Default: mV",
            selector: {
              select: {
                options: [
                  { value: "mV", label: "mV" },
                  { value: "V", label: "V" },
                ],
              },
            },
          },
          {
            name: "show_vt_toggle",
            label: "Show Voltage/Temperature Toggle",
            helper: "Default: active",
            selector: { boolean: {} },
          },
          {
            name: "show_view_toggle",
            label: "Show Battery Visualization Toggle (Detailed/Minimalistic)",
            helper: "Default: disabled",
            selector: { boolean: {} },
          },
          {
            name: "module_view",
            label: "Default Battery View",
            helper: "Default: Detailed",
            selector: {
              select: {
                options: [
                  { value: "detailed", label: "Detailed" },
                  { value: "minimal", label: "Minimalistic" },
                  { value: "none", label: "No Data" },
                ],
              },
            },
          },
          {
            name: "show_power",
            label: "Show Current Power",
            helper: "Default: active",
            selector: { boolean: {} },
          },
          {
            name: "show_eta",
            label: "Show Estimated Time (charge/discharge)",
            helper: "Default: active",
            selector: { boolean: {} },
          },
          {
            name: "show_product_capacity",
            label: "Show Product and Capacity",
            helper: "Default: active",
            selector: { boolean: {} },
          },
        ],
      },
      {
        type: "expandable",
        title: "Header Information",
        schema: [
          {
            name: "header_information_default",
            label: "Default Information",
            helper: "Default: versions (BMU/BMS)",
            selector: {
              select: {
                options: [
                  { value: "versions", label: "BMU/BMS Versions" },
                  { value: "ui", label: "UI/Modules" },
                  { value: "energy", label: "Total Energy" },
                  { value: "efficiency", label: "Efficiency & SoH" },
                ],
              },
            },
          },
          {
            name: "show_header_versions",
            label: "Show BMU/BMS Versions",
            helper: "Default: active",
            selector: { boolean: {} },
          },
          {
            name: "show_header_ui",
            label: "Show UI Information",
            helper: "Default: active",
            selector: { boolean: {} },
          },
          {
            name: "show_header_energy",
            label: "Show Total Energy",
            helper: "Default: active",
            selector: { boolean: {} },
          },
          {
            name: "show_header_efficiency",
            label: "Show Efficiency & State of Health",
            helper: "Default: active",
            selector: { boolean: {} },
          },
        ],
      },
      {
        type: "expandable",
        title: "Graph Settings",
        schema: baseSchema,
      },
      {
        type: "expandable",
        title: "Battery Module – Detailed Graph Settings",
        schema: [
          {
            name: "show_y_axis",
            label: "Show Y‑axis",
            helper: "Default: active",
            selector: { boolean: {} },
          },
        ],
      },
    ];
    
    form.schema = fullSchema;
    this._lastSchemaKey = voltageAuto ? "autoV" : "manualV";
    
    form.computeLabel = (p) => p.label || p.name;
    form.computeHelper = (p) => p.helper || "";
    
    form.data = {
      unit: config.unit || "mV",
      voltage_auto: config.voltage_auto !== false,
      show_vt_toggle: config.show_vt_toggle !== false,
      show_view_toggle: config.show_view_toggle === true,
      show_power: config.show_power !== false,
      show_eta: config.show_eta !== false,
      show_product_capacity: config.show_product_capacity !== false,
      header_information_default: config.header_information_default || "versions",
      show_header_versions: config.show_header_versions !== false,
      show_header_ui: config.show_header_ui !== false,
      show_header_energy: config.show_header_energy !== false,
      show_header_efficiency: config.show_header_efficiency !== false,
      module_view: config.module_view || "detailed",
      voltage_min: config.voltage_min,
      voltage_max: config.voltage_max,
      temp_min: config.temp_min,
      temp_max: config.temp_max,
      show_y_axis: config.show_y_axis !== false,
      show_gray_caps: config.show_gray_caps !== false,
    };
    
    form.addEventListener("value-changed", (p) => {
      p.stopPropagation();
      this._isEditing = true;
      
      let newData = p.detail?.value || {};
      let updateConfig = {};
      
      Object.keys(newData).forEach((key) => {
        if (newData[key] !== void 0) {
          updateConfig[key] = newData[key];
        }
      });
      
      clearTimeout(this._debounceT);
      this._debounceT = setTimeout(() => {
        let finalConfig = { ...(this._config || config || {}), ...updateConfig };
        
        if (finalConfig.voltage_auto !== false) {
          delete finalConfig.voltage_min;
          delete finalConfig.voltage_max;
        }
        
        this.dispatchEvent(
          new CustomEvent("config-changed", { detail: { config: finalConfig } })
        );
      }, 300);
    });
    
    form.addEventListener("focusin", () => {
      this._isEditing = true;
    });
    
    this._form = form;
    this.appendChild(form);
    return;
  }
  
  // Fallback für Systeme ohne ha-form
  this._renderFallback();
};
// ============================================================================
// BYD BATTERY BOX VISUALIZATION EDITOR - FALLBACK RENDERING
// ============================================================================

BYDBatteryCardEditor.prototype._renderFallback = function() {
  let container = document.createElement("div");
  container.style.display = "grid";
  container.style.gridTemplateColumns = "1fr 1fr";
  container.style.gap = "8px";
  
  let config = this._config || {};
  
  let addField = (label, inputElement, helper) => {
    let labelEl = document.createElement("label");
    labelEl.textContent = label;
    labelEl.style.fontSize = "12px";
    labelEl.style.opacity = "0.85";
    
    let helperEl = document.createElement("div");
    helperEl.textContent = helper || "";
    helperEl.style.fontSize = "11px";
    helperEl.style.opacity = "0.7";
    helperEl.style.marginBottom = "2px";
    
    let wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.appendChild(labelEl);
    if (helper) wrapper.appendChild(helperEl);
    wrapper.appendChild(inputElement);
    
    container.appendChild(wrapper);
  };
  
  let createTextInput = (value) => {
    let input = document.createElement("input");
    input.type = "text";
    input.value = value || "";
    return input;
  };
  
  let createNumberInput = (value) => {
    let input = document.createElement("input");
    input.type = "number";
    if (value !== void 0) input.value = value;
    return input;
  };
  
  let createCheckbox = (checked) => {
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = !!checked;
    return input;
  };
  
  let createSelect = (value, options) => {
    let select = document.createElement("select");
    options.forEach((opt) => {
      let option = document.createElement("option");
      option.value = opt.value || opt;
      option.textContent = opt.label || opt;
      if ((opt.value || opt) === value) option.selected = true;
      select.appendChild(option);
    });
    return select;
  };
  
  // Entity (optional)
  let entityInput = createTextInput(config.entity || "");
  addField("Entity (optional)", entityInput, "Usually auto-discovered.");
  
  // Unit
  let unitSelect = createSelect(config.unit || "mV", ["mV", "V"]);
  addField("Unit", unitSelect, "Default: mV");
  
  // Module View
  let moduleViewSelect = createSelect(config.module_view || "detailed", [
    { value: "detailed", label: "Detailed Graph" },
    { value: "minimalistic", label: "Minimalistic View" },
    { value: "no-data", label: "No Data" },
  ]);
  addField("Battery Module View", moduleViewSelect, "Default: Detailed Graph");
  
  // Show VT Toggle
  let showVTToggle = createCheckbox(config.show_vt_toggle !== false);
  addField("Show Voltage/Temperature Toggle", showVTToggle, "Default: active");
  
  // Show View Toggle
  let showViewToggle = createCheckbox(config.show_view_toggle === true);
  addField("Show Battery Visualization Toggle", showViewToggle, "Default: disabled");
  
  // Show Power
  let showPower = createCheckbox(config.show_power !== false);
  addField("Show Current Power", showPower, "Default: active");
  
  // Show ETA
  let showEta = createCheckbox(config.show_eta !== false);
  addField("Show Estimated Time", showEta, "Default: active");
  
  // Show Product Capacity
  let showProductCapacity = createCheckbox(config.show_product_capacity !== false);
  addField("Show Product and Capacity", showProductCapacity, "Default: active");
  
  // Voltage Auto
  let voltageAutoCheckbox = createCheckbox(config.voltage_auto !== false);
  addField("Voltage auto", voltageAutoCheckbox, "Default: active");
  
  // Conditional Voltage Min/Max
  let voltageMinInput, voltageMaxInput;
  if (!voltageAutoCheckbox.checked) {
    voltageMinInput = createNumberInput(config.voltage_min);
    addField("Voltage min (mV)", voltageMinInput, "Shown when Voltage auto is disabled");
    
    voltageMaxInput = createNumberInput(config.voltage_max);
    addField("Voltage max (mV)", voltageMaxInput, "Shown when Voltage auto is disabled");
  }
  
  // Temperature Min/Max
  let tempMinInput = createNumberInput(config.temp_min);
  addField("Temperature min (°C)", tempMinInput, "Default: 0");
  
  let tempMaxInput = createNumberInput(config.temp_max);
  addField("Temperature max (°C)", tempMaxInput, "Default: 60");
  
  // Show Gray Caps
  let showGrayCaps = createCheckbox(config.show_gray_caps !== false);
  addField("Show gray caps (voltage)", showGrayCaps, "Default: active");
  
  // Show Y-Axis
  let showYAxis = createCheckbox(config.show_y_axis !== false);
  addField("Show Y‑axis", showYAxis, "Default: active");
  
  // Save Handler
  let saveConfig = () => {
    let newConfig = {
      entity: entityInput.value,
      unit: unitSelect.value,
      module_view: moduleViewSelect.value,
      show_vt_toggle: showVTToggle.checked,
      show_view_toggle: showViewToggle.checked,
      show_power: showPower.checked,
      show_eta: showEta.checked,
      show_product_capacity: showProductCapacity.checked,
      voltage_auto: voltageAutoCheckbox.checked,
      voltage_min: !voltageAutoCheckbox.checked && voltageMinInput && voltageMinInput.value !== "" 
        ? Number(voltageMinInput.value) 
        : void 0,
      voltage_max: !voltageAutoCheckbox.checked && voltageMaxInput && voltageMaxInput.value !== "" 
        ? Number(voltageMaxInput.value) 
        : void 0,
      temp_min: tempMinInput.value === "" ? void 0 : Number(tempMinInput.value),
      temp_max: tempMaxInput.value === "" ? void 0 : Number(tempMaxInput.value),
      show_y_axis: showYAxis.checked,
      show_gray_caps: showGrayCaps.checked,
    };
    
    if (newConfig.voltage_auto) {
      delete newConfig.voltage_min;
      delete newConfig.voltage_max;
    }
    
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: { ...config, ...newConfig } },
      })
    );
  };
  
  container.addEventListener("change", saveConfig);
  this.appendChild(container);
};

customElements.get("byd-battery-box-visualization-editor") ||
  customElements.define("byd-battery-box-visualization-editor", BYDBatteryCardEditor);
// ============================================================================
// GLOBAL CSS & CUSTOM CARDS REGISTRATION
// ============================================================================

typeof globalThis < "u"
  ? (globalThis.__BYD_CSS_TEXT = (globalThis || window).__BYD_CSS_TEXT)
  : typeof window < "u" && (window.__BYD_CSS_TEXT = (globalThis || window).__BYD_CSS_TEXT);

// Register custom card
window.customCards = window.customCards || [];
window.customCards.push({
  type: "byd-battery-box-visualization",
  name: "BYD Battery Box Visualization",
  description:
    "BYD Battery Box visualization with separated components and auto-configuration for byd_battery_box.",
  preview: true,
  preview_image:
    "https://raw.githubusercontent.com/TimWeyand/byd_battery_box_visualization/main/images/preview.png",
});

console.log(
  "%c✓ BYD Battery Box Visualization v" + BYD_CONFIG.VERSION + " loaded",
  "color: #2e7d32; font-weight: bold; font-size: 14px;"
);
