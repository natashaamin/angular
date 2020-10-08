import { Meta, moduleMetadata } from '@storybook/angular'
import { GridComponent, GridModule, ContentAlignments, ItemAlignments } from 'ktb-ui-components/grid'

export default {
  title: 'Grid',
  component: GridComponent,
  decorators: [
    moduleMetadata({
      imports: [GridModule]
    })
  ],
  argTypes: {
    cols: {
      label: 'Columns',
      control: {
        type: 'text'
      }
    },
    justifyContent: {
      label: 'Content Alignments',
      control: {
        type: 'inline-radio',
        options: Object.values(ContentAlignments)
      }
    },
    justifyItems: {
      label: 'Items Alignments',
      control: {
        type: 'inline-radio',
        options: Object.values(ItemAlignments)
      }
    },
    alignContent: {
      label: 'Items Alignments',
      control: {
        type: 'inline-radio',
        options: Object.values(ContentAlignments)
      }
    },
    alignItems: {
      label: 'Items Alignments',
      control: {
        type: 'inline-radio',
        options: Object.values(ItemAlignments)
      }
    }
  }
} as Meta

const AlignmentWithoutHeight = (args: GridComponent) => ({
  component: GridComponent,
  props: args,
  template: `
    <div 
      ktbGrid 
      [cols]="cols" 
      [gap]="gap" 
      [justifyContent]="justifyContent" 
      [alignContent]="alignContent" 
      [justifyItems]="justifyItems" 
      [alignItems]="alignItems"
    >
      <div style="border: 1px solid red; height:100px;"></div>
      <div style="border: 1px solid blue; height:100px"></div>
      <div style="border: 1px solid blue; height:100px"></div>
      <div style="border: 1px solid blue; height:100px"></div>
    </div>
  `
})

const AlignmentWithHeight = (args: GridComponent) => ({
  component: GridComponent,
  props: args,
  template: `
    <div 
      ktbGrid 
      [cols]="cols" 
      [gap]="gap" 
      [justifyContent]="justifyContent" 
      [alignContent]="alignContent" 
      [justifyItems]="justifyItems" 
      [alignItems]="alignItems"
    >
      <div style="border: 1px solid black; height:200px; background: red"></div>
      <div style="border: 1px solid black; height:50px; background: blue"></div>
      <div style="border: 1px solid black; height:70px; background: green"></div>
    </div>
  `
})

export const Basic = AlignmentWithoutHeight.bind({})
Basic.args = {
  cols: 3,
  gap: '1.5rem',
  justifyContent: 'space-evenly',
  alignItems: 'center'
}

export const AdvancedColumns = AlignmentWithoutHeight.bind({})
AdvancedColumns.args = {
  cols: '120px 180px 120px',
  gap: '2rem'
}

export const Alignments = AlignmentWithHeight.bind({})
Alignments.args = {
  cols: 3,
  gap: '3.5rem'
}
