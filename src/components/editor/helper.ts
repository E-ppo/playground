export type StyleProperty = 'fontWeight' | 'fontStyle' | 'textDecoration'

export const getFormatValue = (format: StyleProperty): string => {
  switch (format) {
    case 'fontWeight':
      return 'bold'
    case 'fontStyle':
      return 'italic'
    case 'textDecoration':
      return 'underline'
  }
}

export const applyFormat = (range: Range, format: StyleProperty) => {
  const newNode = document.createElement('span')
  newNode.style[format] = getFormatValue(format)

  const fragment = range.extractContents()
  newNode.appendChild(fragment)
  range.insertNode(newNode)

  // 선택 상태 유지
  const selection = document.getSelection()
  if (selection) {
    selection.removeAllRanges()
    const newRange = document.createRange()
    newRange.selectNodeContents(newNode)
    selection.addRange(newRange)
  }
}

export const removeFormat = (range: Range, format: StyleProperty) => {
  const fragment = range.extractContents()
  const tempDiv = document.createElement('div')
  tempDiv.appendChild(fragment)

  // 스타일 제거
  const elementsWithStyle = tempDiv.querySelectorAll(`[style*="${format}"]`)
  elementsWithStyle.forEach((el) => {
    if (el instanceof HTMLElement) {
      el.style[format] = ''
      if (el.getAttribute('style') === '') {
        el.removeAttribute('style')
      }
    }
  })

  // 정리된 내용을 다시 삽입
  range.insertNode(tempDiv.firstChild as Node)

  // 선택 상태 유지
  const selection = document.getSelection()
  if (selection) {
    selection.removeAllRanges()
    selection.addRange(range)
  }
}
