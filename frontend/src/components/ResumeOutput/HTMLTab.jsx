function HTMLTab({ html }) {
  return (
    <iframe
      title="resume"
      srcDoc={html}
      className="w-full h-[700px] bg-white rounded-xl"
    />
  );
}

export default HTMLTab;