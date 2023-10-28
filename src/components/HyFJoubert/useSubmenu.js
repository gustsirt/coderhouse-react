import { useState } from 'react'

export default function useSubmenu() {

  const [submenu, setSubmenu] = useState(false)

  function handleSubmenu () {
    setSubmenu(!submenu)
  }

  return [submenu, handleSubmenu]
}
