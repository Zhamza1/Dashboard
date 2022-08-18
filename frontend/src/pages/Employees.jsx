import React from 'react'
import {GridComponent,ColumnsDirective,ColumnDirective,Page,ExcelExport,Toolbar,PdfExport,Edit,Inject,Search} from '@syncfusion/ej2-react-grids'

import {employeesData,employeesGrid} from '../data/dummy'
import {Header} from '../components'
import { ToolbarAction } from '@syncfusion/ej2-react-richtexteditor'

const Employees = () => {
  return (
    <div>
      <Header category="Page" title="Employees"/>
        <GridComponent 
          id="gridcomp"
          dataSource={employeesData}
           allowPaging
           allowSorting 
           toolbar={['Search']}
           width="auto"
        >
          <ColumnsDirective>
            {employeesGrid.map((item,index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page,Search,Toolbar]} />
        </GridComponent>
      </div>
  )
}

export default Employees