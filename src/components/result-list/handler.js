import { useState, useEffect, useCallback } from 'react'

const SEARCHBAR_HEIGHT = 63

export const useScrollHeight = () => {
  const [height, setHeight] = useState(SEARCHBAR_HEIGHT)
  const handleChangeHeight = useCallback(() => {
    const height = window.innerHeight - SEARCHBAR_HEIGHT
    setHeight(height)
  }, [])
  useEffect(() => {
    window.addEventListener('resize', handleChangeHeight)
    handleChangeHeight()
    return () => {
      window.removeEventListener('resize', handleChangeHeight)
    }
  }, [handleChangeHeight])

  return height
}
