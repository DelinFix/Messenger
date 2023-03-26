import React from 'react'

import cls from 'classnames'

// images
import Anonim from 'assets/images/Anonimous.png'

export interface IAvatarProps extends Omit<JSX.IntrinsicElements['div'], 'className'> {
  className?: string
  src?: string | null
  isAnonymous?: boolean
  badge?: string
  children?: JSX.Element
}

const Avatar: React.FC<IAvatarProps> = props => {
  const { className, isAnonymous, children, style, ...rest } = props

  const avatarSrc = isAnonymous || !props.src ? Anonim : props.src

  return (
    <div
      data-testid={'avatar'}
      style={{ backgroundImage: `url(${avatarSrc})`, ...style }}
      className={cls(
        'relative rounded-full bg-cover bg-center bg-no-repeat  ',
        { 'bg-gray-100 border border-blue-400': isAnonymous || !props.src, 'bg-gray-400': props.src },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Avatar
