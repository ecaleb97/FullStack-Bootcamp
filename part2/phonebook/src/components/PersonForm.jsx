import { Button } from './Button'
import { Input } from './Input'

export function PersonForm ({
  nameValue,
  numberValue,
  handleNameChange,
  handleNumberChange,
  handleSubmit
}) {
  return (
    <form   
      className='flex gap-2'
      onSubmit={handleSubmit}
    >
      <Input 
        value={nameValue}
        onChange={handleNameChange}
        placeholder={'name'}
      />
      <Input 
        value={numberValue}
        onChange={handleNumberChange}
        placeholder={'number'}
      />
      <Button text="Add Contact" />
    </form>
  )
}