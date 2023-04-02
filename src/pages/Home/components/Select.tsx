import * as Select from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'

interface SelectComponentProps {
  selectLabel: string
  name: string
  id: string
  className: string
}

export function SelectComponent({
  id,
  name,
  selectLabel,
  className,
}: SelectComponentProps) {
  return (
    <Select.Root name={name}>
      <Select.Trigger
        name={name}
        id={id}
        className={className}
        // "flex justify-center items-center border gap-1 py-4 px-2 rounded-2xl"
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
              <Select.Item
                className="cursor-pointer focus:opacity-80"
                value="SC"
              >
                <Select.ItemText className="text-lg font-bold">
                  SC
                </Select.ItemText>
              </Select.Item>
              <Select.Item
                className="cursor-pointer focus:opacity-80"
                value="RJ"
              >
                <Select.ItemText className="text-lg font-bold">
                  RJ
                </Select.ItemText>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
