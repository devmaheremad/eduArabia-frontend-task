import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import HeadBtnsTable from './HeadBtnsTable'
import { PDFIcon } from '../icons'



const Invoice = React.forwardRef<HTMLDivElement, any>((props, ref) => {

  //
  return (
    <div style={{ width: '100%' }} ref={ref}>
      {props.children}{' '}
    </div>
  )
})


const PrintButton: React.FC<any> = ({ invoiceData, dataStore, children }) => {
  const componentRef = useRef<HTMLDivElement>(null)
  const handlePrint = useReactToPrint({
    content: () => {
      return componentRef.current
    },
  })

  return (
    <div>
      <HeadBtnsTable
        onClick={handlePrint}
        svgIcon={<PDFIcon />}
        color="error"
      />

      <div style={{ display: 'none' }}>
        <Invoice
          ref={componentRef}
          dataStore={dataStore}
          invoiceData={invoiceData}
          children={children}
        />
      </div>
    </div>
  )
}

export default PrintButton
