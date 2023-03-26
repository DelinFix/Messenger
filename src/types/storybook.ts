export type StoryArgType = 'boolean' | 'number' | 'object' | 'select' | 'enum' | 'string'
export type StoryArgControl =
  | null
  | 'boolean'
  | 'number'
  | 'range'
  | 'object'
  | 'file'
  | 'radio'
  | 'inline-radio'
  | 'check'
  | 'inline-check'
  | 'select'
  | 'multi-select'
  | 'text'
  | 'color'
  | 'date'

export type StoryArg = {
  name: string
  description: string
  type: { name: StoryArgType; required?: boolean }
  options?: string[]
  control: { type?: StoryArgControl }
  defaultValue?: unknown
  table?: {
    type: {
      summary?: string
      detail?: string
    }
  }
  action?: string
}

export type StoryArgOptions = {
  name: string
  description: string
  type?: StoryArgType
  options?: string[]
  control?: StoryArgControl
  action?: boolean
  required?: boolean
  summary?: string
  detail?: string
}
