const render = (el, data, compo) => {
  if (!data || !data.length) {
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    td.textContent = '暂无数据'
    tr.appendChild(td)
    el.innerHTML = ''
    el.appendChild(tr)
    return
  }

  el.innerHTML = ''
  data.forEach(row => {
    const tr = document.createElement('tr')
    tr.__data__ = row

    const checkboxTd = document.createElement('td')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', e => {
      compo.dispatchEvent(new CustomEvent('select-change', {
        detail: {
          checked: e.target.checked,
          row: e.target.parentNode.parentNode.__data__
        }
      }))
    })
    checkboxTd.appendChild(checkbox)

    tr.appendChild(checkboxTd)

    Object.keys(row).forEach(key => {
      const td = document.createElement('td')
      td.textContent = row[key]
      tr.appendChild(td)
    })

    el.appendChild(tr)
  })
}