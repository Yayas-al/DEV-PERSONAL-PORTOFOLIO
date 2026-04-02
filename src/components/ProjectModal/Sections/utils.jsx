export const renderDesc = (desc, customPClass = "", customLiClass = "", customUlClass = "") => {
  if (!desc) return null;
  const lines = desc.split('\n');
  const elements = [];
  let currentList = [];

  lines.forEach((line, i) => {
    line = line.trim();
    if (!line) return;

    if (line.startsWith('•') || line.startsWith('-')) {
      currentList.push(
        <li key={`li-${i}`} className={`ml-6 list-disc mb-3 pl-2 marker:text-black ${customLiClass}`}>
          {line.substring(1).trim()}
        </li>
      );
    } else {
      if (currentList.length > 0) {
        elements.push(<ul key={`ul-${i}`} className={`mb-8 space-y-3 ${customUlClass}`}>{currentList}</ul>);
        currentList = [];
      }
      elements.push(<p key={`p-${i}`} className={`mb-6 last:mb-0 text-justify ${customPClass}`}>{line}</p>);
    }
  });

  if (currentList.length > 0) {
    elements.push(<ul key={`ul-end`} className={`mb-8 space-y-3 ${customUlClass}`}>{currentList}</ul>);
  }

  return <>{elements}</>;
};
