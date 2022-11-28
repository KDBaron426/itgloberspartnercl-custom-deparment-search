import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

type Props = {
  departments: [Category]
  handleSetSlug: any
}

type Category = {
  id: number
  name: string
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }: Props) => {
  const CSS_HANDLES = ['department__select']
  const handles = useCssHandles(CSS_HANDLES)

  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  }

  const departmentOptions: any = departments.map((department: Category) => {
    return (
      <option value={department.slug} key={department.id}>
        {department.name}
      </option>
    )
  })

  return (
    <select
      onChange={onHandleSetSlug}
      defaultValue="value0"
      className={handles.department__select}
    >
      <option disabled value="value0">
        Seleccione una opción
      </option>
      {departmentOptions}
    </select>
  )
}

export default DepartmentGroup
