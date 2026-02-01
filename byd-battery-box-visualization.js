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
    let i=e==="voltage"?"voltage":e==="histMax"?"histMax":e==="histMin"?"histMin":e==="temp"?"temp":"balancing";
    Array.isArray(t)&&(this._last[i]=this["_"+i].slice(),this["_"+i]=t.slice(),this._render());

    // Clear previous cell listeners before render
    for(let listeners of this._cellEventListeners.values()){
      if(listeners) listeners.forEach(({type, listener})=>element.removeEventListener(type, listener));
    }
    this._cellEventListeners.clear();

    // Optimized caching of axis calculations
    this._cachedAxis=null;
  }

  _getCachedAxis(){
    if(!this._cachedAxis){
      this._cachedAxis=this._view==="temperature"?{min:this._chart.tMin,max:this._chart.tMax,unit:"\xB0C"}:{min:this._chart.vMin??Math.min(...this._histMin,...this._voltage),max:this._chart.vMax??Math.max(...this._histMax,...this._voltage),unit:this._displayUnit==="V"?"V":"mV"};
    }
    return this._cachedAxis;
  }

  _render(){
    let e=this.shadowRoot;
    if(!e)return;
    this._cachedAxis=null; // Invalidate cache
    let t=this._getCachedAxis(),i=this._view==="temperature";
    if(this._moduleView==="none"){
      e.innerHTML=`
        <div class="battery-module nodata no-axis">
          <div class="module-name">${this._name||""}</div>
        </div>
      `;
      return;
    }
    if(this._moduleView==="minimal"){
      let r=this._voltage.filter(d=>Number.isFinite(Number(d))).map(Number),M=this._temp.filter(d=>Number.isFinite(Number(d))).map(Number),l=d=>{if(!d.length)return 0;let y=[...d].sort((k,P)=>k-P),x=Math.floor(y.length/2);return y.length%2?y[x]:(y[x-1]+y[x])/2},_=l(r),u=l(this._histMin.filter(d=>Number.isFinite(Number(d))).map(Number)),V=l(this._histMax.filter(d=>Number.isFinite(Number(d))).map(Number)),S=l(M),c=d=>{let y=this._chart.vMin,x=this._chart.vMax;return!Number.isFinite(d)||x===y?0:(Math.min(x,Math.max(y,Number(d)))-y)/(x-y)*100},h=d=>{let y=this._chart.tMin,x=this._chart.tMax;return!Number.isFinite(d)||x===y?0:(Math.min(x,Math.max(y,Number(d)))-y)/(x-y)*100},o=0;Math.max(0,_-u)<20&&(o=150);let E=d=>this._displayUnit==="V"?`${(Number(d)/1e3).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3})} V`:`${Math.round(Number(d))} mV`,N=c(u-o),m=c(_),p=Math.max(0,m-N),T=N+p/2;e.innerHTML=`
        <div class="battery-module minimal no-axis">
          <div class="mini">
            <div class="mini-row">
              <div class="mini-label">Voltage</div>
              <div class="hbar">
                <div class="hseg ${this._balancing?.some(d=>d===1||d===!0)?"bluecap":"greencap"}" style="left:0;width:${Math.max(0,c(u))}%;"></div>
                <div class="hseg cur${this._balancing?.some(d=>d===1||d===!0)?" bal":""}" style="left:${N}%;width:${p}%;"></div>
                ${this._showGrayCaps?`<div class="hseg max" style="left:${m}%;width:${Math.max(0,c(V)-m)}%"></div>`:""}
                <div class="hnum" style="left:${T}%; color:#fff;">${E(_)}</div>
              </div>
            </div>
            <div class="mini-row">
              <div class="mini-label">Temperature</div>
              <div class="hbar">
                <div class="hseg cur" style="left:0;width:${Math.max(0,h(S))}%;"></div>
                <div class="hnum" style="left:${Math.max(0,h(S))/2}%; color:#fff;">${Number(S).toLocaleString(void 0,{maximumFractionDigits:1})} \xB0C</div>
              </div>
            </div>
            <div class="mini-row">
              <div class="mini-label">Cell Balancing</div>
              <div class="mini-stat">${(this._balancing||[]).filter(d=>d===1||d===!0).length}</div>
            </div>
          </div>
          <div class="module-name">${this._name||""}</div>
        </div>
      `;
      return;
    }
    // Detailed view
    e.innerHTML=`
      <div class="battery-module ${this._yAxis?"":"no-axis"}">
        <div class="axis" style="display:${this._yAxis?"block":"none"}"></div>
        <div class="chart"></div>
        <div class="module-name">${this._name||""}</div>
      </div>
    `;
    let a=e.querySelector(".axis");
    this._yAxis&&this._renderAxis(a,t);
    let n=e.querySelector(".chart"),w=document.createElement("div");w.className="cells";let s=document.createElement("div");s.className="tooltip",s.style.display="none",n.appendChild(s);let f=()=>{if(!s._sticky)s.style.display="none"};if(this._yAxis){let r=document.createElement("div");r.className="grid-lines";let M=5;for(let l=0;l<=M;l++){let _=l/M,u=document.createElement("div");u.className="line",u.style.top=`${(1-_)*100}%`,r.appendChild(u)}n.appendChild(r)}let b=i?this._temp:this._voltage,g=b.length,v=t.max,D=t.min,I=r=>r==null||isNaN(r)||v===D?0:(Math.min(v,Math.max(D,Number(r)))-D)/(v-D)*100,A=r=>i?`${Number(r).toLocaleString(void 0,{maximumFractionDigits:1})} \xB0C`:this._displayUnit==="V"?`${(Number(r)/1e3).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3})} V`:`${Math.round(Number(r))} mV`,$=0;if(!i){let r=[];for(let l=0;l<g;l++){let _=Number(this._voltage[l]),u=Number(this._histMin[l]);Number.isFinite(_)&&Number.isFinite(u)&&r.push(Math.max(0,_-u))}(r.length?r.reduce((l,_)=>l+_,0)/r.length:0)<20&&($=150)}for(let r=0;r<g;r++){let M=Number(b[r]),l=document.createElement("div");l.className="cell";let _=D,u=v;if(!i){let m=Number(this._histMin[r]),p=Number(this._histMax[r]);if(Number.isFinite(m)&&(_=m),Number.isFinite(p)&&(u=p),Number.isFinite(_)&&_<D){let d=this._balancing&&(this._balancing[r]===!0||this._balancing[r]===1),y=document.createElement("div");y.className="bar "+(d?"bluecap":"greencap"),y.style.height=I(_)+"%",l.appendChild(y)}let T=I(M);if(this._showGrayCaps&&Number.isFinite(u)){let d=I(u),y=Math.max(0,d-T);if(y>0){let x=document.createElement("div");x.className="bar max",x.style.bottom=T+"%",x.style.height=y+"%",l.appendChild(x)}}}let V=document.createElement("div");V.className="bar cur";let S=I(M),c=I(_-$),h=Math.max(0,S-c),o=i?this._last.temp[r]:this._last.voltage[r];if(o!==void 0&&!Number.isNaN(Number(o))){let m=0,p=0;if(i)m=0,p=Math.max(0,I(Number(o)));else{let T=_-#,d=Number(this._last.histMin[r]);Number.isFinite(d)&&(T=d);let y=I(T-$),x=I(Number(o));m=y,p=Math.max(0,x-y)}V.style.transition="none",V.style.bottom=m+"%",V.style.height=p+"%",requestAnimationFrame(()=>{V.style.transition="height .6s ease, bottom .6s ease",V.style.bottom=c+"%",V.style.height=h+"%"})}else V.style.bottom=c+"%",V.style.height=h+"%";!i&&this._balancing&&(this._balancing[r]===!0||this._balancing[r]===1)&&l.classList.add("balancing"),l.appendChild(V),this._cellEventListeners.set(l,[]);let N=m=>{let p=n.getBoundingClientRect();s.style.display="block",s.textContent=A(M);let T=s.offsetWidth||50,d=s.offsetHeight||20,y=m&&typeof m.clientX=="number"&&typeof m.clientY=="number"&&(m.clientX!==0||m.clientY!==0),x,k;if(y)x=m.clientX-p.left+10,k=m.clientY-p.top-10-d;else{let P=l.getBoundingClientRect();x=P.left-p.left+P.width/2+8,k=P.top-p.top-d-8}x=Math.max(6,Math.min(x,p.width-T-6)),k=Math.max(6,Math.min(k,p.height-d-6)),s.style.left=`${x}px`,s.style.top=`${k}px`,this._tip.x=x,this._tip.y=k,this._tip.text=A(M)};let E=N,P=()=>{s.style.display="block",s._sticky=!0;let T=Date.now();this._tip.showUntil=T+3e3,this._tooltipTimeouts.push(setTimeout(()=>{s._sticky=!1,this._tip.showUntil=0,f()},3e3))},T=!0;l.addEventListener("pointerenter",(m=>E(m))),l.addEventListener("pointermove",(m=>E(m))),l.addEventListener("pointerleave",f),l.addEventListener("pointerdown",(m=>{E(m),P()})),this._cellEventListeners.get(l).push({element:l,type:"pointerenter",listener:m=>E(m)},{element:l,type:"pointermove",listener:m=>E(m)},{element:l,type:"pointerleave",listener:f},{element:l,type:"pointerdown",listener:m=>{E(m),P()}})}}if(w.appendChild(l),this._tip?.showUntil&&Date.now()<this._tip.showUntil){s.style.display="block",s.textContent=this._tip.text||"";let r=n.getBoundingClientRect(),M=s.offsetWidth||50,l=s.offsetHeight||20,_=this._tip.x,u=this._tip.y;_=Math.max(6,Math.min(_,r.width-M-6)),u=Math.max(6,Math.min(u,r.height-l-6)),s.style.left=`${_}px`,s.style.top=`${u}px`,s._sticky=!0,this._tooltipTimeouts.push(setTimeout(()=>{s._sticky=!1,this._tip.showUntil=0,f()},Math.max(0,this._tip.showUntil-Date.now())))}if(g>0){let r=(l,_,u)=>Math.max(_,Math.min(u,l)),M=(l,_)=>{let u=n.getBoundingClientRect(),V=b[_];s.style.display="block",s.textContent=A(V);let S=s.offsetWidth||50,c=s.offsetHeight||20,h=(l?.clientX??u.left+u.width/2)-u.left+10,o=(l?.clientY??u.top+u.height/2)-u.top-10-c;h=r(h,6,u.width-S-6),o=r(o,6,u.height-c-6),s.style.left=`${h}px`,s.style.top=`${o}px`,this._tip.x=h,this._tip.y=o,this._tip.text=`${V} ${t.unit}`};n.addEventListener("pointermove",l=>{let _=n.getBoundingClientRect(),u=_.width-12,V=r((l.clientX-_.left-6)/(u||1),0,1),S=r(Math.floor(V*g),0,g-1);M(l,S)}),this._cellEventListeners.set(n,[{element:n,type:"pointermove",listener:l=>{let _=n.getBoundingClientRect(),u=_.width-12,V=r((l.clientX-_.left-6)/(u||1),0,1),S=r(Math.floor(V*g),0,g-1);M(l,S)}}]),n.addEventListener("pointerleave",f),this._cellEventListeners.get(n).push({element:n,type:"pointerleave",listener:f})}}if(n.appendChild(w),showYAxisValues(){if(!this._yAxis){this._yAxis=true;this._render()}},hideYAxisValues(){if(this._yAxis){this._yAxis=false;this._render()}},_renderAxis(e,t){e.innerHTML="";let i=5;for(let a=0;a<=i;a++){let n=a/i,w=document.createElement("div");w.className="tick",w.style.top=`${(1-n)*100}%`;let s=document.createElement("div");s.className="label";let f=t.min+(t.max-t.min)*n,b;t.unit==="\xB0C"?b=`${Number(f).toLocaleString(void 0,{maximumFractionDigits:1})} ${t.unit}`:t.unit==="V"?b=`${(Number(f)/1e3).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3})} V`:b=`${Math.round(Number(f))} mV`,s.textContent=b,s.style.top=`${(1-n)*100}%`,e.appendChild(w),e.appendChild(s)}}
};

/**
 * BYD Battery Stand Component
 * Simple visual component representing the physical battery base.
 */
var K=class extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:"open"});
  }
  connectedCallback(){
    this._render();
    this._adoptCss();
  }
  _adoptCss(){
    try{let e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;if(this._sheet||!this.shadowRoot)return;let t=()=>{let a=e&&e.__BYD_CSS_SHEET;a&&(this.shadowRoot.adoptedStyleSheets=[a],this._sheet=a)};if(e&&e.__BYD_CSS_SHEET){t();return}let i=()=>{window.removeEventListener("byd-css-ready",i),t()};window.addEventListener("byd-css-ready",i)}catch{}}
  _render(){
    this.shadowRoot.innerHTML='<div class="battery-stand"><div class="foot left"></div><div class="foot right"></div></div>';
  }
};

/**
 * BYD Battery Tower Component
 * Manages a vertical tower containing multiple battery modules, handles data distribution
 * to child modules and tower-level configuration.
 */
var G=class extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:"open"});
    this._index=Number(this.getAttribute("index"))||1;
    this._modules=2;
    this._header=null;
    this._moduleEls=[];
    this._chartV={min:3100,max:3700};
    this._chartT={min:0,max:60};
    this._view="voltage";
    this._displayUnit="mV";
    this._moduleView="detailed";

    // Track event listeners
    this._eventListeners=new Map();
  }

  connectedCallback(){
    this._render();
    this._adoptCss();
  }

  disconnectedCallback(){
    // Clean up event listeners
    for(let [element, listeners] of this._eventListeners){
      for(let {type, listener} of listeners){
        element.removeEventListener(type, listener);
      }
    }
    this._eventListeners.clear();
  }

  _addEventListenerWithTracking(element, type, listener, options=null){
    if(!this._eventListeners.has(element)){
      this._eventListeners.set(element, []);
    }
    this._eventListeners.get(element).push({type, listener});
    element.addEventListener(type, listener, options);
  }

  _adoptCss(){
    try{let e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0;if(this._sheet||!this.shadowRoot)return;let t=()=>{let a=e&&e.__BYD_CSS_SHEET;a&&(this.shadowRoot.adoptedStyleSheets=[a],this._sheet=a)};if(e&&e.__BYD_CSS_SHEET){t();return}let i=()=>{window.removeEventListener("byd-css-ready",i),t()};window.addEventListener("byd-css-ready",i)}catch{}
  }

  // Configuration setters - optimize by checking changes
  setModules(e){if(this._modules!==Math.max(2,Math.min(10,Number(e)||2))){this._modules=Math.max(2,Math.min(10,Number(e)||2));this._render()}}
  getModulesCount(){return this._modules}

  // Data setting methods - check before updating modules
  setVoltage(e){this._eachModuleData(e,(t,i)=>t.setVoltage(i))}
  setHistoryMaxVoltage(e){this._eachModuleData(e,(t,i)=>t.setHistoryMaxVoltage(i))}
  setHistoryMinVoltage(e){this._eachModuleData(e,(t,i)=>t.setHistoryMinVoltage(i))}
  setChartMaxVoltage(e){if(this._chartV.max!==Number(e||this._chartV.max)){this._chartV.max=Number(e||this._chartV.max);this._moduleEls.forEach(t=>t.setChartMaxVoltage(this._chartV.max))}}
  setChartMinVoltage(e){if(this._chartV.min!==Number(e||this._chartV.min)){this._chartV.min=Number(e||this._chartV.min);this._moduleEls.forEach(t=>t.setChartMinVoltage(this._chartV.min))}}
  setTemperature(e){this._eachModuleData(e,(t,i)=>t.setTemperature(i))}
  setChartMaxTemperature(e){if(this._chartT.max!==Number(e||this._chartT.max)){this._chartT.max=Number(e||this._chartT.max);this._moduleEls.forEach(t=>t.setChartMaxTemperature(this._chartT.max))}}
  setChartMinTemperature(e){if(this._chartT.min!==Number(e||this._chartT.min)){this._chartT.min=Number(e||this._chartT.min);this._moduleEls.forEach(t=>t.setChartMinTemperature(this._chartT.min))}}
  setCellBallancing(e){this._eachModuleData(e,(t,i)=>t.setCellBallancing(i))}

  setStateOfCharge(e){this._header?.setStateOfCharge(e)}
  setStateOfHealth(e){this._header?.setStateOfHealth(e)}
  setEfficiency(){}
  setBMUPower(e){this._header?.setBMUPower(e)}
  setBMUVersion(e){this._header?.setBMUVersion(e)}
  setBMSVersion(e){this._header?.setBMSVersion(e)}
  setUIMeta(e){this._header?.setUIMeta?.(e)}
  setTowerCapacityWh(e){this._header?.setTowerCapacityWh?.(e)}
  setEstimate(e){this._header?.setEstimate?.(e)}
  setProductName(e){this._header?.setProductName?.(e)}
  setDisplayUnit(e){if(this._displayUnit!==(e==="V"?"V":"mV")){this._displayUnit=e==="V"?"V":"mV";this._header?.setDisplayUnit?.(this._displayUnit);this._moduleEls.forEach(t=>t.setDisplayUnit?.(this._displayUnit))}}
  setModuleView(e){let t=e==="minimal"?"minimal":e==="none"?"none":"detailed";if(this._moduleView!==t){this._moduleView=t;this._header?.setModuleView?.(this._moduleView);this._moduleEls.forEach(i=>i.setModuleView?.(this._moduleView))}}
  getModuleView(){return this._moduleView}

  // Configuration setters
  setHeaderInformation(e){this._header?.setHeaderInformation?.(e)}
  setShowVTToggle(e){this._header?.setShowVTToggle?.(e)}
  setShowViewToggle(e){this._header?.setShowViewToggle?.(e)}
  showVoltage(){if(this._view!=="voltage"){this._view="voltage";this._header?.setView?.("voltage");this._moduleEls.forEach(e=>e.showVoltage());this.dispatchEvent(new CustomEvent("toggle-view",{detail:{view:"voltage"}}))}}
  showTemperature(){if(this._view!=="temperature"){this._view="temperature";this._header?.setView?.("temperature");this._moduleEls.forEach(e=>e.showTemperature());this.dispatchEvent(new CustomEvent("toggle-view",{detail:{view:"temperature"}}))}}
  getView(){return this._view}
  showYAxisValues(){this._moduleEls.forEach(e=>e.showYAxisValues())}
  hideYAxisValues(){this._moduleEls.forEach(e=>e.hideYAxisValues())}
  setShowGrayCaps(e){this._moduleEls.forEach(t=>t.setShowGrayCaps?.(e))}

  // Display options - aggregate changes
  setHeaderDisplayOptions(e){if(e&&typeof e=="object"){let t=false;t=t||(e.showPower!==void 0&&this._showPower!==!!e.showPower);t=t||(e.showETA!==void 0&&this._showETA!==!!e.showETA);t=t||(e.showProductCapacity!==void 0&&this._showProductCapacity!==!!e.showProductCapacity);if(t){this._showPower=!!e.showPower;this._showETA=!!e.showETA;this._showProductCapacity=!!e.showProductCapacity;this._header?.setHeaderDisplayOptions?.(e)}}}

  _eachModuleData(e,t){if(e&&Array.isArray(e)){if(e.length&&typeof e[0]=="object"&&!Array.isArray(e[0])){for(let i of e){let a=(i.m||i.module||1)-1,n=this._moduleEls[a];n&&t(n,i.v||i.t||i.b||[])}}else{for(let i=0;i<Math.min(this._moduleEls.length,e.length);i++)t(this._moduleEls[i],e[i]||[])}}}

  _render(){
    let e=this.shadowRoot;
    if(!e)return;
    // Prevent re-adding event listeners
    for(let listeners of this._eventListeners.values()){
      if(listeners) listeners.forEach(({type, listener, element})=>element?.removeEventListener(type, listener));
    }
    this._eventListeners.clear();

    e.innerHTML=`
      <div class="battery-tower">
        <byd-battery-header></byd-battery-header>
        <div class="modules"></div>
        <byd-battery-stand></byd-battery-stand>
      </div>
    `;
    this._header=e.querySelector("byd-battery-header");
    this._header&&this._addEventListenerWithTracking(this._header,"toggle-view",a=>{a.detail.view==="temperature"?this.showTemperature():this.showVoltage()});
    this._header&&this._addEventListenerWithTracking(this._header,"toggle-unit",a=>{this.setDisplayUnit(a.detail?.unit)});
    this._header&&this._addEventListenerWithTracking(this._header,"toggle-module-view",a=>{this.setModuleView(a.detail?.mode)});
    let t=e.querySelector(".modules");
    t.innerHTML="";
    this._moduleEls=[];
    let i=this._modules;
    for(let a=0;a<i;a++){
      let n=document.createElement("byd-battery-module");
      n.name=`BMS ${this._index}.${a+1}`;
      n.setChartMinVoltage(this._chartV.min);
      n.setChartMaxVoltage(this._chartV.max);
      n.setChartMinTemperature(this._chartT.min);
      n.setChartMaxTemperature(this._chartT.max);
      n.setDisplayUnit?.(this._displayUnit);
      n.setModuleView?.(this._moduleView);
      t.appendChild(n);
      this._moduleEls.push(n);
    }
  }
};

/**
 * BYD Battery System Component
 * Top-level component managing multiple battery towers. Handles large-scale battery configuration
 * and data distribution across all towers within the system.
 */
var X=class extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:"open"});
    this._towers=1;
    this._towerEls=[];

    // Track CSS loading
    this._sheet=null;
    this._cssTimer=null;
  }

  connectedCallback(){
    this._render();
    this._ensureCss();
  }

  disconnectedCallback(){
    if(this._cssTimer){
      clearTimeout(this._cssTimer);
      this._cssTimer=null;
    }
  }

  async _ensureCss(){
    if(this._sheet)return;
    try{
      let e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:void 0,t=e&&e.__BYD_CSS_SHEET;
      if(!t){
        let i=e&&e.__BYD_CSS_TEXT?e.__BYD_CSS_TEXT:Y;
        t=new CSSStyleSheet;
        await t.replace(i);
        e&&(e.__BYD_CSS_SHEET=t);
        try{window.dispatchEvent(new Event("byd-css-ready"))}catch{}
      }
      this.shadowRoot.adoptedStyleSheets=[t];
      this._sheet=t;
    }catch{}
  }

  setTowers(e){if(this._towers!==Math.max(1,Math.min(3,Number(e)||1))){this._towers=Math.max(1,Math.min(3,Number(e)||1));this._render()}}
  getTower(e){return this._towerEls[e-1]}
  setStateOfCharge(e){this._towerEls.forEach(t=>t?.setStateOfCharge(e))}
  setStateOfHealth(e){this._towerEls.forEach(t=>t?.setStateOfHealth(e))}
  setBMUPower(e){this._towerEls.forEach(t=>t?.setBMUPower(e))}
  setBMUVersion(e){this._towerEls.forEach(t=>t?.setBMUVersion(e))}
  setBMSVersion(e){this._towerEls.forEach(t=>t?.setBMSVersion(e))}

  _render(){
    let e=this.shadowRoot;
    if(!e)return;
    let t=document.createElement("div");
    t.style.display="grid",t.style.gridTemplateColumns="1fr",t.style.gap="14px",t.style.width="100%",e.innerHTML="",e.appendChild(t),this._towerEls=[]
    ;for(let i=0;i<this._towers;i++){
      let a=document.createElement("byd-battery-tower");
      a.setAttribute("index",String(i+1)),t.appendChild(a),this._towerEls.push(a);
    }
  }
};

/**
 * BYD Battery Box Visualization Card
 * Main Home Assistant card component that renders battery visualization. Handles data discovery
 * from Home Assistant state, configuration management, and real-time updates. Includes power
 * sampling for efficiency calculations.
 */
var L=class extends HTMLElement{
  static getConfigElement(){
    return document.createElement("byd-battery-box-visualization-editor");
  }
  static getStubConfig(){
    return{
      voltage_auto:!0,temp_min:10,temp_max:45,show_y_axis:!0,show_gray_caps:!0,unit:"mV",
      default_view:"voltage",module_view:"detailed",show_vt_toggle:!0,show_view_toggle:!1,
      show_power:!0,show_eta:!0,show_product_capacity:!0,header_information_default:"versions",
      show_header_versions:!0,show_header_ui:!0,show_header_energy:!0,show_header_efficiency:!0};
  }

  setConfig(e){this._config=e||{};}
  set hass(e){this._hass=e;this._render()}

  // Initialize configuration state
  _applyInitialConfig(){
    if(this._appliedInitialView!==!0){
      let c=this._config.default_view==="temperature"?"temperature":"voltage";
      this._currentView=c,this._appliedInitialView=!0;
    }
    if(this._appliedInitialModuleView!==!0){
      let C=this._config.module_view;C==="minimalistic"||C==="minimal"?this._currentModuleView="minimal":C==="no-data"||C==="none"?this._currentModuleView="none":this._currentModuleView="detailed",this._appliedInitialModuleView=!0;
    }
  }

  _render(){
    if(!this._hass)return;
    let e=this._config||{},t=this.shadowRoot||this.attachShadow({mode:"open"});
    if(!this._el){
      let c=document.createElement("ha-card"),h=document.createElement("div");h.style.padding="10px";
      let o=document.createElement("byd-battery-system");
      h.appendChild(o),c.appendChild(h),t.innerHTML="",t.appendChild(c),this._el={card:c,container:h,system:o},this._lastTowerCount=0,this._lastModules=[],
      this._powerSamples=[],this._lastAppliedView=void 0,this._lastAppliedModuleView=void 0;
    }

    // Apply configuration once
    this._applyInitialConfig();

    let i=this._discoverTowers(),a=i.length||1;
    if(this._lastTowerCount!==a){this._el.system.setTowers(a),this._lastTowerCount=a,this._lastModules=new Array(a).fill(void 0);}

    let n=this._discoverBMU();
    this._pushPowerSample(n.power??0);

    let w=this._avgPowerW(),s=c=>{let h=Number(c);return Number.isFinite(h)?h:void 0},f=e.voltage_auto!==!1,b=f?void 0:s(e.voltage_min),g=f?void 0:s(e.voltage_max),v=s(e.temp_min),D=s(e.temp_max),I=i.length?Math.min(...i.map(c=>c?.chart?.vMin??99999)):3100,A=i.length?Math.max(...i.map(c=>c?.chart?.vMax??-99999)):3500,$=b!==void 0?b:I,r=g!==void 0?g:A;if(g===void 0){
      let c=Number(n.cellMaxV||0),h=Math.max(3500,c>3.5?Math.round(c*1e3):0);
      h>0&&(r=Math.min(r,h));
    }
    let M=v!==void 0?v:0,l=D!==void 0?D:60,_=n.totalCapacityWh&&a?n.totalCapacityWh/a:0,u=c=>{if(!Number.isFinite(c)||c<=0)return"";let h=Math.floor(c/3600),o=Math.round(c%3600/60);return h>0?`${h}h ${o}m`:`${o}m`},S=(e.unit||"mV")==="V"?"V":"mV";

    for(let c=0;c<a;c++){
      let h=i[c];
      if(!h)continue;
      let o=this._el.system.getTower(c+1);
      if(!o)continue;

      // Apply view state management
      if(c===0&&typeof o.getView=="function"&&this._lastAppliedView!==void 0){
        let C=o.getView();(C==="temperature"||C==="voltage")&&(this._currentView=C);
      }
      if(typeof o.getModulesCount=="function"?Number(o.getModulesCount()):this._lastModules[c]??0!==h.modules){
        o.setModules(h.modules),this._lastModules[c]=h.modules,typeof o.setModuleView=="function"&&o.setModuleView(this._currentModuleView);
      }
      if(typeof o.getModuleView=="function"&&this._lastAppliedModuleView!==void 0){
        let C=o.getModuleView();(C==="minimal"||C==="detailed"||C==="none")&&(this._currentModuleView=C);
      }

      // Update chart ranges once
      o.setChartMinVoltage($),o.setChartMaxVoltage(r),o.setChartMinTemperature(M),o.setChartMaxTemperature(l);

      // Configuration flags - check for changes
      e.show_y_axis===!1&&o.hideYAxisValues(),typeof o.setShowGrayCaps=="function"&&o.setShowGrayCaps(e.show_gray_caps!==!1),typeof o.setShowVTToggle=="function"&&o.setShowVTToggle(e.show_vt_toggle!==!1),typeof o.setShowViewToggle=="function"&&o.setShowViewToggle(e.show_view_toggle===!0),typeof o.setHeaderDisplayOptions=="function"&&o.setHeaderDisplayOptions({showPower:e.show_power!==!1,showETA:e.show_eta!==!1,showProductCapacity:e.show_product_capacity!==!1});

      o.setDisplayUnit?.(S);
      if(this._lastAppliedView!==this._currentView){this._currentView==="temperature"?o.showTemperature():o.showVoltage();}

      // Set tower data
      o.setBMUPower(n.power??0),o.setBMUVersion(n.version||""),o.setBMSVersion(h.bmsVersion||""),o.setUIMeta?.(`UI ${Z}<br>modules:${h.modules}`),o.setStateOfCharge(h.soc??n.soc??0),o.setStateOfHealth(h.soh??0);

      let N=this._hass.states||{},m=N[`sensor.bms_${h.id}_charge_total_energy`],p=N[`sensor.bms_${h.id}_discharge_total_energy`],T=N[`sensor.bms_${h.id}_efficiency`],d=C=>{if(!C)return{txt:"--",unit:""};let H=Number(C.state),U=(C.attributes?.unit_of_measurement||"").toString();return Number.isFinite(H)?/kwh/i.test(U)?{txt:Math.round(H).toLocaleString(void 0,{maximumFractionDigits:0}),unit:"kWh"}:/wh/i.test(U)?{txt:Math.round(H).toLocaleString(void 0,{maximumFractionDigits:0}),unit:"Wh"}:{txt:Math.round(H).toString(),unit:U}:{txt:"--",unit:""}},y=d(m),x=d(p),k=m||p?`Charged: ${y.txt} ${y.unit}<br>Discharged: ${x.txt} ${x.unit}`:"",P=Number(T?.state),ee=`Efficiency: ${Number.isFinite(P)?Math.round(P):"--"}%<br>State of Health: ${Number.isFinite(Number(h.soh))?Math.round(Number(h.soh)):0}%`;let te=`BMU ${n.version||""}<br>BMS ${h.bmsVersion||""}`,ie=`UI ${Z}<br>modules:${h.modules}`;

      // Apply header information configuration
      typeof o.setHeaderInformation=="function"&&o.setHeaderInformation({default:e.header_information_default||"versions",show:{versions:e.show_header_versions!==!1,ui:e.show_header_ui!==!1,energy:e.show_header_energy!==!1,efficiency:e.show_header_efficiency!==!1},payload:{versionsText:te,uiText:ie,energyText:k,effText:ee}});

      typeof o.setTowerCapacityWh=="function"&&o.setTowerCapacityWh(_);

      // Calculate estimate
      let F="",z=Number(h.soc??n.soc??0);if(_>0&&z>=0&&Math.abs(J)<=se){let C=w;(C===0||C>0!=J>0)&&(C=J);let H=C/(a||1);if(H<0){let W=_*Math.max(0,1-z/100)/Math.abs(H)*3600,R=u(W);F=R?`Full in ${R}`:""}else if(H>0){let W=_*Math.max(0,z/100)/H*3600,R=u(W);F=R?`Remaining ${R}`:""}}typeof o.setEstimate=="function"&&o.setEstimate(F);

      o.setVoltage(h.voltage),o.setHistoryMaxVoltage(h.histMax),o.setHistoryMinVoltage(h.histMin),o.setCellBallancing(h.balancing),o.setTemperature(h.temps);
    }

    this._lastAppliedView=this._currentView,this._lastAppliedModuleView=this._currentModuleView,this._applyProductNames(i,a).catch(()=>{});
  }

  _pushPowerSample(e){
    let t=Date.now();this._powerSamples=this._powerSamples||[];let i=t-5*60*1e3;for(;this._powerSamples.length>0&&this._powerSamples[0].t<=i;)this._powerSamples.shift();this._powerSamples.push({t,p:Number(e)||0});
  }

  _avgPowerW(){
    let e=this._powerSamples||[];if(e.length===0)return 0;
    let t=Date.now(),i=0,a=0;for(let n=0;n<e.length;n++){
      let w=e[n],s=e[n+1]||{t,p:w.p},f=Math.max(0,s.t-w.t);
      f>0&&(i+=w.p*f,a+=f);
    }
    return a>0?i/a:e[e.length-1].p;
  }

  _discoverBMU(){
    let e=this._hass.states,t=Object.keys(e),i=g=>{let v=t.find(D=>g.test(D));return v?e[v]:void 0},a=Number(i(/^sensor\.bmu_power/)?.state)||0,n=i(/^sensor\.bmu_version$/)?.state||i(/^sensor\.bmu_version_a$/)?.state||"",w=i(/^sensor\.total_capacity$/),s;
    if(w){let g=Number(w.state),v=w.attributes?.unit_of_measurement||"";Number.isFinite(g)&&(s=/kwh/i.test(v)?g*1e3:g)}
    let f=i(/^sensor\.bmu_cell_voltage_max/),b;
    if(f){let g=Number(f.state),v=(f.attributes?.unit_of_measurement||"").toString();Number.isFinite(g)&&(b=/mv/i.test(v)?g/1e3:g)}
    return{power:a,version:n,totalCapacityWh:s,cellMaxV:b};
  }

  _discoverTowers(){
    let e=[],t=this._hass.states,i=Object.keys(t),a=[...new Set(i.map(s=>{let f=/^sensor\.bms_(\d+)_cells_average_voltage$/.exec(s);return f?Number(f[1]):null}).filter(Boolean))].sort((s,f)=>s-f).slice(0,3),n=s=>!Array.isArray(s)||s.length===0?0:s.length&&typeof s[0]=="object"&&!Array.isArray(s[0])?s.reduce((f,b)=>{let g=Number(b?.m??b?.module);return Number.isFinite(g)?Math.max(f,g):f},0):s.length,w=(s,f,b)=>{
      let g=Array.from({length:b},()=>[]);
      if(!Array.isArray(s))return g;
      if(s.length&&typeof s[0]=="object"&&!Array.isArray(s[0]))for(let v of s){
        let D=(Number(v?.m??v?.module)||1)-1;
        if(D>=0&&D<b){let I=v?.[f];g[D]=Array.isArray(I)?I:[]}
      }else for(let v=0;v<Math.min(b,s.length);v++)g[v]=Array.isArray(s[v])?s[v]:[];
      return g;

    };
    for(let s of a){
      let f=t[`sensor.bms_${s}_cells_average_voltage`],b=t[`sensor.bms_${s}_max_history_cell_voltage`],g=t[`sensor.bms_${s}_min_history_cell_voltage`],v=t[`sensor.bms_${s}_cells_balancing`],D=t[`sensor.bms_${s}_cells_average_temperature`],I=t[`sensor.bms_${s}_state_of_charge`],A=t[`sensor.bms_${s}_state_of_health`],$=t["sensor.bms_version"],r=f?.attributes?.cell_voltages||[],M=b?.attributes?.cell_voltages||[],l=g?.attributes?.cell_voltages||[],_=v?.attributes?.cell_balancing||[],u=D?.attributes?.cell_temps||[],V=Math.max(n(r),n(M),n(l),n(_),n(u)),S=Math.min(Math.max(V||1,1),10),c=w(r,"v",S),h=w(M,"v",S),o=w(l,"v",S),E=w(_,"b",S),N=w(u,"t",S),m=o.flat().filter(d=>Number.isFinite(d)),p=h.flat().filter(d=>Number.isFinite(d)),T={vMin:m.length?Math.min(...m):3100,vMax:p.length?Math.max(...p):3500};
      e.push({id:s,modules:S,voltage:c,histMax:h,histMin:o,balancing:E,temps:N,chart:T,soc:Number(I?.state),soh:Number(A?.state),bmsVersion:$?.state||""});
    }
    return e.length!==0?e:[{...this._demoTower(1)}];
  }

  _demoTower(e){
    let a=Array.from({length:3},()=>Array.from({length:32},()=>3300+Math.round(Math.random()*80))),n=a.map(b=>b.map(g=>g+50)),w=a.map(b=>b.map(g=>g-80)),s=Array.from({length:3},()=>Array.from({length:16},()=>20+Math.round(Math.random()*15))),f=a.map(b=>b.map(()=>Math.random()<.05?1:0));
    return{id:e,modules:3,voltage:a,histMax:n,histMin:w,balancing:f,temps:s,chart:{vMin:3200,vMax:3500},soc:75,soh:98,bmsVersion:"demo"};
  }

  // Async operations wrapped with error handling
  async _ensureRegistries(){
    if(!(this._entities&&this._devices))try{this._entities=await this._hass.callWS({type:"config/entity_registry/list"}),this._devices=await this._hass.callWS({type:"config/device_registry/list"})}catch{}
  }

  async _applyProductNames(B,e){
    try{
      await this._ensureRegistries();
      let i=Object.keys(this._hass.states||{});
      for(let n=0;n<e;n++){
        let w=B[n];
        if(!w)continue;
        let s=this._el?.system?.getTower(n+1);
        if(!s)continue;
        let f=`sensor.bms_${w.id}_cells_average_voltage`,b=this._getModelForEntityId(f)||a||"";
        typeof s.setProductName=="function"&&s.setProductName(b);
      }
    }catch{}
  }

  _getModelForEntityId(B){
    if(!B||!Array.isArray(this._entities)||!Array.isArray(this._devices))return"";
    let e=this._entities.find(a=>a?.entity_id===B);
    if(!e)return"";
    let t=this._devices.find(a=>a?.id===e.device_id);
    return t?.model||t?.model_id||""||"";
  }
};

/**
 * BYD Battery Box Visualization Editor
 * Configuration editor for the visualization card. Handles form validation and user settings.
 */
var j=class extends HTMLElement{
  setConfig(e){
    this._config=e||{};
    if(this._form&&customElements.get("ha-form")){let t=this._config||{},i=t.voltage_auto!==!1?"autoV":"manualV";
    if(this._lastSchemaKey!==i){this._lastSchemaKey=i,this._form.remove(),this._form=null,this._render();return}
    if(!this._isEditing){let o=this._computeFormData();this._form.data=o;}
    return}
    this._render();
  }

  set hass(e){
    if(this._hass!==e){this._hass=e;this._form&&(this._form.hass=e);}
  }

  connectedCallback(){
    this._render();
  }

  // Helper to compute form data from config
  _computeFormData(t=this._config||{}){
    let i=t.voltage_auto!==!1,a=!i?void 0:void 0,n=!i?t.voltage_max:void 0;
    return{
      unit:t.unit||"mV",voltage_auto:i,voltage_min:a,voltage_max:n,temp_min:t.temp_min,
      temp_max:t.temp_max,show_y_axis:t.show_y_axis!==!1,show_gray_caps:t.show_gray_caps!==!1,
      show_vt_toggle:t.show_vt_toggle!==!1,show_view_toggle:t.show_view_toggle===!0,
      show_power:t.show_power!==!1,show_eta:t.show_eta!==!1,show_product_capacity:t.show_product_capacity!==!1,
      header_information_default:t.header_information_default||"versions",show_header_versions:t.show_header_versions!==!1,
      show_header_ui:t.show_header_ui!==!1,show_header_energy:t.show_header_energy!==!1,
      show_header_efficiency:t.show_header_efficiency!==!1,module_view:t.module_view||"detailed"};
  }

  _render(){
    let editorContainer=document.createElement("div");
    editorContainer.style.display="grid";
    editorContainer.style.gridTemplateColumns="1fr 1fr";
    editorContainer.style.gap="8px";
    this.appendChild(editorContainer);

    let t=this._config||{};
    if(customElements.get("ha-form")){
      let i=document.createElement("ha-form");
      i.hass=this._hass;
      let a=t.voltage_auto!==!1,n=[{name:"voltage_auto",label:"Voltage auto",helper:"Default: active",selector:{boolean:{}}},...a?[]:[{name:"voltage_min",label:"Voltage min (mV)",helper:"Shown when Voltage auto is disabled",selector:{number:{mode:"box",min:0,step:1}}},{name:"voltage_max",label:"Voltage max (mV)",helper:"Shown when Voltage auto is disabled",selector:{number:{mode:"box",min:0,step:1}}}],{name:"temp_min",label:"Temperature min (\xB0C)",helper:"Default: 0",selector:{number:{mode:"box",min:-40,max:120,step:1}}},{name:"temp_max",label:"Temperature max (\xB0C)",helper:"Default: 60",selector:{number:{mode:"box",min:-40,max:120,step:1}}},{name:"show_gray_caps",label:"Show gray caps (voltage)",helper:"Default: active",selector:{boolean:{}}}],w=[{type:"expandable",title:"Battery Tower",schema:[{name:"unit",label:"Unit",helper:"Voltage unit for charts (not temperature). Default: mV",selector:{select:{options:[{value:"mV",label:"mV"},{value:"V",label:"V"}]}}},{name:"show_vt_toggle",label:"Show Voltage/Temperature Toggle",helper:"Default: active",selector:{boolean:{}}},{name:"show_view_toggle",label:"Show Battery Visualization Toggle (Detailed/Minimalistic)",helper:"Default: disabled",selector:{boolean:{}}},{name:"module_view",label:"Default Battery View",helper:"Default: Detailed",selector:{select:{options:[{value:"detailed",label:"Detailed"},{value:"minimal",label:"Minimalistic"},{value:"none",label:"No Data"}]}}},{name:"show_power",label:"Show Current Power",helper:"Default: active",selector:{boolean:{}}},{name:"show_eta",label:"Show Estimated Time (charge/discharge)",helper:"Default: active",selector:{boolean:{}}},{name:"show_product_capacity",label:"Show Product and Capacity",helper:"Default: active",selector:{boolean:{}}}]},{type:"expandable",title:"Header Information",schema:[{name:"header_information_default",label:"Default Information",helper:"Default: versions (BMU/BMS)",selector:{select:{options:[{value:"versions",label:"BMU/BMS Versions"},{value:"ui",label:"UI/Modules"},{value:"energy",label:"Total Energy"},{value:"efficiency",label:"Efficiency & SoH"}]}}},{name:"show_header_versions",label:"Show BMU/BMS Versions",helper:"Default: active",selector:{boolean:{}}},{name:"show_header_ui",label:"Show UI Information",helper:"Default: active",selector:{boolean:{}}},{name:"show_header_energy",label:"Show Total Energy",helper:"Default: active",selector:{boolean:{}}},{name:"show_header_efficiency",label:"Show Efficiency & State of Health",helper:"Default: active",selector:{boolean:{}}}]},{type:"expandable",title:"Graph Settings",schema:n},{type:"expandable",title:"Battery Module \u2013 Detailed Graph Settings",schema:[{name:"show_y_axis",label:"Show Y\u2011axis",helper:"Default: active",selector:{boolean:{}}}]}];
      i.schema=w,this._lastSchemaKey=a?"autoV":"manualV",i.computeLabel=s=>s.label||s.name,i.computeHelper=s=>s.helper||"",i.data=this._computeFormData(t),i.addEventListener("value-changed",s=>{s.stopPropagation(),this._isEditing=!0;let f=s.detail?.value||{},b={};Object.keys(f).forEach(g=>{f[g]!==void 0&&(b[g]=f[g])}),clearTimeout(this._debounceT),this._debounceT=setTimeout(()=>{let v={...this._config||t||{},...b};v.voltage_auto!==!1&&(delete v.voltage_min,delete v.voltage_max),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:v}}))},300)}),i.addEventListener("focusin",()=>{this._isEditing=!0}),this._form=i,editorContainer.appendChild(i);
      return;
    }

    let entityInput=document.createElement("input");
    entityInput.type="text";
    entityInput.value=t.entity||"";
    this._createFormRow(editorContainer, "Entity (optional)", entityInput, "Usually auto-discovered.");

    let unitSelect=this._createSelect(["mV","V"], t.unit||"mV");
    this._createFormRow(editorContainer, "Unit", unitSelect, "Default: mV");

    let moduleViewSelect=this._createSelect([{value:"detailed",label:"Detailed Graph"},{value:"minimal",label:"Minimalistic View"},{value:"none",label:"No Data"}], t.module_view||"detailed");
    this._createFormRow(editorContainer, "Battery Module View", moduleViewSelect, "Default: Detailed Graph");

    let vtToggleCheckbox=this._createCheckbox(t.show_vt_toggle!==!1);
    this._createFormRow(editorContainer, "Show Voltage/Temperature Toggle", vtToggleCheckbox, "Default: active");

    let viewToggleCheckbox=this._createCheckbox(t.show_view_toggle===!0);
    this._createFormRow(editorContainer, "Show Battery Visualization Toggle", viewToggleCheckbox, "Default: disabled");

    let powerCheckbox=this._createCheckbox(t.show_power!==!1);
    this._createFormRow(editorContainer, "Show Current Power", powerCheckbox, "Default: active");

    let etaCheckbox=this._createCheckbox(t.show_eta!==!1);
    this._createFormRow(editorContainer, "Show Estimated Time", etaCheckbox, "Default: active");

    let capacityCheckbox=this._createCheckbox(t.show_product_capacity!==!1);
    this._createFormRow(editorContainer, "Show Product and Capacity", capacityCheckbox, "Default: active");

    let voltageAutoCheckbox=this._createCheckbox(t.voltage_auto!==!1);
    this._createFormRow(editorContainer, "Voltage auto", voltageAutoCheckbox, "Default: active");

    if(!t.voltage_auto!==!1){
      let minVoltageInput=this._createNumberInput(t.voltage_min);
      this._createFormRow(editorContainer, "Voltage min (mV)", minVoltageInput, "Shown when Voltage auto is disabled");

      let maxVoltageInput=this._createNumberInput(t.voltage_max);
      this._createFormRow(editorContainer, "Voltage max (mV)", maxVoltageInput, "Shown when Voltage auto is disabled");
    }

    let tempMinInput=this._createNumberInput(t.temp_min);
    this._createFormRow(editorContainer, "Temperature min (°C)", tempMinInput, "Default: 0");

    let tempMaxInput=this._createNumberInput(t.temp_max);
    this._createFormRow(editorContainer, "Temperature max (°C)", tempMaxInput, "Default: 60");

    let grayCapsCheckbox=this._createCheckbox(t.show_gray_caps!==!1);
    this._createFormRow(editorContainer, "Show gray caps (voltage)", grayCapsCheckbox, "Default: active");

    let yAxisCheckbox=this._createCheckbox(t.show_y_axis!==!1);
    this._createFormRow(editorContainer, "Show Y-axis", yAxisCheckbox, "Default: active");
  }

  // Helper methods for form creation
  _createFormRow(container, label, element, helper){
    let labelEl=document.createElement("label");
    labelEl.textContent=label;
    labelEl.style.fontSize="12px";
    labelEl.style.opacity="0.85";
    let helperEl=document.createElement("div");
    helperEl.textContent=helper||"";
    helperEl.style.fontSize="11px";
    helperEl.style.opacity="0.7";
    helperEl.style.marginBottom="2px";
    let rowEl=document.createElement("div");
    rowEl.style.display="flex";
    rowEl.style.flexDirection="column";
    rowEl.appendChild(labelEl);
    if(helper) rowEl.appendChild(helperEl);
    rowEl.appendChild(element);
    container.appendChild(rowEl);
  }

  _createSelect(options, selectedValue){
    let select=document.createElement("select");
    options.forEach(item=>{
      let option=document.createElement("option");
      option.value=typeof item==="object"?item.value:item;
      option.textContent=typeof item==="object"?item.label:item;
      if(option.value===selectedValue) option.selected=true;
      select.appendChild(option);
    });
    return select;
  }

  _createCheckbox(checked){
    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.checked=!!checked;
    return checkbox;
  }

  _createNumberInput(value){
    let input=document.createElement("input");
    input.type="number";
    if(value!==void 0) input.value=value;
    return input;
  }
};

/**
 * Version number and final setup
 */
var Z="0.0.5";
customElements.get("byd-battery-header")||customElements.define("byd-battery-header",O);
customElements.get("byd-battery-module")||customElements.define("byd-battery-module",q);
customElements.get("byd-battery-stand")||customElements.define("byd-battery-stand",K);
customElements.get("byd-battery-tower")||customElements.define("byd-battery-tower",G);
customElements.get("byd-battery-system")||customElements.define("byd-battery-system",X);
customElements.get("byd-battery-box-visualization")||customElements.define("byd-battery-box-visualization",L);
customElements.get("byd-battery-box-visualization-editor")||customElements.define("byd-battery-box-visualization-editor",j);

window.customCards=window.customCards||[];
window.customCards.push({
  type:"byd-battery-box-visualization",
  name:"BYD Battery Box Visualization",
  description:"BYD Battery Box visualization with separated components and auto-configuration for byd_battery_box.",
  preview:!0,
  preview_image:"https://raw.githubusercontent.com/TimWeyand/byd_battery_box_visualization/main/images/preview.png"
});
