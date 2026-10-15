// Splits plain text into words and reveals them one by one.
export default function StaggerText({ text, as: Tag = 'span', icon, className = '', ...rest }) {
  const words = text.split(' ');
  return (
    <Tag className={className} {...rest}>
      {icon && <i className={icon} />}{' '}
      {words.map((word, idx) => (
        <span
          key={idx}
          className="stagger-word"
          style={{ animationDelay: `${idx * 0.12}s` }}
        >
          {word}{' '}
        </span>
      ))}
    </Tag>
  );
}
