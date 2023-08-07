export function measureParagraph(container: HTMLElement, content: string) {
  const tempParagraph = document.createElement('p')

  tempParagraph.style.visibility = 'hidden'
  tempParagraph.style.pointerEvents = 'none'
  tempParagraph.textContent = '•' + content
  container.appendChild(tempParagraph)

  const width = tempParagraph.clientWidth
  const height = tempParagraph.clientHeight

  container.removeChild(tempParagraph)

  return { width, height }
}
