const FontSelector = ({fonts, selected, onSelect}) => {
    const getTypeFont = (event) => {
        fonts.filter(font => font.name === event.target.name ? onSelect(font) : false)
    }
    
    const Fonts = fonts.map((font, idx) => {
        return (
            <div key={idx} className="grid center font-item">
              <input type="radio" name={font.name} defaultValue={font.name} id={font.name} onChange={getTypeFont} checked={selected && selected.name === font.name}/>
              <label htmlFor={font.name} className="grid-1">
                <PictureFont text={'react'} path={font.path}/>
              </label>
            </div>
        )
    })

    return (
        <div className="font-picker">
            {Fonts}
        </div>   
    )
};