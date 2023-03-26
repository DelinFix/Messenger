import { StoryArg, StoryArgOptions } from 'types/EXPORT'

const SbArg = (argOptions: StoryArgOptions): StoryArg => {
  const { name, description, type, options, action, summary, detail, required } = argOptions

  const isAction = action || name.startsWith('on')
  let control = { type: argOptions.control }

  if (!argOptions.control && type) {
    switch (type) {
      case 'boolean': {
        control = { type: 'boolean' }
        break
      }
      case 'number': {
        control = { type: 'number' }
        break
      }
      case 'object': {
        control = { type: 'object' }
        break
      }
      case 'select': {
        control = { type: 'select' }
        break
      }
      case 'enum': {
        control = { type: 'inline-radio' }
        break
      }
      default: {
        control = { type: 'text' }
        break
      }
    }
  }

  return {
    name,
    description,
    type: { name: type || 'string', required },
    options,
    control,
    table: {
      type: {
        summary,
        detail
      }
    },
    action: isAction ? name : undefined
  }
}

export default { Arg: SbArg }
