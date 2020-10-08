import { Meta } from '@storybook/angular'

export default {
  title: 'System/Colors'
} as Meta

export const Primary = () => ({
  template: `
    <div class="precious-blue-900">
      <span>Precious Blue</span>
      <span class="stick-right">900</span>
      <br>
      <span>#002240</span>
    </div>
    <div class="precious-blue-800">  
      <span>#003258</span>      
      <span class="stick-right">800</span> 
    </div>
    <div class="precious-blue-700">
      <span>#013C64</span>      
      <span class="stick-right">700</span> 
    </div>
    <div class="precious-blue-600">
      <span>#0D456F</span>      
      <span class="stick-right">600</span> 
    </div>
    <div class="precious-blue-500">
      <span>#164C77</span>      
      <span class="stick-right">500</span> 
    </div>
    <div class="precious-blue-400">
      <span>#416487</span>      
      <span class="stick-right">400</span> 
    </div>
    <div class="precious-blue-300">
      <span>#647E9A</span>      
      <span class="stick-right">300</span> 
    </div>
    <div class="precious-blue-200">
      <span>#8EA2B7</span>      
      <span class="stick-right">200</span> 
    </div>
    <div class="precious-blue-100">
      <span>#BAC6D4</span>      
      <span class="stick-right">100</span> 
    </div>
    <div class="precious-blue-50">
      <span>#E4E8ED</span>      
      <span class="stick-right">50</span> 
    </div>
    `
})

export const Neutral = () => ({
  template: `
    <div class="dark-grey">
      <span>Dark Grey</span>
      <span class="stick-right">#4a4a49</span>
      <br>
    </div>
      <div class="medium-grey">  
      <span>Medium Grey</span>      
      <span class="stick-right">#013C64</span> 
    </div>
    <div class="grey">
      <span>Grey</span>      
      <span class="stick-right">#bbbbbb</span> 
    </div>
    <div class="medium-light-grey">
      <span>Medium Light Gray</span>      
      <span class="stick-right">#e3e3e3</span> 
    </div>
    <div class="light-grey">
      <span>Light Grey</span>      
      <span class="stick-right">#f2f2f2</span> 
    </div>
    <div class="pale-grey">
      <span>Pale Grey</span>      
      <span class="stick-right">#f5f5f5</span> 
    </div>
    <div class="white">
      <span>White</span>      
      <span class="stick-right">#ffffff</span> 
    </div>
    <div class="overlay">
      <span>Overlay</span>      
      <span class="stick-right">#020202 65% Opacity</span> 
    </div>
  `
})

export const Secondary = () => ({
  template: `
    <div class="golden-yellow-400">
      <span>Golden Yellow</span>
      <span class="stick-right">400</span>
      <br>
      <span>#FFCB00</span>
    </div>
    <div class="golden-yellow-300">
      <span>#FFD743</span>      
      <span class="stick-right">300</span> 
    </div>
    <div class="golden-yellow-200">
      <span>##FFE17C</span>      
      <span class="stick-right">200</span> 
    </div>
    <div class="golden-yellow-100">
      <span>#FFEDB0</span>      
      <span class="stick-right">100</span> 
    </div>
    <div class="golden-yellow-50">
      <span>##FFF8E0</span>      
      <span class="stick-right">50</span> 
    </div>
    `
})

export const Communication = () => ({
  template: `
    <div class="success">
      <span class="gradient-short-text-middle">Success</span>
    </div>
    <div class="error">
      <span class="gradient-short-text-middle">Failed</span>
    </div>
    <div class="alert">
      <span class="gradient-short-text-middle">Warning</span>
    </div>
    <div class="highlight">
      <span class="gradient-short-text-middle">Highlight</span>
    </div>
  `
})

export const Extended = () => ({
  template: `
    <div class="medium-turquoise">
      <span class="gradient-short-text-middle">Medium Turquoise</span>
    </div>
    <div class="terra-cotta-red">
      <span class="gradient-short-text-middle">Terra Cotta Red</span>
    </div>
    <div class="ktb-baby-blue">
      <span class="gradient-short-text-middle">KTB Baby Blue</span>
    </div>
    <div class="ktb-blue">
    <span class="gradient-short-text-middle">KTB Blue</span>
    </div>
    <div class="ktb-blue-ncs">
      <span class="gradient-short-text-middle">KTB Blue NCS</span>
    </div>
  `
})

export const Gradient = () => ({
  template: `
    <div class="dashboard-top-bar">
      <span class="gradient-short-text-middle">Dashboard Top Bar</span>
    </div>
    <div class="small-card">
      <span class="gradient-short-text-middle">Small Card</span>
    </div>
    <div class="large-card">
      <span class="gradient-short-text-middle">Large Card</span>
    </div>
    <div class="sub-menu">
      <span class="gradient-short-text-middle">Sub Menu</span>
    </div>
    <div class="mobile-card">
      <span class="gradient-short-text-middle">Mobile Card</span>
    </div>
    <div class="ktb-top-bar">
      <span class="gradient-short-text-middle">KTB Top Bar</span>
    </div>
    <div class="chart-02-blue">
      <span class="gradient-short-text-middle">Chart 02 Blue</span>
    </div>
    <div class="chart-02-grey">
      <span class="gradient-short-text-middle">Chart 02 Grey</span>
    </div>
    `
})
