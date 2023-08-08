export function measureParagraph(container: HTMLElement, content: string) {
  const dataAttr = container.getAttributeNames().find((i) => i.startsWith('data-'))
  const tempContainer = document.createElement('div')
  const htmlString = `<p ${dataAttr} style="visibility: hidden; pointer-events: none;"><span ${dataAttr}>• </span>${content}</p>`

  tempContainer.innerHTML = htmlString

  const p = tempContainer.firstElementChild

  if (!p) return { width: 0, height: 0 }

  container.appendChild(p)
  const width = p.clientWidth
  const height = p.clientHeight

  container.removeChild(p)

  return { width, height }
}
