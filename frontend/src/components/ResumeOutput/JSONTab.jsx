function JSONTab({ data }) {
  return (
    <pre className="bg-slate-950 p-4 rounded overflow-auto h-[700px] text-sm">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}

export default JSONTab;