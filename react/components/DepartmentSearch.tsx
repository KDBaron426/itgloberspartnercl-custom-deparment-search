import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import { SearchBar } from 'vtex.store-components'
import { useCssHandles } from 'vtex.css-handles'

import QUERY_VALUE from '../graphql/getDepartmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState('')

  const CSS_HANDLES = ['department__container']
  const handles = useCssHandles(CSS_HANDLES)

  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div className={handles.department__container}>
      <DepartmentGroup
        departments={data?.categories[0]?.children}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="¿Qué esta buscando?"
        displayMode="search-and-clear-buttons"
      />
    </div>
  )
}

export default DepartmentSearch
