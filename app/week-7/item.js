export default function Item({ name, quantity, category, onSelect }) {
    return (
      <li onClick={() => onSelect(name)} className="cursor-pointer">
        {name} ({quantity}) - {category}
      </li>
    );
  }