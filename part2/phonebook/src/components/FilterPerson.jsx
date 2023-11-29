import { Input } from "./Input";

export function FilterPerson ({ filterValue, handleFilterChange }) {
  return (
    <div className="flex gap-2 items-center">
      <p>Filter shown with</p>
      <Input
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="filter"
      />
    </div>
  )
}