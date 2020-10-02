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

export const Gradient = () => ({
  template: `
    <div class="grey-gradient">
      <span class="gradient-short-text-middle">Gray Gradient</span>
    </div>
    <div class="precious-blue-gradient1">
      <span class="gradient-long-text-middle">Precious Blue Gradient 1</span>
    </div>
    <div class="precious-blue-gradient2">
      <span class="gradient-long-text-middle">Precious Blue Gradient 2</span>
    </div>
    `
})

export const Neutral = () => ({
  template: `
    <div class="dark-grey">
      <span class="gradient-short-text-middle">Dark Grey</span>
    </div>
    <div class="medium-grey">
      <span class="gradient-short-text-middle">Medium Grey</span>
    </div>
    <div class="grey">
      <span class="gradient-short-text-middle">Grey</span>
    </div>
    <div class="medium-light-grey">
      <span class="gradient-short-text-middle">Medium Light Gray</span>
    </div>
    <br>
    <div class="light-grey">
      <span class="gradient-short-text-middle">Light Grey</span>
    </div>
    <div class="pale-grey">
      <span class="gradient-short-text-middle">Pale Grey</span>
    </div>
    <div class="white">
      <span class="gradient-short-text-middle">White</span>
    </div>
    <div class="overlay">
      <span class="gradient-short-text-middle">Overlay</span>
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

export const Semantic = () => ({
  template: `
    <div class="success">
      <span class="gradient-short-text-middle">Success</span>
    </div>
    <div class="error">
      <span class="gradient-short-text-middle">Error, Failed</span>
    </div>
    <div class="alert">
      <span class="gradient-long-text-middle">Alert, Caution, Warning</span>
    </div>
    `
})

export const Chart = () => ({
  template: `
    <div class="bright-teal-001">
      <span class="gradient-short-text-middle">Bright Teal</span>
    </div>
    <div class="bright-red-001">
      <span class="gradient-short-text-middle">Bright Red</span>
    </div>
    <div class="light-blue">
      <span class="gradient-short-text-middle">Light Blue</span>
    </div>
    <br>
    <div class="ktb-blue">
    <span class="gradient-short-text-middle">KTB Blue</span>
    </div>
    <div class="precious-blue-gradient01">
      <span class="gradient-long-text-middle">Precious Blue Gradient 1</span>
    </div>
    <div class="precious-blue-gradient02">
      <span class="gradient-long-text-middle">Precious Blue Gradient 2</span>
    </div>
    `
})
