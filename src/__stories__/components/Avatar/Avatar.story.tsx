import { Story, ComponentMeta } from '@storybook/react'
import Avatar, { IAvatarProps } from 'components/Avatar'

// components
// import { Avatar, IAvatarProps } from 'components/EXPORT'

// modules
import { Sb } from 'modules/EXPORT'

export default {
  component: Avatar,
  title: 'Components/Avatar Story',
  argTypes: {
    className: Sb.Arg({
      name: 'Class',
      description: 'Set avatar class'
    }),
    src: Sb.Arg({
      name: 'Src',
      description: 'Set avatars image source'
    }),
    isAnonymous: Sb.Arg({
      name: 'isAnonymous',
      description: 'Set avatars isAnonymous'
    }),
    badge: Sb.Arg({
      name: 'Badge',
      description: 'Set avatars badge'
    })
  }
} as ComponentMeta<typeof Avatar>

type StoryProps = Story<IAvatarProps>
export const AvatarStory: StoryProps = args => {
  return <Avatar {...args} />
}

AvatarStory.args = {
  className: 'w-20 h-20',
  src: 'https://via.placeholder.com/64',
  isAnonymous: false
}
