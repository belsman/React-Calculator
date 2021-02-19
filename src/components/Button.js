function Button({ buttonName, buttonClass }) {
  return (
    <button type="button" className={ buttonClass }>
      { buttonName }
    </button>
  );
}

export default Button;
