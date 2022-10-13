export default function Modal({ children }) {
  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/50" />
      <div className="p-5 rounded-md absolute top-40 left-1/2 -translate-x-1/2">
        {children}
      </div>
    </>
  );
}
