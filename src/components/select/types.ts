export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export interface SelectContextType {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  selectedValue: string
  onChange: (value: string) => void
  options: SelectOption[]
}
