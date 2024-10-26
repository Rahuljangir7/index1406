const InputBox = ({ inpVal }) => {
  return (
    <form className="mb-3">
      <input
        type="text"
        readOnly
        value={inpVal}
        placeholder="2 + 2 = 4"
        className="w-full rounded-sm outline-none text-end px-3 h-8"
      />
    </form>
  );
};

export default InputBox;
