import { IconsComponent, IconsModule } from './'
import { Meta, moduleMetadata } from '@storybook/angular'

export default {
  title: 'Icons',
  component: IconsComponent,
  decorators: [
    moduleMetadata({
      imports: [IconsModule]
    })
  ]
} as Meta

export const SystemIcons = () => ({
  component: IconsComponent,
  template: `
    <div class="icon-container">
      <ktb-icon class="icon-margin" name="active"></ktb-icon>
      <ktb-icon class="icon-margin" name="addBeneficiary"></ktb-icon> 
      <ktb-icon class="icon-margin" name="addDoc"></ktb-icon> 
      <ktb-icon class="icon-margin" name="addTemplate"></ktb-icon> 
      <ktb-icon class="icon-margin" name="addTo"></ktb-icon> 
      <ktb-icon class="icon-margin" name="adminAccess"></ktb-icon> 
      <ktb-icon class="icon-margin" name="arrowDown"></ktb-icon> 
      <ktb-icon class="icon-margin" name="arrowLeft"></ktb-icon> 
      <ktb-icon class="icon-margin" name="arrowRight"></ktb-icon> 
      <ktb-icon class="icon-margin" name="arrowUp"></ktb-icon> 
      <ktb-icon class="icon-margin" name="cancel"></ktb-icon> 
      <ktb-icon class="icon-margin" name="circleProfile"></ktb-icon>
      <ktb-icon class="icon-margin" name="close"></ktb-icon> 
      <ktb-icon class="icon-margin" name="collapse"></ktb-icon> 
      <ktb-icon class="icon-margin" name="contactBook"></ktb-icon> 
      <ktb-icon class="icon-margin" name="copy"></ktb-icon> 
      <ktb-icon class="icon-margin" name="csvDoc"></ktb-icon> 
      <ktb-icon class="icon-margin" name="delete"></ktb-icon> 
      <ktb-icon class="icon-margin" name="download"></ktb-icon> 
      <ktb-icon class="icon-margin" name="editFile"></ktb-icon> 
      <ktb-icon class="icon-margin" name="email"></ktb-icon> 
      <ktb-icon class="icon-margin" name="exchange"></ktb-icon>
      <ktb-icon class="icon-margin" name="exchange1"></ktb-icon> 
      <ktb-icon class="icon-margin" name="expand"></ktb-icon> 
      <ktb-icon class="icon-margin" name="faceId"></ktb-icon> 
      <ktb-icon class="icon-margin" name="favorite"></ktb-icon> 
      <ktb-icon class="icon-margin" name="file"></ktb-icon> 
      <ktb-icon class="icon-margin" name="flash"></ktb-icon> 
      <ktb-icon class="icon-margin" name="grid"></ktb-icon> 
      <ktb-icon class="icon-margin" name="inactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="info"></ktb-icon> 
      <ktb-icon class="icon-margin" name="list"></ktb-icon>
      <ktb-icon class="icon-margin" name="locked"></ktb-icon> 
      <ktb-icon class="icon-margin" name="menu"></ktb-icon> 
      <ktb-icon class="icon-margin" name="minimize"></ktb-icon> 
      <ktb-icon class="icon-margin" name="more"></ktb-icon> 
      <ktb-icon class="icon-margin" name="multiSelect"></ktb-icon> 
      <ktb-icon class="icon-margin" name="notificationActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="notificationInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="pdfDoc"></ktb-icon> 
      <ktb-icon class="icon-margin" name="phone"></ktb-icon> 
      <ktb-icon class="icon-margin" name="print"></ktb-icon> 
      <ktb-icon class="icon-margin" name="qr"></ktb-icon>
      <ktb-icon class="icon-margin" name="read"></ktb-icon> 
      <ktb-icon class="icon-margin" name="refresh"></ktb-icon> 
      <ktb-icon class="icon-margin" name="review"></ktb-icon> 
      <ktb-icon class="icon-margin" name="save"></ktb-icon> 
      <ktb-icon class="icon-margin" name="savedBeneficiary"></ktb-icon> 
      <ktb-icon class="icon-margin" name="scan"></ktb-icon> 
      <ktb-icon class="icon-margin" name="search"></ktb-icon> 
      <ktb-icon class="icon-margin" name="share"></ktb-icon> 
      <ktb-icon class="icon-margin" name="spinner"></ktb-icon> 
      <ktb-icon class="icon-margin" name="starActive"></ktb-icon>
      <ktb-icon class="icon-margin" name="starInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="template"></ktb-icon> 
      <ktb-icon class="icon-margin" name="touchId"></ktb-icon> 
      <ktb-icon class="icon-margin" name="txtDoc"></ktb-icon> 
      <ktb-icon class="icon-margin" name="unlock"></ktb-icon> 
      <ktb-icon class="icon-margin" name="unread"></ktb-icon> 
      <ktb-icon class="icon-margin" name="upload"></ktb-icon> 
      <ktb-icon class="icon-margin" name="user"></ktb-icon> 
      <ktb-icon class="icon-margin" name="warning"></ktb-icon> 
      <ktb-icon class="icon-margin" name="widget"></ktb-icon> 
      <ktb-icon class="icon-margin" name="xlsDoc"></ktb-icon> 
      <ktb-icon class="icon-margin" name="zoomIn"></ktb-icon> 
      <ktb-icon class="icon-margin" name="zoomOut"></ktb-icon> 
    </div>
  `
})

export const NavigationMenu = () => ({
  component: IconsComponent,
  template: `
    <div class="icon-container">
      <h1> Active </h1>
      <ktb-icon class="icon-margin" name="accountActive"></ktb-icon>
      <ktb-icon class="icon-margin" name="activityLogActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="beneficiariesActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="chequeActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="collectionActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="helpActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="homeActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="internationalActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="lockActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="logoutActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="newsActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="othersActive"></ktb-icon>
      <ktb-icon class="icon-margin" name="reportsActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="settingsActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="supplyChainActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="taskActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="transferActive"></ktb-icon> 
    </div>
    <div class="icon-container">
      <h1> Inactive </h1>
      <ktb-icon class="icon-margin" name="accountInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="activityLogInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="beneficiariesInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="chequeInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="collectionInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="helpInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="homeInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="internationalInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="lockInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="logoutInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="newsInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="othersInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="reportsInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="settingsInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="supplyChainInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="taskInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="transferInactive"></ktb-icon> 
    </div>
  `
})

export const SubMenu = () => ({
  component: IconsComponent,
  template: `
    <div class="icon-container">
      <h1> Service </h1>
      <ktb-icon class="icon-margin" name="activateCheque"></ktb-icon>
      <ktb-icon class="icon-margin" name="serviceChequeStatusInquiry"></ktb-icon> 
      <ktb-icon class="icon-margin" name="cheque"></ktb-icon> 
      <ktb-icon class="icon-margin" name="serviceNewBulkTransfer"></ktb-icon> 
      <ktb-icon class="icon-margin" name="serviceNewPayment"></ktb-icon> 
      <ktb-icon class="icon-margin" name="serviceNewPayroll"></ktb-icon> 
      <ktb-icon class="icon-margin" name="serviceNewTransfer"></ktb-icon> 
      <ktb-icon class="icon-margin" name="seriveOutstandingPayment"></ktb-icon> 
      <ktb-icon class="icon-margin" name="serviceStopCheque"></ktb-icon> 
    </div>
    <div class="icon-container">
      <h1> Sub Menu </h1>
      <ktb-icon class="icon-margin" name="activateChequeBook"></ktb-icon> 
      <ktb-icon class="icon-margin" name="addBeneficiary"></ktb-icon> 
      <ktb-icon class="icon-margin" name="submenuChequeStatusInquiry"></ktb-icon> 
      <ktb-icon class="icon-margin" name="submenuNewBulkTransfer"></ktb-icon> 
      <ktb-icon class="icon-margin" name="submenuNewPayment"></ktb-icon> 
      <ktb-icon class="icon-margin" name="submenuNewPayroll"></ktb-icon> 
      <ktb-icon class="icon-margin" name="submenuNewTransfer"></ktb-icon> 
      <ktb-icon class="icon-margin" name="orderCheque"></ktb-icon> 
      <ktb-icon class="icon-margin" name="submenuOutstandingPayment"></ktb-icon> 
      <ktb-icon class="icon-margin" name="registerPromptPay"></ktb-icon> 
      <ktb-icon class="icon-margin" name="submenuStopCheque"></ktb-icon> 
    </div>
  `
})

export const FormElements = () => ({
  component: IconsComponent,
  template: `
    <div class="icon-container">
      <ktb-icon class="icon-margin" name="checkboxActive"></ktb-icon>
      <ktb-icon class="icon-margin" name="checkboxDisabledPartial"></ktb-icon> 
      <ktb-icon class="icon-margin" name="checkboxDisabled"></ktb-icon> 
      <ktb-icon class="icon-margin" name="checkboxDisabledSelected"></ktb-icon> 
      <ktb-icon class="icon-margin" name="checkboxInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="checkboxPartial"></ktb-icon> 
      <ktb-icon class="icon-margin" name="countryDefault"></ktb-icon> 
      <ktb-icon class="icon-margin" name="dropdownDown"></ktb-icon> 
      <ktb-icon class="icon-margin" name="dropdownUp"></ktb-icon> 
      <ktb-icon class="icon-margin" name="radioActive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="radioDisabled"></ktb-icon>
      <ktb-icon class="icon-margin" name="radioDisabledSelected"></ktb-icon> 
      <ktb-icon class="icon-margin" name="radioInactive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="addItem"></ktb-icon> 
      <ktb-icon class="icon-margin" name="add"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bank"></ktb-icon> 
      <ktb-icon class="icon-margin" name="calendar"></ktb-icon> 
      <ktb-icon class="icon-margin" name="chevronDown"></ktb-icon> 
      <ktb-icon class="icon-margin" name="chevronUp"></ktb-icon> 
      <ktb-icon class="icon-margin" name="chevronLeft"></ktb-icon> 
      <ktb-icon class="icon-margin" name="chevronRight"></ktb-icon>
      <ktb-icon class="icon-margin" name="clear"></ktb-icon> 
      <ktb-icon class="icon-margin" name="clock"></ktb-icon> 
      <ktb-icon class="icon-margin" name="correct"></ktb-icon> 
      <ktb-icon class="icon-margin" name="cross"></ktb-icon> 
      <ktb-icon class="icon-margin" name="edit"></ktb-icon> 
      <ktb-icon class="icon-margin" name="incorrent"></ktb-icon> 
      <ktb-icon class="icon-margin" name="minus"></ktb-icon> 
      <ktb-icon class="icon-margin" name="numbered"></ktb-icon> 
      <ktb-icon class="icon-margin" name="return"></ktb-icon> 
      <ktb-icon class="icon-margin" name="signature"></ktb-icon>
      <ktb-icon class="icon-margin" name="sorting"></ktb-icon> 
      <ktb-icon class="icon-margin" name="submit"></ktb-icon> 
      <ktb-icon class="icon-margin" name="tick"></ktb-icon> 
      <ktb-icon class="icon-margin" name="visibilityOff"></ktb-icon> 
      <ktb-icon class="icon-margin" name="visibilityOn"></ktb-icon> 
      <ktb-icon class="icon-margin" name="formWarning"></ktb-icon> 
    </div>
  `
})

export const Country = () => ({
  component: IconsComponent,
  template: `
    <div class="icon-container">
      <ktb-icon class="icon-margin" name="aus"></ktb-icon>
      <ktb-icon class="icon-margin" name="can"></ktb-icon> 
      <ktb-icon class="icon-margin" name="chn"></ktb-icon> 
      <ktb-icon class="icon-margin" name="eur"></ktb-icon> 
      <ktb-icon class="icon-margin" name="hk"></ktb-icon> 
      <ktb-icon class="icon-margin" name="jpn"></ktb-icon> 
      <ktb-icon class="icon-margin" name="kor"></ktb-icon> 
      <ktb-icon class="icon-margin" name="my"></ktb-icon> 
      <ktb-icon class="icon-margin" name="new"></ktb-icon> 
      <ktb-icon class="icon-margin" name="sgd"></ktb-icon> 
      <ktb-icon class="icon-margin" name="swz"></ktb-icon>
      <ktb-icon class="icon-margin" name="thb"></ktb-icon> 
      <ktb-icon class="icon-margin" name="uk"></ktb-icon> 
      <ktb-icon class="icon-margin" name="usd"></ktb-icon> 
    </div>
  `
})

export const Banks = () => ({
  component: IconsComponent,
  template: `
    <div class="icon-container">
      <h1> 24px Bank Icons </h1>
      <ktb-icon class="icon-margin" name="smallANZ"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallBangkok"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallBAA"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallBoAm"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallBoAy"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallBoCh"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallBNP"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallCIMB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallCiti"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallDeut"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallGHB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallGSB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallHSBC"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallIOB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallICB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallIslamic"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallMorgan"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallKasikorn"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallKiatnakin"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallKrungthai"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallLHB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallMICB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallMizuho"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallSCB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallSC"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallSMTB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallSM"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallTCRB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallThanachart"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallTisco"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallTMB"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallOUB"></ktb-icon>
    </div>
    <div class="icon-container">
      <h1> 40px Bank Icons </h1>
      <ktb-icon class="icon-margin" name="bigANZ"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigBangkok"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigBAA"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigBoAm"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigBoAy"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigBoCh"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigBNP"></ktb-icon>
      <ktb-icon class="icon-margin" name="bigCIMB"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigCiti"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigDeut"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigGHB"></ktb-icon>
      <ktb-icon class="icon-margin" name="bigGSB"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigHSBC"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigIOB"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigICB"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigIslamic"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigMorgan"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigKasikorn"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigKiatnakin"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigKrungthai"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigLHB"></ktb-icon>
      <ktb-icon class="icon-margin" name="bigMICB"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigMizuho"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigSCB"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigSC"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigSMTB"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigSM"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigTCRB"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigThanachart"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigTisco"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigTMB"></ktb-icon>
      <ktb-icon class="icon-margin" name="bigOUB"></ktb-icon> 
    </div>
  `
})

export const Billers = () => ({
  component: IconsComponent,
  template: `
    <div class="icon-container">
      <h1> 24px Biller Icons </h1>
      <ktb-icon class="icon-margin" name="smallBroadband"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallAISC"></ktb-icon> 
      <ktb-icon class="icon-margin" name="smallAIS"></ktb-icon> 
      <ktb-icon class="icon-margin" name="smallDtac"></ktb-icon> 
      <ktb-icon class="icon-margin" name="smallKTC"></ktb-icon> 
      <ktb-icon class="icon-margin" name="smallMEA"></ktb-icon> 
      <ktb-icon class="icon-margin" name="smallMWA"></ktb-icon> 
      <ktb-icon class="icon-margin" name="smallPEA"></ktb-icon> 
      <ktb-icon class="icon-margin" name="smallPWA"></ktb-icon> 
      <ktb-icon class="icon-margin" name="smallTRD"></ktb-icon> 
      <ktb-icon class="icon-margin" name="smallTOT"></ktb-icon>
      <ktb-icon class="icon-margin" name="smallTrue"></ktb-icon> 
    </div>
    <div class="icon-container">
      <h1> 40px Biller Icons </h1>
      <ktb-icon class="icon-margin" name="bigBroadband"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigAISC"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigAIS"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigDtac"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigKTC"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigMEA"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigMWA"></ktb-icon>
      <ktb-icon class="icon-margin" name="bigPEA"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigPWA"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigTRD"></ktb-icon> 
      <ktb-icon class="icon-margin" name="bigTOT"></ktb-icon>
      <ktb-icon class="icon-margin" name="bigTrue"></ktb-icon> 
    </div>
  `
})

export const Contextual = () => ({
  component: IconsComponent,
  template: `
    <div class="icon-container">
      <ktb-icon class="icon-margin" name="account"></ktb-icon>
      <ktb-icon class="icon-margin" name="archive"></ktb-icon> 
      <ktb-icon class="icon-margin" name="book"></ktb-icon> 
      <ktb-icon class="icon-margin" name="creditCard"></ktb-icon> 
      <ktb-icon class="icon-margin" name="graphs"></ktb-icon> 
      <ktb-icon class="icon-margin" name="homeWork"></ktb-icon> 
      <ktb-icon class="icon-margin" name="image"></ktb-icon> 
      <ktb-icon class="icon-margin" name="keyboard"></ktb-icon> 
      <ktb-icon class="icon-margin" name="news"></ktb-icon> 
    </div>
  `
})
