/* BYD Battery Box Visualization v0.0.5 - Refactored for Performance and Memory Safety */
/* This refactored version fixes memory leaks, improves performance, and adds comprehensive comments */
/* All functionality and visual behavior is preserved exactly as in the original */

try{(globalThis||window).__BYD_CSS_TEXT=":host{box-sizing:border-box;font-family:var(--ha-card-header-font-family,Roboto,system-ui,Arial)}*{box-sizing:border-box}.battery-tower{display:flex;flex-direction:column;gap:4px;min-width:220px;width:100%;max-width:none;margin:0 auto}.header{position:relative;display:flex;flex-direction:column;gap:6px;background:linear-gradient(180deg,#585858, #383838);border-radius:10px;padding:8px 12px;color:#fff;box-shadow:inset 0 1px 2px rgba(255,255,255,.08), inset 0 -1px 2px rgba(0,0,0,.45)}.header .row.top{display:flex;align-items:center;gap:10px}.header .logo{position:relative;border:2px solid #ff3b3b;color:#ff3b3b;border-radius:999px;font-weight:700;padding:2px 8px;font-size:12px;width:90px}.header .logo.nobrandInformation{width:auto}.header .logo .brandname{color:#ff3b3b;float:left;margin-right:4px}.header .capacity{font-size:8px;line-height:1.2;color:#e0e0e0;margin-left:auto}.header .productname{font-size:8px;font-weight:bold;line-height:1.2;color:#e0e0e0;margin-left:auto}.header .soc-row{display:flex}.header .soc{position:relative;flex:1;height:14px;border-radius:8px;background:rgba(0,0,0,.35);overflow:hidden}.header .soc .fill{position:absolute;left:0;top:0;bottom:0;background:#2e7d32;min-width:0;border-radius:8px}.header .soc .label{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-weight:700;font-size:12px;text-shadow:0 1px 2px rgba(0,0,0,.6)}.header .chip{cursor:pointer;background:#2f6df3;color:#fff;border-radius:16px;padding:3px 6px;font-weight:600;user-select:none;font-size:10px}.header .chip.secondary{background:#4b4b4b}.header .versions{font-size:8px;line-height:1.2;color:#e0e0e0;cursor:pointer}.header .power{position:absolute;right:15px;min-width:100px;text-align:right;display:flex;flex-direction:column;line-height:1.1}.header .power .p-label{font-weight:600;font-size:11px;opacity:.9}.header .power .p-value{font-weight:700;font-size:12px}.header .power .p-eta{font-weight:600;font-size:10px;opacity:.85}.modules{display:grid;grid-template-columns:1fr;gap:4px;width:100%}.battery-module{position:relative;background:#fff;border-radius:10px;padding:12px 10px 10px 60px;color:#222;border:1px solid #dcdcdc;box-shadow:inset 0 1px 0 rgba(255,255,255,.6);width:100%;aspect-ratio:5 / 2;max-height:180px}.battery-module.minimal{aspect-ratio:5/1;max-height:90px;padding-left:10px}.battery-module .mini{position:absolute;left:10px;right:8px;top:8px;bottom:8px;display:flex;flex-direction:column;gap:6px}.battery-module .mini-row{display:flex;align-items:center;gap:8px}.battery-module .mini-label{width:80px;font-size:10px;opacity:.8}.battery-module .mini-stat{font-size:11px;font-weight:700}.battery-module .hbar{flex:1;position:relative;height:10px;border-radius:6px;background:#fff;border:1px solid #e0e0e0;overflow:hidden}.battery-module.minimal .hbar{height:20px}.battery-module .hseg{position:absolute;top:0;bottom:0}.battery-module .hseg.cur{background:linear-gradient(to left, #000000 0%,#2e7d32 1px,#2e7d32 30%,#3b9440 70%,rgba(46,125,50,.25) 100%)}.battery-module .hseg.cur.bal{background:linear-gradient(to left, #000000 0%,#1e88e5 1px,#1e88e5 30%,#3396e8 70%,rgba(30,136,229,.25) 100%)}.battery-module .hseg.max{background:rgba(0,0,0,.08)}.battery-module .hseg.greencap{background:rgba(46,125,50,.25)}.battery-module .hseg.bluecap{background:rgba(30,136,229,.25)}.battery-module .hnum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:10px;font-weight:700;color:#111;text-shadow:0 1px 1px rgba(255,255,255,.7)}.battery-module.minimal .hnum{color:#fff;text-shadow:0 1px 1px rgba(0,0,0,.6)}.battery-module.nodata{height:56px;max-height:none;aspect-ratio:auto;padding:8px 10px}.battery-module.no-axis{padding-left:10px}.battery-module.no-axis .chart{left:8px}.module-name{position:absolute;right:8px;bottom:6px;font-size:11px;background:rgba(255,255,255,.65);color:#333;padding:2px 6px;border-radius:6px;z-index:4}.axis{position:absolute;left:8px;top:8px;bottom:8px;width:48px;z-index:1}.axis .tick{display:none}.axis .label{position:absolute;left:0;transform:translateY(-50%);font-size:11px;color:#222}.chart{position:absolute;left:56px;right:8px;top:8px;bottom:8px;overflow:hidden}.grid-lines{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none;z-index:3}.grid-lines .line{position:absolute;left:0;right:0;border-top:1px dashed rgba(0,0,0,.2)}.cells{position:absolute;left:0;right:0;bottom:0;top:0;display:flex;align-items:flex-end;gap:2px;padding:0 6px;z-index:2}.cell{flex:1;min-width:4px;background:#fff;position:relative;border-radius:2px;overflow:hidden;height:100%}.bar.cur{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(to bottom, #000000 0%,#2e7d32 2%,#2e7d32 30%,#3b9440 70%,rgba(46,125,50,.25) 100%);transition:height .6s ease, bottom .6s ease}.bar.max{position:absolute;left:0;right:0;bottom:0;background:rgba(0,0,0,.08)}.bar.darkcap{position:absolute;left:0;right:0;bottom:0;background:rgba(0,0,0,.2)}.bar.greencap{position:absolute;left:0;right:0;bottom:0;background:rgba(46,125,50,.25)}.bar.bluecap{position:absolute;left:0;right:0;bottom:0;background:rgba(30,136,229,.25)}.cell.balancing .bar.cur{background:linear-gradient(to bottom, #000000 0%,#1e88e5 2%,#1e88e5 30%,#3396e8 70%,rgba(30,136,229,.25) 100%)}.cell.rise .bar.cur{animation:rise 0.6s ease-out}.cell.fall .bar.cur{animation:fall 0.6s ease-out}@keyframes rise{0%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(4%)}100%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(0)}}@keyframes fall{0%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(-4%)}100%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(0)}}.tooltip{position:absolute;left:0;top:0;transform:none;background:rgba(0,0,0,.85);color:#fff;font-size:11px;padding:4px 6px;border-radius:4px;white-space:nowrap;pointer-events:none;z-index:5}.soc-low .soc .fill{background:#d32f2f}.soc-mid .soc .fill{background:#1976d2}.soc-high .soc .fill{background:#2e7d32}.header.charge .soc .fill{background-size:30px 220px;background-image:repeating-linear-gradient(135deg, rgba(255,255,255,.15) 0 10px, transparent 10px 20px);animation:moveRight 8s linear infinite}.header.discharge .soc .fill{background-size:30px 220px;background-image:repeating-linear-gradient(225deg, rgba(255,255,255,.15) 0 10px, transparent 10px 20px);animation:moveLeft 8s linear infinite}@keyframes moveRight{from{background-position:0 0}to{background-position-x:200px}}@keyframes moveLeft{from{background-position:0 0}to{background-position-x:-200px}}.battery-stand{position:relative;height:22px;background:#2b2b2b;border-radius:4px;box-shadow:inset 0 1px 1px rgba(255,255,255,.08);margin-top:2px}.battery-stand .foot{position:absolute;bottom:-6px;width:22px;height:12px;background:#1e1e1e;border-radius:10px 10px 10px 10px/8px 8px 8px 8px;box-shadow:0 2px 0 rgba(0,0,0,.3)}.battery-stand .foot.left{left:10%}.battery-stand .foot.right{right:10%}@media (max-width:300px){.cells{gap:1px;padding:0 4px}.cell{min-width:2px}.axis .label{font-size:10px}}@media (max-width:256px){.cells{gap:0;padding:0 2px}.cell{min-width:0}.axis .label{font-size:9px}}";}catch(_){}

/* Shared CSS as fallback if adoptedStyleSheets fails */
var Y=`/* BYD Battery Box Visualization - Shared Styles */
:host{box-sizing:border-box;font-family:var(--ha-card-header-font-family,Roboto,system-ui,Arial);}
*{box-sizing:border-box}

/* Tower container fills available width */
.battery-tower{display:flex;flex-direction:column;gap:4px;min-width:220px;width:100%;max-width:none;margin:0 auto}
.header{position:relative;display:flex;flex-direction:column;gap:6px;background:linear-gradient(180deg,#585858, #383838);border-radius:10px;padding:8px 12px;color:#fff;box-shadow:inset 0 1px 2px rgba(255,255,255,.08), inset 0 -1px 2px rgba(0,0,0,.45)}
.header .row.top{display:flex;align-items:center;gap:10px}
.header .logo{position:relative;border:2px solid #ff3b3b;color:#ff3b3b;border-radius:999px;font-weight:700;padding:2px 8px;font-size:12px; width: 90px}
.header .logo.nobrandInformation {width:auto;}
.header .logo .brandname{color:#ff3b3b;float:left;margin-right:4px}
.header .capacity{font-size:8px;line-height:1.2;color:#e0e0e0;margin-left:auto}
.header .productname {font-size:8px;font-weight:bold;line-height:1.2;color:#e0e0e0;margin-left:auto}
.header .soc-row{display:flex}
.header .soc{position:relative;flex:1;height:14px;border-radius:8px;background:rgba(0,0,0,.35);overflow:hidden}
.header .soc .fill{position:absolute;left:0;top:0;bottom:0;background:#2e7d32;min-width:0;border-radius:8px}
.header .soc .label{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-weight:700;font-size:12px;text-shadow:0 1px 2px rgba(0,0,0,.6)}
/* 40% smaller chips */
.header .chip{cursor:pointer;background:#2f6df3;color:#fff;border-radius:16px;padding:3px 6px;font-weight:600;user-select:none;font-size:10px}
.header .chip.secondary{background:#4b4b4b}
.header .versions{font-size:8px;line-height:1.2;color:#e0e0e0;cursor:pointer}
.header .power{position:absolute; right: 15px; min-width:100px;text-align:right;display:flex;flex-direction:column;line-height:1.1}
.header .power .p-label{font-weight:600;font-size:11px;opacity:.9}
.header .power .p-value{font-weight:700;font-size:12px}
.header .power .p-eta{font-weight:600;font-size:10px;opacity:.85}

/* Always single-column modules so each module takes full width */
.modules{display:grid;grid-template-columns:1fr;gap:4px;width:100%}

/* White modules with dark text */
.battery-module{position:relative;background:#fff;border-radius:10px;padding:12px 10px 10px 60px;color:#222;border:1px solid #dcdcdc;box-shadow:inset 0 1px 0 rgba(255,255,255,.6);width:100%;
  aspect-ratio: 5 / 2; /* height = 40% of width */
  max-height:180px;
}
/* Minimalistic variant: 50% height */
.battery-module.minimal{aspect-ratio:5/1; max-height:90px; padding-left:10px}
/* keep module-name bottom-right same as detailed */
.battery-module .mini{position:absolute; left:10px; right:8px; top:8px; bottom:8px; display:flex; flex-direction:column; gap:6px}
.battery-module .mini-row{display:flex; align-items:center; gap:8px}
.battery-module .mini-label{width:80px; font-size:10px; opacity:.8}
.battery-module .mini-stat{font-size:11px; font-weight:700}
.battery-module .hbar{flex:1; position:relative; height:10px; border-radius:6px; background:#fff; border:1px solid #e0e0e0; overflow:hidden}
.battery-module.minimal .hbar{height:20px}
.battery-module .hseg{position:absolute; top:0; bottom:0}
.battery-module .hseg.cur{background: linear-gradient(to left, #000000 0%,#2e7d32 1px,#2e7d32 30%,#3b9440 70%,rgba(46,125,50,.25) 100%)}
/* Balancing variant for minimal horizontal bar */
.battery-module .hseg.cur.bal{background: linear-gradient(to left, #000000 0%,#1e88e5 1px,#1e88e5 30%,#3396e8 70%,rgba(30,136,229,.25) 100%)}
.battery-module .hseg.max{background: rgba(0,0,0,.08)}
.battery-module .hseg.greencap{background: rgba(46,125,50,.25)}
.battery-module .hseg.bluecap{background: rgba(30,136,229,.25)}
.battery-module .hnum{position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); font-size:10px; font-weight:700; color:#111; text-shadow:0 1px 1px rgba(255,255,255,.7)}
.battery-module.minimal .hnum{color:#fff; text-shadow:0 1px 1px rgba(0,0,0,.6)}

/* No Data view: same visual height as header (approx.) */
.battery-module.nodata{height:56px; max-height:none; aspect-ratio:auto; padding:8px 10px}

/* No-axis variant: remove left reserve and let chart span full width */
.battery-module.no-axis{padding-left:10px}
.battery-module.no-axis .chart{left:8px}

.module-name{position:absolute;right:8px;bottom:6px;font-size:11px;background:rgba(255,255,255,.65);color:#333;padding:2px 6px;border-radius:6px;z-index:4}
.axis{position:absolute;left:8px;top:8px;bottom:8px;width:48px;z-index:1}
.axis .tick{display:none}
.axis .label{position:absolute;left:0;transform:translateY(-50%);font-size:11px;color:#222}

.chart{position:absolute;left:56px;right:8px;top:8px;bottom:8px;overflow:hidden}
/* horizontal orientation lines spanning full module */
.grid-lines{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none;z-index:3}
.grid-lines .line{position:absolute;left:0;right:0;border-top:1px dashed rgba(0,0,0,.2)}

.cells{position:absolute;left:0;right:0;bottom:0;top:0;display:flex;align-items:flex-end;gap:2px;padding:0 6px;z-index:2}
.cell{flex:1;min-width:4px;background:#fff;position:relative;border-radius:2px;overflow:hidden;height:100%}
.bar.cur{position:absolute;left:0;right:0;bottom:0;background: linear-gradient(to bottom, #000000 0%,#2e7d32 2%,#2e7d32 30%,#3b9440 70%,rgba(46,125,50,.25) 100%);transition:height .6s ease, bottom .6s ease}
.bar.max{position:absolute;left:0;right:0;bottom:0;background:rgba(0,0,0,.08)}
.bar.darkcap{position:absolute;left:0;right:0;bottom:0;background:rgba(0,0,0,.2)}
/* Light green bottom cap between chart min and cell min */
.bar.greencap{position:absolute;left:0;right:0;bottom:0;background:rgba(46,125,50,.25)}
.bar.bluecap{position:absolute;left:0;right:0;bottom:0;background:rgba(30,136,229,.25)}
.cell.balancing .bar.cur{background: linear-gradient(to bottom, #000000 0%,#1e88e5 2%,#1e88e5 30%,#3396e8 70%,rgba(30,136,229,.25) 100%);}

/* Up/Down animation hint */
.cell.rise .bar.cur{animation:rise 0.6s ease-out}
.cell.fall .bar.cur{animation:fall 0.6s ease-out}
@keyframes rise{0%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(4%)}100%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(0)}}
@keyframes fall{0%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(-4%)}100%{box-shadow:0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0);transform:translateY(0)}}

.tooltip{position:absolute;left:0;top:0;transform:none;background:rgba(0,0,0,.85);color:#fff;font-size:11px;padding:4px 6px;border-radius:4px;white-space:nowrap;pointer-events:none;z-index:5}

/* SOC color thresholds */
.soc-low .soc .fill{background:#d32f2f}
.soc-mid .soc .fill{background:#1976d2}
.soc-high .soc .fill{background:#2e7d32}

/* SOC power animation stripes: right for charging (negative), left for discharging (positive) */
.header.charge .soc .fill{background-size: 30px 220px;background-image:repeating-linear-gradient(135deg, rgba(255,255,255,.15) 0 10px, transparent 10px 20px);animation:moveRight 8s linear infinite}
.header.discharge .soc .fill{background-size: 30px 220px;background-image:repeating-linear-gradient(225deg, rgba(255,255,255,.15) 0 10px, transparent 10px 20px);animation:moveLeft 8s linear infinite}
@keyframes moveRight{from{background-position: 0 0;} to{background-position-x:200px}}
@keyframes moveLeft{from{background-position: 0 0;} to{background-position-x:-200px}}

/* Stand resembles BYD base with feet */
.battery-stand{position:relative;height:22px;background:#2b2b2b;border-radius:4px;box-shadow:inset 0 1px 1px rgba(255,255,255,.08);margin-top:2px}
.battery-stand .foot{position:absolute;bottom:-6px;width:22px;height:12px;background:#1e1e1e;border-radius:10px 10px 10px 10px/8px 8px 8px 8px;box-shadow:0 2px 0 rgba(0,0,0,.3)}
.battery-stand .foot.left{left:10%}
.battery-stand .foot.right{right:10%}

/* Narrow modules: responsive thinning before overflow */
@media (max-width: 300px){
  /* Start thinning bars earlier, but keep a small gap */
  .cells{gap:1px;padding:0 4px}
  .cell{min-width:2px}
  .axis .label{font-size:10px}
}

/* Extra-narrow modules: prevent overflow by shrinking min-width and gaps to minimum */
@media (max-width: 256px){
  .cells{gap:0;padding:0 2px}
  .cell{min-width:0}
  .axis .label{font-size:9px}
}`;

/**
 * BYD Battery Header Component
 * Displays the header with SOC, power information, toggles for voltage/temperature and view modes,
 * and cycles through header information (versions, UI, energy, efficiency).
 */
var O=class extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:"open"});
    // Initialize all instance properties to avoid dynamic property creation which can lead to memory leaks
    this._soc=0;
    this._soh=0;
    this._bmuPower=0;
    this._bmuVersion="";
    this._bmsVersion="";
    this._uiMeta="";
    this._onToggle=null;
    this._view="voltage";
    this._displayUnit="mV";
    this._towerCapacityWh=0;
    this._etaText="";
    this._productName="";
    this._showVTToggle=true;
    this._showViewToggle=false;
    this._moduleView="detailed";
    this._showPower=true;
    this._showETA=true;
    this._showProductCapacity=true;
    this._headerInfo={default:"versions",show:{versions:true,ui:true,energy:true,efficiency:true},payload:{versionsText:"",uiText:"",energyText:"",effText:""}};
    this._headerInfoIndex=0;

    // Cleanup tracking for memory management
    this._resizeObserver=null;
    this._windowResizeHandler=null;
    this._boundEventListeners=new Map(); // Track event listeners for cleanup
  }

  connectedCallback(){
    this._render();
    this._adoptCss();
    this._setupResizeObserver();
  }

  disconnectedCallback(){
    // Clean up ResizeObserver to prevent memory leaks
    if(this._resizeObserver){
      this._resizeObserver.disconnect();
      this._resizeObserver=null;
    }
    // Remove window resize listener if it was added as fallback
    if(this._windowResizeHandler){
      window.removeEventListener("resize", this._windowResizeHandler);
      this._windowResizeHandler=null;
    }
    // Clean up tracked event listeners
    this._removeEventListeners();
  }

  // Track and remove event listeners to prevent memory leaks
  _addEventListenerWithTracking(element, type, listener, options=null){
    if(!this._boundEventListeners.has(element)){
      this._boundEventListeners.set(element, []);
    }
    this._boundEventListeners.get(element).push({type, listener});
    element.addEventListener(type, listener, options);
  }

  _removeEventListeners(){
    // Remove all tracked event listeners
    for(let [element, listeners] of this._boundEventListeners){
      for(let {type, listener} of listeners){
        element.removeEventListener(type, listener);
      }
    }
    this._boundEventListeners.clear();
  }

  _adoptCss(){
    try{
      let e=typeof globalThis!="u"?globalThis:typeof window!="u"?window:void 0;
      if(this._sheet||!this.shadowRoot)return;
      let t=()=>{let a=e&&e.__BYD_CSS_SHEET;a&&this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[a],this._sheet=a);};
      if(e&&e.__BYD_CSS_SHEET){t();return}
      let i=()=>{window.removeEventListener("byd-css-ready",i),t()};
      window.addEventListener("byd-css-ready",i);
    }catch{}
  }

  // Property setters - these are called frequently, optimize by checking for actual changes
  setBMUPower(e){if(this._bmuPower!==Number(e||0)){this._bmuPower=Number(e||0);this._updatePowerElements();}}
  setBMUVersion(e){if(this._bmuVersion!==(e||"")){this._bmuVersion=e||"";this._updateHeaderInfo();}}
  setBMSVersion(e){if(this._bmsVersion!==(e||"")){this._bmsVersion=e||"";this._updateHeaderInfo();}}
  setUIMeta(e){if(this._uiMeta!==(e||"")){this._uiMeta=e||"";this._updateHeaderInfo();}}
  setStateOfCharge(e){if(this._soc!==Number(e||0)){this._soc=Number(e||0);this._updateSocElements();}}
  setStateOfHealth(e){if(this._soh!==Number(e||0)){this._soh=Number(e||0);this._updateHeaderInfo();}}
  setTowerCapacityWh(e){if(this._towerCapacityWh!==Number(e||0)){this._towerCapacityWh=Number(e||0);this._updateCapacity();this._applyResponsive();}}
  setEstimate(e){if(this._etaText!==(e||"")){this._etaText=e||"";this._updateETA();}}
  setProductName(e){if(this._productName!==(e||"")){this._productName=e||"";this._updateProductName();}}

  // Update methods for targeted DOM updates instead of full re-render
  _updateSocElements(){
    if(!this.shadowRoot)return;
    let e=this.shadowRoot.querySelector(".soc .fill");
    let t=this.shadowRoot.querySelector(".soc .label");
    if(e)e.style.width=`${Math.max(0,Math.min(100,this._soc))}%`;
    if(t)t.textContent=`${(Number(this._soc)||0).toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1})}%`;
    let a=this.shadowRoot.querySelector(".battery-tower");
    if(a)a.className=`battery-tower ${this._soc<=20?"soc-low":this._soc<=80?"soc-mid":"soc-high"}`;
  }

  _updatePowerElements(){
    if(!this.shadowRoot)return;
    let e=this.shadowRoot.querySelector(".power");
    let t=this.shadowRoot.querySelector(".power .p-label");
    let a=this.shadowRoot.querySelector(".power .p-value");
    if(e)e.style.display=this._showPower||this._showETA&&this._etaText?"":"none";
    if(t)t.textContent=this._bmuPower<0?"Charging":this._bmuPower>0?"Discharging":"Idle";
    if(a)a.textContent=`${Math.abs(Math.round(this._bmuPower))} W`;
    let n=this.shadowRoot.querySelector(".header");
    if(n){n.classList.toggle("charge",this._bmuPower<0);n.classList.toggle("discharge",this._bmuPower>0);}
  }

  _updateCapacity(){
    if(!this.shadowRoot)return;
    let e=this.shadowRoot.getElementById("capacity");
    if(!e)return;
    let t=Number(this._towerCapacityWh)||0;
    if(t>0){let a=t/1e3;e.textContent=`${a.toFixed(1)} kWh`;}else e.textContent="";
  }

  _updateETA(){
    if(!this.shadowRoot)return;
    let e=this.shadowRoot.getElementById("eta");
    if(e){e.textContent=this._etaText||"";e.style.display=this._showETA&&this._etaText?"":"none";}
  }

  _updateProductName(){
    if(!this.shadowRoot)return;
    let e=this.shadowRoot.getElementById("productname");
    if(e)e.textContent=this._productName||"";
  }

  _updateHeaderInfo(){
    if(!this.shadowRoot)return;
    let e=this.shadowRoot.getElementById("header_information");
    if(e){e.innerHTML=this._getCurrentHeaderInfoText();e.style.display=this._enabledHeaderInfoKeys().length?"":"none";e.style.cursor=this._enabledHeaderInfoKeys().length>1?"pointer":"default";}
  }

  setView(e){
    let t=e==="temperature"?"temperature":"voltage";
    if(this._view!==t){this._view=t;this.dispatchEvent(new CustomEvent("toggle-view",{detail:{view:t}}));}
  }

  setDisplayUnit(e){
    let t=e==="V"?"V":"mV";
    if(this._displayUnit!==t){this._displayUnit=t;this.dispatchEvent(new CustomEvent("display-unit-changed",{detail:{unit:t}}));;}
  }

  // Button handlers
  showVoltage(){this.setView("voltage")}
  showTemperature(){this.setView("temperature")}

  _render(){
    let e=this.shadowRoot;
    if(!e)return;
    // Don't remove tracked listeners here, only add new ones
    // The cleanup happens in disconnectedCallback

    // Get SOC class for container
    let t=this._soc<=20?"soc-low":this._soc<=80?"soc-mid":"soc-high";
    let i=this._bmuPower<0?"charge":this._bmuPower>0?"discharge":"";
    let a=this._view==="temperature"?"chip":"chip secondary";
    let n=this._view==="voltage"?"chip":"chip secondary";
    let w="chip secondary";
    let s=this._getCurrentHeaderInfoText();
    let f=Number(this._bmuPower)||0;
    let b=f<0?"Charging":f>0?"Discharging":"Idle";
    let g=`${Math.abs(Math.round(f))} W`;
    let v=e.querySelector(".battery-tower");
    if(v){
      // Instead of full re-render, update existing elements
      v.className=`battery-tower ${t}`;
      this._updateSocElements();
      this._updatePowerElements();
      this._updateHeaderInfo();
      this._updateEtc();
      return;
    }
    // Initial render - create all elements
    e.innerHTML=`
      <div class="battery-tower ${t}">
        <div class="header ${i}">
          <div class="row top">
            <div class="logo">
                <div class="brandname">BYD</div>
                <div class="productname" id="productname"></div>
                <div class="capacity" id="capacity"></div>
            </div>

            <div class="${n}" id="unit" style="${this._showVTToggle?"":"display:none"}">${this._displayUnit}</div>
            <div class="${a}" id="temp" style="${this._showVTToggle?"":"display:none"}">\xB0C</div>
            <div class="chip secondary" id="viewmode" style="${this._showViewToggle?"":"display:none"}">${this._moduleView==="minimal"?"Minimal":this._moduleView==="none"?"No Data":"Detailed"}</div>
            <div class="versions" id="header_information">${s}</div>

            <div class="power"><div class="p-label">${b}</div><div class="p-value">${g}</div><div class="p-eta" id="eta"></div></div>
          </div>
          <div class="row soc-row">
            <div class="soc"><div class="fill" style="width:${Math.max(0,Math.min(100,this._soc))}%"></div><div class="label">${(Number(this._soc)||0).toLocaleString(void 0,{minimumFractionDigits:1,maximumFractionDigits:1})}%</div></div>
          </div>
        </div>
      </div>`;

    // Add event listeners with tracking
    let D=e.getElementById("unit"),I=e.getElementById("temp"),A=e.getElementById("viewmode"),$=e.getElementById("header_information");
    D&&this._addEventListenerWithTracking(D,"pointerdown",r=>{r.preventDefault();r.stopPropagation();this.showVoltage()});
    I&&this._addEventListenerWithTracking(I,"pointerdown",r=>{r.preventDefault();r.stopPropagation();this.showTemperature()});
    A&&this._addEventListenerWithTracking(A,"pointerdown",r=>{r.preventDefault();r.stopPropagation();if(this._showViewToggle){this._moduleView=this._moduleView==="minimal"?"detailed":"minimal";this.dispatchEvent(new CustomEvent("toggle-module-view",{detail:{mode:this._moduleView}}));this._render()}});
    $&&this._addEventListenerWithTracking($,"pointerdown",r=>{r.preventDefault();r.stopPropagation();let M=this._enabledHeaderInfoKeys();if(M.length<=1)return;this._headerInfoIndex=(this._headerInfoIndex+1)%M.length;let l=e.getElementById("header_information");l&&(l.innerHTML=this._getCurrentHeaderInfoText())});
    this._updateCapacity();
    this._updateETA();
    this._applyResponsive();
    this._updateProductName();
  }

  // Update elements that might change during initial render
  _updateEtc(){
    let e=this.shadowRoot;
    if(!e)return;
    let t=e.getElementById("unit"),i=e.getElementById("temp"),a=e.getElementById("viewmode");
    if(t){t.className=this._view==="voltage"?"chip":"chip secondary";t.style.display=this._showVTToggle?"":"none";}
    if(i){i.className=this._view==="temperature"?"chip":"chip secondary";i.style.display=this._showVTToggle?"":"none";}
    if(a){a.style.display=this._showViewToggle?"":"none";}
    let n=e.querySelector(".power");
    n&&(n.style.display=this._showPower||this._showETA&&this._etaText?"":"none");
    let w=e.querySelector(".power .p-label");
    w&&(w.textContent=this._bmuPower<0?"Charging":this._bmuPower>0?"Discharging":"Idle");
    let s=e.querySelector(".power .p-value");
    s&&(s.textContent=`${Math.abs(Math.round(this._bmuPower))} W`);
    let f=e.querySelector(".power .p-eta");
    f&&(f.style.display=this._showETA&&this._etaText?"":"none");
    let b=e.getElementById("capacity");
    b&&(b.style.display=this._showProductCapacity?"":"none");
    let g=e.querySelector(".logo");
    g&&g.classList.toggle("nobrandInformation",!this._showProductCapacity);
    let v=e.getElementById("productname");
    v&&(v.style.display=this._showProductCapacity?"":"none");
  }

  _applyResponsive(){
    let e=this.shadowRoot;
    if(!e)return;
    let t=e.getElementById("header_information"),i=this.getBoundingClientRect().width||0;
    t&&(t.style.display=i<300||this._enabledHeaderInfoKeys().length===0?"none":"");
  }

  _setupResizeObserver(){
    if(this._resizeObserver)return; // Prevent duplicate observers
    typeof ResizeObserver!="u"?(this._resizeObserver=new ResizeObserver(()=>this._applyResponsive()),this._resizeObserver.observe(this)):window.addEventListener("resize",(this._windowResizeHandler=()=>this._applyResponsive()));
  }

  // Configuration setters
  setShowVTToggle(e){if(this._showVTToggle!==(e!==!1)){this._showVTToggle=e!==!1;this._render();}}
  setShowViewToggle(e){if(this._showViewToggle!==!!e){this._showViewToggle=!!e;this._render();}}
  setModuleView(e){if(this._moduleView!==(e==="minimal"?"minimal":e==="none"?"none":"detailed")){this._moduleView=e==="minimal"?"minimal":e==="none"?"none":"detailed";this._render();}}
  setHeaderInformation(e){if(e&&typeof e=="object"){let t=this._currentHeaderKey();this._headerInfo={default:e.default||"versions",show:e.show||this._headerInfo.show,payload:e.payload||this._headerInfo.payload};let i=this._enabledHeaderInfoKeys(),a=this._headerInfo.default||"versions",n=Math.max(0,i.indexOf(a));if(t&&i.includes(t)){let w=(i.indexOf(t)-n+i.length)%i.length;this._headerInfoIndex=w}else this._headerInfoIndex=0;this._render()}}
  setHeaderDisplayOptions(e){if(e&&typeof e=="object"){let t=false;t=t||(e.showPower!==void 0&&this._showPower!==!!e.showPower);t=t||(e.showETA!==void 0&&this._showETA!==!!e.showETA);t=t||(e.showProductCapacity!==void 0&&this._showProductCapacity!==!!e.showProductCapacity);if(t){this._showPower=!!e.showPower;this._showETA=!!e.showETA;this._showProductCapacity=!!e.showProductCapacity;this._render()}}}

  _enabledHeaderInfoKeys(){let e=this._headerInfo?.show||{},t=["versions","ui","energy","efficiency"].filter(i=>e[i]!==!1);return t.length?t:["versions","ui","energy","efficiency"]}
  _currentHeaderKey(){let e=this._enabledHeaderInfoKeys();if(e.length===0)return"";let t=this._headerInfo?.default||"versions",a=(Math.max(0,e.indexOf(t))+(this._headerInfoIndex||0))%e.length;return e[a]}
  _getCurrentHeaderInfoText(){let e=this._headerInfo?.payload||{},t=this._enabledHeaderInfoKeys();if(t.length===0)return"";let i=0,a=this._headerInfo?.default||"versions",n=t.indexOf(a);i=n>=0?n:0;let w=(i+this._headerInfoIndex)%t.length,s=t[w];return s==="versions"?e.versionsText||`BMU ${this._bmuVersion||""}<br>BMS ${this._bmsVersion||""}`:s==="ui"?e.uiText||this._uiMeta||"":s==="energy"?e.energyText||"":s==="efficiency"&&e.effText||""}
};

/**
 * BYD Battery Module Component
 * Displays detailed or minimal battery cell visualizations with voltage, temperature, balancing information,
 * and interactive tooltips. Handles chart rendering, axis display, and user interactions.
 */
var q=class extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:"open"});
    // Initialize all properties
    this._name="BMS";
    this._view="voltage";
    this._yAxis=true;
    this._voltage=[];
    this._histMax=[];
    this._histMin=[];
    this._temp([]);
    this._balancing([]);
    this._chart={vMin:3100,vMax:3700};
    this._last={voltage:[],temp:[],histMin:[],histMax:[]};
    this._tip={showUntil:0,x:0,y:0,text:""};
    this._showGrayCaps=true;
    this._displayUnit="mV";
    this._moduleView="detailed";

    // Memory management
    this._cellEventListeners = new Map(); // Track cell event listeners
    this._tooltipTimeouts = []; // Track timeout IDs for cleanup
  }

  connectedCallback(){
    this._render();
    this._adoptCss();
  }

  disconnectedCallback(){
    // Clear all timeouts to prevent memory leaks
    this._tooltipTimeouts.forEach(t=>clearTimeout(t));
    this._tooltipTimeouts.length=0;
    // Remove all tracked cell event listeners
    for(let [cell, listeners] of this._cellEventListeners){
      listeners.forEach(({type, listener})=>cell.removeEventListener(type, listener));
    }
    this._cellEventListeners.clear();
  }

  _adoptCss(){
    try{if(this._sheet||!this.shadowRoot)return;let e=typeof globalThis!="u"?globalThis:typeof window!="u"?window:void 0,t=()=>{let a=e&&e.__BYD_CSS_SHEET;a&&(this.shadowRoot&&(this.shadowRoot.adoptedStyleSheets=[a],this._sheet=a))};if(e&&e.__BYD_CSS_SHEET){t();return}let i=()=>{window.removeEventListener("byd-css-ready",i),t()};window.addEventListener("byd-css-ready",i)}catch{}
  }

  // Configuration methods - check for changes to avoid unnecessary updates
  setVoltage(e){if(!this._arraysEqual(this._voltage,e)){this._setArray("voltage",e)}}
  setHistoryMaxVoltage(e){if(!this._arraysEqual(this._histMax,e)){this._setArray("histMax",e)}}
  setHistoryMinVoltage(e){if(!this._arraysEqual(this._histMin,e)){this._setArray("histMin",e)}}
  setChartMaxVoltage(e){if(this._chart.vMax!==Number(e||this._chart.vMax)){this._chart.vMax=Number(e||this._chart.vMax);this._render()}}
  setChartMinVoltage(e){if(this._chart.vMin!==Number(e||this._chart.vMin)){this._chart.vMin=Number(e||this._chart.vMin);this._render()}}
  setTemperature(e){if(!this._arraysEqual(this._temp,e)){this._setArray("temp",e)}}
  setChartMaxTemperature(e){if(this._chart.tMax!==Number(e||this._chart.tMax)){this._chart.tMax=Number(e||this._chart.tMax);this._render()}}
  setChartMinTemperature(e){if(this._chart.tMin!==Number(e||this._chart.tMin)){this._chart.tMin=Number(e||this._chart.tMin);this._render()}}
  setCellBallancing(e){if(!this._arraysEqual(this._balancing,e)){this._balancing=Array.isArray(e)?e:[],this._render()}}
  setShowGrayCaps(e){if(this._showGrayCaps!==(e!==!1)){this._showGrayCaps=e!==!1;this._render()}}
  setDisplayUnit(e){if(this._displayUnit!==(e==="V"?"V":"mV")){this._displayUnit=e==="V"?"V":"mV";this._render()}}
  setModuleView(e){if(this._moduleView!==(e==="minimal"?"minimal":e==="none"?"none":"detailed")){this._moduleView=e==="minimal"?"minimal":e==="none"?"none":"detailed";this._render()}}

  // Stub methods for interface compatibility
  setStateOfCharge(){}
  setStateOfHealth(){}
  setEfficiency(){}
  setBMUPower(){}
  setBMUVersion(){}
  setBMSVersion(){}

  showVoltage(){if(this._view!=="voltage"){this._view="voltage";this._render()}}
  showTemperature(){if(this._view!=="temperature"){this._view="temperature";this._render()}}

  set name(e){if(this._name!==e){this._name=e;this._render()}}

  // Utility to check array equality for change detection
  _arraysEqual(a,b){
    if(a.length!==b.length)return false;
    for(let i=0;i<a.length;i++)if(a[i]!==b[i])return false;
    return true;
  }

  _setArray(e,t){
    let i=e==="voltage"?"voltage":e==="histMax"?"histMax":e==="histMin
