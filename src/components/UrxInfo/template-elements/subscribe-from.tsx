export function SubscribeFrom(props) {
  const { element, onSelect, selected } = props;
  const elementProps = {};
  if (typeof onSelect === "function") {
    elementProps.onClick = () => {
      onSelect(element);
    };
  }
  return (
    <div className={`subscribe-from selectable ${selected ? 'selected': ''}`} {...elementProps}>
      <p className="label-01" dangerouslySetInnerHTML={{
            __html: element.attributes.content || element.attributes.defaultContent,
          }} />
      <img alt={element.attributes.content} src={element.attributes.image} />
    </div>
  );
}
