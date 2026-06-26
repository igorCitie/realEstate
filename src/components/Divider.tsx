import circular from "../assets/circular.png";

export default function Divider() {
  return (
    <div className="flex items-center justify-center bg-clay py-12">
      <img
        src={circular}
        alt="Jocionara Lima"
        className="h-48 w-48 object-contain"
      />
    </div>
  );
}
