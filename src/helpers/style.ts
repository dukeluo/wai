export const measureParagraph = (container: HTMLElement, content: string) => {
  const dataAttr = container.getAttributeNames().find((i) => i.startsWith('data-'))
  const tempContainer = document.createElement('div')
  const htmlString = `<p ${dataAttr} style="visibility: hidden; pointer-events: none;"><span ${dataAttr}>• </span>${content}</p>`

  tempContainer.innerHTML = htmlString

  const p = tempContainer.firstElementChild

  if (!p) return { width: 0, height: 0 }

  container.appendChild(p)

  const computedStyle = window.getComputedStyle(p)
  const width = Math.round(
    parseFloat(computedStyle.width) +
      parseFloat(computedStyle.paddingLeft) +
      parseFloat(computedStyle.paddingRight) +
      parseFloat(computedStyle.borderLeftWidth) +
      parseFloat(computedStyle.borderRightWidth) +
      parseFloat(computedStyle.marginLeft) +
      parseFloat(computedStyle.marginRight)
  )
  const height = Math.round(
    parseFloat(computedStyle.height) +
      parseFloat(computedStyle.paddingTop) +
      parseFloat(computedStyle.paddingBottom) +
      parseFloat(computedStyle.borderTopWidth) +
      parseFloat(computedStyle.borderBottomWidth) +
      parseFloat(computedStyle.marginTop) +
      parseFloat(computedStyle.marginBottom)
  )

  container.removeChild(p)

  return { width, height }
}

export const isParagraphMultipleLinesInW3 = (container: HTMLElement, content: string) => {
  const dataAttr = container.getAttributeNames().find((i) => i.startsWith('data-'))
  const tempContainer = document.createElement('div')
  const htmlString = `<p ${dataAttr} style="visibility: hidden; pointer-events: none;"><span ${dataAttr}>• </span>${content}</p>`

  tempContainer.innerHTML = htmlString

  const p = tempContainer.firstElementChild

  if (!p) return false

  container.appendChild(p)

  const computedStyle = window.getComputedStyle(p)
  const lineHeight = parseInt(computedStyle.lineHeight, 10)
  const width = parseInt(computedStyle.width, 10)

  container.removeChild(p)

  return lineHeight < width
}
