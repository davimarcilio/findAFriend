import * as Select from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface OptionsProps {
  value: string
  label: string
}
interface SelectComponentProps extends ComponentProps<typeof Select.Root> {
  selectLabel: string
  name: string
  id: string
  className: string
  options: OptionsProps[]
}

export function SelectComponent({
  id,
  name,
  selectLabel,
  className,
  options,
  ...props
}: SelectComponentProps) {
  return (
    <Select.Root {...props} required name={name}>
      <Select.Trigger
        name={name}
        id={id}
        className={`${className} disabled:cursor-not-allowed disabled:opacity-60 `}
      >
        <Select.Value placeholder={name} />
        <Select.Icon>
          <CaretDown size={16} weight="bold" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="bg-blue-900 px-4 py-2 rounded-md flex justify-center items-center">
          <Select.Viewport>
            <Select.Group className="rounded-2xl">
              <Select.Label className="text-sm opacity-70 font-light">
                {selectLabel}
              </Select.Label>
              {options.map((option) => {
                return (
                  <Select.Item
                    key={option.value}
                    className="cursor-pointer focus:opacity-80"
                    value={option.value}
                  >
                    <Select.ItemText className="text-lg font-bold">
                      {option.label}
                    </Select.ItemText>
                  </Select.Item>
                )
              })}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
