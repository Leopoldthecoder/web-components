const renderSelect = (shadowRoot, data, compo) => {
  const input = shadowRoot.querySelector('input')
  const ul = shadowRoot.querySelector('ul')
  input.value = ''
  input.disabled = false
  ul.innerHTML = ''
  if (!data || !data.length) {
    input.disabled = true
    return
  }

  data.forEach(option => {
    const li = document.createElement('li')
    li.textContent = option

    li.addEventListener('mousedown', () => {
      input.value = option
      ul.style.display = 'none'
      compo.dispatchEvent(new CustomEvent('change', {
        detail: {
          value: option
        }
      }))
    })
    ul.appendChild(li)
  })
}