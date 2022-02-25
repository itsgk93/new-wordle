export let dataSet = [
  {
    id: 13,
    job: 'Accountant',
    name: 'John',
    target: 4,
  },
  {
    id: 103,
    job: 'Developer',
    name: 'Mary',
    target: 9,
  },
  {
    id: 18,
    job: 'Developer',
    name: 'John',
    target: 7,
  },
  {
    id: 85,
    job: 'Architect',
    name: 'Dave',
    target: 3,
  },
  {
    id: 39,
    job: 'Developer',
    name: 'Mary',
    target: 16,
  },
]

const newData = []

dataSet.forEach((d) => {
  const index = newData.findIndex((x) => x.name === d.name)
  if (index != -1) {
    newData[index] = {
      name: newData[index].name,
      developer:
        newData[index].developer === 0
          ? d.target
          : newData[index].developer + d.target,
      architect:
        newData[index].architect === 0
          ? d.target
          : newData[index].architect + d.target,
      accountant:
        newData[index].accountant === 0
          ? d.target
          : newData[index].accountant + d.target,
    }
  } else {
    newData.push({
      name: d.name,
      developer: d.job == 'Developer' ? d.target : 0,
      architect: d.job == 'Architect' ? d.target : 0,
      accountant: d.job == 'Accountant' ? d.target : 0,
    })
  }
})
