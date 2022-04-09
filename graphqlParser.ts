/* eslint-disable import/no-absolute-path */

type Definition = {
  name: string
  relations: Definition[]
}

const parseGraphqlQuery = () => {
  const gqlsource: any = require('__template__').default

  const definitions: any[] = gqlsource.definitions
  const operationsDef = definitions.find(item => {
    if (item.kind === 'OperationDefinition') {
      return true
    }

    return false
  })

  const findRelations = (collections: any[]) => {
    let result: any[] = []
    collections.forEach(def => {
      const obj: any = { name: '', relations: [] }

      if (!def.selectionSet && def.kind === 'Field') {
        return
      }

      if (def.kind === 'Field') {
        obj.name = def.name.value
      }

      if (def.kind === 'FragmentSpread') {
        const fragmentName = def.name.value
        const fragment = definitions.find(item => {
          return (
            item.kind === 'FragmentDefinition' &&
            item.name.value === fragmentName
          )
        })

        if (fragment) {
          result = findRelations(fragment.selectionSet.selections)
          return
        }
      }

      if (def.selectionSet?.selections.length > 0) {
        obj.relations = [
          ...obj.relations,
          ...findRelations(def.selectionSet.selections),
        ]
      }

      result.push(obj)
    })

    return result
  }

  // query root
  const root = operationsDef.selectionSet.selections[0]
  // const rootQueryName = root.name.value
  const relations = findRelations(root.selectionSet.selections)
  const result = {
    name: root.name.value.replace('_by_pk', ''),
    relations,
  }
  return result as Definition
}

console.log(JSON.stringify(parseGraphqlQuery(), null, 2))
