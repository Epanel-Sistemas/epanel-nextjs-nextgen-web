'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import Title from '~/components/Title'

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="flex justify-between w-full p-8 bg-gray-200 shadow-lg">
      <Link href="/home">
        <Title>
          <span data-testid="epanel-web">Epanel Web</span>
        </Title>
      </Link>
      <button type="button" data-testid="click-button" onClick={handleClick}>
        click me
      </button>
      {isClicked && <span data-testid="clicked"></span>}
    </div>
  )
}

export default Header
