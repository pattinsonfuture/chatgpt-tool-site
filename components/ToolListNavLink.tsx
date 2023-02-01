type Props = {
  toollist: ToolList;
};

function ToolListNavLink({ toollist }: Props) {
  return (
    <div className="mb-4">
      <div className="text-left font-bold text-[#403F3F]">{toollist.label}</div>
      <div className="ml-6">
        {toollist.lists.map((toolname) => (
          <div key={toolname} className="text-white text-lg">
            {toolname}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolListNavLink;
