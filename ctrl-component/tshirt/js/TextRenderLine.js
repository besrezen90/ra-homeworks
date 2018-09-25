const TextRenderLine = ({value, onChange}) => {
	
	const handleTextRender = (event) => {
		onChange(event.target.value)
	}

	return (
		<div className="type-text">
		  <textarea name="text" id="font-text" cols={30} rows={2} placeholder="Введите текст для футболки" defaultValue={""} onChange={handleTextRender} value={value}/>
		</div>
	);
};
